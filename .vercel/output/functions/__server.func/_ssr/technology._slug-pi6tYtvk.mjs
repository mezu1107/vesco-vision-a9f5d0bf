import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as useI18n, r as Route$1 } from "./router-RzC8V2F6.mjs";
import { a as Section, i as Reveal, n as PageHero, o as SectionHeading, r as ProcessFlow, s as TealButton } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
import { t as korean_bio_researchers_default } from "./korean-bio-researchers-Dx5OjY4S.mjs";
import { t as lyophilizer_default } from "./lyophilizer-Q9Swj7Dp.mjs";
import { t as korean_cleanroom_facility_default } from "./korean-cleanroom-facility-DO9vYScX.mjs";
import { t as vials_default } from "./vials-CPfIHwza.mjs";
import { t as molecular_default } from "./molecular-BXuR7CQB.mjs";
import { t as cleanroom_default } from "./cleanroom-CQ-A4hT1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/technology._slug-pi6tYtvk.js
var import_jsx_runtime = require_jsx_runtime();
var SLUG_IMAGES = {
	exosome: "/assets/exosome-BUYrBGuc.jpg",
	"pdrn-pn": molecular_default,
	lyophilization: lyophilizer_default,
	formulation: vials_default,
	"cold-chain": cleanroom_default,
	custom: cleanroom_default
};
function Page() {
	const { slug } = Route$1.useParams();
	const { t, tx } = useI18n();
	const cards = tx("technology.cards") ?? [];
	const card = cards.find((c) => c.slug === slug);
	const pageKey = slug === "pdrn-pn" ? "pages.pdrnPage" : slug === "lyophilization" ? "pages.lyoPage" : slug === "formulation" ? "pages.formulationPage" : null;
	const blocks = pageKey ? tx(`${pageKey}.blocks`) ?? [] : [];
	const isExosome = slug === "exosome";
	const groups = tx("characterization.groups") ?? [];
	const steps = tx("exosome.steps") ?? [];
	const title = pageKey ? t(`${pageKey}.title`) : isExosome ? t("exosome.title") : card?.title ?? slug;
	const lead = pageKey ? t(`${pageKey}.lead`) : isExosome ? t("pages.exosomePage.lead") : card?.body ?? "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("technology.eyebrow"),
			title,
			lead,
			...SLUG_IMAGES[slug] ? { image: SLUG_IMAGES[slug] } : {},
			imageAlt: `Vesco Science Korea - ${title} platform illustration`,
			crumb: {
				label: title,
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		isExosome ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("exosome.eyebrow"),
					title: t("exosome.title"),
					intro: t("exosome.body1")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[1.0625rem] leading-relaxed text-muted-foreground lg:pt-24",
					children: t("exosome.body2")
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				tone: "navy",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					invert: true,
					eyebrow: t("exosome.eyebrow"),
					title: t("exosome.processTitle")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessFlow, {
						steps,
						invert: true
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				tone: "white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("characterization.eyebrow"),
					title: t("characterization.title"),
					intro: t("characterization.intro")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4",
					children: groups.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full bg-card p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[1.05rem] font-semibold text-navy",
								children: g.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2",
								children: g.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "text-[0.9rem] text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" }), it]
								}, it))
							})]
						})
					}, g.title))
				})]
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("technology.eyebrow"),
				title,
				intro: card?.body ?? t("technology.intro")
			}),
			blocks.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-3",
				children: blocks.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-flat h-full p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[1.1rem] font-semibold text-navy",
							children: b.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[0.95rem] leading-relaxed text-muted-foreground",
							children: b.body
						})]
					})
				}, b.title))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 border border-hairline bg-card p-8 md:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "eyebrow text-science",
					children: "Technical Platform Specifications & Standards"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							label: "Purity Index",
							val: "> 99.4% HPLC Single-Peak Integrity"
						},
						{
							label: "Endotoxin Limit",
							val: "< 0.05 EU/mL (LAL Kinetic Chromogenic)"
						},
						{
							label: "Bioburden Standard",
							val: "Sterile (SAL 10^-6 ISO 13485 Verified)"
						},
						{
							label: "Storage Stability",
							val: "24 Months (-20°C / Lyophilized +4°C)"
						}
					].map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-l-2 border-teal bg-background p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-navy/70",
							children: spec.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.95rem] font-medium text-navy",
							children: spec.val
						})]
					}, spec.label))
				})]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: korean_cleanroom_facility_default,
						alt: `cGMP processing facility in Korea for ${title}`,
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Facility Standard"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.9rem] text-navy",
							children: "Seoul cGMP Manufacturing Suite"
						})]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Aseptic Control",
							title: `Rigorous cGMP Execution for ${title}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
							children: [
								"All unit operations for the ",
								title,
								" platform are performed inside Class 100 cleanroom environments located in our Seoul facility. Automated pressure cascading and inline filtration ensure compliance with Korean MFDS regulations."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
							children: "This manufacturing rigor guarantees zero bioburden contamination and batch-to-batch structural consistency."
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
							eyebrow: "Scientific Rigor",
							title: `Analytical Quality Verification for ${title}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
							children: [
								"Our Seoul biological testing lab runs daily HPLC purity, molecular weight distribution, and particle concentration assays to confirm that every batch meeting the specifications of the ",
								title,
								" platform."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
							children: "Comprehensive test reports accompany each lot shipped to OEM/ODM brand partners across North America, Europe, and Asia."
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: korean_bio_researchers_default,
						alt: `Korean biological QC scientists verifying assays for ${title}`,
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Analytical Control"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.9rem] text-navy",
							children: "Seoul Quality Verification Laboratory"
						})]
					})]
				}) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("technology.eyebrow"),
					title: t("technology.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
					children: cards.filter((c) => c.slug !== slug).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/technology/$slug",
						params: { slug: c.slug },
						className: "group bg-card p-7 transition-colors hover:bg-card/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal",
							children: c.num
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-[1.02rem] font-semibold text-navy group-hover:text-science",
							children: c.title
						})]
					}, c.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
						to: "/products",
						children: t("products.title")
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
