import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Ship } from "lucide-react";
import { Link } from "react-router-dom";

const PromoCanvas = lazy(() => import("./three/PromoCanvas"));

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden border-y border-gold/30 bg-navy">
      <div className="absolute inset-0 bg-[radial-gradient(760px_320px_at_18%_50%,rgba(217,180,91,0.12),transparent_70%)]" />
      <div className="grid-lines absolute inset-0 opacity-40" />
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
            className="mt-5 font-display text-3xl font-black uppercase leading-[1.02] sm:text-4xl lg:text-5xl"
          >
            Order by <span className="grad-gold-text">Sep 5</span> —
            <br />
            Deliveries by <span className="grad-gold-text">Nov 1</span>
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
              <li key={line} className="flex items-start gap-3 text-sm text-cream/70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
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
                  className={`border px-3 py-2 font-display text-xs font-black italic tracking-widest sm:px-5 sm:py-3 sm:text-sm ${
                    i === 0
                      ? "grad-gold-text border-gold/70 bg-gold/10 shadow-[0_0_24px_-8px_rgba(217,180,91,0.5)]"
                      : i === 1
                        ? "border-volt/50 text-volt"
                        : "border-gold/30 text-gold/90"
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
          <div className="absolute -left-6 -top-6 h-10 w-10 border-l border-t border-gold/40" />
          <div className="absolute -right-6 -top-6 h-10 w-10 border-r border-t border-gold/40" />
          <div className="absolute -bottom-6 -left-6 h-10 w-10 border-b border-l border-gold/40" />
          <div className="absolute -bottom-6 -right-6 h-10 w-10 border-b border-r border-gold/40" />
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