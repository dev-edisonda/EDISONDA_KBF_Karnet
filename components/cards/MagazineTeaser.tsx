import Link from "next/link";
import { BookOpen } from "lucide-react";
import { CoverImage } from "@/components/common/CoverImage";
import { formatMagazineDate } from "@/lib/format";
import { pickLocale, interpolate, type Dictionary } from "@/lib/i18n";
import type { Locale, MagazineIssue } from "@/lib/types";

export function MagazineTeaser({
  issue,
  locale,
  dict,
}: {
  issue: MagazineIssue;
  locale: Locale;
  dict: Dictionary;
}) {
  const title = pickLocale(locale, issue.title_pl, issue.title_en);
  const summary = pickLocale(locale, issue.summary_pl, issue.summary_en);

  return (
    <div className="grid gap-6 overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:grid-cols-[220px_1fr] sm:p-8">
      <CoverImage color="#86113C" icon="BookOpen" className="aspect-[3/4] w-full max-w-[220px] rounded-2xl" />
      <div className="flex flex-col justify-center gap-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          {interpolate(dict.magazine.issueNumber, { number: issue.issue_number })} · {formatMagazineDate(issue.issue_date, locale)}
        </p>
        <h3 className="text-2xl font-bold text-ink">{title}</h3>
        <p className="text-muted">{summary}</p>
        <Link
          href={`/${locale}/magazine/${issue.slug}`}
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          {dict.home.readIssue}
        </Link>
      </div>
    </div>
  );
}

export function MagazineArchiveCard({ issue, locale }: { issue: MagazineIssue; locale: Locale }) {
  const title = pickLocale(locale, issue.title_pl, issue.title_en);
  return (
    <Link
      href={`/${locale}/magazine/${issue.slug}`}
      className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md"
    >
      <CoverImage color="#86113C" icon="BookOpen" className="aspect-[3/4] w-full" />
      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {formatMagazineDate(issue.issue_date, locale)}
        </p>
        <h3 className="mt-1 text-sm font-semibold text-ink">{title}</h3>
      </div>
    </Link>
  );
}
