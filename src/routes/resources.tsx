import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import documents from "@/assets/documents.jpg";
import koreanFaqSupport from "@/assets/korean-faq-support-center.jpg";
import koreanScientists from "@/assets/korean-bio-researchers.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Download Center — Vesco Science Korea" },
      {
        name: "description",
        content:
          "Korean B2B download center: product catalogue, corporate profile, OEM/ODM technical specifications, MSDS safety data, and batch-specific certificates of analysis.",
      },
      { property: "og:title", content: "Download Center — Vesco Science Korea" },
      {
        property: "og:description",
        content: "Official corporate dossiers and technical biological certificates for Vesco Science global partners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Page,
});

type Doc = { title: string; meta: string; restricted: boolean };

function Page() {
  const { t, tx } = useI18n();
  const docs = tx<Doc[]>("resources.docs") ?? [];
  const [modal, setModal] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const close = () => {
    setModal(null);
    setSent(false);
  };

  return (
    <>
      <PageHero
        eyebrow={t("resources.eyebrow")}
        title={t("resources.title")}
        lead={t("resources.intro")}
        image={documents}
        imageAlt="Vesco Science Korean regulatory export documents and certificate packages"
        crumb={{ label: t("nav.resources"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* ---------- DOCUMENTATION GRID ---------- */}
      <Section>
        <SectionHeading eyebrow={t("resources.eyebrow")} title={t("resources.title")} />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2">
          {docs.map((d, i) => (
            <Reveal key={d.title} delay={i * 60}>
              <div className="flex h-full flex-col bg-card p-8">
                <span
                  className={`inline-flex w-fit rounded-sm px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] uppercase ${
                    d.restricted ? "bg-navy/10 text-navy" : "bg-teal/15 text-science"
                  }`}
                >
                  {d.restricted ? t("resources.restricted") : t("resources.open")}
                </span>
                <h3 className="mt-6 text-[1.15rem] font-semibold text-navy">{d.title}</h3>
                <p className="mt-2 text-[0.85rem] text-muted-foreground">{d.meta}</p>
                <button
                  onClick={() => {
                    if (d.restricted) {
                      setModal(d.title);
                    } else {
                      // Trigger direct sample technical PDF file download
                      const content = `%PDF-1.4\n1 0 obj\n<< /Title (${d.title}) /Author (Vesco Science Korea) >>\nendobj\ntrailer\n<< /Root 1 0 R >>\n%%EOF`;
                      const blob = new Blob([content], { type: "application/pdf" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `${d.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}-vesco-science-korea.pdf`;
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                      URL.revokeObjectURL(url);
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

      {/* ---------- KOREAN TECHNICAL SUPPORT DESK (IMAGE 2) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={koreanFaqSupport}
                alt="Korean technical customer service desk assisting global partners with documentation requests"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Dossier Support</p>
                <p className="mt-2 text-[0.9rem] text-navy">Dedicated Korean Regulatory Specialists</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Global Access"
                title="Instant Verification & Technical Dossier Support"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Our Seoul technical support desk processes requests for confidential master files, product dossiers (DMF), stability study reports, and safety data sheets (SDS) within 24 business hours.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                Registered distribution partners receive direct access to our secure client portal for instant batch-specific COA verification.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- KOREAN SCIENTIFIC CERTIFICATE DESK (IMAGE 3) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Validated COA"
                title="Verified Analytical Certificates from Seoul QC Laboratory"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Every certificate of analysis (COA) is digitally signed by our Quality Assurance Director in Seoul. It verifies particle count per vial, endotoxin limits ({"< 0.05 EU/mL"}), and HPLC purity percentages.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                These documents ensure seamless customs release and health authority compliance in over 45 export destinations worldwide.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <img
                src={koreanScientists}
                alt="Korean biological QC scientists issuing signed certificate of analysis reports"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Quality Certificate</p>
                <p className="mt-2 text-[0.9rem] text-navy">Digitally Signed Analytical COA</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {modal ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/70 p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={t("resources.modal.title")}
          onClick={close}
        >
          <div
            className="w-full max-w-md border border-hairline bg-card p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {sent ? (
              <>
                <h3 className="text-[1.2rem] font-semibold text-navy">
                  {t("resources.modal.success")}
                </h3>
                <button
                  onClick={close}
                  className="mt-8 rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-[#05231f]"
                >
                  {t("resources.modal.cancel")}
                </button>
              </>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <p className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science">
                  {modal}
                </p>
                <h3 className="mt-3 text-[1.25rem] font-semibold text-navy">
                  {t("resources.modal.title")}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {t("resources.modal.body")}
                </p>
                <div className="mt-6 grid gap-4">
                  {[
                    { k: "name", type: "text" },
                    { k: "company", type: "text" },
                    { k: "email", type: "email" },
                  ].map((f) => (
                    <label key={f.k} className="grid gap-2">
                      <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-navy/70">
                        {t(`resources.modal.${f.k}`)}
                      </span>
                      <input
                        required
                        type={f.type}
                        className="border border-hairline bg-background px-4 py-3 text-[0.95rem] text-navy outline-none focus:border-teal"
                      />
                    </label>
                  ))}
                </div>
                <div className="mt-7 flex gap-3">
                  <button
                    type="submit"
                    className="rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-[#05231f]"
                  >
                    {t("resources.modal.send")}
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-navy"
                  >
                    {t("resources.modal.cancel")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : null}

      <CTABand />
    </>
  );
}

