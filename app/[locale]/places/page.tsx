import type { Metadata } from "next";
import { PlaceCard } from "@/components/cards/PlaceCard";
import { PLACES } from "@/lib/data";
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
  return { title: dict.places.title, alternates: localeAlternates(locale, "/places") };
}

export default async function PlacesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">{dict.places.title}</h1>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PLACES.map((place) => (
          <PlaceCard key={place.id} place={place} locale={locale} dict={dict} className="w-full" />
        ))}
      </div>
    </div>
  );
}
