// Types mirror the proposed Strapi collection types from KARNET-PRD.md §7 and §12.
// When the CMS is wired up, only lib/data.ts should need to change — these types
// are the intended shape of the Strapi API response (camelCase/relations flattened
// for convenience on the frontend).

export type Locale = "pl" | "en";

export const LOCALES: Locale[] = ["pl", "en"];
export const DEFAULT_LOCALE: Locale = "pl";

export type WheelchairAccess = "yes" | "no" | "partial" | "unknown";

export interface AccessibilityProfile {
  wheelchair_accessible: WheelchairAccess;
  induction_loop: boolean;
  captions_available: boolean;
  audio_description_available: boolean;
  quiet_zone_available: boolean;
  accessible_toilet: boolean;
  accessible_parking: boolean;
  notes_pl?: string;
  notes_en?: string;
}

// Only the fields actually set override the place's baseline (see lib/accessibility.ts)
export type AccessibilityOverride = Partial<AccessibilityProfile>;

export interface EventCategory {
  id: string;
  slug: string;
  name_pl: string;
  name_en: string;
  icon: string;
  color: string;
}

export interface PlaceCategory {
  id: string;
  slug: string;
  name_pl: string;
  name_en: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Author {
  id: string;
  slug: string;
  name: string;
  role_title_pl: string;
  role_title_en: string;
  bio_pl: string;
  bio_en: string;
  initials: string;
  avatar_color: string;
  social_links?: SocialLink[];
}

export interface Place {
  id: string;
  slug: string;
  name_pl: string;
  name_en: string;
  address: string;
  latitude: number;
  longitude: number;
  description_pl: string;
  description_en: string;
  category_slugs: string[];
  accessibility_profile: AccessibilityProfile;
}

export interface EventSession {
  date: string;
  place_slug?: string;
  ticket_url?: string;
}

export interface KarnetEvent {
  id: string;
  slug: string;
  title_pl: string;
  title_en: string;
  description_pl: string;
  description_en: string;
  start_date: string;
  end_date: string;
  sessions?: EventSession[];
  place_slug: string;
  category_slugs: string[];
  article_slugs?: string[];
  ticket_url?: string;
  ticket_price_info_pl: string;
  ticket_price_info_en: string;
  is_free: boolean;
  accessibility_override?: AccessibilityOverride;
  is_editorial_pick: boolean;
  pick_note_pl?: string;
  pick_note_en?: string;
  picked_by_author_slug?: string;
  meta_description_pl?: string;
  meta_description_en?: string;
}

export type ArticleType = "news" | "preview" | "interview" | "review" | "magazine";

export interface Article {
  id: string;
  slug: string;
  title_pl: string;
  title_en: string;
  excerpt_pl: string;
  excerpt_en: string;
  body_pl: string[];
  body_en: string[];
  published_at: string;
  article_type: ArticleType;
  author_slug: string;
  event_slugs?: string[];
}

export interface MagazineIssue {
  id: string;
  slug: string;
  issue_number: number;
  title_pl: string;
  title_en: string;
  issue_date: string;
  summary_pl: string;
  summary_en: string;
  read_online_url?: string;
}

export interface Favourite {
  event_id: string;
  saved_at: string;
}
