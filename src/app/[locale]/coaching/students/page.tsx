import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";
import { StudentCoachingContent } from "@/components/student-coaching-content";

type Props = { params: Promise<{ locale: string }> };

const SITE_URL = "https://drelifdemirugur.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "studentCoaching" });
  const keywords = t.raw("keywords") as string[];
  const ogLocale = locale === "tr" ? "tr_TR" : "en_US";
  const url = `${SITE_URL}/en/coaching/students`;

  return {
    title: t("title"),
    description: t("description"),
    keywords,
    alternates: {
      canonical: url,
      languages: {
        tr: `${SITE_URL}/tr/coaching/ogrenci`,
        en: `${SITE_URL}/en/coaching/students`,
        "x-default": `${SITE_URL}/tr/coaching/ogrenci`,
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

export default async function StudentCoachingEnPage({ params }: Props) {
  const { locale } = await params;
  if (locale === "tr") {
    redirect({ href: "/coaching/students", locale: "tr" });
  }
  setRequestLocale(locale);
  return <StudentCoachingContent />;
}
