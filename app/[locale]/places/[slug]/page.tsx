import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CoverImage } from "@/components/common/CoverImage";
import { CategoryBadge } from "@/components/badges/CategoryBadge";
import { AccessibilityBadges } from "@/components/badges/AccessibilityBadges";
import { EventCard } from "@/components/cards/EventCard";
import { MiniMapLoader } from "@/components/events/MiniMapLoader";
import { PLACES, findPlace, findPlaceCategory, getEventsForPlace } from "@/lib/data";
import { getDictionary, pickLocale } from "@/lib/i18n";
import { localeAlternates, placeJsonLd } from "@/lib/seo";
import type { Locale } from "@/lib/types";

export function generateStaticParams() {
  return PLACES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const place = findPlace(slug);
  if (!place) return {};
  return {
    title: pickLocale(locale, place.name_pl, place.name_en),
    description: pickLocale(locale, place.description_pl, place.description_en),
    alternates: localeAlternates(locale, `/places/${slug}`),
  };
}

export default async function PlaceDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const place = findPlace(slug);
  if (!place) notFound();
  const dict = getDictionary(locale);
  const name = pickLocale(locale, place.name_pl, place.name_en);
  const description = pickLocale(locale, place.description_pl, place.description_en);
  const primaryCategory = findPlaceCategory(place.category_slugs[0]);
  const upcoming = getEventsForPlace(place.slug).map((event) => ({ event, place }));

  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-6 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd(place, locale)) }}
      />
      <Link href={`/${locale}/places`} className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-brand-700">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {dict.common.backToList}
      </Link>

      <CoverImage
        color={primaryCategory?.color ?? "#6B7280"}
        icon={primaryCategory?.icon}
        className="mt-4 aspect-[16/9] w-full rounded-3xl"
      />

      <div className="mt-5 flex flex-wrap gap-2">
        {place.category_slugs.map((s) => {
          const cat = findPlaceCategory(s);
          return cat ? <CategoryBadge key={s} category={cat} locale={locale} href={`/${locale}/places/category/${s}`} /> : null;
        })}
      </div>

      <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{name}</h1>
      <p className="mt-1 text-sm text-muted">{place.address}</p>

      <p className="mt-6 leading-relaxed text-ink">{description}</p>

      <div className="mt-6">
        <MiniMapLoader lat={place.latitude} lng={place.longitude} color={primaryCategory?.color} />
      </div>

      <div className="mt-8">
        <AccessibilityBadges profile={place.accessibility_profile} locale={locale} dict={dict} variant="panel" />
      </div>

      {upcoming.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-ink">{dict.places.upcomingEvents}</h2>
          <div className="rail mt-4 -mx-4 px-4 sm:-mx-6 sm:px-6">
            {upcoming.map(({ event, place: p }) => (
              <EventCard key={event.id} event={event} place={p} locale={locale} dict={dict} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
