import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Timer, Factory } from "lucide-react";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";

const PILLARS = [
  {
    icon: Timer,
    title: "U.S. Client Comfort",
    desc: "Pacific-to-Eastern hours desk. Weekly photo updates, shared calendars, and language that doesn't need translating.",
  },
  {
    icon: Factory,
    title: "In-House Control",
    desc: "Knitting, dyeing, cutting, printing and embroidery under one roof. Zero sub-contracted stitching — ever.",
  },
  {
    icon: ShieldCheck,
    title: "Quality, Engineered",
    desc: "500-point inline inspection, AQL 2.5 final audit, and third-party lab reports on every fabric batch.",
  },
  {
    icon: Globe2,
    title: "Audit-Ready Always",
    desc: "WRAP, OEKO-TEX, SEDEX and BSCI on file. Schedule your own audit — the factory floor is open.",
  },
];

const METRICS = [
  { end: 500, suffix: "+", label: "Inline QC checkpoints" },
  { end: 98.7, suffix: "%", label: "On-time shipment rate", decimals: 1 },
  { end: 0, suffix: "", label: "Failed factory audits" },
  { end: 40, suffix: "+", label: "Export markets served" },
];

export default function Capabilities() {
  return (
    <section className="relative overflow-hidden border-y border-ink/10 bg-navy py-24">
      <div className="grid-lines absolute inset-0" />
      <div className="stripes-diag-soft absolute -left-20 top-10 h-72 w-72 rotate-12 opacity-50" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Why Peak Mode"
          title="A Vendor That"
          gold="Thinks Like You."
          sub="We built the factory around U.S. retail — audits, fit samples, timing and payment terms included."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card group p-7 hover:border-gold/40"
            >
              <div className="flex items-center justify-between">
                <p.icon className="h-8 w-8 text-gold transition-transform duration-500 group-hover:scale-110" />
                <span className="font-display text-4xl font-black text-ink/8">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-black uppercase tracking-tight group-hover:text-gold">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-ink/10 bg-ink/10 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-ink px-6 py-9 text-center">
              <div className="font-display text-4xl font-black text-gold sm:text-5xl">
                <CountUp end={m.end} suffix={m.suffix} decimals={m.decimals ?? 0} />
              </div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.26em] text-white/55">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}