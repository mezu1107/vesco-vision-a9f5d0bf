import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { ARTICLES, ARTICLE_CATEGORIES } from "@/data/articles";
import molecular from "@/assets/molecular.jpg";
import koreanScientists from "@/assets/korean-bio-researchers.jpg";
import koreanSupportCenter from "@/assets/korean-faq-support-center.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Science & Insights — Vesco Science Seoul Knowledge Center" },
      {
        name: "description",
        content:
          "Peer-reviewed research and industry articles on stem cell exosomes, PDRN/PN biological platforms, cGMP manufacturing, and Korean biotechnology regulatory standards.",
      },
      { property: "og:title", content: "Science & Insights — Vesco Science Seoul" },
      {
        property: "og:description",
        content: "A B2B knowledge center for Korean regenerative biotechnology and advanced cGMP manufacturing practice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Layout,
});

function Layout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/insights") return <Outlet />;
  return <Index />;
}

function Index() {
  const { t } = useI18n();
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? ARTICLES.filter((a) => a.category === active) : ARTICLES;

  const chip = (on: boolean) =>
    `rounded-sm border px-4 py-2 text-[0.78rem] font-medium transition-colors ${
      on
        ? "border-teal bg-teal text-[#05231f]"
        : "border-hairline text-navy hover:border-teal hover:text-science"
    }`;

  return (
    <>
      <PageHero
        eyebrow={t("insights.eyebrow")}
        title={t("insights.title")}
        lead={t("insights.intro")}
        image={molecular}
        imageAlt="Advanced exosome molecular structure visualization"
        crumb={{ label: t("insights.eyebrow"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* ---------- ARTICLE GRID & FILTER ---------- */}
      <Section>
        <SectionHeading eyebrow={t("insights.eyebrow")} title={t("insights.title")} />

        <div className="mt-10 flex flex-wrap gap-2">
          <button onClick={() => setActive(null)} className={chip(active === null)}>
            {t("common.viewAll")} ({ARTICLES.length})
          </button>
          {ARTICLE_CATEGORIES.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={chip(active === c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 6) * 60}>
              <Link
                to="/insights/$slug"
                params={{ slug: a.slug }}
                className="card-flat group flex h-full flex-col p-8"
              >
                <span className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science">
                  {a.category}
                </span>
                <h3 className="mt-5 text-[1.15rem] leading-snug font-semibold text-navy">
                  {a.title}
                </h3>
                <p className="mt-4 flex-1 text-[0.93rem] leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <span className="mt-7 inline-flex items-center gap-3 text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-science">
                  <span className="h-px w-6 bg-teal transition-all duration-500 group-hover:w-10" />
                  {t("common.readMore")}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- KOREAN BIOTECH RESEARCH METHODOLOGY (IMAGE 2) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={koreanScientists}
                alt="Korean biological researchers reviewing analytical data in modern laboratory"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">R&D Scientific Division</p>
                <p className="mt-2 text-[0.9rem] text-navy">Pangyo Biotech Valley Research Team</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Scientific Rigor"
                title="Pioneering Korean Exosome & Regenerative Publications"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Our scientific publications reflect years of proprietary research conducted in South Korea's premier biotechnology hubs. We share key insights on tangential flow filtration (TFF), nano-tracking analysis (NTA), and lyophilization preservation.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                By publishing detailed technical whitepapers, we aim to establish transparent quality benchmarks for biological skin boosters and exosome aesthetics across the global healthcare market.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- SEO KNOWLEDGE CENTER & DOCUMENTATION (IMAGE 3) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Knowledge Sharing"
                title="Seoul Biotech Partner Library & Regulatory Whitepapers"
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Access comprehensive B2B technical briefs created by our Seoul regulatory team. Our insights cover international dossier formatting (EU CPNP, US FDA, MFDS), cold-chain air cargo protocols, and ingredient compatibility guidelines.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                We empower our OEM/ODM brand partners with verified scientific literature to support their clinical marketing claims and regulatory registration processes.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <img
                src={koreanSupportCenter}
                alt="Korean technical documentation and regulatory advisory specialists in Seoul conference room"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Knowledge Center</p>
                <p className="mt-2 text-[0.9rem] text-navy">Seoul B2B Regulatory & Technical Library</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

