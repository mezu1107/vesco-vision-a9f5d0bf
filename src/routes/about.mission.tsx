import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { loadCmsPage } from "@/lib/cms-page";
import research from "@/assets/research-team.jpg";
import koreanBioResearchers from "@/assets/korean-bio-researchers.jpg";
import koreanSeoulCampus from "@/assets/korean-seoul-skyscraper-hub.jpg";

export const Route = createFileRoute("/about/mission")({
  loader: () => loadCmsPage("about-mission"),
  head: () => ({
    meta: [
      { title: "Our Mission & Vision — Vesco Science Korea" },
      {
        name: "description",
        content:
          "The mission, vision and operating principles behind Vesco Science: advancing Korean regenerative biotechnology from cellular science to scalable, cGMP-documented manufacturing in Seoul.",
      },
      { property: "og:title", content: "Our Mission & Vision — Vesco Science Korea" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about/mission" }],
  }),
  component: Page,
});

const FALLBACK_VALUES = [
  { title: "Science First", body: "Every formulation decision is traced back to characterization data, not marketing language." },
  { title: "Documented Process", body: "Development, production and release steps are specified, executed and recorded under MFDS cGMP standards." },
  { title: "Reproducibility", body: "Batch-to-batch consistency is treated as a manufacturing requirement, not an outcome." },
  { title: "Partner Confidentiality", body: "OEM/ODM programs, formulations and specifications remain the exclusive property of the client." },
  { title: "Regulatory Readiness", body: "Documentation is prepared with global export and destination-market requirements in mind." },
  { title: "Verified Claims", body: "We publish what can be supported. Unverified data is withheld until analytically confirmed." },
];

function Page() {
  const { locale, t } = useI18n();
  const cms: any = Route.useLoaderData();

  // CMS data wins; fall back to hardcoded defaults
  const hero = cms?.hero ?? {};
  const missionTitle = cms?.missionTitle ?? (locale === "ko" ? "미션" : "Mission");
  const missionBody = cms?.missionBody ?? "To develop and manufacture regenerative biotechnology — exosome, PDRN/PN, peptide and lyophilized formulations — under controlled, documented processes that partners can rely on batch after batch.";
  const visionTitle = cms?.visionTitle ?? (locale === "ko" ? "비전" : "Vision");
  const visionBody = cms?.visionBody ?? "To be recognized as Korea's premier biotechnology and advanced regenerative manufacturing partner: the scientific and industrial infrastructure behind next-generation global aesthetic products.";
  const values: { title: string; body: string }[] = Array.isArray(cms?.values) && cms.values.length > 0 ? cms.values : FALLBACK_VALUES;
  const researchSec = cms?.researchSection ?? {};
  const seoulSec = cms?.seoulSection ?? {};

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow ?? (locale === "ko" ? "회사소개 / 미션" : "About / Mission")}
        title={hero.title ?? (locale === "ko" ? "명확한 목적을 가진 한국 바이오 과학" : "Science with a Defined Purpose")}
        lead={hero.lead ?? "Our mission is to make advanced Korean regenerative biotechnology reproducible, documented and available to healthcare and aesthetic partners worldwide."}
        image={hero.image ?? research}
        imageAlt="Vesco Science Korean research team working in the laboratory"
        crumb={{ label: locale === "ko" ? "미션" : "Mission", homeLabel: t("common.breadcrumbHome") }}
      />

      {/* MISSION & VISION */}
      <Section>
        <div className="grid gap-px bg-hairline lg:grid-cols-2">
          {[
            { title: missionTitle, body: missionBody },
            { title: visionTitle, body: visionBody },
          ].map((b, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="h-full bg-card p-10">
                <h2 className="font-display text-[1.6rem] font-semibold text-navy">{b.title}</h2>
                <p className="mt-5 text-[1rem] leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* RESEARCH SECTION (IMAGE 2) */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={researchSec.image ?? koreanBioResearchers}
                alt="Korean biotechnology researchers collaborating on exosome formulations"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">R&D Scientific Precision</p>
                <p className="mt-2 text-[0.9rem] text-navy">Cellular Characterization & Nanovesicle Lab</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow={researchSec.eyebrow ?? "Scientific Rigor"}
                title={researchSec.title ?? "Pioneering Korean Cellular & Exosome Research"}
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                {researchSec.body1 ?? "Our scientific commitment is rooted in Korean biotechnology innovation. By combining high-purity exosome isolation techniques with state-of-the-art nanoparticle tracking analysis, we ensure every molecular active meets strict bio-identity standards."}
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                {researchSec.body2 ?? "We believe scientific progress requires continuous verification. Our R&D personnel collaborate with leading academic researchers in Seoul to benchmark nanovesicle stability and bio-absorption efficiency across diverse skin matrices."}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* OPERATING VALUES */}
      <Section tone="muted">
        <SectionHeading
          eyebrow={locale === "ko" ? "운영 원칙" : "Operating Principles"}
          title={locale === "ko" ? "일하는 방식" : "How We Work"}
        />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={i} delay={i * 50}>
              <article className="h-full bg-card p-8">
                <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[1.08rem] font-semibold text-navy">{v.title}</h3>
                <p className="mt-3 text-[0.93rem] leading-relaxed text-muted-foreground">{v.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SEOUL / BIOTECH HUB (IMAGE 3) */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow={seoulSec.eyebrow ?? "Biotech Infrastructure"}
                title={seoulSec.title ?? "Located in Korea's Premier Biotechnology Innovation Hub"}
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                {seoulSec.body1 ?? "Seoul's Pangyo Techno Valley hosts Korea's densest concentration of biotech companies, research institutions and regulatory bodies. This proximity shortens development cycles and reduces supply chain risk for international partners."}
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                {seoulSec.body2 ?? "Operating from within this ecosystem gives Vesco Science access to specialist talent, cutting-edge analytical infrastructure and direct lines to Korea's leading regulatory experts."}
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <img
                src={seoulSec.image ?? koreanSeoulCampus}
                alt="Seoul biotechnology innovation hub skyline"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Innovation Campus</p>
                <p className="mt-2 text-[0.9rem] text-navy">Pangyo Biotech Center, Greater Seoul</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
