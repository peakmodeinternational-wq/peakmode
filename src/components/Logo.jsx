import { cn } from "../lib/cn";

export default function Logo({ className }) {
  return (
    <span className={cn("flex items-center", className)}>
      <img
        src={import.meta.env.BASE_URL + "logo.png"}
        alt="Peak Mode International logo"
        className="h-12 w-auto shrink-0 sm:h-16"
      />
    </span>
  );
}
