import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as useI18n, d as Route$12 } from "./router-CozBOSu6.mjs";
import { a as Section, i as Reveal, n as PageHero, o as SectionHeading, r as ProcessFlow } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quality-Bp-Yv2WI.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t } = useI18n();
	const cms = Route$12.useLoaderData();
	const hero = cms?.hero ?? {};
	const flow = cms?.flow ?? [];
	const systems = cms?.systems ?? [];
	const cleanroom = cms?.cleanroomSection ?? {};
	const char = cms?.characterization ?? {};
	const groups = char.groups ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: hero.eyebrow ?? t("quality.eyebrow"),
			title: hero.title ?? t("quality.title"),
			lead: hero.intro ?? t("quality.intro"),
			image: hero.image ?? "/assets/qc-lab.jpg",
			imageAlt: "Vesco Science Korean analytical QC laboratory",
			crumb: {
				label: t("nav.quality"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: t("quality.eyebrow"),
			title: t("quality.title")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessFlow, { steps: flow })
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: cleanroom.image ?? "/assets/korean-cleanroom-facility.jpg",
					alt: "Korean cGMP cleanroom",
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: cleanroom.eyebrow ?? "Continuous Monitoring",
						title: cleanroom.title ?? "ISO Class 5 Cleanroom Environmental & Microbiological Controls"
					}), cleanroom.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
						children: cleanroom.body
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("quality.eyebrow"),
				title: cms?.systemsTitle ?? t("quality.systemsTitle")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4",
				children: systems.map((sys, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 50,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full bg-card p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[0.98rem] font-medium text-navy",
							children: sys
						})]
					})
				}, i))
			})]
		}),
		groups.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: char.eyebrow ?? t("characterization.eyebrow"),
				title: char.title ?? t("characterization.title"),
				intro: char.intro ?? t("characterization.intro")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
				children: groups.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-flat h-full p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[1.02rem] font-semibold text-navy",
							children: g.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2",
							children: g.items.map((it, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-[0.9rem] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" }), it]
							}, j))
						})]
					})
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
