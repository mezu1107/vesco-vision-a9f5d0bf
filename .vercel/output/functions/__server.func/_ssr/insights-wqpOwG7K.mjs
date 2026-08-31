import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ARTICLES, d as useI18n, l as ARTICLE_CATEGORIES } from "./router-RzC8V2F6.mjs";
import { a as Section, i as Reveal, n as PageHero, o as SectionHeading } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
import { t as korean_bio_researchers_default } from "./korean-bio-researchers-Dx5OjY4S.mjs";
import { t as korean_faq_support_center_default } from "./korean-faq-support-center-BvWbO8l4.mjs";
import { t as molecular_default } from "./molecular-BXuR7CQB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights-wqpOwG7K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Layout() {
	if (useRouterState({ select: (s) => s.location.pathname }) !== "/insights") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Index, {});
}
function Index() {
	const { t } = useI18n();
	const [active, setActive] = (0, import_react.useState)(null);
	const shown = active ? ARTICLES.filter((a) => a.category === active) : ARTICLES;
	const chip = (on) => `rounded-sm border px-4 py-2 text-[0.78rem] font-medium transition-colors ${on ? "border-teal bg-teal text-[#05231f]" : "border-hairline text-navy hover:border-teal hover:text-science"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("insights.eyebrow"),
			title: t("insights.title"),
			lead: t("insights.intro"),
			image: molecular_default,
			imageAlt: "Advanced exosome molecular structure visualization",
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
						ARTICLES.length,
						")"
					]
				}), ARTICLE_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
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
				}, a.slug))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: korean_bio_researchers_default,
						alt: "Korean biological researchers reviewing analytical data in modern laboratory",
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "R&D Scientific Division"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.9rem] text-navy",
							children: "Pangyo Biotech Valley Research Team"
						})]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Scientific Rigor",
							title: "Pioneering Korean Exosome & Regenerative Publications"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
							children: "Our scientific publications reflect years of proprietary research conducted in South Korea's premier biotechnology hubs. We share key insights on tangential flow filtration (TFF), nano-tracking analysis (NTA), and lyophilization preservation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
							children: "By publishing detailed technical whitepapers, we aim to establish transparent quality benchmarks for biological skin boosters and exosome aesthetics across the global healthcare market."
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
							eyebrow: "Knowledge Sharing",
							title: "Seoul Biotech Partner Library & Regulatory Whitepapers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
							children: "Access comprehensive B2B technical briefs created by our Seoul regulatory team. Our insights cover international dossier formatting (EU CPNP, US FDA, MFDS), cold-chain air cargo protocols, and ingredient compatibility guidelines."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
							children: "We empower our OEM/ODM brand partners with verified scientific literature to support their clinical marketing claims and regulatory registration processes."
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: korean_faq_support_center_default,
						alt: "Korean technical documentation and regulatory advisory specialists in Seoul conference room",
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Knowledge Center"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.9rem] text-navy",
							children: "Seoul B2B Regulatory & Technical Library"
						})]
					})]
				}) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Layout as component };
