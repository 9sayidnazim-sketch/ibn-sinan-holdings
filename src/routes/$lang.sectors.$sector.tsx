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
    <div className="bg-corporate-mesh min-h-screen">
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
          <div className="mt-8 flex items-center gap-3">
            <span className="corporate-badge ltr-iso">{s.num}</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
              {t(l, "nav_sectors")}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl">{tr(s.h1, l)}</h1>
          <p className="mt-6 max-w-2xl text-lg text-graphite md:text-xl leading-relaxed">
            {tr(s.intro, l)}
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-hairline/80 bg-background shadow-md">
            <Img src={s.image} alt={tr(s.imageAlt, l)} ratio="21 / 9" eager />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{t(l, "caption_illustrative")}</p>
        </Reveal>
      </section>

      <section className="container-site pb-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 space-y-12">
            {s.sections.map((sec, i) => (
              <Reveal key={i} className="border-t border-hairline pt-8">
                <h2 className="text-2xl md:text-3xl font-bold">{tr(sec.heading, l)}</h2>
                <p className="mt-4 max-w-2xl text-lg text-graphite leading-relaxed">
                  {tr(sec.body, l)}
                </p>
              </Reveal>
            ))}
            <Reveal className="corporate-card rounded-2xl p-8 bg-gradient-to-br from-card via-card to-soft">
              <h3 className="text-xl font-bold text-foreground">{t(l, "sector_discuss_title")}</h3>
              <p className="mt-2 text-graphite">{t(l, "sector_discuss_desc")}</p>
              <div className="mt-6">
                <BtnLink to="/$lang/contact" params={{ lang: l }} search={{ sector: s.slug }}>
                  {tr(s.cta, l)} <Arrow />
                </BtnLink>
              </div>
            </Reveal>
          </div>
          <aside className="md:col-span-4 md:col-start-9 space-y-6">
            {s.focus.length > 0 && (
              <Reveal className="corporate-card rounded-2xl p-8">
                <div className="label-caps">{t(l, "focus_label")}</div>
                <ul className="mt-6 space-y-4">
                  {s.focus.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="corporate-badge ltr-iso mt-0.5 text-xs">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-medium text-foreground/90">{tr(f, l)}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            <Reveal delay={100} className="corporate-card rounded-2xl p-8">
              <div className="label-caps">{t(l, "other_sectors")}</div>
              <ul className="mt-6 space-y-3">
                {others.map((o) => (
                  <li
                    key={o.slug}
                    className="border-t border-hairline/60 pt-3 first:border-t-0 first:pt-0"
                  >
                    <Link
                      to="/$lang/sectors/$sector"
                      params={{ lang: l, sector: o.slug }}
                      className="group flex items-center justify-between gap-4 py-1"
                    >
                      <span className="text-base font-semibold group-hover:text-primary transition-colors">
                        {tr(o.name, l)}
                      </span>
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
    </div>
  );
}
