# Product Requirements Document: KARNET

**A cultural events discovery platform for Kraków, Poland**

Version 1.1 | Draft

---

## 1. Overview

KARNET is a website for discovering cultural events in Kraków — concerts, exhibitions, theatre, festivals, workshops, and more. It combines editorial content (articles and picks written by a real, named team) with structured event and venue data, and gives people with disabilities clear, reliable information about whether they can attend a given event.

The product is built solo with an AI co-pilot, so this PRD intentionally excludes team roles, timelines, and sprint planning. It focuses on scope, data model, and functional/non-functional requirements.

*This version incorporates a reference mockup of the existing Kraków Culture / Karnet portal, used as UI/IA inspiration (see Section 6 and 9).*

## 2. Goals

- Make it fast and easy to find relevant events in Kraków, by browsing, searching, filtering, or exploring a map.
- Present rich event detail pages that connect an event to its place, categories, tickets, and related editorial articles.
- Support both Polish and English audiences equally (not a translated afterthought).
- Let anyone save events they care about, with or without an account, and get them into their own calendar.
- Be genuinely usable by people with disabilities — both the site itself (WCAG 2.1 AA) and the event data (accessibility of the event/venue).
- Rank well in Polish and English search results for "things to do in Kraków" style queries.
- Feel like it's made by people, not a database dump: named editors curate what's worth seeing, write about it, and put their name on it.
- Work as a genuinely good mobile product, not a shrunk-down desktop site — most visitors will be checking "what's on tonight" from their phone.

## 3. Non-goals (out of scope for v1)

- Ticket sales/checkout — KARNET links out to ticket providers, it does not process payments.
- Native mobile apps.
- Organizer/public event submission workflow (the reference site has a "Dodaj wydarzenie" / "Submit an event" link; treated as a v2 feature — see Open Questions).
- User-generated content (reviews, comments).
- Multi-city expansion (architecture should not actively prevent it, but no UI/config for it now).

## 4. Tech Stack

| Layer | Choice |
|---|---|
| CMS / Content & API | Strapi (headless) |
| Database | PostgreSQL |
| Frontend framework | Next.js |
| Styling | Tailwind CSS |
| Maps | Leaflet + OpenStreetMap |
| Calendar export | `.ics` generation (server-side, from event data) |

Rendering strategy note: because SEO is a core goal, event, place, article, and category pages should use Next.js SSG/ISR (statically generated, incrementally revalidated) rather than pure client-side rendering, with fresh data pulled from Strapi on publish/update via revalidation webhooks.

## 5. Personas (brief)

- **Local resident** — browses regularly, wants filters and favourites, checks accessibility for a friend or family member.
- **Tourist** — arrives via search or a travel article, wants a quick "what's on" view, likely English-language, map-oriented, mostly on a phone.
- **Person with a disability (or planning for one)** — needs to know *before* they go whether a venue/event works for their access needs.
- **Content author / editor** — writes articles, picks what's worth featuring, manages events/places in Strapi.

## 6. Editorial & Human Voice

This is a product principle as much as a feature, and it should shape both the data model and the UI:

- Every event and place shown as a **highlight is a human decision**, not an algorithmic sort — someone on the team chose it and (ideally) can say why in a line or two.
- **Authors are visible people**, not "admin" — name, photo, and role (e.g. "redaktor naczelny" / editor-in-chief, "redakcja" / editorial team) appear next to what they write and what they pick. The Team page exists specifically to make this team visible and credible.
- Editorial judgment shows up in at least three places in the product:
  1. **Homepage hero/featured carousel** — a small, hand-picked rotating set of events.
  2. **"Recommended by the editors" rail** — a larger curated list, refreshed regularly, each optionally carrying a short editor's note.
  3. **Articles** — previews, interviews, and reviews that give context a raw listing can't.
- Every event listed is understood to have been checked by a human against the organizer (dates, prices, accessibility) rather than scraped and left unverified — this is a trust signal worth stating on the site (e.g. in an "About Karnet" blurb), and worth being true operationally.
- Practical implication for the data model: curation is explicit, first-class data (a flag + optional note + who picked it), not inferred from view counts or recency.

