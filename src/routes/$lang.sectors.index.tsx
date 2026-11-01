import { createFileRoute, Link } from "@tanstack/react-router";
import { t, tr, type Lang } from "@/i18n/strings";
import { publishedSectors } from "@/data/sectors";
import { Arrow, Crumbs, Img, Reveal } from "@/components/site/ui";
import { ClosingBand } from "@/components/site/Shell";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/sectors/")({
  head: ({ params }) => {
    const l = params.lang as Lang;
    return pageHead(l, "/sectors", t(l, "nav_sectors"), t(l, "sectors_intro"));
  },
  component: Sectors,
});

function BlueprintCorners() {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute top-2 start-2 h-2.5 w-2.5 border-t-2 border-s-2 border-primary/50"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-2 end-2 h-2.5 w-2.5 border-t-2 border-e-2 border-primary/50"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-2 start-2 h-2.5 w-2.5 border-b-2 border-s-2 border-primary/50"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-2 end-2 h-2.5 w-2.5 border-b-2 border-e-2 border-primary/50"
      />
    </>
  );
}

function Sectors() {
  const lang = Route.useParams().lang as Lang;
  return (
    <div className="bg-corporate-mesh min-h-screen">
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
            { label: t(lang, "nav_sectors") },
          ]}
        />
        <Reveal>
          <div className="corporate-badge mt-8 mb-4">{t(lang, "nav_sectors")}</div>
          <h1 className="max-w-3xl text-4xl font-extrabold md:text-6xl">{t(lang, "sectors_h2")}</h1>
          <p className="mt-6 max-w-2xl text-lg text-graphite md:text-xl">
            {t(lang, "sectors_intro")}
          </p>
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publishedSectors().map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 120}>
              <Link
                to="/$lang/sectors/$sector"
                params={{ lang, sector: s.slug }}
                className="group blue-grid-box relative flex h-full flex-col justify-between rounded-3xl p-5 md:p-6"
              >
                <BlueprintCorners />
                <div>
                  <div className="overflow-hidden rounded-2xl border border-primary/20">
                    <Img
                      src={s.image}
                      alt={tr(s.imageAlt, lang)}
                      ratio="4 / 5"
                      className="rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-5">
                    <div className="flex items-center justify-between">
                      <span className="corporate-badge text-[10px]">{s.num}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                        {t(lang, "nav_sectors")}
                      </span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold transition-colors group-hover:text-primary md:text-3xl">
                      {tr(s.name, lang)}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-graphite">
                      {tr(s.tagline, lang)}
                    </p>
                  </div>
                </div>
                <div className="mt-6 border-t border-primary/15 pt-4">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                    {tr(s.linkLabel, lang)}
                    <Arrow className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
      <ClosingBand lang={lang} />
    </div>
  );
}
