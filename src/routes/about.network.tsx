import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { loadCmsPage } from "@/lib/cms-page";
import hq from "@/assets/headquarters.jpg";
import koreanLogistics from "@/assets/korean-international-logistics.jpg";
import koreanSupportCenter from "@/assets/korean-faq-support-center.jpg";

export const Route = createFileRoute("/about/network")({
  loader: () => loadCmsPage("about-network"),
  head: () => ({
    meta: [
      { title: "Global Network & Partnership — Vesco Science Seoul" },
      {
        name: "description",
        content:
          "How Vesco Science Korea supports global distributors, aesthetic brands, clinics and pharmaceutical partners — cGMP manufacturing, export documentation, and cold-chain logistics from Seoul.",
      },
      { property: "og:title", content: "Global Network & Partnership — Vesco Science Seoul" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about/network" }],
  }),
  component: Page,
});

const FALLBACK_MODELS = [
  { title: "Distribution Partnership", body: "Country- or region-level distribution of Vesco-manufactured Korean exosome and regenerative aesthetic products with complete regulatory dossiers." },
  { title: "Private Label", body: "Existing proven Korean biological platforms produced under the partner's own brand, packaging, artwork, and custom vial specifications." },
  { title: "OEM Manufacturing", body: "Client-owned formula manufactured, filled, packaged, tested and documented under strict Korean MFDS cGMP standards." },
  { title: "ODM Development", body: "Concept-to-market development where Vesco leads formulation, micro-fluidic prototyping and stability validation in Seoul." },
  { title: "R&D Collaboration", body: "Joint scientific studies on cellular exosome, PDRN/PN, peptide and lyophilization platforms with Korean researchers." },
  { title: "Clinic & Institutional Supply", body: "Direct supply programs to premium aesthetic clinics worldwide where permitted by local regulations." },
];

const FALLBACK_SUPPORT = [
  "Product documentation package (Certificate of Analysis, TDS, SDS on request)",
  "Official Korean MFDS export certificates and custom shipping records",
  "Cold-chain packaging and temperature-controlled air freight coordination",
  "End-to-end batch traceability from raw materials to final air cargo delivery",
  "Real-time stability data for global tropical and temperate storage zones",
  "Destination-market regulatory dossier preparation (EU CPNP, US FDA VCRP, ASEAN)",
];

const FALLBACK_REGIONS = [
  { name: "Asia-Pacific", status: "Active cGMP Export Operations" },
  { name: "Middle East & GCC", status: "Regulatory Compliance Support" },
  { name: "Europe", status: "CPNP Dossier Alignment" },
  { name: "Latin America", status: "Custom Packaging Support" },
  { name: "North America", status: "OEM / ODM Distribution Channels" },
  { name: "CIS Region", status: "Cold-Chain Logistics Ready" },
];

function Page() {
  const { t } = useI18n();
  const cms: any = Route.useLoaderData();

  const hero = cms?.hero ?? {};
  const models = cms?.models ?? {};
  const logisticsSec = cms?.logisticsSection ?? {};
  const supportSec = cms?.supportSection ?? {};
  const coverage = cms?.coverage ?? {};

  const modelItems: { title: string; body: string }[] =
    Array.isArray(models.items) && models.items.length > 0 ? models.items : FALLBACK_MODELS;

  // Support list: try to extract from supportSection or fall back
  const supportList: string[] = Array.isArray(cms?.supportList) && cms.supportList.length > 0
    ? cms.supportList
    : FALLBACK_SUPPORT;

  const regions: { name: string; status: string }[] =
    Array.isArray(coverage.regions) && coverage.regions.length > 0 ? coverage.regions : FALLBACK_REGIONS;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow ?? "About / Global Network"}
        title={hero.title ?? "A Manufacturing Partner Built for Export"}
        lead={hero.lead ?? "Vesco Science Korea works with global distributors, aesthetic brands, clinics, research organizations and pharmaceutical companies that require cGMP-certified, export-ready regenerative products."}
        image={hero.image ?? hq}
        imageAlt="Vesco Science Seoul headquarters exterior"
        crumb={{ label: "Global Network", homeLabel: t("common.breadcrumbHome") }}
      />

      {/* PARTNERSHIP MODELS */}
      <Section>
        <SectionHeading
          eyebrow={models.eyebrow ?? "Partnership Models"}
          title={models.title ?? "How Global Partners Work With Us"}
        />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {modelItems.map((m, i) => (
            <Reveal key={i} delay={i * 50}>
              <article className="h-full bg-card p-8">
                <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[1.08rem] font-semibold text-navy">{m.title}</h3>
                <p className="mt-3 text-[0.93rem] leading-relaxed text-muted-foreground">{m.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* LOGISTICS SECTION (IMAGE 2) */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={logisticsSec.image ?? koreanLogistics}
                alt="Korean cold-chain export packaging at Incheon air cargo terminal"
                loading="lazy"
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
                eyebrow={logisticsSec.eyebrow ?? "Global Supply Chain"}
                title={logisticsSec.title ?? "Seamless International Export & Cold Chain Logistics"}
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                {logisticsSec.body1 ?? "Shipping temperature-sensitive biologics around the globe requires rigorous quality management. Every export batch leaving our Seoul facility is packed in validated thermal insulated shippers equipped with real-time temperature loggers."}
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                {logisticsSec.body2 ?? "With direct access to major international airlines at Incheon International Airport, we ensure rapid dispatch and customs clearance for our distribution partners across North America, Europe, Asia, and the Middle East."}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* EXPORT SUPPORT LIST */}
      <Section tone="navy">
        <SectionHeading invert eyebrow="Export Support" title="What We Provide to International Partners" />
        <ul className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {supportList.map((s, i) => (
            <li key={i} className="bg-white/[0.04] p-6 text-[0.93rem] leading-relaxed text-white/80 outline outline-white/10">
              <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />
              {s}
            </li>
          ))}
        </ul>
      </Section>

      {/* SUPPORT DESK (IMAGE 3) */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow={supportSec.eyebrow ?? "Dedicated Partner Support"}
                title={supportSec.title ?? "Seoul-Based International Business Consultation Desk"}
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                {supportSec.body ?? "Our global business team in Seoul works closely with international brand owners and clinical distributors to navigate product regulatory filings, market-specific packaging customization, and batch scheduling."}
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <img
                src={supportSec.image ?? koreanSupportCenter}
                alt="Korean global business specialists reviewing export documents"
                loading="lazy"
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

      {/* MARKET COVERAGE GRID */}
      <Section tone="white">
        <SectionHeading title={coverage.title ?? "Global Market Reach"} />
        <div className="mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((r, i) => (
            <div key={i} className="bg-card px-6 py-5">
              <p className="text-[0.98rem] font-medium text-navy">{r.name}</p>
              <p className="mt-1 text-[0.78rem] tracking-[0.08em] uppercase text-teal font-semibold">{r.status}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
