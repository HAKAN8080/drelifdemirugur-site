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
    slug: "aurora-gogu-dinleyenler-icin",
    date: "2026-08-03",
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
  {
    slug: "harflerin-sirri-sufiler-sayilara-nasil-bakardi",
    date: "2026-08-03",
    tags: [
      "ebced",
      "abjad",
      "sufizm",
      "Sufism",
      "harfler",
      "letters",
      "nümeroloji",
      "numerology",
      "İbnü'l Arabî",
      "Ibn Arabi",
      "tarih düşürme",
      "chronogram",
      "Elif",
      "tasavvuf",
      "tevafuk",
      "ilm-i huruf",
    ],
    title: {
      tr: "Harflerin Sırrı: Sufiler Sayılara Nasıl Bakardı?",
      en: "The Secret of Letters: How Sufis Looked at Numbers",
    },
    description: {
      tr: "Ebced hesabı, İbnü'l Arabî'nin harf ilmi, Osmanlı tarih düşürme sanatı ve elif isminin içindeki sayı: sufi geleneğin harfe bakışı.",
      en: "Abjad reckoning, Ibn Arabi's science of letters, the Ottoman art of chronograms, and the number inside the name Elif: how Sufi tradition reads the letter.",
    },
    body: {
      tr: `Bir harf düşün. Tek bir dikey çizgi. Ne kıvrımı var ne düğümü; kalemin kâğıda değip yukarıdan aşağı indiği en yalın iz. Arap alfabesinin ilk harfi elif, işte bu çizgidir.

Sufi gelenek bu çizgiye bakıp şunu söyledi: bütün öteki harfler, elifin eğilmiş, bükülmüş, kendine dönmüş hâlleridir. Nasıl bütün sayılar birden türerse, bütün harfler de eliften türer. Bir harfte bir alfabe, bir alfabede bir âlem.

Bu yazı dizisinin ilk iki bölümünde modern nümerolojiden söz ettim: doğum tarihleri, yaşam yolları, bileşik sayılar. Bu bölümde daha eski bir kapıyı aralıyorum. Çünkü sayılarda mana arayışı yalnızca modern bir merak değil; bu coğrafyanın kadim ilimlerinden biri.

## Her Harfin Bir Değeri Var

Ebced, Arap harflerinin her birine bir sayı değeri veren düzenin adıdır. Elif 1'dir, be 2, cim 3. Onlu basamağa geçilir: ye 10, kef 20, lam 30. Sonra yüzler: kaf 100, rı 200 ve böylece gayn harfinin 1000'ine kadar çıkılır.

Bu düzen sayesinde her kelimenin, her ismin bir toplamı olur. Diyelim ki bir kelimenin harfleri toplandı ve 92 çıktı.

Burada modern nümerolojiye alışkın bir okurun eli refleksle toplamaya gider: 9 artı 2, 11 mi yoksa? Hayır. Ebced geleneği sayıyı indirmez. 92, 92 olarak kalır ve bütün hâliyle okunur. Mana, sayının küçültülmüşünde değil, kendisinde ve aynı toplama sahip başka kelimelerle kurduğu akrabalıkta aranır. İki farklı kelime aynı sayıya çıkıyorsa, gelenek orada bir yankı duyar.

## Sayıyı Şiire Gömen Sanat: Tarih Düşürme

Bu ilmin en zarif meyvesi bence Osmanlı'da olgunlaştı. Adına tarih düşürme denir.

Bir çeşme yapılır, bir sultan tahta çıkar, bir çocuk doğar ya da biri bu dünyadan göçer. Şair oturur ve öyle bir mısra yazar ki, mısradaki harflerin ebced değerlerini topladığında o olayın Hicrî yılı çıkar. Yani tarih, rakamla değil şiirle kaydedilir. Mermere kazınan o tek satır kimi zaman bir kutlama, kimi zaman bir ağıt, ama her zaman bir takvimdir.

Düşün: bir sayıyı ezberlemek yerine onu bir güzelliğin içine gömmek. Matematiği estetiğin emrine vermek. Bugün İstanbul'da eski bir çeşmenin kitabesine bakan biri, aslında çözülmeyi bekleyen bir sayı bilmecesine bakıyordur ve çoğu zaman bunu bilmez.

Bu ilim Anadolu'ya da köklü bir yoldan geldi. İbnü'l Arabî'nin en yakın talebesi Sadreddin Konevî ömrünü Konya'da geçirdi; kabri bugün hâlâ oradadır. İlk Osmanlı medresesinin ilk müderrisi Davud el-Kayserî ise İbnü'l Arabî'nin eserlerinin şârihiydi. Yani bu topraklarda okumak ve yazmak, daha en başından, harfe böyle bakan bir geleneğin gölgesinde öğrenildi.

## Adımın İçindeki Çizgi

Alfabenin o ilk harfi, o tek dikey çizgi.

Harf olarak değeri 1: başlangıcın, birliğin sayısı. Gelenek der ki bütün harfler onun eğilmiş hâlidir. İsim olarak yazıldığında ise elif, lam ve fe harflerinden oluşur: 1 artı 30 artı 80, toplam 111. Ebced bu sayıyı indirmez; 111 bütün hâliyle durur ve üç birin yan yana dizilişi, elifin birlik sembolünü kendi içinde üç kez tekrarlar. Sanki isim, harfinin anlamını sayısıyla bir daha söylüyor.

İsmin ortasındaki lam harfinin de kendi hikâyesi var. Arap gramerinde lam, belirlilik takısının çekirdeğidir; bir kelimenin başına geldiğinde "herhangi bir şey"i "o şey" yapar. Bu yüzden ona belirleme lamı denir: bilinmezi bilinir kılan harf. Ve o takı, elif ile lamın birleşiminden doğar; yani ismimin ilk iki harfi, yan yana geldiklerinde dilin tanıma aracına dönüşür. Hat ve tasavvuf geleneğinde ise lam, dibinde kıvrılan bir dikey çizgi olarak okunur: ayakta duran elifin, eğilmiş hâli gibi. Elif ile lam öteki yönden birleştiğinde de alfabenin en çok işlenmiş şekli çıkar ortaya: lâm-elif, yani "lâ", yani "değil". Hattatlar bu iki harfi yüzyıllarca sarmaş dolaş yazdı; tasavvuf yorumunda o birleşim, geçici olana çekilen çizgidir, bırakmanın ve arınmanın işareti. Duran çizgiyle eğilen çizgi kucaklaşır ve birlikte "hayır" derler; sanki dil, vazgeçmeyi bile bir kucaklaşmayla yazmak istemiş.

Ve burada bir tevafuk daha var; onu da açık kartlarla anlatayım. Bu sayıyı elbette adımı taşıyan herkesle paylaşıyorum; bir isim kimseye özel bir kader biçmez. Bana ait olan kısım, iki ayrı hesabın aynı kişide buluşması. Bu dizinin ikinci yazısında kendi yaşam yolumun 30/3 olduğunu söylemiştim. Şimdi iki ayrı cetveli, bilerek ve söyleyerek, yan yana koyuyorum: modern nümerolojinin yöntemiyle 111'in rakamlarını toplarsan 3 çıkar. İsmimin doğu hesabı ile doğum tarihimin batı hesabı, iki ayrı yoldan aynı sayıya iniyor. Üstelik ismin ortasındaki lam harfi 30; yolumun bileşik sayısıyla aynı.

Bu bir kanıt mı? Değil. İki sistemi birbirine karıştırdığımı biliyorum ve gelenek bunu yapmazdı. Ama tevafukun tanımı da bu zaten: aramadığın yerde bulduğun uyum. Kanıt kapı çalar; tevafuk pencereden gülümser.

Belki senin adında da böyle bir pencere vardır, belki yoktur. İkisi de olur. Bu gelenekten alınacak asıl şey bir sayı değil, bir bakış: yazıya, isme, söze biraz daha dikkatle bakmak. Çünkü sufilere göre âlem de bir kitaptı ve okumasını bilene her harf açıktı.

Bu yazı kültürel ve kişisel gelişim amaçlıdır; bilimsel bir iddia veya kehanet niteliği taşımaz.`,
      en: `Picture a letter. A single vertical stroke. No curve, no knot — only the plainest mark a pen leaves as it touches the page and travels from top to bottom. That stroke is *alif*, the first letter of the Arabic alphabet.

Sufi tradition looked at this line and said: every other letter is *alif* bent, folded, turned back upon itself. Just as all numbers grow from one, all letters grow from *alif*. In one letter, an alphabet; in an alphabet, a world.

In the first two parts of this series I spoke of modern numerology: birth dates, life paths, compound numbers. Here I open an older door. The search for meaning in numbers is not only a modern curiosity; it is one of the ancient sciences of this geography.

## Every Letter Has a Value

*Abjad* is the name of the system that assigns a numerical value to each Arabic letter. *Alif* is 1, *ba* 2, *jim* 3. Then the tens: *ya* 10, *kaf* 20, *lam* 30. Then the hundreds: *qaf* 100, *ra* 200, and so on up to *ghayn* at 1,000.

Through this order every word, every name, has a sum. Suppose the letters of a word add up to 92.

Here a reader used to modern numerology reaches, by reflex, to reduce: 9 plus 2 — is that 11? No. The *abjad* tradition does not reduce the number. 92 remains 92 and is read as a whole. Meaning is sought not in a shrunken form of the number, but in the number itself and in the kinship it forms with other words that share the same total. When two different words yield the same number, the tradition hears an echo there.

## The Art of Embedding Number in Poetry: Chronograms

The most elegant fruit of this science, in my view, ripened in the Ottoman world. It is called *tarih düşürme* — the chronogram.

A fountain is built, a sultan ascends the throne, a child is born, or someone leaves this world. The poet sits and writes a line such that when the *abjad* values of its letters are added, the Hijri year of the event emerges. History is recorded not in digits but in verse. That single line cut into marble is sometimes a celebration, sometimes an elegy, but always a calendar.

Think of it: instead of memorizing a number, burying it inside a beauty. Placing mathematics in the service of aesthetics. Today someone looking at the inscription on an old fountain in Istanbul is looking at a number-riddle waiting to be solved — and often does not know it.

This science also reached Anatolia by a deep root. Sadreddin Konevi, the closest disciple of Ibn Arabi, spent his life in Konya; his tomb is still there. Davud al-Qayseri, the first professor of the first Ottoman madrasa, was a commentator on Ibn Arabi's works. So in these lands, reading and writing were learned, from the very beginning, in the shadow of a tradition that looked at the letter this way.

## The Line Inside My Name

That first letter of the alphabet — that single vertical stroke.

As a letter its value is 1: the number of beginning, of unity. Tradition says all letters are its bent form. Written as a name, *elif* is made of the letters *alif*, *lam*, and *fa*: 1 plus 30 plus 80, totaling 111. *Abjad* does not reduce this number; 111 stands whole, and three ones side by side repeat *alif*'s symbol of unity three times within itself. As if the name says again, through its number, what its letter means.

The *lam* in the middle of the name has its own story. In Arabic grammar, *lam* is the core of the definite article; when it joins the front of a word, it turns "any thing" into "that thing." That is why it is called the *lam* of determination: the letter that makes the unknown known. And that article is born from the joining of *alif* and *lam* — so the first two letters of my name, side by side, become the language's tool of recognition. In calligraphy and Sufi tradition, *lam* is read as a vertical stroke that curves at its base: standing *alif*, bent. When *alif* and *lam* join the other way, the alphabet's most worked form appears: *lam-alif*, that is *la*, that is "not." Calligraphers wrote these two letters intertwined for centuries; in Sufi reading that union is the line drawn against the transient — a sign of letting go and purification. The standing stroke and the bent stroke embrace and together say "no"; as if language wanted even renunciation written as an embrace.

And here is another *tevafuk* — a coincidence of correspondence; I will tell it with open cards. I share this number, of course, with everyone who carries my name; a name does not assign anyone a private fate. What belongs to me is the meeting of two separate reckonings in the same person. In the second essay of this series I said my own life path was 30/3. Now I set two different rulers side by side, deliberately and out loud: by the method of modern numerology, if you add the digits of 111 you get 3. The Eastern reckoning of my name and the Western reckoning of my birth date descend, by two different roads, to the same number. And the *lam* in the middle of the name is 30 — the same as my path's compound number.

Is this proof? No. I know I am mixing two systems, and the tradition would not have done that. But that is already the definition of *tevafuk*: harmony found where you were not looking. Proof knocks at the door; *tevafuk* smiles through the window.

Perhaps there is such a window in your name, perhaps not. Either is fine. What is truly to be taken from this tradition is not a number but a way of seeing: looking a little more carefully at writing, at names, at words. Because for the Sufis the world itself was a book, and to whoever knew how to read, every letter was open.

This essay is for cultural and personal development; it does not claim scientific authority or prophecy.`,
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
