import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import vials from "@/assets/vials.jpg";
import koreanCleanroom from "@/assets/korean-cleanroom-facility.jpg";
import koreanScientists from "@/assets/korean-bio-researchers.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "B2B Product Catalogue — Exosome, PDRN/PN, Korean Aesthetics" },
      {
        name: "description",
        content:
          "Vesco Science Korean B2B catalogue: lyophilized exosome vials, PDRN/PN polynucleotide skin boosters, HA cross-linked matrices, and custom contract formulations.",
      },
      { property: "og:title", content: "B2B Product Catalogue — Vesco Science Korea" },
      {
        property: "og:description",
        content: "A scientific catalogue organised by Korean biological technology platform, supplied under OEM/ODM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Category = { key: string; title: string; items: { slug: string; name: string }[] };

function Page() {
  const { t, tx } = useI18n();
  const categories = tx<Category[]>("products.categories") ?? [];

  return (
    <>
      <PageHero
        eyebrow={t("products.eyebrow")}
        title={t("products.title")}
        lead={t("products.intro")}
        image={vials}
        imageAlt="Vesco Science Korean lyophilized exosome and PDRN biological product vials"
        crumb={{ label: t("nav.products"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* ---------- CATEGORY LISTING ---------- */}
      <Section>
        <div className="grid gap-14">
          {categories.map((cat, ci) => (
            <Reveal key={cat.key} delay={ci * 60}>
              <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
                <div>
                  <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-[1.5rem] font-semibold text-navy">{cat.title}</h2>
                </div>
                <div className="grid gap-px bg-hairline sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <Link
                      key={item.slug}
                      to="/products/$slug"
                      params={{ slug: item.slug }}
                      className="group flex items-center justify-between bg-card px-6 py-6 transition-colors hover:bg-secondary"
                    >
                      <span className="text-[1rem] font-medium text-navy group-hover:text-science">
                        {item.name}
                      </span>
                      <span className="h-px w-6 bg-teal transition-all duration-500 group-hover:w-10" />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- KOREAN CGMP MANUFACTURING OF BIOLOGICAL PRODUCTS (IMAGE 2) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={koreanCleanroom}
                alt="Automated filling line for exosome vials and PDRN syringes in Korean cGMP cleanroom"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Aseptic Production</p>
                <p className="mt-2 text-[0.9rem] text-navy">Korean cGMP Biological Filling Suite</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Pure Korean Quality"
                title="Strict cGMP Production Standards for Every Product Line"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                All exosome powders, PDRN solutions, and dermal skin boosters in our B2B catalogue are produced under strict Korean MFDS cGMP standards. We ensure zero endotoxin contamination, precise molecular mass verification, and full batch traceability.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                Our ISO Class 5 sterile filling suites prevent cross-contamination and preserve peak biological activity for global distribution.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- KOREAN R&D QUALITY CONTROL & ASSAY (IMAGE 3) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Analytical Testing"
                title="Rigorous Analytical Verification for International Dossiers"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Every catalogue batch undergoes complete Quality Control (QC) in our Seoul lab—including High-Performance Liquid Chromatography (HPLC), Nanoparticle Tracking Analysis (NTA), and accelerated thermal stability testing.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                We supply complete Certificate of Analysis (COA) documents with every shipment, ensuring effortless product registration in your destination market.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <img
                src={koreanScientists}
                alt="Korean biological QC technicians conducting assay and purity tests in laboratory"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Quality Control</p>
                <p className="mt-2 text-[0.9rem] text-navy">Seoul Laboratory Analytical Desk</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

