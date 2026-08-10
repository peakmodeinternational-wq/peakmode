import { cn } from "../lib/cn";

export default function Marquee({ items, reverse, className, fast }) {
  const chunks = [...items, ...items, ...items];
  return (
    <div className={cn("marquee border-y border-white/10 bg-navy py-4", className)}>
      <div className={cn("marquee-track", reverse && "reverse", fast && "fast")}>
        {chunks.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="px-6 text-xs font-bold uppercase tracking-[0.34em] text-white/65">
              {item}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}