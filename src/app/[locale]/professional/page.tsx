import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

const EXTERNAL = [
  {
    href: "https://thorius.com.tr",
    key: "linkThorius" as const,
  },
  {
    href: "https://kitaplik.thorius.com.tr",
    key: "linkKitaplik" as const,
  },
  {
    href: "https://coaching.thorius.com.tr",
    key: "linkCoaching" as const,
  },
  {
    href: "https://academy.thorius.com.tr",
    key: "linkAcademy" as const,
  },
  {
    href: "https://www.linkedin.com/in/dr-elif-demir-u%C4%9Fur-edu-b90b013b/",
    key: "linkLinkedin" as const,
  },
  {
    href: "https://medium.com/@theevolvedwoman",
    key: "linkMedium" as const,
  },
];

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "professional" });
  return { title: `${t("title")} · Dr. Elif Demir Uğur` };
}

export default async function ProfessionalPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("professional");

  const highlights = [t("h1"), t("h2"), t("h3"), t("h4")];

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-cloud-ink md:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-4 text-lg text-cloud-muted">{t("intro")}</p>

      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink">
          {t("currentHeading")}
        </h2>
        <p className="mt-3 text-cloud-muted">{t("current")}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink">
          {t("highlightsHeading")}
        </h2>
        <ul className="mt-4 space-y-3 text-cloud-muted">
          {highlights.map((item) => (
            <li key={item} className="border-l-2 border-purple-500/40 pl-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink">
          {t("linksHeading")}
        </h2>
        <ul className="mt-4 flex flex-col gap-2">
          {EXTERNAL.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 underline-offset-4 hover:underline"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
