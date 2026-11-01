import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
import { isLang, t, type Lang } from "@/i18n/strings";
import { Footer, Header } from "@/components/site/Shell";
import { BtnLink } from "@/components/site/ui";
import { ld } from "@/lib/seo";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
  },
  head: () => ({
    scripts: [
      ld({ "@context": "https://schema.org", "@type": "Organization", name: "IBN SINAN HOLDINGS" }),
    ],
  }),
  component: LangLayout,
  notFoundComponent: NotFound,
});

function useDocLang(lang: Lang) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
}

function LangLayout() {
  const { lang: raw } = Route.useParams();
  const lang = (isLang(raw) ? raw : "en") as Lang;
  useDocLang(lang);
  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang} className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:start-2 focus:z-50 focus:bg-primary focus:p-3 focus:text-primary-foreground"
      >
        {t(lang, "skip")}
      </a>
      <Header lang={lang} />
      <main id="main">
        <Outlet />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export function NotFound() {
  const { lang: raw } = Route.useParams();
  const lang = (isLang(raw) ? raw : "en") as Lang;
  return (
    <section className="container-site py-40">
      <h1 className="text-4xl md:text-7xl">{t(lang, "nf_h1")}</h1>
      <p className="mt-6 max-w-xl text-graphite">{t(lang, "nf_text")}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <BtnLink to="/$lang" params={{ lang }} variant="secondary">
          {t(lang, "back_home")}
        </BtnLink>
        <BtnLink to="/$lang/contact" params={{ lang }}>
          {t(lang, "nav_contact")}
        </BtnLink>
      </div>
    </section>
  );
}
