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
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <header className="mb-10 md:mb-12">
        <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-purple-600 md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-cloud-muted">
          {t("description")}
        </p>
      </header>

      {allPosts.length === 0 ? (
        <div className="rounded-2xl border border-cloud-200/80 bg-white/50 p-8">
          <p className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink">
            {t("empty")}
          </p>
        </div>
      ) : (
        <ul className="space-y-5 md:space-y-6">
          {allPosts.map((post) => {
            const { title, description } = copyForPost(post, locale);
            return (
              <li key={post.slug}>
                <article className="blog-card group relative overflow-hidden rounded-2xl border border-cloud-200/80 bg-white/60 p-6 shadow-[0_10px_28px_-22px_rgba(26,47,69,0.45)] backdrop-blur-[2px] transition duration-200 hover:-translate-y-0.5 hover:border-purple-500/35 hover:bg-white/80 hover:shadow-[0_18px_40px_-24px_rgba(86,58,128,0.45)] md:p-8">
                  <div
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-purple-500 to-cloud-300 opacity-80 transition group-hover:opacity-100"
                  />
                  <time
                    dateTime={post.date}
                    className="inline-flex rounded-full bg-purple-100/80 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.14em] text-purple-600 uppercase"
                  >
                    {formatPostDate(post.date, locale)}
                  </time>
                  <h2 className="mt-4 font-[family-name:var(--font-display)] text-[1.55rem] leading-snug text-purple-600 md:text-[1.85rem]">
                    <Link
                      href={{
                        pathname: "/blog/[slug]",
                        params: { slug: post.slug },
                      }}
                      className="transition hover:text-purple-500"
                    >
                      {title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-prose text-[0.98rem] leading-[1.7] text-cloud-muted">
                    {description}
                  </p>
                  <Link
                    href={{
                      pathname: "/blog/[slug]",
                      params: { slug: post.slug },
                    }}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-purple-600 transition group-hover:gap-2.5 hover:text-purple-500"
                  >
                    {t("readMore")}
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
