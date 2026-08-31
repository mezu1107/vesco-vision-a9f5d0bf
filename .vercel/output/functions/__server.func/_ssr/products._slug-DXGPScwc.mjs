import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as useI18n, a as Route$3 } from "./router-CozBOSu6.mjs";
import { a as Section, i as Reveal, n as PageHero, o as SectionHeading } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
import { n as korean_bio_researchers_default, t as korean_cleanroom_facility_default } from "./korean-cleanroom-facility-DO9vYScX.mjs";
import { t as vials_default } from "./vials-CPfIHwza.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-DXGPScwc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { slug } = Route$3.useParams();
	const { t, tx } = useI18n();
	const category = (tx("products.categories") ?? []).find((c) => c.items.some((i) => i.slug === slug));
	const name = (category?.items.find((i) => i.slug === slug))?.name ?? slug.replace(/-/g, " ");
	const [activeModal, setActiveModal] = (0, import_react.useState)(null);
	const [modalSent, setModalSent] = (0, import_react.useState)(false);
	const closeModal = () => {
		setActiveModal(null);
		setModalSent(false);
	};
	const s = (k) => t(`products.detail.sections.${k}`);
	const rows = [
		{
			label: s("overview"),
			value: t("products.detail.genericOverview")
		},
		{
			label: s("source"),
			value: t("products.detail.genericSource")
		},
		{
			label: s("composition"),
			value: t("products.detail.genericComposition")
		},
		{
			label: s("process"),
			value: t("products.detail.genericProcess")
		},
		{
			label: s("specs"),
			value: t("products.detail.genericSpecs")
		},
		{
			label: s("qualityParams"),
			value: t("products.detail.genericQuality")
		},
		{
			label: s("storage"),
			value: t("products.detail.genericStorage")
		},
		{
			label: s("packaging"),
			value: t("products.detail.genericPackaging")
		},
		{
			label: s("application"),
			value: t("products.detail.genericApplication")
		},
		{
			label: s("formats"),
			value: t("products.detail.genericFormats")
		},
		{
			label: s("documentation"),
			value: t("products.detail.genericDocs")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: category?.title ?? t("products.eyebrow"),
			title: name,
			lead: t("products.detail.genericOverview"),
			image: vials_default,
			imageAlt: `Vesco Science Korea - ${name} biological formulation`,
			crumb: {
				label: name,
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[1.4fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("products.eyebrow"),
					title: s("overview")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-10 grid gap-px bg-hairline",
					children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 bg-card p-6 sm:grid-cols-[200px_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science",
							children: r.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-[0.95rem] leading-relaxed text-muted-foreground",
							children: r.value
						})]
					}, r.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: korean_cleanroom_facility_default,
							alt: `Aseptic filling line and sterile batch production for ${name}`,
							loading: "lazy",
							width: 1280,
							height: 960,
							className: "aspect-[16/9] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-[0.82rem] italic text-muted-foreground",
							children: [
								"Aseptic cGMP lyophilization & cleanroom filling suite for ",
								name,
								" in Seoul."
							]
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
								alt: `Analytical HPLC & particle purity assay testing for ${name}`,
								loading: "lazy",
								width: 1280,
								height: 960,
								className: "aspect-[16/9] w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-[0.82rem] italic text-muted-foreground",
								children: [
									"HPLC chromatography and biological stability assay verification for ",
									name,
									"."
								]
							})]
						})
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "card-flat sticky top-28 p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[1.05rem] font-semibold text-navy",
						children: s("documentation")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3",
						children: [
							"coa",
							"tds",
							"info",
							"sample"
						].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveModal(t(`products.detail.buttons.${b}`)),
							className: "flex w-full items-center justify-between border border-hairline px-5 py-3.5 text-[0.82rem] font-medium text-navy transition-colors hover:border-teal hover:text-science text-left",
							children: [t(`products.detail.buttons.${b}`), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-5 bg-teal" })]
						}, b))
					}),
					category ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mt-9 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science",
						children: category.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-2",
						children: category.items.filter((i) => i.slug !== slug).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products/$slug",
							params: { slug: i.slug },
							className: "text-[0.9rem] text-muted-foreground transition-colors hover:text-science",
							children: i.name
						}) }, i.slug))
					})] }) : null
				]
			}) })]
		}) }),
		activeModal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/70 p-6 backdrop-blur-sm",
			role: "dialog",
			"aria-modal": "true",
			onClick: closeModal,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full max-w-md border border-hairline bg-card p-8 shadow-2xl",
				onClick: (e) => e.stopPropagation(),
				children: modalSent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-[1.2rem] font-semibold text-navy",
						children: ["Request Received for ", name]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-[0.9rem] leading-relaxed text-muted-foreground",
						children: [
							"Thank you. Our Seoul QA & Technical Regulatory team will verify your request and send the requested package (",
							activeModal,
							") within 24 business hours."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: closeModal,
						className: "mt-8 rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-[#05231f]",
						children: "Close Window"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setModalSent(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science",
							children: [
								name,
								" — ",
								activeModal
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-[1.25rem] font-semibold text-navy",
							children: "Request Official Technical Package"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[0.9rem] leading-relaxed text-muted-foreground",
							children: "Please provide your corporate details to receive validated Certificates of Analysis, Technical Data Sheets, or Evaluation Samples."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-4",
							children: [
								{
									k: "Full Name",
									type: "text"
								},
								{
									k: "Company / Organization",
									type: "text"
								},
								{
									k: "Corporate Email",
									type: "email"
								},
								{
									k: "Destination Country",
									type: "text"
								}
							].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-navy/70",
									children: f.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: f.type,
									className: "border border-hairline bg-background px-4 py-3 text-[0.95rem] text-navy outline-none focus:border-teal"
								})]
							}, f.k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-[#05231f]",
								children: "Submit Request"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: closeModal,
								className: "rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-navy",
								children: "Cancel"
							})]
						})
					]
				})
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
