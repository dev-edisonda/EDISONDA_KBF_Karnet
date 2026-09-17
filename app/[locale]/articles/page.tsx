import type { Metadata } from "next";
import { Suspense } from "react";
import { ArticlesFilterList } from "@/components/articles/ArticlesFilterList";
import { ARTICLES, sortByPublishedDate } from "@/lib/data";
import { getDictionary } from "@/lib/i18n";
import { localeAlternates } from "@/lib/seo";
import { LOCALES, type Locale } from "@/lib/types";

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

export default async function ArticlesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const articles = sortByPublishedDate(ARTICLES);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">{dict.articles.title}</h1>
      <Suspense>
        <ArticlesFilterList articles={articles} locale={locale} dict={dict} />
      </Suspense>
    </div>
  );
}
