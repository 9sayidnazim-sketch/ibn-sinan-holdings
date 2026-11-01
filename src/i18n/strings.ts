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
  legal: "© 2026 IBN SINAN HOLDINGS. All rights reserved.",
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
  success:
    "Thank you. Your message has been received. Our executive team will review your enquiry and respond promptly.",
  demo_notice:
    "All enquiries are reviewed directly by our executive office within 1–2 business days.",

  type_partnership: "Partnership",
  type_introduction: "Opportunity introduction",
  type_general: "General enquiry",

  other_sectors: "Explore another sector",
  caption_illustrative: "Illustrative photography.",

  privacy_h1: "Privacy notice",
  privacy_text:
    "IBN SINAN HOLDINGS is committed to protecting your privacy and treating personal information with the highest standards of integrity, discretion, and care.",
  pv_1: "What we collect",
  pv_1_b:
    "We collect only the details you share with us through our contact forms or direct correspondence, such as your full name, business email address, company name, phone number, and enquiry specifics.",
  pv_2: "How we use it",
  pv_2_b:
    "We use your details solely to evaluate business alignment, reply to your enquiry, and foster professional partnerships. We never sell, rent, or share personal data with external marketers.",
  pv_3: "How long we keep it",
  pv_3_b:
    "Enquiry records are retained only as long as necessary to complete our evaluation, manage the active relationship, or satisfy legal and regulatory documentation obligations.",
  pv_4: "Your rights",
  pv_4_b:
    "You retain the right to request access to any personal data we hold, request amendments or corrections, or ask for the removal of your contact history from our active systems.",

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

  stat_1_val: "03",
  stat_1_label: "Core Strategic Sectors",
  stat_2_val: "10+ Yrs",
  stat_2_label: "Long-Term Value Horizon",
  stat_3_val: "GCC & UAE",
  stat_3_label: "Regional Market Focus",
  stat_4_val: "100%",
  stat_4_label: "Ethical Governance Standard",

  insights_h2: "Strategic Perspectives",
  insights_intro: "Thoughtful developments and market directions across our active sectors.",
  insight_1_tag: "Healthcare",
  insight_1_title: "Strengthening Essential Pharmaceutical Supply Chains in the Region",
  insight_1_body:
    "How patient capital and disciplined partnerships are meeting rising demand for advanced medical solutions.",
  insight_2_tag: "Investments",
  insight_2_title: "Long-Term Stewardship in a Volatile Global Market",
  insight_2_body:
    "Why measured decision-making and deep sector understanding outlast short-term market fluctuations.",
  insight_3_tag: "Consumer & Retail",
  insight_3_title: "Responsive Distribution & Consumer Trust Dynamics",
  insight_3_body:
    "Leveraging scalable logistics infrastructure to build enduring customer loyalty and brand equity.",

  timeline_h2: "Our Journey & Milestones",
  timeline_intro:
    "A deliberate path of measured growth, from foundational investments to diversified regional presence.",
  tm_1_year: "2021",
  tm_1_title: "Group Establishment & Healthcare Focus",
  tm_1_desc:
    "Inception of IBN SINAN HOLDINGS with an initial mandate dedicated to essential pharmaceutical partnerships.",
  tm_2_year: "2023",
  tm_2_title: "Diversified Investment Strategy",
  tm_2_desc:
    "Expansion into strategic capital deployment, focusing on high-conviction opportunities with sound fundamentals.",
  tm_3_year: "2025",
  tm_3_title: "Retail & Consumer Commercialization",
  tm_3_desc:
    "Broadening the portfolio into modern distribution infrastructure, consumer logistics, and commercial platforms.",
  tm_4_year: "2026+",
  tm_4_title: "Regional Integration & Enduring Scale",
  tm_4_desc:
    "Strengthening regional governance and compounding value across all three active holding pillars.",

  approach_eyebrow: "Governance & Framework",
  part_eyebrow: "Strategic Partnerships",
  contact_eyebrow: "Executive Office",
  hq_title: "Headquarters & Regional Presence",
  hq_location: "United Arab Emirates & GCC",
  hq_hours_label: "Operating Schedule",
  hq_hours_val: "Monday – Friday: 08:30 – 17:30 (GST)",
  hq_confidentiality_title: "Discretion & Governance",
  hq_confidentiality_val:
    "All introductions and proposals are handled with strict executive confidentiality.",
  sector_discuss_title: "Explore Collaboration",
  sector_discuss_desc: "Speak directly with our team regarding opportunities in this sector.",
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
  legal: "© 2026 مجموعة ابن سنان القابضة. جميع الحقوق محفوظة.",
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
  success:
    "شكراً لتواصلك. تم استلام رسالتك وسيقوم فريقنا التنفيذي بمراجعتها والرد عليكم في أقرب وقت.",
  demo_notice: "تتم مراجعة كافة الاستفسارات مباشرة من قِبل مكتبنا التنفيذي خلال يوم أو يومي عمل.",

  type_partnership: "شراكة",
  type_introduction: "تقديم فرصة",
  type_general: "استفسار عام",

  other_sectors: "استكشف قطاعاً آخر",
  caption_illustrative: "صور توضيحية.",

  privacy_h1: "إشعار الخصوصية",
  privacy_text:
    "تلتزم ابن سنان القابضة بحماية خصوصيتك والتعامل مع المعلومات الشخصية وفق أعلى معايير النزاهة والسرية والمسؤولية.",
  pv_1: "ما الذي نجمعه",
  pv_1_b:
    "نجمع فقط التفاصيل التي تشاركونها معنا عبر نماذج التواصل أو المراسلات المباشرة، مثل الاسم، والبريد المهني، واسم الشركة، ورقم الهاتف، وتفاصيل الاستفسار.",
  pv_2: "كيف نستخدمه",
  pv_2_b:
    "نستخدم بياناتك حصرياً لتقييم التوافق المهني، والرد على استفساراتكم، وتعزيز الشراكات المثمرة. لا نقوم ببيع أو مشاركة البيانات الشخصية مع أي أطراف تسويقية.",
  pv_3: "مدة الاحتفاظ به",
  pv_3_b:
    "يتم الاحتفاظ بسجلات المراسلات فقط للمدة اللازمة لإتمام دراسة الفرصة، أو إدارة العلاقة القائمة، أو الامتثال للالتزامات القانونية والتنظيمية.",
  pv_4: "حقوقك",
  pv_4_b:
    "يحق لك في أي وقت طلب مراجعة بياناتك المسجلة لدينا، أو طلب تعديلها وتصحيحها، أو طلب إزالتها من أنظمتنا النشطة بالتواصل مع مكتبنا.",

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

  stat_1_val: "٠٣",
  stat_1_label: "قطاعات استراتيجية رئيسية",
  stat_2_val: "١٠+ سنوات",
  stat_2_label: "أفق استثماري طويل الأمد",
  stat_3_val: "الإمارات والخليج",
  stat_3_label: "نطاق السوق الإقليمي",
  stat_4_val: "١٠٠٪",
  stat_4_label: "التزام كامل بمعايير الحوكمة",

  insights_h2: "رؤى وتوجهات استراتيجية",
  insights_intro: "تطورات مدروسة وتوجهات سوقية عبر قطاعاتنا النشطة.",
  insight_1_tag: "الرعاية الصحية",
  insight_1_title: "تعزيز سلاسل التوريد الدوائية الأساسية في المنطقة",
  insight_1_body:
    "كيف يلبي رأس المال الصبور والشراكات المنضبطة الطلب المتزايد على الحلول الطبية المتقدمة.",
  insight_2_tag: "الاستثمارات",
  insight_2_title: "الإدارة المسؤولة وطويلة الأمد في أسواق متغيرة",
  insight_2_body:
    "لماذا يتفوق اتخاذ القرارات المتأنية والفهم القطاعي العميق على تقلبات الأسواق قصيرة الأجل.",
  insight_3_tag: "التجزئة والمستهلك",
  insight_3_title: "ديناميكيات التوزيع المرن وثقة المستهلك الدائمة",
  insight_3_body:
    "الاستفادة من البنية التحتية اللوجستية القابلة للتوسع لبناء ولاء دائم وقيمة راسخة للعلامات التجارية.",

  timeline_h2: "مسيرتنا ومحطات النمو",
  timeline_intro:
    "مسار مدروس من النمو المتأني، من الاستثمارات التأسيسية إلى الحضور الإقليمي المتنوع.",
  tm_1_year: "٢٠٢١",
  tm_1_title: "تأسيس المجموعة والتركيز الدوائي",
  tm_1_desc: "انطلاق ابن سنان القابضة برؤية استراتيجية مخصصة لشراكات قطاع الأدوية والرعاية الصحية.",
  tm_2_year: "٢٠٢٣",
  tm_2_title: "تنويع المحفظة الاستثمارية",
  tm_2_desc: "التوسع نحو توظيف رأس المال الاستراتيجي في فرص واعدة تتمتع بأسس متينة.",
  tm_3_year: "٢٠٢٥",
  tm_3_title: "تطوير قطاع التجزئة والمستهلك",
  tm_3_desc: "توسيع المحفظة لتشمل البنية التحتية للتوزيع الحديث والخدمات اللوجستية التجارية.",
  tm_4_year: "٢٠٢٦+",
  tm_4_title: "التكامل الإقليمي والنمو المستدام",
  tm_4_desc: "تعزيز الحوكمة الإقليمية وتنمية القيمة التراكمية عبر أركان المجموعة الثلاثة.",

  approach_eyebrow: "إطار الحوكمة المؤسسية",
  part_eyebrow: "الشراكات الاستراتيجية",
  contact_eyebrow: "المكتب التنفيذي",
  hq_title: "المقر الرئيسي والحضور الإقليمي",
  hq_location: "دولة الإمارات العربية المتحدة ودول مجلس التعاون",
  hq_hours_label: "أوقات العمل الرسمية",
  hq_hours_val: "الاثنين – الجمعة: ٠٨:٣٠ – ١٧:٣٠ (توقيت الإمارات)",
  hq_confidentiality_title: "السرية والحوكمة",
  hq_confidentiality_val:
    "تُعامل جميع المقترحات والمراسلات بسرية تنفيذية تامة ومعايير حوكمة دقيقة.",
  sector_discuss_title: "استكشف آفاق التعاون",
  sector_discuss_desc: "تواصل مباشرة مع فريقنا لمناقشة الفرص في هذا القطاع.",
};

export const STRINGS: Record<Lang, Record<StringKey, string>> = { en, ar };
export const t = (lang: Lang, key: StringKey) => STRINGS[lang][key];
