import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const HERO_IMG =
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80";

export default function HeroVisual() {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 110, damping: 16 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-9, 9]), { stiffness: 110, damping: 16 });

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
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.25 }}
      className="group relative h-full w-full"
    >
      <div className="absolute inset-0 overflow-hidden rounded-sm border border-white/15">
        <img
          src={HERO_IMG}
          alt="Match-day baseball jersey in performance knit"
          loading="eager"
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
        <div className="speed-lines absolute inset-0 opacity-60 mix-blend-overlay" />
        <span className="absolute left-4 top-4 inline-block bg-volt px-3 py-1.5 font-display text-[10px] font-black uppercase italic tracking-[0.28em] text-ink shadow-[0_8px_24px_-8px_rgba(184,240,74,0.8)]">
          New Season '26
        </span>
        <div className="absolute inset-x-0 bottom-0 border-t border-gold/50">
          <div className="space-y-1.5 px-6 py-5">
            <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-volt-light">
              135–160 GSM · Sublimated
            </p>
            <p className="font-display text-xl font-black uppercase italic leading-tight tracking-tight text-white">
              Match-Day Baseball Jersey
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Your crest, sponsor panels &amp; numbering
            </p>
          </div>
        </div>
      </div>
        </div>
      </div>
    </motion.div>
  );
}