import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as useI18n, o as Route$4 } from "./router-CozBOSu6.mjs";
import { a as Section, i as Reveal, n as PageHero } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products.index-C8wpKYk4.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t } = useI18n();
	const cms = Route$4.useLoaderData();
	const hero = cms?.hero ?? {};
	const categories = cms?.categories ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: hero.eyebrow ?? t("products.eyebrow"),
			title: hero.title ?? t("products.title"),
			lead: hero.intro ?? t("products.intro"),
			image: hero.image ?? "/assets/vials.jpg",
			imageAlt: "Vesco Science product vials",
			crumb: {
				label: t("nav.products"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-14",
			children: categories.map((cat, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: ci * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[260px_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal",
						children: String(ci + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-[1.5rem] font-semibold text-navy",
						children: cat.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-px bg-hairline sm:grid-cols-2",
						children: cat.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products/$slug",
							params: { slug: item.slug },
							className: "group flex items-center justify-between bg-card px-6 py-6 transition-colors hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[1rem] font-medium text-navy group-hover:text-science",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-teal transition-all duration-500 group-hover:w-10" })]
						}, item.slug))
					})]
				})
			}, cat.key || ci))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
