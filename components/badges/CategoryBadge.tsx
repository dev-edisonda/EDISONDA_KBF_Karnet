import Link from "next/link";
import { CategoryIcon } from "@/components/icon";
import { pickLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { EventCategory, Locale, PlaceCategory } from "@/lib/types";

interface CategoryBadgeProps {
  category: EventCategory | PlaceCategory;
  locale: Locale;
  href?: string;
  size?: "sm" | "md";
}

// Text always renders in --ink regardless of category hue, so contrast is
// guaranteed AA no matter which of the fixed category colours is used — the
// colour itself is a supplementary cue (icon + border tint), never the only signal.
export function CategoryBadge({ category, locale, href, size = "sm" }: CategoryBadgeProps) {
  const label = pickLocale(locale, category.name_pl, category.name_en);
  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium text-ink",
        size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm",
      )}
      style={{ borderColor: `${category.color}55`, backgroundColor: `${category.color}14` }}
    >
      <CategoryIcon name={category.icon} className="h-3.5 w-3.5 shrink-0" style={{ color: category.color }} />
      {label}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="rounded-full transition-opacity hover:opacity-80">
        {content}
      </Link>
    );
  }

  return content;
}
