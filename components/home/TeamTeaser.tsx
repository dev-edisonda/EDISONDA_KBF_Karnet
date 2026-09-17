import Link from "next/link";
import { Avatar } from "@/components/common/Avatar";
import { AUTHORS } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export function TeamTeaser({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-brand-50/50 p-8 text-center sm:p-10">
        <div className="flex -space-x-3">
          {AUTHORS.map((a) => (
            <Avatar key={a.id} initials={a.initials} color={a.avatar_color} name={a.name} size="md" />
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-ink">{dict.home.teamTeaserTitle}</h2>
          <p className="mx-auto mt-2 max-w-md text-muted">{dict.home.teamTeaserBody}</p>
        </div>
        <Link
          href={`/${locale}/team`}
          className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          {dict.home.teamTeaserCta}
        </Link>
      </div>
    </section>
  );
}
