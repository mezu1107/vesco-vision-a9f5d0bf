import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as useI18n, b as ARTICLE_CATEGORIES, p as Route$14, y as ARTICLES } from "./router-CozBOSu6.mjs";
import { a as Section, i as Reveal, n as PageHero, o as SectionHeading } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights-DXRGzuSD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Layout() {
	if (useRouterState({ select: (s) => s.location.pathname }) !== "/insights") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Index, {});
}
function Index() {
	const { t } = useI18n();
	const cms = Route$14.useLoaderData();
	const hero = cms?.hero ?? {};
	const cmsArticles = cms?.articles;
	const articles = Array.isArray(cmsArticles) && cmsArticles.length > 0 ? cmsArticles : ARTICLES;
	const cmsCategories = cms?.categories;
	const cats = Array.isArray(cmsCategories) && cmsCategories.length > 0 ? cmsCategories : ARTICLE_CATEGORIES;
	const [active, setActive] = (0, import_react.useState)(null);
	const shown = active ? articles.filter((a) => a.category === active) : articles;
	const chip = (on) => `rounded-sm border px-4 py-2 text-[0.78rem] font-medium transition-colors ${on ? "border-teal bg-teal text-[#05231f]" : "border-hairline text-navy hover:border-teal hover:text-science"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: hero.eyebrow ?? t("insights.eyebrow"),
			title: hero.title ?? t("insights.title"),
			lead: hero.intro ?? t("insights.intro"),
			image: hero.image ?? "/assets/molecular.jpg",
			imageAlt: "Advanced molecular structure visualization",
			crumb: {
				label: t("insights.eyebrow"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("insights.eyebrow"),
				title: t("insights.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setActive(null),
					className: chip(active === null),
					children: [
						t("common.viewAll"),
						" (",
						articles.length,
						")"
					]
				}), cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActive(c),
					className: chip(active === c),
					children: c
				}, c))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: shown.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 6 * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/insights/$slug",
						params: { slug: a.slug },
						className: "card-flat group flex h-full flex-col p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science",
								children: a.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-[1.15rem] leading-snug font-semibold text-navy",
								children: a.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 flex-1 text-[0.93rem] leading-relaxed text-muted-foreground",
								children: a.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-7 inline-flex items-center gap-3 text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-science",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-teal transition-all duration-500 group-hover:w-10" }), t("common.readMore")]
							})
						]
					})
				}, a.slug || i))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Layout as component };
