import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  SectionHeading,
  Reveal,
  ProcessFlow,
} from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import qcLab from "@/assets/qc-lab.jpg";
import koreanCleanroom from "@/assets/korean-cleanroom-facility.jpg";
import koreanScientists from "@/assets/korean-bio-researchers.jpg";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality Management — Vesco Science Korea" },
      {
        name: "description",
        content:
          "Documented Korean MFDS cGMP control: raw material intake, in-process analytical QC, sterile batch release, stability testing, and complete global dossier export compliance.",
      },
      { property: "og:title", content: "Quality Management — Vesco Science Korea" },
      {
        property: "og:description",
        content: "Quality from raw material to shipment: cGMP control points rigorously executed in Seoul.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: Page,
});

function Page() {
  const { t, tx } = useI18n();
  const flow = tx<string[]>("quality.flow") ?? [];
  const systems = tx<string[]>("quality.systems") ?? [];
  const groups = tx<{ title: string; items: string[] }[]>("characterization.groups") ?? [];

  return (
    <>
      <PageHero
        eyebrow={t("quality.eyebrow")}
        title={t("quality.title")}
        lead={t("quality.intro")}
        image={qcLab}
        imageAlt="Vesco Science Korean analytical QC laboratory and HPLC testing suite"
        crumb={{ label: t("nav.quality"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* ---------- PROCESS FLOW ---------- */}
      <Section>
        <SectionHeading eyebrow={t("quality.eyebrow")} title={t("quality.title")} />
        <div className="mt-12">
          <ProcessFlow steps={flow} />
        </div>
      </Section>

      {/* ---------- KOREAN CGMP CLEANROOM ENVIRONMENTAL CONTROL (IMAGE 2) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={koreanCleanroom}
                alt="Environmental monitoring and differential pressure sensor controls in Korean cGMP cleanroom"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Environmental Control</p>
                <p className="mt-2 text-[0.9rem] text-navy">Class 100 / ISO Class 5 Cleanroom Standards</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Continuous Monitoring"
                title="ISO Class 5 Cleanroom Environmental & Microbiological Controls"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Our cleanroom suites in South Korea operate under continuous automated HVAC environmental monitoring. Particle counters, differential pressure gauges, and microbiological settle plates ensure an ultra-pure environment for exosome formulation and sterile vial filling.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                Every batch is subjected to 14-day sterility validation, bacterial endotoxin testing (LAL assay), and heavy metal residue screening before batch clearance.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- QUALITY SYSTEMS GRID ---------- */}
      <Section tone="white">
        <SectionHeading eyebrow={t("quality.eyebrow")} title={t("quality.systemsTitle")} />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {systems.map((sys, i) => (
            <Reveal key={sys} delay={i * 50}>
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

      {/* ---------- KOREAN ANALYTICAL TESTING & CHARACTERIZATION (IMAGE 3) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Advanced Assay Desk"
                title="Comprehensive Nanoparticle Characterization & Assay Protocols"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Using Nanoparticle Tracking Analysis (NTA), Transmission Electron Microscopy (TEM), and Western Blotting, our Seoul analytical team measures vesicle concentration, hydrodynamic size distribution, and specific protein surface markers (CD63, CD81, CD9).
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                These standardized characterization packages provide international B2B partners with unassailable data required for FDA, CPNP, and MFDS regulatory filings.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <img
                src={koreanScientists}
                alt="Korean biological QC scientists performing Western Blot and NTA particle size testing"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Assay Verification</p>
                <p className="mt-2 text-[0.9rem] text-navy">Exosome Marker & Purity Desk</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- CHARACTERIZATION GROUPS ---------- */}
      <Section tone="muted">
        <SectionHeading
          eyebrow={t("characterization.eyebrow")}
          title={t("characterization.title")}
          intro={t("characterization.intro")}
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div className="card-flat h-full p-7">
                <h3 className="text-[1.02rem] font-semibold text-navy">{g.title}</h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="text-[0.9rem] text-muted-foreground">
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

      <CTABand />
    </>
  );
}

