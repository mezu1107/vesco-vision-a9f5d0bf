import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section, Reveal, TealButton, SectionHeading } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { ARTICLES, getArticle } from "@/data/articles";
import seoulCampus from "@/assets/seoul-biotech-campus.jpg";
import koreanCleanroom from "@/assets/korean-cleanroom-facility.jpg";
import koreanScientists from "@/assets/korean-bio-researchers.jpg";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — Vesco Science" }, { name: "robots", content: "noindex" }],
      };
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

function Page() {
  const { article } = Route.useLoaderData();
  const { t, tx } = useI18n();
  const sections = tx<ArticleSection[]>("article.sections") ?? [];
  const related = ARTICLES.filter(
    (a) => a.category === article.category && a.slug !== article.slug,
  ).slice(0, 4);

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
          <article>
            <Link
              to="/insights"
              className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-science"
            >
              ← {t("article.back")}
            </Link>

            <div className="mt-10 grid gap-10">
              {sections.map((s, i) => (
                <Reveal key={s.title} delay={i * 60}>
                  <section>
                    <h2 className="text-[1.4rem] leading-snug font-semibold text-navy">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </section>
                </Reveal>
              ))}
            </div>

            {/* ---------- ARTICLE IMAGE 2: KOREAN CLEANROOM PROTOCOL ---------- */}
            <div className="my-12">
              <Reveal>
                <div className="relative">
                  <img
                    src={koreanCleanroom}
                    alt="cGMP cleanroom suite for exosome processing and filling in Seoul"
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <p className="mt-3 text-[0.82rem] italic text-muted-foreground">
                    Figure 1: cGMP cleanroom environmental monitoring and aseptic filling line at Vesco Science Korea.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* ---------- ARTICLE IMAGE 3: KOREAN R&D SCIENTISTS ---------- */}
            <div className="my-12">
              <Reveal delay={100}>
                <div className="relative">
                  <img
                    src={koreanScientists}
                    alt="Korean R&D research scientists conducting bio-assay and analytical testing"
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <p className="mt-3 text-[0.82rem] italic text-muted-foreground">
                    Figure 2: Biological assays and particle size distribution (NTA) testing by Seoul research staff.
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
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

