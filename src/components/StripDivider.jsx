import { cn } from "../lib/cn";

export default function StripDivider({ label, className }) {
  return (
    <div className={cn("relative h-11 overflow-hidden border-y border-white/10 bg-navy", className)}>
      <div className="stripes-diag stripes-anim absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-ink/40 to-transparent" />
      {label && (
        <div className="relative flex h-full items-center justify-center">
          <span className="bg-navy/80 px-5 font-display text-[11px] font-black uppercase tracking-[0.4em] text-gold">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}