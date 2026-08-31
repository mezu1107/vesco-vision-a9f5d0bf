import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home, Info, Building2, ShieldCheck, FlaskConical, Phone,
  HelpCircle, FolderOpen, Cpu, Package, Newspaper, Globe,
  Settings, Layers, FileText, Eye, Pencil, ArrowRight, Sparkles, Plus,
} from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

// ── All pages the admin can manage ──────────────────────────────────────────
const PAGE_GROUPS = [
  {
    group: "Core Pages",
    color: "from-teal/20 to-cyan-400/10",
    pages: [
      { slug: "home",   label: "Home",         icon: Home,         desc: "Hero, capabilities, technology, exosome, manufacturing, quality, CTA",       sections: ["Hero","Trust Bar","About","Core Tech","Exosome","Manufacturing","Quality","CTA"] },
      { slug: "about",  label: "About Us",      icon: Info,         desc: "Company story, who we are, scientific approach, quality, partnership",       sections: ["Hero","Who We Are","Scientific Approach","Manufacturing","Quality","Partnership","Vision & Mission","CTA"] },
    ],
  },
  {
    group: "Company",
    color: "from-indigo-400/20 to-purple-400/10",
    pages: [
      { slug: "about-mission",  label: "Mission & Vision",    icon: FlaskConical,  desc: "Mission, vision, operating principles, values",                        sections: ["Hero","Mission","Vision","Values","Research","Seoul"] },
      { slug: "about-network",  label: "Global Network",      icon: Globe,         desc: "Partnership models, logistics, market coverage, support",              sections: ["Hero","Partnership Models","Logistics","Support","Coverage"] },
      { slug: "facility",       label: "Facility",            icon: Building2,     desc: "Facility areas, cleanroom, cold chain logistics",                      sections: ["Hero","Facility Areas","Cleanroom","Cold Chain"] },
      { slug: "research",       label: "Research & Dev",      icon: FlaskConical,  desc: "R&D overview, research areas, team capabilities",                      sections: ["Hero","Research Areas","Seoul","Scientists","Team"] },
    ],
  },
  {
    group: "Technology & Products",
    color: "from-blue-400/20 to-cyan-400/10",
    pages: [
      { slug: "technology", label: "Technology",   icon: Cpu,     desc: "Six technology platforms, exosome process, characterization",                sections: ["Hero","Tech Cards","Exosome","Characterization"] },
      { slug: "products",   label: "Products",     icon: Package, desc: "B2B product catalogue, categories, individual product entries",             sections: ["Hero","Categories","Products"] },
    ],
  },
  {
    group: "Business",
    color: "from-orange-400/20 to-amber-400/10",
    pages: [
      { slug: "oem",                label: "OEM / ODM",         icon: Settings,     desc: "OEM & ODM models, 9-stage process, custom dev, private label",        sections: ["Hero","OEM","ODM","Process","Custom Dev","Private Label","Regulatory"] },
      { slug: "custom-development", label: "Custom Development", icon: FlaskConical, desc: "Development brief form, pathway, deliverables",                       sections: ["Hero","Pathway","Form","Deliverables"] },
    ],
  },
  {
    group: "Quality & Compliance",
    color: "from-green-400/20 to-emerald-400/10",
    pages: [
      { slug: "quality", label: "Quality", icon: ShieldCheck, desc: "Quality flow, systems, cleanroom, characterization groups",                    sections: ["Hero","Flow","Systems","Cleanroom","Characterization"] },
    ],
  },
  {
    group: "Resources & Support",
    color: "from-rose-400/20 to-pink-400/10",
    pages: [
      { slug: "insights",  label: "Insights / Blog", icon: Newspaper,   desc: "Articles, categories, hero",                                               sections: ["Hero","Categories","Articles"] },
      { slug: "resources", label: "Resources",        icon: FolderOpen,  desc: "Download centre, documents list",                                          sections: ["Hero","Documents"] },
      { slug: "faq",       label: "FAQ",              icon: HelpCircle,  desc: "FAQ categories and Q&A pairs",                                             sections: ["Hero","FAQ Categories"] },
      { slug: "contact",   label: "Contact",          icon: Phone,       desc: "Contact hero, info block, office sections",                                sections: ["Hero","Contact Info","Office","Consult"] },
    ],
  },
];

const ALL_PAGES = PAGE_GROUPS.flatMap(g => g.pages);

function AdminDashboard() {
  const totalSections = ALL_PAGES.reduce((sum, p) => sum + p.sections.length, 0);

  return (
    <div className="p-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>PageBuilder</span>
          <span>/</span>
          <span className="text-slate-700 font-medium">Dashboard</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-1">All Pages</h1>
            <p className="text-slate-500 text-sm">Select any page to open the visual builder and edit its content.</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { label: "Total Pages", value: String(ALL_PAGES.length), icon: FileText },
          { label: "Editable Sections", value: String(totalSections), icon: Layers },
          { label: "Live & Published", value: String(ALL_PAGES.length), icon: Eye },
        ].map(s => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                <Icon className="w-5 h-5 text-slate-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">{s.value}</div>
                <div className="text-xs text-slate-400 font-medium">{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Page groups */}
      <div className="space-y-10">
        {PAGE_GROUPS.map(group => (
          <div key={group.group}>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <span className="h-px flex-1 bg-slate-200" />
              {group.group}
              <span className="h-px flex-1 bg-slate-200" />
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {group.pages.map(page => {
                const Icon = page.icon;
                return (
                  <div key={page.slug}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-slate-300 transition-all group">
                    <div className={`h-1 bg-gradient-to-r ${group.color}`} />
                    <div className="p-5 flex items-start gap-4">
                      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-slate-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h3 className="text-sm font-bold text-slate-800">{page.label}</h3>
                          <span className="text-[10px] bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full">Live</span>
                        </div>
                        <p className="text-slate-400 text-xs mb-3 line-clamp-1">{page.desc}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {page.sections.map(s => (
                            <span key={s} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-medium">{s}</span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2">
                          <Link to="/admin/pages/$slug" params={{ slug: page.slug }}
                            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-bold px-3 py-2 rounded-lg transition">
                            <Pencil className="w-3 h-3" />
                            Edit
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                          <a href={`/${page.slug === "home" ? "" : page.slug.replace("about-mission", "about/mission").replace("about-network", "about/network")}`}
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-500 text-[11px] font-bold px-3 py-2 rounded-lg transition">
                            <Eye className="w-3 h-3" />
                            Preview
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* AI tip */}
      <div className="mt-10 flex items-start gap-3 bg-purple-50 border border-purple-200 rounded-2xl p-5">
        <Sparkles className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-purple-800 mb-0.5">AI PDF Import available on every page</p>
          <p className="text-xs text-purple-600">Open any page builder and use the "AI PDF Import" button to automatically populate sections from a brand document or content PDF.</p>
        </div>
      </div>
    </div>
  );
}
