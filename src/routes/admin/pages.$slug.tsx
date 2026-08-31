import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import { getPageData, updatePageData } from "@/lib/page-api";
import {
  Save, RotateCcw, Eye, ChevronRight, CheckCircle2, AlertCircle,
  Loader2, Layers, ChevronDown, ChevronUp,
  Star, Zap, Award, Settings2, Type, Info, Home, Building2,
  ShieldCheck, FlaskConical, Phone, HelpCircle, FolderOpen,
  Cpu, Package, Newspaper, Globe, List, ImageIcon, Users,
} from "lucide-react";

// ── Home / About editors (existing) ──────────────────────────────────────────
import {
  HeroEditor, TrustBarEditor, AboutEditor, CoreTechEditor,
  ExosomeSectionEditor, ManufacturingEditor, QualityEditor,
  PartnershipEditor, VisionMissionEditor, FinalCtaEditor,
  ScientificApproachEditor, CapabilitiesEditor,
} from "@/components/admin/SectionEditors";

// ── Universal editors ─────────────────────────────────────────────────────────
import {
  GenericHeroEditor, ImageSectionEditor, NumberedStepsEditor,
  FaqEditor, ResourcesDocsEditor, TechCardsEditor, ProductCategoriesEditor,
  ArticlesEditor, ValuesEditor, RegionsEditor, FacilityAreasEditor,
  FormFieldsEditor, CharGroupsEditor, StringList, Field, TI, TA,
} from "@/components/admin/UniversalSectionEditors";
import { PdfImport } from "@/components/admin/PdfImport";

export const Route = createFileRoute("/admin/pages/$slug")({
  loader: async ({ params }) => ({
    slug: params.slug,
    data: await getPageData({ data: params.slug }),
  }),
  component: PageBuilderEditor,
});

// ── Section definition ────────────────────────────────────────────────────────

type SectionDef = {
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description: string;
};

// ── Per-page section maps ─────────────────────────────────────────────────────

