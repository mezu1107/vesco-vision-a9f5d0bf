import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as ChevronDown } from "../_libs/lucide-react.mjs";
import { d as useI18n } from "./router-RzC8V2F6.mjs";
import { a as Section, i as Reveal, n as PageHero, o as SectionHeading } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
import { t as korean_bio_researchers_default } from "./korean-bio-researchers-Dx5OjY4S.mjs";
import { t as korean_faq_support_center_default } from "./korean-faq-support-center-BvWbO8l4.mjs";
import { t as qc_lab_default } from "./qc-lab-BtsOlEPe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-ZjqVWuOd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t, tx } = useI18n();
	const categories = tx("faq.categories") ?? [];
	const [open, setOpen] = (0, import_react.useState)("0-0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("faq.eyebrow"),
			title: t("faq.title"),
			lead: t("faq.intro"),
			image: qc_lab_default,
			imageAlt: "Vesco Science Quality Control and Analytical Laboratory in Korea",
			crumb: {
				label: t("nav.faq"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[0.8fr_2.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("faq.eyebrow"),
				title: t("faq.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-12",
				children: categories.map((cat, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[0.72rem] font-bold tracking-[0.2em] text-science uppercase",
					children: cat.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 border-t border-hairline",
					children: cat.items.map((item, ii) => {
						const id = `${ci}-${ii}`;
						const isOpen = open === id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-hairline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-expanded": isOpen,
								onClick: () => setOpen(isOpen ? null : id),
								className: "flex w-full items-start justify-between gap-6 py-5 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[1rem] font-semibold text-navy",
									children: item.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `mt-1 h-4 w-4 shrink-0 text-science transition-transform duration-300 ${isOpen ? "rotate-180" : ""}` })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid transition-all duration-400 ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "overflow-hidden pr-10 text-[0.95rem] leading-relaxed text-muted-foreground",
									children: item.a
								})
							})]
						}, item.q);
					})
				})] }, cat.title))
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: korean_faq_support_center_default,
						alt: "Vesco Science Seoul technical support and client advisory desk",
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Client Support Desk"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.9rem] text-navy",
							children: "Seoul Global Consultation Center"
						})]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Dedicated Assistance",
							title: "Bilingual Technical & Order Consultation in Seoul"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
							children: "Need answers regarding custom batch minimums, shipping lead times, or export certification? Our bilingual customer advisory team in Seoul is ready to assist."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
							children: "We provide clear explanations of Korean MFDS regulations, shipping temperature requirements, and primary container compatibility to ensure total transparency for international partners."
						})
					] })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Direct Expert Access",
							title: "Direct R&D and QA Advisory for Specialized Technical Questions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
							children: "For complex questions concerning exosome particle size distribution (NTA), endotoxin testing protocols, or shelf-life stability data, our senior Korean research scientists provide direct technical documentation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
							children: "We believe open scientific communication builds long-term manufacturing trust, ensuring your regulatory filings are backed by verifiable laboratory evidence."
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: korean_bio_researchers_default,
						alt: "Korean research specialists analyzing analytical data and certificate of analysis reports",
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Technical Advisory"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.9rem] text-navy",
							children: "Korean R&D & Regulatory QA Desk"
						})]
					})]
				}) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
