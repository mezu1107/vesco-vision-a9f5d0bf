// ── Default page content ─────────────────────────────────────────────────────
// Images are served from Supabase Storage (public bucket "images").
// VITE_SUPABASE_URL is injected by Vite at build time into import.meta.env —
// this works in both client and SSR (Nitro/Vercel) bundles automatically.
// No typeof guards needed — import.meta.env is always available in Vite builds.
// ─────────────────────────────────────────────────────────────────────────────

const _base: string = import.meta.env.VITE_SUPABASE_URL ?? "";

function img(filename: string): string {
  if (!_base || _base === "https://placeholder-url.supabase.co") return "";
  return `${_base}/storage/v1/object/public/images/${filename}`;
}

export const defaultHomeData = {
  hero: {
    heading: "Advancing Regenerative Biotechnology",
    subheading: "From scientific discovery to scalable manufacturing.",
    body: "Vesco Science develops advanced biotechnology solutions through integrated R&D, formulation, manufacturing and quality systems.",
    buttonText: "Explore Our Technology",
    image: img("hero-lab.jpg"),
  },
  trustBar: [
    "R&D Driven",
    "Advanced Manufacturing",
    "Exosome Technology",
    "Regenerative Platforms",
    "OEM / ODM",
  ],
  about: {
    smallHeading: "WHO WE ARE",
    mainHeading: "Where Biotechnology Meets Manufacturing",
    copy: "Vesco Science combines biotechnology research, formulation expertise and manufacturing capabilities to develop advanced solutions for regenerative medicine, aesthetics and professional healthcare markets.",
    buttonText: "Discover Vesco Science →",
    image: img("cleanroom.jpg"),
  },
  coreTechnology: {
    heading: "Technology at the Cellular Level",
    buttonText: "Explore All Technologies →",
    cards: [
      { num: "01", title: "Exosome Technology",             body: "Extracellular vesicle development, purification, characterization and formulation." },
      { num: "02", title: "PDRN / PN Technology",           body: "Advanced regenerative material platforms and formulation development." },
      { num: "03", title: "Peptide Technology",             body: "Bioactive peptide and peptide-complex formulation capabilities." },
      { num: "04", title: "HA & Regenerative Formulation",  body: "Hyaluronic acid and advanced aesthetic/regenerative formulations." },
    ],
  },
  exosomeSection: {
    leftHeading: "EXOSOME TECHNOLOGY",
    leftSubheading: "From Cellular Source to Characterized Product",
    image: img("exosome.jpg"),
    process: ["Cell Source", "Culture", "Isolation", "Purification", "Characterization", "Formulation", "Quality Control"],
  },
  manufacturing: {
    heading: "From R&D to Scalable Manufacturing",
    copy: "Our integrated development approach connects research, formulation, production and quality control to support the transition from concept to commercial manufacturing.",
    steps: ["R&D", "Development", "Production", "Quality"],
    buttonText: "Explore Manufacturing →",
    image: img("vials.jpg"),
  },
  quality: {
    heading: "Quality Built Into Every Stage",
    points: ["Raw Material Control", "Process Control", "Analytical Testing", "Microbiological Testing", "Batch Traceability", "Storage & Distribution"],
    buttonText: "Our Quality System →",
    image: img("qc-lab.jpg"),
  },
  finalCta: {
    heading: "Let's Build the Future of Regenerative Biotechnology",
    copy: "Have a product concept, manufacturing requirement or partnership opportunity?",
    buttons: ["Talk to Our Team", "OEM / ODM Inquiry"],
  },
};

