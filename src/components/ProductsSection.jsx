import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Shirt, Dumbbell, Container, Briefcase, Layers, Activity, Heart } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PRODUCTS } from "../data/site";

const ICONS = [Shirt, Dumbbell, Container, Briefcase, Layers, Activity, Heart, Shirt];

function ProductArt({ product, Icon }) {
  const [failed, setFailed] = useState(false);
  if (failed || !product.img) {
    return (
      <div className="absolute inset-0 grid place-items-center">
        <Icon className="h-14 w-14 text-white/25 transition-all duration-500 group-hover:scale-110 group-hover:text-gold/70" />
      </div>
    );
  }
  return (
    <img
      src={product.img}
      alt={product.name}
      loading="lazy"
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-cover opacity-75 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
    />
  );
}

function TiltCard({ product, index }) {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mx.set(px);
    my.set(py);
    ry.set((px - 0.5) * 10);
    rx.set((0.5 - py) * 10);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const Icon = ICONS[index % ICONS.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="group"
    >
      <div className="card h-full border-white/10 p-7 transition-colors duration-300 hover:border-gold/50">
        <div className="relative h-44 overflow-hidden rounded-sm border border-white/5 bg-gradient-to-br from-steel/60 to-ink">
          <div className="stripes-diag-soft absolute inset-0 opacity-30" />
          <ProductArt product={product} Icon={Icon} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
          <span className="absolute left-3 top-3 font-display text-5xl font-black text-white/8">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute right-3 top-3 border border-gold/40 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.24em] text-gold">
            {product.cat}
          </span>
          <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
            {product.gsm}
          </span>
        </div>

        <h3 className="mt-6 font-display text-2xl font-black uppercase tracking-tight transition-colors group-hover:text-gold">
          {product.name}
        </h3>
        <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.24em] text-white/50">{product.tag}</p>
        <p className="mt-4 text-sm leading-relaxed text-white/65">{product.desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/60">
            MOQ {product.moq}
          </span>
          <span className="border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/60">
            {product.lead}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <Link
            to="/contact"
            className="text-[11px] font-bold uppercase tracking-[0.26em] text-gold transition-colors hover:text-gold-light"
          >
            Request Quote
          </Link>
          <Link
            to="/products"
            className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.26em] text-white/60 transition-colors hover:text-white"
          >
            Details <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="relative overflow-hidden py-24">
      <div className="absolute right-0 top-0 h-full w-64 bg-gradient-to-b from-gold/5 to-transparent" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Performance Range"
          title="What We"
          gold="Produce"
          sub="Eight production lines, one quality standard. Every program runs through the same in-house floor — knitted, cut, stitched and packed."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.slice(0, 6).map((p, i) => (
            <TiltCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}