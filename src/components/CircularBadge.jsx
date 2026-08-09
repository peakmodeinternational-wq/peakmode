import { cn } from "../lib/cn";

export default function CircularBadge({ text, className }) {
  return (
    <div className={cn("relative grid h-28 w-28 place-items-center", className)}>
      <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id="circ-badge" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
        </defs>
        <text className="fill-gold text-[9.2px] font-bold uppercase tracking-[0.22em]">
          <textPath href="#circ-badge">{text}</textPath>
        </text>
      </svg>
      <span className="grid h-11 w-11 rotate-45 place-items-center border border-gold/70 bg-ink/90">
        <span className="-rotate-45 font-display text-[10px] font-black uppercase tracking-widest text-gold">
          in-house
        </span>
      </span>
    </div>
  );
}