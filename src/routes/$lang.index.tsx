import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import { t, tr, type Lang } from "@/i18n/strings";
import { publishedSectors } from "@/data/sectors";
import { PRINCIPLES } from "@/data/approach";
import { Arrow, BtnLink, Img, Reveal } from "@/components/site/ui";
import { ClosingBand } from "@/components/site/Shell";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const l = params.lang as Lang;
    return pageHead(
      l,
      "",
      l === "ar" ? "مجموعة أعمال قابضة" : "A holding group",
      t(l, "hero_lede"),
    );
  },
  component: Home,
});

/** Decorative dotted-grid vector accent. */
function DotGrid({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
    >
      {Array.from({ length: 25 }, (_, i) => (
        <circle
          key={i}
          cx={16 + (i % 5) * 32}
          cy={16 + Math.floor(i / 5) * 32}
          r="3"
          className="fill-primary/25"
        />
      ))}
    </svg>
  );
}

/** Illustrative growth chart — abstract, no figures. */
function GrowthChart() {
  return (
    <svg aria-hidden viewBox="0 0 560 320" className="h-auto w-full" fill="none">
      {[60, 120, 180, 240].map((y) => (
        <line
          key={y}
          x1="0"
          x2="560"
          y1={y}
          y2={y}
          className="stroke-white/10"
          strokeDasharray="4 8"
        />
      ))}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={i}
          x={40 + i * 72}
          y={280 - 40 - i * 26}
          width="28"
          height={40 + i * 26}
          rx="6"
          className="fill-white/15"
        />
      ))}
      <path
        d="M40 250 C 130 240, 170 200, 240 180 S 380 120, 520 60"
        className="stroke-white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="520" cy="60" r="7" className="fill-white" />
      <circle cx="520" cy="60" r="14" className="stroke-white/40" strokeWidth="2" />
    </svg>
  );
}

function Home() {
  const lang = Route.useParams().lang as Lang;
  const sectors = publishedSectors();
  return (
    <div className="bg-soft">
      {/* Hero — rounded card on a soft canvas */}
      <section className="container-site pt-28 md:pt-32">
        <Reveal className="relative overflow-hidden rounded-2xl">
          <img
            src={hero}
            alt={
              lang === "ar"
                ? "واجهة برج شركة حديثة في ضوء الصباح"
                : "A modern corporate tower facade in morning light"
            }
            width={1920}
            height={1280}
            className="hero-zoom absolute inset-0 h-full w-full object-cover grayscale"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/70 to-night/40 md:bg-gradient-to-r md:from-night/90 md:via-night/60 md:to-night/20 rtl:md:bg-gradient-to-l"
            aria-hidden
          />
          <div className="relative flex min-h-[70vh] flex-col justify-center p-8 md:p-16">
            <h1 className="max-w-xl text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
              {t(lang, "hero_h1")}
            </h1>
            <p className="mt-6 max-w-md text-base text-white/85 md:text-lg">
              {t(lang, "hero_lede")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <BtnLink to="/$lang/sectors" params={{ lang }} variant="light">
                {t(lang, "hero_cta1")} <Arrow />
              </BtnLink>
              <BtnLink
                to="/$lang/contact"
                params={{ lang }}
                className="border border-white/60 bg-transparent text-white hover:bg-white hover:text-night"
              >
                {t(lang, "hero_cta2")}
              </BtnLink>
            </div>
          </div>
        </Reveal>
      </section>

      {/* About — text left, principles as a 2x2 stats-style grid right */}
      <section className="container-site py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold md:text-5xl">{t(lang, "about_h2")}</h2>
            <p className="mt-6 max-w-md text-graphite">{t(lang, "about_copy")}</p>
            <Link
              to="/$lang/about"
              params={{ lang }}
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-primary"
            >
              {t(lang, "about_link")}
              <Arrow className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </Reveal>
          <div className="space-y-6">
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
              {(["pr_1", "pr_2", "pr_3", "pr_4"] as const).map((k, i) => (
                <Reveal
                  as="li"
                  key={k}
                  delay={i * 80}
                  className="flex flex-col justify-center bg-background p-8"
                >
                  <span className="label-caps ltr-iso text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-lg font-bold leading-snug md:text-xl">{t(lang, k)}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={200} className="relative overflow-hidden rounded-2xl bg-night p-8">
              <div className="label-caps text-white/70">{t(lang, "chart_label")}</div>
              <p className="mt-2 max-w-sm text-sm text-white/60">{t(lang, "chart_note")}</p>
              <div className="mt-6">
                <GrowthChart />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sectors — rounded image cards */}
      <section className="container-site relative pb-20 md:pb-28">
        <DotGrid className="absolute -top-4 end-0 hidden lg:block" />
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold md:text-5xl">{t(lang, "sectors_h2")}</h2>
            <p className="mt-4 max-w-sm text-graphite">{t(lang, "sectors_intro")}</p>
          </div>
        </Reveal>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 100}>
              <Link
                to="/$lang/sectors/$sector"
                params={{ lang, sector: s.slug }}
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl">
                  <Img
                    src={s.image}
                    alt={tr(s.imageAlt, lang)}
                    ratio="4 / 5"
                    className="rounded-2xl"
                  />
                </div>
                <h3 className="mt-5 text-xl font-extrabold transition-colors group-hover:text-primary md:text-2xl">
                  {tr(s.name, lang)}
                </h3>
                <p className="mt-1 text-sm text-graphite">{tr(s.tagline, lang)}</p>
              </Link>
            </Reveal>
          ))}
          <Reveal as="li" delay={sectors.length * 100}>
            <Link
              to="/$lang/contact"
              params={{ lang }}
              className="group flex h-full min-h-[280px] flex-col items-start justify-between rounded-2xl bg-night p-8 text-white"
            >
              <span className="label-caps text-white/70">{t(lang, "nav_contact")}</span>
              <div>
                <h3 className="text-xl font-extrabold md:text-2xl">{t(lang, "invite_h2")}</h3>
                <span className="mt-4 inline-flex items-center gap-2 font-semibold text-white">
                  {t(lang, "hero_cta2")}
                  <Arrow className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </ul>
      </section>

      {/* Approach — image left, numbered steps right */}
      <section className="container-site relative pb-20 md:pb-28">
        <DotGrid className="absolute bottom-0 start-0 hidden lg:block" />
        <Reveal className="mb-10">
          <h2 className="text-3xl font-extrabold md:text-5xl">{t(lang, "approach_h2")}</h2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <Img
                src={aboutImg}
                alt={
                  lang === "ar"
                    ? "بيئة عمل مهنية هادئة"
                    : "A quiet professional working environment"
                }
                ratio="4 / 5"
                className="rounded-2xl grayscale"
              />
            </div>
          </Reveal>
          <ol>
            {PRINCIPLES.map((p, i) => (
              <Reveal
                as="li"
                key={p.num}
                delay={i * 90}
                className="flex gap-5 border-b border-hairline py-7 first:pt-0 last:border-b-0"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-night text-sm font-bold text-white ltr-iso">
                  {p.num}
                </span>
                <div>
                  <h3 className="text-lg font-extrabold md:text-xl">{tr(p.title, lang)}</h3>
                  <p className="mt-1 text-sm text-graphite md:text-base">{tr(p.body, lang)}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={380} className="pt-8">
              <BtnLink to="/$lang/approach" params={{ lang }} variant="secondary">
                {t(lang, "approach_link")} <Arrow />
              </BtnLink>
            </Reveal>
          </ol>
        </div>
      </section>

      <ClosingBand lang={lang} />
    </div>
  );
}
