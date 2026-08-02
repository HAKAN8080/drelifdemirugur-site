import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  podcastEmbedHeight,
  podcasts,
  resolveSpotifyEmbedUrl,
  type PodcastEntry,
} from "@/content/podcasts";

type Props = { params: Promise<{ locale: string }> };

function copyFor(entry: PodcastEntry, locale: string) {
  const lang = locale === "en" ? "en" : "tr";
  return {
    title: entry.title[lang],
    description: entry.description[lang],
  };
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "podcasts" });
  const meta = await getTranslations({ locale, namespace: "meta" });
  return {
    title: `${t("title")} · ${meta("siteName")}`,
    description: t("description"),
  };
}

export default async function PodcastsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("podcasts");
  const hasEpisodes = podcasts.length > 0;

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-cloud-ink md:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-4 text-lg text-cloud-muted">{t("intro")}</p>

      {hasEpisodes ? (
        <ul className="mt-12 space-y-14">
          {podcasts.map((entry) => {
            const { title, description } = copyFor(entry, locale);
            const embedUrl = resolveSpotifyEmbedUrl(entry);
            const height = podcastEmbedHeight(entry);

            return (
              <li key={entry.id} className="border-l-2 border-purple-500/40 pl-5">
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink md:text-3xl">
                  {title}
                </h2>
                {description ? (
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-cloud-muted">
                    {description}
                  </p>
                ) : null}
                <div className="mt-5 overflow-hidden rounded-xl bg-white/50 shadow-[0_12px_32px_-20px_rgba(26,47,69,0.35)]">
                  <iframe
                    title={title}
                    src={embedUrl}
                    width="100%"
                    height={height}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="block w-full border-0"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="mt-14 border-l-2 border-purple-500/40 pl-5">
          <p className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink md:text-3xl">
            {t("comingSoon")}
          </p>
          <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-cloud-muted">
            {t("emptyNote")}
          </p>
        </div>
      )}
    </div>
  );
}
