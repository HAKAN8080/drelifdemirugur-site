import { getAllPosts } from "@/content/blog/posts";

const BASE = "https://drelifdemirugur.com";
const LOCALES = ["tr", "en"] as const;

const SHARED_PATHS = [
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

/** Internal path → per-locale external path (no locale prefix). */
const LOCALIZED_PATHS: Record<string, Record<(typeof LOCALES)[number], string>> =
  {
    "/coaching/students": {
      tr: "/coaching/ogrenci",
      en: "/coaching/students",
    },
  };

function entryFor(locale: (typeof LOCALES)[number], path: string, lastModified: Date) {
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
}

function localizedEntry(
  lastModified: Date,
  paths: Record<(typeof LOCALES)[number], string>,
) {
  return LOCALES.map((locale) => {
    const path = paths[locale];
    const languages = Object.fromEntries(
      LOCALES.map((l) => [l, `${BASE}/${l}${paths[l]}`]),
    );

    return {
      url: `${BASE}/${locale}${path}`,
      lastModified,
      alternates: {
        languages: {
          ...languages,
          "x-default": `${BASE}/tr${paths.tr}`,
        },
      },
    };
  });
}

export function buildSitemapEntries() {
  const lastModified = new Date();
  const blogPosts = getAllPosts();

  const staticEntries = LOCALES.flatMap((locale) =>
    SHARED_PATHS.map((path) => entryFor(locale, path, lastModified)),
  );

  const studentEntries = Object.values(LOCALIZED_PATHS).flatMap((paths) =>
    localizedEntry(lastModified, paths),
  );

  const postEntries = LOCALES.flatMap((locale) =>
    blogPosts.map((post) => {
      const path = `/blog/${post.slug}`;
      return entryFor(locale, path, new Date(`${post.date}T12:00:00.000Z`));
    }),
  );

  return [...staticEntries, ...studentEntries, ...postEntries];
}
