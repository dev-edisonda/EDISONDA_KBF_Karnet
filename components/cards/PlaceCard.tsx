import Link from "next/link";
import { MapPin } from "lucide-react";
import { CoverImage } from "@/components/common/CoverImage";
import { CategoryBadge } from "@/components/badges/CategoryBadge";
import { AccessibilityBadges } from "@/components/badges/AccessibilityBadges";
import { pickLocale, type Dictionary } from "@/lib/i18n";
import { findPlaceCategory } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Locale, Place } from "@/lib/types";

export function PlaceCard({
  place,
  locale,
  dict,
  className,
}: {
  place: Place;
  locale: Locale;
  dict: Dictionary;
  className?: string;
}) {
  const name = pickLocale(locale, place.name_pl, place.name_en);
  const primaryCategory = findPlaceCategory(place.category_slugs[0]);

  return (
    <article
      className={cn(
        "flex w-64 flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md sm:w-72",
        className,
      )}
    >
      <Link href={`/${locale}/places/${place.slug}`} tabIndex={-1}>
        <CoverImage color={primaryCategory?.color ?? "#6B7280"} icon={primaryCategory?.icon} className="aspect-square w-full" />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap gap-1.5">
          {place.category_slugs.slice(0, 2).map((slug) => {
            const cat = findPlaceCategory(slug);
            return cat ? <CategoryBadge key={slug} category={cat} locale={locale} /> : null;
          })}
        </div>
        <h3 className="text-base font-semibold leading-snug text-ink">
          <Link href={`/${locale}/places/${place.slug}`} className="hover:underline">
            {name}
          </Link>
        </h3>
        <p className="flex items-center gap-1 text-sm text-muted">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {place.address}
        </p>
        <div className="mt-auto pt-2">
          <AccessibilityBadges profile={place.accessibility_profile} locale={locale} dict={dict} variant="compact" />
        </div>
      </div>
    </article>
  );
}
