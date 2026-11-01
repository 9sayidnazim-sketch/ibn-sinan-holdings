import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png.asset.json";
import { t, type Lang } from "@/i18n/strings";
import { cn } from "@/lib/utils";
import { BtnLink } from "./ui";

const NAV = [
  { to: "/$lang/about", key: "nav_about" },
  { to: "/$lang/sectors", key: "nav_sectors" },
  { to: "/$lang/approach", key: "nav_approach" },
  { to: "/$lang/partnerships", key: "nav_partnerships" },
  { to: "/$lang/contact", key: "nav_contact" },
] as const;

function swapPath(path: string, to: Lang) {
  return path.replace(/^\/(en|ar)(?=\/|$)/, `/${to}`) || `/${to}`;
}

export function Header({ lang }: { lang: Lang }) {
  const loc = useRouterState({ select: (s) => s.location });
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [loc.pathname]);
  const href = (l: Lang) => swapPath(loc.pathname, l) + (loc.searchStr ?? "");

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-hairline bg-background/95 backdrop-blur">
      <div className="container-site flex h-20 items-center gap-8">
        <Link to="/$lang" params={{ lang }} aria-label={t(lang, "brand")} className="shrink-0">
          <img src={logo.url} alt={t(lang, "brand")} className="h-9 w-auto" />
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-8">
            {NAV.map((n) => (
              <li key={n.key}>
                <Link
                  to={n.to}
                  params={{ lang }}
                  className="text-[15px] font-medium text-foreground transition-colors hover:text-primary"
                  activeProps={{ className: "!text-primary underline underline-offset-8" }}
                >
                  {t(lang, n.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ms-auto flex items-center gap-5">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <a
              href={href("en")}
              hrefLang="en"
              lang="en"
              aria-current={lang === "en" ? "true" : undefined}
              className={lang === "en" ? "font-semibold" : "opacity-70 hover:opacity-100"}
            >
              EN
            </a>
            <span aria-hidden className="opacity-40">
              |
            </span>
            <a
              href={href("ar")}
              hrefLang="ar"
              lang="ar"
              aria-current={lang === "ar" ? "true" : undefined}
              className={lang === "ar" ? "font-semibold" : "opacity-70 hover:opacity-100"}
              style={{ fontFamily: "var(--font-arabic)" }}
            >
              العربية
            </a>
          </div>
          <BtnLink
            to="/$lang/contact"
            params={{ lang }}
            className="hidden md:inline-flex min-h-[44px] px-5 text-sm"
          >
            {t(lang, "cta_partnership")}
          </BtnLink>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="btn-3d min-h-[44px] rounded-full border border-foreground px-4 text-sm font-medium text-foreground lg:hidden"
          >
            {t(lang, "menu")}
          </button>
        </div>
      </div>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col bg-background p-6 animate-in fade-in slide-in-from-top-2"
        >
          <div className="flex items-center justify-between">
            <img src={logo.url} alt={t(lang, "brand")} className="h-9 w-auto" />
            <button
              type="button"
              autoFocus
              onClick={() => setOpen(false)}
              className="btn-3d min-h-[44px] rounded-full border border-foreground px-4 text-sm font-medium text-foreground"
            >
              {t(lang, "close")}
            </button>
          </div>
          <ol className="mt-10 divide-y divide-hairline border-y border-hairline">
            {NAV.map((n, i) => (
              <li key={n.key}>
                <Link
                  to={n.to}
                  params={{ lang }}
                  className="flex items-baseline gap-6 py-6 text-3xl"
                >
                  <span className="label-caps ltr-iso text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {t(lang, n.key)}
                </Link>
              </li>
            ))}
          </ol>
          <BtnLink to="/$lang/contact" params={{ lang }} className="mt-8 justify-center">
            {t(lang, "cta_partnership")}
          </BtnLink>
        </div>
      )}
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="bg-night text-night-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-block rounded-md bg-night-foreground p-3">
            <img src={logo.url} alt={t(lang, "brand")} className="h-8 w-auto" />
          </div>
          <p className="mt-6 max-w-sm text-sm opacity-80">{t(lang, "hero_lede")}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-4">
          <ul className="space-y-3">
            {NAV.map((n) => (
              <li key={n.key}>
                <Link to={n.to} params={{ lang }} className="hover:text-white/70">
                  {t(lang, n.key)}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/$lang/privacy" params={{ lang }} className="hover:text-white/70">
                {t(lang, "privacy")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:col-span-3 text-sm opacity-80">
          <p>{t(lang, "brand")}</p>
        </div>
      </div>
      <div className="container-site border-t border-night-foreground/20 py-6 text-sm opacity-70">
        {t(lang, "legal")}
      </div>
    </footer>
  );
}

export function ClosingBand({ lang }: { lang: Lang }) {
  return (
    <section className="bg-night text-night-foreground">
      <div className="container-site flex flex-col items-start gap-8 py-24 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl leading-tight">{t(lang, "invite_h2")}</h2>
          <p className="mt-6 text-lg opacity-80">{t(lang, "invite_copy")}</p>
        </div>
        <BtnLink to="/$lang/contact" params={{ lang }} variant="night">
          {t(lang, "cta_partnership")}
        </BtnLink>
      </div>
    </section>
  );
}