const SECTION_MAP: Record<string, SectionDef[]> = {
  home: [
    { key: "hero",           label: "Hero",             icon: Star,       color: "text-amber-500",  description: "Heading, subheading, body, CTA, background image" },
    { key: "trustBar",       label: "Trust / Cap. Bar", icon: Zap,        color: "text-blue-500",   description: "Capability tags below hero" },
    { key: "about",          label: "About Vesco",      icon: Info,       color: "text-indigo-500", description: "Who we are block with image" },
    { key: "coreTechnology", label: "Core Technology",  icon: Cpu,        color: "text-teal-500",   description: "Technology cards section" },
    { key: "exosomeSection", label: "Exosome Feature",  icon: Zap,        color: "text-cyan-500",   description: "Exosome process steps panel" },
    { key: "manufacturing",  label: "Manufacturing",    icon: Settings2,  color: "text-orange-500", description: "R&D to production flow" },
    { key: "quality",        label: "Quality",          icon: Award,      color: "text-green-500",  description: "Quality built into every stage" },
    { key: "finalCta",       label: "Final CTA",        icon: Type,       color: "text-rose-500",   description: "Call to action banner" },
  ],
  about: [
    { key: "hero",               label: "Hero",                icon: Star,      color: "text-amber-500",  description: "Page hero with heading and copy" },
    { key: "whoWeAre",           label: "Who We Are",          icon: Info,      color: "text-indigo-500", description: "Overview and capabilities list" },
    { key: "scientificApproach", label: "Scientific Approach", icon: Layers,    color: "text-teal-500",   description: "Integrated research to product copy" },
    { key: "manufacturing",      label: "Manufacturing",       icon: Settings2, color: "text-orange-500", description: "Development to production pipeline" },
    { key: "quality",            label: "Quality",             icon: Award,     color: "text-green-500",  description: "Quality points and copy" },
    { key: "partnership",        label: "Global Partnership",  icon: Globe,     color: "text-blue-500",   description: "Vesco × EverCeutical partnership" },
    { key: "visionMission",      label: "Vision & Mission",    icon: Star,      color: "text-purple-500", description: "Vision and mission blocks" },
    { key: "finalCta",           label: "Final CTA",           icon: Type,      color: "text-rose-500",   description: "Contact / closing CTA" },
  ],
  facility: [
    { key: "hero",             label: "Hero",            icon: Star,       color: "text-amber-500",  description: "Page hero" },
    { key: "areas",            label: "Facility Areas",  icon: Building2,  color: "text-blue-500",   description: "Grid of facility areas" },
    { key: "cleanroomSection", label: "Cleanroom",       icon: ShieldCheck,color: "text-teal-500",   description: "Cleanroom image + text section" },
    { key: "coldChainSection", label: "Cold Chain",      icon: Package,    color: "text-orange-500", description: "Cold chain logistics section" },
  ],
  quality: [
    { key: "hero",              label: "Hero",                 icon: Star,       color: "text-amber-500",  description: "Page hero" },
    { key: "flow",              label: "Quality Flow",         icon: List,       color: "text-teal-500",   description: "Step-by-step quality flow" },
    { key: "systems",           label: "Quality Systems",      icon: ShieldCheck,color: "text-blue-500",   description: "List of quality systems" },
    { key: "cleanroomSection",  label: "Cleanroom Section",    icon: Building2,  color: "text-indigo-500", description: "Cleanroom image + text" },
    { key: "characterization",  label: "Characterization",     icon: FlaskConical,color:"text-purple-500", description: "Analytical groups and methods" },
  ],
  oem: [
    { key: "hero",                label: "Hero",              icon: Star,       color: "text-amber-500",  description: "Page hero" },
    { key: "oem",                 label: "OEM Model",         icon: Settings2,  color: "text-blue-500",   description: "OEM title, body, steps" },
    { key: "odm",                 label: "ODM Model",         icon: Settings2,  color: "text-indigo-500", description: "ODM title, body, steps" },
    { key: "manufacturingSection",label: "Manufacturing",     icon: Building2,  color: "text-orange-500", description: "Manufacturing image section" },
    { key: "process",             label: "9-Stage Process",   icon: List,       color: "text-teal-500",   description: "Full development process steps" },
    { key: "customDev",           label: "Custom Dev",        icon: FlaskConical,color:"text-purple-500", description: "Custom development intro & inputs" },
    { key: "privateLabel",        label: "Private Label",     icon: Package,    color: "text-rose-500",   description: "Private label points" },
    { key: "regulatory",          label: "Regulatory",        icon: ShieldCheck,color: "text-green-500",  description: "Regulatory support points" },
  ],
  research: [
    { key: "hero",              label: "Hero",             icon: Star,        color: "text-amber-500",  description: "Page hero" },
    { key: "areas",             label: "Research Areas",   icon: FlaskConical,color: "text-teal-500",   description: "Research area items" },
    { key: "seoulSection",      label: "Seoul Section",    icon: Building2,   color: "text-blue-500",   description: "Seoul biotech hub section" },
    { key: "scientistsSection", label: "Scientists",       icon: Users,       color: "text-indigo-500", description: "Scientists section" },
    { key: "team",              label: "Team Disciplines", icon: Users,       color: "text-purple-500", description: "Capability areas list" },
  ],
  contact: [
    { key: "hero",            label: "Hero",            icon: Star,    color: "text-amber-500",  description: "Page hero" },
    { key: "info",            label: "Contact Info",    icon: Phone,   color: "text-blue-500",   description: "Address, email, hours" },
    { key: "officeSection",   label: "Office Section",  icon: Building2,color:"text-teal-500",   description: "Office image + text" },
    { key: "consultSection",  label: "Consult Section", icon: Users,   color: "text-indigo-500", description: "Consultation image + text" },
  ],
  faq: [
    { key: "hero",       label: "Hero",           icon: Star,       color: "text-amber-500", description: "Page hero" },
    { key: "categories", label: "FAQ Categories", icon: HelpCircle, color: "text-teal-500",  description: "All FAQ categories and Q&A pairs" },
  ],
  resources: [
    { key: "hero", label: "Hero",      icon: Star,       color: "text-amber-500", description: "Page hero" },
    { key: "docs", label: "Documents", icon: FolderOpen, color: "text-blue-500",  description: "Download centre documents" },
  ],
  technology: [
    { key: "hero",     label: "Hero",          icon: Star,        color: "text-amber-500",  description: "Page hero" },
    { key: "cards",    label: "Tech Cards",    icon: Cpu,         color: "text-teal-500",   description: "Six technology platform cards" },
    { key: "exosome",  label: "Exosome Block", icon: FlaskConical,color: "text-blue-500",   description: "Exosome feature + process steps" },
  ],
  products: [
    { key: "hero",       label: "Hero",       icon: Star,    color: "text-amber-500", description: "Page hero" },
    { key: "categories", label: "Categories", icon: Package, color: "text-teal-500",  description: "Product categories and items" },
  ],
  insights: [
    { key: "hero",       label: "Hero",       icon: Star,      color: "text-amber-500", description: "Page hero" },
    { key: "categories", label: "Categories", icon: List,      color: "text-teal-500",  description: "Article category filters" },
    { key: "articles",   label: "Articles",   icon: Newspaper, color: "text-blue-500",  description: "Blog / insight articles" },
  ],
  "about-mission": [
    { key: "hero",             label: "Hero",             icon: Star,        color: "text-amber-500",  description: "Page hero" },
    { key: "missionTitle",     label: "Mission",          icon: FlaskConical,color: "text-teal-500",   description: "Mission title and body" },
    { key: "values",           label: "Operating Values", icon: Award,       color: "text-indigo-500", description: "Company values / principles" },
    { key: "researchSection",  label: "Research Section", icon: Users,       color: "text-blue-500",   description: "Research image section" },
    { key: "seoulSection",     label: "Seoul Section",    icon: Building2,   color: "text-purple-500", description: "Seoul / biotech hub section" },
  ],
  "about-network": [
    { key: "hero",             label: "Hero",              icon: Star,     color: "text-amber-500",  description: "Page hero" },
    { key: "models",           label: "Partnership Models",icon: Globe,    color: "text-teal-500",   description: "Six partnership model cards" },
    { key: "logisticsSection", label: "Logistics",         icon: Package,  color: "text-blue-500",   description: "Global supply chain section" },
    { key: "supportSection",   label: "Support Desk",      icon: Phone,    color: "text-indigo-500", description: "Partner support section" },
    { key: "coverage",         label: "Market Coverage",   icon: Globe,    color: "text-purple-500", description: "Regional market coverage" },
  ],
  "custom-development": [
    { key: "hero",         label: "Hero",        icon: Star,        color: "text-amber-500",  description: "Page hero" },
    { key: "pathway",      label: "Pathway",     icon: List,        color: "text-teal-500",   description: "Development pathway steps" },
    { key: "cleanroomSection", label: "Cleanroom", icon: Building2, color: "text-blue-500",   description: "Cleanroom image section" },
    { key: "form",         label: "Brief Form",  icon: FlaskConical,color: "text-indigo-500", description: "Project brief form fields" },
    { key: "deliverables", label: "Deliverables",icon: Award,       color: "text-purple-500", description: "What you receive section" },
  ],
};

