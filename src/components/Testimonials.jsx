import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { TESTIMONIALS } from "../data/site";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const item = TESTIMONIALS[idx];

  return (
    <section className="relative overflow-hidden border-y border-cream/10 bg-navy py-16 sm:py-24">
      <div className="stripes-diag-soft absolute inset-0 opacity-40" />
      <div className="container-x relative">
        <SectionHeading
          center
          eyebrow="Client Signals"
          title="Buyers"
          gold="Talk Back."
        />

        <div className="relative mx-auto max-w-3xl overflow-hidden">
          <Quote className="absolute -top-4 left-2 h-16 w-16 text-gold/15" />
          <AnimatePresence mode="wait">
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative text-center"
            >
              <blockquote className="text-xl leading-relaxed text-cream/85 sm:text-2xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <div className="mx-auto mb-4 h-px w-16 bg-gold" />
                <div className="font-display text-sm font-black uppercase tracking-[0.2em] text-gold">
                  {item.name}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/55">
                  {item.role}
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-1.5 transition-all duration-300 ${
                  i === idx ? "w-10 bg-gold" : "w-4 bg-cream/25 hover:bg-cream/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-14 flex items-center justify-center gap-4">
          <span className="stripes-diag h-1 w-14 opacity-70" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cream/50">
            Verified programs · NDA-friendly
          </span>
          <span className="stripes-diag h-1 w-14 opacity-70" />
        </div>
      </div>
    </section>
  );
}