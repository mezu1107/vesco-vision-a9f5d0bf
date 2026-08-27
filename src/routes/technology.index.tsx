import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal, NumberedCard, ProcessFlow } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import molecular from "@/assets/molecular.jpg";
import koreanCleanroom from "@/assets/korean-cleanroom-facility.jpg";
import koreanScientists from "@/assets/korean-bio-researchers.jpg";

export const Route = createFileRoute("/technology/")({
  head: () => ({
    meta: [
      { title: "Technology Platforms — Vesco Science Korea" },
      {
        name: "description",
        content:
          "Six proprietary Korean biotechnology platforms: exosome isolation, PDRN/PN extraction, ultra-low temperature lyophilization, biomimetic peptide synthesis, cold-chain preservation, and custom formulation.",
      },
      { property: "og:title", content: "Technology Platforms — Vesco Science Korea" },
      {
        property: "og:description",
        content: "Biotechnology at the cellular level: six core Korean R&D platforms power every Vesco Science formulation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: Page,
});

type Card = { num: string; slug: string; title: string; body: string };

function Page() {
  const { t, tx } = useI18n();
  const cards = tx<Card[]>("technology.cards") ?? [];
  const steps = tx<string[]>("exosome.steps") ?? [];

  return (
    <>
      <PageHero
        eyebrow={t("technology.eyebrow")}
        title={t("technology.title")}
        lead={t("pages.technologyIndex.lead")}
        image={molecular}
        imageAlt="Molecular nanovesicle structure representation at Vesco Science Korea"
        crumb={{ label: t("nav.technology"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* ---------- CORE PLATFORMS GRID ---------- */}
      <Section>
        <SectionHeading
          eyebrow={t("technology.eyebrow")}
          title={t("technology.title")}
          intro={t("technology.intro")}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <NumberedCard
                num={c.num}
                title={c.title}
                body={c.body}
                to="/technology/$slug"
                params={{ slug: c.slug }}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- KOREAN CLEANROOM NANOTECHNOLOGY SUITE (IMAGE 2) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={koreanCleanroom}
                alt="Nanofabrication and tangential flow filtration equipment in Korean biomanufacturing facility"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Nanofabrication</p>
                <p className="mt-2 text-[0.9rem] text-navy">Tangential Flow Filtration & Isolation</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Precision Engineering"
                title="Tangential Flow Filtration & Microfluidic Purification"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Our cleanroom facility in Seoul utilizes Tangential Flow Filtration (TFF) and microfluidic sorting to isolate intact 30–150 nm extracellular vesicles without damaging lipid membrane integrity or stripping surface signal peptides.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                This process yields double the particle density of conventional ultracentrifugation while eliminating cell debris and non-specific protein aggregates.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- PROCESS FLOW ---------- */}
      <Section tone="navy">
        <SectionHeading
          invert
          eyebrow={t("exosome.eyebrow")}
          title={t("exosome.processTitle")}
          intro={t("exosome.body2")}
        />
        <div className="mt-12">
          <ProcessFlow steps={steps} invert />
        </div>
      </Section>

      {/* ---------- KOREAN FORMULATION R&D & PLATFORM VERIFICATION (IMAGE 3) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Platform Validation"
                title="Continuous Biopharmaceutical Platform Research in Seoul"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Every technology platform undergoes multi-tiered verification in our Seoul R&D center. From nucleic acid sequence optimization to freeze-drying cake structure analytics, our scientists ensure maximum reproducibility.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                This scientific foundation allows our OEM/ODM partners to launch high-performance skin and hair rejuvenation products with backed laboratory data.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <img
                src={koreanScientists}
                alt="Korean biological scientists verifying formulation parameters for biotech platforms"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Platform Testing</p>
                <p className="mt-2 text-[0.9rem] text-navy">Korean Biological R&D Validation</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

