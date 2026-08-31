import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as useI18n } from "./router-RzC8V2F6.mjs";
import { a as Section, i as Reveal, n as PageHero, o as SectionHeading } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
import { t as korean_bio_researchers_default } from "./korean-bio-researchers-Dx5OjY4S.mjs";
import { t as korean_cleanroom_facility_default } from "./korean-cleanroom-facility-DO9vYScX.mjs";
import { t as vials_default } from "./vials-CPfIHwza.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products.index-B0ti2Tdk.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t, tx } = useI18n();
	const categories = tx("products.categories") ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("products.eyebrow"),
			title: t("products.title"),
			lead: t("products.intro"),
			image: vials_default,
			imageAlt: "Vesco Science Korean lyophilized exosome and PDRN biological product vials",
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
			}, cat.key))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: korean_cleanroom_facility_default,
						alt: "Automated filling line for exosome vials and PDRN syringes in Korean cGMP cleanroom",
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Aseptic Production"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.9rem] text-navy",
							children: "Korean cGMP Biological Filling Suite"
						})]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Pure Korean Quality",
							title: "Strict cGMP Production Standards for Every Product Line"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
							children: "All exosome powders, PDRN solutions, and dermal skin boosters in our B2B catalogue are produced under strict Korean MFDS cGMP standards. We ensure zero endotoxin contamination, precise molecular mass verification, and full batch traceability."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
							children: "Our ISO Class 5 sterile filling suites prevent cross-contamination and preserve peak biological activity for global distribution."
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
							eyebrow: "Analytical Testing",
							title: "Rigorous Analytical Verification for International Dossiers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
							children: "Every catalogue batch undergoes complete Quality Control (QC) in our Seoul lab—including High-Performance Liquid Chromatography (HPLC), Nanoparticle Tracking Analysis (NTA), and accelerated thermal stability testing."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
							children: "We supply complete Certificate of Analysis (COA) documents with every shipment, ensuring effortless product registration in your destination market."
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: korean_bio_researchers_default,
						alt: "Korean biological QC technicians conducting assay and purity tests in laboratory",
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Quality Control"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.9rem] text-navy",
							children: "Seoul Laboratory Analytical Desk"
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
