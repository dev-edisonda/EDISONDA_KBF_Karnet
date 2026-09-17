import type { MetadataRoute } from "next";
import { EVENTS, PLACES, ARTICLES, MAGAZINE_ISSUES, EVENT_CATEGORIES, PLACE_CATEGORIES } from "@/lib/data";
import { LOCALES } from "@/lib/types";
import { SITE_URL } from "@/lib/seo";

const STATIC_PATHS = ["", "/events", "/places", "/articles", "/team", "/magazine", "/deklaracja-dostepnosci"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const path of STATIC_PATHS) {
      entries.push({ url: `${SITE_URL}/${locale}${path}`, lastModified: new Date() });
    }
    for (const e of EVENTS) entries.push({ url: `${SITE_URL}/${locale}/events/${e.slug}` });
    for (const c of EVENT_CATEGORIES) entries.push({ url: `${SITE_URL}/${locale}/events/category/${c.slug}` });
    for (const p of PLACES) entries.push({ url: `${SITE_URL}/${locale}/places/${p.slug}` });
    for (const c of PLACE_CATEGORIES) entries.push({ url: `${SITE_URL}/${locale}/places/category/${c.slug}` });
    for (const a of ARTICLES) entries.push({ url: `${SITE_URL}/${locale}/articles/${a.slug}` });
    for (const m of MAGAZINE_ISSUES) entries.push({ url: `${SITE_URL}/${locale}/magazine/${m.slug}` });
  }

  return entries;
}
