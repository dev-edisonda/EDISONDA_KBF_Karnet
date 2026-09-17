import Link from "next/link";
import { Suspense } from "react";
import { LanguageSwitcher } from "@/components/nav/LanguageSwitcher";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

const NAV_ITEMS: { href: string; key: "home" | "events" | "places" | "articles" | "team" | "magazine" }[] = [
  { href: "", key: "home" },
  { href: "/events", key: "events" },
  { href: "/places", key: "places" },
  { href: "/articles", key: "articles" },
  { href: "/team", key: "team" },
  { href: "/magazine", key: "magazine" },
];

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={`/${locale}`} className="text-xl font-extrabold tracking-tight text-brand-700">
          {dict.site.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label={dict.nav.home}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {dict.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={`/${locale}/favourites`}
            className="hidden rounded-full px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:bg-brand-50 hover:text-brand-700 md:inline-flex"
          >
            {dict.nav.favourites}
          </Link>
          <Suspense fallback={<div className="h-8 w-16 rounded-full border border-border" aria-hidden="true" />}>
            <LanguageSwitcher locale={locale} />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
