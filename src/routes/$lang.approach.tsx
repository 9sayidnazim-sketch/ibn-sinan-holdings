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
            { label: t(lang, "nav_approach") },
          ]}
        />
        <Reveal>
          <div className="mt-8 flex items-center gap-3">
            <span className="corporate-badge">{t(lang, "approach_eyebrow")}</span>
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl">{t(lang, "approach_h2")}</h1>
          <p className="mt-6 max-w-2xl text-lg text-graphite md:text-xl leading-relaxed">
            {t(lang, "approach_intro")}
          </p>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-5 space-y-6">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-hairline/80 bg-background shadow-md">
                <Img
                  src={partnershipsImg}
                  alt={
                    lang === "ar"
                      ? "بيئة عمل مهنية بضوء طبيعي"
                      : "A professional working environment in natural light"
                  }
                  ratio="4 / 5"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(lang, "caption_illustrative")}
              </p>
            </Reveal>

            <Reveal
              delay={120}
              className="corporate-card rounded-2xl p-7 bg-gradient-to-br from-card via-card to-soft"
            >
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                <h3 className="font-bold text-foreground">{t(lang, "hq_confidentiality_title")}</h3>
              </div>
              <p className="mt-2 text-sm text-graphite leading-relaxed">
                {t(lang, "hq_confidentiality_val")}
              </p>
            </Reveal>
          </div>
          <ol className="md:col-span-7 space-y-6">
            {PRINCIPLES.map((p, i) => (
              <Reveal as="li" key={p.num} delay={i * 90} className="corporate-card rounded-2xl p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="corporate-badge ltr-iso">{p.num}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold">{tr(p.title, lang)}</h2>
                <p className="mt-3 text-base text-graphite leading-relaxed">{tr(p.body, lang)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <ClosingBand lang={lang} />
    </div>
  );
}
