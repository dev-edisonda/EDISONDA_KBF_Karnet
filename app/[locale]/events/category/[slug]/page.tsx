import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventCard } from "@/components/cards/EventCard";
import { EVENT_CATEGORIES, findEventCategory, getEventsByCategory, withPlaces } from "@/lib/data";
import { getDictionary, interpolate, pickLocale } from "@/lib/i18n";
import { localeAlternates } from "@/lib/seo";
import type { Locale } from "@/lib/types";

export function generateStaticParams() {
  return EVENT_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const category = findEventCategory(slug);
  if (!category) return {};
  return {
    title: pickLocale(locale, category.name_pl, category.name_en),
    alternates: localeAlternates(locale, `/events/category/${slug}`),
  };
}

export default async function EventCategoryPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const category = findEventCategory(slug);
  if (!category) notFound();
  const dict = getDictionary(locale);
  const items = withPlaces(getEventsByCategory(slug));

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">{pickLocale(locale, category.name_pl, category.name_en)}</h1>
      <p className="mt-2 text-sm text-muted">{interpolate(dict.events.resultsCount, { count: items.length })}</p>
      {items.length === 0 ? (
        <p className="mt-8 text-muted">{dict.events.noResults}</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ event, place }) => (
            <EventCard key={event.id} event={event} place={place} locale={locale} dict={dict} className="w-full sm:w-full" />
          ))}
        </div>
      )}
    </div>
  );
}
