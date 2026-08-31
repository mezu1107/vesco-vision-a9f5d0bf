import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as useI18n, u as Route$11 } from "./router-CozBOSu6.mjs";
import { a as Section, i as Reveal, n as PageHero, o as SectionHeading } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/research-0gIc98Dd.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t } = useI18n();
	const cms = Route$11.useLoaderData();
	const hero = cms?.hero ?? {};
	const areas = cms?.areas ?? {};
	const team = cms?.team ?? {};
	const seoulSection = cms?.seoulSection ?? {};
	const scientistsSection = cms?.scientistsSection ?? {};
	const areaItems = areas.items ?? [];
	const teamItems = team.items ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: hero.eyebrow ?? t("research.eyebrow"),
			title: hero.title ?? t("research.title"),
			lead: hero.intro ?? t("research.intro"),
			image: hero.image ?? "/assets/research-team.jpg",
			imageAlt: "Vesco Science Korean senior R&D scientific team",
			crumb: {
				label: t("research.title"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: areas.eyebrow ?? t("research.eyebrow"),
			title: areas.title ?? t("research.areasTitle")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
			children: areaItems.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group h-full bg-card p-8 transition-colors hover:bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[0.75rem] font-bold tracking-[0.18em] text-teal",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-[1.1rem] font-semibold text-navy",
						children: a
					})]
				})
			}, i))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: seoulSection.image ?? "/assets/seoul-biotech-campus.jpg",
					alt: "Seoul biotech campus",
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: seoulSection.eyebrow ?? "Biotech Hub",
						title: seoulSection.title ?? "State-of-the-Art Biological R&D Headquarters in Seoul"
					}), seoulSection.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
						children: seoulSection.body
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: scientistsSection.eyebrow ?? "Scientific Leadership",
						title: scientistsSection.title ?? "Ph.D. Level Korean Biological R&D Scientists"
					}), scientistsSection.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
						children: scientistsSection.body
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: scientistsSection.image ?? "/assets/korean-bio-researchers.jpg",
					alt: "Korean scientists",
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				}) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				invert: true,
				eyebrow: t("research.eyebrow"),
				title: team.title ?? t("research.teamTitle")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 flex flex-wrap gap-3",
				children: teamItems.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-sm border border-white/15 px-5 py-2.5 text-[0.85rem] text-white/75",
					children: m
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
