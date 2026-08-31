import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Info, E as Layers, F as Eye, H as ChevronRight, T as LayoutDashboard, b as LogOut, k as House, u as Settings } from "../_libs/lucide-react.mjs";
import { r as logout, t as isAuthenticated } from "./admin-auth-D-n88pb4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-G2c3zG_5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGES = [{
	slug: "home",
	label: "Home",
	icon: House,
	desc: "Hero, capabilities, technology cards"
}, {
	slug: "about",
	label: "About Us",
	icon: Info,
	desc: "Who we are, quality, partnerships"
}];
function AdminLayout() {
	const navigate = useNavigate();
	const currentPath = useRouterState().location.pathname;
	const [authed, setAuthed] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const ok = isAuthenticated();
		setAuthed(ok);
		if (!ok) navigate({ to: "/admin-login" });
	}, [navigate]);
	if (authed === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-[#0a1628] flex items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-6 h-6 border-2 border-teal border-t-transparent rounded-full animate-spin" })
	});
	if (!authed) return null;
	const handleLogout = () => {
		logout();
		navigate({ to: "/admin-login" });
	};
	const isActive = (path) => currentPath === path || currentPath.startsWith(path + "/");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-[#f1f5f9] font-sans",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "w-64 bg-[#0a1628] text-white flex flex-col fixed h-screen z-40 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-5 py-5 border-b border-white/8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-8 h-8 rounded-lg bg-teal flex items-center justify-center shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-4 h-4 text-[#05231f]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white font-bold text-sm leading-tight",
							children: "PageBuilder"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white/40 text-[10px] tracking-wide",
							children: "Vesco Science CMS"
						})] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex-1 px-3 py-4 overflow-y-auto space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin",
							className: `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${currentPath === "/admin" ? "bg-teal text-[#05231f] font-bold" : "text-white/60 hover:text-white hover:bg-white/8"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "w-4 h-4 shrink-0" }), "Dashboard"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-4 pb-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-widest text-white/25 px-3 font-semibold",
								children: "Pages"
							})
						}),
						PAGES.map((p) => {
							const Icon = p.icon;
							const active = isActive(`/admin/pages/${p.slug}`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: `/admin/pages/${p.slug}`,
								className: `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${active ? "bg-white/12 text-white" : "text-white/60 hover:text-white hover:bg-white/8"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4 shrink-0" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1",
										children: p.label
									}),
									active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3.5 h-3.5 text-teal" })
								]
							}, p.slug);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-4 pb-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-widest text-white/25 px-3 font-semibold",
								children: "Tools"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4 shrink-0" }), "View Live Site"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin",
							className: "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "w-4 h-4 shrink-0" }), "Settings"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-3 py-4 border-t border-white/8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleLogout,
						className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-4 h-4 shrink-0" }), "Sign out"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-white/20 text-center mt-3",
						children: "admin@am.com"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "flex-1 ml-64 min-h-screen overflow-y-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})]
	});
}
//#endregion
export { AdminLayout as component };
