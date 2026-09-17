import { LOCALES, type Locale } from "@/lib/types";
import type { Article, Author, KarnetEvent, Place } from "@/lib/types";
import { pickLocale } from "@/lib/i18n";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://karnet.example";

/** hreflang alternates for a given path (identical across locales — path-based i18n). */
export function localeAlternates(locale: Locale, path: string) {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `${SITE_URL}/${l}${path}`;
  return {
    canonical: `${SITE_URL}/${locale}${path}`,
    languages,
  };
}

export function eventJsonLd(event: KarnetEvent, place: Place, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: pickLocale(locale, event.title_pl, event.title_en),
    description: pickLocale(locale, event.description_pl, event.description_en),
    startDate: event.start_date,
    endDate: event.end_date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: pickLocale(locale, place.name_pl, place.name_en),
      address: place.address,
      geo: { "@type": "GeoCoordinates", latitude: place.latitude, longitude: place.longitude },
    },
    ...(event.ticket_url && {
      offers: {
        "@type": "Offer",
        url: event.ticket_url,
        price: event.is_free ? "0" : undefined,
        priceCurrency: "PLN",
        availability: "https://schema.org/InStock",
      },
    }),
  };
}

export function placeJsonLd(place: Place, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: pickLocale(locale, place.name_pl, place.name_en),
    address: place.address,
    geo: { "@type": "GeoCoordinates", latitude: place.latitude, longitude: place.longitude },
    description: pickLocale(locale, place.description_pl, place.description_en),
  };
}

export function articleJsonLd(article: Article, author: Author | undefined, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pickLocale(locale, article.title_pl, article.title_en),
    description: pickLocale(locale, article.excerpt_pl, article.excerpt_en),
    datePublished: article.published_at,
    author: author ? { "@type": "Person", name: author.name } : undefined,
  };
}

export function personJsonLd(author: Author, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: pickLocale(locale, author.role_title_pl, author.role_title_en),
    description: pickLocale(locale, author.bio_pl, author.bio_en),
  };
}
