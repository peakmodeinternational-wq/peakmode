import { cn } from "../lib/cn";

export default function Logo({ className }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="relative grid h-10 w-10 shrink-0 place-items-center">
        <span className="absolute inset-0 rotate-45 border-2 border-gold" />
        <span className="font-display text-lg font-black text-gold">PM</span>
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-black uppercase tracking-[0.14em] text-cream">
          Peak Mode
        </span>
        <span className="block pt-1 text-[9px] font-semibold uppercase tracking-[0.4em] text-gold">
          International
        </span>
      </span>
    </span>
  );
}