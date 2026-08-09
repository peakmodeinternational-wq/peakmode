import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Factory, Gauge, Microscope } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ProcessSection from "../components/ProcessSection";
import StripDivider from "../components/StripDivider";
import CountUp from "../components/CountUp";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";
import { FACILITY, EQUIPMENT, CERTIFICATIONS } from "../data/site";

const ThreadCanvas = lazy(() => import("../components/three/ThreadCanvas"));

export default function Manufacturing() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="One Roof."
        gold="Full Control."
        sub="Knitting, dyeing, cutting, sewing, printing, wash and pack — every stage that touches your garment stays under the same ceiling and the same audit trail."
        crumbs={["Manufacturing"]}
      />

      <section className="relative overflow-hidden border-b border-white/10 py-24">
        <div className="container-x relative">
          <div className="absolute inset-0 opacity-40">
            <Suspense fallback={null}>
              <ThreadCanvas />
            </Suspense>
          </div>
          <div className="relative grid gap-6 lg:grid-cols-2">
            {FACILITY.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08 }}
                className="card flex items-center justify-between border-gold/20 bg-ink/80 p-8 backdrop-blur"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-white/55">
                  {f.label}
                </span>
                <span className="font-display text-5xl font-black text-gold">
                  <CountUp end={Number(f.value.replace(/[^\d.]/g, ""))} suffix={f.value.includes("M") ? "M" : ""} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <StripDivider label="Floor & equipment" />

      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Facility"
              title="The Floor,"
              gold="Mapped."
              className="mb-8"
            />
            <div className="space-y-5 text-sm leading-relaxed text-white/60">
              <p>
                Cutting on automated spreaders with CAD markers; sewing on dedicated lines that run
                single-piece flow; printing and washing in climate-controlled bays. Every station
                logs to the same production system your account manager can see live.
              </p>
              <ul className="space-y-3">
                {[
                  "Automated spreading & CNC cutting",
                  "400+ stitching stations, dedicated flatlock lines",
                  "Sublimation, DTG, DTF & multi-head embroidery",
                  "Garment wash plant + laser etching",
                  "Metal detection at packing",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-white/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="card p-6 text-center">
                <Factory className="mx-auto h-6 w-6 text-gold" />
                <div className="mt-3 font-display text-3xl font-black">120k</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/45">
                  sq/ft campus
                </div>
              </div>
              <div className="card p-6 text-center">
                <Gauge className="mx-auto h-6 w-6 text-gold" />
                <div className="mt-3 font-display text-3xl font-black">28.8M</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/45">
                  units / year
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-24 w-24 border-r-2 border-t-2 border-gold/40" />
            <div className="card sticky top-28 p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Microscope className="h-6 w-6 text-gold" />
                  <h3 className="font-display text-lg font-black uppercase">Equipment Banks</h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                  {EQUIPMENT.length} banks
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2.5">
                {EQUIPMENT.map((eq) => (
                  <div
                    key={eq}
                    className="border border-white/10 px-3 py-2.5 text-[11px] font-semibold text-white/70 transition-colors hover:border-gold/50 hover:text-gold"
                  >
                    {eq}
                  </div>
                ))}
              </div>
              <div className="stripes-diag h-2 w-full opacity-60" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-navy py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Compliance"
            title="Audit-Ready,"
            gold="Every Quarter."
          />
          <p className="max-w-2xl text-white/60">
            We hold current certifications on file and welcome unannounced third-party audits.
            Reports are shared with buyers on request — no NDAs needed for audit results.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {CERTIFICATIONS.map((c) => (
              <span
                key={c}
                className="border border-gold/40 bg-ink px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-gold"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              "500-point inline QC",
              "AQL 2.5 final audit",
              "Third-party lab reports",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3 bg-navy px-6 py-5 text-sm font-semibold text-white/75">
                <span className="h-1.5 w-1.5 bg-gold" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
}