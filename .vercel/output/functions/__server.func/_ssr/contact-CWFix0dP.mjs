import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { S as useI18n, g as Route$18 } from "./router-CozBOSu6.mjs";
import { a as Section, i as Reveal, n as PageHero, o as SectionHeading } from "./primitives-DtnWq5Ev.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CWFix0dP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t, tx } = useI18n();
	const cms = Route$18.useLoaderData();
	const hero = cms?.hero ?? {};
	const info = cms?.info ?? {};
	const officeSection = cms?.officeSection ?? {};
	const consultSection = cms?.consultSection ?? {};
	const businessTypes = tx("contact.businessTypes") ?? [];
	const inquiryTypes = tx("contact.inquiryTypes") ?? [];
	const interests = tx("contact.productInterests") ?? [];
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		company: "",
		country: "",
		email: "",
		phone: "",
		businessType: "",
		inquiryType: "",
		message: ""
	});
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [fileName, setFileName] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const set = (k, v) => setForm((f) => ({
		...f,
		[k]: v
	}));
	const validate = () => {
		const e = {};
		if (!form.name.trim()) e["name"] = t("contact.errors.name");
		if (!form.company.trim()) e["company"] = t("contact.errors.company");
		if (!form.country.trim()) e["country"] = t("contact.errors.country");
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e["email"] = t("contact.errors.email");
		if (!form.businessType) e["businessType"] = t("contact.errors.businessType");
		if (!form.inquiryType) e["inquiryType"] = t("contact.errors.inquiryType");
		if (form.message.trim().length < 10) e["message"] = t("contact.errors.message");
		setErrors(e);
		return Object.keys(e).length === 0;
	};
	const onSubmit = (ev) => {
		ev.preventDefault();
		if (validate()) {
			setSubmitting(true);
			setTimeout(() => {
				setSubmitting(false);
				setDone(true);
			}, 800);
		}
	};
	const field = "w-full border border-hairline bg-card px-4 py-3 text-[0.95rem] text-navy outline-none transition-colors focus:border-teal";
	const labelCls = "text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-navy/70";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: hero.eyebrow ?? t("contact.eyebrow"),
			title: hero.title ?? t("contact.title"),
			lead: hero.intro ?? t("contact.intro"),
			image: hero.image ?? "/assets/headquarters.jpg",
			imageAlt: "Vesco Science Seoul headquarters",
			crumb: {
				label: t("nav.contact"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[1.5fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-flat p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[1.5rem] font-semibold text-navy",
						children: t("contact.success.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
						children: t("contact.success.body")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setDone(false);
							setForm({
								name: "",
								company: "",
								country: "",
								email: "",
								phone: "",
								businessType: "",
								inquiryType: "",
								message: ""
							});
							setPicked([]);
							setFileName("");
						},
						className: "mt-8 rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-[#05231f]",
						children: t("contact.success.again")
					})
				]
			}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: t("contact.eyebrow"),
						title: t("contact.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-2",
						children: [[
							"name",
							"company",
							"country",
							"email",
							"phone"
						].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: labelCls,
									children: t(`contact.fields.${k}`)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: k === "email" ? "email" : k === "phone" ? "tel" : "text",
									value: form[k],
									onChange: (e) => set(k, e.target.value),
									className: field
								}),
								errors[k] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.78rem] text-red-600",
									children: errors[k]
								})
							]
						}, k)), ["businessType", "inquiryType"].map((k, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: labelCls,
									children: t(`contact.fields.${k}`)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: form[k],
									onChange: (e) => set(k, e.target.value),
									className: field,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: t("common.select")
									}), (idx === 0 ? businessTypes : inquiryTypes).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: o,
										children: o
									}, o))]
								}),
								errors[k] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.78rem] text-red-600",
									children: errors[k]
								})
							]
						}, k))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: labelCls,
							children: t("contact.fields.productInterest")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: interests.map((i) => {
								const on = picked.includes(i);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setPicked((p) => on ? p.filter((x) => x !== i) : [...p, i]),
									className: `rounded-sm border px-4 py-2 text-[0.8rem] transition-colors ${on ? "border-teal bg-teal text-[#05231f]" : "border-hairline text-navy hover:border-teal hover:text-science"}`,
									children: i
								}, i);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-8 grid gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: labelCls,
								children: t("contact.fields.message")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 6,
								value: form.message,
								onChange: (e) => set("message", e.target.value),
								className: field
							}),
							errors["message"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.78rem] text-red-600",
								children: errors["message"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: labelCls,
								children: t("contact.fields.file")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "cursor-pointer rounded-sm border border-navy/20 px-5 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science",
									children: [t("contact.fields.chooseFile"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										className: "hidden",
										onChange: (e) => setFileName(e.target.files?.[0]?.name ?? "")
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.85rem] text-muted-foreground",
									children: fileName || t("contact.fields.noFile")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.78rem] text-muted-foreground",
								children: t("contact.fields.fileHint")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: submitting,
						className: "mt-10 rounded-sm bg-teal px-8 py-4 text-[0.8rem] font-semibold tracking-[0.14em] uppercase text-[#05231f] transition-colors hover:bg-teal/85 disabled:opacity-50",
						children: submitting ? "TRANSMITTING TO SEOUL HQ..." : t("contact.submit")
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "card-flat p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[1.1rem] font-semibold text-navy",
					children: t("contact.infoTitle")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-6 grid gap-6",
					children: [
						["Address", info.address ?? t("contact.infoAddressValue")],
						["Email", info.email ?? t("contact.infoEmailValue")],
						["Hours", info.hours ?? t("contact.infoHoursValue")]
					].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-hairline pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-[0.95rem] text-navy",
							children: value
						})]
					}, label))
				})]
			}) })]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: officeSection.image ?? "/assets/korean-contact-office.jpg",
					alt: "Seoul office",
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: officeSection.eyebrow ?? "Corporate Facility",
						title: officeSection.title ?? "Visit Our Headquarters & Business Suites in Seoul"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: consultSection.eyebrow ?? "Direct Scientific Advisory",
						title: consultSection.title ?? "Personalized Technical Consultation"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: consultSection.image ?? "/assets/korean-doctor-consultant.jpg",
					alt: "Consultation",
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				}) })]
			})
		})
	] });
}
//#endregion
export { Page as component };
