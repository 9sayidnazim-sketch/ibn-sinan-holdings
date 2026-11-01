import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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

export function BrandLogo({ lang, inverted = false }: { lang: Lang; inverted?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border text-sm font-extrabold tracking-wider transition-colors",
          inverted
            ? "border-white/20 bg-white/10 text-white"
            : "border-primary/20 bg-primary/10 text-primary",
        )}
      >
        <span>IS</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={cn(
            "text-base font-extrabold tracking-tight",
            inverted ? "text-white" : "text-foreground",
          )}
        >
          {lang === "ar" ? "ابن سنان" : "IBN SINAN"}
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold tracking-[0.18em] uppercase",
            inverted ? "text-white/70" : "text-primary",
          )}
        >
          {lang === "ar" ? "القابضة" : "HOLDINGS"}
        </span>
      </div>
    </div>
  );
}

export function Header({ lang }: { lang: Lang }) {
  const loc = useRouterState({ select: (s) => s.location });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const href = (l: Lang) => swapPath(loc.pathname, l) + (loc.searchStr ?? "");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-200",
        scrolled
          ? "border-b border-hairline/80 bg-background/95 shadow-xs backdrop-blur-md"
          : "border-b border-hairline bg-background/90 backdrop-blur-sm",
      )}
    >
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Link
          to="/$lang"
          params={{ lang }}
          aria-label={t(lang, "brand")}
          className="shrink-0 rounded-lg p-1 transition-opacity hover:opacity-90 focus-visible:outline-primary"
        >
          <BrandLogo lang={lang} />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.key}>
                <Link
                  to={n.to}
                  params={{ lang }}
                  className="inline-flex min-h-[44px] items-center rounded-md px-3.5 text-[15px] font-medium text-foreground/85 transition-colors hover:bg-soft hover:text-primary"
                  activeProps={{
                    className: "!font-semibold !text-primary bg-primary/5 hover:bg-primary/10",
                  }}
                >
                  {t(lang, n.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          {/* Segmented language switcher with 44px touch targets */}
          <div className="flex items-center rounded-full border border-hairline bg-soft/80 p-1 text-xs">
            <a
              href={href("en")}
              hrefLang="en"
              lang="en"
              aria-current={lang === "en" ? "true" : undefined}
              className={cn(
                "inline-flex min-h-[36px] min-w-[40px] items-center justify-center rounded-full px-2.5 font-semibold transition-all",
                lang === "en"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-foreground/70 hover:bg-background/80 hover:text-foreground",
              )}
            >
              EN
            </a>
            <a
              href={href("ar")}
              hrefLang="ar"
              lang="ar"
              aria-current={lang === "ar" ? "true" : undefined}
              className={cn(
                "inline-flex min-h-[36px] min-w-[44px] items-center justify-center rounded-full px-2.5 font-semibold transition-all",
                lang === "ar"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-foreground/70 hover:bg-background/80 hover:text-foreground",
              )}
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
            aria-label={t(lang, "menu")}
            aria-expanded={open}
            className="btn-3d inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-hairline bg-background px-4 text-sm font-semibold text-foreground hover:bg-soft lg:hidden"
          >
            {t(lang, "menu")}
          </button>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background p-6 animate-in fade-in slide-in-from-top-2"
        >
          <div className="flex items-center justify-between border-b border-hairline pb-4">
            <BrandLogo lang={lang} />
            <button
              type="button"
              autoFocus
              onClick={() => setOpen(false)}
              className="btn-3d inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-foreground/30 px-5 text-sm font-medium text-foreground hover:bg-soft"
            >
              {t(lang, "close")}
            </button>
          </div>

          <ol className="mt-8 divide-y divide-hairline border-y border-hairline">
            {NAV.map((n, i) => (
              <li key={n.key}>
                <Link
                  to={n.to}
                  params={{ lang }}
                  className="flex min-h-[56px] items-center gap-6 py-4 text-2xl font-bold text-foreground transition-colors hover:text-primary"
                  activeProps={{ className: "!text-primary" }}
                >
                  <span className="label-caps ltr-iso text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {t(lang, n.key)}
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center justify-between rounded-xl border border-hairline bg-soft p-3">
              <span className="text-sm font-medium text-graphite">
                {lang === "ar" ? "اللغة" : "Language"}
              </span>
              <div className="flex gap-2 text-sm">
                <a
                  href={href("en")}
                  className={cn(
                    "min-h-[40px] px-3.5 inline-flex items-center rounded-md font-semibold",
                    lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground",
                  )}
                >
                  EN
                </a>
                <a
                  href={href("ar")}
                  className={cn(
                    "min-h-[40px] px-3.5 inline-flex items-center rounded-md font-semibold",
                    lang === "ar" ? "bg-primary text-primary-foreground" : "text-foreground",
                  )}
                  style={{ fontFamily: "var(--font-arabic)" }}
                >
                  العربية
                </a>
              </div>
            </div>

            <BtnLink to="/$lang/contact" params={{ lang }} className="w-full justify-center">
              {t(lang, "cta_partnership")}
            </BtnLink>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const currentYear = 2026;
  return (
    <footer className="bg-night text-night-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <BrandLogo lang={lang} inverted />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-night-foreground/80">
            {t(lang, "hero_lede")}
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-4">
          <ul className="space-y-3">
            {NAV.map((n) => (
              <li key={n.key}>
                <Link
                  to={n.to}
                  params={{ lang }}
                  className="inline-block py-1 text-sm text-night-foreground/80 transition-colors hover:text-white"
                >
                  {t(lang, n.key)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/$lang/privacy"
                params={{ lang }}
                className="inline-block py-1 text-sm text-night-foreground/80 transition-colors hover:text-white"
              >
                {t(lang, "privacy")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:col-span-3 text-sm text-night-foreground/75">
          <p className="font-semibold text-white">{t(lang, "brand")}</p>
          <p className="mt-2 text-xs leading-relaxed text-night-foreground/60">
            {lang === "ar"
              ? "مجموعة أعمال رائدة تركز على خلق قيمة مستدامة وشراكات استراتيجية طويلة الأمد."
              : "A forward-looking enterprise focused on enduring value and strategic long-term partnerships."}
          </p>
        </div>
      </div>
      <div className="container-site border-t border-white/10 py-6 text-xs text-night-foreground/60">
        © {currentYear} {t(lang, "brand")}.{" "}
        {lang === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
      </div>
    </footer>
  );
}

export function ClosingBand({ lang }: { lang: Lang }) {
  return (
    <section className="bg-night text-night-foreground">
      <div className="container-site flex flex-col items-start gap-8 py-20 md:flex-row md:items-end md:justify-between md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
            {t(lang, "invite_h2")}
          </h2>
          <p className="mt-6 text-base text-night-foreground/80 md:text-lg">
            {t(lang, "invite_copy")}
          </p>
        </div>
        <BtnLink to="/$lang/contact" params={{ lang }} variant="night">
          {t(lang, "cta_partnership")}
        </BtnLink>
      </div>
    </section>
  );
}
