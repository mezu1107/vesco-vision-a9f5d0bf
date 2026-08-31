import { Outlet, createFileRoute, Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { isAuthenticated, logout } from "@/lib/admin-auth";
import {
  LayoutDashboard,
  FileText,
  Eye,
  LogOut,
  ChevronRight,
  Layers,
  Settings,
  Home,
  Info,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

const PAGES = [
  { slug: "home", label: "Home", icon: Home, desc: "Hero, capabilities, technology cards" },
  { slug: "about", label: "About Us", icon: Info, desc: "Who we are, quality, partnerships" },
];

function AdminLayout() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    const ok = isAuthenticated();
    setAuthed(ok);
    if (!ok) {
      navigate({ to: "/admin-login" });
    }
  }, [navigate]);

  if (authed === null) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
        <span className="w-6 h-6 border-2 border-teal border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!authed) return null;

  const handleLogout = () => {
    logout();
    navigate({ to: "/admin-login" });
  };

  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path + "/");

  return (
    <div className="flex min-h-screen bg-[#f1f5f9] font-sans">
      {/* ── Sidebar ── */}
      <aside className="w-64 bg-[#0a1628] text-white flex flex-col fixed h-screen z-40 shadow-2xl">
        {/* Logo */}
        <div className="px-5 py-5 border-b border-white/8">
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

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-1">
          {/* Dashboard */}
          <Link
            to="/admin"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              currentPath === "/admin"
                ? "bg-teal text-[#05231f] font-bold"
                : "text-white/60 hover:text-white hover:bg-white/8"
            }`}
          >
            <LayoutDashboard className="w-4 h-4 shrink-0" />
            Dashboard
          </Link>

          {/* Pages group */}
          <div className="pt-4 pb-1">
            <span className="text-[10px] uppercase tracking-widest text-white/25 px-3 font-semibold">Pages</span>
          </div>

          {PAGES.map((p) => {
            const Icon = p.icon;
            const active = isActive(`/admin/pages/${p.slug}`);
            return (
              <Link
                key={p.slug}
                to={`/admin/pages/${p.slug}`}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-white/12 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/8"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="flex-1">{p.label}</span>
                {active && <ChevronRight className="w-3.5 h-3.5 text-teal" />}
              </Link>
            );
          })}

          {/* Resources */}
          <div className="pt-4 pb-1">
            <span className="text-[10px] uppercase tracking-widest text-white/25 px-3 font-semibold">Tools</span>
          </div>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 transition-all"
          >
            <Eye className="w-4 h-4 shrink-0" />
            View Live Site
          </a>

          <Link
            to="/admin"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 transition-all"
          >
            <Settings className="w-4 h-4 shrink-0" />
            Settings
          </Link>
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-white/8">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            Sign out
          </button>
          <p className="text-[10px] text-white/20 text-center mt-3">admin@am.com</p>
        </div>
      </aside>

      {/* ── Main Area ── */}
      <main className="flex-1 ml-64 min-h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
