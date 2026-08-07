import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader() {
  const t = useTranslations("nav");
  const meta = useTranslations("meta");

  const links = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/professional", label: t("professional") },
    { href: "/coaching", label: t("coaching") },
    { href: "/coaching/students", label: t("studentCoaching") },
    { href: "/publications", label: t("publications") },
    { href: "/books", label: t("books") },
    { href: "/podcasts", label: t("podcasts") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className="relative z-20 border-b border-cloud-200/80 bg-white/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg tracking-tight text-cloud-ink md:text-xl"
        >
          {meta("siteName")}
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cloud-muted">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition hover:text-purple-600"
            >
              {l.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
