import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_STATS, MARQUEE_ITEMS } from "../data/site";
import Marquee from "./Marquee";
import CountUp from "./CountUp";
import CircularBadge from "./CircularBadge";
import HeroVisual from "./HeroVisual";

const CHIPS = [
  { label: "OEKO-TEX®", className: "left-2 top-[14%] float-slow" },
  { label: "4-WAY STRETCH", className: "right-3 top-[24%] float-slow [animation-delay:-2s]" },
  { label: "MOQ 300+", className: "left-4 bottom-[18%] float-slow [animation-delay:-4s]" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-lines absolute inset-0" />
      <div className="stripes-h absolute inset-0" />
      <div className="speed-lines absolute inset-y-0 right-0 w-2/3" />
      <div className="absolute -right-8 top-24 h-40 w-4 rotate-[20deg] bg-gradient-to-b from-volt/40 to-transparent" />
      <div className="absolute left-0 top-0 h-full w-1 rotate-180 bg-gradient-to-b from-gold/10 to-transparent" />
      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-[110px]" />
      <div className="stripes-diag-soft absolute right-0 top-0 h-40 w-96 rotate-45 opacity-25" />

      <div className="container-x relative grid items-center gap-4 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="blink absolute inline-flex h-full w-full rounded-full bg-gold" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="eyebrow">Private Label & ODM Sportswear Manufacturer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-7 font-display text-[2.7rem] font-black uppercase leading-[0.96] tracking-tight sm:text-6xl lg:text-[4.6rem] xl:text-7xl"
          >
            Engineered
            <br />
            <span className="text-stroke">Performance.</span>
            <br />
            <span className="grad-gold-text">Built for the</span>
            <br />
            <span className="relative inline-block">
              American Market.
              <span className="absolute -bottom-2 left-0 h-[3px] w-3/4 bg-gradient-to-r from-gold-dark via-gold to-transparent shadow-[0_0_14px_rgba(199,155,63,0.55)]" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg"
          >
            From pattern to packed cartons — jerseys, training, fleece and OEM programs. 2.4M+
            units a month, 100% in-house, with U.S.-hours account management and audit-ready
            compliance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link to="/contact" className="btn-gold">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/manufacturing" className="btn-ghost">
              <Play className="h-4 w-4 text-gold" /> Explore the Factory
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {["WRAP Certified", "Sedex SMETA", "ISO 9001"].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.26em] text-cream/50">
                <ShieldCheck className="h-3.5 w-3.5 text-gold/70" />
                {b}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2 border-t border-cream/10 pt-7 sm:grid-cols-4"
          >
            {HERO_STATS.map((s) => (
              <div key={s.label} className="border-l-2 border-gold/60 pl-3">
                <div className="font-display text-3xl font-black">
                  <CountUp end={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/55">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative h-[360px] sm:h-[440px] lg:h-[560px]"
        >
          <div
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[90px] sm:h-96 sm:w-96"
          />
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <div
            className="pointer-events-none absolute left-6 top-6 h-10 w-10 border-l border-t border-gold/50"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 border-b border-r border-gold/50"
            aria-hidden
          />

          <HeroVisual />

          <div className="pointer-events-none absolute inset-0">
            {CHIPS.map((chip) => (
              <span
                key={chip.label}
                className={`absolute border border-white/15 bg-ink/75 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.26em] text-white/70 backdrop-blur ${chip.className}`}
              >
                {chip.label}
              </span>
            ))}
            <CircularBadge
              text="PEAK MODE • IN-HOUSE FACTORY • EST 2013 • "
              className="absolute right-6 top-6 sm:right-10 sm:top-10"
            />
          </div>

          <div className="absolute -right-1 top-1/2 hidden -translate-y-1/2 rotate-90 xl:block">
            <span className="flex items-center gap-3 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.5em] text-volt/80">
              <span className="h-1 w-10 bg-gradient-to-r from-volt to-transparent" />
              Pm '26 — Performance Range
            </span>
          </div>

          <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-cream/30">Scroll</span>
            <span className="h-8 w-px overflow-hidden bg-cream/15">
              <span className="stripes-diag block h-full w-full opacity-70" />
            </span>
          </div>
        </motion.div>
      </div>

      <Marquee items={MARQUEE_ITEMS} />
    </section>
  );
}