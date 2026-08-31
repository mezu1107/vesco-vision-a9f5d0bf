import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal, ProcessFlow } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { loadCmsPage } from "@/lib/cms-page";

export const Route = createFileRoute("/quality")({
  loader: () => loadCmsPage("quality"),
  head: () => ({ meta: [{ title: "Quality Management — Vesco Science Korea" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const cms: any = Route.useLoaderData();

  const hero = cms?.hero ?? {};
  const flow: string[] = cms?.flow ?? [];
  const systems: string[] = cms?.systems ?? [];
  const cleanroom = cms?.cleanroomSection ?? {};
  const char = cms?.characterization ?? {};
  const groups: { title: string; items: string[] }[] = char.groups ?? [];

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow ?? t("quality.eyebrow")}
        title={hero.title ?? t("quality.title")}
        lead={hero.intro ?? t("quality.intro")}
        image={hero.image ?? "/assets/qc-lab.jpg"}
        imageAlt="Vesco Science Korean analytical QC laboratory"
        crumb={{ label: t("nav.quality"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* Process Flow */}
      <Section>
        <SectionHeading eyebrow={t("quality.eyebrow")} title={t("quality.title")} />
        <div className="mt-12">
          <ProcessFlow steps={flow} />
        </div>
      </Section>

      {/* Cleanroom Section */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={cleanroom.image ?? "/assets/korean-cleanroom-facility.jpg"}
              alt="Korean cGMP cleanroom"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow={cleanroom.eyebrow ?? "Continuous Monitoring"}
              title={cleanroom.title ?? "ISO Class 5 Cleanroom Environmental & Microbiological Controls"}
            />
            {cleanroom.body && (
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">{cleanroom.body}</p>
            )}
          </Reveal>
        </div>
      </Section>

      {/* Quality Systems Grid */}
      <Section tone="white">
        <SectionHeading eyebrow={t("quality.eyebrow")} title={cms?.systemsTitle ?? t("quality.systemsTitle")} />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {systems.map((sys, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="h-full bg-card p-7">
                <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-[0.98rem] font-medium text-navy">{sys}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Characterization Groups */}
      {groups.length > 0 && (
        <Section tone="muted">
          <SectionHeading
            eyebrow={char.eyebrow ?? t("characterization.eyebrow")}
            title={char.title ?? t("characterization.title")}
            intro={char.intro ?? t("characterization.intro")}
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((g, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card-flat h-full p-7">
                  <h3 className="text-[1.02rem] font-semibold text-navy">{g.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {g.items.map((it, j) => (
                      <li key={j} className="text-[0.9rem] text-muted-foreground">
                        <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CTABand />
    </>
  );
}
