// Data access layer. Every function here reads from the local mock-data modules
// today; swapping in real Strapi REST/GraphQL calls (+ ISR revalidation) later
// should only require editing this file, not any page or component.

import { EVENT_CATEGORIES, PLACE_CATEGORIES, findEventCategory, findPlaceCategory } from "@/lib/mock-data/categories";
import { PLACES, findPlace } from "@/lib/mock-data/places";
import { EVENTS, findEvent } from "@/lib/mock-data/events";
import { ARTICLES, findArticle } from "@/lib/mock-data/articles";
import { AUTHORS, findAuthor } from "@/lib/mock-data/authors";
import { MAGAZINE_ISSUES, findMagazineIssue, currentMagazineIssue } from "@/lib/mock-data/magazine";
import { resolveAccessibility, matchesAccessibilityFilters, type AccessibilityFlag } from "@/lib/accessibility";
import type { Article, ArticleType, Author, KarnetEvent, MagazineIssue, Place } from "@/lib/types";

export {
  EVENT_CATEGORIES,
  PLACE_CATEGORIES,
  findEventCategory,
  findPlaceCategory,
  PLACES,
  findPlace,
  EVENTS,
  findEvent,
  ARTICLES,
  findArticle,
  AUTHORS,
  findAuthor,
  MAGAZINE_ISSUES,
  findMagazineIssue,
  currentMagazineIssue,
};

// "Now" is fixed to the seed data's intended present so the demo dataset (Sept–Oct
// 2026) reads as "upcoming" consistently, matching how the mock content was written.
export const NOW = new Date("2026-09-11T09:00:00+02:00");

export function isUpcoming(event: KarnetEvent, now: Date = NOW): boolean {
  return new Date(event.end_date) >= now;
}

export function sortByStartDate(events: KarnetEvent[]): KarnetEvent[] {
  return [...events].sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());
}

export function getUpcomingEvents(): KarnetEvent[] {
  return sortByStartDate(EVENTS.filter((e) => isUpcoming(e)));
}

export function getEditorialPicks(limit?: number): KarnetEvent[] {
  const picks = sortByStartDate(getUpcomingEvents().filter((e) => e.is_editorial_pick));
  return limit ? picks.slice(0, limit) : picks;
}

export function getFreeEvents(limit?: number): KarnetEvent[] {
  const free = sortByStartDate(getUpcomingEvents().filter((e) => e.is_free));
  return limit ? free.slice(0, limit) : free;
}

export function getEventsByCategory(categorySlug: string): KarnetEvent[] {
  return sortByStartDate(getUpcomingEvents().filter((e) => e.category_slugs.includes(categorySlug)));
}

export function getEventsForPlace(placeSlug: string): KarnetEvent[] {
  return sortByStartDate(getUpcomingEvents().filter((e) => e.place_slug === placeSlug));
}

export function getPlacesByCategory(categorySlug: string): Place[] {
  return PLACES.filter((p) => p.category_slugs.includes(categorySlug));
}

export function getArticlesByType(type: ArticleType): Article[] {
  return sortByPublishedDate(ARTICLES.filter((a) => a.article_type === type));
}

export function sortByPublishedDate(articles: Article[]): Article[] {
  return [...articles].sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
}

export function getArticlesForEvent(eventSlug: string): Article[] {
  return sortByPublishedDate(ARTICLES.filter((a) => a.event_slugs?.includes(eventSlug)));
}

export function getEventsForArticle(article: Article): KarnetEvent[] {
  return (article.event_slugs ?? []).map((slug) => findEvent(slug)).filter((e): e is KarnetEvent => Boolean(e));
}

export function getArticlesByAuthor(authorSlug: string): Article[] {
  return sortByPublishedDate(ARTICLES.filter((a) => a.author_slug === authorSlug));
}

export function getArchiveMagazineIssues(): MagazineIssue[] {
  const current = currentMagazineIssue();
  return [...MAGAZINE_ISSUES]
    .filter((m) => m.slug !== current.slug)
    .sort((a, b) => (a.issue_date < b.issue_date ? 1 : -1));
}

export function getAllMagazineIssuesSorted(): MagazineIssue[] {
  return [...MAGAZINE_ISSUES].sort((a, b) => (a.issue_date < b.issue_date ? 1 : -1));
}

export interface EventFilters {
  q?: string;
  eventCategories?: string[];
  placeCategories?: string[];
  accessibility?: AccessibilityFlag[];
  freeOnly?: boolean;
  dateFrom?: string;
  dateTo?: string;
}

export interface FilterableEvent {
  event: KarnetEvent;
  place: Place;
}

export function withPlaces(events: KarnetEvent[]): FilterableEvent[] {
  return events
    .map((event) => {
      const place = findPlace(event.place_slug);
      return place ? { event, place } : null;
    })
    .filter((x): x is FilterableEvent => Boolean(x));
}

export function getFilterableUpcomingEvents(): FilterableEvent[] {
  return withPlaces(getUpcomingEvents());
}

export function filterEvents(filters: EventFilters): FilterableEvent[] {
  const q = filters.q?.trim().toLowerCase();
  const dateFrom = filters.dateFrom ? new Date(filters.dateFrom + "T00:00:00+02:00") : undefined;
  const dateTo = filters.dateTo ? new Date(filters.dateTo + "T23:59:59+02:00") : undefined;

  return getFilterableUpcomingEvents().filter(({ event, place }) => {
    if (filters.eventCategories?.length) {
      if (!event.category_slugs.some((c) => filters.eventCategories!.includes(c))) return false;
    }
    if (filters.placeCategories?.length) {
      if (!place.category_slugs.some((c) => filters.placeCategories!.includes(c))) return false;
    }
    if (filters.freeOnly && !event.is_free) return false;

    if (filters.accessibility?.length) {
      const profile = resolveAccessibility(event, place);
      if (!matchesAccessibilityFilters(profile, filters.accessibility)) return false;
    }

    if (dateFrom && new Date(event.end_date) < dateFrom) return false;
    if (dateTo && new Date(event.start_date) > dateTo) return false;

    if (q) {
      const haystack = [
        event.title_pl,
        event.title_en,
        event.description_pl,
        event.description_en,
        place.name_pl,
        place.name_en,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }

    return true;
  });
}
