import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { t, tr, type Lang } from "@/i18n/strings";
import { getSector, publishedSectors } from "@/data/sectors";
import { Arrow, BtnLink, Crumbs, Img, Reveal } from "@/components/site/ui";
import { ClosingBand } from "@/components/site/Shell";
import { ld, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/sectors/$sector")({
  beforeLoad: ({ params }) => {
    if (!getSector(params.sector)) throw notFound();
  },
  head: ({ params }) => {
    const l = params.lang as Lang;
    const s = getSector(params.sector)!;
    return {
      ...pageHead(l, `/sectors/${s.slug}`, tr(s.name, l), tr(s.intro, l)),
      scripts: [
        ld({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: t(l, "home"), item: `/${l}` },
            { "@type": "ListItem", position: 2, name: t(l, "nav_sectors"), item: `/${l}/sectors` },
            { "@type": "ListItem", position: 3, name: tr(s.name, l) },
          ],
        }),
      ],
    };
  },
  component: SectorPage,
});

function SectorPage() {
  const { lang, sector: slug } = Route.useParams();
  const l = lang as Lang;
  const s = getSector(slug)!;
  const others = publishedSectors().filter((o) => o.slug !== s.slug);
  return (
    <>
      <section className="container-site pb-16 pt-36 md:pt-44">
        <Crumbs
          items={[
            {
              label: t(l, "home"),
              node: (
                <Link to="/$lang" params={{ lang: l }} className="hover:text-primary">
                  {t(l, "home")}
                </Link>
              ),
            },
            {
              label: t(l, "nav_sectors"),
              node: (
                <Link to="/$lang/sectors" params={{ lang: l }} className="hover:text-primary">
                  {t(l, "nav_sectors")}
                </Link>
              ),
            },
            { label: tr(s.name, l) },
          ]}
        />
        <Reveal>
          <div className="label-caps ltr-iso mt-8 text-primary">{s.num}</div>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl">{tr(s.h1, l)}</h1>
          <p className="mt-8 max-w-2xl text-lg text-graphite md:text-xl">{tr(s.intro, l)}</p>
        </Reveal>
        <Reveal delay={150}>
          <Img src={s.image} alt={tr(s.imageAlt, l)} ratio="21 / 9" className="mt-14" eager />
          <p className="mt-2 text-sm text-muted-foreground">{t(l, "caption_illustrative")}</p>
        </Reveal>
      </section>

      <section className="container-site pb-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 space-y-14">
            {s.sections.map((sec, i) => (
              <Reveal key={i} className="border-t border-hairline pt-8">
                <h2 className="text-2xl md:text-3xl">{tr(sec.heading, l)}</h2>
                <p className="mt-4 max-w-xl text-graphite">{tr(sec.body, l)}</p>
              </Reveal>
            ))}
            <Reveal>
              <BtnLink to="/$lang/contact" params={{ lang: l }} search={{ sector: s.slug }}>
                {tr(s.cta, l)} <Arrow />
              </BtnLink>
            </Reveal>
          </div>
          <aside className="md:col-span-4 md:col-start-9 space-y-6">
            {s.focus.length > 0 && (
              <Reveal className="rounded-lg border border-hairline bg-soft p-8">
                <div className="label-caps">{t(l, "focus_label")}</div>
                <ul className="mt-4 space-y-3">
                  {s.focus.map((f, i) => (
                    <li key={i} className="flex items-baseline gap-3">
                      <span className="label-caps ltr-iso text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{tr(f, l)}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            <Reveal delay={100} className="rounded-lg border border-hairline bg-soft p-8">
              <div className="label-caps">{t(l, "other_sectors")}</div>
              <ul className="mt-4 space-y-4">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to="/$lang/sectors/$sector"
                      params={{ lang: l, sector: o.slug }}
                      className="group flex items-center justify-between gap-4"
                    >
                      <span className="text-lg group-hover:text-primary">{tr(o.name, l)}</span>
                      <Arrow className="text-primary transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>

      <ClosingBand lang={l} />
    </>
  );
}
