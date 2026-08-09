import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <section className="container-x py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-xl border border-gold/30 bg-gradient-to-br from-navy via-ink to-navy"
      >
        <div className="stripes-diag stripes-anim absolute inset-0 opacity-15" />
        <div className="grid-lines absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/15 blur-[100px]" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-steel/40 blur-[90px]" />

        <div className="relative grid items-center gap-10 px-8 py-16 sm:px-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="eyebrow">Next Step</span>
            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[1.02] sm:text-5xl">
              Ready to produce <span className="text-gold">600 units</span>?
            </h2>
            <p className="mt-5 max-w-lg text-white/60">
              Send your tech pack today. A production-grade quote — fabric, trims, printing and
              freight included — lands in your inbox within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Start the Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#" className="btn-ghost">
                <FileDown className="h-4 w-4 text-gold" /> Company Profile PDF
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative ml-auto w-fit rotate-6">
              <span className="absolute -left-4 top-4 h-full w-full border border-gold/40" />
              <div className="relative rotate-90 border border-white/15 bg-ink/70 px-10 py-8 text-center backdrop-blur">
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
                  Capacity
                </div>
                <div className="font-display text-6xl font-black text-gold">2.4M</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                  units / month
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}