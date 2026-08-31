import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as useI18n } from "./router-RzC8V2F6.mjs";
import { a as Section, i as Reveal, n as PageHero, o as SectionHeading } from "./primitives-DtnWq5Ev.mjs";
import { t as CTABand } from "./CTABand-dxSsQYdq.mjs";
import { t as korean_bio_researchers_default } from "./korean-bio-researchers-Dx5OjY4S.mjs";
import { t as korean_faq_support_center_default } from "./korean-faq-support-center-BvWbO8l4.mjs";
import { t as documents_default } from "./documents-kKQdw5IX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-kJ75cClk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t, tx } = useI18n();
	const docs = tx("resources.docs") ?? [];
	const [modal, setModal] = (0, import_react.useState)(null);
	const [sent, setSent] = (0, import_react.useState)(false);
	const close = () => {
		setModal(null);
		setSent(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("resources.eyebrow"),
			title: t("resources.title"),
			lead: t("resources.intro"),
			image: documents_default,
			imageAlt: "Vesco Science Korean regulatory export documents and certificate packages",
			crumb: {
				label: t("nav.resources"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: t("resources.eyebrow"),
			title: t("resources.title")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-px bg-hairline sm:grid-cols-2",
			children: docs.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col bg-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `inline-flex w-fit rounded-sm px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] uppercase ${d.restricted ? "bg-navy/10 text-navy" : "bg-teal/15 text-science"}`,
							children: d.restricted ? t("resources.restricted") : t("resources.open")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-[1.15rem] font-semibold text-navy",
							children: d.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.85rem] text-muted-foreground",
							children: d.meta
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								if (d.restricted) setModal(d.title);
								else {
									const content = `%PDF-1.4\n1 0 obj\n<< /Title (${d.title}) /Author (Vesco Science Korea) >>\nendobj\ntrailer\n<< /Root 1 0 R >>\n%%EOF`;
									const blob = new Blob([content], { type: "application/pdf" });
									const url = URL.createObjectURL(blob);
									const a = document.createElement("a");
									a.href = url;
									a.download = `${d.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}-vesco-science-korea.pdf`;
									document.body.appendChild(a);
									a.click();
									document.body.removeChild(a);
									URL.revokeObjectURL(url);
								}
							},
							className: "mt-8 inline-flex w-fit items-center gap-3 rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science",
							children: d.restricted ? t("common.requestAccess") : t("common.download")
						})
					]
				})
			}, d.title))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: korean_faq_support_center_default,
						alt: "Korean technical customer service desk assisting global partners with documentation requests",
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Dossier Support"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.9rem] text-navy",
							children: "Dedicated Korean Regulatory Specialists"
						})]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Global Access",
							title: "Instant Verification & Technical Dossier Support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
							children: "Our Seoul technical support desk processes requests for confidential master files, product dossiers (DMF), stability study reports, and safety data sheets (SDS) within 24 business hours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
							children: "Registered distribution partners receive direct access to our secure client portal for instant batch-specific COA verification."
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
							eyebrow: "Validated COA",
							title: "Verified Analytical Certificates from Seoul QC Laboratory"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
							children: [
								"Every certificate of analysis (COA) is digitally signed by our Quality Assurance Director in Seoul. It verifies particle count per vial, endotoxin limits (",
								"< 0.05 EU/mL",
								"), and HPLC purity percentages."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
							children: "These documents ensure seamless customs release and health authority compliance in over 45 export destinations worldwide."
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: korean_bio_researchers_default,
						alt: "Korean biological QC scientists issuing signed certificate of analysis reports",
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Quality Certificate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.9rem] text-navy",
							children: "Digitally Signed Analytical COA"
						})]
					})]
				}) })]
			})
		}),
		modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/70 p-6 backdrop-blur-sm",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": t("resources.modal.title"),
			onClick: close,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full max-w-md border border-hairline bg-card p-8 shadow-2xl",
				onClick: (e) => e.stopPropagation(),
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[1.2rem] font-semibold text-navy",
					children: t("resources.modal.success")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: close,
					className: "mt-8 rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-[#05231f]",
					children: t("resources.modal.cancel")
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science",
							children: modal
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-[1.25rem] font-semibold text-navy",
							children: t("resources.modal.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[0.9rem] leading-relaxed text-muted-foreground",
							children: t("resources.modal.body")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-4",
							children: [
								{
									k: "name",
									type: "text"
								},
								{
									k: "company",
									type: "text"
								},
								{
									k: "email",
									type: "email"
								}
							].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-navy/70",
									children: t(`resources.modal.${f.k}`)
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
								children: t("resources.modal.send")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: close,
								className: "rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-navy",
								children: t("resources.modal.cancel")
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
