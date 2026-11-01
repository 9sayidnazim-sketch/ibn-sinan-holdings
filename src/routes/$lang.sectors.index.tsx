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

function Sectors() {
  const lang = Route.useParams().lang as Lang;
  return (
    <>
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
          <h1 className="mt-8 max-w-3xl text-4xl md:text-6xl">{t(lang, "sectors_h2")}</h1>
          <p className="mt-8 max-w-2xl text-lg text-graphite md:text-xl">
            {t(lang, "sectors_intro")}
          </p>
        </Reveal>
        <ul className="mt-16 grid gap-10 md:grid-cols-2">
          {publishedSectors().map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 120}>
              <Link
                to="/$lang/sectors/$sector"
                params={{ lang, sector: s.slug }}
                className="group block"
              >
                <Img src={s.image} alt={tr(s.imageAlt, lang)} ratio="4 / 5" />
                <div className="mt-5 flex items-baseline gap-4">
                  <span className="label-caps ltr-iso text-primary">{s.num}</span>
                  <h2 className="text-2xl transition-colors group-hover:text-primary md:text-3xl">
                    {tr(s.name, lang)}
                  </h2>
                </div>
                <p className="mt-2 max-w-md text-graphite">{tr(s.tagline, lang)}</p>
                <span className="mt-3 inline-flex items-center gap-2 font-medium text-primary">
                  {tr(s.linkLabel, lang)}
                  <Arrow className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
      <ClosingBand lang={lang} />
    </>
  );
}
