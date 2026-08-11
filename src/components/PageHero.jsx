import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHero({ eyebrow, title, gold, sub, crumbs }) {
  return (
    <section className="relative overflow-hidden border-b border-cream/10 bg-navy">
      <div className="grid-lines absolute inset-0" />
      <div className="stripes-diag-soft absolute -right-40 top-0 h-full w-96 rotate-12 opacity-40" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />
      <div className="container-x relative pb-20 pt-24 sm:pt-28">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/50"
        >
          <Link to="/" className="transition-colors hover:text-gold">Home</Link>
          {crumbs?.map((c) => (
            <span key={c} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3 text-gold" />
              <span className="text-gold">{c}</span>
            </span>
          ))}
        </motion.nav>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h1 className="font-display text-5xl font-black uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
            {gold && (
              <>
                <br />
                <span className="text-gold">{gold}</span>
              </>
            )}
          </h1>
          {sub && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/70">{sub}</p>}
        </motion.div>
      </div>
    </section>
  );
}