## 7. Information Architecture & Data Model

Proposed Strapi collection types. This is the backbone of the whole product — get this right early.

### 7.1 Event
- `title_pl`, `title_en`, `slug`
- `description_pl`, `description_en` (rich text)
- `start_date`, `end_date`, optional recurring `sessions` (see Open Questions — multi-date events)
- `cover_image`
- Relation → **Place** (one place per event/session)
- Relation → **Event Categories** (many-to-many)
- Relation → **Articles** (many-to-many; an event can have 0+ related articles)
- `ticket_url` (external link) + `ticket_price_info` (text, e.g. "20–40 zł" or "Wstęp wolny" for free entry — free-entry events should be filterable as their own facet, mirrored in the reference site's "Wstęp wolny" rail)
- **Accessibility overrides** (component, optional — see 7.5): only filled in when this specific event differs from its place's default accessibility
- `is_editorial_pick` (boolean) + `pick_note_pl`/`pick_note_en` (short text, optional) + relation → **Author** (`picked_by`) — powers the "Recommended by the editors" rail described in Section 6
- `status` (draft/published, handled natively by Strapi)
- SEO fields: `meta_title`, `meta_description` (or reuse Strapi SEO plugin)

### 7.2 Place
- `name_pl`, `name_en`, `slug`
- `address`, `latitude`, `longitude` (for Leaflet)
- `description_pl`, `description_en`
- `cover_image` / gallery
- Relation → **Place Categories** (many-to-many — e.g. Teatry/Theatres, Muzea/Museums, Galerie/Galleries, Kina/Cinemas, Kluby muzyczne/Music clubs, Plener/Outdoor, Biblioteki/Libraries, Domy i centra kultury/Cultural centres, Inne/Other — matching the reference site's place categories)
- **Accessibility profile** (component — see 7.5): the default/baseline accessibility of the venue
- Relation → **Events** (one-to-many, inverse of Event→Place)

### 7.3 Event Category & Place Category
Two separate, simple collection types (not shared), each with:
- `name_pl`, `name_en`, `slug`, `icon`, `color` (for the colour-coded category chips/badges seen across cards)

Example Event Categories (from the reference site): Festiwale/Festivals, Muzyka/Music, Teatr/Theatre, Literatura/Literature, Film, Wystawy/Exhibitions, Okolice Krakowa/Around Kraków, Inne/Other.

### 7.4 Article & Author
**Article**
- `title_pl`, `title_en`, `slug`, `body_pl`, `body_en` (rich text), `cover_image`, `published_at`
- `article_type` (enum: News, Zapowiedź/Preview, Wywiad/Interview, Recenzja/Review, Magazyn/Monthly issue) — the reference site visibly tags articles this way
- Relation → **Author** (many-to-one)
- Relation → **Events** (many-to-many, inverse of Event→Article)
- SEO fields

**Author**
- `name`, `bio_pl`, `bio_en`, `photo`, `role_title` (e.g. "redaktor naczelny", "redakcja, strona internetowa"), optional social links
- Relation → **Articles** (one-to-many)
- Relation → **Events** (one-to-many, via `picked_by` — powers "picked by [name]" attribution if you want it)
- Powers the **Team page** (a filtered/curated view of all Authors)

### 7.5 Accessibility model
This is a shared component (Strapi "component", reusable on both Place and Event) rather than a separate collection, so it can be attached to a Place as the baseline and optionally overridden per Event. Field names below are aligned with the concrete badge set used on the reference site so the UI can map directly onto the data:

- `wheelchair_accessible` (enum: yes / no / partial / unknown) — *"Dla wózków"*
- `induction_loop` (boolean) — *"Pętla indukcyjna"* (hearing loop)
- `captions_available` (boolean) — *"Napisy"* (captions/subtitles, e.g. for film or theatre with surtitles)
- `audio_description_available` (boolean) — *"Audiodeskrypcja"*
- `quiet_zone_available` (boolean) — *"Strefa wyciszenia"* (sensory-friendly / low-stimulation space)
- `accessible_toilet` (boolean)
- `accessible_parking` (boolean)
- `notes_pl`, `notes_en` (free text for nuance, e.g. "Wheelchair entrance via side door, ring bell")

**Resolution logic:** an event's *effective* accessibility = Place's accessibility profile, with any non-null fields on the Event's override component taking precedence. This lets most events just inherit from their venue while allowing exceptions (e.g. a normally-accessible venue hosting a one-off event in an inaccessible room).

**Display rule:** only show a badge for what's actually confirmed true — no badge shown does not have to mean "not accessible," it can mean "not yet confirmed." Avoid implying a negative from an absence.

### 7.6 User & Favourites
- Favourites work **anonymously by default**: a device/browser-scoped identifier (stored in a cookie or local storage, per artifact restrictions this only applies client-side, not to Strapi) tracks favourited event IDs, synced to a lightweight backend record keyed by that anonymous ID.
- **Optional account creation** (email/password or social login, via Strapi's Users & Permissions plugin) lets a user "claim" their anonymous favourites and access them across devices.
- `User` (Strapi built-in) → relation → **Favourite** entries (event references), or a `favourite_event_ids` JSON field for simplicity.

### 7.7 Magazine Issue
KARNET also publishes a monthly print magazine, and the site should surface it — the newest issue front-and-centre, plus a browsable archive. Proposed collection type:
- `issue_number` (e.g. 328), `title_pl`, `title_en` (the issue's theme/headline, e.g. "Wesołe święto plonów")
- `month`, `year` (or a single `issue_date`, first-of-month)
- `cover_image`
- `summary_pl`, `summary_en` (short teaser — what's in this issue)
- `pdf_file` or `read_online_url` (the digitized issue — see Open Questions on hosting/format)
- `slug` (for a dedicated, indexable page per issue — good for SEO, since each issue has a unique cover and theme)
- Publishing is simply: the Issue with the latest `issue_date` and `status = published` is "current"; everything else automatically becomes part of the archive by virtue of an older date — no separate "is_archived" flag needed.

### 7.8 Newsletter subscriber (lightweight)
The reference site has a weekly newsletter signup in the footer. Recommend treating this as a thin integration (email field → third-party ESP such as Mailchimp/Brevo, triggered via a Strapi lifecycle hook or a simple API route) rather than modeling subscriber management inside Strapi itself — it's not core to the product.

## 8. Features (Functional Requirements)

### 8.1 Browse, filter, search — list and map
- List view: paginated/infinite-scroll event cards (image, title, date, place, category badge, accessibility badges).
- Map view: Leaflet + OSM, pins clustered by location and colour-coded by category, clicking a pin surfaces a mini event card.
- Quick date filters ("Today", "Tomorrow", "Day after", "This weekend", "Next week") as one-tap chips, in addition to a full date-range picker — mirrors the reference site's "Kalendarium" row and is a strong mobile pattern.
- Filters (combinable): date/date range, event category, place category, neighbourhood/area, accessibility attributes, free vs. paid.
- Full-text search across event and place titles/descriptions (PL + EN), with example placeholder text (e.g. "Type a title, place, or organizer").
- Filter and search state should be reflected in the URL (query params) so results are shareable and bookmarkable, and crawlable where reasonable.

### 8.2 Event details page
- Dates (including multi-day handling), category, place (with embedded mini-map), ticket link and price info (or "Free entry"), related articles, effective accessibility info as a clearly labeled panel with named badges, share and save-to-favourites actions, "Add to calendar" (.ics).

### 8.3 Categories
- Dedicated category landing pages (e.g. `/events/category/muzyka`) listing all events in that category — useful for SEO and internal linking.
- Same for place categories (e.g. `/places/category/muzea`).

### 8.4 Favourites
- Add/remove from any event card or detail page (a single tap, e.g. a "+"/heart control on the card itself, matching the reference site's card pattern).
- `/favourites` page listing saved events, same list UI as browse.
- Prompt (non-blocking) to create an account when a user has favourites, to avoid losing them if cookies/local storage are cleared.

### 8.5 Sharing & calendar export
- Native share (Web Share API where available, fallback to copy-link + social share buttons).
- "Add to calendar" generates a valid `.ics` file per event (and ideally a bulk `.ics` for all current favourites).

### 8.6 Articles & authors
- Article listing page, filterable by `article_type`, + individual article pages, each linking to its related event(s).
- Articles support PL/EN.
- Optional: a "current issue" style feature if you want to echo the reference site's monthly magazine callout — flagged as optional, not required for v1.

### 8.7 Team page
- `/team` lists all Authors with photo, name, role, bio, and a link to their articles — framed as "Karnet is made by people" rather than a generic staff directory.

### 8.8 Accessibility filtering for events
- Users can filter events by one or more accessibility needs (wheelchair, induction loop, captions, audio description, quiet zone).
- Every event/place must show a clear accessibility status, not just silently omit info — including an explicit "unknown / not yet confirmed" state rather than implying "no."

### 8.9 Monthly magazine (current issue + archive)
- A **current issue** teaser on the homepage (cover image, issue number/theme, short summary, "Read this issue" call to action) — this is a required homepage element, not optional, since it's a distinctive part of KARNET's identity.
- A dedicated **issue page** per issue (`/magazine/328` or similar), showing the cover, summary, and either an embedded/downloadable PDF or a "read online" link, depending on how the magazine is digitized (see Open Questions).
- An **archive page** (`/magazine`) listing all past issues chronologically, newest first, each linking to its own issue page — browsable and indexable the same way event/article pages are.
- Because each issue page is unique (own cover, own theme, own slug), these pages benefit from the same SEO treatment as articles: meta tags, structured data, clean URLs.

### 8.10 Homepage structure
Informed by the reference mockup, the homepage should read top-to-bottom as: a small rotating **featured/hero carousel** (editorial picks, Section 6); a **search bar with quick category tiles** directly beneath it; a **quick date-chip calendar row**; a **"Recommended by the editors" rail**; one or more **category rails** (e.g. "Theatre shows", refreshed by relevance/date); a **"Free entry" rail**; an **articles/news section** with type-tagged teasers; a **current magazine issue teaser** (8.9); a **places category grid** (tappable tiles by place category); a **team/"made by" teaser** linking to the Team page; and a **newsletter signup**. Footer includes primary nav, contact details, social links, and an **accessibility statement page** (see 9.1) — a legal expectation for public-facing cultural/institutional sites in Poland, and good practice regardless.

### 8.11 Mobile-first requirements
"Mobile-responsive" is not sufficient on its own — the following should be designed mobile-first, not adapted after the fact:
- **Bottom tab navigation** on mobile (Start / Wydarzenia / Miejsca / Ulubione / more), rather than a squeezed top nav — thumb-reachable, matches the reference site's own mobile mockup preview.
- **Horizontally swipeable rails** for featured events, editorial picks, and category rows (native scroll-snap, not a grid that just reflows).
- **Filters as a bottom sheet**, not an inline panel — tap "Filters" to expand a sheet from the bottom, keeping the results list in view.
- **Sticky, collapsed search/filter bar** while scrolling a list, so search is always one tap away.
- **Map view defaults to "near me"** using device geolocation (with graceful fallback to city-centre view if permission is denied), since a phone is the device most likely to be used *at* or *near* a venue.
- **Native share sheet** integration (Web Share API) for the share action, rather than a custom share modal.
- **Large, tappable badge chips** (accessibility badges, category tags) sized for touch, not just legible for reading.
- Performance target: fast on mid-range Android devices and 4G, given a meaningful share of visits will be tourists on mobile data.

## 9. SEO Requirements

- Server-rendered (SSG/ISR) HTML for all public pages — events, places, categories, articles, authors.
- `hreflang` tags for PL/EN versions of every page; language-specific URLs (e.g. `/pl/...` and `/en/...` or subdomain — decide during implementation).
- Structured data (schema.org `Event`, `Place`, `Article`, `Person` for authors) via JSON-LD.
- Clean, human-readable slugs in both languages.
- XML sitemap (auto-generated, split by content type), `robots.txt`.
- Optimized `meta_title`/`meta_description` per entry, editable in Strapi.
- Image optimization (Next.js `<Image>`, responsive sizes, WebP/AVIF).
- Fast Core Web Vitals (LCP/CLS/INP) — matters for both SEO ranking and general UX, and doubly so on mobile networks.

## 10. Non-Functional Requirements

### 10.1 Accessibility (site itself)
- WCAG 2.1 Level AA conformance across the entire site: keyboard navigation, focus states, semantic HTML/ARIA, sufficient color contrast (important given the light/pink color scheme — contrast ratios must be checked, not assumed), alt text for all images (editorial requirement in Strapi), resizable text without breaking layout, screen-reader-tested key flows (search, filter, favourite, calendar export).
- A published **accessibility statement page** (`/deklaracja-dostepnosci`), stating conformance level and how to report issues — reference site includes this in its footer, and it's a reasonable public commitment for a site whose whole premise is inclusive access to culture.
- This is distinct from and in addition to the *event accessibility data* feature (8.8) — one is about the website, the other is about the physical events.

### 10.2 Internationalization
- Full PL/EN parity: content fields, UI strings, URL structure, date/number formatting, and SEO metadata all localized — not just UI chrome.
- Fallback behavior defined for content only entered in one language (e.g. show PL with an "English translation not yet available" note, rather than a blank field).

### 10.3 Design
- Light color scheme with a pink/maroon undertone, modern/sleek aesthetic — the reference mockup's dark hero banner against an otherwise light, airy page is a good contrast anchor to borrow, along with colour-coded category badges and a consistent card pattern (image, category tag, title, place, date, price/access badges, save action).
- Consistent design tokens in Tailwind config (colors, spacing, type scale) so the AI co-pilot has a single source of truth to work from rather than ad hoc styling per page.
- Category colour-coding should stay consistent site-wide (list cards, map pins, filter chips) so users learn it once.

### 10.4 Performance & scalability
- ISR revalidation triggered by Strapi webhooks on publish/update so content changes appear without a full rebuild.
- Map view should cluster markers and lazy-load, since Kraków's event volume could mean hundreds of pins.

### 10.5 Security & privacy
- Anonymous favourites data should be minimal (event IDs only, no PII) until a user opts into an account.
- Standard auth security via Strapi's Users & Permissions (hashed passwords, email verification if social login isn't used).

## 11. Open Questions / Assumptions to confirm before build

1. **Recurring/multi-instance events** — e.g. a festival running many nights ("8 terminów · 13.09 – 13.11.2026" in the reference site), or a touring show at multiple venues: is each date/venue combination a separate Event record, or does Event need a "sessions" sub-structure? Recommend: a lightweight `EventSession` (date, place override, ticket link) child of Event where needed, so a festival is one Event page with multiple sessions rather than dozens of near-duplicate Event records — but confirm this matches how you want SEO pages to work (one page per festival vs. one per date).
2. **Ticket handling** — assumed external links only (no in-house sales/inventory), with a free-text price field to also express "Bilety u organizatora" (tickets via organizer) and "Wstęp wolny" (free entry). Confirm.
3. **Organizer/public event submission** — reference site has a "Dodaj wydarzenie" (submit an event) link. Out of scope for v1 per Section 3, but worth deciding now whether the data model should anticipate a `submitted_by`/`review_status` field so it's not a painful retrofit later.
4. **Content moderation workflow** — assumed a single content-editor role in Strapi (you + AI co-pilot); add roles/permissions later if more editors join.
5. **URL/language strategy** — path-based (`/pl/`, `/en/`) vs subdomain vs domain-based; path-based is simpler with Next.js i18n routing and is the default assumption.
6. **Accessibility data sourcing** — who verifies/confirms these attributes (self-reported by venues, verified by editors, or crowd-sourced later)? Affects whether "unknown" needs to be a first-class, honestly-labeled state (recommended either way).
7. **Magazine digitization format** — is each issue a downloadable/embeddable PDF, or a separately-typeset "read online" web version (page-flip viewer, or just a long-form web page)? A raw PDF is far less effort and fits Strapi's media library directly; a bespoke reader is nicer on mobile but is real additional build work. Recommend starting with embedded PDF (e.g. via `<iframe>` or a lightweight PDF.js viewer) and revisiting if it doesn't feel good on phones.

## 12. Database Schema (mockup)

This is a proposed relational shape for PostgreSQL, as Strapi would generate it from the collection types in Section 7. Table/column names are illustrative — Strapi will add its own housekeeping columns (`id`, `created_at`, `updated_at`, `published_at`, `locale`, etc.) automatically.

```
events
├── id (pk)
├── title_pl, title_en, slug
├── description_pl, description_en
├── start_date, end_date
├── cover_image_id (fk → files)
├── place_id (fk → places)
├── ticket_url, ticket_price_info
├── is_editorial_pick (bool), pick_note_pl, pick_note_en, picked_by_author_id (fk → authors, nullable)
├── accessibility_override (component, nullable — see accessibility fields below)
├── status (draft/published)
└── meta_title, meta_description

places
├── id (pk)
├── name_pl, name_en, slug
├── address, latitude, longitude
├── description_pl, description_en
├── cover_image_id (fk → files)
└── accessibility_profile (component — see accessibility fields below)

accessibility_component (embedded on events.accessibility_override and places.accessibility_profile — not a standalone table in Strapi, but shown here as its field set)
├── wheelchair_accessible (enum: yes/no/partial/unknown)
├── induction_loop (bool)
├── captions_available (bool)
├── audio_description_available (bool)
├── quiet_zone_available (bool)
├── accessible_toilet (bool)
├── accessible_parking (bool)
└── notes_pl, notes_en

event_categories
├── id (pk)
├── name_pl, name_en, slug, icon, color

place_categories
├── id (pk)
├── name_pl, name_en, slug, icon, color

events_event_categories (join table, many-to-many)
├── event_id (fk → events)
└── event_category_id (fk → event_categories)

places_place_categories (join table, many-to-many)
├── place_id (fk → places)
└── place_category_id (fk → place_categories)

articles
├── id (pk)
├── title_pl, title_en, slug
├── body_pl, body_en
├── cover_image_id (fk → files)
├── published_at
├── article_type (enum: news/preview/interview/review/magazine)
├── author_id (fk → authors)
└── meta_title, meta_description

authors
├── id (pk)
├── name, role_title
├── bio_pl, bio_en
├── photo_id (fk → files)
└── social_links (json)

articles_events (join table, many-to-many)
├── article_id (fk → articles)
└── event_id (fk → events)

users (Strapi built-in, extended)
├── id (pk)
├── email, password_hash
└── ...standard Strapi user fields

favourites
├── id (pk)
├── event_id (fk → events)
├── user_id (fk → users, nullable — null for anonymous)
└── anonymous_device_id (string, nullable — set when user_id is null)

newsletter_subscribers  (optional — may live in a third-party ESP instead)
├── id (pk)
├── email
└── subscribed_at

magazine_issues
├── id (pk)
├── issue_number
├── title_pl, title_en
├── month, year (or issue_date)
├── cover_image_id (fk → files)
├── summary_pl, summary_en
├── pdf_file_id (fk → files, nullable) / read_online_url (nullable)
├── slug
└── status (draft/published)
```

**Key relationships at a glance:**
- `places 1—N events` (a place hosts many events; an event belongs to one place, or one place per session if sessions are introduced per Open Question 1).
- `events M—N event_categories`, `places M—N place_categories`, `articles M—N events` — all via join tables.
- `authors 1—N articles` and `authors 1—N events` (via `picked_by_author_id`) — an author both writes and curates.
- `accessibility_component` is not its own table; it's a reusable field-set embedded wherever needed (Strapi "component"), with the event-level copy read only when overriding the place-level default.
- `favourites` supports both anonymous (`anonymous_device_id`) and authenticated (`user_id`) rows against the same table, so claiming favourites on login is a matter of re-keying existing rows rather than migrating data structures.

## 13. Success Metrics (optional, for your own tracking)

- Organic search traffic (PL + EN) to event/place/article pages.
- % of events with complete accessibility data.
- Favourites-per-session and favourite → calendar-export conversion rate.
- Mobile vs. desktop session share and mobile Core Web Vitals specifically (not just blended).
- Lighthouse/axe accessibility audit score (target: no AA violations).
