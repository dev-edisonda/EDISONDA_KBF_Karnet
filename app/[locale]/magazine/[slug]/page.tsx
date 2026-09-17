import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { CoverImage } from "@/components/common/CoverImage";
import { MAGAZINE_ISSUES, findMagazineIssue } from "@/lib/data";
import { formatMagazineDate } from "@/lib/format";
import { getDictionary, interpolate, pickLocale } from "@/lib/i18n";
import { localeAlternates } from "@/lib/seo";
import type { Locale } from "@/lib/types";

export function generateStaticParams() {
  return MAGAZINE_ISSUES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const issue = findMagazineIssue(slug);
  if (!issue) return {};
  return {
    title: pickLocale(locale, issue.title_pl, issue.title_en),
    description: pickLocale(locale, issue.summary_pl, issue.summary_en),
    alternates: localeAlternates(locale, `/magazine/${slug}`),
  };
}

export default async function MagazineIssuePage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const issue = findMagazineIssue(slug);
  if (!issue) notFound();
  const dict = getDictionary(locale);
  const title = pickLocale(locale, issue.title_pl, issue.title_en);
  const summary = pickLocale(locale, issue.summary_pl, issue.summary_en);

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-6 sm:px-6">
      <Link href={`/${locale}/magazine`} className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-brand-700">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {dict.common.backToList}
      </Link>

      <div className="mt-6 grid gap-6 sm:grid-cols-[240px_1fr]">
        <CoverImage color="#86113C" icon="BookOpen" className="aspect-[3/4] w-full max-w-[240px] rounded-2xl" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            {interpolate(dict.magazine.issueNumber, { number: issue.issue_number })} · {formatMagazineDate(issue.issue_date, locale)}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-ink">{title}</h1>
          <p className="mt-3 text-muted">{summary}</p>
        </div>
      </div>

      {/* Digitized issue placeholder — no real magazine PDFs exist in this build yet (PRD §11 Q7). */}
      <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border bg-brand-50/40 p-12 text-center">
        <BookOpen className="h-10 w-10 text-brand-400" aria-hidden="true" />
        <p className="max-w-sm text-sm text-muted">
          {locale === "pl"
            ? "Cyfrowe wydanie tego numeru pojawi się tutaj wkrótce."
            : "The digitized edition of this issue will appear here soon."}
        </p>
      </div>
    </div>
  );
}
