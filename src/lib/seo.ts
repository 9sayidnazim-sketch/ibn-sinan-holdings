import { t, type Lang } from "@/i18n/strings";

/** Per-page head with hreflang alternates. `path` excludes the language prefix, e.g. "/spaces". */
export function pageHead(
  lang: Lang,
  path: string,
  title: string,
  description: string,
  type = "website",
) {
  const full = `${title} — ${t(lang, "brand")}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: `/${lang}${path}` },
      { property: "og:locale", content: lang === "ar" ? "ar_AE" : "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `/${lang}${path}` },
      { rel: "alternate", hrefLang: "en", href: `/en${path}` },
      { rel: "alternate", hrefLang: "ar", href: `/ar${path}` },
      { rel: "alternate", hrefLang: "x-default", href: `/en${path}` },
    ],
  };
}

export const ld = (data: object) => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});
