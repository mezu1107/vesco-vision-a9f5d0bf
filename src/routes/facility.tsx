import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal, ProcessFlow } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { loadCmsPage } from "@/lib/cms-page";

export const Route = createFileRoute("/facility")({
  loader: () => loadCmsPage("facility"),
  head: () => ({ meta: [{ title: "Korean cGMP Manufacturing Facility — Vesco Science Seoul" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const cms: any = Route.useLoaderData();

  const hero = cms?.hero ?? {};
  const areas: { title: string; body: string }[] = cms?.areas ?? [];
  const cleanroom = cms?.cleanroomSection ?? {};
  const coldChain = cms?.coldChainSection ?? {};

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow ?? t("facility.eyebrow")}
        title={hero.title ?? t("facility.title")}
        lead={hero.intro ?? t("facility.intro")}
        image={hero.image ?? "/assets/vials.jpg"}
        imageAlt="Sterile glass vials inside Vesco Science Korean biomanufacturing plant"
        crumb={{ label: t("facility.eyebrow"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* Facility Areas */}
      <Section>
        <div className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={i} delay={i * 60}>
              <article className="h-full bg-card p-8">
                <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[1.1rem] font-semibold text-navy">{a.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">{a.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Cleanroom Section */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={cleanroom.image ?? "/assets/korean-cleanroom-facility.jpg"}
              alt="Korean cleanroom facility"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow={cleanroom.eyebrow ?? "Cleanroom Infrastructure"}
              title={cleanroom.title ?? "ISO-Certified cGMP Production Suites in Seoul"}
            />
            {cleanroom.body && (
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">{cleanroom.body}</p>
            )}
          </Reveal>
        </div>
      </Section>

      {/* Process Flow */}
      <Section tone="navy">
        <SectionHeading invert eyebrow={t("quality.eyebrow")} title={t("quality.title")} intro={t("quality.intro")} />
        <div className="mt-12">
          <ProcessFlow steps={t("quality.flow") ? ["Raw Material","Production","In-process QC","Final QC","Batch Release","Storage","Distribution"] : []} invert />
        </div>
      </Section>

      {/* Cold Chain Section */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <SectionHeading
              eyebrow={coldChain.eyebrow ?? "Cold Chain & Logistics"}
              title={coldChain.title ?? "Integrated Cold Storage & Incheon Air Cargo Dispatch"}
            />
            {coldChain.body && (
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">{coldChain.body}</p>
            )}
          </Reveal>
          <Reveal>
            <img
              src={coldChain.image ?? "/assets/korean-international-logistics.jpg"}
              alt="Cold chain logistics"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
