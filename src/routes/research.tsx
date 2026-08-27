import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import researchTeam from "@/assets/research-team.jpg";
import seoulCampus from "@/assets/seoul-biotech-campus.jpg";
import koreanScientists from "@/assets/korean-bio-researchers.jpg";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Development — Vesco Science Korea" },
      {
        name: "description",
        content:
          "Pioneering exosome isolation, PDRN stabilization, biomimetic peptide synthesis, and analytical method development at Vesco Science Korea R&D Institute.",
      },
      { property: "og:title", content: "Research & Development — Vesco Science Korea" },
      {
        property: "og:description",
        content: "Korean biological R&D excellence: cutting-edge nanovesicle research and clinical translation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: Page,
});

function Page() {
  const { t, tx } = useI18n();
  const areas = tx<string[]>("research.areas") ?? [];
  const team = tx<string[]>("research.team") ?? [];

  return (
    <>
      <PageHero
        eyebrow={t("research.eyebrow")}
        title={t("research.title")}
        lead={t("research.intro")}
        image={researchTeam}
        imageAlt="Vesco Science Korean senior R&D scientific team in Seoul laboratory"
        crumb={{ label: t("research.title"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* ---------- RESEARCH AREAS GRID ---------- */}
      <Section>
        <SectionHeading eyebrow={t("research.eyebrow")} title={t("research.areasTitle")} />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a} delay={i * 60}>
              <div className="group h-full bg-card p-8 transition-colors hover:bg-secondary">
                <span className="font-display text-[0.75rem] font-bold tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[1.1rem] font-semibold text-navy">{a}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- SEOUL BIOTECH RESEARCH CAMPUS (IMAGE 2) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={seoulCampus}
                alt="Vesco Science R&D Innovation Campus in Seoul, South Korea"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">R&D Campus</p>
                <p className="mt-2 text-[0.9rem] text-navy">Seoul Biological Innovation Center</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Biotech Hub"
                title="State-of-the-Art Biological R&D Headquarters in Seoul"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Located in Seoul's biotechnology research district, our R&D center brings together multidisciplinary teams of cell biologists, polymer chemists, and pharmaceutical formulation engineers.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                We maintain active collaborative agreements with leading Korean university medical centers and government-backed nanomedicine research consortia.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- KOREAN EXPERT RESEARCHERS (IMAGE 3) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Scientific Leadership"
                title="Ph.D. Level Korean Biological R&D Scientists"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Our R&D division is led by veteran Korean biopharmaceutical researchers with over 15 years of individual expertise in stem cell conditioned media, exosome surface modification, and lyophilization kinetics.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                We regularly publish original findings in peer-reviewed biological journals and file international patents for our proprietary exosome stabilization technologies.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <img
                src={koreanScientists}
                alt="Korean biological R&D scientists performing exosome isolation experiments"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Expert Team</p>
                <p className="mt-2 text-[0.9rem] text-navy">Senior Biological Research Staff</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- RESEARCH SCIENTISTS DISCIPLINE GRID ---------- */}
      <Section tone="navy">
        <SectionHeading invert eyebrow={t("research.eyebrow")} title={t("research.teamTitle")} />
        <div className="mt-12 flex flex-wrap gap-3">
          {team.map((m) => (
            <span
              key={m}
              className="rounded-sm border border-white/15 px-5 py-2.5 text-[0.85rem] text-white/75"
            >
              {m}
            </span>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}

