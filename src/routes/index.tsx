import { createFileRoute, Link } from "@tanstack/react-router";
import { getPageData } from "@/lib/page-api";
import {
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
  TealButton,
} from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/")({
  loader: () => getPageData({ data: "home" }),
  component: Home,
});

function Home() {
  const data: any = Route.useLoaderData();

  return (
    <>
      {/* 01. HERO */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-navy-deep">
        <img
          src={data.hero.image}
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          style={{ animation: "vs-slow-zoom 26s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/30" />
        <div className="absolute inset-0 navy-grid opacity-40" />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-28 pb-24 md:px-10">
          <Reveal>
            <h1 className="max-w-4xl text-[clamp(2.4rem,5.6vw,4.4rem)] leading-[1.03] font-semibold text-white">
              {data.hero.heading}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 font-display text-[clamp(1.05rem,1.7vw,1.4rem)] text-teal">
              {data.hero.subheading}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-white/70 whitespace-pre-wrap">
              {data.hero.body}
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-11">
              <TealButton to="/technology">{data.hero.buttonText}</TealButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02. TRUST / CAPABILITY BAR */}
      <div className="bg-background py-6 border-b border-hairline">
        <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center gap-6 px-6 md:justify-between text-navy/80 text-[0.92rem] font-medium tracking-wide">
          {data.trustBar.map((item: string, i: number) => (
            <div key={i} className="flex items-center gap-4">
              <span>{item}</span>
              {i < data.trustBar.length - 1 && <span className="text-teal/40 hidden md:inline">•</span>}
            </div>
          ))}
        </div>
      </div>

      {/* 03. ABOUT VESCO */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <SectionHeading eyebrow={data.about.smallHeading} title={data.about.mainHeading} />
              <p className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground whitespace-pre-wrap">
                {data.about.copy}
              </p>
              <div className="mt-10">
                <TealButton to="/about" variant="outline">
                  {data.about.buttonText}
                </TealButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <img
              src={data.about.image}
              alt="Lab / scientist / facility"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* 04. CORE TECHNOLOGY */}
      <Section tone="white">
        <Reveal>
          <SectionHeading title={data.coreTechnology.heading} />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.coreTechnology.cards.map((card: any, i: number) => (
            <Reveal key={i} delay={i * 70}>
              <div className="h-full border-t-2 border-teal/70 bg-background p-7 hover:shadow-lg transition">
                <span className="font-display text-[0.8rem] font-bold text-teal">{card.num}</span>
                <h3 className="mt-3 text-[1.02rem] font-semibold text-navy">{card.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <div className="mt-12 text-center md:text-left">
             <TealButton to="/technology" variant="outline">{data.coreTechnology.buttonText}</TealButton>
          </div>
        </Reveal>
      </Section>

      {/* 05. EXOSOME FEATURE SECTION */}
      <section className="relative isolate overflow-hidden bg-navy">
        <img
          src={data.exosomeSection.image}
          alt="Exosome Technology"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/95 via-navy/85 to-navy-deep/95" />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
           <div className="grid gap-14 lg:grid-cols-2">
             <Reveal>
                <SectionHeading eyebrow={data.exosomeSection.leftHeading} title={data.exosomeSection.leftSubheading} invert />
             </Reveal>
             <Reveal delay={150}>
                <div>
                   <h3 className="text-teal mb-6 font-display font-medium tracking-wide uppercase">Scientific Process</h3>
                   <div className="flex flex-col gap-3">
                     {data.exosomeSection.process.map((step: string, i: number) => (
                        <div key={i} className="flex flex-col">
                           <div className="bg-white/10 text-white/90 px-5 py-3 border border-white/20 inline-block font-semibold rounded-sm self-start">
                             {step}
                           </div>
                           {i < data.exosomeSection.process.length - 1 && (
                             <div className="text-teal font-bold ml-6 my-1">↓</div>
                           )}
                        </div>
                     ))}
                   </div>
                </div>
             </Reveal>
           </div>
        </div>
      </section>

      {/* 06. MANUFACTURING */}
      <Section tone="white">
         <Reveal>
            <SectionHeading title={data.manufacturing.heading} />
            <p className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground max-w-3xl whitespace-pre-wrap">
                {data.manufacturing.copy}
            </p>
         </Reveal>
         <div className="mt-12 flex flex-col md:flex-row items-center gap-4 text-navy font-semibold text-lg">
             {data.manufacturing.steps.map((step: string, i: number) => (
                <Reveal key={i} delay={i * 100} className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-hairline rounded-sm border border-navy/10">{step}</div>
                  {i < data.manufacturing.steps.length - 1 && <span className="text-teal font-bold hidden md:inline">→</span>}
                  {i < data.manufacturing.steps.length - 1 && <span className="text-teal font-bold md:hidden">↓</span>}
                </Reveal>
             ))}
         </div>
         <Reveal delay={200}>
            <div className="mt-12">
               <TealButton to="/oem">{data.manufacturing.buttonText}</TealButton>
            </div>
         </Reveal>
      </Section>

      {/* 07. QUALITY */}
      <Section className="bg-slate-50">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div>
              <SectionHeading title={data.quality.heading} />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                 {data.quality.points.map((pt: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                       <span className="w-2 h-2 rounded-full bg-teal shrink-0"></span>
                       <span className="text-navy font-medium">{pt}</span>
                    </li>
                 ))}
              </ul>
              <div className="mt-10">
                <TealButton to="/quality" variant="outline">
                  {data.quality.buttonText}
                </TealButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={data.quality.image}
              alt="Quality built in every stage"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* 09. FINAL CTA */}
      <section className="bg-teal text-white py-20 px-6 text-center">
         <Reveal>
         <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">{data.finalCta.heading}</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10">{data.finalCta.copy}</p>
            <div className="flex flex-wrap gap-4 justify-center">
               <TealButton to="/contact" className="!bg-navy !text-white hover:!bg-navy-deep">{data.finalCta.buttons[0]}</TealButton>
               <TealButton to="/contact" className="!bg-transparent border border-white hover:!bg-white/10">{data.finalCta.buttons[1]}</TealButton>
            </div>
         </div>
         </Reveal>
      </section>

    </>
  );
}
