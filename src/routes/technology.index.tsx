import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal, NumberedCard, ProcessFlow } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { loadCmsPage } from "@/lib/cms-page";

export const Route = createFileRoute("/technology/")({
  loader: () => loadCmsPage("technology"),
  head: () => ({ meta: [{ title: "Technology Platforms — Vesco Science Korea" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const cms: any = Route.useLoaderData();

  const hero = cms?.hero ?? {};
  const cards: { num: string; slug: string; title: string; body: string }[] = cms?.cards ?? [];
  const exosome = cms?.exosome ?? {};
  const steps: string[] = exosome.steps ?? [];

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow ?? t("technology.eyebrow")}
        title={hero.title ?? t("technology.title")}
        lead={hero.lead ?? t("pages.technologyIndex.lead")}
        image={hero.image ?? "/assets/molecular.jpg"}
        imageAlt="Molecular nanovesicle structure"
        crumb={{ label: t("nav.technology"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <SectionHeading eyebrow={t("technology.eyebrow")} title={t("technology.title")} intro={t("technology.intro")} />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.slug || i} delay={i * 60}>
              <NumberedCard num={c.num} title={c.title} body={c.body} to="/technology/$slug" params={{ slug: c.slug }} />
            </Reveal>
          ))}
        </div>
      </Section>

      {steps.length > 0 && (
        <Section tone="navy">
          <SectionHeading invert eyebrow={exosome.eyebrow ?? t("exosome.eyebrow")} title={exosome.processTitle ?? t("exosome.processTitle")} intro={exosome.body2 ?? t("exosome.body2")} />
          <div className="mt-12">
            <ProcessFlow steps={steps} invert />
          </div>
        </Section>
      )}

      <CTABand />
    </>
  );
}
