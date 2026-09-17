"use client";

import { CalendarPlus } from "lucide-react";
import { downloadIcsFile, generateIcsForEvent, generateIcsForEvents } from "@/lib/ics";
import type { Dictionary } from "@/lib/i18n";
import type { KarnetEvent, Locale, Place } from "@/lib/types";

export function IcsExportButton({
  event,
  place,
  locale,
  dict,
}: {
  event: KarnetEvent;
  place: Place;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <button
      type="button"
      onClick={() => downloadIcsFile(`${event.slug}.ics`, generateIcsForEvent(event, place, locale))}
      className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
    >
      <CalendarPlus className="h-4 w-4" aria-hidden="true" />
      {dict.event.addToCalendar}
    </button>
  );
}

export function BulkIcsExportButton({
  items,
  locale,
  dict,
}: {
  items: { event: KarnetEvent; place: Place }[];
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <button
      type="button"
      disabled={items.length === 0}
      onClick={() => downloadIcsFile("karnet-ulubione.ics", generateIcsForEvents(items, locale))}
      className="inline-flex items-center gap-2 rounded-full border border-brand-600 px-4 py-2.5 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-40"
    >
      <CalendarPlus className="h-4 w-4" aria-hidden="true" />
      {dict.favourites.exportAll}
    </button>
  );
}
