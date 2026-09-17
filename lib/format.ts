import type { Locale } from "@/lib/types";

const dateFnsLocaleTag: Record<Locale, string> = { pl: "pl-PL", en: "en-GB" };

export function formatEventDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(dateFnsLocaleTag[locale], {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export function formatEventTime(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleTimeString(dateFnsLocaleTag[locale], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatDateRange(startIso: string, endIso: string, locale: Locale): string {
  const start = new Date(startIso);
  const end = new Date(endIso);
  const sameDay = start.toDateString() === end.toDateString();

  if (sameDay) {
    return `${formatEventDate(startIso, locale)} · ${formatEventTime(startIso, locale)}`;
  }

  return `${formatEventDate(startIso, locale)} – ${formatEventDate(endIso, locale)}`;
}

export function formatMagazineDate(isoDate: string, locale: Locale): string {
  return new Date(isoDate).toLocaleDateString(dateFnsLocaleTag[locale], {
    month: "long",
    year: "numeric",
  });
}

export function formatArticleDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(dateFnsLocaleTag[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
