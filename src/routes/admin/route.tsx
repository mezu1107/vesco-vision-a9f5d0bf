import { Outlet, createFileRoute, Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { isAuthenticated, logout } from "@/lib/admin-auth";
import {
  LayoutDashboard, Eye, LogOut, ChevronRight, Layers,
  Home, Info, Building2, ShieldCheck, FlaskConical, Phone,
  HelpCircle, FolderOpen, Cpu, Package, Newspaper, Globe,
  Settings2, FileText, ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

// ── All pages grouped — mirrors admin/index.tsx dashboard ─────────────────
const NAV_GROUPS = [
  {
    label: "Core Pages",
    pages: [
      { slug: "home",  label: "Home",    icon: Home  },
      { slug: "about", label: "About Us", icon: Info  },
    ],
  },
  {
    label: "Company",
    pages: [
      { slug: "about-mission",  label: "Mission & Vision", icon: FlaskConical },
      { slug: "about-network",  label: "Global Network",   icon: Globe        },
      { slug: "facility",       label: "Facility",         icon: Building2    },
      { slug: "research",       label: "Research & Dev",   icon: FlaskConical },
    ],
  },
  {
    label: "Technology & Products",
    pages: [
      { slug: "technology", label: "Technology", icon: Cpu     },
      { slug: "products",   label: "Products",   icon: Package },
    ],
  },
  {
    label: "Business",
    pages: [
      { slug: "oem",                label: "OEM / ODM",         icon: Settings2    },
      { slug: "custom-development", label: "Custom Development", icon: FlaskConical },
    ],
  },
  {
    label: "Quality",
    pages: [
      { slug: "quality", label: "Quality", icon: ShieldCheck },
    ],
  },
  {
    label: "Resources",
    pages: [
      { slug: "insights",  label: "Insights / Blog",  icon: Newspaper  },
      { slug: "resources", label: "Resources",         icon: FolderOpen },
      { slug: "faq",       label: "FAQ",               icon: HelpCircle },
      { slug: "contact",   label: "Contact",           icon: Phone      },
    ],
  },
];

function AdminLayout() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [authed, setAuthed] = useState<boolean | null>(null);
  // track which groups are collapsed
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const ok = isAuthenticated();
    setAuthed(ok);
    if (!ok) navigate({ to: "/admin-login" });
  }, [navigate]);

  if (authed === null) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
        <span className="w-6 h-6 border-2 border-teal border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (!authed) return null;

  const handleLogout = () => { logout(); navigate({ to: "/admin-login" }); };
  const isPageActive = (slug: string) => currentPath === `/admin/pages/${slug}`;
  const toggleGroup = (label: string) =>
    setCollapsed(c => ({ ...c, [label]: !c[label] }));

  return (
    <div className="flex min-h-screen bg-[#f1f5f9] font-sans">
      {/* ── Sidebar ──────────────────────────────────────────────────────── */}
      <aside className="w-64 bg-[#0a1628] text-white flex flex-col fixed h-screen z-40 shadow-2xl">

        {/* Logo */}
        <div className="px-5 py-4 border-b border-white/[0.08] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4 text-[#05231f]" />
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-tight">PageBuilder</div>
              <div className="text-white/40 text-[10px] tracking-wide">Vesco Science CMS</div>
            </div>
          </div>
        </div>

        {/* Nav — scrollable */}
        <nav className="flex-1 px-3 py-3 overflow-y-auto space-y-0.5">

          {/* Dashboard */}
          <Link
            to="/admin"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[0.82rem] font-semibold transition-all mb-2 ${
              currentPath === "/admin" || currentPath === "/admin/"
                ? "bg-teal text-[#05231f]"
                : "text-white/60 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            <LayoutDashboard className="w-4 h-4 shrink-0" />
            Dashboard
            <span className="ml-auto text-[10px] bg-white/10 text-white/50 px-1.5 py-0.5 rounded-full font-normal">
              15
            </span>
          </Link>

          {/* Page groups */}
          {NAV_GROUPS.map(group => {
            const isOpen = !collapsed[group.label];
            return (
              <div key={group.label} className="pt-1">
                {/* Group header */}
                <button
                  onClick={() => toggleGroup(group.label)}
                  className="w-full flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white/50 transition-colors"
                >
                  <span className="flex-1 text-left">{group.label}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "" : "-rotate-90"}`} />
                </button>

                {/* Pages */}
                {isOpen && group.pages.map(p => {
                  const Icon = p.icon;
                  const active = isPageActive(p.slug);
                  return (
                    <Link
                      key={p.slug}
                      to="/admin/pages/$slug"
                      params={{ slug: p.slug }}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-[0.8rem] font-medium transition-all ${
                        active
                          ? "bg-white/[0.12] text-white"
                          : "text-white/55 hover:text-white hover:bg-white/[0.07]"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${active ? "text-teal" : ""}`} />
                      <span className="flex-1 truncate">{p.label}</span>
                      {active && <ChevronRight className="w-3 h-3 text-teal shrink-0" />}
                    </Link>
                  );
                })}
              </div>
            );
          })}

          {/* Tools */}
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className="block px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/25">
              Tools
            </span>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-[0.8rem] font-medium text-white/50 hover:text-white hover:bg-white/[0.07] transition-all"
            >
              <Eye className="w-3.5 h-3.5 shrink-0" />
              View Live Site
            </a>
            <Link
              to="/admin"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-[0.8rem] font-medium text-white/50 hover:text-white hover:bg-white/[0.07] transition-all"
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              All Pages
            </Link>
          </div>
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-white/[0.08] shrink-0">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[0.8rem] font-medium text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-3.5 h-3.5 shrink-0" />
            Sign out
          </button>
          <p className="text-[10px] text-white/20 text-center mt-2">admin@am.com</p>
        </div>
      </aside>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <main className="flex-1 ml-64 min-h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
