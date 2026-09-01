import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section, Reveal, TealButton, SectionHeading } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { ARTICLES } from "@/data/articles";
import { loadCmsPage } from "@/lib/cms-page";
import seoulCampus from "@/assets/seoul-biotech-campus.jpg";
import koreanCleanroom from "@/assets/korean-cleanroom-facility.jpg";
import koreanScientists from "@/assets/korean-bio-researchers.jpg";

export const Route = createFileRoute("/insights/$slug")({
  loader: async ({ params }) => {
    // Load CMS insights data to get any admin-added articles
    const cmsData = await loadCmsPage("insights");
    const cmsArticles: typeof ARTICLES = Array.isArray(cmsData?.articles) && cmsData.articles.length > 0
      ? cmsData.articles
      : [];

    // Merge: CMS articles override static ones by slug; new CMS slugs are appended
    const merged = mergeArticles(ARTICLES, cmsArticles);

    // Find the article — CMS version first, then static fallback
    const article = merged.find((a) => a.slug === params.slug);
    if (!article) throw notFound();

    return { article, cmsData };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — Vesco Science" }, { name: "robots", content: "noindex" }] };
    }
    const { title, excerpt } = loaderData.article;
    return {
      meta: [
        { title: `${title} — Science & Insights | Vesco Science Korea` },
        { name: "description", content: excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/insights/${loaderData.article.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: excerpt,
            articleSection: loaderData.article.category,
            publisher: { "@type": "Organization", name: "Vesco Science Korea" },
          }),
        },
      ],
    };
  },
  component: Page,
});

type ArticleSection = { title: string; body: string };

/**
 * Merge static articles with CMS articles.
 * - CMS article with matching slug overrides the static one.
 * - CMS articles with new slugs are appended.
 */
function mergeArticles(
  staticArticles: typeof ARTICLES,
  cmsArticles: typeof ARTICLES,
): typeof ARTICLES {
  if (!cmsArticles.length) return staticArticles;

  const result = [...staticArticles];
  for (const cmsArt of cmsArticles) {
    if (!cmsArt.slug) continue; // skip malformed entries
    const idx = result.findIndex((a) => a.slug === cmsArt.slug);
    if (idx >= 0) {
      // Override existing static article with CMS version
      result[idx] = cmsArt;
    } else {
      // New article added via admin
      result.push(cmsArt);
    }
  }
  return result;
}

function Page() {
  const { article, cmsData } = Route.useLoaderData();
  const { t, tx } = useI18n();

  // Body sections — i18n-driven (same 3 sections for all articles, by design)
  const sections = tx<ArticleSection[]>("article.sections") ?? [];

  // Build full articles list for "related" sidebar (same merge logic)
  const cmsArticles: typeof ARTICLES = Array.isArray(cmsData?.articles) && cmsData.articles.length > 0
    ? cmsData.articles
    : [];
  const allArticles = mergeArticles(ARTICLES, cmsArticles);

  const related = allArticles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        lead={article.excerpt}
        image={seoulCampus}
        imageAlt="Vesco Science Research & Innovation Hub in Seoul, South Korea"
        crumb={{ label: t("article.eyebrow"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          {/* ── Article body ─────────────────────────────────────── */}
          <article>
            <Link
              to="/insights"
              className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-science"
            >
              ← {t("article.back")}
            </Link>

            {/* Sections */}
            <div className="mt-10 grid gap-10">
              {sections.map((s, i) => (
                <Reveal key={i} delay={i * 60}>
                  <section>
                    <h2 className="text-[1.4rem] leading-snug font-semibold text-navy">{s.title}</h2>
                    <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">{s.body}</p>
                  </section>
                </Reveal>
              ))}
            </div>

            {/* Cleanroom image */}
            <div className="my-12">
              <Reveal>
                <div className="relative">
                  <img
                    src={koreanCleanroom}
                    alt="cGMP cleanroom suite for exosome processing and filling in Seoul"
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <p className="mt-3 text-[0.82rem] italic text-muted-foreground">
                    Figure 1: cGMP cleanroom environmental monitoring and aseptic filling line at
                    Vesco Science Korea.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Scientists image */}
            <div className="my-12">
              <Reveal delay={100}>
                <div className="relative">
                  <img
                    src={koreanScientists}
                    alt="Korean R&D research scientists conducting bio-assay and analytical testing"
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <p className="mt-3 text-[0.82rem] italic text-muted-foreground">
                    Figure 2: Biological assays and particle size distribution (NTA) testing by Seoul
                    research staff.
                  </p>
                </div>
              </Reveal>
            </div>

            <p className="mt-14 border-t border-hairline pt-6 text-[0.85rem] text-muted-foreground">
              {t("article.note")}
            </p>

            <div className="mt-10">
              <TealButton to="/contact">{t("article.cta")}</TealButton>
            </div>
          </article>

          {/* ── Related articles sidebar ──────────────────────── */}
          <Reveal>
            <aside className="card-flat sticky top-28 p-8">
              <h3 className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science">
                {t("article.related")}
              </h3>
              <ul className="mt-6 grid gap-4">
                {related.map((r) => (
                  <li key={r.slug} className="border-t border-hairline pt-4 first:border-0 first:pt-0">
                    <Link
                      to="/insights/$slug"
                      params={{ slug: r.slug }}
                      className="text-[0.95rem] leading-snug font-medium text-navy transition-colors hover:text-science"
                    >
                      {r.title}
                    </Link>
                    <p className="mt-1 text-[0.8rem] text-muted-foreground line-clamp-2">
                      {r.excerpt}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Category tag */}
              <div className="mt-8 border-t border-hairline pt-6">
                <span className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-science">
                  Category
                </span>
                <p className="mt-2 text-[0.9rem] font-medium text-navy">{article.category}</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
