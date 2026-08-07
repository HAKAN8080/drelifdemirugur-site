import { getAllPosts } from "@/content/blog/posts";

const BASE = "https://drelifdemirugur.com";
const LOCALES = ["tr", "en"] as const;
const PATHS = [
  "",
  "/about",
  "/professional",
  "/coaching",
  "/publications",
  "/books",
  "/podcasts",
  "/blog",
  "/contact",
] as const;

export function buildSitemapEntries() {
  const lastModified = new Date();
  const blogPosts = getAllPosts();

  const staticEntries = LOCALES.flatMap((locale) =>
    PATHS.map((path) => {
      const languages = Object.fromEntries(
        LOCALES.map((l) => [l, `${BASE}/${l}${path}`]),
      );

      return {
        url: `${BASE}/${locale}${path}`,
        lastModified,
        alternates: {
          languages: {
            ...languages,
            "x-default": `${BASE}/tr${path}`,
          },
        },
      };
    }),
  );

  const postEntries = LOCALES.flatMap((locale) =>
    blogPosts.map((post) => {
      const path = `/blog/${post.slug}`;
      const languages = Object.fromEntries(
        LOCALES.map((l) => [l, `${BASE}/${l}${path}`]),
      );

      return {
        url: `${BASE}/${locale}${path}`,
        lastModified: new Date(`${post.date}T12:00:00.000Z`),
        alternates: {
          languages: {
            ...languages,
            "x-default": `${BASE}/tr${path}`,
          },
        },
      };
    }),
  );

  return [...staticEntries, ...postEntries];
}
