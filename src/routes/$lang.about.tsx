import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { t, tr, type Lang } from "@/i18n/strings";
import { publishedSectors } from "@/data/sectors";
import { Arrow, BtnLink, Crumbs, Img, Reveal, SectionHead } from "@/components/site/ui";
import { ClosingBand } from "@/components/site/Shell";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/about")({
  head: ({ params }) => {
    const l = params.lang as Lang;
    return pageHead(l, "/about", t(l, "nav_about"), t(l, "about_intro"));
  },
  component: About,
});

function About() {
  const lang = Route.useParams().lang as Lang;
  return (
    <>
      <section className="container-site pb-20 pt-36 md:pt-44">
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
            { label: t(lang, "nav_about") },
          ]}
        />
        <Reveal>
          <h1 className="mt-8 max-w-3xl text-4xl md:text-6xl">{t(lang, "about_h1")}</h1>
          <p className="mt-8 max-w-2xl text-lg text-graphite md:text-xl">
            {t(lang, "about_intro")}
          </p>
        </Reveal>
        <Reveal delay={150}>
          <Img
            src={aboutImg}
            alt={
              lang === "ar"
                ? "تفاصيل داخلية راقية بضوء طبيعي"
                : "A refined interior in natural light"
            }
            ratio="21 / 9"
            className="mt-14"
          />
          <p className="mt-2 text-sm text-muted-foreground">{t(lang, "caption_illustrative")}</p>
        </Reveal>
      </section>

      <section className="container-site pb-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-4xl">{t(lang, "about_group_h2")}</h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={120}>
              <p className="text-lg text-graphite">{t(lang, "about_group_copy")}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container-site grid gap-12 py-24 md:grid-cols-2">
          {(["vision", "mission"] as const).map((k, i) => (
            <Reveal
              key={k}
              delay={i * 120}
              className="rounded-lg border border-hairline bg-background p-10"
            >
              <div className="label-caps text-primary">{t(lang, `${k}_label`)}</div>
              <p className="mt-4 text-2xl leading-snug md:text-3xl">{t(lang, k)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-site py-24">
        <SectionHead label={t(lang, "nav_sectors")} title={t(lang, "sectors_h2")} />
        <ul className="grid gap-6 md:grid-cols-2">
          {publishedSectors().map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 100}>
              <Link
                to="/$lang/sectors/$sector"
                params={{ lang, sector: s.slug }}
                className="group flex items-center justify-between gap-6 rounded-lg border border-hairline p-8 transition-colors hover:border-primary"
              >
                <div>
                  <div className="label-caps ltr-iso text-primary">{s.num}</div>
                  <h3 className="mt-2 text-2xl group-hover:text-primary">{tr(s.name, lang)}</h3>
                  <p className="mt-2 text-graphite">{tr(s.tagline, lang)}</p>
                </div>
                <Arrow className="shrink-0 text-primary transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container-site pb-24">
        <SectionHead title={t(lang, "principles_h2")} />
        <ul className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {(["pr_1", "pr_2", "pr_3", "pr_4"] as const).map((k, i) => (
            <Reveal as="li" key={k} delay={i * 80} className="bg-background p-8">
              <span className="label-caps ltr-iso text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-xl">{t(lang, k)}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12">
          <BtnLink to="/$lang/contact" params={{ lang }} variant="secondary">
            {t(lang, "cta_partnership")}
          </BtnLink>
        </Reveal>
      </section>

      {/* Strategic Milestones Timeline */}
      <section className="bg-soft py-24">
        <div className="container-site">
          <SectionHead label={t(lang, "about_label")} title={t(lang, "timeline_h2")}>
            <p className="max-w-md text-sm text-graphite md:text-base">
              {t(lang, "timeline_intro")}
            </p>
          </SectionHead>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {([1, 2, 3, 4] as const).map((step, i) => (
              <Reveal
                key={step}
                delay={i * 90}
                className="flex flex-col justify-between rounded-2xl border border-hairline bg-background p-8 transition-all hover:border-primary/40 hover:shadow-xs"
              >
                <div>
                  <span className="text-3xl font-black text-primary ltr-iso">
                    {t(lang, `tm_${step}_year` as never)}
                  </span>
                  <h3 className="mt-4 text-xl font-bold leading-snug">
                    {t(lang, `tm_${step}_title` as never)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">
                    {t(lang, `tm_${step}_desc` as never)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingBand lang={lang} />
    </>
  );
}
