import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const HERO_IMG =
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80";

const ANNOTATIONS = [
  {
    label: "Shirt",
    sub: "Sublimation knit",
    style: { left: "50%", top: "24%" },
    align: "left",
  },
  {
    label: "Shorts",
    sub: "4-way stretch",
    style: { left: "34%", top: "50%" },
    align: "right",
  },
  {
    label: "Trouser",
    sub: "Brushed fleece",
    style: { left: "68%", top: "72%" },
    align: "right",
  },
];

function Pin({ pin }) {
  const chip = (
    <span className="block bg-ink/85 px-2.5 py-1.5 backdrop-blur">
      <span className="block font-display text-[9px] font-black uppercase italic leading-none tracking-[0.24em] text-gold">
        {pin.label}
      </span>
      <span className="mt-1 block text-[8px] font-bold uppercase leading-none tracking-[0.2em] text-volt-light">
        {pin.sub}
      </span>
    </span>
  );
  return (
    <div className="absolute hidden md:block" style={pin.style}>
      <div className="relative flex items-center" style={{ transform: "translateZ(70px)" }}>
        <span className="relative flex h-3 w-3 shrink-0 items-center justify-center">
          <span className="blink absolute inline-flex h-full w-full rounded-full bg-gold/40" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_rgba(217,180,91,0.9)]" />
        </span>
        {pin.align === "left" ? (
          <>
            <span className="h-px w-6 bg-gold/70" />
            {chip}
          </>
        ) : (
          <>
            {chip}
            <span className="h-px w-6 bg-gold/70" />
          </>
        )}
      </div>
    </div>
  );
}

function Caption() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 border-t border-gold/50"
      style={{ transform: "translateZ(45px)" }}
    >
      <div className="space-y-1.5 px-6 py-5">
        <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-volt-light">
          135–160 GSM · Sublimated
        </p>
        <p className="font-display text-xl font-black uppercase italic leading-tight tracking-tight text-white">
          Match-Day Training Kit
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
          Jersey · Shorts · Trouser — your crest, numbered
        </p>
      </div>
    </div>
  );
}

function CutoutStage({ cutout }) {
  return (
    <>
      <div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[80px]"
        style={{ transform: "translateZ(0)" }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/25"
        style={{ transform: "translateZ(14px)" }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/15"
        style={{ transform: "translateZ(8px)" }}
      />
      <motion.img
        src={cutout}
        alt="Player in Peak Mode training kit striking the ball, cut out"
        loading="eager"
        style={{ transform: "translateZ(42px)" }}
        className="float-slow absolute inset-x-0 bottom-12 mx-auto h-[74%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_34px_44px_rgba(0,0,0,0.55)]"
      />
      <div
        className="absolute bottom-12 left-1/2 h-5 w-56 -translate-x-1/2 rounded-[50%] bg-black/45 blur-md"
        style={{ transform: "translateZ(16px)" }}
      />
    </>
  );
}

export default function HeroVisual() {
  const ref = useRef(null);
  const [cutout, setCutout] = useState(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [11, -11]), { stiffness: 110, damping: 16 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-14, 14]), { stiffness: 110, damping: 16 });
  const imgX = useTransform(mx, [0, 1], [10, -10]);
  const imgY = useTransform(my, [0, 1], [6, -6]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const { removeBackground } = await import("@imgly/background-removal");
        const blob = await removeBackground(HERO_IMG, {
          output: { format: "image/png", quality: 1 },
          progress: () => {},
        });
        if (alive) setCutout(URL.createObjectURL(blob));
      } catch {
        if (alive) setCutout(null);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.25 }}
      className="group relative h-full w-full"
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-sm border border-white/15"
        style={{ transformStyle: "preserve-3d" }}
      >
        {cutout ? (
          <CutoutStage cutout={cutout} />
        ) : (
          <motion.img
            src={HERO_IMG}
            alt="Player in Peak Mode training kit preparing to strike the ball"
            loading="eager"
            style={{ x: imgX, y: imgY, transform: "translateZ(0) scale(1.12)", transformStyle: "preserve-3d" }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.16]"
          />
        )}
        <div
          className="speed-lines absolute inset-0 opacity-60 mix-blend-overlay"
          style={{ transform: "translateZ(30px)" }}
        />
        <span
          className="absolute left-4 top-4 inline-block bg-volt px-3 py-1.5 font-display text-[10px] font-black uppercase italic tracking-[0.28em] text-ink shadow-[0_8px_24px_-8px_rgba(184,240,74,0.8)]"
          style={{ transform: "translateZ(55px)" }}
        >
          New Season '26
        </span>
        {ANNOTATIONS.map((pin) => (
          <Pin key={pin.label} pin={pin} />
        ))}
        <Caption />
      </div>
    </motion.div>
  );
}
