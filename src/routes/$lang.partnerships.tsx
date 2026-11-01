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
            { label: t(lang, "nav_partnerships") },
          ]}
        />
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <h1 className="mt-8 max-w-2xl text-4xl md:text-6xl">{t(lang, "invite_h2")}</h1>
              <p className="mt-8 max-w-xl text-lg text-graphite md:text-xl">
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
              <Img
                src={partnershipsImg}
                alt={
                  lang === "ar"
                    ? "غرفة اجتماعات هادئة بضوء طبيعي"
                    : "A quiet meeting room in natural light"
                }
                ratio="4 / 5"
              />
              <p className="mt-2 text-sm text-muted-foreground">
                {t(lang, "caption_illustrative")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container-site py-24">
          <SectionHead title={t(lang, "part_steps_h2")} />
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((k, i) => (
              <Reveal
                as="li"
                key={k}
                delay={i * 100}
                className="rounded-lg border border-hairline bg-background p-8"
              >
                <span className="label-caps ltr-iso text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-xl leading-snug">{t(lang, k)}</h2>
                <p className="mt-3 text-graphite">{t(lang, stepBodies[i] ?? "step_1_b")}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-site grid gap-12 py-24 md:grid-cols-2">
        {(
          [
            { title: "look_h2", items: ["look_1", "look_2", "look_3"] },
            { title: "expect_h2", items: ["expect_1", "expect_2", "expect_3"] },
          ] as const
        ).map((col, ci) => (
          <Reveal key={col.title} delay={ci * 120}>
            <h2 className="text-2xl md:text-3xl">{t(lang, col.title)}</h2>
            <ul className="mt-8 space-y-0">
              {col.items.map((k, i) => (
                <li key={k} className="flex items-baseline gap-4 border-t border-hairline py-5">
                  <span className="label-caps ltr-iso text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg">{t(lang, k)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </section>
      <ClosingBand lang={lang} />
    </>
  );
}
