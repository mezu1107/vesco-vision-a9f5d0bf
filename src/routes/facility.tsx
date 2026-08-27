import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal, ProcessFlow } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import vials from "@/assets/vials.jpg";
import koreanCleanroom from "@/assets/korean-cleanroom-facility.jpg";
import koreanLogistics from "@/assets/korean-international-logistics.jpg";

export const Route = createFileRoute("/facility")({
  head: () => ({
    meta: [
      { title: "Korean cGMP Manufacturing Facility — Vesco Science Seoul" },
      {
        name: "description",
        content:
          "Integrated Korean biotechnology facility in Seoul housing R&D laboratories, cGMP cleanrooms, automated aseptic filling lines, QC testing suites, and temperature-monitored cold chain dispatch.",
      },
      { property: "og:title", content: "Korean cGMP Manufacturing Facility — Vesco Science Seoul" },
      {
        property: "og:description",
        content: "Where validated Korean cellular science becomes commercial, export-ready batches under MFDS cGMP standards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Area = { title: string; body: string };

function Page() {
  const { t, tx } = useI18n();
  const areas = tx<Area[]>("facility.areas") ?? [];
  const flow = tx<string[]>("quality.flow") ?? [];

  return (
    <>
      <PageHero
        eyebrow={t("facility.eyebrow")}
        title={t("facility.title")}
        lead={t("facility.intro")}
        image={vials}
        imageAlt="Sterile glass vials inside Vesco Science Korean biomanufacturing plant"
        crumb={{ label: t("facility.eyebrow"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* ---------- FACILITY OVERVIEW ---------- */}
      <Section>
        <div className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 60}>
              <article className="h-full bg-card p-8">
                <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[1.1rem] font-semibold text-navy">{a.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- KOREAN cGMP CLEANROOM PRODUCTION (IMAGE 2) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={koreanCleanroom}
                alt="Korean technicians operating automated aseptic filling suite in cGMP cleanroom"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Seoul Manufacturing Site</p>
                <p className="mt-2 text-[0.9rem] text-navy">Class 100 / ISO 5 Aseptic Cleanroom Suite</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Cleanroom Infrastructure"
                title="ISO-Certified cGMP Production Suites in Seoul"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Our manufacturing operations in the Seoul capital region operate under strictly validated ISO 5 (Class 100) cleanroom standards. Every production cycle for exosome purification, PDRN/PN formulation, and sterile vial filling adheres to rigorous Korean MFDS cGMP guidelines.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                Automated continuous environmental monitoring, positive-pressure air locks, and HEPA air filtration guarantee zero-contamination handling for sensitive biological and regenerative aesthetic products.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- PROCESS FLOW ---------- */}
      <Section tone="navy">
        <SectionHeading
          invert
          eyebrow={t("quality.eyebrow")}
          title={t("quality.title")}
          intro={t("quality.intro")}
        />
        <div className="mt-12">
          <ProcessFlow steps={flow} invert />
        </div>
      </Section>

      {/* ---------- KOREAN COLD CHAIN & EXPORT LOGISTICS (IMAGE 3) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Cold Chain & Logistics"
                title="Integrated Cold Storage & Incheon Air Cargo Dispatch"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Biologics and exosome formulations require uninterrupted temperature control. Our Seoul facility features climate-controlled storage ranges (2–8°C, -20°C, and -80°C ultra-low freezers) with real-time digital temperature logging.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                Positioned within 45 minutes of Incheon International Airport, our export team coordinates validated cold-chain shippers with temperature data loggers to guarantee product viability upon arrival at destination markets worldwide.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <img
                src={koreanLogistics}
                alt="Temperature-controlled cold chain packaging for Korean biotech exports at Incheon hub"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Export Coordination</p>
                <p className="mt-2 text-[0.9rem] text-navy">Direct Cold-Chain Air Freight to Global Markets</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

