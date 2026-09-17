"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CoverImage } from "@/components/common/CoverImage";
import { formatDateRange } from "@/lib/format";
import { pickLocale, type Dictionary } from "@/lib/i18n";
import { findEventCategory } from "@/lib/data";
import type { KarnetEvent, Locale, Place } from "@/lib/types";

interface Slide {
  event: KarnetEvent;
  place: Place;
}

// Small, hand-picked rotating set of editorial highlights (PRD §6, §8.10).
// Auto-rotates but pauses on hover/focus so it never becomes an uncontrollable
// moving-content trap for keyboard or screen-reader users (WCAG 2.2.2).
export function HeroCarousel({ slides, locale, dict }: { slides: Slide[]; locale: Locale; dict: Dictionary }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length <= 1 || paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length, paused]);

  if (slides.length === 0) return null;
  const { event, place } = slides[index];
  const title = pickLocale(locale, event.title_pl, event.title_en);
  const placeName = pickLocale(locale, place.name_pl, place.name_en);
  const note = pickLocale(locale, event.pick_note_pl ?? "", event.pick_note_en ?? "");
  const category = findEventCategory(event.category_slugs[0]);

  return (
    <section
      className="relative overflow-hidden bg-brand-900 text-white"
      aria-roledescription="carousel"
      aria-label={dict.home.editorsPicksTitle}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 md:items-center md:py-16">
        <div>
          <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            {dict.event.editorsPick}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{title}</h1>
          <p className="mt-2 text-white/80">
            {placeName} · {formatDateRange(event.start_date, event.end_date, locale)}
          </p>
          {note && <p className="mt-4 max-w-md text-white/90">{note}</p>}
          <Link
            href={`/${locale}/events/${event.slug}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50"
          >
            {dict.home.heroCta}
          </Link>
        </div>
        <CoverImage
          color={category?.color ?? "#C81D5C"}
          icon={category?.icon}
          className="aspect-video w-full rounded-2xl md:aspect-square"
        />
      </div>

      {slides.length > 1 && (
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 pb-8 sm:px-6">
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
            aria-label={locale === "pl" ? "Poprzedni slajd" : "Previous slide"}
            className="rounded-full border border-white/30 p-2 transition-colors hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <div className="flex gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.event.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${i + 1} / ${slides.length}`}
                aria-current={i === index}
                className={`h-1.5 w-6 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/30"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
            aria-label={locale === "pl" ? "Następny slajd" : "Next slide"}
            className="rounded-full border border-white/30 p-2 transition-colors hover:bg-white/10"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}
