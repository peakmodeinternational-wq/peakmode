import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import PageHero from "../components/PageHero";
import StripDivider from "../components/StripDivider";
import { PRODUCTS } from "../data/site";
import { sendMetaEvent } from "../lib/meta";

const INFO = [
  {
    icon: Phone,
    title: "Business Number",
    lines: ["+92 309 6518412", ""],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["peakmodeinternation@gmail.com", ""],
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business",
    lines: ["+92 309 6518412", "Replies within 4 business hours"],
  },
  {
    icon: MapPin,
    title: "Factory",
    lines: ["Athwal, Sialkot — Punjab, Pakistan", "32°24'41.1\"N 74°37'44.9\"E"],
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Start a Program"
        title="Send the Tech"
        gold="Pack."
        sub="Quotes land within 48 hours, Pacific-time. Attach tech packs or sketches — or use the form and we'll take it from there."
        crumbs={["Contact"]}
      />

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {INFO.map((c) => (
                <div key={c.title} className="card p-6 hover:border-gold/40">
                  <c.icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-4 font-display text-sm font-black uppercase tracking-wider">
                    {c.title}
                  </h3>
                  {c.lines.map((l) => (
                    <p key={l} className="mt-1.5 text-sm text-cream/65">
                      {l}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="card mt-6 relative overflow-hidden p-8">
              <div className="grid-lines absolute inset-0" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold" />
                  <span className="font-display text-sm font-black uppercase tracking-wider">
                    U.S. business hours
                  </span>
                </div>
                <p className="mt-3 text-sm text-cream/70">
                  Monday – Friday, 6:00 AM – 5:00 PM Pacific. Factory floor tours every Thursday
                  for verified buyers — schedule by email.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="stripes-diag h-1.5 w-16 opacity-80" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cream/50">
                    New quotes in 48h
                  </span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card border-gold/30 p-8 sm:p-10"
          >
            {sent ? (
              <div className="grid place-items-center py-14 text-center sm:py-20">
                <CheckCircle2 className="h-14 w-14 text-gold" />
                <h3 className="mt-6 font-display text-2xl font-black uppercase">
                  Pack received.
                </h3>
                <p className="mt-3 max-w-sm text-sm text-cream/65">
                  A production manager will reply within 48 hours with a preliminary quote and
                  sampling date, Pacific time.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-ghost mt-8"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setError("");
                  setSending(true);
                  const fd = new FormData(e.currentTarget);
                  fd.append("_subject", "New inquiry from peakmodeinternational.com");
                  fd.append("_template", "table");
                  fd.append("_captcha", "false");
                  try {
                    const res = await fetch(
                      "https://formsubmit.co/ajax/peakmodeinternation@gmail.com",
                      { method: "POST", body: fd, headers: { Accept: "application/json" } }
                    );
                    if (res.ok) {
                      const fd2 = new FormData(e.currentTarget);
                      sendMetaEvent("Lead", { email: String(fd2.get("email") || "").trim() });
                      setSent(true);
                    } else {
                      setError("Could not send — try again or reach us on WhatsApp directly.");
                    }
                  } catch {
                    setError("Could not send — check your connection or reach us on WhatsApp directly.");
                  } finally {
                    setSending(false);
                  }
                }}
                className="grid gap-5 sm:grid-cols-2"
              >
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.26em] text-cream/55">
                    Full name *
                  </label>
                  <input
                    required
                    name="name"
                    placeholder="Jordan Miles"
                    className="w-full border border-cream/20 bg-white/10 px-4 py-3.5 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.26em] text-cream/55">
                    Company
                  </label>
                  <input
                    name="company"
                    placeholder="Miles Athletic Co."
                    className="w-full border border-cream/20 bg-white/10 px-4 py-3.5 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.26em] text-cream/55">
                    Work email *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="jordan@company.com"
                    className="w-full border border-cream/20 bg-white/10 px-4 py-3.5 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.26em] text-cream/55">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+92 300 0000000"
                    className="w-full border border-cream/20 bg-white/10 px-4 py-3.5 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.26em] text-cream/55">
                    Product category *
                  </label>
                  <select
                    required
                    name="category"
                    className="w-full border border-cream/20 bg-white/10 px-4 py-3.5 text-sm text-cream outline-none transition-colors focus:border-gold"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name} className="bg-page">
                        {p.name}
                      </option>
                    ))}
                    <option value="Other" className="bg-page">Other — tell us below</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.26em] text-cream/55">
                    Estimated quantity
                  </label>
                  <select name="quantity" className="w-full border border-cream/20 bg-white/10 px-4 py-3.5 text-sm text-cream outline-none transition-colors focus:border-gold">
                    {["300 – 1,000 pcs", "1,000 – 5,000 pcs", "5,000 – 25,000 pcs", "25,000+ pcs"].map(
                      (o) => (
                        <option key={o} className="bg-page">
                          {o}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.26em] text-cream/55">
                    Program details *
                  </label>
                  <textarea
                    required
                    name="details"
                    rows={5}
                    placeholder="Styles, sizes, target delivery date, retail price point…"
                    className="w-full resize-none border border-cream/20 bg-white/10 px-4 py-3.5 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" disabled={sending} className="btn-gold w-full sm:w-auto disabled:opacity-60">
                    <Send className="h-4 w-4" /> {sending ? "Sending…" : "Submit Request"}
                  </button>
                  {error && (
                    <p className="mt-4 text-sm text-red-400">{error}</p>
                  )}
                  <p className="mt-4 text-[11px] text-cream/45">
                    NDA available on request. Your specs stay ours — and yours.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <StripDivider label="Sialkot · Los Angeles · Anywhere" />
    </>
  );
}