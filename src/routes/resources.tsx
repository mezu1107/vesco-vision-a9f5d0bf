import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { loadCmsPage } from "@/lib/cms-page";

export const Route = createFileRoute("/resources")({
  loader: () => loadCmsPage("resources"),
  head: () => ({ meta: [{ title: "Download Center — Vesco Science Korea" }] }),
  component: Page,
});

type Doc = { title: string; meta: string; restricted: boolean };

function Page() {
  const { t } = useI18n();
  const cms: any = Route.useLoaderData();

  const hero = cms?.hero ?? {};
  const docs: Doc[] = cms?.docs ?? [];
  const [modal, setModal] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow ?? t("resources.eyebrow")}
        title={hero.title ?? t("resources.title")}
        lead={hero.intro ?? t("resources.intro")}
        image={hero.image ?? "/assets/documents.jpg"}
        imageAlt="Vesco Science resources and documentation"
        crumb={{ label: t("nav.resources"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <SectionHeading eyebrow={t("resources.eyebrow")} title={t("resources.title")} />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2">
          {docs.map((d, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="flex h-full flex-col bg-card p-8">
                <span className={`inline-flex w-fit rounded-sm px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] uppercase ${d.restricted ? "bg-navy/10 text-navy" : "bg-teal/15 text-science"}`}>
                  {d.restricted ? t("resources.restricted") : t("resources.open")}
                </span>
                <h3 className="mt-6 text-[1.15rem] font-semibold text-navy">{d.title}</h3>
                <p className="mt-2 text-[0.85rem] text-muted-foreground">{d.meta}</p>
                <button
                  onClick={() => {
                    if (d.restricted) { setModal(d.title); } else {
                      const blob = new Blob([`%PDF-1.4\n1 0 obj\n<</Title(${d.title})>>\nendobj\ntrailer\n<</Root 1 0 R>>\n%%EOF`], { type: "application/pdf" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a"); a.href = url; a.download = `${d.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.pdf`;
                      document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
                    }
                  }}
                  className="mt-8 inline-flex w-fit items-center gap-3 rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science"
                >
                  {d.restricted ? t("common.requestAccess") : t("common.download")}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {modal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/70 p-6 backdrop-blur-sm" onClick={() => { setModal(null); setSent(false); }}>
          <div className="w-full max-w-md border border-hairline bg-card p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
            {sent ? (
              <> <h3 className="text-[1.2rem] font-semibold text-navy">{t("resources.modal.success")}</h3>
                <button onClick={() => { setModal(null); setSent(false); }} className="mt-8 rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold uppercase text-[#05231f]">{t("resources.modal.cancel")}</button>
              </>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                <h3 className="text-[1.25rem] font-semibold text-navy">{t("resources.modal.title")}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">{t("resources.modal.body")}</p>
                <div className="mt-6 grid gap-4">
                  {[["name","text"],["company","text"],["email","email"]].map(([k,type]) => (
                    <label key={k} className="grid gap-2">
                      <span className="text-[0.72rem] font-semibold uppercase text-navy/70">{t(`resources.modal.${k}`)}</span>
                      <input required type={type} className="border border-hairline bg-background px-4 py-3 text-[0.95rem] text-navy outline-none focus:border-teal" />
                    </label>
                  ))}
                </div>
                <div className="mt-7 flex gap-3">
                  <button type="submit" className="rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold uppercase text-[#05231f]">{t("resources.modal.send")}</button>
                  <button type="button" onClick={() => { setModal(null); setSent(false); }} className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold uppercase text-navy">{t("resources.modal.cancel")}</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <CTABand />
    </>
  );
}
