import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as useI18n, h as Route$16 } from "./router-CozBOSu6.mjs";
import { a as Section, i as Reveal, n as PageHero, o as SectionHeading, r as ProcessFlow } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/facility-COND_Wd-.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t } = useI18n();
	const cms = Route$16.useLoaderData();
	const hero = cms?.hero ?? {};
	const areas = cms?.areas ?? [];
	const cleanroom = cms?.cleanroomSection ?? {};
	const coldChain = cms?.coldChainSection ?? {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: hero.eyebrow ?? t("facility.eyebrow"),
			title: hero.title ?? t("facility.title"),
			lead: hero.intro ?? t("facility.intro"),
			image: hero.image ?? "/assets/vials.jpg",
			imageAlt: "Sterile glass vials inside Vesco Science Korean biomanufacturing plant",
			crumb: {
				label: t("facility.eyebrow"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
			children: areas.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "h-full bg-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-[1.1rem] font-semibold text-navy",
							children: a.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[0.92rem] leading-relaxed text-muted-foreground",
							children: a.body
						})
					]
				})
			}, i))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: cleanroom.image ?? "/assets/korean-cleanroom-facility.jpg",
					alt: "Korean cleanroom facility",
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: cleanroom.eyebrow ?? "Cleanroom Infrastructure",
						title: cleanroom.title ?? "ISO-Certified cGMP Production Suites in Seoul"
					}), cleanroom.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
						children: cleanroom.body
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				invert: true,
				eyebrow: t("quality.eyebrow"),
				title: t("quality.title"),
				intro: t("quality.intro")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessFlow, {
					steps: t("quality.flow") ? [
						"Raw Material",
						"Production",
						"In-process QC",
						"Final QC",
						"Batch Release",
						"Storage",
						"Distribution"
					] : [],
					invert: true
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: coldChain.eyebrow ?? "Cold Chain & Logistics",
						title: coldChain.title ?? "Integrated Cold Storage & Incheon Air Cargo Dispatch"
					}), coldChain.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
						children: coldChain.body
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: coldChain.image ?? "/assets/korean-international-logistics.jpg",
					alt: "Cold chain logistics",
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				}) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
