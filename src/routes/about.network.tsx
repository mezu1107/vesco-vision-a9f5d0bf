import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import hq from "@/assets/headquarters.jpg";
import koreanLogistics from "@/assets/korean-international-logistics.jpg";
import koreanSupportCenter from "@/assets/korean-faq-support-center.jpg";

export const Route = createFileRoute("/about/network")({
  head: () => ({
    meta: [
      { title: "Global Network & Partnership — Vesco Science Seoul" },
      {
        name: "description",
        content:
          "How Vesco Science Korea supports global distributors, aesthetic brands, clinics and pharmaceutical partners — cGMP manufacturing, export documentation, and cold-chain air logistics from Seoul.",
      },
      { property: "og:title", content: "Global Network & Partnership — Vesco Science Seoul" },
      {
        property: "og:description",
        content: "cGMP supply, regulatory documentation and cold-chain logistics for international partners from Korea.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about/network" }],
  }),
  component: Page,
});

const COPY = {
  en: {
    eyebrow: "About / Global Network",
    title: "A Manufacturing Partner Built for Export",
    lead: "Vesco Science Korea works with global distributors, aesthetic brands, clinics, research organizations and pharmaceutical companies that require cGMP-certified, export-ready regenerative products.",
    modelEyebrow: "Partnership Models",
    modelTitle: "How Global Partners Work With Us",
    models: [
      {
        title: "Distribution Partnership",
        body: "Country- or region-level distribution of Vesco-manufactured Korean exosome and regenerative aesthetic products with complete regulatory dossiers.",
      },
      {
        title: "Private Label",
        body: "Existing proven Korean biological platforms produced under the partner's own brand, packaging, artwork, and custom vial specifications.",
      },
      {
        title: "OEM Manufacturing",
        body: "Client-owned formula manufactured, filled, packaged, tested and documented under strict Korean MFDS cGMP standards.",
      },
      {
        title: "ODM Development",
        body: "Concept-to-market development where Vesco leads formulation, micro-fluidic prototyping and stability validation in Seoul.",
      },
      {
        title: "R&D Collaboration",
        body: "Joint scientific studies on cellular exosome, PDRN/PN, peptide and lyophilization platforms with Korean researchers.",
      },
      {
        title: "Clinic & Institutional Supply",
        body: "Direct supply programs to premium aesthetic clinics worldwide where permitted by local regulations.",
      },
    ],
    supportEyebrow: "Export Support",
    supportTitle: "What We Provide to International Partners",
    support: [
      "Product documentation package (Certificate of Analysis, TDS, SDS on request)",
      "Official Korean MFDS export certificates and custom shipping records",
      "Cold-chain packaging and temperature-controlled air freight coordination",
      "End-to-end batch traceability from raw materials to final air cargo delivery",
      "Real-time stability data for global tropical and temperate storage zones",
      "Destination-market regulatory dossier preparation (EU CPNP, US FDA VCRP, ASEAN)",
    ],
    coverageTitle: "Global Market Reach",
    regions: [
      { name: "Asia-Pacific", status: "Active cGMP Export Operations" },
      { name: "Middle East & GCC", status: "Regulatory Compliance Support" },
      { name: "Europe", status: "CPNP Dossier Alignment" },
      { name: "Latin America", status: "Custom Packaging Support" },
      { name: "North America", status: "OEM / ODM Distribution Channels" },
      { name: "CIS Region", status: "Cold-Chain Logistics Ready" },
    ],
  },
  ko: {
    eyebrow: "회사소개 / 글로벌 네트워크",
    title: "수출을 위해 설계된 대한민국 바이오 파트너",
    lead: "베스코 사이언스는 cGMP 문서화 및 콜드체인 수출 파이프라인을 필요로 하는 전 세계 유통사, 에스테틱 브랜드, 클리닉, 연구기관 및 제약사와 협력합니다.",
    modelEyebrow: "파트너십 모델",
    modelTitle: "협력 방식",
    models: [
      { title: "유통 파트너십", body: "국가·지역 단위 유통과 MFDS 기준 규제 문서를 함께 제공합니다." },
      { title: "프라이빗 라벨", body: "검증된 한국 바이오 제형을 파트너의 전용 브랜드·패키지로 생산합니다." },
      { title: "OEM 제조", body: "고객사 처방을 서울 cGMP 시설에서 엄격하게 제조·충전·출하 문서화합니다." },
      { title: "ODM 개발", body: "컨셉 수립부터 제형 연구·동결건조·안정성 검증까지 베스코가 종합 제공합니다." },
      { title: "R&D 공동 연구", body: "엑소좀, PDRN/PN, 펩타이드 플랫폼의 특성 분석 및 글로벌 공동 연구." },
      { title: "클리닉 직공급", body: "해외 목적 시장의 의료기기·화장품 규정에 맞춘 정품 공급 프로그램." },
    ],
    supportEyebrow: "수출 지원",
    supportTitle: "해외 파트너 지원 항목",
    support: [
      "공식 시험성적서 패키지 (COA / TDS / SDS)",
      "대한민국 식약처(MFDS) 기준 수출 증명 서류 및 선적 기록",
      "콜드체인 항공 물류 및 수송 온도 데이터 로거 포함 포장",
      "원료 입고부터 출하까지 배치 전 과정 이력 추적성",
      "글로벌 보관 조건에 맞춘 가속·장기 안정성 시험 데이터",
      "목적국 등록을 위한 규제 기술 문서 지원 (CPNP, FDA 등)",
    ],
    coverageTitle: "글로벌 시장 진출",
    regions: [
      { name: "아시아·태평양", status: "cGMP 수출 운용 중" },
      { name: "중동 & GCC", status: "규제 인허가 문서 지원" },
      { name: "유럽", status: "CPNP 기술 문서 대응" },
      { name: "중남미", status: "맞춤형 포장 및 라벨 지원" },
      { name: "북미", status: "OEM / ODM 유통망 협력" },
      { name: "CIS 지역", status: "콜드체인 물류 파이프라인" },
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
        image={hq}
        imageAlt="Vesco Science Seoul headquarters exterior"
        crumb={{ label: c.eyebrow, homeLabel: t("common.breadcrumbHome") }}
      />

      {/* ---------- PARTNERSHIP MODELS ---------- */}
      <Section>
        <SectionHeading eyebrow={c.modelEyebrow} title={c.modelTitle} />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {c.models.map((m, i) => (
            <Reveal key={m.title} delay={i * 50}>
              <article className="h-full bg-card p-8">
                <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[1.08rem] font-semibold text-navy">{m.title}</h3>
                <p className="mt-3 text-[0.93rem] leading-relaxed text-muted-foreground">
                  {m.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- KOREAN COLD CHAIN LOGISTICS (IMAGE 2) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={koreanLogistics}
                alt="Korean cold-chain export packaging at Incheon air cargo terminal"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Export Air Freight</p>
                <p className="mt-2 text-[0.9rem] text-navy">Incheon International Cold Chain Hub</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Global Supply Chain"
                title="Seamless International Export & Cold Chain Logistics"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Shipping temperature-sensitive biologics around the globe requires rigorous quality management. Every export batch leaving our Seoul facility is packed in validated thermal insulated shippers equipped with real-time temperature loggers.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                With direct access to major international airlines at Incheon International Airport, we ensure rapid dispatch and customs clearance for our distribution partners across North America, Europe, Asia, and the Middle East.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- EXPORT SUPPORT LIST ---------- */}
      <Section tone="navy">
        <SectionHeading invert eyebrow={c.supportEyebrow} title={c.supportTitle} />
        <ul className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {c.support.map((s) => (
            <li
              key={s}
              className="bg-white/[0.04] p-6 text-[0.93rem] leading-relaxed text-white/80 outline outline-white/10"
            >
              <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />
              {s}
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- KOREAN GLOBAL BUSINESS DESK (IMAGE 3) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Dedicated Partner Support"
                title="Seoul-Based International Business Consultation Desk"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Our global business team in Seoul works closely with international brand owners and clinical distributors to navigate product regulatory filings, market-specific packaging customization, and batch scheduling.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                Whether you need technical clarification on exosome concentrations or custom labeling compliance for your local market, our dedicated Korean team provides bilingual support throughout the partnership lifecycle.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <img
                src={koreanSupportCenter}
                alt="Korean global business specialists reviewing export documents and technical dossiers in Seoul conference room"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Seoul Corporate Headquarters</p>
                <p className="mt-2 text-[0.9rem] text-navy">Global Partnership Consultation Desk</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- MARKET COVERAGE GRID ---------- */}
      <Section tone="white">
        <SectionHeading title={c.coverageTitle} />
        <div className="mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {c.regions.map((r) => (
            <div key={r.name} className="bg-card px-6 py-5">
              <p className="text-[0.98rem] font-medium text-navy">{r.name}</p>
              <p className="mt-1 text-[0.78rem] tracking-[0.08em] uppercase text-teal font-semibold">
                {r.status}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}

