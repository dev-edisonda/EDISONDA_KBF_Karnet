import type { Metadata } from "next";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { SearchBar } from "@/components/home/SearchBar";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { DateChipsRow } from "@/components/home/DateChipsRow";
import { Rail } from "@/components/home/Rail";
import { EventCard } from "@/components/cards/EventCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { MagazineTeaser } from "@/components/cards/MagazineTeaser";
import { TeamTeaser } from "@/components/home/TeamTeaser";
import { PlacesCategoryGrid } from "@/components/home/PlacesCategoryGrid";
import { NewsletterSignup } from "@/components/home/NewsletterSignup";
import {
  getEditorialPicks,
  getFreeEvents,
  getEventsByCategory,
  withPlaces,
  ARTICLES,
  sortByPublishedDate,
  currentMagazineIssue,
  findEventCategory,
} from "@/lib/data";
import { getDictionary, pickLocale } from "@/lib/i18n";
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
  return {
    title: dict.site.name,
    description: dict.site.tagline,
    alternates: localeAlternates(locale, ""),
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  const editorsPicks = withPlaces(getEditorialPicks(6));
  const freeEvents = withPlaces(getFreeEvents(8));
  const musicEvents = withPlaces(getEventsByCategory("muzyka").slice(0, 8));
  const recentArticles = sortByPublishedDate(ARTICLES).slice(0, 6);
  const issue = currentMagazineIssue();
  const musicCategory = findEventCategory("muzyka");

  return (
    <>
      <HeroCarousel slides={editorsPicks.slice(0, 4)} locale={locale} dict={dict} />

      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <SearchBar locale={locale} dict={dict} />
      </div>
      <CategoryTiles locale={locale} dict={dict} />

      <DateChipsRow locale={locale} dict={dict} />

      <Rail
        title={dict.home.editorsPicksTitle}
        subtitle={dict.home.editorsPicksSubtitle}
        seeAllHref={`/${locale}/events`}
        seeAllLabel={dict.home.seeAll}
      >
        {editorsPicks.map(({ event, place }) => (
          <EventCard key={event.id} event={event} place={place} locale={locale} dict={dict} />
        ))}
      </Rail>

      {musicEvents.length > 0 && musicCategory && (
        <Rail
          title={pickLocale(locale, musicCategory.name_pl, musicCategory.name_en)}
          seeAllHref={`/${locale}/events/category/muzyka`}
          seeAllLabel={dict.home.seeAll}
        >
          {musicEvents.map(({ event, place }) => (
            <EventCard key={event.id} event={event} place={place} locale={locale} dict={dict} />
          ))}
        </Rail>
      )}

      <Rail title={dict.home.freeEntryTitle} seeAllHref={`/${locale}/events?free=1`} seeAllLabel={dict.home.seeAll}>
        {freeEvents.map(({ event, place }) => (
          <EventCard key={event.id} event={event} place={place} locale={locale} dict={dict} />
        ))}
      </Rail>

      <Rail title={dict.home.articlesTitle} seeAllHref={`/${locale}/articles`} seeAllLabel={dict.home.seeAll}>
        {recentArticles.map((article) => (
          <ArticleCard key={article.id} article={article} locale={locale} dict={dict} />
        ))}
      </Rail>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="mb-5 text-xl font-bold text-ink sm:text-2xl">{dict.home.magazineTitle}</h2>
        <MagazineTeaser issue={issue} locale={locale} dict={dict} />
      </section>

      <PlacesCategoryGrid locale={locale} dict={dict} />

      <TeamTeaser locale={locale} dict={dict} />

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
          <NewsletterSignup dict={dict} />
        </div>
      </section>
    </>
  );
}
