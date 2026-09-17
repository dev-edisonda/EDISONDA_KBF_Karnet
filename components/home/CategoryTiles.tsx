import Link from "next/link";
import { CategoryIcon } from "@/components/icon";
import { EVENT_CATEGORIES } from "@/lib/data";
import { pickLocale, type Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export function CategoryTiles({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <div className="mt-6">
      <h2 className="sr-only">{dict.home.categoriesTitle}</h2>
      <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5 px-4">
        {EVENT_CATEGORIES.map((cat) => (
          <li key={cat.slug}>
            <Link
              href={`/${locale}/events/category/${cat.slug}`}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand-300 hover:bg-brand-50"
            >
              <CategoryIcon name={cat.icon} className="h-4 w-4" style={{ color: cat.color }} />
              {pickLocale(locale, cat.name_pl, cat.name_en)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
