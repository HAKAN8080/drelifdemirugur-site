import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Keep locale routing, but never intercept SEO files (GSC / crawlers).
  matcher: [
    "/",
    "/(tr|en)/:path*",
    "/((?!_next|_vercel|sitemap(?:/.*)?$|robots\\.txt|.*\\..*).*)",
  ],
};
