export type LocalizedText = {
  tr: string;
  en: string;
};

export type BlogPost = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  /** SEO keywords / tags (same set for both locales; keep bilingual or language-neutral) */
  tags: string[];
  /** Optional cover image path under /public */
  coverImage?: string;
  /** Markdown body (paragraphs, ## headings, lists, links, bold/italic) */
  body: LocalizedText;
};

/**
 * How to add a new post:
 * 1. Append an object to `posts` below (unique `slug`, ISO `date`, tr/en fields).
 * 2. Rebuild / redeploy. Listing, sitemap, and `/blog/[slug]` pick it up automatically.
 */
export const posts: BlogPost[] = [];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function copyForPost(post: BlogPost, locale: string) {
  const lang = locale === "en" ? "en" : "tr";
  return {
    title: post.title[lang],
    description: post.description[lang],
    body: post.body[lang],
  };
}

export function formatPostDate(dateIso: string, locale: string): string {
  const date = new Date(`${dateIso}T12:00:00`);
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
