import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Scissors } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FABRICS } from "../data/site";

export default function FabricTech() {
  const trackRef = useRef(null);
  const scrollBy = (dir) => trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  return (
    <section id="fabric" className="relative overflow-hidden py-16 sm:py-24">
      <div className="stripes-diag-soft absolute left-0 top-0 h-full w-40 -rotate-6 opacity-30" />
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Fabric Technology"
            title="Knit, Test,"
            gold="Prove."
            sub="Six performance constructions in constant production. Drag the rail to inspect; every yard carries lab-backed data."
            className="mb-0"
          />
          <div className="mb-2 flex gap-3">
            <button
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="grid h-12 w-12 place-items-center border border-cream/15 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="grid h-12 w-12 place-items-center border border-cream/15 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        >
          {FABRICS.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group min-w-[290px] max-w-[290px] snap-start"
            >
              <div className="card h-full p-5">
                <div
                  className={`relative h-36 overflow-hidden rounded-sm bg-gradient-to-br ${f.tone} to-ink`}
                >
                  <div className="stripes-diag-soft absolute inset-0" />
                  <div className="stripes-h absolute inset-0" />
                  <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full border border-gold/30 transition-transform duration-500 group-hover:scale-150" />
                  <Scissors className="absolute left-4 top-4 h-5 w-5 text-gold/60" />
                  <span className="absolute bottom-4 left-4 font-display text-xl font-black text-white/85">
                    {f.name}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-cream/65">{f.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.24em] text-cream/45">
                      Used in
                    </div>
                    <div className="mt-1 text-xs font-semibold text-cream/75">{f.use}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] font-bold uppercase tracking-[0.24em] text-cream/45">
                      Weight
                    </div>
                    <div className="mt-1 text-xs font-black text-gold">{f.gsm}</div>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="mt-5 block border-t border-cream/10 pt-4 text-[11px] font-bold uppercase tracking-[0.26em] text-gold hover:text-gold-light"
                >
                  Request Sample →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}