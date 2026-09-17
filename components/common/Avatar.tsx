import { cn } from "@/lib/utils";

export function Avatar({
  initials,
  color,
  name,
  size = "md",
}: {
  initials: string;
  color: string;
  name: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = { sm: "h-9 w-9 text-xs", md: "h-14 w-14 text-base", lg: "h-24 w-24 text-2xl" };
  return (
    <div
      role="img"
      aria-label={name}
      className={cn("flex shrink-0 items-center justify-center rounded-full font-semibold text-white", sizeClasses[size])}
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}
