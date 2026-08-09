import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";

function CameraRig() {
  useFrame((state, delta) => {
    const targetX = state.pointer.x * 0.7;
    const targetY = state.pointer.y * 0.4;
    state.camera.position.x += (targetX - state.camera.position.x) * 3.5 * delta;
    state.camera.position.y += (targetY - state.camera.position.y) * 3.5 * delta;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function CoreBall({ size = 1.3, color = "#D4AF37" }) {
  const mesh = useRef();
  useFrame((_, delta) => {
    mesh.current.rotation.y += delta * 0.28;
    mesh.current.rotation.x += delta * 0.1;
  });
  return (
    <group position={[0, 0.15, 0]}>
      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={1.1}>
        <mesh ref={mesh}>
          <sphereGeometry args={[size * 0.95, 64, 64]} />
          <MeshDistortMaterial
            color={color}
            distort={0.42}
            speed={1.8}
            roughness={0.22}
            metalness={0.75}
          />
        </mesh>
      </Float>
    </group>
  );
}

function OrbitRing({ radius = 2.05, tilt = 1.15, color = "#6E87B8", speed = 0.12 }) {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.z += delta * speed;
  });
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.014, 8, 160]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </mesh>
  );
}

function SpinnerRods() {
  const group = useRef();
  useFrame((_, delta) => {
    group.current.rotation.x += delta * 0.14;
    group.current.rotation.z -= delta * 0.09;
  });
  return (
    <group ref={group}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2, i * (Math.PI / 3), 0]}>
          <boxGeometry args={[0.028, 5.4, 0.028]} />
          <meshBasicMaterial color={i === 1 ? "#D4AF37" : "#55688F"} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function WireCore() {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.2;
    ref.current.rotation.y += delta * 0.15;
  });
  return (
    <Float speed={3} rotationIntensity={1.4} floatIntensity={0.6}>
      <mesh ref={ref} position={[1.8, -1.3, -0.5]} scale={0.42}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#8FA3C8" wireframe transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 6, 5]} intensity={1.7} />
      <pointLight position={[-5, -2, 4]} color="#D4AF37" intensity={40} />
      <pointLight position={[3, -3, -3]} color="#3E8E7E" intensity={22} />
    </>
  );
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 9], fov: 42 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
        <SceneLights />
        <CameraRig />
        <CoreBall />
        <OrbitRing radius={2.05} tilt={1.2} color="#6E87B8" />
        <OrbitRing radius={2.35} tilt={0.4} color="#D4AF37" opacity={0.32} speed={-0.08} />
        <SpinnerRods />
        <WireCore />
        <Sparkles count={110} scale={[15, 9, 6]} size={2.2} speed={0.35} color="#F0D77B" />
      </Canvas>
    </div>
  );
}

export function PromoCanvas() {
  return (
    <div className="relative h-72 w-full overflow-hidden sm:h-96">
      <Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <SceneLights />
        <CameraRig />
        <CoreBall size={0.95} />
        <OrbitRing radius={1.5} tilt={1.2} color="#6E87B8" />
        <OrbitRing radius={1.75} tilt={0.4} color="#D4AF37" opacity={0.35} />
        <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.4}>
          <mesh position={[-2.2, 1.1, 0]}>
            <torusKnotGeometry args={[0.42, 0.14, 96, 12]} />
            <meshStandardMaterial color="#8FA3C8" metalness={0.85} roughness={0.25} />
          </mesh>
        </Float>
        <Sparkles count={70} scale={[10, 7, 5]} size={2} speed={0.5} color="#F0D77B" />
      </Canvas>
    </div>
  );
}

function ThreadSpools() {
  const group = useRef();
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      child.position.y = Math.sin(t * 1.1 + i * 1.3) * 0.6;
      child.rotation.z += delta * 0.5;
    });
  });
  return (
    <group ref={group}>
      {[-2.6, -1.3, 0, 1.3, 2.6].map((x, i) => (
        <mesh key={x} position={[x, 0, 0]}>
          <boxGeometry args={[0.035, 2.4, 0.035]} />
          <meshBasicMaterial color={i % 2 ? "#D4AF37" : "#55688F"} transparent opacity={0.55} />
        </mesh>
      ))}
    </group>
  );
}

export function ThreadCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <SceneLights />
        <SpinnerRods />
        <ThreadSpools />
        <Float speed={2} floatIntensity={1.2}>
          <mesh>
            <torusGeometry args={[0.8, 0.28, 12, 64]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.3} />
          </mesh>
        </Float>
        <Sparkles count={60} scale={[11, 7, 4]} size={2} speed={0.4} color="#F0D77B" />
      </Canvas>
    </div>
  );
}