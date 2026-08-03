import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Portrait } from "@/components/portrait";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const meta = await getTranslations("meta");

  return (
    <div>
      <section className="relative overflow-hidden bg-[#0a1a3a]">
        <a
          href="https://kitaplik.thorius.com.tr/kitap/aurora"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("auroraBadgeAria")}
          className="group relative block"
        >
          <video
            className="aspect-[16/7] w-full object-cover sm:aspect-[21/8] md:aspect-[24/8]"
            src="/vid.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/15 transition group-hover:bg-black/25">
            <span className="aurora-badge">{t("auroraBadge")}</span>
          </div>
        </a>
      </section>

      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0 md:left-[42%]">
          <Portrait className="h-full min-h-[50vh] w-full md:min-h-full" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-cloud-50 via-cloud-50/40 to-transparent md:bg-gradient-to-r md:from-cloud-50 md:via-cloud-50/85 md:to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-20">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-medium tracking-[0.18em] text-purple-600 uppercase">
              {t("eyebrow")}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl leading-[1.1] text-cloud-ink sm:text-5xl md:text-6xl">
              {meta("siteName")}
            </h1>
            <p className="mt-5 font-[family-name:var(--font-display)] text-xl text-cloud-ink/90 md:text-2xl">
              {t("headline")}
            </p>
            <p className="mt-4 max-w-md text-base text-cloud-muted md:text-lg">
              {t("lead")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/professional" className="btn-primary">
                {t("ctaProfessional")}
              </Link>
              <Link href="/books" className="btn-primary">
                {t("ctaAuthor")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
        <Link href="/professional" className="group block">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-cloud-ink transition group-hover:text-purple-600">
            {t("pillarProTitle")}
          </h2>
          <p className="mt-3 text-cloud-muted">{t("pillarProText")}</p>
        </Link>
        <Link href="/books" className="group block">
          <div className="flex items-center gap-4">
            <div className="w-16 shrink-0">
              <Image
                src="/elif-nile-logo.png"
                alt="Elif Nile"
                width={160}
                height={160}
                className="h-auto w-full object-contain"
              />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-cloud-ink transition group-hover:text-purple-600">
              {t("pillarAuthorTitle")}
            </h2>
          </div>
          <p className="mt-3 text-cloud-muted">{t("pillarAuthorText")}</p>
        </Link>
      </section>

      <section className="relative overflow-hidden bg-[#0a1a3a]">
        <a
          href="https://medium.com/@theevolvedwoman"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("mediumBadgeAria")}
          className="group relative block"
        >
          <video
            className="aspect-[16/7] w-full object-cover sm:aspect-[21/8] md:aspect-[24/8]"
            src="/medium-tanitim.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/10 transition group-hover:bg-black/20">
            <span className="medium-badge absolute bottom-4 left-4 md:bottom-6 md:left-6">
              {t("mediumBadge")}
            </span>
          </div>
        </a>
      </section>

      <p className="mx-auto max-w-6xl px-5 py-6 text-center text-xs text-cloud-muted/70 md:px-8">
        {t("contentCredit")}
      </p>
    </div>
  );
}
