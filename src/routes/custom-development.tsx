import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, Reveal, ProcessFlow } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { loadCmsPage } from "@/lib/cms-page";
import lyophilizer from "@/assets/lyophilizer.jpg";
import koreanCleanroom from "@/assets/korean-cleanroom-facility.jpg";
import koreanScientists from "@/assets/korean-bio-researchers.jpg";

export const Route = createFileRoute("/custom-development")({
  loader: () => loadCmsPage("custom-development"),
  head: () => ({
    meta: [
      { title: "Custom Development — Build Your Own Korean Regenerative Biological Product" },
      {
        name: "description",
        content:
          "Define product category, active concentration, dosage form, packaging and target market — start custom OEM/ODM development with Vesco Science Seoul.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/custom-development" }],
  }),
  component: Page,
});

const FALLBACK_FIELDS = [
  { label: "Product Category", ph: "Exosome / PDRN / Skin Booster / Hair Scalp / Custom Biologic" },
  { label: "Target Market", ph: "Destination country or regional distribution market" },
  { label: "Active Ingredient", ph: "Stem cell exosome, PDRN/PN, growth factors, peptides" },
  { label: "Desired Concentration", ph: "e.g. 5.0 × 10¹⁰ particles/vial or mg/mL" },
  { label: "Dosage Form", ph: "Lyophilized powder / sterile solution / dual-chamber kit" },
  { label: "Packaging", ph: "Medical vial glass, rubber stopper, flip-off cap color, outer box" },
  { label: "MOQ Target", ph: "Initial batch size requirement (vials / units)" },
  { label: "Regulatory Market", ph: "MFDS Korea, EU CPNP, US FDA, ASEAN, or LATAM" },
  { label: "Storage Requirement", ph: "Ambient / 2–8°C refrigerated / ultra-cold frozen" },
];

const FALLBACK_STEPS = [
  "Brief & Feasibility",
  "Formulation Design",
  "Micro-Fluidic Prototype",
  "Stability & Analytics",
  "cGMP Pilot Production",
];

const FALLBACK_DELIVERABLES = [
  "Official formulation specification & master recipe sheet",
  "Prototype batch samples for clinical evaluation & sensory test",
  "Comprehensive stability and analytical test reports from Seoul lab",
  "Validated cGMP manufacturing process description",
  "Primary packaging compatibility test & customized box artwork",
  "Complete export regulatory dossier package for target destination",
];

