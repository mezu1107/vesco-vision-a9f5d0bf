import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as useI18n, i as Route$2 } from "./router-CozBOSu6.mjs";
import { a as Section, i as Reveal, n as PageHero, o as SectionHeading, r as ProcessFlow, t as NumberedCard } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/technology.index-CE06--7g.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t } = useI18n();
	const cms = Route$2.useLoaderData();
	const hero = cms?.hero ?? {};
	const cards = cms?.cards ?? [];
	const exosome = cms?.exosome ?? {};
	const steps = exosome.steps ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: hero.eyebrow ?? t("technology.eyebrow"),
			title: hero.title ?? t("technology.title"),
			lead: hero.lead ?? t("pages.technologyIndex.lead"),
			image: hero.image ?? "/assets/molecular.jpg",
			imageAlt: "Molecular nanovesicle structure",
			crumb: {
				label: t("nav.technology"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: t("technology.eyebrow"),
			title: t("technology.title"),
			intro: t("technology.intro")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: cards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberedCard, {
					num: c.num,
					title: c.title,
					body: c.body,
					to: "/technology/$slug",
					params: { slug: c.slug }
				})
			}, c.slug || i))
		})] }),
		steps.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				invert: true,
				eyebrow: exosome.eyebrow ?? t("exosome.eyebrow"),
				title: exosome.processTitle ?? t("exosome.processTitle"),
				intro: exosome.body2 ?? t("exosome.body2")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessFlow, {
					steps,
					invert: true
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
