import { motion } from "framer-motion";
import { cn } from "../lib/cn";

export default function SectionHeading({ eyebrow, title, gold, sub, center, className }) {
  return (
    <div className={cn("mb-14", center && "text-center", className)}>
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className={cn(
          "flex items-center gap-4",
          center && "justify-center"
        )}
      >
        <span className="h-px w-12 bg-gold" />
        <span className="eyebrow">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.08 }}
        className="mt-5 font-display text-4xl font-black uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl"
      >
        {title} {gold && <span className="text-gold">{gold}</span>}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/60"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}