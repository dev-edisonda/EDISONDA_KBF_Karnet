import type { Metadata } from "next";
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
  return { title: dict.accessibility.statementTitle, alternates: localeAlternates(locale, "/deklaracja-dostepnosci") };
}

const CONTENT = {
  pl: {
    intro:
      "KARNET dąży do zapewnienia dostępności swojej strony internetowej zgodnie z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych oraz wytycznymi WCAG 2.1.",
    statusTitle: "Status zgodności",
    status:
      "Strona internetowa KARNET jest częściowo zgodna z wytycznymi Web Content Accessibility Guidelines (WCAG) 2.1 na poziomie AA. Pracujemy nad pełną zgodnością i regularnie testujemy kluczowe ścieżki: wyszukiwanie, filtrowanie, dodawanie do ulubionych oraz eksport do kalendarza.",
    dataTitle: "Dostępność danych o wydarzeniach",
    data:
      "Niezależnie od dostępności samej strony, staramy się jasno oznaczać dostępność fizycznych wydarzeń i miejsc — w tym przypadki, w których informacja nie została jeszcze potwierdzona. Brak odznaki dostępności nigdy nie powinien być odczytywany jako informacja, że dane miejsce jest niedostępne.",
    feedbackTitle: "Zgłaszanie uwag",
    feedback:
      "Jeśli napotkasz na naszej stronie barierę dostępności, napisz do nas na dostepnosc@karnet.example. Odpowiadamy najpóźniej w ciągu 7 dni roboczych.",
    updated: "Deklarację sporządzono i ostatnio zaktualizowano we wrześniu 2026 r.",
  },
  en: {
    intro:
      "KARNET is committed to making its website accessible, in line with WCAG 2.1 guidelines and the spirit of Poland's Digital Accessibility Act for public-facing services.",
    statusTitle: "Conformance status",
    status:
      "The KARNET website is partially conformant with Web Content Accessibility Guidelines (WCAG) 2.1 level AA. We are working toward full conformance and regularly test key flows: search, filtering, favouriting, and calendar export.",
    dataTitle: "Accessibility of event data",
    data:
      "Separately from the website itself, we aim to clearly label the physical accessibility of events and venues — including cases where information hasn't been confirmed yet. A missing accessibility badge should never be read as meaning a place is inaccessible.",
    feedbackTitle: "Reporting an issue",
    feedback:
      "If you run into an accessibility barrier on this site, email us at dostepnosc@karnet.example. We aim to respond within 7 working days.",
    updated: "This statement was prepared and last updated in September 2026.",
  },
} as const;

export default async function AccessibilityStatementPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const c = CONTENT[locale];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">{dict.accessibility.statementTitle}</h1>
      <p className="mt-4 leading-relaxed text-ink">{c.intro}</p>

      <h2 className="mt-8 text-lg font-semibold text-ink">{c.statusTitle}</h2>
      <p className="mt-2 leading-relaxed text-ink">{c.status}</p>

      <h2 className="mt-8 text-lg font-semibold text-ink">{c.dataTitle}</h2>
      <p className="mt-2 leading-relaxed text-ink">{c.data}</p>

      <h2 className="mt-8 text-lg font-semibold text-ink">{c.feedbackTitle}</h2>
      <p className="mt-2 leading-relaxed text-ink">{c.feedback}</p>

      <p className="mt-8 text-sm text-muted">{c.updated}</p>
    </div>
  );
}
