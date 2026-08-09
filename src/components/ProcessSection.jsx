import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PROCESS } from "../data/site";

export default function ProcessSection({ compact }) {
  return (
    <section id="process" className="relative overflow-hidden py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Production Line"
          title="From Tech Pack"
          gold="To Loaded Truck."
          sub={compact ? undefined : "Six fixed stages, each with milestone dates. You always know exactly where your program stands."}
        />

        <div className="relative">
          <div className="absolute left-[27px] top-0 h-full w-px bg-white/10 lg:left-1/2" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute left-[27px] top-0 h-full w-px origin-top bg-gold lg:left-1/2"
          />

          <div className="space-y-10">
            {PROCESS.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={step.num}
                  className={`relative grid gap-6 pl-16 lg:grid-cols-2 lg:gap-16 lg:pl-0 ${
                    left ? "" : ""
                  }`}
                >
                  <div
                    className={`absolute left-[27px] top-8 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border border-gold bg-ink lg:left-1/2 ${
                      i === 0 ? "bg-gold" : ""
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${i === 0 ? "bg-ink" : "bg-gold"}`} />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: left ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className={`card p-8 ${left ? "lg:col-start-1" : "lg:col-start-2"}`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-display text-6xl font-black text-white/8">{step.num}</span>
                      <span className="border border-gold/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                        {step.time}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-tight hover:text-gold">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">{step.desc}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {compact && (
          <div className="mt-14 text-center">
            <Link to="/manufacturing" className="btn-ghost">
              Full Facility Tour <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}