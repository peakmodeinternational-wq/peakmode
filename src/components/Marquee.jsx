import { cn } from "../lib/cn";

export default function Marquee({ items, reverse, className, fast }) {
  const chunks = [...items, ...items, ...items];
  return (
    <div className={cn("marquee border-y border-cream/10 bg-navy py-4", className)}>
      <div className={cn("marquee-track", reverse && "reverse", fast && "fast")}>
        {chunks.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="px-6 font-display text-xs font-black uppercase italic tracking-[0.3em] text-cream/70">
              {item}
            </span>
            <span className="text-volt">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}