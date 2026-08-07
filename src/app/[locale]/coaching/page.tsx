import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "coaching" });
  const keywords = t.raw("keywords") as string[];
  const path = `/${locale}/coaching`;

  return {
    title: t("title"),
    description: t("description"),
    keywords,
    alternates: {
      canonical: path,
      languages: {
        tr: "/tr/coaching",
        en: "/en/coaching",
        "x-default": "/tr/coaching",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: path,
      type: "website",
    },
  };
}

export default async function CoachingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("coaching");

  const executiveOutcomes = t.raw("executiveOutcomes") as string[];
  const studentOutcomes = t.raw("studentOutcomes") as string[];

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <p className="text-sm font-medium tracking-[0.16em] text-purple-600 uppercase">
        {t("eyebrow")}
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-cloud-ink md:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-cloud-muted">{t("intro")}</p>

      <section className="mt-14 border-t border-cloud-200 pt-12">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink md:text-3xl">
          {t("executiveTitle")}
        </h2>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-cloud-muted">
          {t("executiveBody")}
        </p>
        <h3 className="mt-8 text-sm font-medium tracking-[0.12em] text-cloud-ink/80 uppercase">
          {t("executiveOutcomesHeading")}
        </h3>
        <ul className="mt-4 space-y-3 text-cloud-muted">
          {executiveOutcomes.map((item) => (
            <li key={item} className="border-l-2 border-purple-500/40 pl-4">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            href="/contact"
            className="text-purple-600 underline-offset-4 hover:underline"
          >
            {t("cta")}
          </Link>
          <span className="mt-1 block text-sm text-cloud-muted/80">
            {t("ctaNote")}
          </span>
        </p>
      </section>

      <section className="mt-14 border-t border-cloud-200 pt-12">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink md:text-3xl">
          {t("studentTitle")}
        </h2>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-cloud-muted">
          {t("studentBody")}
        </p>
        <h3 className="mt-8 text-sm font-medium tracking-[0.12em] text-cloud-ink/80 uppercase">
          {t("studentOutcomesHeading")}
        </h3>
        <ul className="mt-4 space-y-3 text-cloud-muted">
          {studentOutcomes.map((item) => (
            <li key={item} className="border-l-2 border-purple-500/40 pl-4">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            href="/contact"
            className="text-purple-600 underline-offset-4 hover:underline"
          >
            {t("cta")}
          </Link>
          <span className="mt-1 block text-sm text-cloud-muted/80">
            {t("ctaNote")}
          </span>
        </p>
      </section>
    </div>
  );
}
