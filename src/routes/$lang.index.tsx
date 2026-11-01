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

/** Decorative blueprint corner crosshairs for modern minimal grid boxes */
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
    <div className="bg-corporate-mesh min-h-screen">
      {/* Hero — Motion Video with Architectural Blueprint Framing */}
      <section className="container-site pt-28 md:pt-32">
        <Reveal className="blue-grid-box relative overflow-hidden rounded-3xl border border-primary/35 shadow-2xl bg-night">
          <BlueprintCorners />

          {/* Background Motion Video with Poster Fallback */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={hero}
            className="hero-zoom absolute inset-0 h-full w-full object-cover opacity-90"
          >
            <source src="/videos/city-skyline.webm" type="video/webm" />
            <source src="/videos/hero-skyline.webm" type="video/webm" />
          </video>

          {/* Fine architectural grid mesh over video */}
          <div
            className="absolute inset-0 bg-corporate-grid opacity-20 pointer-events-none"
            aria-hidden
          />

          {/* Dark sapphire gradient vignette for pristine typography contrast */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/70 to-night/35 md:bg-gradient-to-r md:from-night/95 md:via-night/65 md:to-night/25 rtl:md:bg-gradient-to-l"
            aria-hidden
          />

          {/* Live Motion Perspective Pill */}
          <div className="absolute top-6 end-6 z-10 hidden sm:flex items-center gap-2.5 rounded-full border border-white/20 bg-night/60 px-4 py-1.5 backdrop-blur-md text-[11px] font-bold tracking-wider text-white">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="uppercase">
              {lang === "ar" ? "رؤية حية // حركة مؤسسية" : "LIVE AMBIENT MOTION"}
            </span>
          </div>

          <div className="relative flex min-h-[72vh] flex-col justify-center p-8 md:p-16 lg:p-20">
            <div className="mb-6">
              <span className="corporate-badge border-white/20 bg-white/10 text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                {t(lang, "hero_eyebrow")}
              </span>
            </div>
            <h1 className="max-w-2xl text-[40px] font-black leading-[1.05] text-white md:text-[64px] drop-shadow-sm">
              {t(lang, "hero_h1")}
            </h1>
            <p className="mt-6 max-w-lg text-base text-white/90 md:text-xl leading-relaxed">
              {t(lang, "hero_lede")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <BtnLink to="/$lang/sectors" params={{ lang }} variant="light">
                {t(lang, "hero_cta1")} <Arrow />
              </BtnLink>
              <BtnLink
                to="/$lang/contact"
                params={{ lang }}
                className="border border-white/60 bg-transparent text-white hover:bg-white hover:text-night font-semibold px-7"
              >
                {t(lang, "hero_cta2")}
              </BtnLink>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Key Figures / Group Metrics — Grid Blue Boxes */}
      <section className="container-site relative z-10 -mt-6 md:-mt-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { v: "stat_1_val", l: "stat_1_label" },
            { v: "stat_2_val", l: "stat_2_label" },
            { v: "stat_3_val", l: "stat_3_label" },
            { v: "stat_4_val", l: "stat_4_label" },
          ].map((item, i) => (
            <Reveal
              as="div"
              key={item.v}
              delay={i * 60}
              className="blue-grid-box blue-grid-box-tint relative rounded-2xl p-6 md:p-8 flex flex-col justify-center"
            >
              <BlueprintCorners />
              <div className="text-3xl font-black tracking-tight text-primary md:text-5xl ltr-iso">
                {t(lang, item.v as never)}
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-wider text-graphite md:text-sm">
                {t(lang, item.l as never)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About — text left, principles as a 2x2 stats-style grid right */}
      <section className="container-site py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <Reveal>
            <div className="corporate-badge mb-3">{t(lang, "about_label")}</div>
            <h2 className="text-3xl font-extrabold md:text-5xl text-foreground">
              {t(lang, "about_h2")}
            </h2>
            <p className="mt-6 max-w-md text-lg text-graphite leading-relaxed">
              {t(lang, "about_copy")}
            </p>
            <Link
              to="/$lang/about"
              params={{ lang }}
              className="group mt-8 inline-flex items-center gap-2 font-bold text-primary"
            >
              {t(lang, "about_link")}
              <Arrow className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </Reveal>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {(["pr_1", "pr_2", "pr_3", "pr_4"] as const).map((k, i) => (
                <Reveal
                  as="div"
                  key={k}
                  delay={i * 80}
                  className="blue-grid-box relative flex flex-col justify-between rounded-2xl p-6 md:p-7"
                >
                  <BlueprintCorners />
                  <span className="corporate-badge ltr-iso w-fit text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-base font-bold leading-snug md:text-lg text-foreground">
                    {t(lang, k)}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal
              delay={200}
              className="blue-grid-box relative overflow-hidden rounded-2xl bg-night p-8 text-white border-primary/35"
            >
              <BlueprintCorners />
              <div className="flex items-center justify-between">
                <div className="label-caps text-white/80">{t(lang, "chart_label")}</div>
                <span className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <p className="mt-2 max-w-sm text-sm text-white/70">{t(lang, "chart_note")}</p>
              <div className="mt-6">
                <GrowthChart />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sectors — Bento Grid of Blue Boxes */}
      <section className="container-site relative pb-20 md:pb-28">
        <DotGrid className="absolute -top-4 end-0 hidden lg:block" />
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="corporate-badge mb-3">{t(lang, "nav_sectors")}</div>
            <h2 className="text-3xl font-extrabold md:text-5xl">{t(lang, "sectors_h2")}</h2>
            <p className="mt-4 max-w-lg text-graphite">{t(lang, "sectors_intro")}</p>
          </div>
          <BtnLink to="/$lang/sectors" params={{ lang }} variant="secondary">
            {t(lang, "nav_sectors")} <Arrow />
          </BtnLink>
        </Reveal>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 100}>
              <Link
                to="/$lang/sectors/$sector"
                params={{ lang, sector: s.slug }}
                className="group blue-grid-box relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-5 md:p-6"
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
                      <span className="corporate-badge text-[11px]">{s.num}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                        {t(lang, "nav_sectors")}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-extrabold text-foreground transition-colors group-hover:text-primary md:text-2xl">
                      {tr(s.name, lang)}
                    </h3>
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

        {/* Executive Partnership Bar */}
        <Reveal
          delay={300}
          className="blue-grid-box relative mt-12 overflow-hidden rounded-3xl bg-night p-8 md:p-12 text-white shadow-xl border-primary/40"
        >
          <BlueprintCorners />
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="corporate-badge border-white/20 bg-white/10 text-white">
                {t(lang, "nav_partnerships")}
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-white md:text-3xl">
                {t(lang, "invite_h2")}
              </h3>
              <p className="mt-2 text-sm text-white/80 md:text-base leading-relaxed">
                {t(lang, "invite_copy")}
              </p>
            </div>
            <BtnLink to="/$lang/contact" params={{ lang }} variant="night">
              {t(lang, "cta_partnership")} <Arrow />
            </BtnLink>
          </div>
        </Reveal>
      </section>

      {/* Approach — image left, numbered steps in blue boxes right */}
      <section className="container-site relative pb-20 md:pb-28">
        <DotGrid className="absolute bottom-0 start-0 hidden lg:block" />
        <Reveal className="mb-10">
          <div className="corporate-badge mb-3">{t(lang, "nav_approach")}</div>
          <h2 className="text-3xl font-extrabold md:text-5xl">{t(lang, "approach_h2")}</h2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <Reveal>
            <div className="blue-grid-box relative overflow-hidden rounded-3xl p-4">
              <BlueprintCorners />
              <div className="overflow-hidden rounded-2xl">
                <Img
                  src={aboutImg}
                  alt={
                    lang === "ar"
                      ? "بيئة عمل مهنية هادئة"
                      : "A quiet professional working environment"
                  }
                  ratio="4 / 5"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </Reveal>
          <ol className="space-y-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal
                as="li"
                key={p.num}
                delay={i * 90}
                className="blue-grid-box relative flex items-start gap-5 rounded-2xl p-6"
              >
                <BlueprintCorners />
                <span className="corporate-badge ltr-iso text-xs shrink-0 mt-1">{p.num}</span>
                <div>
                  <h3 className="text-lg font-extrabold md:text-xl text-foreground">
                    {tr(p.title, lang)}
                  </h3>
                  <p className="mt-1 text-sm text-graphite md:text-base leading-relaxed">
                    {tr(p.body, lang)}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={380} className="pt-4">
              <BtnLink to="/$lang/approach" params={{ lang }} variant="secondary">
                {t(lang, "approach_link")} <Arrow />
              </BtnLink>
            </Reveal>
          </ol>
        </div>
      </section>

      {/* Strategic Perspectives / Insights — Bento Grid of Blue Boxes */}
      <section className="container-site pb-20 md:pb-28">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="label-caps mb-3 text-primary">{t(lang, "about_label")}</div>
            <h2 className="text-3xl font-extrabold md:text-5xl">{t(lang, "insights_h2")}</h2>
            <p className="mt-4 max-w-lg text-graphite">{t(lang, "insights_intro")}</p>
          </div>
          <BtnLink to="/$lang/contact" params={{ lang }} variant="secondary">
            {t(lang, "cta_partnership")} <Arrow />
          </BtnLink>
        </Reveal>
        <ul className="grid gap-6 md:grid-cols-3">
          {([1, 2, 3] as const).map((num, i) => (
            <Reveal
              as="li"
              key={num}
              delay={i * 100}
              className="blue-grid-box blue-grid-box-tint relative flex flex-col justify-between rounded-3xl p-8"
            >
              <BlueprintCorners />
              <div>
                <span className="corporate-badge text-xs">
                  {t(lang, `insight_${num}_tag` as never)}
                </span>
                <h3 className="mt-5 text-xl font-bold leading-snug text-foreground md:text-2xl">
                  {t(lang, `insight_${num}_title` as never)}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-graphite md:text-base">
                  {t(lang, `insight_${num}_body` as never)}
                </p>
              </div>
              <div className="mt-8 border-t border-primary/15 pt-5">
                <Link
                  to="/$lang/partnerships"
                  params={{ lang }}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  {t(lang, "nav_partnerships")}
                  <Arrow className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <ClosingBand lang={lang} />
    </div>
  );
}
