import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://drelifdemirugur.com/sitemap.xml",
    host: "https://drelifdemirugur.com",
  };
}