// ── Section renderer ──────────────────────────────────────────────────────────

function renderSectionEditor(slug: string, sectionKey: string, data: any, onChange: (v: any) => void) {
  if (!data && data !== 0) return <p className="text-xs text-slate-400 italic p-2">No data for this section.</p>;

  // ── Home ──
  if (slug === "home") {
    switch (sectionKey) {
      case "hero": return <HeroEditor data={data} onChange={onChange} />;
      case "trustBar": return Array.isArray(data) ? <TrustBarEditor data={data} onChange={onChange} /> : null;
      case "about": return <AboutEditor data={data} onChange={onChange} />;
      case "coreTechnology": return <CoreTechEditor data={data} onChange={onChange} />;
      case "exosomeSection": return <ExosomeSectionEditor data={data} onChange={onChange} />;
      case "manufacturing": return <ManufacturingEditor data={data} onChange={onChange} />;
      case "quality": return <QualityEditor data={data} onChange={onChange} />;
      case "finalCta": return <FinalCtaEditor data={data} onChange={onChange} />;
    }
  }

  // ── About ──
  if (slug === "about") {
    switch (sectionKey) {
      case "hero": return <HeroEditor data={data} onChange={onChange} />;
      case "whoWeAre": return (
        <div className="space-y-5">
          <AboutEditor data={data} onChange={onChange} />
          {Array.isArray(data.capabilities) && (
            <div className="pt-2 border-t border-slate-100">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">Capabilities List</p>
              <CapabilitiesEditor data={data.capabilities} onChange={caps => onChange({ ...data, capabilities: caps })} />
            </div>
          )}
        </div>
      );
      case "scientificApproach": return <ScientificApproachEditor data={data} onChange={onChange} />;
      case "manufacturing": return <ManufacturingEditor data={data} onChange={onChange} />;
      case "quality": return <QualityEditor data={data} onChange={onChange} />;
      case "partnership": return <PartnershipEditor data={data} onChange={onChange} />;
      case "visionMission": return <VisionMissionEditor data={data} onChange={onChange} />;
      case "finalCta": return <FinalCtaEditor data={data} onChange={onChange} />;
    }
  }

  // ── Facility ──
  if (slug === "facility") {
    switch (sectionKey) {
      case "hero": return <GenericHeroEditor data={data} onChange={onChange} />;
      case "areas": return <FacilityAreasEditor data={data} onChange={onChange} />;
      case "cleanroomSection":
      case "coldChainSection": return <ImageSectionEditor data={data} onChange={onChange} label={sectionKey === "cleanroomSection" ? "Cleanroom Section" : "Cold Chain Section"} />;
    }
  }

  // ── Quality ──
  if (slug === "quality") {
    switch (sectionKey) {
      case "hero": return <GenericHeroEditor data={data} onChange={onChange} />;
      case "flow": return <StringList data={data} onChange={onChange} label="Quality Flow Steps" />;
      case "systems": return <StringList data={data} onChange={onChange} label="Quality Systems" />;
      case "cleanroomSection": return <ImageSectionEditor data={data} onChange={onChange} label="Cleanroom Section" />;
      case "characterization": return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Field label="Eyebrow"><TI value={data.eyebrow ?? ""} onChange={v => onChange({ ...data, eyebrow: v })} /></Field>
            <Field label="Title"><TI value={data.title ?? ""} onChange={v => onChange({ ...data, title: v })} /></Field>
          </div>
          <Field label="Intro"><TA value={data.intro ?? ""} onChange={v => onChange({ ...data, intro: v })} /></Field>
          <div className="border-t border-slate-100 pt-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">Characterization Groups</p>
            <CharGroupsEditor data={data.groups ?? []} onChange={groups => onChange({ ...data, groups })} />
          </div>
        </div>
      );
    }
  }

  // ── OEM ──
  if (slug === "oem") {
    switch (sectionKey) {
      case "hero": return <GenericHeroEditor data={data} onChange={onChange} />;
      case "oem":
      case "odm": return (
        <div className="space-y-4">
          <Field label="Title"><TI value={data.title ?? ""} onChange={v => onChange({ ...data, title: v })} /></Field>
          <Field label="Body"><TA value={data.body ?? ""} onChange={v => onChange({ ...data, body: v })} /></Field>
          <StringList data={data.steps ?? []} onChange={steps => onChange({ ...data, steps })} label="Steps" />
        </div>
      );
      case "manufacturingSection": return <ImageSectionEditor data={data} onChange={onChange} label="Manufacturing Section" />;
      case "process": return (
        <div className="space-y-4">
          <Field label="Eyebrow"><TI value={data.eyebrow ?? ""} onChange={v => onChange({ ...data, eyebrow: v })} /></Field>
          <Field label="Title"><TA value={data.title ?? ""} onChange={v => onChange({ ...data, title: v })} rows={2} /></Field>
          <div className="border-t border-slate-100 pt-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">Process Steps</p>
            <NumberedStepsEditor data={data.steps ?? []} onChange={steps => onChange({ ...data, steps })} />
          </div>
        </div>
      );
      case "customDev": return (
        <div className="space-y-4">
          <Field label="Eyebrow"><TI value={data.eyebrow ?? ""} onChange={v => onChange({ ...data, eyebrow: v })} /></Field>
          <Field label="Title"><TA value={data.title ?? ""} onChange={v => onChange({ ...data, title: v })} rows={2} /></Field>
          <Field label="Intro"><TA value={data.intro ?? ""} onChange={v => onChange({ ...data, intro: v })} /></Field>
          <Field label="CTA Button"><TI value={data.cta ?? ""} onChange={v => onChange({ ...data, cta: v })} /></Field>
          <StringList data={data.inputs ?? []} onChange={inputs => onChange({ ...data, inputs })} label="Input Parameters" />
        </div>
      );
      case "privateLabel": return (
        <div className="space-y-4">
          <Field label="Eyebrow"><TI value={data.eyebrow ?? ""} onChange={v => onChange({ ...data, eyebrow: v })} /></Field>
          <Field label="Title"><TA value={data.title ?? ""} onChange={v => onChange({ ...data, title: v })} rows={2} /></Field>
          <Field label="Intro"><TA value={data.intro ?? ""} onChange={v => onChange({ ...data, intro: v })} /></Field>
          <StringList data={data.points ?? []} onChange={points => onChange({ ...data, points })} label="Private Label Points" />
        </div>
      );
      case "regulatory": return (
        <div className="space-y-4">
          <Field label="Eyebrow"><TI value={data.eyebrow ?? ""} onChange={v => onChange({ ...data, eyebrow: v })} /></Field>
          <Field label="Title"><TA value={data.title ?? ""} onChange={v => onChange({ ...data, title: v })} rows={2} /></Field>
          <Field label="Intro"><TA value={data.intro ?? ""} onChange={v => onChange({ ...data, intro: v })} /></Field>
          <Field label="Note"><TA value={data.note ?? ""} onChange={v => onChange({ ...data, note: v })} /></Field>
          <StringList data={data.points ?? []} onChange={points => onChange({ ...data, points })} label="Regulatory Points" />
        </div>
      );
    }
  }

  // ── Research ──
  if (slug === "research") {
    switch (sectionKey) {
      case "hero": return <GenericHeroEditor data={data} onChange={onChange} />;
      case "areas": return (
        <div className="space-y-4">
          <Field label="Eyebrow"><TI value={data.eyebrow ?? ""} onChange={v => onChange({ ...data, eyebrow: v })} /></Field>
          <Field label="Title"><TI value={data.title ?? ""} onChange={v => onChange({ ...data, title: v })} /></Field>
          <StringList data={data.items ?? []} onChange={items => onChange({ ...data, items })} label="Research Areas" />
        </div>
      );
      case "seoulSection":
      case "scientistsSection": return <ImageSectionEditor data={data} onChange={onChange} />;
      case "team": return (
        <div className="space-y-4">
          <Field label="Title"><TI value={data.title ?? ""} onChange={v => onChange({ ...data, title: v })} /></Field>
          <StringList data={data.items ?? []} onChange={items => onChange({ ...data, items })} label="Disciplines" />
        </div>
      );
    }
  }

  // ── Contact ──
  if (slug === "contact") {
    switch (sectionKey) {
      case "hero": return <GenericHeroEditor data={data} onChange={onChange} />;
      case "info": return (
        <div className="space-y-4">
          <Field label="Address"><TI value={data.address ?? ""} onChange={v => onChange({ ...data, address: v })} /></Field>
          <Field label="Email"><TI value={data.email ?? ""} onChange={v => onChange({ ...data, email: v })} /></Field>
          <Field label="Business Hours"><TI value={data.hours ?? ""} onChange={v => onChange({ ...data, hours: v })} /></Field>
        </div>
      );
      case "officeSection":
      case "consultSection": return <ImageSectionEditor data={data} onChange={onChange} />;
    }
  }

  // ── FAQ ──
  if (slug === "faq") {
    switch (sectionKey) {
      case "hero": return <GenericHeroEditor data={data} onChange={onChange} />;
      case "categories": return <FaqEditor data={data} onChange={onChange} />;
    }
  }

  // ── Resources ──
  if (slug === "resources") {
    switch (sectionKey) {
      case "hero": return <GenericHeroEditor data={data} onChange={onChange} />;
      case "docs": return <ResourcesDocsEditor data={data} onChange={onChange} />;
    }
  }

  // ── Technology ──
  if (slug === "technology") {
    switch (sectionKey) {
      case "hero": return <GenericHeroEditor data={data} onChange={onChange} />;
      case "cards": return <TechCardsEditor data={data} onChange={onChange} />;
      case "exosome": return (
        <div className="space-y-4">
          <Field label="Eyebrow"><TI value={data.eyebrow ?? ""} onChange={v => onChange({ ...data, eyebrow: v })} /></Field>
          <Field label="Title"><TI value={data.title ?? ""} onChange={v => onChange({ ...data, title: v })} /></Field>
          <Field label="Body paragraph 1"><TA value={data.body1 ?? ""} onChange={v => onChange({ ...data, body1: v })} /></Field>
          <Field label="Body paragraph 2"><TA value={data.body2 ?? ""} onChange={v => onChange({ ...data, body2: v })} /></Field>
          <Field label="Process Title"><TI value={data.processTitle ?? ""} onChange={v => onChange({ ...data, processTitle: v })} /></Field>
          <StringList data={data.steps ?? []} onChange={steps => onChange({ ...data, steps })} label="Process Steps" />
        </div>
      );
    }
  }

  // ── Products ──
  if (slug === "products") {
    switch (sectionKey) {
      case "hero": return <GenericHeroEditor data={data} onChange={onChange} />;
      case "categories": return <ProductCategoriesEditor data={data} onChange={onChange} />;
    }
  }

  // ── Insights ──
  if (slug === "insights") {
    switch (sectionKey) {
      case "hero": return <GenericHeroEditor data={data} onChange={onChange} />;
      case "categories": return <StringList data={data} onChange={onChange} label="Article Categories" />;
      case "articles": return <ArticlesEditor data={data} onChange={onChange} />;
    }
  }

  // ── About Mission ──
  if (slug === "about-mission") {
    switch (sectionKey) {
      case "hero": return <GenericHeroEditor data={data} onChange={onChange} />;
      case "missionTitle": return (
        <div className="space-y-4">
          <Field label="Mission Title"><TI value={data.missionTitle ?? data.title ?? ""} onChange={v => onChange({ ...data, missionTitle: v })} /></Field>
          <Field label="Mission Body"><TA value={data.missionBody ?? data.body ?? ""} onChange={v => onChange({ ...data, missionBody: v })} rows={4} /></Field>
          <Field label="Vision Title"><TI value={data.visionTitle ?? ""} onChange={v => onChange({ ...data, visionTitle: v })} /></Field>
          <Field label="Vision Body"><TA value={data.visionBody ?? ""} onChange={v => onChange({ ...data, visionBody: v })} rows={4} /></Field>
        </div>
      );
      case "values": return <ValuesEditor data={data} onChange={onChange} />;
      case "researchSection":
      case "seoulSection": return <ImageSectionEditor data={data} onChange={onChange} />;
    }
  }

  // ── About Network ──
  if (slug === "about-network") {
    switch (sectionKey) {
      case "hero": return <GenericHeroEditor data={data} onChange={onChange} />;
      case "models": return (
        <div className="space-y-4">
          <Field label="Eyebrow"><TI value={data.eyebrow ?? ""} onChange={v => onChange({ ...data, eyebrow: v })} /></Field>
          <Field label="Title"><TA value={data.title ?? ""} onChange={v => onChange({ ...data, title: v })} rows={2} /></Field>
          <div className="border-t border-slate-100 pt-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">Partnership Models</p>
            <ValuesEditor data={data.items ?? []} onChange={items => onChange({ ...data, items })} />
          </div>
        </div>
      );
      case "logisticsSection":
      case "supportSection": return <ImageSectionEditor data={data} onChange={onChange} />;
      case "coverage": return (
        <div className="space-y-4">
          <Field label="Title"><TI value={data.title ?? ""} onChange={v => onChange({ ...data, title: v })} /></Field>
          <RegionsEditor data={data.regions ?? []} onChange={regions => onChange({ ...data, regions })} />
        </div>
      );
    }
  }

  // ── Custom Development ──
  if (slug === "custom-development") {
    switch (sectionKey) {
      case "hero": return <GenericHeroEditor data={data} onChange={onChange} />;
      case "pathway": return (
        <div className="space-y-4">
          <Field label="Eyebrow"><TI value={data.eyebrow ?? ""} onChange={v => onChange({ ...data, eyebrow: v })} /></Field>
          <Field label="Title"><TA value={data.title ?? ""} onChange={v => onChange({ ...data, title: v })} rows={2} /></Field>
          <StringList data={data.steps ?? []} onChange={steps => onChange({ ...data, steps })} label="Pathway Steps" />
        </div>
      );
      case "cleanroomSection": return <ImageSectionEditor data={data} onChange={onChange} label="Cleanroom Section" />;
      case "form": return (
        <div className="space-y-4">
          <Field label="Eyebrow"><TI value={data.eyebrow ?? ""} onChange={v => onChange({ ...data, eyebrow: v })} /></Field>
          <Field label="Title"><TA value={data.title ?? ""} onChange={v => onChange({ ...data, title: v })} rows={2} /></Field>
          <Field label="Intro"><TA value={data.intro ?? ""} onChange={v => onChange({ ...data, intro: v })} /></Field>
          <Field label="Notes Label"><TI value={data.notes ?? ""} onChange={v => onChange({ ...data, notes: v })} /></Field>
          <Field label="Submit Button"><TI value={data.submit ?? ""} onChange={v => onChange({ ...data, submit: v })} /></Field>
          <div className="border-t border-slate-100 pt-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">Form Fields</p>
            <FormFieldsEditor data={data.fields ?? []} onChange={fields => onChange({ ...data, fields })} />
          </div>
        </div>
      );
      case "deliverables": return (
        <div className="space-y-4">
          <Field label="Eyebrow"><TI value={data.eyebrow ?? ""} onChange={v => onChange({ ...data, eyebrow: v })} /></Field>
          <Field label="Title"><TI value={data.title ?? ""} onChange={v => onChange({ ...data, title: v })} /></Field>
          <StringList data={data.items ?? []} onChange={items => onChange({ ...data, items })} label="Deliverable Items" />
        </div>
      );
    }
  }

  return <p className="text-xs text-slate-400 italic p-2">Editor not defined for this section.</p>;
}

