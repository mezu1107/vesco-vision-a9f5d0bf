import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route, u as updatePageData } from "./router-RzC8V2F6.mjs";
import { s as TealButton } from "./primitives-DtnWq5Ev.mjs";
import { supabase } from "./supabase-Ch_07loT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pages._slug-DlbvD9LW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PageEditor() {
	const { slug, data: initialData } = Route.useLoaderData();
	const [formData, setFormData] = (0, import_react.useState)(initialData);
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const router = useRouter();
	const handleSave = async () => {
		setIsSaving(true);
		try {
			await updatePageData({ data: {
				slug,
				content_json: formData
			} });
			alert("Page saved successfully!");
			router.invalidate();
		} catch (e) {
			alert("Error saving: " + e.message);
		}
		setIsSaving(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-4xl mx-auto py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between mb-8 pb-4 border-b border-slate-200",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-3xl font-bold text-navy capitalize",
				children: [slug, " Page Editor"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-slate-500 mt-2",
				children: "Edit content and upload images"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
				onClick: handleSave,
				disabled: isSaving,
				children: isSaving ? "Saving..." : "Save Changes"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-white p-6 shadow-sm border border-slate-200 rounded-lg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonEditor, {
				data: formData,
				onChange: setFormData
			})
		})]
	});
}
function JsonEditor({ data, onChange, path = "" }) {
	if (typeof data === "string") {
		if (path.toLowerCase().includes("image") || path.toLowerCase().includes("icon")) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-4 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: data,
				className: "w-20 h-20 object-cover rounded-md border"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: data,
					onChange: (e) => onChange(e.target.value),
					className: "w-full text-sm p-2 border rounded mb-2",
					placeholder: "Image URL"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					accept: "image/*",
					onChange: async (e) => {
						const file = e.target.files?.[0];
						if (!file) return;
						try {
							const ext = file.name.split(".").pop();
							const fileName = `${Math.random()}.${ext}`;
							const { data: uploadData, error } = await supabase.storage.from("images").upload(fileName, file);
							if (error || !uploadData) {
								alert("Supabase upload failed (Are credentials set?). Fallback not implemented for client uploads.");
								return;
							}
							const { data: pubData } = supabase.storage.from("images").getPublicUrl(fileName);
							onChange(pubData.publicUrl);
						} catch (err) {
							alert("Upload Exception: " + err);
						}
					},
					className: "text-sm"
				})]
			})]
		});
		if (data.length > 60) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			value: data,
			onChange: (e) => onChange(e.target.value),
			className: "w-full text-sm p-2 border rounded-md min-h-[100px]"
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "text",
			value: data,
			onChange: (e) => onChange(e.target.value),
			className: "w-full text-sm p-2 border rounded-md"
		});
	}
	if (Array.isArray(data)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4 pl-4 border-l-2 border-slate-100",
		children: data.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-slate-50 p-4 rounded-md relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-2 left-2 text-xs font-bold text-slate-300",
				children: ["#", index + 1]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pl-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonEditor, {
					data: item,
					onChange: (val) => {
						const newData = [...data];
						newData[index] = val;
						onChange(newData);
					},
					path: `${path}[${index}]`
				})
			})]
		}, index))
	});
	if (typeof data === "object" && data !== null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6 pl-2",
		children: Object.keys(data).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "block text-sm font-semibold text-slate-700 mb-2 capitalize",
			children: key.replace(/([A-Z])/g, " $1")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonEditor, {
			data: data[key],
			onChange: (val) => {
				onChange({
					...data,
					[key]: val
				});
			},
			path: `${path}.${key}`
		})] }, key))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Unsupported type" });
}
//#endregion
export { PageEditor as component };
