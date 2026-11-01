import type { L } from "@/i18n/strings";

export type Principle = { num: string; title: L; body: L };

export const PRINCIPLES: Principle[] = [
  {
    num: "01",
    title: { en: "Understand the opportunity", ar: "نفهم الفرصة" },
    body: {
      en: "Begin with the context, the need, and the people involved.",
      ar: "نبدأ بالسياق والحاجة والأشخاص المعنيين.",
    },
  },
  {
    num: "02",
    title: { en: "Assess with discipline", ar: "نقيّم بانضباط" },
    body: {
      en: "Consider strategic fit, practical requirements, and the path forward.",
      ar: "ننظر في الملاءمة الاستراتيجية والمتطلبات العملية والمسار المستقبلي.",
    },
  },
  {
    num: "03",
    title: { en: "Build alignment", ar: "نبني التوافق" },
    body: {
      en: "Establish shared priorities and clear expectations.",
      ar: "نرسّخ أولويات مشتركة وتوقعات واضحة.",
    },
  },
  {
    num: "04",
    title: { en: "Focus on enduring value", ar: "نركّز على القيمة الدائمة" },
    body: {
      en: "Keep long-term outcomes at the centre of the conversation.",
      ar: "نُبقي النتائج طويلة الأمد في قلب الحوار.",
    },
  },
];
