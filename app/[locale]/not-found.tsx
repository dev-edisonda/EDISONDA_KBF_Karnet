import Link from "next/link";

// not-found.tsx cannot read the [locale] route param, so this stays bilingual.
export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-ink">404</h1>
      <p className="mt-3 text-muted">
        Nie znaleźliśmy tej strony. / We couldn&apos;t find that page.
      </p>
      <Link
        href="/pl"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Wróć na stronę główną / Back to homepage
      </Link>
    </div>
  );
}
