# KARNET

A cultural events discovery platform for Kraków — see [`KARNET-PRD.md`](./KARNET-PRD.md) for the full product spec.

This is the **frontend build (session 1)**: a Next.js 16 (App Router) + Tailwind CSS v4 app running against local, typed mock data that mirrors the intended Strapi content model 1:1 (see `lib/types.ts` and `lib/mock-data/`). Swapping in a real Strapi backend later is a change to `lib/data.ts` only — no page or component should need to change.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/pl` or `/en` based on your browser language.

```bash
npm run build   # production build — statically generates every event/place/article/magazine page in both locales
npm run lint
```

## What's here

- **i18n**: path-based `/pl` and `/en` routing (`app/[locale]/`), a custom lightweight dictionary (`messages/*.json`, `lib/i18n.ts`) rather than a third-party library, plus `proxy.ts` for locale redirects.
- **Data model**: `lib/types.ts` mirrors PRD §7/§12 (Event, Place, categories, Article, Author, MagazineIssue, the shared Accessibility component with its override/resolution logic in `lib/accessibility.ts`).
- **Pages**: home, events (list + Leaflet map + filter bottom sheet + quick date chips), event detail, event/place category landing pages, places, articles, team, magazine (current + archive + issue), favourites (localStorage-based, anonymous), and the accessibility statement.
- **Design tokens**: `app/globals.css` (`@theme` block) — the pink/maroon light palette, checked for WCAG AA contrast.

## Not in this build yet

Strapi CMS, PostgreSQL, real authentication, real newsletter ESP integration, real magazine PDFs, and ticket checkout (permanently out of scope per PRD §3) — see the PRD's Open Questions (§11) for what's next.
