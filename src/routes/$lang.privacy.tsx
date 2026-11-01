import { createFileRoute, Link } from "@tanstack/react-router";
import { t, type Lang, type StringKey } from "@/i18n/strings";
import { Crumbs, Reveal } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/privacy")({
  head: ({ params }) => {
    const l = params.lang as Lang;
    return pageHead(l, "/privacy", t(l, "privacy_h1"), t(l, "privacy_text"));
  },
  component: Privacy,
});

function Privacy() {
  const lang = Route.useParams().lang as Lang;
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
          { label: t(lang, "privacy") },
        ]}
      />
      <Reveal>
        <h1 className="mt-8 text-4xl md:text-6xl">{t(lang, "privacy_h1")}</h1>
        <p className="mt-6 max-w-2xl text-lg text-graphite">{t(lang, "privacy_text")}</p>
      </Reveal>
      <div className="mt-14 max-w-2xl space-y-10">
        {(["pv_1", "pv_2", "pv_3", "pv_4"] as const).map((k, i) => (
          <Reveal key={k} delay={i * 80} className="border-t border-hairline pt-6">
            <h2 className="text-2xl font-bold">{t(lang, k)}</h2>
            <p className="mt-3 leading-relaxed text-graphite">{t(lang, `${k}_b` as StringKey)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
