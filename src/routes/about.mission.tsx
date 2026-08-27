import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import research from "@/assets/research-team.jpg";
import koreanBioResearchers from "@/assets/korean-bio-researchers.jpg";
import koreanSeoulCampus from "@/assets/korean-seoul-skyscraper-hub.jpg";

export const Route = createFileRoute("/about/mission")({
  head: () => ({
    meta: [
      { title: "Our Mission & Vision — Vesco Science Korea" },
      {
        name: "description",
        content:
          "The mission, vision and operating principles behind Vesco Science: advancing Korean regenerative biotechnology from cellular science to scalable, cGMP-documented manufacturing in Seoul.",
      },
      { property: "og:title", content: "Our Mission & Vision — Vesco Science Korea" },
      {
        property: "og:description",
        content:
          "Advancing Korean regenerative biotechnology from cellular science to scalable cGMP manufacturing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about/mission" }],
  }),
  component: Page,
});

const COPY = {
  en: {
    eyebrow: "About / Mission",
    title: "Science with a Defined Purpose",
    lead: "Our mission is to make advanced Korean regenerative biotechnology reproducible, documented and available to healthcare and aesthetic partners worldwide.",
    missionTitle: "Mission",
    missionBody:
      "To develop and manufacture regenerative biotechnology — exosome, PDRN/PN, peptide and lyophilized formulations — under controlled, documented processes that partners can rely on batch after batch.",
    visionTitle: "Vision",
    visionBody:
      "To be recognized as Korea's premier biotechnology and advanced regenerative manufacturing partner: the scientific and industrial infrastructure behind next-generation global aesthetic products.",
    valuesEyebrow: "Operating Principles",
    valuesTitle: "How We Work",
    values: [
      {
        title: "Science First",
        body: "Every formulation decision is traced back to characterization data, not marketing language.",
      },
      {
        title: "Documented Process",
        body: "Development, production and release steps are specified, executed and recorded under MFDS cGMP standards.",
      },
      {
        title: "Reproducibility",
        body: "Batch-to-batch consistency is treated as a manufacturing requirement, not an outcome.",
      },
      {
        title: "Partner Confidentiality",
        body: "OEM/ODM programs, formulations and specifications remain the exclusive property of the client.",
      },
      {
        title: "Regulatory Readiness",
        body: "Documentation is prepared with global export and destination-market requirements in mind.",
      },
      {
        title: "Verified Claims",
        body: "We publish what can be supported. Unverified data is withheld until analytically confirmed.",
      },
    ],
  },
  ko: {
    eyebrow: "회사소개 / 미션",
    title: "명확한 목적을 가진 한국 바이오 과학",
    lead: "당사의 미션은 대한민국 첨단 재생 바이오테크놀로지를 재현 가능하고 문서화된 형태로 전 세계 헬스케어·에스테틱 파트너에게 제공하는 것입니다.",
    missionTitle: "미션",
    missionBody:
      "엑소좀, PDRN/PN, 펩타이드 및 동결건조 제형을 대한민국 MFDS cGMP 기준의 엄격한 공정 하에서 개발·제조하여, 파트너가 신뢰할 수 있는 배치 품질을 보장합니다.",
    visionTitle: "비전",
    visionBody:
      "차세대 글로벌 재생 에스테틱 제품의 과학적·산업적 인프라로서, 대한민국을 대표하는 첨단 바이오 파트너로 도약하는 것입니다.",
    valuesEyebrow: "운영 원칙",
    valuesTitle: "일하는 방식",
    values: [
      { title: "과학 우선", body: "모든 제형 결정은 마케팅 문구가 아닌 엄격한 분석 데이터에 근거합니다." },
      { title: "문서화된 공정", body: "개발·생산·출하 단계를 cGMP 규격으로 규정하고 실행하며 기록합니다." },
      { title: "재현성", body: "배치 간 일관성은 결과가 아니라 필수 제조 요건으로 관리합니다." },
      { title: "파트너 기밀 유지", body: "OEM/ODM 프로그램, 제형, 규격은 고객사의 소중한 자산입니다." },
      { title: "규제 대응", body: "수출 및 글로벌 목적 시장 요건을 완벽하게 맞추어 문서를 준비합니다." },
      { title: "검증된 표현", body: "분석 검증이 완료된 사실만 공개하며, 미검증 데이터는 게시하지 않습니다." },
    ],
  },
} as const;

function Page() {
  const { locale, t } = useI18n();
  const c = COPY[locale as keyof typeof COPY] ?? COPY.en;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lead={c.lead}
        image={research}
        imageAlt="Vesco Science Korean research team working in the laboratory"
        crumb={{ label: c.eyebrow, homeLabel: t("common.breadcrumbHome") }}
      />

      {/* ---------- MISSION & VISION ---------- */}
      <Section>
        <div className="grid gap-px bg-hairline lg:grid-cols-2">
          {[
            { title: c.missionTitle, body: c.missionBody },
            { title: c.visionTitle, body: c.visionBody },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="h-full bg-card p-10">
                <h2 className="font-display text-[1.6rem] font-semibold text-navy">{b.title}</h2>
                <p className="mt-5 text-[1rem] leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- KOREAN CELLULAR RESEARCH EXCELLENCE (IMAGE 2) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={koreanBioResearchers}
                alt="Korean biotechnology researchers collaborating on exosome precision formulations in Seoul"
                loading="lazy"
                width={1280}
                height={960}
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
                eyebrow="Scientific Rigor"
                title="Pioneering Korean Cellular & Exosome Research"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Our scientific commitment is rooted in Korean biotechnology innovation. By combining high-purity exosome isolation techniques with state-of-the-art nanoparticle tracking analysis, we ensure every molecular active meets strict bio-identity standards.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                We believe scientific progress requires continuous verification. Our R&D personnel collaborate with leading academic researchers in Seoul to benchmark nanovesicle stability and bio-absorption efficiency across diverse skin matrices.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- OPERATING PRINCIPLES ---------- */}
      <Section tone="white">
        <SectionHeading eyebrow={c.valuesEyebrow} title={c.valuesTitle} />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {c.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 50}>
              <article className="h-full bg-card p-8">
                <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[1.08rem] font-semibold text-navy">{v.title}</h3>
                <p className="mt-3 text-[0.93rem] leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- KOREAN BIOTECH HUB & CAMPUS (IMAGE 3) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Biotech Infrastructure"
                title="Located in Korea's Premier Biotechnology Innovation Hub"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Headquartered within the vibrant biotechnology ecosystem of Seoul and Pangyo Techno Valley, Vesco Science operates at the intersection of academic research, clinical aesthetics, and advanced biomanufacturing.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                This strategic location provides our team with direct access to top-tier Korean scientific talent, specialized analytical institutions, and rapid international air logistics for seamless global distribution.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <img
                src={koreanSeoulCampus}
                alt="Modern biotechnology research institute building in Pangyo Techno Valley, Seoul"
                loading="lazy"
                width={1280}
                height={960}
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

