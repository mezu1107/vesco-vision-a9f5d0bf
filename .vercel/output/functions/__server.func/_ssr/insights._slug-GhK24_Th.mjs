import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as useI18n, s as Route$5, y as ARTICLES } from "./router-CozBOSu6.mjs";
import { a as Section, i as Reveal, n as PageHero, s as TealButton } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
import { n as korean_bio_researchers_default, t as korean_cleanroom_facility_default } from "./korean-cleanroom-facility-DO9vYScX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights._slug-GhK24_Th.js
var import_jsx_runtime = require_jsx_runtime();
var seoul_biotech_campus_default = "/assets/seoul-biotech-campus-D3ksiCpk.jpg";
function Page() {
	const { article } = Route$5.useLoaderData();
	const { t, tx } = useI18n();
	const sections = tx("article.sections") ?? [];
	const related = ARTICLES.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: article.category,
			title: article.title,
			lead: article.excerpt,
			image: seoul_biotech_campus_default,
			imageAlt: "Vesco Science Research & Innovation Hub in Seoul, South Korea",
			crumb: {
				label: t("article.eyebrow"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[1.5fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/insights",
					className: "text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-science",
					children: ["← ", t("article.back")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-10",
					children: sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[1.4rem] leading-snug font-semibold text-navy",
							children: s.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
							children: s.body
						})] })
					}, s.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: korean_cleanroom_facility_default,
							alt: "cGMP cleanroom suite for exosome processing and filling in Seoul",
							loading: "lazy",
							width: 1280,
							height: 960,
							className: "aspect-[16/9] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[0.82rem] italic text-muted-foreground",
							children: "Figure 1: cGMP cleanroom environmental monitoring and aseptic filling line at Vesco Science Korea."
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: korean_bio_researchers_default,
								alt: "Korean R&D research scientists conducting bio-assay and analytical testing",
								loading: "lazy",
								width: 1280,
								height: 960,
								className: "aspect-[16/9] w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[0.82rem] italic text-muted-foreground",
								children: "Figure 2: Biological assays and particle size distribution (NTA) testing by Seoul research staff."
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-14 border-t border-hairline pt-6 text-[0.85rem] text-muted-foreground",
					children: t("article.note")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
						to: "/contact",
						children: t("article.cta")
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "card-flat sticky top-28 p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science",
					children: t("article.related")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-4",
					children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-t border-hairline pt-4 first:border-0 first:pt-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/insights/$slug",
							params: { slug: r.slug },
							className: "text-[0.95rem] leading-snug font-medium text-navy transition-colors hover:text-science",
							children: r.title
						})
					}, r.slug))
				})]
			}) })]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
