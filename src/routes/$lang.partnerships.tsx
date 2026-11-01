import { createFileRoute, Link } from "@tanstack/react-router";
import partnershipsImg from "@/assets/partnerships.jpg";
import { t, type Lang } from "@/i18n/strings";
import { Arrow, BtnLink, Crumbs, Img, Reveal, SectionHead } from "@/components/site/ui";
import { ClosingBand } from "@/components/site/Shell";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/partnerships")({
  head: ({ params }) => {
    const l = params.lang as Lang;
    return pageHead(l, "/partnerships", t(l, "nav_partnerships"), t(l, "part_intro"));
  },
  component: Partnerships,
});

function Partnerships() {
  const lang = Route.useParams().lang as Lang;
  const steps = ["step_1_t", "step_2_t", "step_3_t"] as const;
  const stepBodies = ["step_1_b", "step_2_b", "step_3_b"] as const;
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
            { label: t(lang, "nav_partnerships") },
          ]}
        />
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <div className="mt-8 flex items-center gap-3">
                <span className="corporate-badge">{t(lang, "part_eyebrow")}</span>
              </div>
              <h1 className="mt-4 max-w-2xl text-4xl md:text-6xl">{t(lang, "invite_h2")}</h1>
              <p className="mt-6 max-w-xl text-lg text-graphite md:text-xl leading-relaxed">
                {t(lang, "part_intro")}
              </p>
              <div className="mt-10">
                <BtnLink to="/$lang/contact" params={{ lang }} search={{ type: "partnership" }}>
                  {t(lang, "cta_partnership")} <Arrow />
                </BtnLink>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-hairline/80 bg-background shadow-md">
                <Img
                  src={partnershipsImg}
                  alt={
                    lang === "ar"
                      ? "غرفة اجتماعات هادئة بضوء طبيعي"
                      : "A quiet meeting room in natural light"
                  }
                  ratio="4 / 5"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(lang, "caption_illustrative")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-hairline/80 bg-soft/50 py-24">
        <div className="container-site">
          <SectionHead title={t(lang, "part_steps_h2")} />
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((k, i) => (
              <Reveal
                as="li"
                key={k}
                delay={i * 100}
                className="corporate-card rounded-2xl p-8 bg-card"
              >
                <span className="corporate-badge ltr-iso">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-5 text-xl font-bold leading-snug">{t(lang, k)}</h2>
                <p className="mt-3 text-base text-graphite leading-relaxed">
                  {t(lang, stepBodies[i] ?? "step_1_b")}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-site grid gap-8 py-24 md:grid-cols-2">
        {(
          [
            { title: "look_h2", items: ["look_1", "look_2", "look_3"] },
            { title: "expect_h2", items: ["expect_1", "expect_2", "expect_3"] },
          ] as const
        ).map((col, ci) => (
          <Reveal
            key={col.title}
            delay={ci * 120}
            className="corporate-card rounded-2xl p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold md:text-3xl">{t(lang, col.title)}</h2>
            <ul className="mt-8 space-y-4">
              {col.items.map((k, i) => (
                <li
                  key={k}
                  className="flex items-start gap-4 border-t border-hairline/60 pt-4 first:border-t-0 first:pt-0"
                >
                  <span className="corporate-badge ltr-iso mt-0.5 text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-medium text-foreground/90">{t(lang, k)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </section>
      <ClosingBand lang={lang} />
    </div>
  );
}
