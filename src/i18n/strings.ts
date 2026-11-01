// Editable translation file. Every English string has an Arabic counterpart with the same key.
export type Lang = "en" | "ar";
export const LANGS: Lang[] = ["en", "ar"];
export const isLang = (v: string): v is Lang => v === "en" || v === "ar";

export type L = { en: string; ar: string };
export const tr = (l: L, lang: Lang) => l[lang];

const en = {
  brand: "IBN SINAN HOLDINGS",
  skip: "Skip to content",
  nav_about: "About the Group",
  nav_sectors: "Our Sectors",
  nav_approach: "Our Approach",
  nav_partnerships: "Partnerships",
  nav_contact: "Contact",
  cta_partnership: "Discuss a Partnership",
  menu: "Menu",
  close: "Close",
  privacy: "Privacy",
  legal: "© [year] IBN SINAN HOLDINGS",
  home: "Home",

  hero_eyebrow: "IBN SINAN HOLDINGS",
  hero_h1: "Built on purpose. Focused on lasting value.",
  hero_lede:
    "A shared vision for progress across pharmaceuticals, investment, and a growing business portfolio.",
  hero_cta1: "Explore Our Sectors",
  hero_cta2: "Connect With Us",

  about_label: "About the Group",
  about_h2: "A considered approach to growth.",
  about_copy:
    "IBN SINAN HOLDINGS brings a long-term perspective to business. Our ambition is to develop meaningful opportunities, build strong relationships, and create value through clear priorities and responsible decisions.",
  about_link: "Discover Our Group",

  sectors_h2: "Distinct sectors. A shared direction.",
  sectors_intro: "Explore the areas that shape our business focus.",

  approach_h2: "Clear thinking. Lasting relationships.",
  approach_link: "Read our approach",

  invite_h2: "Progress begins with the right conversation.",
  invite_copy:
    "We welcome conversations with businesses and organisations exploring opportunities aligned with our sector focus and long-term vision.",

  about_h1: "A shared vision for lasting value.",
  about_intro:
    "IBN SINAN HOLDINGS is shaped by an ambition to connect opportunity with purpose, bringing a considered perspective to business growth and partnership.",
  vision_label: "Vision",
  vision: "To build a resilient business group that creates meaningful, enduring value.",
  mission_label: "Mission",
  mission:
    "To pursue opportunities with discipline, develop relationships with clarity, and support progress across our chosen sectors.",
  principles_h2: "Principles",
  pr_1: "Integrity in decisions.",
  pr_2: "Clarity in relationships.",
  pr_3: "Discipline in growth.",
  pr_4: "A long-term perspective.",

  approach_h1: "Our approach",
  approach_intro:
    "Four proposed principles guide how we consider opportunities and relationships. They are a statement of intent — the standard we hold ourselves to as the group grows.",

  part_h1: "Partnerships",
  part_intro:
    "We welcome introductions from businesses and organisations whose opportunities align with our sector focus and long-term direction.",
  part_steps_h2: "How an introduction works",
  step_1_t: "Share your organisation and area of interest.",
  step_2_t: "Provide a concise opportunity overview.",
  step_3_t: "Continue the conversation if there is alignment.",

  contact_h1: "Let's explore what comes next.",
  contact_lede: "Tell us about your organisation and the opportunity you have in mind.",
  f_name: "Name",
  f_company: "Company",
  f_email: "Email",
  f_phone: "Phone (optional)",
  f_sector: "Sector of interest",
  f_type: "Enquiry type",
  f_message: "Message",
  f_consent: "You may contact me about this enquiry.",
  f_send: "Send enquiry",
  required: "required",
  e_name: "Please enter your name.",
  e_email: "Please enter an email address, such as name@company.com.",
  e_sector: "Please choose a sector of interest.",
  e_message: "Please write a short message.",
  e_consent: "Please tick the box so we can reply.",
  success: "Thank you. Your enquiry has been recorded in this demo.",
  demo_notice:
    "Demo form: this preview is not connected to a delivery system, so your enquiry is not sent anywhere yet.",

  type_partnership: "Partnership",
  type_introduction: "Opportunity introduction",
  type_general: "General enquiry",

  other_sectors: "Explore another sector",
  caption_illustrative: "Illustrative photography.",

  privacy_h1: "Privacy notice",
  privacy_text: "[To be written by the group's legal adviser before publication.]",
  pv_1: "What we collect",
  pv_2: "How we use it",
  pv_3: "How long we keep it",
  pv_4: "Your rights",

  nf_h1: "Page not found.",
  nf_text: "The page may have moved. Explore the group, or get in touch.",
  back_home: "Back to home",

  why_label: "Why IBN SINAN",
  why_h2: "What defines the way we work.",
  why_1_t: "Long-term by design",
  why_1_b:
    "We measure decisions against years, not quarters, and favour relationships that deepen over time.",
  why_2_t: "Focused sector interests",
  why_2_b:
    "We concentrate on a small number of sectors we intend to understand deeply, starting with pharmaceuticals and investments.",
  why_3_t: "Clear, honest conversations",
  why_3_b:
    "We say plainly what fits and what does not, so every conversation respects the time of everyone involved.",

  about_group_h2: "One group. A shared direction.",
  about_group_copy:
    "The group exists to bring structure and patience to opportunity: choosing carefully where to participate, supporting the people and businesses involved, and building value that endures beyond any single transaction.",

  step_1_b:
    "A short note about who you are and the sector your opportunity sits in is enough to begin.",
  step_2_b: "Two or three paragraphs on the opportunity, its stage, and what you are looking for.",
  step_3_b: "If there is alignment, we arrange a conversation to explore the opportunity properly.",
  look_h2: "What we look for",
  look_1: "Opportunities within our sector focus",
  look_2: "Sound fundamentals and credible people",
  look_3: "A realistic path to long-term value",
  expect_h2: "What to expect from us",
  expect_1: "A careful reading of every introduction",
  expect_2: "A clear, honest response — including a polite no",
  expect_3: "Discretion with the information you share",

  focus_label: "What we pay attention to",
  chart_label: "A long-term perspective",
  chart_note: "Illustrative only — a picture of patient, compounding growth, not reported figures.",
};

