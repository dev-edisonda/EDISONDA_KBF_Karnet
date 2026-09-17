"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArticleCard } from "@/components/cards/ArticleCard";
import type { Article, ArticleType, Locale } from "@/lib/types";
import type { Dictionary } from "@/lib/i18n";

const TYPES: ArticleType[] = ["news", "preview", "interview", "review", "magazine"];

export function ArticlesFilterList({
  articles,
  locale,
  dict,
}: {
  articles: Article[];
  locale: Locale;
  dict: Dictionary;
}) {
  // Static export has no server to read the query string, so the type filter
  // is applied client-side from the very first render.
  const type = useSearchParams().get("type") ?? undefined;
  const filtered = articles.filter((a) => !type || a.article_type === type);

  return (
    <>
      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={`/${locale}/articles`}
          className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${
            !type ? "border-brand-600 bg-brand-600 text-white" : "border-border text-ink hover:border-brand-300"
          }`}
        >
          {dict.home.seeAll}
        </Link>
        {TYPES.map((t) => (
          <Link
            key={t}
            href={`/${locale}/articles?type=${t}`}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${
              type === t ? "border-brand-600 bg-brand-600 text-white" : "border-border text-ink hover:border-brand-300"
            }`}
          >
            {dict.articles.types[t]}
          </Link>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <ArticleCard key={article.id} article={article} locale={locale} dict={dict} className="w-full" />
        ))}
      </div>
    </>
  );
}
