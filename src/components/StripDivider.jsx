import { cn } from "../lib/cn";

export default function StripDivider({ label, className }) {
  return (
    <div className={cn("relative h-12 overflow-hidden border-y border-ink/10 bg-navy", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(520px_130px_at_50%_50%,rgba(217,180,91,0.09),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
      {label && (
        <div className="relative flex h-full items-center justify-center gap-4">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold/70" />
          <span className="grad-gold-text font-display text-[11px] font-black uppercase tracking-[0.4em]">
            {label}
          </span>
          <span className="h-px w-14 bg-gradient-to-r from-gold/70 to-transparent" />
        </div>
      )}
    </div>
  );
}