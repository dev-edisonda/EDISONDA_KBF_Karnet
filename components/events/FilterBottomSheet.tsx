"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { EVENT_CATEGORIES, PLACE_CATEGORIES } from "@/lib/data";
import { pickLocale, type Dictionary } from "@/lib/i18n";
import type { AccessibilityFlag } from "@/lib/accessibility";
import type { EventFilterState } from "@/lib/filters";
import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

const ACCESSIBILITY_OPTIONS: AccessibilityFlag[] = [
  "wheelchair",
  "induction_loop",
  "captions",
  "audio_description",
  "quiet_zone",
];

const ACCESSIBILITY_LABEL_KEY: Record<AccessibilityFlag, keyof Dictionary["accessibility"]> = {
  wheelchair: "wheelchair_yes",
  induction_loop: "induction_loop",
  captions: "captions",
  audio_description: "audio_description",
  quiet_zone: "quiet_zone",
};

function toggleValue<T>(arr: T[] = [], value: T): T[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

interface FilterBottomSheetProps {
  open: boolean;
  onClose: () => void;
  filters: EventFilterState;
  onApply: (next: EventFilterState) => void;
  locale: Locale;
  dict: Dictionary;
}

// Filters expand as a bottom sheet rather than an inline panel, keeping the
// results list in view underneath (PRD §8.11).
export function FilterBottomSheet({ open, onClose, filters, onApply, locale, dict }: FilterBottomSheetProps) {
  const [draft, setDraft] = useState(filters);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setDraft(filters);
  }, [open, filters]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    sheetRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={dict.events.filters}
        tabIndex={-1}
        className="relative z-10 max-h-[85vh] w-full overflow-y-auto rounded-t-3xl bg-surface p-5 shadow-xl outline-none sm:max-w-lg sm:rounded-3xl sm:p-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-ink">{dict.events.filters}</h2>
          <button type="button" onClick={onClose} aria-label={dict.common.backToList} className="rounded-full p-2 hover:bg-brand-50">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <fieldset className="mt-5">
          <legend className="text-sm font-semibold text-ink">{dict.events.eventCategory}</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {EVENT_CATEGORIES.map((cat) => {
              const active = draft.eventCategories?.includes(cat.slug);
              return (
                <button
                  key={cat.slug}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setDraft((d) => ({ ...d, eventCategories: toggleValue(d.eventCategories, cat.slug) }))}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-sm font-medium",
                    active ? "border-brand-600 bg-brand-600 text-white" : "border-border text-ink hover:border-brand-300",
                  )}
                >
                  {pickLocale(locale, cat.name_pl, cat.name_en)}
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend className="text-sm font-semibold text-ink">{dict.events.placeCategory}</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {PLACE_CATEGORIES.map((cat) => {
              const active = draft.placeCategories?.includes(cat.slug);
              return (
                <button
                  key={cat.slug}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setDraft((d) => ({ ...d, placeCategories: toggleValue(d.placeCategories, cat.slug) }))}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-sm font-medium",
                    active ? "border-brand-600 bg-brand-600 text-white" : "border-border text-ink hover:border-brand-300",
                  )}
                >
                  {pickLocale(locale, cat.name_pl, cat.name_en)}
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend className="text-sm font-semibold text-ink">{dict.accessibility.filterLabel}</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {ACCESSIBILITY_OPTIONS.map((flag) => {
              const active = draft.accessibility?.includes(flag);
              return (
                <button
                  key={flag}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setDraft((d) => ({ ...d, accessibility: toggleValue(d.accessibility, flag) }))}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-sm font-medium",
                    active ? "border-brand-600 bg-brand-600 text-white" : "border-border text-ink hover:border-brand-300",
                  )}
                >
                  {dict.accessibility[ACCESSIBILITY_LABEL_KEY[flag]]}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-brand-50/60 px-4 py-3">
          <label htmlFor="free-only" className="text-sm font-medium text-ink">
            {dict.events.freeOnly}
          </label>
          <input
            id="free-only"
            type="checkbox"
            checked={Boolean(draft.freeOnly)}
            onChange={(e) => setDraft((d) => ({ ...d, freeOnly: e.target.checked }))}
            className="h-5 w-5 accent-brand-600"
          />
        </div>

        <fieldset className="mt-5 grid grid-cols-2 gap-3">
          <legend className="col-span-2 text-sm font-semibold text-ink">{dict.events.dateRange}</legend>
          <div>
            <label htmlFor="date-from" className="text-xs text-muted">
              {dict.events.from}
            </label>
            <input
              id="date-from"
              type="date"
              value={draft.dateFrom ?? ""}
              onChange={(e) => setDraft((d) => ({ ...d, dateFrom: e.target.value || undefined }))}
              className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm text-ink"
            />
          </div>
          <div>
            <label htmlFor="date-to" className="text-xs text-muted">
              {dict.events.to}
            </label>
            <input
              id="date-to"
              type="date"
              value={draft.dateTo ?? ""}
              onChange={(e) => setDraft((d) => ({ ...d, dateTo: e.target.value || undefined }))}
              className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm text-ink"
            />
          </div>
        </fieldset>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={() => {
              const cleared: EventFilterState = { view: draft.view };
              onApply(cleared);
              onClose();
            }}
            className="flex-1 rounded-full border border-border px-4 py-3 text-sm font-semibold text-ink hover:border-brand-300"
          >
            {dict.events.clearFilters}
          </button>
          <button
            type="button"
            onClick={() => {
              onApply(draft);
              onClose();
            }}
            className="flex-1 rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {dict.events.applyFilters}
          </button>
        </div>
      </div>
    </div>
  );
}
