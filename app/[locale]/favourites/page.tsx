import type { Metadata } from "next";
import { FavouritesList } from "@/components/favourites/FavouritesList";
import { getDictionary } from "@/lib/i18n";
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
  return { title: dict.favourites.title, robots: { index: false } };
}

export default async function FavouritesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">{dict.favourites.title}</h1>
      <div className="mt-6">
        <FavouritesList locale={locale} dict={dict} />
      </div>
    </div>
  );
}
