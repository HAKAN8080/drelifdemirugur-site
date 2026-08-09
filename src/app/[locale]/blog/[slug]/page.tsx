import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { MarkdownBody } from "@/components/markdown-body";
import {
  copyForPost,
  formatPostDate,
  getAllPosts,
  getPostBySlug,
} from "@/content/blog/posts";
type Props = { params: Promise<{ locale: string; slug: string }> };

const SITE_URL = "https://drelifdemirugur.com";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const meta = await getTranslations({ locale, namespace: "meta" });
  const { title, description } = copyForPost(post, locale);
  const ogLocale = locale === "tr" ? "tr_TR" : "en_US";
  const url = `${SITE_URL}/${locale}/blog/${post.slug}`;

  return {
    title,
    description,
    keywords: post.tags,
    authors: [{ name: "Dr. Elif Demir Uğur", url: SITE_URL }],
    alternates: {
      canonical: url,
      languages: {
        tr: `${SITE_URL}/tr/blog/${post.slug}`,
        en: `${SITE_URL}/en/blog/${post.slug}`,
        "x-default": `${SITE_URL}/tr/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: `${title} · ${meta("siteName")}`,
      description,
      type: "article",
      locale: ogLocale,
      url,
      siteName: meta("siteName"),
      publishedTime: `${post.date}T12:00:00.000Z`,
      authors: ["Dr. Elif Demir Uğur"],
      tags: post.tags,
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              alt: title,
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const t = await getTranslations("blog");
  const { title, description, body } = copyForPost(post, locale);
  const url = `${SITE_URL}/${locale}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Dr. Elif Demir Uğur",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.tags.join(", "),
    inLanguage: locale === "en" ? "en" : "tr",
    url,
    ...(post.coverImage
      ? { image: `${SITE_URL}${post.coverImage}` }
      : {}),
  };

  return (
    <article className="mx-auto max-w-2xl px-5 py-14 md:px-8 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/blog"
        className="text-sm font-medium text-cloud-muted transition hover:text-purple-600"
      >
        ← {t("back")}
      </Link>

      <header className="mt-8 border-b border-cloud-200/80 pb-10">
        <time
          dateTime={post.date}
          className="text-xs font-semibold tracking-[0.16em] text-purple-600 uppercase"
        >
          {formatPostDate(post.date, locale)}
        </time>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-[2.15rem] leading-[1.15] text-cloud-ink sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-cloud-muted">
          {description}
        </p>
        {post.tags.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-2 text-xs text-cloud-muted">
            {post.tags.slice(0, 6).map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-cloud-200/90 bg-white/40 px-3 py-1"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      {post.videoSrc ? (
        <div className="mt-10 overflow-hidden rounded-xl bg-black/5 shadow-[0_12px_32px_-20px_rgba(26,47,69,0.35)]">
          <div className="relative aspect-video w-full bg-black">
            <video
              controls
              playsInline
              preload="metadata"
              poster={post.coverImage}
              className="absolute inset-0 h-full w-full"
              src={post.videoSrc}
              // referrerPolicy is valid on HTMLVideoElement; React DOM typings lag behind.
              {...{ referrerPolicy: "no-referrer" as const }}
            >
              <a href={post.videoSrc}>{title}</a>
            </video>
          </div>
        </div>
      ) : post.coverImage ? (
        <div className="mt-10 overflow-hidden shadow-[0_18px_40px_-18px_rgba(26,47,69,0.45)]">
          <Image
            src={post.coverImage}
            alt={title}
            width={800}
            height={1200}
            className="mx-auto h-auto w-full max-w-xs sm:max-w-sm"
            priority
          />
        </div>
      ) : null}

      <div className="mt-12">
        <MarkdownBody source={body} />
      </div>
    </article>
  );
}
