import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

const SITE_URL = "https://drelifdemirugur.com";

type HowStep = { title: string; body: string };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "coaching" });
  const keywords = t.raw("keywords") as string[];
  const path = `/${locale}/coaching`;
  const url = `${SITE_URL}${path}`;
  const ogLocale = locale === "tr" ? "tr_TR" : "en_US";

  return {
    title: t("title"),
    description: t("description"),
    keywords,
    alternates: {
      canonical: url,
      languages: {
        tr: `${SITE_URL}/tr/coaching`,
        en: `${SITE_URL}/en/coaching`,
        "x-default": `${SITE_URL}/tr/coaching`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      type: "website",
      locale: ogLocale,
    },
  };
}

export default async function CoachingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("coaching");

  const credentials = t.raw("credentials") as string[];
  const whoItems = t.raw("whoItems") as string[];
  const aiItems = t.raw("aiItems") as string[];
  const howSteps = t.raw("howSteps") as HowStep[];

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <p className="text-sm font-medium tracking-[0.16em] text-purple-600 uppercase">
        {t("eyebrow")}
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-cloud-ink md:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-cloud-muted">{t("intro")}</p>

      <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {credentials.map((item) => (
          <li
            key={item}
            className="border border-cloud-200/90 bg-white/50 px-4 py-2.5 text-sm text-cloud-ink"
          >
            {item}
          </li>
        ))}
      </ul>

      <section className="mt-14 border-t border-cloud-200 pt-12">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink md:text-3xl">
          {t("whoHeading")}
        </h2>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-cloud-muted">
          {t("whoBody")}
        </p>
        <ul className="mt-6 space-y-3 text-cloud-muted">
          {whoItems.map((item) => (
            <li key={item} className="border-l-2 border-purple-500/40 pl-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border-t border-cloud-200 pt-12">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink md:text-3xl">
          {t("aiHeading")}
        </h2>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-cloud-muted">
          {t("aiBody")}
        </p>
        <ul className="mt-6 space-y-3 text-cloud-muted">
          {aiItems.map((item) => (
            <li key={item} className="border-l-2 border-purple-500/40 pl-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border-t border-cloud-200 pt-12">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink md:text-3xl">
          {t("howHeading")}
        </h2>
        <ol className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {howSteps.map((step, index) => (
            <li key={step.title}>
              <p className="text-sm font-medium tracking-[0.12em] text-purple-600 uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl text-cloud-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-cloud-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-[0.95rem] leading-relaxed text-cloud-muted">
          {t.rich("contactLine", {
            link: (chunks) => (
              <Link
                href="/contact"
                className="text-purple-600 underline-offset-4 hover:underline"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
      </section>

      <section className="mt-14 border-t border-cloud-200 pt-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl text-cloud-ink md:text-2xl">
          {t("studentRedirectTitle")}
        </h2>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-cloud-muted">
          {t("studentRedirectBody")}
        </p>
        <Link
          href="/coaching/students"
          className="mt-4 inline-block text-sm font-semibold text-purple-600 transition hover:text-purple-500"
        >
          {t("studentRedirectLink")}
        </Link>
      </section>
    </div>
  );
}
