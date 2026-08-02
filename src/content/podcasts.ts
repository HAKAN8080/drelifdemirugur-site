export type LocalizedText = {
  tr: string;
  en: string;
};

type PodcastBase = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
};

/**
 * Spotify show or episode embed.
 *
 * How to add:
 * 1. Open the show/episode on Spotify → Share → Copy link
 *    e.g. https://open.spotify.com/show/SHOW_ID or …/episode/EPISODE_ID
 * 2. Paste the ID into `spotifyId` and set `kind` to "show" or "episode"
 *    (or set `spotifyEmbedUrl` to the full embed URL).
 */
export type SpotifyPodcastEntry = PodcastBase & {
  media: "spotify";
  kind: "show" | "episode";
  /** Spotify show or episode ID from the open.spotify.com URL */
  spotifyId: string;
  /**
   * Optional full embed URL. When set, overrides kind/spotifyId.
   * Format: https://open.spotify.com/embed/show/{ID}
   *      or https://open.spotify.com/embed/episode/{ID}
   */
  spotifyEmbedUrl?: string;
  /** Compact player ≈152px; expanded ≈352px */
  expanded?: boolean;
};

/**
 * Bunny Stream video iframe embed (public URL only — never put API keys here).
 *
 * How to add:
 * 1. Bunny dashboard → Stream → Video → Embed
 * 2. Either paste libraryId + videoId, or set `bunnyEmbedUrl` to the full
 *    iframe src (embed or play URL both work).
 *    Pattern: https://iframe.mediadelivery.net/embed/{LIBRARY_ID}/{VIDEO_ID}
 */
export type BunnyPodcastEntry = PodcastBase & {
  media: "bunny";
  /** Bunny Stream library ID (numeric) */
  libraryId?: string;
  /** Bunny Stream video GUID */
  videoId?: string;
  /**
   * Optional full embed/play URL. When set, overrides libraryId/videoId.
   * Accepts /embed/… or /play/… (normalized to /embed/ for the iframe).
   */
  bunnyEmbedUrl?: string;
};

export type PodcastEntry = SpotifyPodcastEntry | BunnyPodcastEntry;

export function isSpotifyEntry(
  entry: PodcastEntry,
): entry is SpotifyPodcastEntry {
  return entry.media === "spotify";
}

export function isBunnyEntry(entry: PodcastEntry): entry is BunnyPodcastEntry {
  return entry.media === "bunny";
}

export function resolveSpotifyEmbedUrl(entry: SpotifyPodcastEntry): string {
  if (entry.spotifyEmbedUrl) return entry.spotifyEmbedUrl;
  return `https://open.spotify.com/embed/${entry.kind}/${entry.spotifyId}`;
}

/**
 * Builds a Bunny Stream embed iframe URL from library/video IDs or a full URL.
 * Returns null if the entry cannot be resolved (e.g. unfinished example).
 */
export function resolveBunnyEmbedUrl(entry: BunnyPodcastEntry): string | null {
  if (entry.bunnyEmbedUrl?.trim()) {
    return normalizeBunnyEmbedUrl(entry.bunnyEmbedUrl.trim());
  }
  const libraryId = entry.libraryId?.trim();
  const videoId = entry.videoId?.trim();
  if (!libraryId || !videoId) return null;
  if (
    libraryId.startsWith("YOUR_") ||
    videoId.startsWith("YOUR_") ||
    libraryId.includes("LIBRARY") ||
    videoId.includes("VIDEO")
  ) {
    return null;
  }
  return `https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}`;
}

function normalizeBunnyEmbedUrl(url: string): string | null {
  const match = url.match(
    /(?:https?:\/\/)?(?:iframe\.)?mediadelivery\.net\/(?:embed|play)\/(\d+)\/([a-f0-9-]+)/i,
  );
  if (match) {
    return `https://iframe.mediadelivery.net/embed/${match[1]}/${match[2]}`;
  }
  // Already a full custom embed URL from the dashboard — use as-is
  if (/^https?:\/\//i.test(url)) return url;
  return null;
}

export function podcastEmbedHeight(entry: SpotifyPodcastEntry): number {
  return entry.expanded ? 352 : 152;
}

/**
 * Podcast / video embeds shown on /podcasts.
 * Leave empty for the intentional “coming soon” empty state.
 */
export const podcasts: PodcastEntry[] = [
  {
    id: "aurora-ortak-paydada",
    media: "spotify",
    kind: "episode",
    // Resolved from https://spotifycreators-web.app.link/e/4b75lI1uf5b
    // → https://open.spotify.com/episode/4QWwfHbJ6DjgQwJljMw6lm
    // Show: https://open.spotify.com/show/033ZwLUceGeTNLOz1CAk9t
    spotifyId: "4QWwfHbJ6DjgQwJljMw6lm",
    expanded: true,
    title: {
      tr: "Aurora — Bir Gökyüzü Aşkının Mitolojisi",
      en: "Aurora — A Mythology of Skyborne Love",
    },
    description: {
      tr: "Ortak Paydada Buluşalım · Aurora’yı konuşuyoruz: kitap bir görüntüden nasıl çıktı, kötü karakter nasıl anlaşılır hale geldi, gökyüzü ve yeryüzü neden birbirinin aynası.",
      en: "Ortak Paydada Buluşalım · On Aurora: how the book began from a single image, how the antagonist becomes understandable, and why sky and earth mirror each other.",
    },
  },
  // Bunny Stream example — uncomment and replace IDs (or bunnyEmbedUrl) from
  // Bunny dashboard → Stream → Video → Embed. No API password in frontend.
  // {
  //   id: "example-bunny-video",
  //   media: "bunny",
  //   libraryId: "YOUR_LIBRARY_ID",
  //   videoId: "YOUR_VIDEO_GUID",
  //   // Or paste the full iframe src:
  //   // bunnyEmbedUrl: "https://iframe.mediadelivery.net/embed/123456/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  //   title: {
  //     tr: "Örnek video başlığı",
  //     en: "Example video title",
  //   },
  //   description: {
  //     tr: "Bunny Stream gömülü video açıklaması.",
  //     en: "Bunny Stream embedded video description.",
  //   },
  // },
];
