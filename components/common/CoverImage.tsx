import { CategoryIcon } from "@/components/icon";
import { cn } from "@/lib/utils";

interface CoverImageProps {
  color: string;
  icon?: string;
  className?: string;
}

// Procedural placeholder standing in for real editorial photography (none exists
// in this mock dataset). Marked decorative — the card's own title text already
// carries the meaning, so no redundant alt text is announced.
export function CoverImage({ color, icon, className }: CoverImageProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative flex items-center justify-center overflow-hidden", className)}
      style={{
        background: `linear-gradient(135deg, ${color}dd, ${color}99 45%, ${color}55)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 14px)",
        }}
      />
      {icon && <CategoryIcon name={icon} className="relative h-10 w-10 text-white/90 md:h-12 md:w-12" />}
    </div>
  );
}
