"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";

const STUDENT_PATHS = new Set(["/coaching/students", "/coaching/ogrenci"]);

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  function switchTo(next: "tr" | "en") {
    if (next === locale) return;
    const resolvedPathname = STUDENT_PATHS.has(pathname)
      ? "/coaching/students"
      : pathname;
    router.replace(
      // @ts-expect-error -- pathname + params always match the current route
      { pathname: resolvedPathname, params },
      { locale: next },
    );
  }

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-cloud-300/70 bg-white/50 p-1 text-xs font-medium backdrop-blur"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchTo("tr")}
        className={`rounded-full px-2.5 py-1 transition ${
          locale === "tr"
            ? "bg-purple-500 text-white"
            : "text-cloud-muted hover:text-cloud-ink"
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={`rounded-full px-2.5 py-1 transition ${
          locale === "en"
            ? "bg-purple-500 text-white"
            : "text-cloud-muted hover:text-cloud-ink"
        }`}
      >
        EN
      </button>
    </div>
  );
}
