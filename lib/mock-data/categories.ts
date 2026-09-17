import type { EventCategory, PlaceCategory } from "@/lib/types";

// Colour-coding is defined once here and reused everywhere (cards, filter chips,
// map pins) so users only have to learn it once — PRD §10.3.
export const EVENT_CATEGORIES: EventCategory[] = [
  { id: "ec1", slug: "festiwale", name_pl: "Festiwale", name_en: "Festivals", icon: "PartyPopper", color: "#B91C5C" },
  { id: "ec2", slug: "muzyka", name_pl: "Muzyka", name_en: "Music", icon: "Music", color: "#7C3AED" },
  { id: "ec3", slug: "teatr", name_pl: "Teatr", name_en: "Theatre", icon: "Theater", color: "#B45309" },
  { id: "ec4", slug: "literatura", name_pl: "Literatura", name_en: "Literature", icon: "BookOpen", color: "#0F766E" },
  { id: "ec5", slug: "film", name_pl: "Film", name_en: "Film", icon: "Film", color: "#1D4ED8" },
  { id: "ec6", slug: "wystawy", name_pl: "Wystawy", name_en: "Exhibitions", icon: "Palette", color: "#C2410C" },
  { id: "ec7", slug: "okolice-krakowa", name_pl: "Okolice Krakowa", name_en: "Around Kraków", icon: "TreePine", color: "#15803D" },
  { id: "ec8", slug: "inne", name_pl: "Inne", name_en: "Other", icon: "Sparkles", color: "#6B7280" },
];

export const PLACE_CATEGORIES: PlaceCategory[] = [
  { id: "pc1", slug: "teatry", name_pl: "Teatry", name_en: "Theatres", icon: "Theater", color: "#B45309" },
  { id: "pc2", slug: "muzea", name_pl: "Muzea", name_en: "Museums", icon: "Landmark", color: "#92400E" },
  { id: "pc3", slug: "galerie", name_pl: "Galerie", name_en: "Galleries", icon: "Palette", color: "#C2410C" },
  { id: "pc4", slug: "kina", name_pl: "Kina", name_en: "Cinemas", icon: "Film", color: "#1D4ED8" },
  { id: "pc5", slug: "kluby-muzyczne", name_pl: "Kluby muzyczne", name_en: "Music clubs", icon: "Music", color: "#7C3AED" },
  { id: "pc6", slug: "plener", name_pl: "Plener", name_en: "Outdoor", icon: "TreePine", color: "#15803D" },
  { id: "pc7", slug: "biblioteki", name_pl: "Biblioteki", name_en: "Libraries", icon: "Library", color: "#0F766E" },
  { id: "pc8", slug: "domy-i-centra-kultury", name_pl: "Domy i centra kultury", name_en: "Cultural centres", icon: "Building2", color: "#BE185D" },
  { id: "pc9", slug: "inne", name_pl: "Inne", name_en: "Other", icon: "MoreHorizontal", color: "#6B7280" },
];

export function findEventCategory(slug: string): EventCategory | undefined {
  return EVENT_CATEGORIES.find((c) => c.slug === slug);
}

export function findPlaceCategory(slug: string): PlaceCategory | undefined {
  return PLACE_CATEGORIES.find((c) => c.slug === slug);
}
