import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as useI18n, f as Route$13 } from "./router-CozBOSu6.mjs";
import { a as Section, i as Reveal, n as PageHero, o as SectionHeading, s as TealButton } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/oem-CDe7C0IG.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t } = useI18n();
	const cms = Route$13.useLoaderData();
	const hero = cms?.hero ?? {};
	const oem = cms?.oem ?? {};
	const odm = cms?.odm ?? {};
	const mfgSection = cms?.manufacturingSection ?? {};
	const process = cms?.process ?? {};
	const customDev = cms?.customDev ?? {};
	const privateLabel = cms?.privateLabel ?? {};
	const regulatory = cms?.regulatory ?? {};
	const oemSteps = oem.steps ?? [];
	const odmSteps = odm.steps ?? [];
	const processSteps = process.steps ?? [];
	const inputs = customDev.inputs ?? [];
	const privatePoints = privateLabel.points ?? [];
	const regPoints = regulatory.points ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: hero.eyebrow ?? t("oem.eyebrow"),
			title: hero.title ?? t("oem.title"),
			lead: hero.subtitle ?? t("oem.subtitle"),
			image: hero.image ?? "/assets/cleanroom.jpg",
			imageAlt: "Vesco Science cGMP cleanroom facility",
			crumb: {
				label: t("nav.oem"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "models",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px bg-hairline lg:grid-cols-2",
				children: [{
					title: oem.title ?? t("oem.oemTitle"),
					body: oem.body ?? t("oem.oemBody"),
					steps: oemSteps
				}, {
					title: odm.title ?? t("oem.odmTitle"),
					body: odm.body ?? t("oem.odmBody"),
					steps: odmSteps
				}].map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full bg-card p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-[1.6rem] font-semibold text-navy",
								children: col.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
								children: col.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-8 grid gap-3",
								children: col.steps.map((s, si) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-4 border-b border-hairline pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-[0.72rem] font-bold tracking-[0.16em] text-teal",
										children: String(si + 1).padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[0.95rem] text-navy",
										children: s
									})]
								}, si))
							})
						]
					})
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: mfgSection.image ?? "/assets/korean-cleanroom-facility.jpg",
					alt: "Manufacturing",
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: mfgSection.eyebrow ?? "World-Class Scale",
						title: mfgSection.title ?? "Advanced Korean Contract Manufacturing Infrastructure"
					}), mfgSection.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
						children: mfgSection.body
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "process",
			tone: "navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				invert: true,
				eyebrow: process.eyebrow ?? t("oem.processEyebrow"),
				title: process.title ?? t("oem.processTitle")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-14 relative grid gap-px md:grid-cols-3",
				children: processSteps.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 50,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative h-full bg-white/[0.04] p-7 pl-16 outline outline-white/10 md:pl-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-7 left-4 flex h-[26px] w-[26px] items-center justify-center rounded-full border border-teal/50 bg-navy-deep font-display text-[0.65rem] font-bold text-teal md:static md:mb-4 md:flex",
								children: p.num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[1.05rem] font-semibold text-white md:mt-4",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[0.9rem] leading-relaxed text-white/60",
								children: p.body
							})
						]
					})
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "custom-formulation",
			tone: "white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: customDev.eyebrow ?? t("oem.custom.eyebrow"),
					title: customDev.title ?? t("oem.custom.title"),
					intro: customDev.intro ?? t("oem.custom.intro")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
					children: inputs.map((inp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card px-6 py-5 text-[0.95rem] text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" }), inp]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
						to: "/custom-development",
						children: customDev.cta ?? t("oem.custom.cta")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
						to: "/contact",
						variant: "outline",
						children: t("nav.cta")
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "private-label",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: privateLabel.eyebrow ?? t("privateLabel.eyebrow"),
				title: privateLabel.title ?? t("privateLabel.title"),
				intro: privateLabel.intro ?? t("privateLabel.intro")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-px bg-hairline",
				children: privatePoints.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "bg-card px-6 py-4 text-[0.95rem] text-navy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" }), p]
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "regulatory",
			tone: "navy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					invert: true,
					eyebrow: regulatory.eyebrow ?? t("regulatorySupport.eyebrow"),
					title: regulatory.title ?? t("regulatorySupport.title"),
					intro: regulatory.intro ?? t("regulatorySupport.intro")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3",
					children: regPoints.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 50,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full bg-white/[0.04] p-6 outline outline-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[0.7rem] font-bold tracking-[0.18em] text-teal",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[0.95rem] text-white/85",
								children: p
							})]
						})
					}, i))
				}),
				regulatory.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 max-w-3xl text-[0.85rem] text-white/50",
					children: regulatory.note
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
