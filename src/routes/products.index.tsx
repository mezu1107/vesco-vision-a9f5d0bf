import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { loadCmsPage } from "@/lib/cms-page";

export const Route = createFileRoute("/products/")({
  loader: () => loadCmsPage("products"),
  head: () => ({ meta: [{ title: "B2B Product Catalogue — Vesco Science Korea" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const cms: any = Route.useLoaderData();

  const hero = cms?.hero ?? {};
  const categories: { key: string; title: string; items: { slug: string; name: string }[] }[] = cms?.categories ?? [];

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow ?? t("products.eyebrow")}
        title={hero.title ?? t("products.title")}
        lead={hero.intro ?? t("products.intro")}
        image={hero.image ?? "/assets/vials.jpg"}
        imageAlt="Vesco Science product vials"
        crumb={{ label: t("nav.products"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <div className="grid gap-14">
          {categories.map((cat, ci) => (
            <Reveal key={cat.key || ci} delay={ci * 60}>
              <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
                <div>
                  <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">{String(ci + 1).padStart(2, "0")}</span>
                  <h2 className="mt-4 text-[1.5rem] font-semibold text-navy">{cat.title}</h2>
                </div>
                <div className="grid gap-px bg-hairline sm:grid-cols-2">
                  {cat.items.map(item => (
                    <Link key={item.slug} to="/products/$slug" params={{ slug: item.slug }}
                      className="group flex items-center justify-between bg-card px-6 py-6 transition-colors hover:bg-secondary">
                      <span className="text-[1rem] font-medium text-navy group-hover:text-science">{item.name}</span>
                      <span className="h-px w-6 bg-teal transition-all duration-500 group-hover:w-10" />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
