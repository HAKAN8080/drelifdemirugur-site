import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { routing } from "@/i18n/routing";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "../globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const SITE_URL = "https://drelifdemirugur.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const ogLocale = locale === "tr" ? "tr_TR" : "en_US";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: `%s · ${t("siteName")}`,
    },
    description: t("description"),
    authors: [{ name: "Dr. Elif Demir Uğur", url: SITE_URL }],
    creator: "Dr. Elif Demir Uğur",
    keywords: [
      "Elif Demir Uğur",
      "Dr. Elif Demir Uğur",
      "drelifdemirugur",
      "yazar",
      "koç",
      "mentor",
      "Aurora",
      "Kadim Dil Mitleri",
      "Thorius",
      "author",
      "coach",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    // Page path becomes canonical via metadataBase; languages cover locale roots.
    alternates: {
      languages: {
        tr: "/tr",
        en: "/en",
        "x-default": "/tr",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: ogLocale,
      alternateLocale: locale === "tr" ? ["en_US"] : ["tr_TR"],
      siteName: t("siteName"),
      images: [
        {
          url: "/portrait.png",
          width: 1200,
          height: 1600,
          alt: t("siteName"),
        },
      ],
    },
    // TODO: Google Search Console verification — paste code when available:
    // verification: { google: "CODE" },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
      shortcut: "/favicon.svg",
      apple: "/favicon.svg",
    },
  };
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Elif Demir Uğur",
  jobTitle: "Author, Coach, Mentor",
  url: SITE_URL,
  sameAs: [
    "https://www.linkedin.com/in/dr-elif-demir-u%C4%9Fur-edu-b90b013b/",
    "https://medium.com/@theevolvedwoman",
    "https://thorius.com.tr",
  ],
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col font-[family-name:var(--font-body)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
