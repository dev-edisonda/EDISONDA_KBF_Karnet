import type { Metadata } from "next";
import { Suspense } from "react";
import { EventsExplorer } from "@/components/events/EventsExplorer";
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
  return {
    title: dict.events.title,
    description: dict.site.tagline,
    alternates: localeAlternates(locale, "/events"),
  };
}

export default async function EventsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <h1 className="text-2xl font-bold text-ink sm:text-3xl">{dict.events.title}</h1>
      </div>
      <Suspense>
        <EventsExplorer locale={locale} dict={dict} />
      </Suspense>
    </div>
  );
}
