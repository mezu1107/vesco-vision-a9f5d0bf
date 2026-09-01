/**
 * Default content for every page that can be edited via the admin panel.
 * All image values are built from the Supabase Storage public URL so images
 * are always served from Supabase — zero local file dependency.
 *
 * DO NOT use static asset imports here. This file runs inside createServerFn
 * handlers in the Vercel/Nitro Node.js runtime where Vite bundling is finished.
 */

// Build the Supabase Storage base URL at module load time.
// import.meta.env.VITE_SUPABASE_URL is injected by Vite into both client and
// SSR bundles (via vite.config.ts define).
const _S: string =
  typeof import.meta !== "undefined"
    ? ((import.meta as any).env?.VITE_SUPABASE_URL ?? "")
    : "";

// Returns a permanent Supabase public URL, or "" if not configured yet.
function img(filename: string): string {
  if (!_S || _S === "https://placeholder-url.supabase.co") return "";
  return `${_S}/storage/v1/object/public/images/${filename}`;
}

export const PAGE_DEFAULTS: Record<string, any> = {
  // home and about use fallback.ts
  home: null,
  about: null,

  // ── Facility ────────────────────────────────────────────────────────────
  facility: {
    hero: {
      eyebrow: "Manufacturing",
      title: "Where Science Becomes Scalable",
      intro: "Development, production, filling and quality control operate as one controlled environment — so a validated laboratory process becomes a repeatable commercial batch.",
      image: img("vials.jpg"),
    },
    areas: [
      { title: "R&D Laboratory",             body: "Formulation development and method work." },
      { title: "Cleanroom",                   body: "Controlled environment for aseptic operations." },
      { title: "Production Area",             body: "Compounding and bulk processing." },
      { title: "Filling & Packaging",         body: "Vial filling, sealing and secondary packaging." },
      { title: "Quality Control Laboratory",  body: "Analytical and microbiological testing." },
      { title: "Storage",                     body: "Segregated, monitored material and product storage." },
      { title: "Cold Chain",                  body: "Temperature-controlled handling and dispatch." },
    ],
    cleanroomSection: {
      eyebrow: "Cleanroom Infrastructure",
      title: "ISO-Certified cGMP Production Suites in Seoul",
      body: "Our cleanroom facilities are engineered for aseptic manufacturing with continuous environmental monitoring.",
      image: img("korean-cleanroom-facility.jpg"),
    },
    coldChainSection: {
      eyebrow: "Cold Chain & Logistics",
      title: "Integrated Cold Storage & Incheon Air Cargo Dispatch",
      body: "Temperature-controlled handling and dispatch for all cold-chain product formats.",
      image: img("korean-international-logistics.jpg"),
    },
  },

  // ── Quality ─────────────────────────────────────────────────────────────
  quality: {
    hero: {
      eyebrow: "Quality Management",
      title: "Quality From Source to Shipment",
      intro: "Every batch follows a documented pathway. Control points are defined in advance, executed under procedure and recorded for traceability.",
      image: img("qc-lab.jpg"),
    },
    flow: ["Raw Material", "Production", "In-process QC", "Final QC", "Batch Release", "Storage", "Distribution"],
    systemsTitle: "Quality systems",
    systems: [
      "Raw Material Control", "Environmental Monitoring", "Process Control",
      "Microbiological Testing", "Analytical Testing", "Batch Documentation",
      "Stability Testing", "Traceability",
    ],
    cleanroomSection: {
      eyebrow: "Continuous Monitoring",
      title: "ISO Class 5 Cleanroom Environmental & Microbiological Controls",
      body: "Ongoing environmental monitoring ensures cleanroom conditions meet defined specifications for every batch.",
      image: img("korean-cleanroom-facility.jpg"),
    },
    characterization: {
      eyebrow: "Analytical Science",
      title: "Exosome Characterization",
      intro: "Characterization methods are selected per project and per application.",
      groups: [
        { title: "Particle Characterization", items: ["NTA", "Particle concentration", "Particle size distribution"] },
        { title: "Morphology",                items: ["TEM", "Cryo-TEM"] },
        { title: "Safety",                    items: ["Sterility", "Endotoxin", "Mycoplasma"] },
        { title: "Purity",                    items: ["Protein analysis", "Particle-to-protein ratio where applicable"] },
      ],
    },
  },

  // ── OEM ─────────────────────────────────────────────────────────────────
  oem: {
    hero: {
      eyebrow: "OEM / ODM",
      title: "From Concept to Commercialization",
      subtitle: "Your idea. Our science. One integrated development pathway.",
      image: img("cleanroom.jpg"),
    },
    oem: {
      title: "OEM",
      body: "You bring the formula. We manufacture, fill, package and document it.",
      steps: ["Client formula", "Manufacturing", "Filling", "Packaging", "QC", "Documentation"],
    },
    odm: {
      title: "ODM",
      body: "You bring the concept. We develop the science behind it and take it to production.",
      steps: ["Concept development", "Ingredient selection", "Formulation", "Prototype", "Testing", "Packaging", "Manufacturing", "Documentation"],
    },
    manufacturingSection: {
      eyebrow: "World-Class Scale",
      title: "Advanced Korean Contract Manufacturing Infrastructure",
      body: "State-of-the-art facilities with continuous environmental monitoring and full documentation.",
      image: img("korean-cleanroom-facility.jpg"),
    },
    process: {
      eyebrow: "Development Pathway",
      title: "Nine stages from first consultation to global shipment",
      steps: [
        { num: "01", title: "Initial Consultation",     body: "Objectives, market and feasibility." },
        { num: "02", title: "Concept & Specification",  body: "Target profile and product definition." },
        { num: "03", title: "R&D / Formulation",        body: "Laboratory development and refinement." },
        { num: "04", title: "Prototype",                body: "Sample production for client evaluation." },
        { num: "05", title: "Testing & Validation",     body: "Analytical and stability assessment." },
        { num: "06", title: "Regulatory Documentation", body: "Dossier preparation for the destination market." },
        { num: "07", title: "Pilot Production",         body: "Scale-up batch under production conditions." },
        { num: "08", title: "Mass Production",          body: "Commercial manufacturing and batch release." },
        { num: "09", title: "Global Shipment",          body: "Export handling and cold chain dispatch." },
      ],
    },
    customDev: {
      eyebrow: "Custom Development",
      title: "Build Your Own Regenerative Product",
      intro: "Define the parameters of your project. Our development team returns a feasibility assessment and a proposed development pathway.",
      inputs: ["Product category", "Target market", "Active ingredient", "Desired concentration", "Dosage form", "Packaging", "MOQ", "Regulatory market", "Storage requirement"],
      cta: "Start Your Project",
    },
    privateLabel: {
      eyebrow: "Private Label",
      title: "Your brand on a documented Korean-manufactured product",
      intro: "Private label projects take an existing or newly developed formulation and present it entirely under your brand.",
      points: [
        "Brand identity applied to primary and secondary packaging",
        "Label content structured for the destination market",
        "Insert, carton and kit configuration",
        "Batch coding, expiry and traceability marking",
        "Product documentation issued under your product name",
        "Repeat batch supply under a stable specification",
      ],
    },
    regulatory: {
      eyebrow: "Global Regulatory Support",
      title: "Documentation prepared for the market you are entering",
      intro: "Regulatory expectations differ by market and product category.",
      points: [
        "Certificate of Analysis (COA)", "Technical Data Sheet (TDS)",
        "Safety Data Sheet (SDS) where applicable", "Manufacturing process description",
        "Composition and specification statements", "Stability data package",
        "Export and shipment documentation",
      ],
      note: "Registration itself is performed by the importer or licence holder in the destination market.",
    },
  },

  // ── Research ─────────────────────────────────────────────────────────────
  research: {
    hero: {
      eyebrow: "R&D",
      title: "Research & Development",
      intro: "Our research programme spans biological source science, formulation engineering and the analytical methods required to prove a product behaves as specified.",
      image: img("research-team.jpg"),
    },
    areas: {
      eyebrow: "R&D",
      title: "Research areas",
      items: ["Biotechnology Research", "Exosome Research", "Regenerative Medicine", "Formulation Science", "Stability Research", "Analytical Science", "Product Development"],
    },
    team: {
      title: "Capability areas",
      items: ["Biotechnology", "Pharmaceutical Science", "Chemistry", "Formulation", "Quality", "Regulatory"],
    },
    seoulSection: {
      eyebrow: "Biotech Hub",
      title: "State-of-the-Art Biological R&D Headquarters in Seoul",
      body: "Located in Korea's premier biotechnology cluster with direct access to leading research institutions.",
      image: img("seoul-biotech-campus.jpg"),
    },
    scientistsSection: {
      eyebrow: "Scientific Leadership",
      title: "Ph.D. Level Korean Biological R&D Scientists",
      body: "Our team combines advanced academic training with practical manufacturing expertise.",
      image: img("korean-bio-researchers.jpg"),
    },
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Start a Conversation",
      intro: "Tell us about your product, your market and your timeline. Our business development team responds directly.",
      image: img("headquarters.jpg"),
    },
    info: {
      address: "Republic of Korea · Full address provided on request",
      email: "contact@vescoscience.com",
      hours: "Mon–Fri, 09:00–18:00 KST",
    },
    officeSection: {
      eyebrow: "Corporate Facility",
      title: "Visit Our Headquarters & Business Suites in Seoul",
      image: img("korean-contact-office.jpg"),
    },
    consultSection: {
      eyebrow: "Direct Scientific Advisory",
      title: "Personalized Technical Consultation",
      image: img("korean-doctor-consultant.jpg"),
    },
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    hero: {
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      intro: "Answers to the questions partners ask most often before a first project.",
      image: img("qc-lab.jpg"),
    },
    categories: [
      {
        title: "General",
        items: [
          { q: "Who is Vesco Science?",           a: "Vesco Science is a Korea-based biotechnology company developing and manufacturing regenerative and aesthetic formulations for international B2B partners." },
          { q: "Where is Vesco Science located?", a: "Operations are based in the Republic of Korea. The full corporate address is provided directly during partner consultation." },
          { q: "What does Vesco Science manufacture?", a: "Exosome formats, PDRN and PN formulations, skin boosters, HA and peptide systems, and client-specific custom products." },
          { q: "Who do you work with?",           a: "Distributors, pharmaceutical companies, aesthetic brands, clinics and research organisations, primarily on an OEM or ODM basis." },
        ],
      },
      {
        title: "OEM / ODM",
        items: [
          { q: "Do you provide OEM manufacturing?",    a: "Yes. Under OEM we manufacture to your existing formula and handle filling, packaging, quality control and documentation." },
          { q: "Do you provide ODM development?",      a: "Yes. Under ODM we develop the formulation with you from concept, then take it through prototype, validation and production." },
          { q: "Can you develop custom formulations?", a: "Yes. Category, active, concentration, dosage form, packaging and storage condition are defined together and assessed for feasibility before development starts." },
          { q: "What is your MOQ?",                    a: "Minimum order quantity depends on the format, packaging and whether the product is an existing or newly developed formulation. It is confirmed in the project proposal rather than published." },
        ],
      },
      {
        title: "Exosome",
        items: [
          { q: "What type of exosomes do you manufacture?", a: "Exosome formats are developed per project. Cell source, process and finished presentation are defined in the technical dossier for the specific product." },
          { q: "Are your exosomes lyophilized or frozen?",  a: "Both lyophilized and solution formats are available. Selection depends on stability requirements, application and distribution conditions." },
          { q: "How are exosomes characterized?",          a: "Applicable particle, morphology, safety and purity methods are selected per project — including NTA, electron microscopy and protein analysis where relevant." },
        ],
      },
      {
        title: "Logistics",
        items: [
          { q: "What are the storage conditions?",    a: "Storage condition is defined per format and stated on the product documentation." },
          { q: "Do you provide cold-chain shipping?", a: "Yes. Temperature-controlled handling and dispatch are applied where the product format requires it." },
          { q: "Which markets do you export to?",     a: "We support export to multiple international markets, subject to the regulatory framework of each destination." },
        ],
      },
    ],
  },

  // ── Resources ────────────────────────────────────────────────────────────
  resources: {
    hero: {
      eyebrow: "Resources",
      title: "Download Center",
      intro: "Corporate and technical documents for partners. Restricted documents are released after a short access request.",
      image: img("documents.jpg"),
    },
    docs: [
      { title: "Product Catalogue",       meta: "PDF · Corporate",     restricted: false },
      { title: "Company Profile",         meta: "PDF · Corporate",     restricted: false },
      { title: "OEM / ODM Brochure",      meta: "PDF · Business",      restricted: false },
      { title: "Certificate of Analysis", meta: "PDF · Batch specific", restricted: true },
    ],
  },

  // ── Technology ───────────────────────────────────────────────────────────
  technology: {
    hero: {
      eyebrow: "Technology",
      title: "Technology at the Cellular Level",
      lead: "Six platforms, one integrated capability. Each technology is developed in-house and applied across our product categories and partner projects.",
      image: img("molecular.jpg"),
    },
    cards: [
      { num: "01", slug: "exosome",        title: "Exosome Technology",       body: "Isolation, purification and characterization of extracellular vesicles for regenerative applications." },
      { num: "02", slug: "pdrn-pn",        title: "PDRN / PN Technology",     body: "Polynucleotide and polydeoxyribonucleotide platforms formulated for regenerative and aesthetic use." },
      { num: "03", slug: "lyophilization", title: "Lyophilization Technology", body: "Freeze-drying cycle development that protects sensitive biologic material and extends shelf stability." },
      { num: "04", slug: "formulation",    title: "Regenerative Formulation",  body: "Combination formulation of biologics, peptides and hyaluronic acid systems for targeted applications." },
      { num: "05", slug: "cold-chain",     title: "Cold Chain Technology",     body: "Temperature-controlled handling, storage and shipment design for temperature-sensitive products." },
      { num: "06", slug: "custom",         title: "Custom Formulation",        body: "Client-specific development of concentration, format, packaging and documentation requirements." },
    ],
    exosome: {
      eyebrow: "Feature Technology",
      title: "Exosome Technology",
      body1: "Exosomes are nanoscale extracellular vesicles secreted by cells. They carry biological cargo and are studied intensively for their role in cell-to-cell communication and tissue regeneration.",
      body2: "Our exosome platform covers the full pathway — from controlled cell culture through isolation, purification, concentration and characterization to a formulated, quality-released finished product.",
      processTitle: "Exosome production pathway",
      steps: ["Cell Source", "Cell Culture", "Conditioned Medium", "Isolation", "Purification", "Concentration", "Characterization", "Formulation", "Quality Control", "Final Product"],
    },
  },

  // ── Products ─────────────────────────────────────────────────────────────
  products: {
    hero: {
      eyebrow: "Products",
      title: "B2B Product Catalogue",
      intro: "A scientific catalogue organised by technology platform. Full specifications and documentation are issued on request under confidentiality.",
      image: img("vials.jpg"),
    },
    categories: [
      {
        key: "exosome", title: "Exosome",
        items: [
          { slug: "lyophilized-exosome", name: "Lyophilized Exosome" },
          { slug: "scalp-hair-exosome",  name: "Scalp / Hair Applications" },
          { slug: "skin-exosome",        name: "Skin Applications" },
          { slug: "custom-exosome",      name: "Custom" },
        ],
      },
      {
        key: "pdrn", title: "PDRN / PN",
        items: [
          { slug: "pdrn-formulation", name: "PDRN Formulations" },
          { slug: "pn-formulation",   name: "PN Formulations" },
        ],
      },
      {
        key: "aesthetic", title: "Aesthetic",
        items: [
          { slug: "skin-booster",             name: "Skin Boosters" },
          { slug: "regenerative-formulation", name: "Regenerative Formulations" },
          { slug: "ha-formulation",           name: "HA-based Formulations" },
          { slug: "peptide-formulation",      name: "Peptide Formulations" },
        ],
      },
      {
        key: "custom", title: "Custom Development",
        items: [{ slug: "client-specific", name: "Client-specific Products" }],
      },
    ],
  },

  // ── Insights ─────────────────────────────────────────────────────────────
  insights: {
    hero: {
      eyebrow: "Science & Insights",
      title: "Science & Insights",
      intro: "Perspectives on regenerative biotechnology, manufacturing practice and the Korean biotech industry.",
      image: img("molecular.jpg"),
    },
    categories: ["Exosome Science", "PDRN / PN", "Manufacturing", "Korean Biotechnology", "Regulatory", "Industry Insights"],
    articles: [
      { slug: "why-characterization-defines-quality",  category: "Exosome Science",     title: "Why characterization defines exosome product quality",       excerpt: "Particle count alone does not describe a preparation." },
      { slug: "lyophilization-stability-strategy",      category: "Manufacturing",        title: "Lyophilization as a stability strategy for biologic formats", excerpt: "Cycle design, excipient selection and reconstitution behaviour." },
      { slug: "polynucleotide-platforms",               category: "PDRN / PN",            title: "Polynucleotide platforms in regenerative formulation",        excerpt: "How PDRN and PN materials are handled in formulation." },
      { slug: "korea-regenerative-hub",                 category: "Korean Biotechnology", title: "Why Korea became a regenerative manufacturing hub",          excerpt: "Research density, manufacturing discipline and export orientation." },
      { slug: "product-documentation-multiple-markets",category: "Regulatory",            title: "Preparing product documentation for multiple markets",       excerpt: "A practical view of how documentation requirements shape development decisions." },
      { slug: "questions-for-contract-manufacturer",    category: "Industry Insights",    title: "What partners should ask a contract manufacturer",           excerpt: "Ten questions that reveal whether a manufacturing partner can support a long-term product line." },
    ],
  },

  // ── About Mission ────────────────────────────────────────────────────────
  "about-mission": {
    hero: {
      eyebrow: "About Us / Mission",
      title: "Korean Biotechnology Science With Clear Purpose",
      lead: "Our mission is to deliver advanced Korean regenerative biotechnology to global healthcare and aesthetic partners in a reproducible, documented form.",
      image: img("research-team.jpg"),
    },
    missionTitle: "Mission",
    missionBody: "To develop and manufacture regenerative biotechnology — exosome, PDRN/PN, peptide and lyophilized formulations — under controlled, documented processes that partners can rely on batch after batch.",
    visionTitle: "Vision",
    visionBody: "To be recognized as Korea's premier biotechnology and advanced regenerative manufacturing partner: the scientific and industrial infrastructure behind next-generation global aesthetic products.",
    values: [
      { title: "Science First",           body: "Every formulation decision is traced back to characterization data, not marketing language." },
      { title: "Documented Process",      body: "Development, production and release steps are specified, executed and recorded under MFDS cGMP standards." },
      { title: "Reproducibility",         body: "Batch-to-batch consistency is treated as a manufacturing requirement, not an outcome." },
      { title: "Partner Confidentiality", body: "OEM/ODM programs, formulations and specifications remain the exclusive property of the client." },
      { title: "Regulatory Readiness",    body: "Documentation is prepared with global export and destination-market requirements in mind." },
      { title: "Verified Claims",         body: "We publish what can be supported. Unverified data is withheld until analytically confirmed." },
    ],
    researchSection: {
      eyebrow: "Scientific Rigor",
      title: "Pioneering Korean Cellular & Exosome Research",
      body1: "Our R&D programme is centred on advancing the science of extracellular vesicles and regenerative formulation.",
      body2: "Every platform decision is traced to documented analytical outcomes, not commercial pressure.",
      image: img("korean-bio-researchers.jpg"),
    },
    seoulSection: {
      eyebrow: "Biotech Infrastructure",
      title: "Located in Korea's Premier Biotechnology Innovation Hub",
      body1: "Seoul's Pangyo Techno Valley hosts Korea's densest concentration of biotech companies, research institutions and regulatory bodies.",
      body2: "This proximity shortens development cycles and reduces supply chain risk for international partners.",
      image: img("korean-seoul-skyscraper-hub.jpg"),
    },
  },

  // ── About Network ────────────────────────────────────────────────────────
  "about-network": {
    hero: {
      eyebrow: "Global Network",
      title: "A Korean Biotechnology Partner Built for International Markets",
      lead: "Vesco Science operates as an integrated Korean development and manufacturing base, designed to support partners entering markets across Asia, the Middle East, Europe and beyond.",
      image: img("headquarters.jpg"),
    },
    models: {
      eyebrow: "Partnership Models",
      title: "Six ways to work with us",
      items: [
        { title: "OEM / ODM Partnership",   body: "Manufacturing to your formula, or joint development of a new one, under a single agreement." },
        { title: "Product Development",     body: "Category, format, concentration and packaging developed against your target market." },
        { title: "Manufacturing Support",   body: "Scale-up from pilot to commercial batches with process and documentation continuity." },
        { title: "Global Supply",           body: "Export-oriented handling, including cold chain where the product format requires it." },
        { title: "Regulatory Support",      body: "Technical dossier preparation aligned to the requirements of the destination market." },
        { title: "Long-Term Collaboration", body: "Ongoing formulation improvement, line extension and supply planning across product cycles." },
      ],
    },
    logisticsSection: {
      eyebrow: "Global Supply Chain",
      title: "Seamless International Export & Cold Chain Logistics",
      body1: "Our export operations are organised around reliable international freight and cold chain integrity.",
      body2: "Every shipment is accompanied by complete documentation for the destination market.",
      image: img("korean-international-logistics.jpg"),
    },
    supportSection: {
      eyebrow: "Dedicated Partner Support",
      title: "Seoul-Based International Business Consultation Desk",
      body: "Our partner support team handles business development, technical queries and order management from Seoul.",
      image: img("korean-faq-support-center.jpg"),
    },
    coverage: {
      title: "Global Market Coverage",
      regions: [
        { name: "Asia Pacific",       status: "Active" },
        { name: "Middle East",        status: "Active" },
        { name: "Europe",             status: "Active" },
        { name: "Americas",           status: "Growing" },
        { name: "Africa",             status: "Developing" },
        { name: "CIS / Central Asia", status: "Active" },
      ],
    },
  },

  // ── Custom Development ───────────────────────────────────────────────────
  "custom-development": {
    hero: {
      eyebrow: "Custom Development",
      title: "Build Your Regenerative Product",
      lead: "Submit your brief. Our development team returns a feasibility assessment and a proposed development pathway.",
      image: img("lyophilizer.jpg"),
    },
    pathway: {
      eyebrow: "Development Pathway",
      title: "From Brief to Commercial Product",
      steps: ["Brief & Feasibility", "Concept & Specification", "R&D / Formulation", "Prototype & Evaluation", "Production"],
    },
    cleanroomSection: {
      eyebrow: "Precision Engineering",
      title: "Korean cGMP Manufacturing Infrastructure",
      image: img("korean-cleanroom-facility.jpg"),
    },
    form: {
      eyebrow: "Project Brief",
      title: "Submit Your Development Brief",
      intro: "Complete the form below. Our team will respond with a feasibility assessment within 3 business days.",
      fields: [
        { label: "Product Category",      ph: "e.g. Exosome, PDRN, Peptide" },
        { label: "Target Application",    ph: "e.g. Skin, Scalp, Aesthetic" },
        { label: "Active Ingredient",     ph: "e.g. Exosome 1×10¹¹/mL" },
        { label: "Desired Concentration", ph: "e.g. 1×10¹⁰ EV/mL" },
        { label: "Dosage Form",           ph: "e.g. Lyophilized, Solution, Gel" },
        { label: "Packaging Format",      ph: "e.g. 2mL vial, ampoule, kit" },
        { label: "MOQ",                   ph: "e.g. 500 units" },
        { label: "Target Market",         ph: "e.g. South Korea, UAE, EU" },
        { label: "Storage Requirement",   ph: "e.g. 2–8°C, −20°C" },
      ],
      notes: "Additional project notes",
      notesPh: "Describe your project in more detail, including any specific requirements...",
      submit: "Submit Brief",
    },
    deliverables: {
      eyebrow: "Deliverables",
      title: "What you receive",
      items: [
        "Feasibility assessment report",
        "Proposed formulation concept",
        "Development timeline",
        "Cost estimate",
        "Technical specification draft",
        "Regulatory pathway overview",
      ],
    },
  },
};
