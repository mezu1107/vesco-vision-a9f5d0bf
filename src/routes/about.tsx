import { createFileRoute } from "@tanstack/react-router";
import { getPageData } from "@/lib/page-api";

import { Eyebrow, Reveal, Section, SectionHeading, TealButton } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/about")({
   loader: () => getPageData({ data: "about" }),
   component: AboutPage,
});

function AboutPage() {
   const data: any = Route.useLoaderData();

   return (
      <>
         {/* HERO */}
         <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-navy-deep">
            <img
               src={data.hero.image}
               alt="About Hero"
               className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/40" />
            <div className="relative mx-auto w-full max-w-[1240px] px-6 py-24 md:px-10">
               <Reveal>
                  <h1 className="max-w-4xl text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] font-semibold text-white">
                     {data.hero.heading}
                  </h1>
               </Reveal>
               <Reveal delay={100}>
                  <p className="mt-8 max-w-3xl text-[1.0625rem] leading-relaxed text-white/80 whitespace-pre-wrap">
                     {data.hero.copy}
                  </p>
               </Reveal>
               <Reveal delay={200}>
                  <div className="mt-10 flex flex-wrap gap-4">
                     <TealButton to="/technology">{data.hero.buttons[0]}</TealButton>
                     <TealButton to="/oem" variant="ghost">{data.hero.buttons[1]}</TealButton>
                  </div>
               </Reveal>
            </div>
         </section>

         {/* WHO WE ARE */}
         <Section tone="white">
            <Reveal>
               <SectionHeading eyebrow={data.whoWeAre.heading} title={data.whoWeAre.subheading} />
               <p className="mt-6 text-[1.1rem] leading-relaxed text-muted-foreground max-w-4xl">
                  {data.whoWeAre.copy}
               </p>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
               {data.whoWeAre.capabilities.map((cap: any, i: number) => (
                  <Reveal key={i} delay={i * 80}>
                     <div className="bg-background p-8 outline outline-hairline h-full shadow-sm hover:shadow-md transition">
                        <h3 className="text-[1.1rem] font-semibold text-navy mb-3">{cap.title}</h3>
                        <p className="text-muted-foreground text-[0.95rem] leading-relaxed">{cap.desc}</p>
                     </div>
                  </Reveal>
               ))}
            </div>
         </Section>

         {/* SCIENTIFIC APPROACH & MANUFACTURING */}
         <Section className="bg-slate-50">
            <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] items-start">
               <Reveal>
                  <img src={data.scientificApproach.image} className="w-full h-auto aspect-video object-cover" alt="Scientific Approach" />
               </Reveal>
               <div>
                  <Reveal>
                     <SectionHeading eyebrow={data.scientificApproach.heading} title={data.scientificApproach.subheading} />
                     <p className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground whitespace-pre-wrap">
                        {data.scientificApproach.copy}
                     </p>
                  </Reveal>

                  <Reveal delay={100}>
                     <div className="mt-14">
                        <SectionHeading eyebrow={data.manufacturing.heading} title={data.manufacturing.subheading} />
                        <p className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground whitespace-pre-wrap">
                           {data.manufacturing.copy}
                        </p>

                        <div className="mt-8 flex flex-col items-start gap-2">
                           {data.manufacturing.flow.map((flow: string, i: number) => (
                              <div key={i} className="flex items-center">
                                 <div className="bg-teal text-white px-4 py-2 font-semibold text-sm rounded-sm">
                                    {flow}
                                 </div>
                                 {i < data.manufacturing.flow.length - 1 && <span className="text-teal ml-4">↓</span>}
                              </div>
                           ))}
                        </div>
                        <p className="mt-8 text-[0.95rem] leading-relaxed text-muted-foreground italic">
                           {data.manufacturing.footer}
                        </p>
                     </div>
                  </Reveal>
               </div>
            </div>
         </Section>

         {/* QUALITY */}
         <Section tone="white">
            <Reveal>
               <SectionHeading eyebrow={data.quality.heading} title={data.quality.subheading} />
               <p className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground max-w-4xl whitespace-pre-wrap">
                  {data.quality.copy}
               </p>
            </Reveal>
            <div className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
               {data.quality.points.map((pt: any, idx: number) => (
                  <Reveal key={idx} delay={idx * 60}>
                     <div className="h-full bg-background p-8">
                        <span className="font-display text-[0.8rem] font-bold tracking-[0.15em] text-teal block mb-4">
                           {pt.num}
                        </span>
                        <h3 className="text-[1.1rem] font-semibold text-navy mb-3">{pt.title}</h3>
                        <p className="text-muted-foreground text-[0.95rem] leading-relaxed">{pt.desc}</p>
                     </div>
                  </Reveal>
               ))}
            </div>
         </Section>

         {/* GLOBAL PARTNERSHIP */}
         <Section className="bg-navy text-white">
            <Reveal>
               <SectionHeading eyebrow={data.partnership.heading} title={data.partnership.subheading} invert />
               <h3 className="mt-8 text-2xl font-semibold text-teal">{data.partnership.title}</h3>
               <p className="mt-6 text-[1.05rem] leading-relaxed text-white/80 max-w-4xl">
                  {data.partnership.copy}
               </p>
            </Reveal>
            <Reveal delay={120}>
               <div className="mt-12 bg-white/5 border border-white/10 p-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
                  <div className="whitespace-pre-wrap font-semibold text-lg">{data.partnership.diagram.left}</div>
                  <div className="text-3xl text-teal">×</div>
                  <div className="whitespace-pre-wrap font-semibold text-lg text-right">{data.partnership.diagram.right}</div>
               </div>
               <div className="mt-10 bg-teal text-white p-6 text-center whitespace-pre-wrap font-semibold">
                  {data.partnership.platforms}
               </div>
            </Reveal>
         </Section>

         {/* VISION & MISSION */}
         <Section tone="white">
            <div className="grid md:grid-cols-2 gap-14">
               <Reveal>
                  <SectionHeading eyebrow={data.visionMission.vision.heading} title={data.visionMission.vision.title} />
                  <p className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground whitespace-pre-wrap">
                     {data.visionMission.vision.copy}
                  </p>
               </Reveal>
               <Reveal delay={100}>
                  <SectionHeading eyebrow={data.visionMission.mission.heading} title={data.visionMission.mission.title} />
                  <p className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground whitespace-pre-wrap">
                     {data.visionMission.mission.copy}
                  </p>
               </Reveal>
            </div>
         </Section>

         {/* FINAL CTA */}
         <section className="bg-teal text-white py-24 px-6 text-center">
            <Reveal>
               <div className="max-w-[800px] mx-auto">
                  <h3 className="eyebrow !text-white/80 mb-4">{data.finalCta.heading}</h3>
                  <h2 className="text-3xl md:text-5xl font-semibold mb-6">{data.finalCta.title}</h2>
                  <p className="text-lg md:text-xl text-white/90 mb-10">{data.finalCta.copy}</p>
                  <TealButton to="/contact" className="!bg-navy !text-white hover:!bg-navy-deep px-8 py-4 text-lg">
                     {data.finalCta.buttonText}
                  </TealButton>
               </div>
            </Reveal>
         </section>

      </>
   );
}
