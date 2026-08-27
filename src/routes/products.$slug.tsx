import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { en } from "@/locales/en";
import vials from "@/assets/vials.jpg";
import koreanCleanroom from "@/assets/korean-cleanroom-facility.jpg";
import koreanScientists from "@/assets/korean-bio-researchers.jpg";

const ALL_SLUGS = en.products.categories.flatMap((c) => c.items.map((i) => i.slug));

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    if (!ALL_SLUGS.includes(params.slug as (typeof ALL_SLUGS)[number])) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const label = (params.slug ?? "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const title = `${label} — Vesco Science Korea Product`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: `${label}: overview, manufacturing process, quality parameters, storage and documentation available from Vesco Science Korea.`,
        },
        { property: "og:title", content: title },
        { property: "og:description", content: `${label} manufactured in Korea under OEM/ODM.` },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Page,
});

type Category = { key: string; title: string; items: { slug: string; name: string }[] };

function Page() {
  const { slug } = Route.useParams();
  const { t, tx } = useI18n();
  const categories = tx<Category[]>("products.categories") ?? [];
  const category = categories.find((c) => c.items.some((i) => i.slug === slug));
  const item = category?.items.find((i) => i.slug === slug);
  const name = item?.name ?? slug.replace(/-/g, " ");

  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalSent, setModalSent] = useState(false);

  const closeModal = () => {
    setActiveModal(null);
    setModalSent(false);
  };

  const s = (k: string) => t(`products.detail.sections.${k}`);
  const rows: { label: string; value: string }[] = [
    { label: s("overview"), value: t("products.detail.genericOverview") },
    { label: s("source"), value: t("products.detail.genericSource") },
    { label: s("composition"), value: t("products.detail.genericComposition") },
    { label: s("process"), value: t("products.detail.genericProcess") },
    { label: s("specs"), value: t("products.detail.genericSpecs") },
    { label: s("qualityParams"), value: t("products.detail.genericQuality") },
    { label: s("storage"), value: t("products.detail.genericStorage") },
    { label: s("packaging"), value: t("products.detail.genericPackaging") },
    { label: s("application"), value: t("products.detail.genericApplication") },
    { label: s("formats"), value: t("products.detail.genericFormats") },
    { label: s("documentation"), value: t("products.detail.genericDocs") },
  ];

  const buttons = ["coa", "tds", "info", "sample"] as const;

  return (
    <>
      <PageHero
        eyebrow={category?.title ?? t("products.eyebrow")}
        title={name}
        lead={t("products.detail.genericOverview")}
        image={vials}
        imageAlt={`Vesco Science Korea - ${name} biological formulation`}
        crumb={{ label: name, homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow={t("products.eyebrow")} title={s("overview")} />
            <dl className="mt-10 grid gap-px bg-hairline">
              {rows.map((r) => (
                <div key={r.label} className="grid gap-2 bg-card p-6 sm:grid-cols-[200px_1fr]">
                  <dt className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science">
                    {r.label}
                  </dt>
                  <dd className="text-[0.95rem] leading-relaxed text-muted-foreground">
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* ---------- PRODUCT DETAIL IMAGE 2: KOREAN CLEANROOM ASEPTIC PROCESSING ---------- */}
            <div className="my-12">
              <Reveal>
                <div className="relative">
                  <img
                    src={koreanCleanroom}
                    alt={`Aseptic filling line and sterile batch production for ${name}`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <p className="mt-3 text-[0.82rem] italic text-muted-foreground">
                    Aseptic cGMP lyophilization & cleanroom filling suite for {name} in Seoul.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* ---------- PRODUCT DETAIL IMAGE 3: KOREAN QC LAB VERIFICATION ---------- */}
            <div className="my-12">
              <Reveal delay={100}>
                <div className="relative">
                  <img
                    src={koreanScientists}
                    alt={`Analytical HPLC & particle purity assay testing for ${name}`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <p className="mt-3 text-[0.82rem] italic text-muted-foreground">
                    HPLC chromatography and biological stability assay verification for {name}.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <aside className="card-flat sticky top-28 p-8">
              <h3 className="text-[1.05rem] font-semibold text-navy">{s("documentation")}</h3>
              <div className="mt-6 grid gap-3">
                {buttons.map((b) => (
                  <button
                    key={b}
                    onClick={() => setActiveModal(t(`products.detail.buttons.${b}`))}
                    className="flex w-full items-center justify-between border border-hairline px-5 py-3.5 text-[0.82rem] font-medium text-navy transition-colors hover:border-teal hover:text-science text-left"
                  >
                    {t(`products.detail.buttons.${b}`)}
                    <span className="h-px w-5 bg-teal" />
                  </button>
                ))}
              </div>
              {category ? (
                <>
                  <h4 className="mt-9 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science">
                    {category.title}
                  </h4>
                  <ul className="mt-4 grid gap-2">
                    {category.items
                      .filter((i) => i.slug !== slug)
                      .map((i) => (
                        <li key={i.slug}>
                          <Link
                            to="/products/$slug"
                            params={{ slug: i.slug }}
                            className="text-[0.9rem] text-muted-foreground transition-colors hover:text-science"
                          >
                            {i.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </>
              ) : null}
            </aside>
          </Reveal>
        </div>
      </Section>

      {/* ---------- INTERACTIVE DOCUMENTATION & SAMPLE REQUEST MODAL ---------- */}
      {activeModal ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/70 p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md border border-hairline bg-card p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {modalSent ? (
              <>
                <h3 className="text-[1.2rem] font-semibold text-navy">
                  Request Received for {name}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  Thank you. Our Seoul QA & Technical Regulatory team will verify your request and send the requested package ({activeModal}) within 24 business hours.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-8 rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-[#05231f]"
                >
                  Close Window
                </button>
              </>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setModalSent(true);
                }}
              >
                <p className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science">
                  {name} — {activeModal}
                </p>
                <h3 className="mt-3 text-[1.25rem] font-semibold text-navy">
                  Request Official Technical Package
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  Please provide your corporate details to receive validated Certificates of Analysis, Technical Data Sheets, or Evaluation Samples.
                </p>
                <div className="mt-6 grid gap-4">
                  {[
                    { k: "Full Name", type: "text" },
                    { k: "Company / Organization", type: "text" },
                    { k: "Corporate Email", type: "email" },
                    { k: "Destination Country", type: "text" },
                  ].map((f) => (
                    <label key={f.k} className="grid gap-2">
                      <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-navy/70">
                        {f.k}
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
                    Submit Request
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-navy"
                  >
                    Cancel
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


