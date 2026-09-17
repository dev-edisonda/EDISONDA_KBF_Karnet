import Link from "next/link";
import { getQuickDateOptions } from "@/lib/quick-dates";
import { pickLocale, type Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export function DateChipsRow({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const options = getQuickDateOptions();
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <h2 className="text-sm font-semibold text-muted">{dict.home.quickDatesTitle}</h2>
      <div className="rail mt-3">
        {options.map((opt) => (
          <Link
            key={opt.key}
            href={`/${locale}/events?from=${opt.from}&to=${opt.to}`}
            className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand-300 hover:bg-brand-50"
          >
            {pickLocale(locale, opt.label_pl, opt.label_en)}
          </Link>
        ))}
      </div>
    </div>
  );
}