export const defaultAboutData = {
  hero: {
    heading: "Advancing Biotechnology Through Science & Manufacturing",
    copy: "Vesco Science Co., Ltd. is a South Korea–based biotechnology company focused on the research, development and manufacturing of advanced solutions for regenerative medicine, aesthetics and professional healthcare applications.\n\nBy connecting scientific development with controlled manufacturing, Vesco Science works to transform innovative biological technologies into reliable, scalable and market-ready solutions.",
    buttons: ["Explore Our Technology →", "Explore Our Manufacturing →"],
    image: img("cleanroom.jpg"),
  },
  whoWeAre: {
    heading: "WHO WE ARE",
    subheading: "Where Science Meets Scalable Manufacturing",
    copy: "At Vesco Science, we believe that meaningful innovation requires more than scientific discovery. It requires the ability to translate research into reproducible formulations, controlled manufacturing processes and consistently documented products.",
    capabilities: [
      { title: "Research & Development",   desc: "Scientific exploration and product development." },
      { title: "Advanced Biotechnology",   desc: "Platforms including exosome, PDRN/PN, peptide and regenerative technologies." },
      { title: "Formulation Development",  desc: "Development and optimization of formulations according to product requirements." },
      { title: "Manufacturing",            desc: "Controlled production, filling and packaging capabilities." },
      { title: "Quality & Analysis",       desc: "Product-specific testing, documentation and quality control." },
    ],
  },
  scientificApproach: {
    heading: "OUR SCIENTIFIC APPROACH",
    subheading: "FROM BIOLOGICAL SCIENCE TO FINISHED PRODUCT",
    copy: "At Vesco Science, we follow an integrated approach that connects scientific research with product development, controlled manufacturing, and quality assurance. From the initial biological concept to the finished product, each stage is designed to support consistency, precision, and product integrity.",
    image: img("qc-lab.jpg"),
  },
  manufacturing: {
    heading: "MANUFACTURING",
    subheading: "From Development to Production",
    copy: "Scientific innovation becomes commercially valuable when it can be translated into a controlled and scalable manufacturing process.\n\nOur manufacturing approach connects:",
    flow: ["R&D", "Product Development", "Process Optimization", "Production", "Quality Control", "Final Product"],
    footer: "This integrated structure supports the transition from product concept to commercial manufacturing.",
  },
  quality: {
    heading: "QUALITY",
    subheading: "Quality Built Into Every Stage",
    copy: "At Vesco Science, quality is integrated throughout the entire product lifecycle — from raw material selection and process development to manufacturing, testing, documentation, storage and distribution.\n\nOur quality approach is designed to support product consistency, process control, traceability and integrity while meeting the defined requirements of each product and market.",
    points: [
      { num: "01", title: "Raw Material Control",    desc: "Raw materials are carefully evaluated against defined specifications before entering the manufacturing process. This helps ensure material consistency, suitability, and quality from the very beginning." },
      { num: "02", title: "Process Control",          desc: "Manufacturing processes are performed under defined and monitored conditions. Controlled procedures help maintain consistency, reproducibility, and reliable production across batches." },
      { num: "03", title: "Analytical Testing",       desc: "Product-specific analytical testing is used to evaluate key quality attributes and characteristics. Testing helps verify that products meet their defined specifications and quality requirements." },
      { num: "04", title: "Microbiological Testing",  desc: "Relevant microbiological assessments are conducted according to product requirements and applicable standards. These controls help support product safety, quality, and microbiological integrity." },
      { num: "05", title: "Batch Traceability",       desc: "Each batch is supported by documented manufacturing and quality information. This enables traceability from raw materials and production through testing, review, and final release." },
      { num: "06", title: "Storage & Distribution",   desc: "Products are stored and transported according to their defined storage and handling requirements. Appropriate conditions help maintain product integrity and quality throughout the supply chain." },
    ],
  },
  partnership: {
    heading: "GLOBAL PARTNERSHIP",
    subheading: "Vesco Science × EverCeutical",
    title: "Strategic Global Partnership",
    copy: "Vesco Science collaborates with EverCeutical for the global marketing and commercialization of selected Vesco Science products, including exosome, filler and peptide-based solutions.",
    diagram: {
      left: "Vesco Science\nR&D • Technology • Manufacturing",
      right: "EverCeutical\nGlobal Marketing • Commercialization",
    },
    platforms: "Selected Product Platforms\nExosomes • HA & Fillers • Peptides • PDRN / PN • Regenerative Solutions",
  },
  visionMission: {
    vision: {
      heading: "OUR VISION",
      title: "Building the Future of Regenerative Biotechnology",
      copy: "We envision a future where advanced biotechnology can be developed, manufactured and delivered through reliable scientific and quality-driven systems.\n\nOur focus is on building technologies and partnerships that contribute to the continued advancement of regenerative medicine and professional aesthetic solutions.",
    },
    mission: {
      heading: "OUR MISSION",
      title: "Science With Purpose. Manufacturing With Precision.",
      copy: "Our mission is to connect:\n● Scientific Research\n● Advanced Technology\n● Manufacturing Excellence\n● Quality Systems\n\nto create innovative solutions for a rapidly evolving global biotechnology market.",
    },
  },
  finalCta: {
    heading: "FINAL CTA",
    title: "Let's Build the Next Generation of Biotechnology",
    copy: "Whether you are looking for advanced biotechnology platforms, product development or an OEM/ODM manufacturing partner, Vesco Science is ready to explore new opportunities.",
    buttonText: "Contact Vesco Science →",
  },
};
