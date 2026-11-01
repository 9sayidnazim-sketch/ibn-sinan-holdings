import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { t, tr, type Lang } from "@/i18n/strings";
import { publishedSectors } from "@/data/sectors";
import { BtnLink, Crumbs, Reveal } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Search = { sector?: string; type?: string };

export const Route = createFileRoute("/$lang/contact")({
  validateSearch: (s: Record<string, unknown>): Search => {
    const out: Search = {};
    if (typeof s["sector"] === "string") out.sector = s["sector"];
    if (typeof s["type"] === "string") out.type = s["type"];
    return out;
  },
  head: ({ params }) => {
    const l = params.lang as Lang;
    return pageHead(l, "/contact", t(l, "nav_contact"), t(l, "contact_lede"));
  },
  component: Contact,
});

const ENQUIRY_TYPES = ["partnership", "introduction", "general"] as const;

function Contact() {
  const lang = Route.useParams().lang as Lang;
  const search = Route.useSearch();
  const sectors = publishedSectors();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const inputCls =
    "mt-2 w-full min-h-[48px] rounded-lg border border-hairline bg-background px-4 py-3 text-base text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const labelCls = "block text-sm font-semibold text-foreground/90";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!String(fd.get("name") ?? "").trim()) errs["name"] = t(lang, "e_name");
    const email = String(fd.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs["email"] = t(lang, "e_email");
    if (!String(fd.get("sector") ?? "")) errs["sector"] = t(lang, "e_sector");
    if (!String(fd.get("message") ?? "").trim()) errs["message"] = t(lang, "e_message");
    if (fd.get("consent") !== "on") errs["consent"] = t(lang, "e_consent");
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSending(true);
    // Demo only: no backend is connected, so nothing is transmitted.
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 700);
  }

  const err = (k: string) =>
    errors[k] ? (
      <p id={`err-${k}`} role="alert" className="mt-1 text-sm text-destructive">
        {errors[k]}
      </p>
    ) : null;

  return (
    <section className="container-site pb-24 pt-36 md:pt-44">
      <Crumbs
        items={[
          {
            label: t(lang, "home"),
            node: (
              <Link to="/$lang" params={{ lang }} className="hover:text-primary">
                {t(lang, "home")}
              </Link>
            ),
          },
          { label: t(lang, "nav_contact") },
        ]}
      />
      <div className="mt-8 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <h1 className="max-w-md text-4xl md:text-6xl">{t(lang, "contact_h1")}</h1>
            <p className="mt-8 max-w-md text-lg text-graphite">{t(lang, "contact_lede")}</p>
            <p className="mt-8 rounded-md border border-hairline bg-soft p-4 text-sm text-graphite">
              {t(lang, "demo_notice")}
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          {sent ? (
            <Reveal className="rounded-2xl border border-hairline bg-soft p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mt-6 text-2xl font-bold leading-snug md:text-3xl">
                {t(lang, "success")}
              </h2>
              <div className="mt-8">
                <BtnLink to="/$lang" params={{ lang }} variant="secondary">
                  {t(lang, "back_home")}
                </BtnLink>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={100}>
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelCls}>
                      {t(lang, "f_name")}{" "}
                      <span className="text-destructive" aria-hidden>
                        *
                      </span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      aria-invalid={!!errors["name"]}
                      aria-describedby={errors["name"] ? "err-name" : undefined}
                      className={cn(inputCls, errors["name"] && "border-destructive")}
                    />
                    {err("name")}
                  </div>
                  <div>
                    <label htmlFor="company" className={labelCls}>
                      {t(lang, "f_company")}
                    </label>
                    <input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelCls}>
                      {t(lang, "f_email")}{" "}
                      <span className="text-destructive" aria-hidden>
                        *
                      </span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      dir="ltr"
                      aria-invalid={!!errors["email"]}
                      aria-describedby={errors["email"] ? "err-email" : undefined}
                      className={cn(inputCls, errors["email"] && "border-destructive")}
                    />
                    {err("email")}
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelCls}>
                      {t(lang, "f_phone")}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      dir="ltr"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="sector" className={labelCls}>
                      {t(lang, "f_sector")}{" "}
                      <span className="text-destructive" aria-hidden>
                        *
                      </span>
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      defaultValue={search.sector ?? ""}
                      aria-invalid={!!errors["sector"]}
                      aria-describedby={errors["sector"] ? "err-sector" : undefined}
                      className={cn(inputCls, errors["sector"] && "border-destructive")}
                    >
                      <option value="" disabled>
                        —
                      </option>
                      {sectors.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {tr(s.name, lang)}
                        </option>
                      ))}
                    </select>
                    {err("sector")}
                  </div>
                  <div>
                    <label htmlFor="type" className={labelCls}>
                      {t(lang, "f_type")}
                    </label>
                    <select
                      id="type"
                      name="type"
                      defaultValue={search.type ?? "general"}
                      className={inputCls}
                    >
                      {ENQUIRY_TYPES.map((ty) => (
                        <option key={ty} value={ty}>
                          {t(lang, `type_${ty}`)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className={labelCls}>
                    {t(lang, "f_message")}{" "}
                    <span className="text-destructive" aria-hidden>
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={1000}
                    aria-invalid={!!errors["message"]}
                    aria-describedby={errors["message"] ? "err-message" : undefined}
                    className={cn(inputCls, errors["message"] && "border-destructive")}
                  />
                  {err("message")}
                </div>
                <div>
                  <label className="flex items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      name="consent"
                      aria-invalid={!!errors["consent"]}
                      aria-describedby={errors["consent"] ? "err-consent" : undefined}
                      className="mt-1 h-5 w-5 accent-primary"
                    />
                    <span>
                      {t(lang, "f_consent")}{" "}
                      <span className="text-destructive" aria-hidden>
                        *
                      </span>
                    </span>
                  </label>
                  {err("consent")}
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-3d inline-flex min-h-[52px] items-center gap-3 rounded-full bg-primary px-7 text-base font-medium text-primary-foreground hover:bg-night disabled:opacity-60"
                >
                  {sending ? "…" : t(lang, "f_send")}
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
