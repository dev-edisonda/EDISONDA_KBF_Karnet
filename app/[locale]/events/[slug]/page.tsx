import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { CoverImage } from "@/components/common/CoverImage";
import { CategoryBadge } from "@/components/badges/CategoryBadge";
import { AccessibilityBadges } from "@/components/badges/AccessibilityBadges";
import { FavouriteButton } from "@/components/common/FavouriteButton";
import { ShareButton } from "@/components/common/ShareButton";
import { IcsExportButton } from "@/components/common/IcsExportButton";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { MiniMapLoader } from "@/components/events/MiniMapLoader";
import { resolveAccessibility } from "@/lib/accessibility";
import { formatDateRange } from "@/lib/format";
import { EVENTS, findEvent, findPlace, findEventCategory, findAuthor, getArticlesForEvent } from "@/lib/data";
import { getDictionary, pickLocale } from "@/lib/i18n";
import { eventJsonLd, localeAlternates } from "@/lib/seo";
import type { Locale } from "@/lib/types";

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const event = findEvent(slug);
  if (!event) return {};
  return {
    title: pickLocale(locale, event.title_pl, event.title_en),
    description: pickLocale(locale, event.meta_description_pl ?? event.description_pl, event.meta_description_en ?? event.description_en),
    alternates: localeAlternates(locale, `/events/${slug}`),
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = getDictionary(locale);
  const event = findEvent(slug);
  if (!event) notFound();
  const place = findPlace(event.place_slug);
  if (!place) notFound();

  const title = pickLocale(locale, event.title_pl, event.title_en);
  const description = pickLocale(locale, event.description_pl, event.description_en);
  const placeName = pickLocale(locale, place.name_pl, place.name_en);
  const priceLabel = event.is_free ? dict.event.freeEntry : pickLocale(locale, event.ticket_price_info_pl, event.ticket_price_info_en);
  const primaryCategory = findEventCategory(event.category_slugs[0]);
  const profile = resolveAccessibility(event, place);
  const relatedArticles = getArticlesForEvent(event.slug);
  const pickAuthor = event.picked_by_author_slug ? findAuthor(event.picked_by_author_slug) : undefined;
  const pickNote = pickLocale(locale, event.pick_note_pl ?? "", event.pick_note_en ?? "");
  const url = `https://karnet.example/${locale}/events/${event.slug}`;

  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-6 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd(event, place, locale)) }} />

      <Link href={`/${locale}/events`} className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-brand-700">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {dict.common.backToList}
      </Link>

      <CoverImage color={primaryCategory?.color ?? "#6B7280"} icon={primaryCategory?.icon} className="mt-4 aspect-[16/9] w-full rounded-3xl" />

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {event.category_slugs.map((s) => {
          const cat = findEventCategory(s);
          return cat ? <CategoryBadge key={s} category={cat} locale={locale} href={`/${locale}/events/category/${s}`} /> : null;
        })}
        {event.is_editorial_pick && (
          <span className="rounded-full bg-brand-700 px-2.5 py-1 text-xs font-semibold text-white">{dict.event.editorsPick}</span>
        )}
      </div>

      <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{title}</h1>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
        <span className="font-medium text-brand-700">{formatDateRange(event.start_date, event.end_date, locale)}</span>
        <Link href={`/${locale}/places/${place.slug}`} className="flex items-center gap-1 hover:text-brand-700">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          {placeName}
        </Link>
      </div>

      {pickNote && (
        <p className="mt-4 rounded-2xl bg-brand-50 px-4 py-3 text-sm text-brand-800">
          {pickAuthor && (
            <span className="font-semibold">
              {dict.event.pickedBy} {pickAuthor.name}:{" "}
            </span>
          )}
          {pickNote}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="text-lg font-semibold text-ink">{priceLabel}</span>
        {event.ticket_url && (
          <a
            href={event.ticket_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            {dict.event.buyTickets}
          </a>
        )}
        <IcsExportButton event={event} place={place} locale={locale} dict={dict} />
        <ShareButton title={title} url={url} dict={dict} />
        <FavouriteButton eventId={event.id} dict={dict} />
      </div>

      <p className="mt-2 text-xs text-muted">{dict.event.checkedByEditors}</p>

      <div className="mt-8 space-y-2 text-ink">
        {description.split("\n").map((para, i) => (
          <p key={i} className="leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      <div className="mt-8">
        <AccessibilityBadges profile={profile} locale={locale} dict={dict} variant="panel" />
      </div>

      <section className="mt-8 rounded-2xl border border-border bg-surface p-4 sm:p-6">
        <h2 className="text-lg font-semibold text-ink">{dict.event.aboutPlace}</h2>
        <p className="mt-1 text-ink">{placeName}</p>
        <p className="text-sm text-muted">{place.address}</p>
        <div className="mt-4">
          <MiniMapLoader lat={place.latitude} lng={place.longitude} color={primaryCategory?.color} />
        </div>
        <Link href={`/${locale}/places/${place.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand-700 hover:underline">
          {dict.common.readMore}
        </Link>
      </section>

      {relatedArticles.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-ink">{dict.event.relatedArticles}</h2>
          <div className="rail mt-4 -mx-4 px-4 sm:-mx-6 sm:px-6">
            {relatedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} locale={locale} dict={dict} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
