"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/types";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const qs = searchParams.toString();
  const segments = pathname.split("/");

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border p-0.5" role="group" aria-label="Language / Język">
      {LOCALES.map((l) => {
        const newSegments = [...segments];
        newSegments[1] = l;
        const href = (newSegments.join("/") || `/${l}`) + (qs ? `?${qs}` : "");
        const active = l === locale;
        return (
          <Link
            key={l}
            href={href}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
              active ? "bg-brand-600 text-white" : "text-ink hover:bg-brand-50"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
