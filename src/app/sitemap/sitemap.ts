import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "@/lib/sitemap-entries";

/** Nested route: /sitemap/sitemap.xml — preferred GSC submission URL for Next.js. */
export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries();
}
