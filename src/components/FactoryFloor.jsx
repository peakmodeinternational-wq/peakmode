import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const BASE = import.meta.env.BASE_URL + "factory-media/";

const VIDEOS = [
  {
    src: "Sports Wear Video.mp4",
    title: "Fit Test — Athlete in Kit",
    sub: "On the factory floor",
    wide: true,
  },
  {
    src: "Embroidary Video.mp4",
    title: "Embroidery — Crest Work",
    sub: "Thread by thread",
    wide: false,
  },
];

const PHOTOS = [
  {
    src: "Sports t Shirt.jpg",
    title: "Sublimated T-Shirt",
    sub: "Training basics · 135 GSM",
  },
  {
    src: "Sports wear hoodie and trouser.jpg",
    title: "Hoodie + Trouser Set",
    sub: "Brushed fleece kit",
  },
  {
    src: "Sports hoodie and trousers 3.jpg",
    title: "Heavyweight Hoodie",
    sub: "Winter-ready layering",
  },
  {
    src: "Hoodie.jpg",
    title: "Embroidered Hoodie",
    sub: "Crest stitched in-house",
  },
  {
    src: "Woman Sports bra.jpg",
    title: "Women's Sports Bra",
    sub: "4-way stretch support",
  },
  {
    src: "Woman Bras and trousers.jpg",
    title: "Women's Set",
    sub: "Bra + trouser combo",
  },
];

function LiveTag() {
  return (
    <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 bg-ink/75 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.3em] text-volt-light backdrop-blur">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-volt" />
      Live
    </span>
  );
}

function Caption({ title, sub, className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent px-4 pb-3 pt-12 ${className}`}
    >
      <p className="font-display text-sm font-black uppercase italic tracking-tight text-white">
        {title}
      </p>
      <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-gold/90">
        {sub}
      </p>
    </div>
  );
}

export default function FactoryFloor() {
  return (
    <section className="bg-page py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Peak Mode factory — raw + unedited"
          title="From Our"
          gold="Floor"
          sub="Cameras on the cutting tables, embroidery arms and fit tests. This is where your kit is actually made."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {VIDEOS.map((v) => (
            <motion.div
              key={v.src}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`group relative overflow-hidden border border-cream/10 transition-colors duration-500 hover:border-gold/40 ${
                v.wide ? "aspect-video md:col-span-2" : "aspect-video md:aspect-auto md:row-span-2"
              }`}
            >
              <video
                src={BASE + v.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <LiveTag />
              <Caption title={v.title} sub={v.sub} />
            </motion.div>
          ))}
          {PHOTOS.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative aspect-[4/5] overflow-hidden border border-cream/10 transition-colors duration-500 hover:border-gold/40"
            >
              <img
                src={BASE + p.src}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.06]"
              />
              <Caption title={p.title} sub={p.sub} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
