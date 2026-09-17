import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { ARTICLES, sortByPublishedDate } from "@/lib/data";
import { getDictionary } from "@/lib/i18n";
import { localeAlternates } from "@/lib/seo";
import { LOCALES, type ArticleType, type Locale } from "@/lib/types";

const TYPES: ArticleType[] = ["news", "preview", "interview", "review", "magazine"];

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.articles.title, alternates: localeAlternates(locale, "/articles") };
}

export default async function ArticlesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ type?: string }>;
}) {
  const { locale } = await params;
  const { type } = await searchParams;
  const dict = getDictionary(locale);
  const articles = sortByPublishedDate(ARTICLES).filter((a) => !type || a.article_type === type);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">{dict.articles.title}</h1>
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
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} locale={locale} dict={dict} className="w-full" />
        ))}
      </div>
    </div>
  );
}
