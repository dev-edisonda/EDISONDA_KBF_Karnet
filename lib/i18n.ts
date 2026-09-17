import type { Locale } from "@/lib/types";
import pl from "@/messages/pl.json";
import en from "@/messages/en.json";

const dictionaries = { pl, en };

export type Dictionary = typeof pl;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Interpolates `{placeholder}` tokens, e.g. t(dict.events.resultsCount, { count: 3 }). */
export function interpolate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? String(vars[key]) : match));
}

/** Picks the PL/EN value for the active locale — the standard shape of bilingual fields (title_pl/title_en, etc). */
export function pickLocale(locale: Locale, pl: string, en: string): string {
  return locale === "pl" ? pl : en;
}
