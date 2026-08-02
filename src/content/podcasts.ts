export type PodcastKind = "show" | "episode";

export type LocalizedText = {
  tr: string;
  en: string;
};

/**
 * One Spotify show or episode embed.
 *
 * How to add an entry:
 * 1. Open the show/episode on Spotify → Share → Copy link
 *    e.g. https://open.spotify.com/show/SHOW_ID or …/episode/EPISODE_ID
 * 2. Paste the ID into `spotifyId` and set `kind` to "show" or "episode"
 *    (or set `spotifyEmbedUrl` to the full embed URL).
 * 3. Fill bilingual title/description.
 */
export type PodcastEntry = {
  id: string;
  kind: PodcastKind;
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
  title: LocalizedText;
  description: LocalizedText;
};

export function resolveSpotifyEmbedUrl(entry: PodcastEntry): string {
  if (entry.spotifyEmbedUrl) return entry.spotifyEmbedUrl;
  return `https://open.spotify.com/embed/${entry.kind}/${entry.spotifyId}`;
}

export function podcastEmbedHeight(entry: PodcastEntry): number {
  return entry.expanded ? 352 : 152;
}

/**
 * Podcast embeds shown on /podcasts.
 * Leave empty for the intentional “coming soon” empty state.
 */
export const podcasts: PodcastEntry[] = [
  {
    id: "aurora-ortak-paydada",
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
];
