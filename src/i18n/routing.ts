import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/about": "/about",
    "/professional": "/professional",
    "/coaching": "/coaching",
    "/coaching/students": {
      en: "/coaching/students",
      tr: "/coaching/ogrenci",
    },
    "/publications": "/publications",
    "/books": "/books",
    "/podcasts": "/podcasts",
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",
    "/contact": "/contact",
  },
});
