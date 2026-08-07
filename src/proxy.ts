import createMiddleware from "next-intl/middleware";

// Pathnames stay in routing.ts for Link / language navigation typing.
// Middleware intentionally omits pathnames so Next.js 16 proxy does not
// rewrite↔redirect-loop on /tr/coaching/ogrenci ↔ /coaching/students.
export default createMiddleware({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  localePrefix: "always",
});

export const config = {
  // Keep locale routing, but never intercept SEO files (GSC / crawlers).
  matcher: [
    "/",
    "/(tr|en)/:path*",
    "/((?!_next|_vercel|sitemap(?:/.*)?$|robots\\.txt|.*\\..*).*)",
  ],
};
