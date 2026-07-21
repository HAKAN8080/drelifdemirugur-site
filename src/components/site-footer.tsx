import { useTranslations } from "next-intl";

const LINKS = [
  { href: "https://thorius.com.tr", labelKey: "linkThorius" as const },
  {
    href: "https://www.linkedin.com/in/dr-elif-demir-u%C4%9Fur-edu-b90b013b/",
    labelKey: "linkLinkedin" as const,
  },
];

export function SiteFooter() {
  const t = useTranslations("footer");
  const p = useTranslations("professional");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-cloud-200/80 bg-white/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-cloud-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {year} Dr. Elif Demir Uğur. {t("rights")}
        </p>
        <div className="flex flex-wrap gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600"
            >
              {p(l.labelKey)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
