import type { KarnetEvent, Locale, Place } from "@/lib/types";

function toIcsDate(iso: string): string {
  return new Date(iso).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function escapeIcsText(text: string): string {
  return text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

function eventToIcsBlock(event: KarnetEvent, place: Place, locale: Locale): string {
  const title = locale === "pl" ? event.title_pl : event.title_en;
  const description = locale === "pl" ? event.description_pl : event.description_en;
  const placeName = locale === "pl" ? place.name_pl : place.name_en;
  const now = toIcsDate(new Date().toISOString());

  return [
    "BEGIN:VEVENT",
    `UID:${event.id}@karnet.example`,
    `DTSTAMP:${now}`,
    `DTSTART:${toIcsDate(event.start_date)}`,
    `DTEND:${toIcsDate(event.end_date)}`,
    `SUMMARY:${escapeIcsText(title)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    `LOCATION:${escapeIcsText(`${placeName}, ${place.address}`)}`,
    event.ticket_url ? `URL:${event.ticket_url}` : undefined,
    "END:VEVENT",
  ]
    .filter(Boolean)
    .join("\r\n");
}

function wrapCalendar(blocks: string[]): string {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//KARNET//Events//PL",
    "CALSCALE:GREGORIAN",
    ...blocks,
    "END:VCALENDAR",
  ].join("\r\n");
}

export function generateIcsForEvent(event: KarnetEvent, place: Place, locale: Locale): string {
  return wrapCalendar([eventToIcsBlock(event, place, locale)]);
}

export function generateIcsForEvents(items: { event: KarnetEvent; place: Place }[], locale: Locale): string {
  return wrapCalendar(items.map(({ event, place }) => eventToIcsBlock(event, place, locale)));
}

export function downloadIcsFile(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
