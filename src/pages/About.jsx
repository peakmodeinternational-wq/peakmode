import { motion } from "framer-motion";
import { Award, Target, Eye, Handshake } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Marquee from "../components/Marquee";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";
import { CERTIFICATIONS, MILESTONES, VALUES } from "../data/site";
import CountUp from "../components/CountUp";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Sportswear Built"
        gold="On Discipline."
        sub="2013, twelve sewing stations in Sialkot — the world's sports-goods capital. Today: a 400-station campus shipping to 40+ markets — still with the same rulebook."
        crumbs={["About"]}
      />

      <section className="container-x grid gap-14 py-16 lg:grid-cols-2 lg:items-center sm:py-24">
        <div>
          <SectionHeading
            eyebrow="The Long Story, Short"
            title="One Factory,"
            gold="One Standard."
            className="mb-8"
          />
          <div className="space-y-5 text-cream/70 leading-relaxed">
            <p>
              Peak Mode International started as a single knitwear floor with twelve stations and a
              rule: never ship what you wouldn't sell to your own team. That rule built every line
              since — jerseys that survive forty washes, fleece that doesn't pill, compression that
              holds its tension past a season.
            </p>
            <p>
              We grew by taking the work nobody wanted — short runs, complex sizes, tight calendars —
              and turning it into programs that repeat. Today the same floor runs 2.4M units a
              month for clubs, schools, D2C brands and distributors across 40+ markets.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { end: 13, suffix: "", label: "Years in business" },
              { end: 400, suffix: "+", label: "Sewing stations" },
              { end: 40, suffix: "+", label: "Export markets" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-gold/60 pl-3">
                <div className="font-display text-3xl font-black text-gold">
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-cream/55">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-full w-full border border-gold/30" />
          <div className="relative overflow-hidden rounded-md border border-cream/10 bg-navy">
            <div className="grid-lines absolute inset-0" />
            <div className="stripes-diag-soft absolute inset-0 rotate-3 opacity-50" />
            <div className="relative p-10">
              <Award className="h-10 w-10 text-gold" />
              <h3 className="mt-6 font-display text-3xl font-black uppercase leading-tight">
                120,000 sq/ft.
                <br />
                <span className="text-gold">Under one roof.</span>
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-cream/70">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-4 bg-gold" /> Knitting, dyeing & finishing
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-4 bg-gold" /> CAD cutting & 400 sewing stations
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-4 bg-gold" /> Sublimation, DTG & embroidery
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-4 bg-gold" /> Wash plant & shade lab
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-cream/10 bg-navy py-14 sm:py-20">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Eye,
              title: "Vision",
              desc: "The factory U.S. sportswear brands default to — one campus, zero subcontracting, dates that hold.",
            },
            {
              icon: Target,
              title: "Mission",
              desc: "One roof, zero subcontracting, one point of contact from tech pack to loaded truck. Quality you can audit at 3 a.m.",
            },
            {
              icon: Handshake,
              title: "Promise",
              desc: "Straight answers on dates, costs and audits. If we can't run it well, we say so before you spend a dollar.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-8 hover:border-gold/40"
            >
              <c.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-5 font-display text-xl font-black uppercase">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Milestones"
            title="The Climb,"
            gold="Timeline."
          />
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-1 bg-cream/10 sm:left-1/2" />
            {MILESTONES.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={m.year}
                  className={`relative mb-10 pl-14 sm:w-1/2 sm:pl-0 ${left ? "sm:pr-16" : "sm:ml-auto sm:pl-16"}`}
                >
                  <span className="absolute left-4 top-1 -translate-x-1/2 bg-ink p-1 sm:left-auto sm:right-0 sm:translate-x-1/2 sm:bg-gold">
                    <span className={`block h-3 w-3 border-2 ${left ? "border-gold" : "border-gold"} sm:border-ink`} />
                  </span>
                  <div className="card p-6">
                    <span className="font-display text-3xl font-black text-gold">{m.year}</span>
                    <h3 className="mt-2 font-display text-lg font-black uppercase">{m.title}</h3>
                    <p className="mt-2 text-sm text-cream/65">{m.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-cream/10 py-14 sm:py-20">
        <div className="container-x">
          <div className="text-center">
            <SectionHeading
              center
              eyebrow="Certified"
              title="Papers, Not"
              gold="Promises."
            />
          </div>
        </div>
        <div className="container-x mt-6">
          <Marquee items={CERTIFICATIONS} />
        </div>
        <div className="container-x mt-16 grid gap-4 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card flex items-start gap-5 p-7 hover:border-gold/40"
            >
              <span className="font-display text-4xl font-black text-gold/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-black uppercase">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
}