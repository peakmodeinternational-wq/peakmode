import { cn } from "../lib/cn";

export default function Logo({ className }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <img
        src={import.meta.env.BASE_URL + "logo.svg"}
        alt="Peak Mode International logo"
        className="h-10 w-10 shrink-0"
      />
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
