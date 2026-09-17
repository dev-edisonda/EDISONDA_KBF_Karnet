import Link from "next/link";
import { CategoryIcon } from "@/components/icon";
import { PLACE_CATEGORIES } from "@/lib/data";
import { pickLocale, type Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export function PlacesCategoryGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h2 className="text-xl font-bold text-ink sm:text-2xl">{dict.home.placesTitle}</h2>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {PLACE_CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/${locale}/places/category/${cat.slug}`}
            className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface px-3 py-5 text-center transition-colors hover:border-brand-300 hover:bg-brand-50"
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: `${cat.color}1A` }}
            >
              <CategoryIcon name={cat.icon} className="h-5 w-5" style={{ color: cat.color }} />
            </span>
            <span className="text-sm font-medium text-ink">{pickLocale(locale, cat.name_pl, cat.name_en)}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
