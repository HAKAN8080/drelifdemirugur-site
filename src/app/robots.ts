import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Nested path avoids a known Next.js + GSC "Couldn't fetch" cache on /sitemap.xml
    sitemap: "https://drelifdemirugur.com/sitemap/sitemap.xml",
  };
}
