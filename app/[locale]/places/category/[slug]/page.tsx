import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceCard } from "@/components/cards/PlaceCard";
import { PLACE_CATEGORIES, findPlaceCategory, getPlacesByCategory } from "@/lib/data";
import { getDictionary, pickLocale } from "@/lib/i18n";
import { localeAlternates } from "@/lib/seo";
import type { Locale } from "@/lib/types";

export function generateStaticParams() {
  return PLACE_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const category = findPlaceCategory(slug);
  if (!category) return {};
  return {
    title: pickLocale(locale, category.name_pl, category.name_en),
    alternates: localeAlternates(locale, `/places/category/${slug}`),
  };
}

export default async function PlaceCategoryPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const category = findPlaceCategory(slug);
  if (!category) notFound();
  const dict = getDictionary(locale);
  const places = getPlacesByCategory(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">{pickLocale(locale, category.name_pl, category.name_en)}</h1>
      {places.length === 0 ? (
        <p className="mt-8 text-muted">{dict.events.noResults}</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} locale={locale} dict={dict} className="w-full" />
          ))}
        </div>
      )}
    </div>
  );
}
