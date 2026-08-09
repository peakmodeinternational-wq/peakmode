import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Ship } from "lucide-react";
import { Link } from "react-router-dom";

const PromoCanvas = lazy(() => import("./three/PromoCanvas"));

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden border-y border-gold/30 bg-navy">
      <div className="stripes-diag-soft stripes-anim absolute inset-0" />
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="flex items-center gap-3"
          >
            <CalendarDays className="h-4 w-4 text-gold" />
            <span className="eyebrow">Holiday Deadline Campaign</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="mt-5 font-display text-4xl font-black uppercase leading-[1.02] sm:text-5xl"
          >
            Order by <span className="text-gold">Sep 5</span> —
            <br />
            Deliveries by <span className="text-gold">Nov 1</span>
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="mt-7 space-y-3"
          >
            {[
              "Production slots reserved for holiday retail programs",
              "Air-freight backup options at locked bulk rates",
              "Free 3-piece sampling for programs placed this month",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm text-white/70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {line}
              </li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <div className="flex items-center gap-3">
              {["SEP 05", "DEADLINE", "2026"].map((tag, i) => (
                <div
                  key={tag}
                  className={`border px-5 py-3 font-display text-sm font-black tracking-widest ${
                    i === 0 ? "stripes-diag border-gold text-ink" : "border-gold/40 text-gold"
                  }`}
                >
                  {tag}
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-gold">
              <Ship className="h-4 w-4" /> Book a Production Slot
            </Link>
          </motion.div>
        </div>

<div className="relative">
          <div className="absolute -left-8 inset-y-0 border border-gold/20" />
          <div className="absolute -inset-8 border border-gold/10" />
          <Suspense fallback={<div className="h-72 w-full sm:h-96" />}>
            <PromoCanvas />
          </Suspense>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-ink/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gold backdrop-blur">
            Live from the floor — sample run
          </div>
        </div>
      </div>
    </section>
  );
}