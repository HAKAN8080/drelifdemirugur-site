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
  // Example (uncomment and replace IDs when ready):
  // {
  //   id: "example-show",
  //   kind: "show",
  //   spotifyId: "PASTE_SHOW_ID_HERE",
  //   expanded: true,
  //   title: {
  //     tr: "Örnek Podcast",
  //     en: "Example Podcast",
  //   },
  //   description: {
  //     tr: "Kısa açıklama.",
  //     en: "Short description.",
  //   },
  // },
];
