import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  isBunnyEntry,
  isBunnyMp4Entry,
  isSpotifyEntry,
  isVideoEntry,
  podcastEmbedHeight,
  podcasts,
  resolveBunnyEmbedUrl,
  resolveSpotifyEmbedUrl,
  type BunnyMp4PodcastEntry,
  type BunnyPodcastEntry,
  type PodcastEntry,
  type SpotifyPodcastEntry,
} from "@/content/podcasts";

type Props = { params: Promise<{ locale: string }> };

function copyFor(entry: PodcastEntry, locale: string) {
  const lang = locale === "en" ? "en" : "tr";
  return {
    title: entry.title[lang],
    description: entry.description[lang],
  };
}

function SpotifyEmbed({
  entry,
  locale,
  label,
}: {
  entry: SpotifyPodcastEntry;
  locale: string;
  label: string;
}) {
  const { title, description } = copyFor(entry, locale);
  const embedUrl = resolveSpotifyEmbedUrl(entry);
  const height = podcastEmbedHeight(entry);

  return (
    <li className="border-l-2 border-purple-500/40 pl-5">
      <p className="mb-2 text-xs font-medium tracking-[0.16em] text-purple-600 uppercase">
        {label}
      </p>
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
}

function BunnyEmbed({
  entry,
  locale,
  label,
}: {
  entry: BunnyPodcastEntry;
  locale: string;
  label: string;
}) {
  const { title, description } = copyFor(entry, locale);
  const embedUrl = resolveBunnyEmbedUrl(entry);
  if (!embedUrl) return null;

  return (
    <li className="border-l-2 border-purple-500/40 pl-5">
      <p className="mb-2 text-xs font-medium tracking-[0.16em] text-purple-600 uppercase">
        {label}
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-[0.95rem] leading-relaxed text-cloud-muted">
          {description}
        </p>
      ) : null}
      <div className="mt-5 overflow-hidden rounded-xl bg-white/50 shadow-[0_12px_32px_-20px_rgba(26,47,69,0.35)]">
        <div className="relative aspect-video w-full">
          <iframe
            title={title}
            src={embedUrl}
            loading="lazy"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </li>
  );
}

function BunnyMp4Player({
  entry,
  locale,
  label,
}: {
  entry: BunnyMp4PodcastEntry;
  locale: string;
  label: string;
}) {
  const { title, description } = copyFor(entry, locale);

  return (
    <li className="border-l-2 border-purple-500/40 pl-5">
      <p className="mb-2 text-xs font-medium tracking-[0.16em] text-purple-600 uppercase">
        {label}
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-[0.95rem] leading-relaxed text-cloud-muted whitespace-pre-wrap">
          {description}
        </p>
      ) : null}
      <div className="mt-5 overflow-hidden rounded-xl bg-black/5 shadow-[0_12px_32px_-20px_rgba(26,47,69,0.35)]">
        <div className="relative aspect-video w-full bg-black">
          <video
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full"
            src={entry.videoSrc}
          >
            <a href={entry.videoSrc}>{title}</a>
          </video>
        </div>
      </div>
    </li>
  );
}

function VideoEntry({
  entry,
  locale,
  label,
}: {
  entry: BunnyPodcastEntry | BunnyMp4PodcastEntry;
  locale: string;
  label: string;
}) {
  if (isBunnyMp4Entry(entry)) {
    return <BunnyMp4Player entry={entry} locale={locale} label={label} />;
  }
  return <BunnyEmbed entry={entry} locale={locale} label={label} />;
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

  const spotifyEntries = podcasts.filter(isSpotifyEntry);
  const videoEntries = podcasts.filter(isVideoEntry).filter((entry) => {
    if (isBunnyMp4Entry(entry)) return Boolean(entry.videoSrc?.trim());
    if (isBunnyEntry(entry)) return resolveBunnyEmbedUrl(entry) !== null;
    return false;
  });
  const hasEpisodes = spotifyEntries.length > 0 || videoEntries.length > 0;
  const showSectionHeadings =
    spotifyEntries.length > 0 && videoEntries.length > 0;

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-cloud-ink md:text-5xl">
        {t("title")}
      </h1>

      {hasEpisodes ? (
        <div className="mt-12 space-y-16">
          {spotifyEntries.length > 0 ? (
            <section aria-labelledby={showSectionHeadings ? "podcasts-audio" : undefined}>
              {showSectionHeadings ? (
                <h2
                  id="podcasts-audio"
                  className="mb-8 font-[family-name:var(--font-display)] text-xl tracking-wide text-cloud-ink/80 md:text-2xl"
                >
                  {t("sectionAudio")}
                </h2>
              ) : null}
              <ul className="space-y-14">
                {spotifyEntries.map((entry) => (
                  <SpotifyEmbed
                    key={entry.id}
                    entry={entry}
                    locale={locale}
                    label={t("labelSpotify")}
                  />
                ))}
              </ul>
            </section>
          ) : null}

          {videoEntries.length > 0 ? (
            <section aria-labelledby={showSectionHeadings ? "podcasts-video" : undefined}>
              {showSectionHeadings ? (
                <h2
                  id="podcasts-video"
                  className="mb-8 font-[family-name:var(--font-display)] text-xl tracking-wide text-cloud-ink/80 md:text-2xl"
                >
                  {t("sectionVideo")}
                </h2>
              ) : null}
              <ul className="space-y-14">
                {videoEntries.map((entry) => (
                  <VideoEntry
                    key={entry.id}
                    entry={entry}
                    locale={locale}
                    label={t("labelVideo")}
                  />
                ))}
              </ul>
            </section>
          ) : null}
        </div>
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
