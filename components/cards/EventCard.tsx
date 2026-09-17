import Link from "next/link";
import { MapPin } from "lucide-react";
import { CoverImage } from "@/components/common/CoverImage";
import { CategoryBadge } from "@/components/badges/CategoryBadge";
import { AccessibilityBadges } from "@/components/badges/AccessibilityBadges";
import { FavouriteButton } from "@/components/common/FavouriteButton";
import { formatDateRange } from "@/lib/format";
import { pickLocale, type Dictionary } from "@/lib/i18n";
import { resolveAccessibility } from "@/lib/accessibility";
import { findEventCategory } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { KarnetEvent, Locale, Place } from "@/lib/types";

interface EventCardProps {
  event: KarnetEvent;
  place: Place;
  locale: Locale;
  dict: Dictionary;
  className?: string;
}

export function EventCard({ event, place, locale, dict, className }: EventCardProps) {
  const title = pickLocale(locale, event.title_pl, event.title_en);
  const placeName = pickLocale(locale, place.name_pl, place.name_en);
  const priceLabel = event.is_free
    ? dict.event.freeEntry
    : pickLocale(locale, event.ticket_price_info_pl, event.ticket_price_info_en);
  const primaryCategory = findEventCategory(event.category_slugs[0]);
  const profile = resolveAccessibility(event, place);

  return (
    <article
      className={cn(
        "group flex w-72 flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md sm:w-80",
        className,
      )}
    >
      <div className="relative">
        <Link href={`/${locale}/events/${event.slug}`} className="block" tabIndex={-1}>
          <CoverImage color={primaryCategory?.color ?? "#6B7280"} icon={primaryCategory?.icon} className="aspect-[4/3] w-full" />
        </Link>
        <div className="absolute right-2.5 top-2.5">
          <FavouriteButton eventId={event.id} dict={dict} size="sm" />
        </div>
        {event.is_editorial_pick && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-brand-700 px-2.5 py-1 text-xs font-semibold text-white">
            {dict.event.editorsPick}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap gap-1.5">
          {event.category_slugs.slice(0, 2).map((slug) => {
            const cat = findEventCategory(slug);
            return cat ? <CategoryBadge key={slug} category={cat} locale={locale} /> : null;
          })}
        </div>
        <h3 className="text-base font-semibold leading-snug text-ink">
          <Link href={`/${locale}/events/${event.slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="flex items-center gap-1 text-sm text-muted">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {placeName}
        </p>
        <p className="text-sm font-medium text-brand-700">{formatDateRange(event.start_date, event.end_date, locale)}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <span className={cn("text-sm font-semibold", event.is_free ? "text-brand-600" : "text-ink")}>{priceLabel}</span>
          <AccessibilityBadges profile={profile} locale={locale} dict={dict} variant="compact" />
        </div>
      </div>
    </article>
  );
}
