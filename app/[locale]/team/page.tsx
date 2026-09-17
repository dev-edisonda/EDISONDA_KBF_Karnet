import type { Metadata } from "next";
import { Avatar } from "@/components/common/Avatar";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { AUTHORS, getArticlesByAuthor } from "@/lib/data";
import { getDictionary, pickLocale } from "@/lib/i18n";
import { localeAlternates, personJsonLd } from "@/lib/seo";
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
  return { title: dict.team.title, alternates: localeAlternates(locale, "/team") };
}

export default async function TeamPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(AUTHORS.map((a) => personJsonLd(a, locale))) }}
      />
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">{dict.team.title}</h1>
      <p className="mt-2 max-w-xl text-muted">{dict.team.subtitle}</p>

      <div className="mt-8 space-y-10">
        {AUTHORS.map((author) => {
          const articles = getArticlesByAuthor(author.slug);
          const bio = pickLocale(locale, author.bio_pl, author.bio_en);
          const role = pickLocale(locale, author.role_title_pl, author.role_title_en);
          return (
            <section
              key={author.id}
              id={author.slug}
              className="scroll-mt-24 border-t border-border pt-8 first:border-t-0 first:pt-0"
            >
              <div className="flex items-start gap-4">
                <Avatar initials={author.initials} color={author.avatar_color} name={author.name} size="lg" />
                <div>
                  <h2 className="text-xl font-bold text-ink">{author.name}</h2>
                  <p className="text-sm font-medium text-brand-700">{role}</p>
                  <p className="mt-2 max-w-xl text-sm text-muted">{bio}</p>
                </div>
              </div>
              {articles.length > 0 && (
                <div className="mt-5">
                  <h3 className="text-sm font-semibold text-ink">
                    {dict.team.articlesBy} {author.name}
                  </h3>
                  <div className="rail mt-3 -mx-4 px-4 sm:-mx-6 sm:px-6">
                    {articles.map((article) => (
                      <ArticleCard key={article.id} article={article} locale={locale} dict={dict} />
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
