import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const HERO_IMG =
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80";
const CUTOUT = import.meta.env.BASE_URL + "hero-cutout.png";

const ANNOTATIONS = [
  {
    label: "Jersey",
    sub: "Sublimation knit",
    style: { left: "52%", top: "20%" },
    align: "left",
  },
  {
    label: "Shorts",
    sub: "4-way stretch",
    style: { left: "30%", top: "48%" },
    align: "right",
  },
  {
    label: "Trouser",
    sub: "Brushed fleece",
    style: { left: "70%", top: "74%" },
    align: "right",
  },
];

function Pin({ pin }) {
  const chip = (
    <span className="block max-w-[46%] bg-ink/85 px-2 py-1 backdrop-blur md:max-w-none md:px-2.5 md:py-1.5">
      <span className="block font-display text-[7px] font-black uppercase italic leading-none tracking-[0.22em] text-gold md:text-[9px] md:tracking-[0.24em]">
        {pin.label}
      </span>
      <span className="mt-0.5 hidden text-[8px] font-bold uppercase leading-none tracking-[0.2em] text-volt-light md:block">
        {pin.sub}
      </span>
    </span>
  );
  return (
    <div className="absolute" style={pin.style}>
      <div className="relative flex items-center" style={{ transform: "translateZ(70px)" }}>
        <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center md:h-3 md:w-3">
          <span className="blink absolute inline-flex h-full w-full rounded-full bg-gold/40" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(217,180,91,0.9)] md:h-2 md:w-2" />
        </span>
        {pin.align === "left" ? (
          <>
            <span className="h-px w-3 bg-gold/70 md:w-6" />
            {chip}
          </>
        ) : (
          <>
            {chip}
            <span className="h-px w-3 bg-gold/70 md:w-6" />
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

export default function HeroVisual() {
  const ref = useRef(null);
  const [fallback, setFallback] = useState(false);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [11, -11]), { stiffness: 110, damping: 16 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-14, 14]), { stiffness: 110, damping: 16 });
  const imgX = useTransform(mx, [0, 1], [10, -10]);
  const imgY = useTransform(my, [0, 1], [6, -6]);

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
        {fallback ? (
          <motion.img
            src={HERO_IMG}
            alt="Player in Peak Mode training kit preparing to strike the ball"
            loading="eager"
            style={{ x: imgX, y: imgY, transform: "translateZ(0) scale(1.12)" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <CutoutStage cutout={CUTOUT} onFail={() => setFallback(true)} imgX={imgX} imgY={imgY} />
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

function CutoutStage({ cutout, onFail, imgX, imgY }) {
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
        onError={onFail}
        alt="Player in Peak Mode training kit striking the ball, cut out"
        loading="eager"
        style={{ x: imgX, y: imgY, transform: "translateZ(42px)" }}
        className="float-slow absolute inset-x-0 bottom-12 mx-auto h-[74%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_34px_44px_rgba(0,0,0,0.55)]"
      />
      <div
        className="absolute bottom-12 left-1/2 h-5 w-56 -translate-x-1/2 rounded-[50%] bg-black/45 blur-md"
        style={{ transform: "translateZ(16px)" }}
      />
    </>
  );
}
