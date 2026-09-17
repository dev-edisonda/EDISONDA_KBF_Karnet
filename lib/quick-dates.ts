import { NOW } from "@/lib/data";

export type QuickDateKey = "today" | "tomorrow" | "day-after" | "weekend" | "next-week";

export interface QuickDateOption {
  key: QuickDateKey;
  label_pl: string;
  label_en: string;
  from: string;
  to: string;
}

function toIsoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function addDays(d: Date, days: number): Date {
  const copy = new Date(d);
  copy.setDate(copy.getDate() + days);
  return copy;
}

export function getQuickDateOptions(now: Date = NOW): QuickDateOption[] {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayOfWeek = today.getDay(); // 0 = Sunday
  const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
  const saturday = addDays(today, daysUntilSaturday);
  const sunday = addDays(saturday, 1);
  const nextWeekStart = addDays(today, 8 - dayOfWeek === 8 ? 1 : 8 - dayOfWeek);
  const nextWeekEnd = addDays(nextWeekStart, 6);

  return [
    { key: "today", label_pl: "Dziś", label_en: "Today", from: toIsoDate(today), to: toIsoDate(today) },
    { key: "tomorrow", label_pl: "Jutro", label_en: "Tomorrow", from: toIsoDate(addDays(today, 1)), to: toIsoDate(addDays(today, 1)) },
    { key: "day-after", label_pl: "Pojutrze", label_en: "Day after", from: toIsoDate(addDays(today, 2)), to: toIsoDate(addDays(today, 2)) },
    { key: "weekend", label_pl: "W ten weekend", label_en: "This weekend", from: toIsoDate(saturday), to: toIsoDate(sunday) },
    { key: "next-week", label_pl: "W przyszłym tygodniu", label_en: "Next week", from: toIsoDate(nextWeekStart), to: toIsoDate(nextWeekEnd) },
  ];
}