export type StringKey = keyof typeof en;

const ar: Record<StringKey, string> = {
  brand: "ابن سنان القابضة",
  skip: "انتقل إلى المحتوى",
  nav_about: "عن المجموعة",
  nav_sectors: "قطاعاتنا",
  nav_approach: "منهجيتنا",
  nav_partnerships: "الشراكات",
  nav_contact: "تواصل معنا",
  cta_partnership: "ناقش شراكة",
  menu: "القائمة",
  close: "إغلاق",
  privacy: "الخصوصية",
  legal: "© [السنة] ابن سنان القابضة",
  home: "الرئيسية",

  hero_eyebrow: "ابن سنان القابضة",
  hero_h1: "بُنينا على هدف. وتركيزنا على القيمة الدائمة.",
  hero_lede: "رؤية مشتركة للتقدم عبر الأدوية والاستثمار ومحفظة أعمال متنامية.",
  hero_cta1: "استكشف قطاعاتنا",
  hero_cta2: "تواصل معنا",

  about_label: "عن المجموعة",
  about_h2: "نهج مدروس للنمو.",
  about_copy:
    "تتبنى ابن سنان القابضة منظوراً طويل الأمد في الأعمال. طموحنا أن نطوّر فرصاً ذات معنى، ونبني علاقات قوية، ونخلق قيمة عبر أولويات واضحة وقرارات مسؤولة.",
  about_link: "تعرّف على مجموعتنا",

  sectors_h2: "قطاعات متميزة. واتجاه واحد مشترك.",
  sectors_intro: "استكشف المجالات التي تشكّل تركيز أعمالنا.",

  approach_h2: "تفكير واضح. وعلاقات دائمة.",
  approach_link: "اقرأ منهجيتنا",

  invite_h2: "التقدم يبدأ بالمحادثة الصحيحة.",
  invite_copy:
    "نرحب بالمحادثات مع الشركات والمؤسسات التي تستكشف فرصاً تتوافق مع تركيز قطاعاتنا ورؤيتنا طويلة الأمد.",

  about_h1: "رؤية مشتركة لقيمة دائمة.",
  about_intro:
    "تتشكّل ابن سنان القابضة من طموح يربط الفرصة بالهدف، حاملةً منظوراً مدروساً لنمو الأعمال والشراكة.",
  vision_label: "الرؤية",
  vision: "أن نبني مجموعة أعمال مرنة تخلق قيمة هادفة ودائمة.",
  mission_label: "الرسالة",
  mission:
    "أن نسعى إلى الفرص بانضباط، ونطوّر العلاقات بوضوح، وندعم التقدم عبر القطاعات التي اخترناها.",
  principles_h2: "مبادئنا",
  pr_1: "النزاهة في القرارات.",
  pr_2: "الوضوح في العلاقات.",
  pr_3: "الانضباط في النمو.",
  pr_4: "منظور طويل الأمد.",

  approach_h1: "منهجيتنا",
  approach_intro:
    "أربعة مبادئ مقترحة توجّه طريقتنا في النظر إلى الفرص والعلاقات. إنها بيان نية — المعيار الذي نحاسب أنفسنا عليه مع نمو المجموعة.",

  part_h1: "الشراكات",
  part_intro:
    "نرحب بالتواصل من الشركات والمؤسسات التي تتوافق فرصها مع تركيز قطاعاتنا وتوجهنا طويل الأمد.",
  part_steps_h2: "كيف تتم المقدمة",
  step_1_t: "شاركنا معلومات عن مؤسستك ومجال اهتمامك.",
  step_2_t: "قدّم نظرة موجزة عن الفرصة.",
  step_3_t: "نواصل الحوار إذا وُجد توافق.",

  contact_h1: "لنستكشف ما هو قادم معاً.",
  contact_lede: "أخبرنا عن مؤسستك والفرصة التي تفكر فيها.",
  f_name: "الاسم",
  f_company: "الشركة",
  f_email: "البريد الإلكتروني",
  f_phone: "الهاتف (اختياري)",
  f_sector: "القطاع محل الاهتمام",
  f_type: "نوع الاستفسار",
  f_message: "الرسالة",
  f_consent: "يمكنكم التواصل معي بخصوص هذا الاستفسار.",
  f_send: "أرسل الاستفسار",
  required: "مطلوب",
  e_name: "يرجى إدخال اسمك.",
  e_email: "يرجى إدخال بريد إلكتروني، مثل name@company.com.",
  e_sector: "يرجى اختيار القطاع محل الاهتمام.",
  e_message: "يرجى كتابة رسالة قصيرة.",
  e_consent: "يرجى تحديد المربع لنتمكن من الرد.",
  success: "شكراً لك. تم تسجيل استفسارك في هذا العرض التجريبي.",
  demo_notice:
    "نموذج تجريبي: هذه المعاينة غير متصلة بنظام إرسال، لذا لن يُرسل استفسارك إلى أي جهة بعد.",

  type_partnership: "شراكة",
  type_introduction: "تقديم فرصة",
  type_general: "استفسار عام",

  other_sectors: "استكشف قطاعاً آخر",
  caption_illustrative: "صور توضيحية.",

  privacy_h1: "إشعار الخصوصية",
  privacy_text: "[يكتبه المستشار القانوني للمجموعة قبل النشر.]",
  pv_1: "ما الذي نجمعه",
  pv_2: "كيف نستخدمه",
  pv_3: "مدة الاحتفاظ به",
  pv_4: "حقوقك",

  nf_h1: "الصفحة غير موجودة.",
  nf_text: "ربما نُقلت الصفحة. استكشف المجموعة، أو تواصل معنا.",
  back_home: "العودة إلى الرئيسية",

  why_label: "لماذا ابن سنان",
  why_h2: "ما الذي يحدد طريقة عملنا.",
  why_1_t: "منظور طويل الأمد بطبيعته",
  why_1_b: "نقيس القرارات بالسنوات لا بالأرباع، ونفضّل العلاقات التي تتعمق مع الوقت.",
  why_2_t: "اهتمامات قطاعية مركّزة",
  why_2_b: "نركّز على عدد محدود من القطاعات نعتزم فهمها بعمق، بدءاً بالأدوية والاستثمارات.",
  why_3_t: "حوارات واضحة وصادقة",
  why_3_b: "نقول بوضوح ما يناسبنا وما لا يناسبنا، ليكون كل حوار محترماً لوقت جميع الأطراف.",

  about_group_h2: "مجموعة واحدة. واتجاه مشترك.",
  about_group_copy:
    "وُجدت المجموعة لتمنح الفرص بنية وصبراً: اختيار مجالات المشاركة بعناية، ودعم الأشخاص والأعمال المعنية، وبناء قيمة تتجاوز أي صفقة واحدة.",

  step_1_b: "تكفي رسالة قصيرة عن هويتكم والقطاع الذي تنتمي إليه فرصتكم للبدء.",
  step_2_b: "فقرتان أو ثلاث عن الفرصة ومرحلتها وما تبحثون عنه.",
  step_3_b: "إذا وُجد توافق، نرتّب محادثة لاستكشاف الفرصة بشكل جدي.",
  look_h2: "ما الذي نبحث عنه",
  look_1: "فرص ضمن نطاق تركيزنا القطاعي",
  look_2: "أساسيات رصينة وأشخاص موثوقون",
  look_3: "مسار واقعي نحو قيمة طويلة الأمد",
  expect_h2: "ما الذي تتوقعونه منا",
  expect_1: "قراءة متأنية لكل مقدمة تصلنا",
  expect_2: "رد واضح وصادق — بما فيه الاعتذار المهذب",
  expect_3: "سرية تامة للمعلومات التي تشاركونها",

  focus_label: "ما الذي نوليه اهتمامنا",
  chart_label: "منظور طويل الأمد",
  chart_note: "رسم توضيحي فقط — صورة لنمو صبور ومتراكم، وليست أرقاماً مُعلنة.",
};

export const STRINGS: Record<Lang, Record<StringKey, string>> = { en, ar };
export const t = (lang: Lang, key: StringKey) => STRINGS[lang][key];
