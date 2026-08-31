import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as MoveRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Cr1mInFq.js
var import_jsx_runtime = require_jsx_runtime();
function AdminDashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-5xl mx-auto py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl font-bold text-navy mb-8",
			children: "Manage Pages"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-2 gap-6",
			children: [{
				slug: "home",
				title: "Home Page",
				desc: "Hero, Capabilities, Exosome, etc."
			}, {
				slug: "about",
				title: "About Us",
				desc: "Scientific Approach, Quality, Partnerships."
			}].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: `/admin/pages/${p.slug}`,
				className: "group block bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition hover:border-teal/50 relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-1 h-full bg-teal transform -translate-x-full group-hover:translate-x-0 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold text-navy mb-2",
						children: p.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-slate-500 text-sm",
						children: p.desc
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-slate-50 p-3 rounded-full group-hover:bg-teal group-hover:text-white transition-colors text-slate-400",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveRight, { className: "w-5 h-5" })
					})]
				})]
			}, p.slug))
		})]
	});
}
//#endregion
export { AdminDashboard as component };
