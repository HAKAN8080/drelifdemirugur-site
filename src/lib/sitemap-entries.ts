const BASE = "https://drelifdemirugur.com";
const LOCALES = ["tr", "en"] as const;
const PATHS = [
  "",
  "/about",
  "/professional",
  "/publications",
  "/books",
  "/podcasts",
  "/contact",
] as const;

export function buildSitemapEntries() {
  const lastModified = new Date();

  return LOCALES.flatMap((locale) =>
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
}
