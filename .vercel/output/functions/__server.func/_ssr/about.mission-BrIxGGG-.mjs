import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as useI18n, c as Route$8 } from "./router-CozBOSu6.mjs";
import { a as Section, i as Reveal, n as PageHero, o as SectionHeading } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about.mission-BrIxGGG-.js
var import_jsx_runtime = require_jsx_runtime();
var COPY = {
	en: {
		eyebrow: "About / Mission",
		title: "Science with a Defined Purpose",
		lead: "Our mission is to make advanced Korean regenerative biotechnology reproducible, documented and available to healthcare and aesthetic partners worldwide.",
		missionTitle: "Mission",
		missionBody: "To develop and manufacture regenerative biotechnology — exosome, PDRN/PN, peptide and lyophilized formulations — under controlled, documented processes that partners can rely on batch after batch.",
		visionTitle: "Vision",
		visionBody: "To be recognized as Korea's premier biotechnology and advanced regenerative manufacturing partner: the scientific and industrial infrastructure behind next-generation global aesthetic products.",
		valuesEyebrow: "Operating Principles",
		valuesTitle: "How We Work",
		values: [
			{
				title: "Science First",
				body: "Every formulation decision is traced back to characterization data, not marketing language."
			},
			{
				title: "Documented Process",
				body: "Development, production and release steps are specified, executed and recorded under MFDS cGMP standards."
			},
			{
				title: "Reproducibility",
				body: "Batch-to-batch consistency is treated as a manufacturing requirement, not an outcome."
			},
			{
				title: "Partner Confidentiality",
				body: "OEM/ODM programs, formulations and specifications remain the exclusive property of the client."
			},
			{
				title: "Regulatory Readiness",
				body: "Documentation is prepared with global export and destination-market requirements in mind."
			},
			{
				title: "Verified Claims",
				body: "We publish what can be supported. Unverified data is withheld until analytically confirmed."
			}
		]
	},
	ko: {
		eyebrow: "회사소개 / 미션",
		title: "명확한 목적을 가진 한국 바이오 과학",
		lead: "당사의 미션은 대한민국 첨단 재생 바이오테크놀로지를 재현 가능하고 문서화된 형태로 전 세계 헬스케어·에스테틱 파트너에게 제공하는 것입니다.",
		missionTitle: "미션",
		missionBody: "엑소좀, PDRN/PN, 펩타이드 및 동결건조 제형을 대한민국 MFDS cGMP 기준의 엄격한 공정 하에서 개발·제조하여, 파트너가 신뢰할 수 있는 배치 품질을 보장합니다.",
		visionTitle: "비전",
		visionBody: "차세대 글로벌 재생 에스테틱 제품의 과학적·산업적 인프라로서, 대한민국을 대표하는 첨단 바이오 파트너로 도약하는 것입니다.",
		valuesEyebrow: "운영 원칙",
		valuesTitle: "일하는 방식",
		values: [
			{
				title: "과학 우선",
				body: "모든 제형 결정은 마케팅 문구가 아닌 엄격한 분석 데이터에 근거합니다."
			},
			{
				title: "문서화된 공정",
				body: "개발·생산·출하 단계를 cGMP 규격으로 규정하고 실행하며 기록합니다."
			},
			{
				title: "재현성",
				body: "배치 간 일관성은 결과가 아니라 필수 제조 요건으로 관리합니다."
			},
			{
				title: "파트너 기밀 유지",
				body: "OEM/ODM 프로그램, 제형, 규격은 고객사의 소중한 자산입니다."
			},
			{
				title: "규제 대응",
				body: "수출 및 글로벌 목적 시장 요건을 완벽하게 맞추어 문서를 준비합니다."
			},
			{
				title: "검증된 표현",
				body: "분석 검증이 완료된 사실만 공개하며, 미검증 데이터는 게시하지 않습니다."
			}
		]
	}
};
function Page() {
	const { locale, t } = useI18n();
	const cms = Route$8.useLoaderData();
	const fallback = COPY[locale] ?? COPY.en;
	const c = {
		eyebrow: cms?.hero?.eyebrow ?? fallback.eyebrow,
		title: cms?.hero?.title ?? fallback.title,
		lead: cms?.hero?.lead ?? fallback.lead,
		missionTitle: cms?.missionTitle ?? fallback.missionTitle,
		missionBody: cms?.missionBody ?? fallback.missionBody,
		visionTitle: cms?.visionTitle ?? fallback.visionTitle,
		visionBody: cms?.visionBody ?? fallback.visionBody,
		valuesEyebrow: fallback.valuesEyebrow,
		valuesTitle: fallback.valuesTitle,
		values: Array.isArray(cms?.values) && cms.values.length > 0 ? cms.values : [...fallback.values]
	};
	const heroImage = cms?.hero?.image ?? "/assets/research-team-BMV1NwAO.jpg";
	const researchSection = cms?.researchSection ?? {};
	cms?.seoulSection;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: c.eyebrow,
			title: c.title,
			lead: c.lead,
			image: heroImage,
			imageAlt: "Vesco Science Korean research team working in the laboratory",
			crumb: {
				label: c.eyebrow,
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-px bg-hairline lg:grid-cols-2",
			children: [{
				title: c.missionTitle,
				body: c.missionBody
			}, {
				title: c.visionTitle,
				body: c.visionBody
			}].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full bg-card p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-[1.6rem] font-semibold text-navy",
						children: b.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-[1rem] leading-relaxed text-muted-foreground",
						children: b.body
					})]
				})
			}, b.title))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: researchSection.image ?? "/assets/korean-bio-researchers-BF6ehCrh.jpg",
						alt: "Korean biotechnology researchers",
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "R&D Scientific Precision"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.9rem] text-navy",
							children: "Cellular Characterization & Nanovesicle Lab"
						})]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: researchSection.eyebrow ?? "Scientific Rigor",
							title: researchSection.title ?? "Pioneering Korean Cellular & Exosome Research"
						}),
						researchSection.body1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
							children: researchSection.body1
						}),
						researchSection.body2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
							children: researchSection.body2
						})
					] })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
