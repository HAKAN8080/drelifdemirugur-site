import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  copyForPost,
  formatPostDate,
  getAllPosts,
} from "@/content/blog/posts";

type Props = { params: Promise<{ locale: string }> };

const SITE_URL = "https://drelifdemirugur.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const meta = await getTranslations({ locale, namespace: "meta" });
  const title = t("title");
  const description = t("description");
  const ogLocale = locale === "tr" ? "tr_TR" : "en_US";

  return {
    title,
    description,
    keywords: [
      "blog",
      "Dr. Elif Demir Uğur",
      "Elif Demir Uğur",
      "Aurora",
      "yazı",
      "writing",
      "koçluk",
      "coaching",
      "şifa",
      "healing voice",
    ],
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog`,
      languages: {
        tr: `${SITE_URL}/tr/blog`,
        en: `${SITE_URL}/en/blog`,
        "x-default": `${SITE_URL}/tr/blog`,
      },
    },
    openGraph: {
      title: `${title} · ${meta("siteName")}`,
      description,
      type: "website",
      locale: ogLocale,
      url: `${SITE_URL}/${locale}/blog`,
      siteName: meta("siteName"),
    },
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const allPosts = getAllPosts();

  return (
    <div className="mx-auto max-w-2xl px-5 py-14 md:px-8 md:py-20">
      <header className="border-b border-cloud-200/80 pb-10">
        <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-cloud-ink md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-cloud-muted">
          {t("description")}
        </p>
      </header>

      {allPosts.length === 0 ? (
        <div className="mt-14 border-l-2 border-purple-500/40 pl-5">
          <p className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink">
            {t("empty")}
          </p>
        </div>
      ) : (
        <ul className="mt-4">
          {allPosts.map((post) => {
            const { title, description } = copyForPost(post, locale);
            return (
              <li
                key={post.slug}
                className="border-b border-cloud-200/70 py-11 last:border-b-0"
              >
                <time
                  dateTime={post.date}
                  className="text-xs font-semibold tracking-[0.16em] text-purple-600 uppercase"
                >
                  {formatPostDate(post.date, locale)}
                </time>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-[1.65rem] leading-snug text-cloud-ink md:text-3xl">
                  <Link
                    href={{
                      pathname: "/blog/[slug]",
                      params: { slug: post.slug },
                    }}
                    className="transition hover:text-purple-600"
                  >
                    {title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-prose text-base leading-[1.7] text-cloud-muted">
                  {description}
                </p>
                <Link
                  href={{
                    pathname: "/blog/[slug]",
                    params: { slug: post.slug },
                  }}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold tracking-wide text-purple-600 transition hover:text-purple-500"
                >
                  {t("readMore")}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
