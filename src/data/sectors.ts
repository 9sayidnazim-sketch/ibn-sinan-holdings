import type { L } from "@/i18n/strings";
import pharma from "@/assets/pharma.jpg";
import investments from "@/assets/investments.jpg";

/**
 * Sector content lives here only. To confirm the third sector, replace its
 * name/copy and set `published: true` — its tile and page appear automatically.
 */
export type SectorSection = { heading: L; body: L };

export type Sector = {
  slug: string;
  num: string;
  name: L;
  tagline: L;
  linkLabel: L;
  image: string;
  imageAlt: L;
  h1: L;
  intro: L;
  sections: SectorSection[];
  focus: L[];
  cta: L;
  published: boolean;
};

export const SECTORS: Sector[] = [
  {
    slug: "pharmaceuticals",
    num: "01",
    name: { en: "Pharmaceuticals", ar: "الأدوية" },
    tagline: {
      en: "Focused on opportunities that support the evolving needs of the pharmaceutical sector.",
      ar: "نركّز على الفرص التي تدعم الاحتياجات المتطورة للقطاع الدوائي.",
    },
    linkLabel: { en: "Explore Pharmaceuticals", ar: "استكشف قطاع الأدوية" },
    image: pharma,
    imageAlt: { en: "A bright pharmaceutical research laboratory", ar: "مختبر أبحاث دوائية مشرق" },
    h1: { en: "A focused perspective on pharmaceuticals.", ar: "منظور مركّز على قطاع الأدوية." },
    intro: {
      en: "Our pharmaceutical sector focus reflects an interest in the businesses, relationships, and opportunities supporting this essential industry.",
      ar: "يعكس تركيزنا على القطاع الدوائي اهتماماً بالأعمال والعلاقات والفرص التي تدعم هذه الصناعة الأساسية.",
    },
    sections: [
      {
        heading: { en: "Our sector focus", ar: "تركيزنا على القطاع" },
        body: {
          en: "We follow the pharmaceutical landscape with patience and care, seeking to understand where considered participation can support progress. Our interest is long-term: in sound businesses, credible partners, and opportunities that serve an essential need.",
          ar: "نتابع المشهد الدوائي بصبر وعناية، ساعين إلى فهم أين يمكن للمشاركة المدروسة أن تدعم التقدم. اهتمامنا طويل الأمد: بأعمال رصينة وشركاء موثوقين وفرص تخدم حاجة أساسية.",
        },
      },
      {
        heading: { en: "Opportunities for collaboration", ar: "فرص التعاون" },
        body: {
          en: "We welcome relevant conversations with organisations seeking to explore potential alignment within the pharmaceutical sector. Every conversation begins with listening: to the context, the need, and the people involved.",
          ar: "نرحب بالمحادثات ذات الصلة مع المؤسسات التي تسعى إلى استكشاف توافق محتمل ضمن القطاع الدوائي. تبدأ كل محادثة بالإصغاء: إلى السياق والحاجة والأشخاص المعنيين.",
        },
      },
      {
        heading: { en: "A considered approach", ar: "نهج مدروس" },
        body: {
          en: "We assess each opportunity on its context, its strategic fit, and its path forward — and we say plainly when something does not align with our direction.",
          ar: "نقيّم كل فرصة وفق سياقها وملاءمتها الاستراتيجية ومسارها المستقبلي — ونقول بوضوح حين لا يتوافق شيء مع توجهنا.",
        },
      },
    ],
    focus: [
      { en: "Businesses serving an essential, enduring need", ar: "أعمال تخدم حاجة أساسية ودائمة" },
      { en: "Credible partners with sound governance", ar: "شركاء موثوقون بحوكمة رصينة" },
      { en: "Opportunities with a clear long-term rationale", ar: "فرص ذات مبرر واضح طويل الأمد" },
    ],
    cta: { en: "Discuss a Pharmaceutical Opportunity", ar: "ناقش فرصة في القطاع الدوائي" },
    published: true,
  },
  {
    slug: "investments",
    num: "02",
    name: { en: "Investments", ar: "الاستثمارات" },
    tagline: {
      en: "Taking a considered view of opportunities with long-term potential.",
      ar: "ننظر بعناية إلى الفرص ذات الإمكانات طويلة الأمد.",
    },
    linkLabel: { en: "Explore Investments", ar: "استكشف الاستثمارات" },
    image: investments,
    imageAlt: {
      en: "Commercial architecture in a business district at dusk",
      ar: "عمارة تجارية في منطقة أعمال وقت الغسق",
    },
    h1: { en: "A long-term view of opportunity.", ar: "نظرة طويلة الأمد إلى الفرص." },
    intro: {
      en: "Our investment focus begins with understanding the business, the context, and the potential to create enduring value.",
      ar: "يبدأ تركيزنا الاستثماري بفهم العمل والسياق والإمكانات لخلق قيمة دائمة.",
    },
    sections: [
      {
        heading: { en: "Investment perspective", ar: "المنظور الاستثماري" },
        body: {
          en: "We take time to understand before we decide. Context, people, and the path to enduring value matter more to us than speed.",
          ar: "نأخذ وقتنا في الفهم قبل أن نقرر. السياق والأشخاص والطريق إلى قيمة دائمة أهم لدينا من السرعة.",
        },
      },
      {
        heading: { en: "Strategic alignment", ar: "التوافق الاستراتيجي" },
        body: {
          en: "We look for opportunities that sit naturally alongside our sector interests and long-term direction — and we are comfortable declining those that do not.",
          ar: "نبحث عن فرص تنسجم طبيعياً مع اهتماماتنا القطاعية وتوجهنا طويل الأمد — ولا نتردد في الاعتذار عما لا يتوافق معها.",
        },
      },
      {
        heading: { en: "Partnership conversations", ar: "حوارات الشراكة" },
        body: {
          en: "We welcome introductions to opportunities that align with our sector interests and long-term direction. A concise, honest overview is the best place to start.",
          ar: "نرحب بتقديم الفرص التي تتوافق مع اهتماماتنا القطاعية وتوجهنا طويل الأمد. النظرة الموجزة والصادقة هي أفضل بداية.",
        },
      },
    ],
    focus: [
      { en: "Understanding before deciding", ar: "الفهم قبل اتخاذ القرار" },
      { en: "Alignment with our sector interests", ar: "التوافق مع اهتماماتنا القطاعية" },
      { en: "Enduring value over short-term gain", ar: "القيمة الدائمة قبل المكسب القصير" },
    ],
    cta: { en: "Introduce an Opportunity", ar: "قدّم فرصة" },
    published: true,
  },
  {
    slug: "third-sector",
    num: "03",
    name: { en: "Third Sector", ar: "القطاع الثالث" },
    tagline: {
      en: "[Editorial placeholder — awaiting confirmation of the third sector's name and activities.]",
      ar: "[نص مؤقت — بانتظار تأكيد اسم القطاع الثالث وأنشطته.]",
    },
    linkLabel: { en: "Explore", ar: "استكشف" },
    image: investments,
    imageAlt: { en: "Placeholder image", ar: "صورة مؤقتة" },
    h1: { en: "Third Sector", ar: "القطاع الثالث" },
    intro: { en: "[To be written once the sector is confirmed.]", ar: "[يُكتب بعد تأكيد القطاع.]" },
    sections: [],
    focus: [],
    cta: { en: "Contact us", ar: "تواصل معنا" },
    published: false,
  },
];

export const publishedSectors = () => SECTORS.filter((s) => s.published);
export const getSector = (slug: string) => SECTORS.find((s) => s.slug === slug && s.published);
