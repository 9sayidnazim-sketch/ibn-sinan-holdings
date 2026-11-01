import { createFileRoute, Link } from "@tanstack/react-router";
import partnershipsImg from "@/assets/partnerships.jpg";
import { t, tr, type Lang } from "@/i18n/strings";
import { PRINCIPLES } from "@/data/approach";
import { Crumbs, Img, Reveal } from "@/components/site/ui";
import { ClosingBand } from "@/components/site/Shell";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/approach")({
  head: ({ params }) => {
    const l = params.lang as Lang;
    return pageHead(l, "/approach", t(l, "nav_approach"), t(l, "approach_intro"));
  },
  component: Approach,
});

function Approach() {
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
            { label: t(lang, "nav_approach") },
          ]}
        />
        <Reveal>
          <h1 className="mt-8 max-w-3xl text-4xl md:text-6xl">{t(lang, "approach_h2")}</h1>
          <p className="mt-8 max-w-2xl text-lg text-graphite md:text-xl">
            {t(lang, "approach_intro")}
          </p>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Img
                src={partnershipsImg}
                alt={
                  lang === "ar"
                    ? "بيئة عمل مهنية بضوء طبيعي"
                    : "A professional working environment in natural light"
                }
                ratio="4 / 5"
              />
              <p className="mt-2 text-sm text-muted-foreground">
                {t(lang, "caption_illustrative")}
              </p>
            </Reveal>
          </div>
          <ol className="md:col-span-6 md:col-start-7">
            {PRINCIPLES.map((p, i) => (
              <Reveal
                as="li"
                key={p.num}
                delay={i * 90}
                className="border-t border-hairline py-10 first:border-t-0 first:pt-0"
              >
                <div className="label-caps ltr-iso text-primary">{p.num}</div>
                <h2 className="mt-3 text-2xl md:text-3xl">{tr(p.title, lang)}</h2>
                <p className="mt-3 max-w-lg text-graphite">{tr(p.body, lang)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <ClosingBand lang={lang} />
    </>
  );
}
