"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Filter, List, Map as MapIcon, Search } from "lucide-react";
import { EventCard } from "@/components/cards/EventCard";
import { FilterBottomSheet } from "@/components/events/FilterBottomSheet";
import { getQuickDateOptions } from "@/lib/quick-dates";
import { filterEvents } from "@/lib/data";
import { eventFiltersToSearchParams, parseEventFilters, countActiveFilters, type EventFilterState } from "@/lib/filters";
import { interpolate, pickLocale, type Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

const MapView = dynamic(() => import("@/components/events/MapView").then((m) => m.MapView), {
  ssr: false,
});

export function EventsExplorer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const router = useRouter();
  const pathname = usePathname();
  // Filter/search state lives in the URL (query params) so results are shareable
  // and bookmarkable (PRD §8.1). Static export has no server to read the query
  // string, so the client parses it itself from the very first render.
  const searchParams = useSearchParams();
  const initialFilters = useMemo(() => parseEventFilters(searchParams), [searchParams]);
  const [filters, setFilters] = useState<EventFilterState>(initialFilters);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [q, setQ] = useState(initialFilters.q ?? "");

  const results = useMemo(() => filterEvents({ ...filters, q }), [filters, q]);
  const quickDates = getQuickDateOptions();

  function pushUrl(next: EventFilterState, query: string) {
    const params = eventFiltersToSearchParams({ ...next, q: query });
    router.replace(`${pathname}${params.toString() ? `?${params}` : ""}`, { scroll: false });
  }

  function updateFilters(next: EventFilterState) {
    setFilters(next);
    pushUrl(next, q);
  }

  useEffect(() => {
    const t = setTimeout(() => pushUrl(filters, q), 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const activeCount = countActiveFilters(filters);
  const isQuickDateActive = (from: string, to: string) => filters.dateFrom === from && filters.dateTo === to;

  return (
    <div>
      <div className="sticky top-[57px] z-30 border-b border-border bg-background/95 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2">
              <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              <label htmlFor="events-search" className="sr-only">
                {dict.events.search}
              </label>
              <input
                id="events-search"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={dict.home.searchPlaceholder}
                className="w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => setSheetOpen(true)}
              className="relative flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium text-ink hover:border-brand-300"
            >
              <Filter className="h-4 w-4" aria-hidden="true" />
              {dict.events.filters}
              {activeCount > 0 && (
                <span className="ml-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-600 px-1 text-xs font-semibold text-white">
                  {activeCount}
                </span>
              )}
            </button>
            <div className="hidden items-center gap-1 rounded-full border border-border p-0.5 sm:flex">
              <button
                type="button"
                onClick={() => updateFilters({ ...filters, view: "list" })}
                aria-pressed={filters.view !== "map"}
                className={`rounded-full p-2 ${filters.view !== "map" ? "bg-brand-600 text-white" : "text-ink"}`}
              >
                <List className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">{dict.events.viewList}</span>
              </button>
              <button
                type="button"
                onClick={() => updateFilters({ ...filters, view: "map" })}
                aria-pressed={filters.view === "map"}
                className={`rounded-full p-2 ${filters.view === "map" ? "bg-brand-600 text-white" : "text-ink"}`}
              >
                <MapIcon className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">{dict.events.viewMap}</span>
              </button>
            </div>
          </div>
          <div className="rail">
            {quickDates.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => updateFilters({ ...filters, dateFrom: opt.from, dateTo: opt.to })}
                aria-pressed={isQuickDateActive(opt.from, opt.to)}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${
                  isQuickDateActive(opt.from, opt.to)
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-border text-ink hover:border-brand-300"
                }`}
              >
                {pickLocale(locale, opt.label_pl, opt.label_en)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <p className="mb-4 text-sm text-muted">{interpolate(dict.events.resultsCount, { count: results.length })}</p>

        {results.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-10 text-center">
            <p className="text-ink">{dict.events.noResults}</p>
            <button
              type="button"
              onClick={() => {
                setQ("");
                updateFilters({ view: filters.view });
              }}
              className="mt-3 text-sm font-semibold text-brand-700 hover:underline"
            >
              {dict.events.noResultsCta}
            </button>
          </div>
        ) : filters.view === "map" ? (
          <MapView items={results} locale={locale} dict={dict} />
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map(({ event, place }) => (
              <EventCard key={event.id} event={event} place={place} locale={locale} dict={dict} className="w-full sm:w-full" />
            ))}
          </div>
        )}
      </div>

      <FilterBottomSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        filters={filters}
        onApply={updateFilters}
        locale={locale}
        dict={dict}
      />
    </div>
  );
}
