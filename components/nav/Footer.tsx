import Link from "next/link";
import { NewsletterSignup } from "@/components/home/NewsletterSignup";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const navLinks: [string, string][] = [
    ["", dict.nav.home],
    ["/events", dict.nav.events],
    ["/places", dict.nav.places],
    ["/articles", dict.nav.articles],
    ["/team", dict.nav.team],
    ["/magazine", dict.nav.magazine],
  ];

  return (
    <footer className="mb-16 mt-16 border-t border-border bg-brand-50/40 md:mb-0">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-xl font-extrabold text-brand-700">{dict.site.name}</p>
            <p className="mt-2 max-w-sm text-sm text-muted">{dict.footer.about}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink">{dict.nav.home}</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {navLinks.map(([href, label]) => (
                <li key={href || "home"}>
                  <Link href={`/${locale}${href}`} className="hover:text-brand-700">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink">{dict.footer.contact}</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a href="mailto:redakcja@karnet.example" className="hover:text-brand-700">
                  redakcja@karnet.example
                </a>
              </li>
              <li>
                <Link href={`/${locale}/deklaracja-dostepnosci`} className="hover:text-brand-700">
                  {dict.footer.accessibilityStatement}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <NewsletterSignup dict={dict} />
        </div>

        <p className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} {dict.site.name}. {dict.footer.allRightsReserved}
        </p>
      </div>
    </footer>
  );
}