// ── Section panel ─────────────────────────────────────────────────────────────

function SectionPanel({ slug, def, data, onChange }: {
  slug: string; def: SectionDef; data: any; onChange: (v: any) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = def.icon;
  return (
    <div className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all ${expanded ? "border-slate-300" : "border-slate-200 hover:border-slate-300"}`}>
      <button className="w-full flex items-center gap-4 px-5 py-4 text-left" onClick={() => setExpanded(!expanded)}>
        <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
          <Icon className={`w-4 h-4 ${def.color}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-slate-800 text-sm">{def.label}</div>
          <div className="text-xs text-slate-400 truncate">{def.description}</div>
        </div>
        <div className="shrink-0 text-slate-400">
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>
      {expanded && (
        <div className="border-t border-slate-100 px-5 py-5 bg-slate-50/50">
          {renderSectionEditor(slug, def.key, data, onChange)}
        </div>
      )}
    </div>
  );
}

// ── Page label map ─────────────────────────────────────────────────────────────

const PAGE_LABELS: Record<string, string> = {
  home: "Home Page", about: "About Us", facility: "Facility",
  quality: "Quality", oem: "OEM / ODM", research: "Research & Dev",
  contact: "Contact", faq: "FAQ", resources: "Resources",
  technology: "Technology", products: "Products", insights: "Insights / Blog",
  "about-mission": "Mission & Vision", "about-network": "Global Network",
  "custom-development": "Custom Development",
};

const PREVIEW_URL: Record<string, string> = {
  home: "/", "about-mission": "/about/mission", "about-network": "/about/network",
};

// ── Main editor ───────────────────────────────────────────────────────────────

function PageBuilderEditor() {
  const { slug, data: initialData } = Route.useLoaderData();
  const [formData, setFormData] = useState<any>(initialData);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const sections = SECTION_MAP[slug] ?? [];
  const pageLabel = PAGE_LABELS[slug] ?? slug;
  const previewUrl = PREVIEW_URL[slug] ?? `/${slug}`;

  const setSectionData = useCallback((key: string, val: any) => {
    setFormData((prev: any) => ({ ...prev, [key]: val }));
  }, []);

  const handleSave = async () => {
    setSaveStatus("saving");
    setErrorMsg("");
    try {
      await updatePageData({ data: { slug, content_json: formData } });
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 3000);
      router.invalidate();
    } catch (e: any) {
      setSaveStatus("error");
      setErrorMsg(e?.message || "Save failed.");
    }
  };

  const handleReset = () => {
    if (confirm("Reset all changes to the last saved version?")) {
      setFormData(initialData);
      setSaveStatus("idle");
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9]">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200 px-6 py-3 flex items-center gap-4 shadow-sm">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 flex-1 min-w-0">
          <Layers className="w-3.5 h-3.5" />
          <Link to="/admin" className="hover:text-slate-600 transition">Dashboard</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-700 font-semibold truncate">{pageLabel}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <PdfImport pageSlug={slug} currentData={formData} onImport={merged => setFormData(merged)} />
          <a href={previewUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold px-3 py-2.5 rounded-xl transition">
            <Eye className="w-3.5 h-3.5" /> Preview
          </a>
          <button onClick={handleReset}
            className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold px-3 py-2.5 rounded-xl transition">
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
          <button onClick={handleSave} disabled={saveStatus === "saving"}
            className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl transition ${
              saveStatus === "saved" ? "bg-green-500 text-white" :
              saveStatus === "error" ? "bg-red-500 text-white" :
              "bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-60"}`}>
            {saveStatus === "saving" && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            {saveStatus === "saved" && <CheckCircle2 className="w-3.5 h-3.5" />}
            {saveStatus === "error" && <AlertCircle className="w-3.5 h-3.5" />}
            {saveStatus === "idle" && <Save className="w-3.5 h-3.5" />}
            {saveStatus === "saving" ? "Saving…" : saveStatus === "saved" ? "Saved!" : saveStatus === "error" ? "Error" : "Save Changes"}
          </button>
        </div>
      </header>

      {saveStatus === "error" && errorMsg && (
        <div className="mx-6 mt-4 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" /><span>{errorMsg}</span>
        </div>
      )}

      <div className="flex gap-6 p-6">
        {/* Left: editors */}
        <div className="flex-1 min-w-0 space-y-3">
          {/* Page info bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
              <Layers className="w-6 h-6 text-slate-500" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">{pageLabel}</h1>
              <p className="text-xs text-slate-400">
                {sections.length > 0
                  ? `${sections.length} editable sections — click any to expand`
                  : "No sections defined for this page yet."}
              </p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2.5 py-1 rounded-full">Published</span>
            </div>
          </div>

          {/* Section panels */}
          {sections.length > 0 ? (
            sections.map(def => (
              <SectionPanel
                key={def.key} slug={slug} def={def}
                data={formData?.[def.key]}
                onChange={val => setSectionData(def.key, val)}
              />
            ))
          ) : (
            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-400 text-sm">
              No editor defined for this page yet. Save will still persist raw data.
            </div>
          )}
        </div>

        {/* Right: quick-nav */}
        <aside className="w-52 shrink-0 hidden xl:block">
          <div className="sticky top-20 space-y-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Sections</p>
              <ul className="space-y-1">
                {sections.map(def => {
                  const Icon = def.icon;
                  return (
                    <li key={def.key}>
                      <span className="w-full flex items-center gap-2 text-[11px] text-slate-500 hover:text-slate-800 py-1.5 px-2 rounded-lg hover:bg-slate-50 transition cursor-default">
                        <Icon className={`w-3 h-3 ${def.color} shrink-0`} />
                        {def.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="bg-slate-800 rounded-2xl p-4 text-white">
              <p className="text-[11px] font-bold uppercase tracking-widest text-white/50 mb-2">Tips</p>
              <ul className="space-y-2 text-[11px] text-white/70">
                <li className="flex gap-1.5"><span className="text-teal mt-0.5">•</span>Click a section to edit</li>
                <li className="flex gap-1.5"><span className="text-teal mt-0.5">•</span>Drop or paste image URLs</li>
                <li className="flex gap-1.5"><span className="text-teal mt-0.5">•</span>AI PDF auto-fills all sections</li>
                <li className="flex gap-1.5"><span className="text-teal mt-0.5">•</span>Save when done</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
