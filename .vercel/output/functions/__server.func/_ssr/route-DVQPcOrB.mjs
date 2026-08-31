import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-DVQPcOrB.js
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-slate-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "w-64 bg-navy text-white flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-6 text-xl font-bold border-b border-white/10 text-teal",
					children: "Vesco CMS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex-1 p-4 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: "block px-4 py-3 rounded-md text-white/80 hover:bg-white/10 hover:text-white transition",
						activeProps: { className: "bg-teal !text-white font-semibold" },
						children: "Dashboard"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						target: "_blank",
						className: "block px-4 py-3 rounded-md text-white/80 hover:bg-white/10 hover:text-white transition",
						children: "View Live Site ↗"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-4 text-xs text-white/40 border-t border-white/10",
					children: "Powered by Lovable"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "flex-1 p-8 overflow-y-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})]
	});
}
//#endregion
export { AdminLayout as component };
