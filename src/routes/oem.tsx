import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal, TealButton } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { loadCmsPage } from "@/lib/cms-page";

export const Route = createFileRoute("/oem")({
  loader: () => loadCmsPage("oem"),
  head: () => ({ meta: [{ title: "OEM / ODM Manufacturing — Vesco Science Korea" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const cms: any = Route.useLoaderData();

  const hero = cms?.hero ?? {};
  const oem = cms?.oem ?? {};
  const odm = cms?.odm ?? {};
  const mfgSection = cms?.manufacturingSection ?? {};
  const process = cms?.process ?? {};
  const customDev = cms?.customDev ?? {};
  const privateLabel = cms?.privateLabel ?? {};
  const regulatory = cms?.regulatory ?? {};

  const oemSteps: string[] = oem.steps ?? [];
  const odmSteps: string[] = odm.steps ?? [];
  const processSteps: { num: string; title: string; body: string }[] = process.steps ?? [];
  const inputs: string[] = customDev.inputs ?? [];
  const privatePoints: string[] = privateLabel.points ?? [];
  const regPoints: string[] = regulatory.points ?? [];

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow ?? t("oem.eyebrow")}
        title={hero.title ?? t("oem.title")}
        lead={hero.subtitle ?? t("oem.subtitle")}
        image={hero.image ?? "/assets/cleanroom.jpg"}
        imageAlt="Vesco Science cGMP cleanroom facility"
        crumb={{ label: t("nav.oem"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* OEM vs ODM */}
      <Section id="models">
        <div className="grid gap-px bg-hairline lg:grid-cols-2">
          {[
            { title: oem.title ?? t("oem.oemTitle"), body: oem.body ?? t("oem.oemBody"), steps: oemSteps },
            { title: odm.title ?? t("oem.odmTitle"), body: odm.body ?? t("oem.odmBody"), steps: odmSteps },
          ].map((col, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="h-full bg-card p-8 md:p-10">
                <h2 className="font-display text-[1.6rem] font-semibold text-navy">{col.title}</h2>
                <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">{col.body}</p>
                <ol className="mt-8 grid gap-3">
                  {col.steps.map((s, si) => (
                    <li key={si} className="flex items-center gap-4 border-b border-hairline pb-3">
                      <span className="font-display text-[0.72rem] font-bold tracking-[0.16em] text-teal">{String(si + 1).padStart(2, "0")}</span>
                      <span className="text-[0.95rem] text-navy">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Manufacturing Section */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img src={mfgSection.image ?? "/assets/korean-cleanroom-facility.jpg"} alt="Manufacturing" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow={mfgSection.eyebrow ?? "World-Class Scale"} title={mfgSection.title ?? "Advanced Korean Contract Manufacturing Infrastructure"} />
            {mfgSection.body && <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">{mfgSection.body}</p>}
          </Reveal>
        </div>
      </Section>

      {/* 9-Stage Process */}
      <Section id="process" tone="navy">
        <SectionHeading invert eyebrow={process.eyebrow ?? t("oem.processEyebrow")} title={process.title ?? t("oem.processTitle")} />
        <ol className="mt-14 relative grid gap-px md:grid-cols-3">
          {processSteps.map((p, i) => (
            <Reveal key={i} delay={i * 50}>
              <li className="relative h-full bg-white/[0.04] p-7 pl-16 outline outline-white/10 md:pl-7">
                <span className="absolute top-7 left-4 flex h-[26px] w-[26px] items-center justify-center rounded-full border border-teal/50 bg-navy-deep font-display text-[0.65rem] font-bold text-teal md:static md:mb-4 md:flex">{p.num}</span>
                <h3 className="text-[1.05rem] font-semibold text-white md:mt-4">{p.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-white/60">{p.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Custom Dev */}
      <Section id="custom-formulation" tone="white">
        <SectionHeading eyebrow={customDev.eyebrow ?? t("oem.custom.eyebrow")} title={customDev.title ?? t("oem.custom.title")} intro={customDev.intro ?? t("oem.custom.intro")} />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {inputs.map((inp, i) => (
            <div key={i} className="bg-card px-6 py-5 text-[0.95rem] text-navy">
              <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />{inp}
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <TealButton to="/custom-development">{customDev.cta ?? t("oem.custom.cta")}</TealButton>
          <TealButton to="/contact" variant="outline">{t("nav.cta")}</TealButton>
        </div>
      </Section>

      {/* Private Label */}
      <Section id="private-label">
        <SectionHeading eyebrow={privateLabel.eyebrow ?? t("privateLabel.eyebrow")} title={privateLabel.title ?? t("privateLabel.title")} intro={privateLabel.intro ?? t("privateLabel.intro")} />
        <ul className="mt-10 grid gap-px bg-hairline">
          {privatePoints.map((p, i) => (
            <li key={i} className="bg-card px-6 py-4 text-[0.95rem] text-navy">
              <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />{p}
            </li>
          ))}
        </ul>
      </Section>

      {/* Regulatory */}
      <Section id="regulatory" tone="navy">
        <SectionHeading invert eyebrow={regulatory.eyebrow ?? t("regulatorySupport.eyebrow")} title={regulatory.title ?? t("regulatorySupport.title")} intro={regulatory.intro ?? t("regulatorySupport.intro")} />
        <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {regPoints.map((p, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="h-full bg-white/[0.04] p-6 outline outline-white/10">
                <span className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-teal">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-[0.95rem] text-white/85">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {regulatory.note && <p className="mt-10 max-w-3xl text-[0.85rem] text-white/50">{regulatory.note}</p>}
      </Section>

      <CTABand />
    </>
  );
}
