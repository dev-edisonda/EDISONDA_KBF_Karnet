import type { Metadata } from "next";
import { EventsExplorer } from "@/components/events/EventsExplorer";
import { getDictionary } from "@/lib/i18n";
import { localeAlternates } from "@/lib/seo";
import { parseEventFilters } from "@/lib/filters";
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
    title: dict.events.title,
    description: dict.site.tagline,
    alternates: localeAlternates(locale, "/events"),
  };
}

// Filter/search state lives in the URL (query params) so results are shareable
// and bookmarkable (PRD §8.1). The server reads it only to seed the client's
// initial state; actual filtering runs client-side against the local dataset.
export default async function EventsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  const sp = await searchParams;
  const dict = getDictionary(locale);

  const urlParams = new URLSearchParams();
  for (const [key, value] of Object.entries(sp)) {
    if (typeof value === "string") urlParams.set(key, value);
  }
  const initialFilters = parseEventFilters(urlParams);

  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <h1 className="text-2xl font-bold text-ink sm:text-3xl">{dict.events.title}</h1>
      </div>
      <EventsExplorer initialFilters={initialFilters} locale={locale} dict={dict} />
    </div>
  );
}
