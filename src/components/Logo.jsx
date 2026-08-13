import { cn } from "../lib/cn";

export default function Logo({ className }) {
  return (
    <span className={cn("flex items-center", className)}>
      <img
        src={import.meta.env.BASE_URL + "logo.svg"}
        alt="Peak Mode International logo"
        className="h-10 w-10 shrink-0"
      />
    </span>
  );
}
