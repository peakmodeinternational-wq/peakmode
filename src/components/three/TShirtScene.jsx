import { useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Float,
  OrbitControls,
  Sparkles,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

const BASE = import.meta.env.BASE_URL || "/";

useGLTF.setDecoderPath(`${BASE}models/draco/gltf/`);

const TARGET_HEIGHT = 1.42;

function JerseyModel() {
  const { scene } = useGLTF(`${BASE}models/jersey.glb`);
  const group = useRef(null);

  useLayoutEffect(() => {
    if (!group.current) return;
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);
    if (size.y > 1e-6) {
      const s = TARGET_HEIGHT / size.y;
      group.current.scale.set(s, s, s);
      group.current.position.set(
        -center.x * s,
        -center.y * s,
        -center.z * s
      );
    }
  }, [scene]);

  useEffectCleanup(scene);

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

function useEffectCleanup(scene) {
  useMemo(() => {
    return () => {
      scene.traverse((o) => {
        if (o.isMesh) {
          o.geometry?.dispose?.();
          const mats = Array.isArray(o.material) ? o.material : [o.material];
          mats.forEach((m) => {
            Object.values(m).forEach((v) => {
              if (v && v.isTexture) v.dispose();
            });
            m.dispose?.();
          });
        }
      });
    };
  }, [scene]);
}

function GlowRing() {
  const ref = useRef(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z += 0.0012;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.3, 0, 0]} position={[0, 0, 0]}>
      <torusGeometry args={[2.4, 0.018, 8, 160]} />
      <meshBasicMaterial color="#D9B45B" transparent opacity={0.35} />
    </mesh>
  );
}

function HaloRing() {
  return (
    <mesh rotation={[Math.PI / 2.35, 0, 0]} position={[0, 0, 0]}>
      <torusGeometry args={[2.9, 0.005, 8, 200]} />
      <meshBasicMaterial color="#9FB4D4" transparent opacity={0.25} />
    </mesh>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 5]} intensity={1.9} />
      <directionalLight position={[-4, 2, -3]} color="#9FB4D4" intensity={0.9} />
      <pointLight position={[-2.2, 0.6, 2.4]} color="#D9B45B" intensity={28} />
      <pointLight position={[2.4, -0.6, -2]} color="#F2DC98" intensity={16} />
    </>
  );
}

function Rig() {
  useFrame((state, delta) => {
    const tx = state.pointer.x * 0.5;
    const ty = state.pointer.y * 0.28;
    state.camera.position.x += (tx - state.camera.position.x) * 2.5 * delta;
    state.camera.position.y += (ty - state.camera.position.y) * 2.5 * delta;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export function TShirtScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.1, 4.2], fov: 38 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <SceneLights />
      <Rig />
      <Float speed={1.6} rotationIntensity={0.16} floatIntensity={0.5}>
        <JerseyModel />
      </Float>
      <GlowRing />
      <HaloRing />
      <Sparkles
        count={110}
        scale={[8.5, 7, 5]}
        size={2.4}
        speed={0.3}
        color="#F2DC98"
      />
      <ContactShadows
        position={[0, -0.95, 0]}
        opacity={0.55}
        scale={12}
        blur={2.6}
        far={4}
        color="#000000"
      />
      <OrbitControls
        enableZoom
        enablePan={false}
        minDistance={2.6}
        maxDistance={7}
        rotateSpeed={0.9}
        zoomSpeed={1.1}
        autoRotate
        autoRotateSpeed={1.15}
        target={[0, 0, 0]}
        makeDefault
      />
    </Canvas>
  );
}

export { TShirtScene as default };