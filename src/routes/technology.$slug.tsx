import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  SectionHeading,
  Reveal,
  ProcessFlow,
  TealButton,
} from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import exosomeImg from "@/assets/exosome.jpg";
import lyoImg from "@/assets/lyophilizer.jpg";
import molecularImg from "@/assets/molecular.jpg";
import vialsImg from "@/assets/vials.jpg";
import cleanroomImg from "@/assets/cleanroom.jpg";
import koreanCleanroom from "@/assets/korean-cleanroom-facility.jpg";
import koreanScientists from "@/assets/korean-bio-researchers.jpg";

const SLUG_IMAGES: Record<string, string> = {
  exosome: exosomeImg,
  "pdrn-pn": molecularImg,
  lyophilization: lyoImg,
  formulation: vialsImg,
  "cold-chain": cleanroomImg,
  custom: cleanroomImg,
};

const SLUGS = ["exosome", "pdrn-pn", "lyophilization", "formulation", "cold-chain", "custom"];

export const Route = createFileRoute("/technology/$slug")({
  loader: ({ params }) => {
    if (!SLUGS.includes(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const label = (params.slug ?? "").replace(/-/g, " ");
    const title = `${label.replace(/\b\w/g, (c) => c.toUpperCase())} — Vesco Science Korea Technology`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: `Vesco Science Korea ${label} platform: development approach, cGMP process control, and biological formulation impact.`,
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: `Vesco Science Korea ${label} platform for regenerative biotech and OEM/ODM manufacturing.`,
        },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Page,
});

type Block = { title: string; body: string };
type Card = { num: string; slug: string; title: string; body: string };
type Group = { title: string; items: string[] };

function Page() {
  const { slug } = Route.useParams();
  const { t, tx } = useI18n();
  const cards = tx<Card[]>("technology.cards") ?? [];
  const card = cards.find((c) => c.slug === slug);

  const pageKey =
    slug === "pdrn-pn"
      ? "pages.pdrnPage"
      : slug === "lyophilization"
        ? "pages.lyoPage"
        : slug === "formulation"
          ? "pages.formulationPage"
          : null;

  const blocks = pageKey ? (tx<Block[]>(`${pageKey}.blocks`) ?? []) : [];
  const isExosome = slug === "exosome";
  const groups = tx<Group[]>("characterization.groups") ?? [];
  const steps = tx<string[]>("exosome.steps") ?? [];

  const title = pageKey ? t(`${pageKey}.title`) : isExosome ? t("exosome.title") : (card?.title ?? slug);
  const lead = pageKey
    ? t(`${pageKey}.lead`)
    : isExosome
      ? t("pages.exosomePage.lead")
      : (card?.body ?? "");

  return (
    <>
      <PageHero
        eyebrow={t("technology.eyebrow")}
        title={title}
        lead={lead}
        {...(SLUG_IMAGES[slug] ? { image: SLUG_IMAGES[slug] } : {})}
        imageAlt={`Vesco Science Korea - ${title} platform illustration`}
        crumb={{ label: title, homeLabel: t("common.breadcrumbHome") }}
      />

      {isExosome ? (
        <>
          <Section>
            <div className="grid gap-12 lg:grid-cols-2">
              <SectionHeading
                eyebrow={t("exosome.eyebrow")}
                title={t("exosome.title")}
                intro={t("exosome.body1")}
              />
              <p className="text-[1.0625rem] leading-relaxed text-muted-foreground lg:pt-24">
                {t("exosome.body2")}
              </p>
            </div>
          </Section>

          <Section tone="navy">
            <SectionHeading invert eyebrow={t("exosome.eyebrow")} title={t("exosome.processTitle")} />
            <div className="mt-12">
              <ProcessFlow steps={steps} invert />
            </div>
          </Section>

          <Section tone="white">
            <SectionHeading
              eyebrow={t("characterization.eyebrow")}
              title={t("characterization.title")}
              intro={t("characterization.intro")}
            />
            <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
              {groups.map((g, i) => (
                <Reveal key={g.title} delay={i * 60}>
                  <div className="h-full bg-card p-7">
                    <h3 className="text-[1.05rem] font-semibold text-navy">{g.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {g.items.map((it) => (
                        <li key={it} className="text-[0.9rem] text-muted-foreground">
                          <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>
        </>
      ) : (
        <Section>
          <SectionHeading
            eyebrow={t("technology.eyebrow")}
            title={title}
            intro={card?.body ?? t("technology.intro")}
          />
          {blocks.length ? (
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {blocks.map((b, i) => (
                <Reveal key={b.title} delay={i * 70}>
                  <article className="card-flat h-full p-8">
                    <h3 className="text-[1.1rem] font-semibold text-navy">{b.title}</h3>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {b.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : null}

          {/* ---------- DEEP PLATFORM SPECIFICATIONS GRID ---------- */}
          <div className="mt-16 border border-hairline bg-card p-8 md:p-10">
            <h3 className="eyebrow text-science">Technical Platform Specifications & Standards</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Purity Index", val: "> 99.4% HPLC Single-Peak Integrity" },
                { label: "Endotoxin Limit", val: "< 0.05 EU/mL (LAL Kinetic Chromogenic)" },
                { label: "Bioburden Standard", val: "Sterile (SAL 10^-6 ISO 13485 Verified)" },
                { label: "Storage Stability", val: "24 Months (-20°C / Lyophilized +4°C)" },
              ].map((spec) => (
                <div key={spec.label} className="border-l-2 border-teal bg-background p-5">
                  <span className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-navy/70">
                    {spec.label}
                  </span>
                  <p className="mt-2 text-[0.95rem] font-medium text-navy">{spec.val}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* ---------- KOREAN CLEANROOM ENGINEERING SECTION (IMAGE 2) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={koreanCleanroom}
                alt={`cGMP processing facility in Korea for ${title}`}
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Facility Standard</p>
                <p className="mt-2 text-[0.9rem] text-navy">Seoul cGMP Manufacturing Suite</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Aseptic Control"
                title={`Rigorous cGMP Execution for ${title}`}
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                All unit operations for the {title} platform are performed inside Class 100 cleanroom environments located in our Seoul facility. Automated pressure cascading and inline filtration ensure compliance with Korean MFDS regulations.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                This manufacturing rigor guarantees zero bioburden contamination and batch-to-batch structural consistency.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- KOREAN SCIENTISTS ANALYTICAL VERIFICATION (IMAGE 3) ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Scientific Rigor"
                title={`Analytical Quality Verification for ${title}`}
              />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Our Seoul biological testing lab runs daily HPLC purity, molecular weight distribution, and particle concentration assays to confirm that every batch meeting the specifications of the {title} platform.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                Comprehensive test reports accompany each lot shipped to OEM/ODM brand partners across North America, Europe, and Asia.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <img
                src={koreanScientists}
                alt={`Korean biological QC scientists verifying assays for ${title}`}
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">Analytical Control</p>
                <p className="mt-2 text-[0.9rem] text-navy">Seoul Quality Verification Laboratory</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow={t("technology.eyebrow")} title={t("technology.title")} />
        <div className="mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {cards
            .filter((c) => c.slug !== slug)
            .map((c) => (
              <Link
                key={c.slug}
                to="/technology/$slug"
                params={{ slug: c.slug }}
                className="group bg-card p-7 transition-colors hover:bg-card/60"
              >
                <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                  {c.num}
                </span>
                <h3 className="mt-4 text-[1.02rem] font-semibold text-navy group-hover:text-science">
                  {c.title}
                </h3>
              </Link>
            ))}
        </div>
        <div className="mt-10">
          <TealButton to="/products">{t("products.title")}</TealButton>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

