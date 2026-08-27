import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import qcLab from "@/assets/qc-lab.jpg";
import koreanSupportCenter from "@/assets/korean-faq-support-center.jpg";
import koreanResearchers from "@/assets/korean-bio-researchers.jpg";

type Category = { title: string; items: { q: string; a: string }[] };

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Vesco Science Korea Biotechnology Partner" },
      {
        name: "description",
        content:
          "Frequently asked questions regarding Korean exosome OEM/ODM contract manufacturing, cGMP quality documentation, shipping logistics, and regulatory compliance.",
      },
      { property: "og:title", content: "FAQ — Vesco Science Korea Biotechnology Partner" },
      {
        property: "og:description",
        content: "Common questions on OEM/ODM, cellular exosome technology, Korean MFDS documentation, and quality systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t, tx } = useI18n();
  const categories = tx<Category[]>("faq.categories") ?? [];
  const [open, setOpen] = useState<string | null>("0-0");

  return (
    <>
      <PageHero
        eyebrow={t("faq.eyebrow")}
        title={t("faq.title")}
        lead={t("faq.intro")}
        image={qcLab}
        imageAlt="Vesco Science Quality Control and Analytical Laboratory in Korea"
        crumb={{ label: t("nav.faq"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* ---------- FAQ ACCORDION SECTION ---------- */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_2.2fr]">
          <SectionHeading eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
          <div className="space-y-12">
            {categories.map((cat, ci) => (
              <div key={cat.title}>
                <h3 className="text-[0.72rem] font-bold tracking-[0.2em] text-science uppercase">
                  {cat.title}
                </h3>
                <div className="mt-5 border-t border-hairline">
                  {cat.items.map((item, ii) => {
                    const id = `${ci}-${ii}`;
                    const isOpen = open === id;
                    return (
                      <div key={item.q} className="border-b border-hairline">
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpen(isOpen ? null : id)}
                          className="flex w-full items-start justify-between gap-6 py-5 text-left"
                        >
                          <span className="text-[1rem] font-semibold text-navy">{item.q}</span>
                          <ChevronDown
                            className={`mt-1 h-4 w-4 shrink-0 text-science transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <div
                          className={`grid transition-all duration-400 ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                        >
                          <p className="overflow-hidden pr-10 text-[0.95rem] leading-relaxed text-muted-foreground">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- KOREAN SUPPORT CENTER (IMAGE 2) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={koreanSupportCenter}
                alt="Vesco Science Seoul technical support and client advisory desk"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Client Support Desk</p>
                <p className="mt-2 text-[0.9rem] text-navy">Seoul Global Consultation Center</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Dedicated Assistance"
                title="Bilingual Technical & Order Consultation in Seoul"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Need answers regarding custom batch minimums, shipping lead times, or export certification? Our bilingual customer advisory team in Seoul is ready to assist.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                We provide clear explanations of Korean MFDS regulations, shipping temperature requirements, and primary container compatibility to ensure total transparency for international partners.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- KOREAN SCIENTIFIC QA ADVISORS (IMAGE 3) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Direct Expert Access"
                title="Direct R&D and QA Advisory for Specialized Technical Questions"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                For complex questions concerning exosome particle size distribution (NTA), endotoxin testing protocols, or shelf-life stability data, our senior Korean research scientists provide direct technical documentation.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                We believe open scientific communication builds long-term manufacturing trust, ensuring your regulatory filings are backed by verifiable laboratory evidence.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <img
                src={koreanResearchers}
                alt="Korean research specialists analyzing analytical data and certificate of analysis reports"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Technical Advisory</p>
                <p className="mt-2 text-[0.9rem] text-navy">Korean R&D & Regulatory QA Desk</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

