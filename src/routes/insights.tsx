import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { loadCmsPage } from "@/lib/cms-page";
import { ARTICLES, ARTICLE_CATEGORIES } from "@/data/articles";

export const Route = createFileRoute("/insights")({
  loader: () => loadCmsPage("insights"),
  head: () => ({ meta: [{ title: "Science & Insights — Vesco Science Seoul" }] }),
  component: Layout,
});

function Layout() {
  const pathname = useRouterState({ select: s => s.location.pathname });
  if (pathname !== "/insights") return <Outlet />;
  return <Index />;
}

function Index() {
  const { t } = useI18n();
  const cms: any = Route.useLoaderData();

  const hero = cms?.hero ?? {};
  // Use CMS articles if available, otherwise fall back to static ARTICLES
  const cmsArticles = cms?.articles;
  const articles = Array.isArray(cmsArticles) && cmsArticles.length > 0 ? cmsArticles : ARTICLES;
  const cmsCategories = cms?.categories;
  const cats: string[] = Array.isArray(cmsCategories) && cmsCategories.length > 0 ? cmsCategories : ARTICLE_CATEGORIES;

  const [active, setActive] = useState<string | null>(null);
  const shown = active ? articles.filter((a: any) => a.category === active) : articles;

  const chip = (on: boolean) =>
    `rounded-sm border px-4 py-2 text-[0.78rem] font-medium transition-colors ${on ? "border-teal bg-teal text-[#05231f]" : "border-hairline text-navy hover:border-teal hover:text-science"}`;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow ?? t("insights.eyebrow")}
        title={hero.title ?? t("insights.title")}
        lead={hero.intro ?? t("insights.intro")}
        image={hero.image ?? "/assets/molecular.jpg"}
        imageAlt="Advanced molecular structure visualization"
        crumb={{ label: t("insights.eyebrow"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <SectionHeading eyebrow={t("insights.eyebrow")} title={t("insights.title")} />
        <div className="mt-10 flex flex-wrap gap-2">
          <button onClick={() => setActive(null)} className={chip(active === null)}>{t("common.viewAll")} ({articles.length})</button>
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)} className={chip(active === c)}>{c}</button>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((a: any, i: number) => (
            <Reveal key={a.slug || i} delay={(i % 6) * 60}>
              <Link to="/insights/$slug" params={{ slug: a.slug }} className="card-flat group flex h-full flex-col p-8">
                <span className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science">{a.category}</span>
                <h3 className="mt-5 text-[1.15rem] leading-snug font-semibold text-navy">{a.title}</h3>
                <p className="mt-4 flex-1 text-[0.93rem] leading-relaxed text-muted-foreground">{a.excerpt}</p>
                <span className="mt-7 inline-flex items-center gap-3 text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-science">
                  <span className="h-px w-6 bg-teal transition-all duration-500 group-hover:w-10" />
                  {t("common.readMore")}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
