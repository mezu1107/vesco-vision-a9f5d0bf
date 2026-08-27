import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal, TealButton } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import cleanroom from "@/assets/cleanroom.jpg";
import koreanLabTeam from "@/assets/korean-lab-team.jpg";
import seoulCampus from "@/assets/seoul-biotech-campus.jpg";
import koreanScientist from "@/assets/korean-scientist-vials.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vesco Science — Korean Regenerative Biotechnology" },
      {
        name: "description",
        content:
          "Vesco Science is a Korea-based biotechnology company uniting exosome R&D, regenerative formulation, manufacturing and quality control under one operation in Seoul.",
      },
      { property: "og:title", content: "About Vesco Science — Korean Regenerative Biotechnology" },
      {
        property: "og:description",
        content:
          "Research, formulation, manufacturing and quality control handled as one connected operation in Korea.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Block = { title: string; body: string };
type Milestone = { year: string; text: string };
type StorySection = {
  eyebrow: string;
  title: string;
  body1: string;
  body2: string;
  imageAlt: string;
};
type ValuesSection = { eyebrow: string; title: string; items: Block[] };
type MilestonesSection = { eyebrow: string; title: string; items: Milestone[] };
type LocationSection = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  imageAlt: string;
};
type PeopleSection = { eyebrow: string; title: string; body: string; cta: string; imageAlt: string };

function Page() {
  const { t, tx } = useI18n();
  const blocks = tx<Block[]>("pages.about.blocks") ?? [];
  const points = tx<string[]>("intro.points") ?? [];
  const story = tx<StorySection>("pages.about.story");
  const values = tx<ValuesSection>("pages.about.values");
  const milestones = tx<MilestonesSection>("pages.about.milestones");
  const location = tx<LocationSection>("pages.about.location");
  const people = tx<PeopleSection>("pages.about.people");

  return (
    <>
      <PageHero
        eyebrow={t("pages.about.eyebrow")}
        title={t("pages.about.title")}
        lead={t("pages.about.lead")}
        image={cleanroom}
        imageAlt={t("intro.imageAlt")}
        crumb={{ label: t("nav.about"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* ---------- COMPANY OVERVIEW ---------- */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <SectionHeading
              eyebrow={t("intro.eyebrow")}
              title={t("intro.title")}
              intro={t("intro.body1")}
            />
            <p className="mt-6 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t("intro.body2")}
            </p>
          </div>
          <Reveal>
            <ul className="grid gap-px bg-hairline">
              {points.map((p) => (
                <li key={p} className="bg-card px-6 py-4 text-[0.95rem] text-navy">
                  <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ---------- OUR STORY ---------- */}
      {story ? (
        <Section tone="white">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative">
                <img
                  src={koreanLabTeam}
                  alt={story.imageAlt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                  <p className="eyebrow">{t("meta.company")}</p>
                  <p className="mt-2 text-[0.9rem] text-navy">{t("meta.tagline")}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <SectionHeading eyebrow={story.eyebrow} title={story.title} />
                <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                  {story.body1}
                </p>
                <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                  {story.body2}
                </p>
              </div>
            </Reveal>
          </div>
        </Section>
      ) : null}

      {/* ---------- VALUES ---------- */}
      {values ? (
        <Section tone="muted">
          <Reveal>
            <SectionHeading eyebrow={values.eyebrow} title={values.title} />
          </Reveal>
          <div className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {values.items.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <article className="h-full bg-card p-8">
                  <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[1.05rem] font-semibold text-navy">{v.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">
                    {v.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      {/* ---------- MILESTONES ---------- */}
      {milestones ? (
        <section className="relative isolate overflow-hidden bg-navy">
          <div className="absolute inset-0 navy-grid opacity-30" />
          <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <SectionHeading eyebrow={milestones.eyebrow} title={milestones.title} invert />
            </Reveal>
            <ol className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-7">
              {milestones.items.map((m, i) => (
                <Reveal key={m.year} delay={i * 60}>
                  <li className="h-full bg-navy-deep/60 p-6">
                    <span className="font-display text-[1.15rem] font-bold tracking-[0.08em] text-teal">
                      {m.year}
                    </span>
                    <p className="mt-4 text-[0.86rem] leading-relaxed text-white/75">{m.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* ---------- POSITION / FOCUS / PARTNERS ---------- */}
      <Section tone="white">
        <div className="grid gap-8 md:grid-cols-3">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <article className="card-flat h-full p-8">
                <h3 className="text-[1.15rem] font-semibold text-navy">{b.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- SEOUL HEADQUARTERS ---------- */}
      {location ? (
        <Section>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <SectionHeading eyebrow={location.eyebrow} title={location.title} />
                <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                  {location.body}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {location.points.map((p) => (
                    <li
                      key={p}
                      className="border border-hairline bg-card px-3.5 py-2 text-[0.78rem] font-medium text-navy"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <TealButton to="/facility" variant="outline">
                    {t("facility.title")}
                  </TealButton>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <img
                src={seoulCampus}
                alt={location.imageAlt}
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
          </div>
        </Section>
      ) : null}

      {/* ---------- OUR PEOPLE ---------- */}
      {people ? (
        <Section tone="white">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img
                src={koreanScientist}
                alt={people.imageAlt}
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={120}>
              <div>
                <SectionHeading eyebrow={people.eyebrow} title={people.title} />
                <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                  {people.body}
                </p>
                <div className="mt-10">
                  <TealButton to="/research" variant="outline">
                    {people.cta}
                  </TealButton>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      ) : null}

      {/* ---------- EXPLORE FURTHER ---------- */}
      <Section tone="muted">
        <SectionHeading
          eyebrow={t("research.eyebrow")}
          title={t("research.title")}
          intro={t("research.intro")}
        />
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/research"
            className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science"
          >
            {t("research.title")}
          </Link>
          <Link
            to="/about/mission"
            className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science"
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/facility"
            className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science"
          >
            {t("facility.title")}
          </Link>
          <Link
            to="/about/network"
            className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science"
          >
            {t("partnership.eyebrow")}
          </Link>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
