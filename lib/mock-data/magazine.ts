import type { MagazineIssue } from "@/lib/types";

export const MAGAZINE_ISSUES: MagazineIssue[] = [
  {
    id: "m328",
    slug: "328",
    issue_number: 328,
    title_pl: "Wesołe święto plonów",
    title_en: "A Merry Harvest Festival",
    issue_date: "2026-09-01",
    summary_pl:
      "Jesienne festiwale, rozmowa z krakowskimi rzemieślnikami i przewodnik po weekendzie dla całej rodziny.",
    summary_en: "Autumn festivals, a conversation with Kraków artisans, and a family-weekend guide.",
  },
  {
    id: "m327",
    slug: "327",
    issue_number: 327,
    title_pl: "Miasto nocą",
    title_en: "The City by Night",
    issue_date: "2026-08-01",
    summary_pl: "Nocne życie kulturalne Krakowa — od klubów po całonocne wystawy.",
    summary_en: "Kraków's nightlife — from clubs to all-night exhibitions.",
  },
  {
    id: "m326",
    slug: "326",
    issue_number: 326,
    title_pl: "Wracamy do kina",
    title_en: "Back to the Cinema",
    issue_date: "2026-07-01",
    summary_pl: "Nowy sezon w krakowskich kinach studyjnych i rozmowa z młodym reżyserem dokumentalistą.",
    summary_en: "The new season at Kraków's arthouse cinemas, and a talk with a young documentary director.",
  },
];

export function findMagazineIssue(slug: string): MagazineIssue | undefined {
  return MAGAZINE_ISSUES.find((m) => m.slug === slug);
}

export function currentMagazineIssue(): MagazineIssue {
  return [...MAGAZINE_ISSUES].sort((a, b) => (a.issue_date < b.issue_date ? 1 : -1))[0];
}
