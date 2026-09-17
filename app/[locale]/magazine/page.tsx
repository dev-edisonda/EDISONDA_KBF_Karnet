import type { Metadata } from "next";
import { MagazineTeaser, MagazineArchiveCard } from "@/components/cards/MagazineTeaser";
import { currentMagazineIssue, getArchiveMagazineIssues } from "@/lib/data";
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
  return { title: dict.magazine.title, alternates: localeAlternates(locale, "/magazine") };
}

export default async function MagazinePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const current = currentMagazineIssue();
  const archive = getArchiveMagazineIssues();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">{dict.magazine.title}</h1>

      <section className="mt-6">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">{dict.magazine.currentIssue}</h2>
        <MagazineTeaser issue={current} locale={locale} dict={dict} />
      </section>

      {archive.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">{dict.magazine.archive}</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {archive.map((issue) => (
              <MagazineArchiveCard key={issue.id} issue={issue} locale={locale} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
