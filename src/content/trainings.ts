export type LocalizedText = {
  tr: string;
  en: string;
};

export type TrainingProgram = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
};

export type TrainingFamily = {
  id: string;
  anchor: string;
  title: LocalizedText;
  summary: LocalizedText;
  programs: TrainingProgram[];
};

const ACADEMY = "https://academy.thorius.com.tr/tr/programlar";

export function allTrainingsHref() {
  return ACADEMY;
}

export function trainingFamilyHref(anchor: string) {
  return `${ACADEMY}#${anchor}`;
}

export function trainingProgramHref(slug: string) {
  return `${ACADEMY}/${slug}`;
}

export const trainingFamilies: TrainingFamily[] = [
  {
    id: "liderlik",
    anchor: "liderlik",
    title: {
      tr: "Liderlik ve Koçluk",
      en: "Leadership and Coaching",
    },
    summary: {
      tr: "Sahada ve birebir: stratejiyi sonuca, potansiyeli etkiye dönüştüren liderlik.",
      en: "On the floor and one to one: leadership that turns strategy into results.",
    },
    programs: [
      {
        slug: "gemba",
        title: {
          tr: "Sahadan Stratejik Liderlik: GEMBA",
          en: "Strategic Leadership from the Field: GEMBA",
        },
        summary: {
          tr: "Veriyle sahaya giden, koçvari sorularla öğrenen liderler.",
          en: "Leaders who take data to the floor and learn through coaching questions.",
        },
      },
      {
        slug: "yonetici-koclugu",
        title: {
          tr: "Yönetici Koçluğu",
          en: "Executive Coaching",
        },
        summary: {
          tr: "Liderin en zor kararlarında yanında bir düşünce ortağı.",
          en: "A thinking partner beside a leader’s hardest decisions.",
        },
      },
    ],
  },
  {
    id: "planlama",
    anchor: "planlama",
    title: {
      tr: "Perakende Planlama Ustalığı",
      en: "Retail Planning Mastery",
    },
    summary: {
      tr: "Bütçeden rafa, stoktan nakde: perakendenin ticari kaldıraçları.",
      en: "From budget to shelf, from stock to cash: retail’s commercial levers.",
    },
    programs: [
      {
        slug: "planlama-alokasyon",
        title: {
          tr: "Merchandise Planning ve Alokasyon",
          en: "Merchandise Planning and Allocation",
        },
        summary: {
          tr: "Doğru ürün, doğru adet, doğru mağaza, doğru zaman.",
          en: "The right product, quantity, store, and time.",
        },
      },
      {
        slug: "butce-siparis-yonetimi",
        title: {
          tr: "Bütçe ve Sipariş Yönetimi",
          en: "Budget and Order Management",
        },
        summary: {
          tr: "Satış hedefinden sipariş satırına, tek bir bütçe zinciri.",
          en: "One budget chain from the sales target to the purchase order.",
        },
      },
      {
        slug: "net-isletme-sermayesi",
        title: {
          tr: "Net İşletme Sermayesi (Stok Gün Sayısı) Yönetimi",
          en: "Net Working Capital (Days of Stock)",
        },
        summary: {
          tr: "Marjı koruyarak stok gününü düşürmek.",
          en: "Lower days of stock while protecting margin.",
        },
      },
      {
        slug: "fiyat-indirim",
        title: {
          tr: "Fiyat ve İndirim Yönetimi",
          en: "Price and Markdown Management",
        },
        summary: {
          tr: "İndirim erken, sığ ve hedefli olduğunda marjı korur.",
          en: "Early, shallow, targeted markdowns protect margin.",
        },
      },
    ],
  },
  {
    id: "ai",
    anchor: "ai",
    title: {
      tr: "Yapay Zekâ",
      en: "Artificial Intelligence",
    },
    summary: {
      tr: "Prompt'tan ajana: yapay zekâyı ekibin çalışma biçimine yerleştirmek.",
      en: "From prompt to agent: putting AI into how the team works.",
    },
    programs: [
      {
        slug: "yapay-zeka-uygulama",
        title: {
          tr: "Yapay Zekâ: Prompt'tan Uygulamaya",
          en: "AI: From Prompt to Practice",
        },
        summary: {
          tr: "Yapay zekâyla sohbet etmekten, iş yapan araçlar kurmaya.",
          en: "From chatting with AI to building tools that do the work.",
        },
      },
      {
        slug: "ileri-yapay-zeka-ajanlar",
        title: {
          tr: "İleri Yapay Zekâ: n8n ve Ajanlar",
          en: "Advanced AI: n8n and Agents",
        },
        summary: {
          tr: "Raporlayan değil, iş yapan yapay zekâ.",
          en: "AI that does the work, not only the reporting.",
        },
      },
      {
        slug: "claude-ile-calismak",
        title: {
          tr: "Claude ile Çalışmak: Analizden Ajana",
          en: "Working with Claude: From Analysis to Agent",
        },
        summary: {
          tr: "Ekibin en hızlı analisti, yazarı ve asistanı aynı masada.",
          en: "The team’s fastest analyst, writer, and assistant at one table.",
        },
      },
      {
        slug: "copilot-ile-calismak",
        title: {
          tr: "Microsoft 365 Copilot ile Günlük İş",
          en: "Everyday Work with Microsoft 365 Copilot",
        },
        summary: {
          tr: "Outlook’tan Excel’e, zaten kullandığınız araçlarda yapay zekâ.",
          en: "AI inside the tools you already use, from Outlook to Excel.",
        },
      },
    ],
  },
  {
    id: "ogrenen",
    anchor: "ogrenen",
    title: {
      tr: "Öğrenen Organizasyon",
      en: "Learning Organization",
    },
    summary: {
      tr: "Bilgiyi kişilerden kuruma taşımak: iç eğitmenler ve öğrenme becerisi.",
      en: "Moving knowledge from individuals into the organization.",
    },
    programs: [
      {
        slug: "ic-egitmen-akademisi",
        title: {
          tr: "AI Destekli İç Eğitmen Akademisi",
          en: "AI-Supported Internal Trainer Academy",
        },
        summary: {
          tr: "4 günde iç eğitmenden içerik üreticisine.",
          en: "From internal trainer to content creator in four days.",
        },
      },
      {
        slug: "ogrenme-cevikligi",
        title: {
          tr: "Öğrenme Çevikliği: Yapay Zekâ Destekli Öğrenme",
          en: "Learning Agility: AI-Supported Learning",
        },
        summary: {
          tr: "Hızla değişen işte en kalıcı yetkinlik: öğrenme becerisi.",
          en: "In fast-changing work, the lasting skill is learning itself.",
        },
      },
    ],
  },
  {
    id: "ik",
    anchor: "ik",
    title: {
      tr: "İnsan Kaynakları",
      en: "Human Resources",
    },
    summary: {
      tr: "Doğru insan, doğru rolde, doğru zamanda.",
      en: "The right person, in the right role, at the right time.",
    },
    programs: [
      {
        slug: "perakende-insan-kaynaklari",
        title: {
          tr: "Perakendede İnsan Kaynakları Yönetimi",
          en: "Human Resources Management in Retail",
        },
        summary: {
          tr: "Mağazada başarıyı belirleyen şey ürün kadar insandır.",
          en: "In the store, people shape results as much as the product does.",
        },
      },
      {
        slug: "ik-icin-yapay-zeka",
        title: {
          tr: "İK için Yapay Zekâ",
          en: "AI for HR",
        },
        summary: {
          tr: "Rutin yükü yapay zekâya, insan işini insana bırakın.",
          en: "Give routine HR work to AI, and human work back to people.",
        },
      },
    ],
  },
];
