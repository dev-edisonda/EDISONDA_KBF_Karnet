"use client";

import Link from "next/link";
import { useFavourites } from "@/lib/favourites-context";
import { EventCard } from "@/components/cards/EventCard";
import { BulkIcsExportButton } from "@/components/common/IcsExportButton";
import { EVENTS, withPlaces } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export function FavouritesList({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { ids } = useFavourites();
  const items = withPlaces(EVENTS.filter((e) => ids.includes(e.id)));

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-10 text-center">
        <p className="text-ink">{dict.favourites.empty}</p>
        <Link href={`/${locale}/events`} className="mt-3 inline-block text-sm font-semibold text-brand-700 hover:underline">
          {dict.favourites.emptyCta}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-brand-50/60 px-4 py-3">
        <p className="text-sm text-brand-800">{dict.favourites.accountPrompt}</p>
        <BulkIcsExportButton items={items} locale={locale} dict={dict} />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ event, place }) => (
          <EventCard key={event.id} event={event} place={place} locale={locale} dict={dict} className="w-full sm:w-full" />
        ))}
      </div>
    </div>
  );
}
