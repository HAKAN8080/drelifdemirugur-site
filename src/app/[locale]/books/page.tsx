import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

const AURORA_URL = "https://kitaplik.thorius.com.tr/kitap/aurora";

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "books" });
  const meta = await getTranslations({ locale, namespace: "meta" });
  return { title: `${t("title")} · ${meta("siteName")}` };
}

export default async function BooksPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("books");

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
        <div className="w-40 shrink-0 sm:w-48">
          <Image
            src="/elif-nile-logo.png"
            alt="Elif Nile"
            width={400}
            height={400}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
        <div>
          <p className="text-sm font-medium tracking-[0.16em] text-purple-600 uppercase">
            {t("seriesName")}
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-cloud-ink md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-cloud-muted">{t("seriesIntro")}</p>
        </div>
      </div>

      <article className="mt-14 border-t border-cloud-200 pt-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <a
            href={AURORA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mx-auto w-44 shrink-0 overflow-hidden shadow-[0_18px_40px_-18px_rgba(26,47,69,0.45)] transition hover:opacity-95 sm:mx-0 sm:w-52"
          >
            <Image
              src="/aurora-cover.png"
              alt={t("auroraTitle")}
              width={416}
              height={624}
              className="h-auto w-full"
              priority
            />
          </a>
          <div className="min-w-0 flex-1">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-cloud-ink">
              {t("auroraTitle")}
            </h2>
            <p className="mt-2 text-sm text-purple-600">{t("auroraSubtitle")}</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-cloud-muted">
              {t("auroraBlurb")}
            </p>
            <p className="mt-5 font-[family-name:var(--font-display)] text-lg italic text-cloud-ink">
              {`“${t("auroraQuote")}”`}
            </p>
            <a
              href={AURORA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
            >
              {t("ctaKitaplik")}
            </a>
          </div>
        </div>
      </article>

      <p className="mt-12 text-cloud-muted">{t("more")}</p>
    </div>
  );
}
