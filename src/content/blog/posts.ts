export type LocalizedText = {
  tr: string;
  en: string;
};

export type BlogPost = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  /** SEO keywords / tags (same set for both locales; keep bilingual or language-neutral) */
  tags: string[];
  /** Optional cover image path under /public */
  coverImage?: string;
  /** Markdown body (paragraphs, ## headings, lists, links, bold/italic) */
  body: LocalizedText;
};

/**
 * How to add a new post:
 * 1. Append an object to `posts` below (unique `slug`, ISO `date`, tr/en fields).
 * 2. Rebuild / redeploy. Listing, sitemap, and `/blog/[slug]` pick it up automatically.
 */
export const posts: BlogPost[] = [
  {
    slug: "kendi-sesimle-yurumek",
    date: "2026-08-02",
    tags: [
      "Dr. Elif Demir Uğur",
      "şifa sesi",
      "healing voice",
      "otantik liderlik",
      "authentic leadership",
      "koçluk",
      "coaching",
      "mentorluk",
      "kişisel marka",
      "professional voice",
    ],
    title: {
      tr: "Kendi sesimle yürümek",
      en: "Walking in my own voice",
    },
    description: {
      tr: "Şifa doğru ağızdan çıktığında büyür. Işığı başkalarına kaptırmayı bırakıp, kendi adımla ve kendi sesimle yürümenin ne anlama geldiği üzerine.",
      en: "Healing grows when it comes from the right mouth. On reclaiming light, walking under my own name, and speaking with a professional voice that is truly mine.",
    },
    body: {
      tr: `Şifa, doğru ağızdan çıkınca şifa olur. Yıllarca karşılıksız açtığım o musluktan beslenenler oldu; emeği hiçe sayanlar da. Adaleti sahibine bıraktım. Uyarıyı aldım: ışığımı başkalarına kaptırmayı bırakıyor, kendi sesimi duyuruyorum.

Bu, öfkeyle kapanmak değil. Alma–verme dengesini koruyarak, ilahi akıştaki sözlerimi hak edenlerle paylaşmak. Koçlukta, mentorlukta ve liderlikte yıllardır savunduğum şeyin ta kendisi: **otantiklik** — başkasının senaryosunda değil, kendi yolunda yürümek.

## Kendi adıyla yürümek

Yirmi altı yılı aşkın eğitim, insan kaynakları, koçluk ve mentorluk birikimi; Thorius’taki kurucu ortaklık; ICF yolculuğu… Bunların hepsi bir isim altında birleşiyor: **Dr. Elif Demir Uğur**. Profesyonel ses ile şifa sesi birbirinin zıddı değil; aynı omurganın iki yüzü.

Artık paylaşımı seçerek yapıyorum. Kendi adımla, kendi yolumda. Yaklaşık beş yıldır ilmek ilmek ördüğüm kitap serisini de bu niyetle sunuyorum. Yaşanan her deneyim, almak isteyene tecrübe olur.

Şifa niyetine.`,
      en: `Healing becomes true healing when it comes from the right mouth. For years I left a faucet open so others might be nourished; some disregarded that labor. I left justice to its Owner. I have taken the warning: I am done letting others take my light. I am making my own voice heard.

This is not shutting down in anger. It is protecting the balance of giving and receiving — sharing words that move in divine flow only with those who meet them with care. It is the same truth I have taught in coaching, mentoring, and leadership for years: **authenticity** — walking your own path, not someone else’s script.

## Walking under your own name

More than twenty-six years in education, people & culture, coaching, and mentoring; co-founding Thorius; the ICF journey… All of it gathers under one name: **Dr. Elif Demir Uğur**. The professional voice and the healing voice are not opposites; they are two faces of the same spine.

I choose what I share now. Under my own name, on my own path. With that same intention I offer the book series I have been weaving, stitch by stitch, for about five years. Every lived experience becomes wisdom for those who wish to receive it.

With the intention of healing.`,
    },
  },
  {
    slug: "aurora-gogu-dinleyenler-icin",
    date: "2026-07-28",
    tags: [
      "Aurora",
      "Kadim Dil Mitleri",
      "Ancient Language Myths",
      "Elif Nile",
      "mitolojik roman",
      "mythological novel",
      "Thorius Kitaplık",
      "yazmak",
      "writing",
      "Dr. Elif Demir Uğur",
    ],
    coverImage: "/aurora-cover.png",
    title: {
      tr: "Aurora: göğü dinleyenler için",
      en: "Aurora: for those who listen to the sky",
    },
    description: {
      tr: "Kadim Dil Mitleri serisinin ilk halkası Aurora üzerine: bir görüntüden doğan roman, özgürleştiren sevgi ve kendi dilini konuşan bir mitoloji.",
      en: "On Aurora, the first link in the Ancient Language Myths series: a novel born from a single image, liberating love, and a mythology that speaks its own tongue.",
    },
    body: {
      tr: `Gökyüzü bir kez tutuştu. Gördüğünüz her yıldız, bir zamanlar yanmış bir közün anısıdır. *Aurora — Bir Gökyüzü Aşkının Mitolojisi*, yedi kitaplık **Kadim Dil Mitleri** serisinin ilk halkası; Elif Nile imzasıyla Thorius Kitaplık’ta.

Roman bir tezden değil, bir görüntüden çıktı: Odâra — küllerinden dönen alev; Yelvân — özgür bırakan ufuk. İkisi buluştuğunda insanların sonradan Aurora dediği ışık göğü ilk kez aydınlattı. Ama her ışığın peşine düşen bir gölge vardır.

## Sevgi, sahip olmak değil

Aurora’nın sorduğu soru basit ve derin: sevmek, sevdiğine sahip olmak mıdır — yoksa onun önünde bir ufuk açmak mı? Bu kitapta sevgi, varılacak yer değil; seni içindeki ışığa, oradan da göğe götüren ufuktur.

Mitolojiyi süs olarak kullanmıyorum. Kendi dilini, kendi adlarını, kendi yasasını kuran bir dünya yazıyorum — kadim bilgelik geleneğinin inceliğini modern bir anlatıya taşıyarak.

## Neden şimdi

Yıllarca profesyonel hayatta liderlik, kültür ve koçluğu taşıdım. Yazmak, aynı sesin edebiyat yüzü. Aurora, göğü dinleyenler için; ışığını üreten ve kimsenin söndüremeyeceğini bilenler için.

[Thorius Kitaplık’ta Aurora’yı keşfedin](https://kitaplik.thorius.com.tr/kitap/aurora).`,
      en: `The sky caught fire once. Every star you see is the memory of an ember that burned. *Aurora — A Mythology of Skyborne Love* is the first link in the seven-book **Ancient Language Myths** series, published under Elif Nile on Thorius Kitaplık.

The novel did not begin as a thesis. It began as an image: Odâra — flame returning from ash; Yelvân — the horizon that sets free. When they met, the light people later called Aurora lit the heavens for the first time. But every light is followed by a shadow.

## Love is not possession

Aurora asks a simple, deep question: is loving to possess the beloved — or to open a horizon before them? In this book, love is not a destination. It is a horizon that carries you to the light within — and from there, to the sky.

I do not use mythology as decoration. I write a world that builds its own tongue, its own names, its own law — carrying the finesse of ancient wisdom into a modern narrative.

## Why now

For years I carried leadership, culture, and coaching in professional life. Writing is the literary face of the same voice. Aurora is for those who listen to the sky — and for those who know that if they make the light, no one can put it out.

[Explore Aurora on Thorius Kitaplık](https://kitaplik.thorius.com.tr/kitap/aurora).`,
    },
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function copyForPost(post: BlogPost, locale: string) {
  const lang = locale === "en" ? "en" : "tr";
  return {
    title: post.title[lang],
    description: post.description[lang],
    body: post.body[lang],
  };
}

export function formatPostDate(dateIso: string, locale: string): string {
  const date = new Date(`${dateIso}T12:00:00`);
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
