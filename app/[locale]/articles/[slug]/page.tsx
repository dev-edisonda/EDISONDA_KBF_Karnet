import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CoverImage } from "@/components/common/CoverImage";
import { Avatar } from "@/components/common/Avatar";
import { EventCard } from "@/components/cards/EventCard";
import { ARTICLES, findArticle, findAuthor, getEventsForArticle, withPlaces } from "@/lib/data";
import { formatArticleDate } from "@/lib/format";
import { getDictionary, pickLocale } from "@/lib/i18n";
import { articleJsonLd, localeAlternates } from "@/lib/seo";
import type { Article, Locale } from "@/lib/types";

const TYPE_COLOR: Record<Article["article_type"], string> = {
  news: "#1D4ED8",
  preview: "#0F766E",
  interview: "#7C3AED",
  review: "#C2410C",
  magazine: "#B91C5C",
};

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = findArticle(slug);
  if (!article) return {};
  return {
    title: pickLocale(locale, article.title_pl, article.title_en),
    description: pickLocale(locale, article.excerpt_pl, article.excerpt_en),
    alternates: localeAlternates(locale, `/articles/${slug}`),
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = findArticle(slug);
  if (!article) notFound();
  const dict = getDictionary(locale);
  const author = findAuthor(article.author_slug);
  const title = pickLocale(locale, article.title_pl, article.title_en);
  const body = locale === "pl" ? article.body_pl : article.body_en;
  const relatedEvents = withPlaces(getEventsForArticle(article));

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-6 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article, author, locale)) }}
      />
      <Link href={`/${locale}/articles`} className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-brand-700">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {dict.common.backToList}
      </Link>

      <CoverImage color={TYPE_COLOR[article.article_type]} className="mt-4 aspect-[16/9] w-full rounded-3xl" />

      <span className="mt-5 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
        {dict.articles.types[article.article_type]}
      </span>
      <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{title}</h1>

      {author && (
        <Link href={`/${locale}/team#${author.slug}`} className="mt-4 flex items-center gap-3">
          <Avatar initials={author.initials} color={author.avatar_color} name={author.name} size="sm" />
          <div>
            <p className="text-sm font-semibold text-ink">{author.name}</p>
            <p className="text-xs text-muted">{formatArticleDate(article.published_at, locale)}</p>
          </div>
        </Link>
      )}

      <div className="mt-8 space-y-4 text-ink">
        {body.map((para, i) => (
          <p key={i} className="leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {relatedEvents.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-ink">{dict.articles.relatedEvents}</h2>
          <div className="rail mt-4 -mx-4 px-4 sm:-mx-6 sm:px-6">
            {relatedEvents.map(({ event, place }) => (
              <EventCard key={event.id} event={event} place={place} locale={locale} dict={dict} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
