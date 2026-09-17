import Link from "next/link";
import { CoverImage } from "@/components/common/CoverImage";
import { Avatar } from "@/components/common/Avatar";
import { formatArticleDate } from "@/lib/format";
import { pickLocale, type Dictionary } from "@/lib/i18n";
import { findAuthor } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Article, Locale } from "@/lib/types";

const TYPE_COLOR: Record<Article["article_type"], string> = {
  news: "#1D4ED8",
  preview: "#0F766E",
  interview: "#7C3AED",
  review: "#C2410C",
  magazine: "#B91C5C",
};

export function ArticleCard({
  article,
  locale,
  dict,
  className,
}: {
  article: Article;
  locale: Locale;
  dict: Dictionary;
  className?: string;
}) {
  const title = pickLocale(locale, article.title_pl, article.title_en);
  const excerpt = pickLocale(locale, article.excerpt_pl, article.excerpt_en);
  const author = findAuthor(article.author_slug);

  return (
    <article
      className={cn(
        "flex w-72 flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md sm:w-80",
        className,
      )}
    >
      <div className="relative">
        <Link href={`/${locale}/articles/${article.slug}`} tabIndex={-1}>
          <CoverImage color={TYPE_COLOR[article.article_type]} className="aspect-[16/10] w-full" />
        </Link>
        <span className="absolute left-2.5 top-2.5 rounded-full bg-surface/95 px-2.5 py-1 text-xs font-semibold text-ink shadow-sm">
          {dict.articles.types[article.article_type]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-base font-semibold leading-snug text-ink">
          <Link href={`/${locale}/articles/${article.slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="line-clamp-2 text-sm text-muted">{excerpt}</p>
        <div className="mt-auto flex items-center gap-2 pt-3 text-sm text-muted">
          {author && <Avatar initials={author.initials} color={author.avatar_color} name={author.name} size="sm" />}
          <div>
            {author && <p className="font-medium text-ink">{author.name}</p>}
            <p>{formatArticleDate(article.published_at, locale)}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
