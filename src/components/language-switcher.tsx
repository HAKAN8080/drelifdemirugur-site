"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: "tr" | "en") {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
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