function Page() {
  const { t } = useI18n();
  const cms: any = Route.useLoaderData();

  const hero = cms?.hero ?? {};
  const pathway = cms?.pathway ?? {};
  const cleanroomSec = cms?.cleanroomSection ?? {};
  const form = cms?.form ?? {};
  const deliverables = cms?.deliverables ?? {};

  const pathSteps: string[] = Array.isArray(pathway.steps) && pathway.steps.length > 0 ? pathway.steps : FALLBACK_STEPS;
  const formFields: { label: string; ph: string }[] = Array.isArray(form.fields) && form.fields.length > 0 ? form.fields : FALLBACK_FIELDS;
  const deliverItems: string[] = Array.isArray(deliverables.items) && deliverables.items.length > 0 ? deliverables.items : FALLBACK_DELIVERABLES;

  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow ?? "OEM / ODM / Custom Development"}
        title={hero.title ?? "Build Your Own Korean Regenerative Product"}
        lead={hero.lead ?? "Tell us the specification you need. Our Seoul-based formulation, analytical and cGMP production teams translate your requirements into a compliant, document-backed biological product."}
        image={hero.image ?? lyophilizer}
        imageAlt="State-of-the-art lyophilization suite in Korean production facility"
        crumb={{ label: "Custom Development", homeLabel: t("common.breadcrumbHome") }}
      />

      {/* DEVELOPMENT PATHWAY */}
      <Section>
        <SectionHeading
          eyebrow={pathway.eyebrow ?? "Development Pathway"}
          title={pathway.title ?? "From Concept Brief to Mass Production in Korea"}
        />
        <div className="mt-12">
          <ProcessFlow steps={pathSteps} />
        </div>
      </Section>

      {/* CLEANROOM SECTION (IMAGE 2) */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={cleanroomSec.image ?? koreanCleanroom}
                alt="Cleanroom technicians operating automated aseptic vial filling machinery in Korea"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">cGMP Cleanroom Suite</p>
                <p className="mt-2 text-[0.9rem] text-navy">Automated Aseptic Liquid & Freeze-Drying Line</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow={cleanroomSec.eyebrow ?? "Precision Engineering"}
                title={cleanroomSec.title ?? "Korean cGMP Manufacturing Infrastructure for Custom Orders"}
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Our custom manufacturing lines are housed within ISO Class 5 cleanrooms, utilizing continuous automated environmental monitoring and nitrogen-purged filling technologies to preserve biological potency.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                Whether scaling a batch from 1,000 pilot vials to 100,000 units for global distribution, our automated freeze-drying and capping systems deliver batch-to-batch consistency.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* PROJECT BRIEF FORM */}
      <Section tone="white" id="brief">
        <SectionHeading
          eyebrow={form.eyebrow ?? "Project Brief"}
          title={form.title ?? "Define Your Product Specification"}
          intro={form.intro ?? "Submit your initial target parameters below. Every field provides our Korean formulation team with essential data to prepare a customized feasibility study and development roadmap."}
        />
        <Reveal>
          <form
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            onSubmit={e => { e.preventDefault(); setSent(true); }}
          >
            {formFields.map((f, i) => (
              <label key={i} className="block">
                <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science">{f.label}</span>
                <input
                  type="text"
                  placeholder={f.ph}
                  className="mt-2 w-full border border-hairline bg-card px-4 py-3 text-[0.93rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-teal"
                />
              </label>
            ))}
            <label className="block sm:col-span-2 lg:col-span-3">
              <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science">
                {form.notes ?? "Additional Project Requirements"}
              </span>
              <textarea
                rows={4}
                placeholder={form.notesPh ?? "Reference target products, preferred launches, documentation needs, clinical trials..."}
                className="mt-2 w-full border border-hairline bg-card px-4 py-3 text-[0.93rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-teal"
              />
            </label>
            <div className="sm:col-span-2 lg:col-span-3 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-sm bg-teal px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase text-[#05231f] transition-colors hover:bg-teal/85"
              >
                {form.submit ?? "Initiate Custom Development Project"}
              </button>
              <span className="text-[0.85rem] text-muted-foreground">
                Prefer our standard detailed inquiry form?{" "}
                <Link to="/contact" className="text-science underline underline-offset-4">Go to Contact Page</Link>
              </span>
            </div>
            {sent && (
              <p role="status" className="sm:col-span-2 lg:col-span-3 border-l-2 border-teal bg-secondary px-6 py-4 text-[0.9rem] text-navy">
                Project brief successfully transmitted. Our Korean R&D specialists will contact you within two business days.
              </p>
            )}
          </form>
        </Reveal>
      </Section>

      {/* R&D SCIENTISTS (IMAGE 3) */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Formulation Science"
                title="Experienced Korean Bio-Scientists Optimizing Your Formula"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Our R&D division in Seoul brings together specialists in protein stabilization, liposomal encapsulation, and cellular exosome isolation. We perform screening tests to ensure active ingredients maintain biological activity post-lyophilization.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                We work closely with client teams to refine sensory feel, skin absorption kinetics, and reconstitution speed, providing a complete turn-key solution.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <img
                src={koreanScientists}
                alt="Korean biological researchers conducting formulation trials"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Seoul R&D Center</p>
                <p className="mt-2 text-[0.9rem] text-navy">Exosome & Peptide Formulation Team</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* DELIVERABLES */}
      <Section tone="muted">
        <SectionHeading
          eyebrow={deliverables.eyebrow ?? "Project Deliverables"}
          title={deliverables.title ?? "What International Partners Receive"}
        />
        <ul className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {deliverItems.map((d, i) => (
            <li key={i} className="bg-card px-6 py-5 text-[0.95rem] text-navy">
              <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />
              {d}
            </li>
          ))}
        </ul>
      </Section>

      <CTABand />
    </>
  );
}
