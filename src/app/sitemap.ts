import type { MetadataRoute } from "next";

const BASE = "https://drelifdemirugur.com";
const LOCALES = ["tr", "en"] as const;
const PATHS = [
  "",
  "/about",
  "/professional",
  "/publications",
  "/books",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return LOCALES.flatMap((locale) =>
    PATHS.map((path) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified,
    })),
  );
}
