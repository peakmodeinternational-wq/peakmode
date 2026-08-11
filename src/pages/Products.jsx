import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Download, Shirt } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import StripDivider from "../components/StripDivider";
import CTABanner from "../components/CTABanner";
import { COMPARISON, PRODUCTS } from "../data/site";
import { cn } from "../lib/cn";

const FILTERS = ["All", ...new Set(PRODUCTS.map((p) => p.cat))];

function ProductArt({ product }) {
  const [failed, setFailed] = useState(false);
  if (failed || !product.img) {
    return (
      <div className="absolute inset-0 grid place-items-center">
        <Shirt className="h-12 w-12 text-cream/20 transition-colors group-hover:text-gold/60" />
      </div>
    );
  }
  return (
    <img
      src={product.img}
      alt={product.name}
      loading="lazy"
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
    />
  );
}

export default function Products() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === filter);

  return (
    <>
      <PageHero
        eyebrow="Performance Range"
        title="Eight Lines."
        gold="One Standard."
        sub="Every program — from a 300-piece pilot to a 300k retail floor — is cut, stitched, printed and packed on this campus."
        crumbs={["Products"]}
      />

      <section className="py-20">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "border px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] transition-all",
                  filter === f
                    ? "border-gold bg-gold text-ink"
                    : "border-cream/15 text-cream/70 hover:border-gold/60 hover:text-gold"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35 }}
                  className="card group flex flex-col border-cream/10 p-6 hover:border-gold/50"
                >
                  <div className="relative flex h-44 items-center justify-between overflow-hidden rounded-sm border border-cream/5 bg-gradient-to-br from-steel/50 to-ink p-5">
                    <div className="stripes-diag-soft absolute inset-0 opacity-30" />
                    <ProductArt product={p} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/25" />
                    <span className="absolute -right-4 top-5 h-[3px] w-20 rotate-[-22deg] bg-volt/60" />
                    <span className="relative font-display text-5xl font-black text-cream/15">
                      {String(p.id).padStart(2, "0")}
                    </span>
                    <span className="relative border border-volt/50 bg-ink/60 px-3 py-1 text-[9px] font-bold uppercase italic tracking-[0.28em] text-volt backdrop-blur">
                      {p.cat}
                    </span>
                  </div>

                  <h2 className="mt-5 font-display text-xl font-black uppercase leading-tight group-hover:text-gold">
                    {p.name}
                  </h2>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-cream/50">
                    {p.tag}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/65">{p.desc}</p>

                  <dl className="mt-6 grid grid-cols-2 gap-y-3 border-t border-cream/10 pt-5 text-xs">
                    {[
                      ["Fabric", p.fabric],
                      ["Weight", p.gsm],
                      ["Sizes", p.sizes],
                      ["MOQ", p.moq],
                      ["Lead time", p.lead],
                      ["Sampling", "7–10 days"],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-[9px] font-bold uppercase tracking-[0.22em] text-cream/45">
                          {k}
                        </dt>
                        <dd className="mt-0.5 font-semibold text-cream/80">{v}</dd>
                      </div>
                    ))}
                  </dl>

<div className="mt-6 flex items-center justify-between border-t border-cream/10 pt-5">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-gradient-to-br from-gold-light via-gold to-gold-dark px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-10px_rgba(217,180,91,0.8)]"
                    >
                      <Download className="h-3.5 w-3.5" /> Download Quote
                    </Link>
                    <Link
                      to="/contact"
                      aria-label={`Request ${p.name}`}
                      className="grid h-10 w-10 place-items-center border border-gold/40 text-gold transition-all duration-300 hover:border-gold/80 hover:bg-gold/10"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="border-y border-cream/10 bg-navy py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Vendor Scorecard"
            title="Us vs."
            gold="The Unwritten Quote."
          />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-cream/15">
                  <th className="py-4 pr-6 text-[11px] font-bold uppercase tracking-[0.24em] text-cream/55">
                    Metric
                  </th>
                  <th className="w-1/3 py-4 pr-6 text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
                    Peak Mode
                  </th>
                  <th className="w-1/3 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-cream/55">
                    Typical supplier
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.metric} className="border-b border-cream/8">
                    <td className="py-4 pr-6 text-sm font-bold uppercase tracking-wider text-cream/85">
                      {row.metric}
                    </td>
                    <td className="px-6 py-4 text-sm text-gold/90">{row.us}</td>
                    <td className="py-4 pl-6 text-sm text-cream/55">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <StripDivider label="Get the full spec sheet" />
      <CTABanner />
    </>
  );
}