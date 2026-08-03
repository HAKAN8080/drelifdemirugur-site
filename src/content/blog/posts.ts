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
  /**
   * Optional HTML5 video URL (Bunny CDN MP4 preferred).
   * Rendered above the markdown body on the post page.
   */
  videoSrc?: string;
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
    slug: "aurora-kendi-gokyuzunu-yaratan-ates",
    date: "2026-08-03",
    tags: [
      "Aurora",
      "Kadim Dil Mitleri",
      "Ancient Language Myths",
      "Elif Nile",
      "Odâra",
      "mitoloji",
      "mythology",
      "roman",
      "novel",
      "Dr. Elif Demir Uğur",
    ],
    coverImage: "/aurora-cover.png",
    videoSrc: "https://avrupa-thorius.b-cdn.net/Blog/AURORA_video.mp4",
    title: {
      tr: "Aurora: Kendi Gökyüzünü Yaratan Ateş",
      en: "Aurora: The Fire That Creates Its Own Sky",
    },
    description: {
      tr: "Aurora — Bir Gökyüzü Aşkının Mitolojisi: eve dönüş değil; kendi küllerinden gökyüzünü yaratan ilahi ateşin ve ruhun ikiz bilgeliğinin hikâyesi.",
      en: "Aurora — A Mythology of Skyborne Love: not merely a homecoming, but the story of the divine fire that builds a sky from its own ash, and of the soul’s twin wisdom.",
    },
    body: {
      tr: `*Aurora — Bir Gökyüzü Aşkının Mitolojisi*, sadece bir eve dönüşün değil, kendi küllerinden kendi gökyüzünü yaratan o ilahi ateşin ve o gökyüzünü ilmek ilmek dokuyan kozmik bir gökyüzü aşkının hikâyesidir.

Bu aşk, sıradan bir beşeri sevda değil; ruhun kendi içindeki eril ve dişil bilgeliğin, o harlı ikiz ateşin göksel birleşmesidir.

Karakterim Odâra, kendi içine yaptığı o derin yolculukta; ancak kendi içindeki büyük aşkın ateşiyle yandığında, kendi gökyüzünü en yukarılara serebileceğini keşfetti. Çünkü gökyüzü, yalnızca dışarıda başımızı kaldırdığımızda gördüğümüz sonsuzluk değil; içindeki dişil derinlik ile eril gücün, aşkla tek bir parlamada mühürlendiği yerdir.

Homeros’un denizleri bitti; pusulalar yönünü kaybetti. Şimdi, kendi içsel evreninde o devasa gökyüzü aşkıyla yanan ve kendi gökyüzünü bizzat kendi ateşiyle var eden insanın kadim destanı başlıyor.

[Thorius Kitaplık’ta Aurora’yı keşfedin](https://kitaplik.thorius.com.tr/kitap/aurora).`,
      en: `*Aurora — A Mythology of Skyborne Love* is not only a homecoming. It is the story of the divine fire that creates its own sky from its own ash — and of the cosmic skyborne love that weaves that sky, stitch by stitch.

This love is not ordinary human romance. It is the celestial union of the soul’s own masculine and feminine wisdom — that blazing twin fire.

My character Odâra, on the deep journey inward, discovered that only when she burned with the great love-fire within could she spread her own sky to the highest heavens. For the sky is not merely the infinity we see when we lift our heads outdoors; it is the place where the feminine depth and the masculine power within are sealed, in love, into a single flare.

Homer’s seas are finished; the compasses have lost their bearing. Now begins the ancient epic of the human who burns with that vast skyborne love in their inner universe — and who brings their own sky into being with their own fire.

[Explore Aurora on Thorius Kitaplık](https://kitaplik.thorius.com.tr/kitap/aurora).`,
    },
  },
  {
    slug: "zamani-asan-yolculuk-homeros-mentor",
    date: "2026-08-03",
    tags: [
      "Aurora",
      "Homeros",
      "Homer",
      "Odysseia",
      "Odyssey",
      "Mentor",
      "nostos",
      "Kadim Dil Mitleri",
      "Ancient Language Myths",
      "Elif Nile",
      "Dr. Elif Demir Uğur",
    ],
    coverImage: "/aurora-cover.png",
    title: {
      tr: "Zamanı Aşan Yolculuk: Homeros, Mentor ve Eve Dönüş",
      en: "A Journey Beyond Time: Homer, Mentor, and the Return Home",
    },
    description: {
      tr: "Homeros’tan ruhun ikiz ateşine: Odysseia’daki nostos, Mentor’un bilgeliği ve Aurora’nın doğuşu — içerideki gökyüzüne giden yol.",
      en: "From Homer to the twin fire of the soul: nostos in the Odyssey, the wisdom of Mentor, and the birth of Aurora — the path to the sky within.",
    },
    body: {
      tr: `## İçerideki Gökyüzü: Homeros’tan Ruhun İkiz Ateşine

“Ses, hatırlamanın ilk kapısıdır.”

*Aurora — Bir Gökyüzü Aşkının Mitolojisi*

Yıllarca kürsülerde, seanslarda ve eğitimlerde hep aynı kadim destanı anlattım: Homeros’un Odysseia’sını… Truva’nın küllerinden doğan o dev dalgaları, evini arayan Odysseus’u ve ona karanlıkta rehber olan, tanrıça Athena’nın bilgeliğiyle can bulan Mentor’u fısıldadım ruhlara. Danışanlarıma, fırtınalı denizlerde yön bulmayı ve her insanın ömründe bir kez olsun o “eve dönüş” yolculuğuna çıkması gerektiğini öğrettim.

Fakat hikâyeler, en çok da anlatanı dönüştürmek için vardır.

Edebiyat tarihinin en eski ve en güçlü çınarı olan Homeros, Odysseia destanında aslında sadece bir kahramanın maceralarını anlatmaz; insan ruhunun en büyük arayışını, yani “eve dönüşü” (nostos) ilmek ilmek işler. Truva’nın düşüşünden sonra yurduna dönmek için dalgalarla, canavarlarla ve tanrıların gazabıyla savaşan Odysseus’un hikâyesi, aslında her insanın kendi içsel olgunlaşma ve aslına rücu etme yolculuğudur.

Ancak bu çetin yolda, sadece eve dönmeye çalışan bir kral değil, arkada bırakılanların da büyüme sancısı vardır. İşte tam bu noktada Homeros, insanlığa zamansız bir figür armağan eder: Mentor.

Odysseus, bilinmeze doğru yelken açarken sarayını, geleceğini ve biricik oğlu Telemakhos’u sadık dostu Mentor’a emanet etmiştir. Mentor, yalnızlığın ve belirsizliğin ortasında kalan bir gencin hem koruyucusu, hem de bilgeliğin yeryüzündeki sesi olur. Öyle ki, akıl ve savaş tanrıçası Athena bile dünyaya inip bu genç adama doğru yolu göstermek istediğinde, ulu bir kralın veya görkemli bir varlığın değil, sadece Mentor’un suretine bürünmeyi seçer. Çünkü bilgelik, sessiz ve derinden giden adımlarda saklıdır.

Odysseia, bir yanıyla Odysseus’un fiziki olarak eve, İthake’ye dönüşüyse; diğer yanıyla Telemakhos’un, Mentor’un rehberliğinde çocukluktan yetişkinliğe, yani kendi öz benliğine dönüşüdür. Ev, sadece taştan bir saray veya coğrafi bir koordinat değildir; ev, insanın fırtınalardan sonra sığındığı o nihai iç huzurdur.

Başkalarına liman olmayı anlatırken; insanın en büyük pusulasının dışarıdaki denizlerde değil, kendi özündeki saklı kor ateşte olduğu mitolojisi canlandı düşümde…

Homeros’un kahramanları dünyevi bir yurdu, İthake’yi ararken; benim ruhum kendi derinliklerine doğru radikal bir yolculuğa çıktı. Gördüm ki Mentor, bizi dışarıdaki bir eve götüren değil; içimizdeki o sönmeyen ateşi harlayarak bize kendi gökyüzümüzü inşa ettiren güçtür.

İşte bu yüzden, yıllarca anlattığım o antik rehberliğin sınırlarını aşarak kendi kadim dilimi, kendi mitolojimi doğurdum.

[Thorius Kitaplık’ta Aurora’yı keşfedin](https://kitaplik.thorius.com.tr/kitap/aurora).`,
      en: `## The Sky Within: From Homer to the Twin Fire of the Soul

“Voice is the first door of remembering.”

*Aurora — A Mythology of Skyborne Love*

For years, from pulpits, in sessions and trainings, I told the same ancient epic: Homer’s Odyssey… I whispered to souls the great waves born from the ashes of Troy, Odysseus seeking his home, and Mentor — brought to life by the wisdom of the goddess Athena — guiding him in the dark. I taught those I counselled how to find direction on stormy seas, and that every human being must, at least once in a lifetime, set out on that journey of “returning home.”

But stories exist above all to transform the one who tells them.

Homer, the oldest and strongest plane tree of literary history, does not merely recount a hero’s adventures in the Odyssey; he weaves, stitch by stitch, the greatest quest of the human soul: the return home (*nostos*). The story of Odysseus — fighting waves, monsters, and the wrath of the gods to reach his homeland after Troy’s fall — is, in truth, every person’s journey of inner ripening and return to their origin.

Yet on this hard road, it is not only a king trying to get home who suffers; those left behind also endure the pain of growing. Precisely here Homer gifts humanity a timeless figure: Mentor.

When Odysseus set sail into the unknown, he entrusted his palace, his future, and his only son Telemachus to his loyal friend Mentor. Mentor becomes both the guardian of a young man left in loneliness and uncertainty, and the voice of wisdom on earth. So much so that even Athena, goddess of mind and war, when she wishes to descend and show this young man the right path, chooses not the form of a lofty king or a splendid being — only the likeness of Mentor. Because wisdom is hidden in steps that move quietly and from the deep.

If the Odyssey is, on one side, Odysseus’s physical return home to Ithaca, on the other it is Telemachus’s return — under Mentor’s guidance — from childhood to adulthood, to his own true self. Home is not merely a stone palace or a geographic coordinate; home is the final inner peace a person takes shelter in after the storms.

While teaching others how to be a harbour, a mythology came alive in my dream: that a human’s greatest compass is not in the outer seas, but in the hidden ember-fire of their own essence…

While Homer’s heroes sought a worldly homeland, Ithaca, my soul set out on a radical journey toward its own depths. I saw that Mentor is not the power that takes us to a house outside; it is the power that fans the unquenchable fire within us and makes us build our own sky.

That is why I crossed the limits of that ancient guidance I had told for years — and gave birth to my own ancient tongue, my own mythology.

[Explore Aurora on Thorius Kitaplık](https://kitaplik.thorius.com.tr/kitap/aurora).`,
    },
  },
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
    slug: "yasam-yolu-sayilari",
    date: "2026-08-03",
    tags: [
      "nümeroloji",
      "numerology",
      "yaşam yolu",
      "life path number",
      "usta sayılar",
      "master numbers",
      "kişisel gelişim",
      "personal development",
      "spirituality",
      "Elif Nile",
      "Sayılar ve Harfler",
    ],
    title: {
      tr: "Yaşam Yolu Sayısı: Doğum Tarihine Gizlenmiş Harita",
      en: "Your Birth Date Is a Map. Here's How to Read It.",
    },
    description: {
      tr: "Nümerolojide yaşam yolu sayısı nasıl hesaplanır? 1'den 9'a tüm yaşam yollarının anlamı, 11-22-33 usta sayıları ve örnekli hesaplama rehberi.",
      en: "What is a life path number and how do you calculate it? The meaning of paths 1 through 9, master numbers 11, 22 and 33, with a step-by-step example.",
    },
    body: {
      tr: `Bazı sorular bize yıllarca eşlik eder. Neden hep aynı sınavla karşılaşıyorum? Neden bazı kapılar bana kolay açılırken bazıları hiç açılmıyor? Neden kalbim belli bir yöne doğru çekiliyor, aklım başka bir yönü işaret ederken?

Nümeroloji bu sorulara kesin cevaplar vermez. Ama bir ayna tutar. O aynada gördüğümüz şey, doğduğumuz gün evrenin zekâsının bize fısıldadığı bir ritimdir: yaşam yolu sayısı.

## Yaşam Yolu Sayısı Nedir?

Yaşam yolu sayısı, doğum tarihindeki tüm rakamların tek haneye inene kadar toplanmasıyla bulunur. Nümerolojide bu sayı, bir ömür boyunca tekrar tekrar önümüze gelen dersleri, doğal yeteneklerimizi ve ruhun bu hayatta yürümek istediği patikayı anlatır.

Hesap basittir. Örneğin 27 Mart 1985 doğumlu biri için:

2 + 7 + 3 + 1 + 9 + 8 + 5 = 35, sonra 3 + 5 = 8. Yaşam yolu: 8.

Tek istisna, toplam 11, 22 veya 33'e denk geldiğinde ortaya çıkar. Bunlar "usta sayılar" kabul edilir ve tek haneye indirilmeden kendi başlarına okunur. Onlara birazdan geleceğiz.

Şimdi dokuz yolun her birine, bir yolcunun gözüyle bakalım.

## 1 — Öncünün Yolu

Bir sayısı, yoktan var etmenin sayısıdır. Bu yolda yürüyenler kalabalığı beklemez; ilk adımı atmak onların nefesi gibidir. Girişim, liderlik, bağımsızlık bu yolun armağanlarıdır.

Gölgesi ise yalnızlıktır. Öncü, herkesin arkadan geldiğini fark ettiğinde bazen dönüp bakacak kimse bulamaz. Birin dersi şudur: önde yürümek, tek başına yürümek zorunda olmak değildir.

## 2 — Köprünün Yolu

İki, iki kıyı arasındaki köprüdür. Bu yolun yolcuları sezgileriyle dinler, söylenmeyeni duyar, kırılanı onarır. Diplomasi, ortaklık ve şefkat onların dilidir.

Gölge, kendini silmektir. Herkesi taşıyan köprü, kendi ağırlığını unutabilir. İkinin dersi: barışı korumak için kendi sesini feda etmek gerekmez. Gerçek uyum, senin de içinde olduğun uyumdur.

## 3 — Sesin Yolu

Üç, ifadenin sayısıdır. Kelime, renk, müzik, kahkaha... Bu yolda yürüyenler dokundukları her şeye bir canlılık katar. Yaratıcılık onlarda bir hobi değil, bir varoluş biçimidir.

Gölgesi dağılmaktır. Bin çiçeğe konan arı, balını hangi kovana taşıyacağını şaşırır. Üçün dersi: ilham bir misafirdir, ama eser sadakat ister. Sesini bir kanala akıt ki nehir olsun.

## 4 — Temelin Yolu

Dört, dört ayaklı masanın, dört duvarlı evin sayısıdır. Bu yolcular düzen kurar, söz verir ve tutar. Başkalarının hayal ettiğini onlar taş taş inşa eder. Emek, sabır ve güven bu yolun mührüdür.

Gölge, katılıktır. Duvar korur ama aynı duvar hapseder de. Dördün dersi: sağlam olan her şey ağır olmak zorunda değildir. Köklerin derinse, dalların rüzgârda dans edebilir.

## 5 — Rüzgârın Yolu

Beş, değişimin ve özgürlüğün sayısıdır. Bu yolda yürüyenler için hayat bir davetler silsilesidir: yeni şehirler, yeni insanlar, yeni fikirler. Uyum yetenekleri şaşırtıcıdır; her ortamda bir nefes alacak yer bulurlar.

Gölgesi kaçıştır. Sürekli hareket, bazen derinleşmekten kaçmanın kibar bir adıdır. Beşin dersi: özgürlük, her kapıdan çıkabilmek değil, kalmayı seçtiğin yerde de özgür hissedebilmektir.

## 6 — Yuvanın Yolu

Altı, sofranın sayısıdır. Bu yolcular sever, besler, sarar. Aile, topluluk, sorumluluk ve estetik onların dünyasıdır. İnsanlar yanlarında iyileşir, çünkü altı yolcusu bakmayı bilir.

Gölge, fedakârlığın müzminleşmesidir. Herkesi doyuran el, kendi tabağını unutur. Altının dersi: şefkat önce içeriden başlar. Kendi kalbine bakmadığın sürece, başkalarına verdiğin bakım yarım kalır.

## 7 — Derinliğin Yolu

Yedi, kuyunun sayısıdır. Bu yolda yürüyenler yüzeyle yetinmez; sorar, araştırır, sessizliğe çekilir. Bilgelik, analiz ve içsel arayış onların pusulasıdır. Yalnızlık onlar için bir ceza değil, bir sığınaktır.

Gölgesi kopmaktır. Kuyuya inen, bazen yukarıdaki hayatı unutur. Yedinin dersi: hakikat sadece derinlerde değil, paylaşıldığı anda da doğar. Bulduğunu yukarı taşı; su, içildiğinde su olur.

## 8 — Gücün Yolu

Sekiz, madde ile mananın terazisidir. Bu yolcular yönetmeyi, büyütmeyi, dönüştürmeyi bilir. Para, güç ve otorite onların sınav alanıdır; kimi zaman bolluk, kimi zaman kayıp üzerinden aynı ders tekrar gelir.

Gölge, değeri sadece sonuçta aramaktır. Sekizin dersi: gerçek güç, biriktirdiğin değil, akıttığındır. Terazi ancak iki kefesiyle terazidir; başarı, vicdanla dengelenince kalıcı olur.

## 9 — Tamamlanmanın Yolu

Dokuz, dairenin kapandığı yerdir. Bu yolda yürüyenler geniş bir kalple doğar; kendi hikâyelerinden çok insanlığın hikâyesine bağlıdırlar. Merhamet, hizmet ve bırakabilme sanatı onların yoludur.

Gölgesi, geçmişi taşımaktır. Kapanması gereken defterleri açık tutmak, dokuzun en ağır yüküdür. Dersi şudur: veda bir kayıp değil, bir tamamlanmadır. Bırakılan her şey, yeni bir başlangıca yer açar.

## Usta Sayılar: 11, 22 ve 33

Bazı doğum tarihleri, toplandığında tek haneye inmeden önce 11, 22 veya 33'te durur. Nümeroloji geleneği bu sayıları daha yüksek bir voltajla okur.

**11 — Sezginin Ustası.** İkinin tüm hassasiyeti, iki katı bir ışıkla. On bir yolcusu ince duyar, derin sezer; çoğu zaman kendinden önce başkalarının fırtınasını hisseder. Görevi, bu hassasiyeti bir yük değil bir fener olarak taşımayı öğrenmektir.

**22 — İnşanın Ustası.** Dördün sabrı, evrensel bir ölçekte. Yirmi iki yolcusu sadece kendi evini değil, kalıcı yapılar, kurumlar, sistemler kurmak için gelir. Sınavı, büyük vizyonun ağırlığı altında ezilmeden, tuğlaları tek tek koymaya razı olmaktır.

**33 — Şefkatin Ustası.** Altının sevgisi, koşulsuzluğa açılmış hâliyle. Otuz üç yolcusu öğreterek iyileştirir, severek dönüştürür. Dersi, bu kadar geniş bir kalbin önce kendi sınırlarını tanımasıdır.

Usta sayı taşımak bir üstünlük değildir; daha dik bir patikada yürümektir. Bu yüzden nümerologlar der ki: 11 yorulduğunda 2 gibi, 22 yorulduğunda 4 gibi, 33 yorulduğunda 6 gibi yaşar. Bu bir düşüş değil, dinlenme molasıdır.

## Sayı Kader midir?

Hayır. Yaşam yolu sayısı bir hüküm değil, bir davetiyedir. Aynı sayıyı taşıyan iki insan bambaşka hayatlar yaşayabilir; çünkü sayı yolu gösterir, yürüyüşü değil.

Belki de nümerolojinin en güzel tarafı budur: bize dışarıdan bir kimlik giydirmez, içimizde zaten var olan bir ritmi hatırlatır. Doğduğumuz gün kozmik bir tesadüf müydü, yoksa ince bir hizalanma mı? Bu sorunun cevabını kimse kesin olarak veremez. Ama kendi sayının hikâyesini okuduğunda içinde bir yerin "evet" diye kıpırdanıyorsa, o kıpırtı da bir cevaptır.

Sayıların bir iç dili olduğu sezgisi yeni de değil. Sufi gelenekte harflerin ve sayıların metafiziği yüzyıllarca işlendi; modern nümeroloji farklı bir yoldan gelir, ama aynı eski soruyu sorar: görünenin ardında bir ritim var mı?

Kendi yaşam yolunu hesapla. Sonra sadece gölgesine değil, armağanına da bak. Çünkü her yol, yürüyeni bekler.

*Bu yazı kültürel ve kişisel gelişim amaçlıdır; bilimsel bir iddia veya kehanet niteliği taşımaz.*`,
      en: `Some questions follow us for years. Why do I keep meeting the same lesson in different costumes? Why do certain doors open for me easily while others never move? Why does my heart keep pulling in one direction while my mind points to another?

Numerology does not answer these questions. What it offers is a mirror, and in that mirror, a rhythm: the one the intelligence of the universe hummed on the day you were born. Numerologists call it your life path number.

I write from Istanbul. The search for meaning in numbers is as old as humanity and belongs to no single place; but every place carries its own version of it, and mine happens to keep its version carved on fountains and calligraphy panels. In this series I want to walk you through that search, from the modern system most of us know, back to older and stranger doors. This first piece covers the foundation: the nine paths.

## What Is a Life Path Number?

Add up every digit in your date of birth until you reach a single digit. That's it. That final digit is your life path: the lessons that keep returning, the gifts you were handed, the direction your inner life keeps leaning toward.

Say you were born on March 27, 1985: 2+7+3+1+9+8+5 = 35, then 3+5 = 8. Your path is 8.

One exception: if the total lands on 11, 22 or 33, you stop there. These are the master numbers, and they are read as they are. We'll get to them.

Now let's walk the nine paths, one traveler at a time.

## 1: The Path of the Pioneer

One is the number of making something out of nothing. These travelers don't wait for the crowd; taking the first step is how they breathe. Initiative, leadership, independence: these are the gifts.

The shadow is loneliness. The pioneer sometimes turns around and finds no one to look back at. The lesson of the 1: walking in front doesn't have to mean walking alone.

## 2: The Path of the Bridge

Two is the bridge between two shores. These travelers listen with their intuition, hear what goes unsaid, mend what breaks. Diplomacy, partnership and tenderness are their native tongue.

The shadow is self-erasure. A bridge that carries everyone can forget its own weight. The lesson of the 2: keeping the peace should not cost you your voice. Real harmony includes you.

## 3: The Path of the Voice

Three is expression. Words, color, music, laughter. Whatever these travelers touch gains a pulse. Creativity is not a hobby for them; it's a way of existing.

The shadow is scattering. A bee that lands on a thousand flowers forgets which hive holds its honey. The lesson of the 3: inspiration is a guest, but a body of work demands loyalty. Pour your voice into one channel and it becomes a river.

## 4: The Path of the Foundation

Four is the four-legged table, the four-walled house. These travelers build order, give their word, and keep it. What others dream, they construct stone by stone.

The shadow is rigidity. A wall protects, and the same wall imprisons. The lesson of the 4: solid doesn't have to mean heavy. If your roots go deep, your branches can afford to dance.

## 5: The Path of the Wind

Five is change and freedom. Life, for these travelers, is a chain of invitations: new cities, new people, new ideas. They can find air to breathe in any room.

The shadow is escape. Constant motion can be a polite name for avoiding depth. The lesson of the 5: freedom isn't the ability to leave through any door. It's feeling free in the place you chose to stay.

## 6: The Path of the Hearth

Six is the number of the table set for others. These travelers love, feed, hold. Family, community, responsibility, beauty: this is their world. People heal around them, because a 6 knows how to tend.

The shadow is chronic self-sacrifice. The hand that feeds everyone forgets its own plate. The lesson of the 6: care begins inside. Until you tend your own heart, the care you give stays incomplete.

## 7: The Path of the Well

Seven is depth. These travelers are never satisfied with the surface; they question, research, withdraw into silence. Solitude is not a punishment for them. It's a sanctuary.

The shadow is disconnection. Whoever descends into the well can forget the life above. The lesson of the 7: truth isn't only born in the depths. It's also born the moment it's shared. Carry up what you find; water becomes water when someone drinks it.

## 8: The Path of Power

Eight is the scale between matter and meaning. These travelers know how to manage, grow, transform. Money, power and authority are their examination hall, and the same lesson returns, sometimes through abundance, sometimes through loss.

The shadow is measuring worth only by outcomes. The lesson of the 8: real power is not what you accumulate but what you circulate. A scale is only a scale with both pans; success lasts when conscience balances it.

## 9: The Path of Completion

Nine is where the circle closes. These travelers are born with a wide heart, tied less to their own story than to the human one. Compassion, service, and the art of letting go: this is their road.

The shadow is carrying the past. Keeping open the ledgers that ask to be closed is the heaviest burden of the 9. The lesson: a farewell is not a loss but a completion. Everything released makes room.

## The Master Numbers: 11, 22 and 33

Some birth dates pause at 11, 22 or 33 before reaching a single digit. Tradition reads these at a higher voltage.

**11, the Master of Intuition.** All the sensitivity of the 2, at double the light. An 11 hears finely and senses deeply; often they feel other people's storms before their own. Their task is learning to carry that sensitivity as a lantern rather than a load.

**22, the Master Builder.** The patience of the 4 at universal scale. A 22 comes to build things that outlast them: structures, institutions, systems. Their test is agreeing to lay the bricks one at a time without being crushed by the size of the vision.

**33, the Master of Compassion.** The love of the 6, opened toward the unconditional. A 33 heals by teaching and transforms by loving. Their lesson is that a heart this wide must first learn its own boundaries.

Carrying a master number is not a superiority. It's a steeper trail. Numerologists say that a tired 11 lives like a 2, a tired 22 like a 4, a tired 33 like a 6. That's not a fall. It's a rest stop.

## Is the Number a Destiny?

No. A life path number is not a verdict; it's an invitation. Two people carrying the same number can live entirely different lives, because the number shows the road, not the walk.

Maybe that's the most beautiful thing about this practice: it doesn't dress you in an identity from the outside. It reminds you of a rhythm that was already yours. Was the day you were born a cosmic accident or a quiet alignment? No one can answer that for certain. But if something in you stirs when you read your own number's story, that stirring is an answer too.

Calculate your path. Then look not only at its shadow but at its gift. Every road waits for its traveler.

*This article is intended for cultural and personal reflection; it makes no scientific or predictive claims.*`,
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
