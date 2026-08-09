import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ANNOUNCEMENTS } from "../data/site";

export default function AnnouncementBar({ hidden }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ANNOUNCEMENTS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className={`relative overflow-hidden bg-gold text-ink transition-all duration-500 ${
        hidden ? "h-0 opacity-0" : "h-9 opacity-100"
      }`}
    >
      <div className="stripes-diag-dark absolute inset-0 opacity-30" />
      <div className="container-x relative flex h-9 items-center justify-center gap-4 overflow-hidden">
        <span className="hidden shrink-0 text-[10px] font-black uppercase tracking-[0.3em] sm:block">
          New season
        </span>
        <div className="marquee w-full">
          <div className="marquee-track fast text-[11px] font-bold uppercase tracking-[0.22em]">
            {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((msg, i) => (
              <span key={i} className="flex items-center gap-5 pr-5">
                {msg}
                <span className="text-ink/50">///</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {!hidden && (
          <motion.button
            aria-label="Close announcements"
            onClick={() => setIdx(-99)}
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 p-1 transition-transform hover:scale-125 sm:block"
          >
            <X className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
      <span className="sr-only">{ANNOUNCEMENTS[idx]}</span>
    </div>
  );
}