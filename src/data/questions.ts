export interface MesneviQuestion {
  id: number;
  emojis: string;
  answer: string;
  author: string;
  hint?: string;
}

export const questions: MesneviQuestion[] = [
  {
    id: 1,
    emojis: "🏜️🌟💔🌹🐫",
    answer: "Leyla ile Mecnun",
    author: "Fuzuli",
    hint: "Çölde geçen bir aşk hikayesi"
  },
  {
    id: 2,
    emojis: "❤️🌹🐉🏰✨",
    answer: "Hüsn ü Aşk",
    author: "Şeyh Galip",
    hint: "Güzellik ve aşkın sembolik yolculuğu"
  },
  {
    id: 3,
    emojis: "📜✨🧘‍♂️🌌🔥",
    answer: "Mesnevi",
    author: "Mevlana",
    hint: "Manevi olgunlaşma yolculuğu"
  },
  {
    id: 4,
    emojis: "🌙📖🌹🕋✨",
    answer: "Mevlid",
    author: "Süleyman Çelebi",
    hint: "Peygamber'in doğumu"
  },
  {
    id: 5,
    emojis: "🏹❤️🏞️🌸💧",
    answer: "Hüsrev ve Şirin",
    author: "Nizami Gencevi",
    hint: "Bir hükümdar ve prensesin aşkı"
  },
  {
    id: 6,
    emojis: "🔥🕊️✨📖🌈",
    answer: "Divan-ı Kebir",
    author: "Mevlana",
    hint: "Manevi aşkın şiirleri"
  },
  {
    id: 7,
    emojis: "💤🌟👀🌀🌹",
    answer:"Şebistan-ı Hayal",
    author: "Şeyh Galip",
    hint: "Alegorik bir aşk mesnevisi"
  },
  {
    id: 8,
    emojis: "🐦🗻✨🌈👑",
    answer: "Mantıku't-Tayr",
    author: "Attar",
    hint: "Kuşların yolculuğu"
  },
  {
    id: 9,
    emojis: "🎶🏞️❤️🌌🌿",
    answer: "Hayrabad",
    author: "Nabi",
    hint: "Öğüt verici mesnevi"
  },
  {
    id: 10,
    emojis: "🛡️🗡️🏰🌟👑",
    answer: "İskendername",
    author: "Ahmedi",
    hint: "Büyük bir hükümdarın hikayesi"
  },
  {
    id: 11,
    emojis: "🌊🚢📜✨🌌",
    answer: "Rubailer",
    author: "Mevlana",
    hint: "Manevi hikayelerin denizi"
  },
  {
    id: 12,
    emojis: "✉️🖋️💔📜🌌",
    answer: "Şikayetname",
    author: "Fuzuli",
    hint: "Şairin şikayet mektubu"
  },
  {
    id: 13,
    emojis: "👑⚖️📜🕌✨",
    answer: "Kutadgu Bilig",
    author: "Yusuf Has Hacib",
    hint: "Mutluluk veren bilgi"
  },
  {
    id: 14,
    emojis: "🐴🌿🎭✨😂",
    answer: "Harname",
    author: "Şeyhi",
    hint: "Eşeğin hikayesi"
  },
  {
    id: 15,
    emojis: "🎻🌹🔥✨🌈",
    answer: "Rubabname",
    author: "Mevlana",
    hint: "Dörtlüklerle manevi öğütler"
  }
];