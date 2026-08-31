import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { loadCmsPage } from "@/lib/cms-page";

export const Route = createFileRoute("/faq")({
  loader: () => loadCmsPage("faq"),
  head: () => ({ meta: [{ title: "FAQ — Vesco Science Korea" }] }),
  component: Page,
});

type Category = { title: string; items: { q: string; a: string }[] };

function Page() {
  const { t } = useI18n();
  const cms: any = Route.useLoaderData();

  const hero = cms?.hero ?? {};
  const categories: Category[] = cms?.categories ?? [];
  const [open, setOpen] = useState<string | null>("0-0");

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow ?? t("faq.eyebrow")}
        title={hero.title ?? t("faq.title")}
        lead={hero.intro ?? t("faq.intro")}
        image={hero.image ?? "/assets/qc-lab.jpg"}
        imageAlt="Vesco Science Quality Control Laboratory"
        crumb={{ label: t("nav.faq"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_2.2fr]">
          <SectionHeading eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
          <div className="space-y-12">
            {categories.map((cat, ci) => (
              <div key={ci}>
                <h3 className="text-[0.72rem] font-bold tracking-[0.2em] text-science uppercase">{cat.title}</h3>
                <div className="mt-5 border-t border-hairline">
                  {cat.items.map((item, ii) => {
                    const id = `${ci}-${ii}`;
                    const isOpen = open === id;
                    return (
                      <div key={ii} className="border-b border-hairline">
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpen(isOpen ? null : id)}
                          className="flex w-full items-start justify-between gap-6 py-5 text-left"
                        >
                          <span className="text-[1rem] font-semibold text-navy">{item.q}</span>
                          <ChevronDown className={`mt-1 h-4 w-4 shrink-0 text-science transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        <div className={`grid transition-all duration-400 ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                          <p className="overflow-hidden pr-10 text-[0.95rem] leading-relaxed text-muted-foreground">{item.a}</p>
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

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img src="/assets/korean-faq-support-center.jpg" alt="Support center" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow="Dedicated Assistance" title="Bilingual Technical & Order Consultation in Seoul" />
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
