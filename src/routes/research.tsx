import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { loadCmsPage } from "@/lib/cms-page";

export const Route = createFileRoute("/research")({
  loader: () => loadCmsPage("research"),
  head: () => ({ meta: [{ title: "Research & Development — Vesco Science Korea" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const cms: any = Route.useLoaderData();

  const hero = cms?.hero ?? {};
  const areas = cms?.areas ?? {};
  const team = cms?.team ?? {};
  const seoulSection = cms?.seoulSection ?? {};
  const scientistsSection = cms?.scientistsSection ?? {};

  const areaItems: string[] = areas.items ?? [];
  const teamItems: string[] = team.items ?? [];

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow ?? t("research.eyebrow")}
        title={hero.title ?? t("research.title")}
        lead={hero.intro ?? t("research.intro")}
        image={hero.image ?? "/assets/research-team.jpg"}
        imageAlt="Vesco Science Korean senior R&D scientific team"
        crumb={{ label: t("research.title"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* Research Areas */}
      <Section>
        <SectionHeading eyebrow={areas.eyebrow ?? t("research.eyebrow")} title={areas.title ?? t("research.areasTitle")} />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {areaItems.map((a, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="group h-full bg-card p-8 transition-colors hover:bg-secondary">
                <span className="font-display text-[0.75rem] font-bold tracking-[0.18em] text-teal">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-[1.1rem] font-semibold text-navy">{a}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Seoul Section */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img src={seoulSection.image ?? "/assets/seoul-biotech-campus.jpg"} alt="Seoul biotech campus" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow={seoulSection.eyebrow ?? "Biotech Hub"} title={seoulSection.title ?? "State-of-the-Art Biological R&D Headquarters in Seoul"} />
            {seoulSection.body && <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">{seoulSection.body}</p>}
          </Reveal>
        </div>
      </Section>

      {/* Scientists Section */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <SectionHeading eyebrow={scientistsSection.eyebrow ?? "Scientific Leadership"} title={scientistsSection.title ?? "Ph.D. Level Korean Biological R&D Scientists"} />
            {scientistsSection.body && <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">{scientistsSection.body}</p>}
          </Reveal>
          <Reveal>
            <img src={scientistsSection.image ?? "/assets/korean-bio-researchers.jpg"} alt="Korean scientists" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </Reveal>
        </div>
      </Section>

      {/* Team Disciplines */}
      <Section tone="navy">
        <SectionHeading invert eyebrow={t("research.eyebrow")} title={team.title ?? t("research.teamTitle")} />
        <div className="mt-12 flex flex-wrap gap-3">
          {teamItems.map((m, i) => (
            <span key={i} className="rounded-sm border border-white/15 px-5 py-2.5 text-[0.85rem] text-white/75">{m}</span>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
