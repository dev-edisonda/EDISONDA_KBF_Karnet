import Link from "next/link";
import type { ReactNode } from "react";

export function Rail({
  title,
  subtitle,
  seeAllHref,
  seeAllLabel,
  children,
}: {
  title: string;
  subtitle?: string;
  seeAllHref?: string;
  seeAllLabel?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-8">
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-4 px-4 sm:px-6">
        <div>
          <h2 className="text-xl font-bold text-ink sm:text-2xl">{title}</h2>
          {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
        </div>
        {seeAllHref && (
          <Link href={seeAllHref} className="shrink-0 text-sm font-semibold text-brand-700 hover:underline">
            {seeAllLabel}
          </Link>
        )}
      </div>
      <div className="rail mt-5 px-4 sm:px-6">{children}</div>
    </section>
  );
}
