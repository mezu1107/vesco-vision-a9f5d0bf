import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as GripVertical, B as CircleAlert, C as List, D as Info, E as Layers, F as Eye, G as Award, H as ChevronRight, L as Cpu, M as FolderOpen, N as FlaskConical, O as Image, P as FileText, R as CircleQuestionMark, S as LoaderCircle, U as ChevronDown, V as ChevronUp, W as Building2, _ as Package, a as Type, c as Sparkles, d as Settings2, f as Save, h as Phone, i as Upload, j as Globe, l as ShieldCheck, m as Plus, n as X, o as Trash2, p as RotateCcw, r as Users, s as Star, t as Zap, v as Newspaper, w as Link2, z as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as Route, x as updatePageData } from "./router-CozBOSu6.mjs";
import { t as supabase } from "./supabase-jPVMMvTR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pages._slug-D0Nl2HdS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ImageUpload({ value, onChange, label = "Image" }) {
	const [tab, setTab] = (0, import_react.useState)("upload");
	const [urlInput, setUrlInput] = (0, import_react.useState)(value.startsWith("http") ? value : "");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const fileRef = (0, import_react.useRef)(null);
	const handleFile = async (file) => {
		setUploading(true);
		setError("");
		try {
			const ext = file.name.split(".").pop();
			const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
			const { data, error: upErr } = await supabase.storage.from("images").upload(fileName, file, { upsert: true });
			if (data && !upErr) {
				const { data: pub } = supabase.storage.from("images").getPublicUrl(fileName);
				onChange(pub.publicUrl);
			} else onChange(URL.createObjectURL(file));
		} catch {
			onChange(URL.createObjectURL(file));
		}
		setUploading(false);
	};
	const handleDrop = (e) => {
		e.preventDefault();
		const file = e.dataTransfer.files[0];
		if (file && file.type.startsWith("image/")) handleFile(file);
	};
	const handleUrlApply = () => {
		if (urlInput.trim()) {
			onChange(urlInput.trim());
			setError("");
		} else setError("Please enter a valid URL");
	};
	const isPreviewable = value && (value.startsWith("http") || value.startsWith("blob:") || value.startsWith("/") || value.startsWith("data:"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
				children: label
			}),
			isPreviewable && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative group rounded-lg overflow-hidden border border-slate-200 bg-slate-50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: value,
					alt: "preview",
					className: "w-full h-40 object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onChange(""),
					className: "absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-3.5 h-3.5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex border border-slate-200 rounded-lg overflow-hidden text-xs font-semibold",
				children: ["upload", "url"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setTab(t),
					className: `flex-1 py-2 flex items-center justify-center gap-1.5 transition ${tab === t ? "bg-slate-800 text-white" : "bg-white text-slate-500 hover:bg-slate-50"}`,
					children: [t === "upload" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-3 h-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "w-3 h-3" }), t === "upload" ? "Upload File" : "Paste URL"]
				}, t))
			}),
			tab === "upload" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onDrop: handleDrop,
				onDragOver: (e) => e.preventDefault(),
				onClick: () => fileRef.current?.click(),
				className: "border-2 border-dashed border-slate-200 rounded-lg p-6 text-center cursor-pointer hover:border-teal hover:bg-teal/5 transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: fileRef,
					type: "file",
					accept: "image/*",
					className: "hidden",
					onChange: (e) => {
						const f = e.target.files?.[0];
						if (f) handleFile(f);
					}
				}), uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2 text-slate-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-5 h-5 border-2 border-teal border-t-transparent rounded-full animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs",
						children: "Uploading…"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2 text-slate-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "w-6 h-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs",
							children: ["Drop image here or ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-teal font-semibold",
								children: "browse"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-slate-300",
							children: "PNG, JPG, WEBP, GIF"
						})
					]
				})]
			}),
			tab === "url" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "url",
					value: urlInput,
					onChange: (e) => setUrlInput(e.target.value),
					onKeyDown: (e) => e.key === "Enter" && handleUrlApply(),
					placeholder: "https://example.com/image.jpg",
					className: "flex-1 text-xs border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleUrlApply,
					className: "bg-teal text-[#05231f] text-xs font-bold px-4 py-2 rounded-lg hover:bg-teal/85 transition",
					children: "Apply"
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-red-500 text-xs",
				children: error
			})
		]
	});
}
/**
* Visual section editors — one component per page section type.
* Each editor receives `data` (the section's current value) and `onChange`
* (a setter that receives the updated section object).
*/
function Field$1({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "block text-[11px] font-semibold uppercase tracking-wider text-slate-400",
			children: label
		}), children]
	});
}
function TextInput({ value, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "text",
		value,
		onChange: (e) => onChange(e.target.value),
		placeholder,
		className: "w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 bg-white"
	});
}
function TextArea({ value, onChange, placeholder, rows = 4 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		value,
		onChange: (e) => onChange(e.target.value),
		placeholder,
		rows,
		className: "w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 resize-y bg-white"
	});
}
function CollapsibleCard({ title, badge, children, onRemove, defaultOpen = false }) {
	const [open, setOpen] = (0, import_react.useState)(defaultOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-slate-200 rounded-xl overflow-hidden bg-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 px-4 py-3 bg-slate-50 cursor-pointer select-none",
			onClick: () => setOpen(!open),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "w-4 h-4 text-slate-300" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 text-sm font-semibold text-slate-700",
					children: title
				}),
				badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] bg-teal/10 text-teal font-bold px-2 py-0.5 rounded-full",
					children: badge
				}),
				onRemove && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						onRemove();
					},
					className: "text-slate-300 hover:text-red-400 transition p-1 rounded",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
				}),
				open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "w-4 h-4 text-slate-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-4 h-4 text-slate-400" })
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-4 space-y-4 border-t border-slate-100",
			children
		})]
	});
}
function AddItemButton({ label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: "w-full flex items-center justify-center gap-2 border-2 border-dashed border-slate-200 text-slate-400 text-sm py-3 rounded-xl hover:border-teal hover:text-teal transition",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }),
			" ",
			label
		]
	});
}
function HeroEditor({ data, onChange }) {
	const set = (key, val) => onChange({
		...data,
		[key]: val
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Main Heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.heading || "",
					onChange: (v) => set("heading", v),
					rows: 2,
					placeholder: "Advancing Regenerative Biotechnology"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Sub-heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.subheading || "",
					onChange: (v) => set("subheading", v),
					placeholder: "From scientific discovery to scalable manufacturing."
				})
			}),
			data.body !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Body Text",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.body || "",
					onChange: (v) => set("body", v),
					rows: 3
				})
			}),
			data.copy !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Body Copy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.copy || "",
					onChange: (v) => set("copy", v),
					rows: 4
				})
			}),
			data.buttonText !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Button Label",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.buttonText || "",
					onChange: (v) => set("buttonText", v)
				})
			}),
			Array.isArray(data.buttons) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Buttons",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: data.buttons.map((btn, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: btn,
						onChange: (v) => {
							const arr = [...data.buttons];
							arr[i] = v;
							onChange({
								...data,
								buttons: arr
							});
						},
						placeholder: `Button ${i + 1}`
					}, i))
				})
			}),
			data.image !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUpload, {
				value: data.image || "",
				onChange: (v) => set("image", v),
				label: "Background Image"
			})
		]
	});
}
function TrustBarEditor({ data, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-slate-400 font-medium",
				children: "Capability tags shown below the hero. Drag to reorder."
			}),
			data.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "w-4 h-4 text-slate-300 shrink-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: item,
						onChange: (v) => {
							const arr = [...data];
							arr[i] = v;
							onChange(arr);
						},
						placeholder: `Tag ${i + 1}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onChange(data.filter((_, idx) => idx !== i)),
						className: "text-slate-300 hover:text-red-400 transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
					})
				]
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddItemButton, {
				label: "Add Tag",
				onClick: () => onChange([...data, "New Tag"])
			})
		]
	});
}
function AboutEditor({ data, onChange }) {
	const set = (k, v) => onChange({
		...data,
		[k]: v
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			data.smallHeading !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Small Heading (eyebrow)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.smallHeading || "",
					onChange: (v) => set("smallHeading", v)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Main Heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.mainHeading || data.heading || "",
					onChange: (v) => set(data.mainHeading !== void 0 ? "mainHeading" : "heading", v),
					rows: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Copy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.copy || "",
					onChange: (v) => set("copy", v),
					rows: 4
				})
			}),
			data.subheading !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Sub-heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.subheading || "",
					onChange: (v) => set("subheading", v)
				})
			}),
			data.buttonText !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Button Label",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.buttonText || "",
					onChange: (v) => set("buttonText", v)
				})
			}),
			data.image !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUpload, {
				value: data.image || "",
				onChange: (v) => set("image", v),
				label: "Section Image"
			})
		]
	});
}
function CapabilitiesEditor({ data, onChange }) {
	const update = (i, key, val) => {
		const arr = [...data];
		arr[i] = {
			...arr[i],
			[key]: val
		};
		onChange(arr);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [data.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleCard, {
			title: item.title || `Capability ${i + 1}`,
			onRemove: () => onChange(data.filter((_, idx) => idx !== i)),
			defaultOpen: i === 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: item.title,
					onChange: (v) => update(i, "title", v)
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Description",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: item.desc,
					onChange: (v) => update(i, "desc", v),
					rows: 2
				})
			})]
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddItemButton, {
			label: "Add Capability",
			onClick: () => onChange([...data, {
				title: "New Capability",
				desc: ""
			}])
		})]
	});
}
function CardsEditor({ data, onChange }) {
	const update = (i, key, val) => {
		const arr = [...data];
		arr[i] = {
			...arr[i],
			[key]: val
		};
		onChange(arr);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [data.map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleCard, {
			title: card.title || `Card ${i + 1}`,
			badge: card.num,
			onRemove: () => onChange(data.filter((_, idx) => idx !== i)),
			defaultOpen: i === 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
					label: "Number",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: card.num,
						onChange: (v) => update(i, "num", v),
						placeholder: "01"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: card.title,
						onChange: (v) => update(i, "title", v)
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Body",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: card.body,
					onChange: (v) => update(i, "body", v),
					rows: 2
				})
			})]
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddItemButton, {
			label: "Add Card",
			onClick: () => onChange([...data, {
				num: `0${data.length + 1}`,
				title: "New Card",
				body: ""
			}])
		})]
	});
}
function CoreTechEditor({ data, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Section Heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.heading || "",
					onChange: (v) => onChange({
						...data,
						heading: v
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Button Label",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.buttonText || "",
					onChange: (v) => onChange({
						...data,
						buttonText: v
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3",
				children: "Technology Cards"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardsEditor, {
				data: data.cards || [],
				onChange: (cards) => onChange({
					...data,
					cards
				})
			})] })
		]
	});
}
function StepsListEditor({ data, onChange, label = "Steps" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold uppercase tracking-wider text-slate-400",
				children: label
			}),
			data.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-bold text-teal w-5 shrink-0",
						children: String(i + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: step,
						onChange: (v) => {
							const arr = [...data];
							arr[i] = v;
							onChange(arr);
						},
						placeholder: `Step ${i + 1}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onChange(data.filter((_, idx) => idx !== i)),
						className: "text-slate-300 hover:text-red-400 transition shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
					})
				]
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddItemButton, {
				label: `Add ${label.replace(/s$/, "")}`,
				onClick: () => onChange([...data, ""])
			})
		]
	});
}
function ExosomeSectionEditor({ data, onChange }) {
	const set = (k, v) => onChange({
		...data,
		[k]: v
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Section Label (eyebrow)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.leftHeading || "",
					onChange: (v) => set("leftHeading", v)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.leftSubheading || "",
					onChange: (v) => set("leftSubheading", v),
					rows: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUpload, {
				value: data.image || "",
				onChange: (v) => set("image", v),
				label: "Background Image"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepsListEditor, {
				data: data.process || [],
				onChange: (v) => set("process", v),
				label: "Process Steps"
			})
		]
	});
}
function ManufacturingEditor({ data, onChange }) {
	const set = (k, v) => onChange({
		...data,
		[k]: v
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			data.heading !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.heading || "",
					onChange: (v) => set("heading", v)
				})
			}),
			data.subheading !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Sub-heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.subheading || "",
					onChange: (v) => set("subheading", v)
				})
			}),
			data.copy !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Copy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.copy || "",
					onChange: (v) => set("copy", v),
					rows: 3
				})
			}),
			data.footer !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Footer note",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.footer || "",
					onChange: (v) => set("footer", v)
				})
			}),
			data.buttonText !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Button Label",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.buttonText || "",
					onChange: (v) => set("buttonText", v)
				})
			}),
			data.image !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUpload, {
				value: data.image || "",
				onChange: (v) => set("image", v),
				label: "Section Image"
			}),
			Array.isArray(data.steps) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepsListEditor, {
				data: data.steps,
				onChange: (v) => set("steps", v),
				label: "Manufacturing Steps"
			}),
			Array.isArray(data.flow) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepsListEditor, {
				data: data.flow,
				onChange: (v) => set("flow", v),
				label: "Process Flow"
			})
		]
	});
}
function QualityEditor({ data, onChange }) {
	const set = (k, v) => onChange({
		...data,
		[k]: v
	});
	const isObjectPoints = data.points?.length > 0 && typeof data.points[0] === "object";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.heading || "",
					onChange: (v) => set("heading", v)
				})
			}),
			data.subheading !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Sub-heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.subheading || "",
					onChange: (v) => set("subheading", v)
				})
			}),
			data.copy !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Copy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.copy || "",
					onChange: (v) => set("copy", v),
					rows: 3
				})
			}),
			data.buttonText !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Button Label",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.buttonText || "",
					onChange: (v) => set("buttonText", v)
				})
			}),
			data.image !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUpload, {
				value: data.image || "",
				onChange: (v) => set("image", v),
				label: "Section Image"
			}),
			isObjectPoints ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-wider text-slate-400",
						children: "Quality Points"
					}),
					data.points.map((pt, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleCard, {
						title: pt.title || `Point ${i + 1}`,
						badge: pt.num,
						onRemove: () => set("points", data.points.filter((_, idx) => idx !== i)),
						defaultOpen: i === 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
								label: "Number",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: pt.num,
									onChange: (v) => {
										const arr = [...data.points];
										arr[i] = {
											...arr[i],
											num: v
										};
										set("points", arr);
									}
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
								label: "Title",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: pt.title,
									onChange: (v) => {
										const arr = [...data.points];
										arr[i] = {
											...arr[i],
											title: v
										};
										set("points", arr);
									}
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
							label: "Description",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
								value: pt.desc,
								onChange: (v) => {
									const arr = [...data.points];
									arr[i] = {
										...arr[i],
										desc: v
									};
									set("points", arr);
								},
								rows: 2
							})
						})]
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddItemButton, {
						label: "Add Point",
						onClick: () => set("points", [...data.points, {
							num: `0${data.points.length + 1}`,
							title: "New Point",
							desc: ""
						}])
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepsListEditor, {
				data: data.points || [],
				onChange: (v) => set("points", v),
				label: "Quality Points"
			})
		]
	});
}
function PartnershipEditor({ data, onChange }) {
	const set = (k, v) => onChange({
		...data,
		[k]: v
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Section Heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.heading || "",
					onChange: (v) => set("heading", v)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Sub-heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.subheading || "",
					onChange: (v) => set("subheading", v)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.title || "",
					onChange: (v) => set("title", v)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Copy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.copy || "",
					onChange: (v) => set("copy", v),
					rows: 3
				})
			}),
			data.diagram && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Left Partner (Vesco)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.diagram.left || "",
					onChange: (v) => set("diagram", {
						...data.diagram,
						left: v
					}),
					rows: 2
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Right Partner (EverCeutical)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.diagram.right || "",
					onChange: (v) => set("diagram", {
						...data.diagram,
						right: v
					}),
					rows: 2
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Product Platforms",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.platforms || "",
					onChange: (v) => set("platforms", v),
					rows: 2
				})
			})
		]
	});
}
function VisionMissionEditor({ data, onChange }) {
	const setV = (k, v) => onChange({
		...data,
		vision: {
			...data.vision,
			[k]: v
		}
	});
	const setM = (k, v) => onChange({
		...data,
		mission: {
			...data.mission,
			[k]: v
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 gap-6 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-200",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold text-teal uppercase tracking-wider",
					children: "Vision"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
					label: "Heading",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: data.vision?.heading || "",
						onChange: (v) => setV("heading", v)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
						value: data.vision?.title || "",
						onChange: (v) => setV("title", v),
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
					label: "Copy",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
						value: data.vision?.copy || "",
						onChange: (v) => setV("copy", v),
						rows: 4
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-200",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold text-teal uppercase tracking-wider",
					children: "Mission"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
					label: "Heading",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: data.mission?.heading || "",
						onChange: (v) => setM("heading", v)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
						value: data.mission?.title || "",
						onChange: (v) => setM("title", v),
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
					label: "Copy",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
						value: data.mission?.copy || "",
						onChange: (v) => setM("copy", v),
						rows: 4
					})
				})
			]
		})]
	});
}
function FinalCtaEditor({ data, onChange }) {
	const set = (k, v) => onChange({
		...data,
		[k]: v
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			data.heading !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Section Label",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.heading || "",
					onChange: (v) => set("heading", v)
				})
			}),
			data.title !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Main Title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.title || "",
					onChange: (v) => set("title", v),
					rows: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Copy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.copy || "",
					onChange: (v) => set("copy", v),
					rows: 3
				})
			}),
			Array.isArray(data.buttons) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Buttons",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: data.buttons.map((btn, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: btn,
						onChange: (v) => {
							const arr = [...data.buttons];
							arr[i] = v;
							set("buttons", arr);
						},
						placeholder: `Button ${i + 1}`
					}, i))
				})
			}),
			data.buttonText !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Button Label",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.buttonText || "",
					onChange: (v) => set("buttonText", v)
				})
			})
		]
	});
}
function ScientificApproachEditor({ data, onChange }) {
	const set = (k, v) => onChange({
		...data,
		[k]: v
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.heading || "",
					onChange: (v) => set("heading", v)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Sub-heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: data.subheading || "",
					onChange: (v) => set("subheading", v)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
				label: "Copy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: data.copy || "",
					onChange: (v) => set("copy", v),
					rows: 4
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUpload, {
				value: data.image || "",
				onChange: (v) => set("image", v),
				label: "Section Image"
			})
		]
	});
}
/**
* Universal section editors for every page type beyond home/about.
* Each editor receives `data` (current section value) and `onChange`.
*/
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "block text-[11px] font-semibold uppercase tracking-wider text-slate-400",
			children: label
		}), children]
	});
}
function TI({ value, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "text",
		value: value ?? "",
		onChange: (e) => onChange(e.target.value),
		placeholder,
		className: "w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 bg-white"
	});
}
function TA({ value, onChange, placeholder, rows = 3 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		value: value ?? "",
		onChange: (e) => onChange(e.target.value),
		placeholder,
		rows,
		className: "w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 resize-y bg-white"
	});
}
function Card({ title, badge, children, onRemove, defaultOpen = false }) {
	const [open, setOpen] = (0, import_react.useState)(defaultOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-slate-200 rounded-xl overflow-hidden bg-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 px-4 py-3 bg-slate-50 cursor-pointer select-none",
			onClick: () => setOpen(!open),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "w-4 h-4 text-slate-300" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 text-sm font-semibold text-slate-700",
					children: title
				}),
				badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] bg-teal/10 text-teal font-bold px-2 py-0.5 rounded-full",
					children: badge
				}),
				onRemove && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						onRemove();
					},
					className: "text-slate-300 hover:text-red-400 transition p-1 rounded",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
				}),
				open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "w-4 h-4 text-slate-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-4 h-4 text-slate-400" })
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-4 space-y-4 border-t border-slate-100",
			children
		})]
	});
}
function AddBtn({ label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: "w-full flex items-center justify-center gap-2 border-2 border-dashed border-slate-200 text-slate-400 text-sm py-3 rounded-xl hover:border-teal hover:text-teal transition",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }),
			" ",
			label
		]
	});
}
function StringList({ data, onChange, label = "Items" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold uppercase tracking-wider text-slate-400",
				children: label
			}),
			(data ?? []).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-bold text-teal w-5 shrink-0",
						children: String(i + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: item,
						onChange: (v) => {
							const a = [...data];
							a[i] = v;
							onChange(a);
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onChange(data.filter((_, idx) => idx !== i)),
						className: "text-slate-300 hover:text-red-400 transition shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
					})
				]
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBtn, {
				label: `Add ${label.replace(/s$/, "")}`,
				onClick: () => onChange([...data ?? [], ""])
			})
		]
	});
}
function GenericHeroEditor({ data, onChange }) {
	const s = (k, v) => onChange({
		...data,
		[k]: v
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			data?.eyebrow !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Eyebrow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
					value: data.eyebrow,
					onChange: (v) => s("eyebrow", v)
				})
			}),
			data?.title !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
					value: data.title,
					onChange: (v) => s("title", v),
					rows: 2
				})
			}),
			data?.heading !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
					value: data.heading,
					onChange: (v) => s("heading", v),
					rows: 2
				})
			}),
			data?.subtitle !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Subtitle",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
					value: data.subtitle,
					onChange: (v) => s("subtitle", v)
				})
			}),
			data?.lead !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Lead / Intro",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
					value: data.lead,
					onChange: (v) => s("lead", v),
					rows: 3
				})
			}),
			data?.intro !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Intro",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
					value: data.intro,
					onChange: (v) => s("intro", v),
					rows: 3
				})
			}),
			data?.body !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Body",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
					value: data.body,
					onChange: (v) => s("body", v),
					rows: 4
				})
			}),
			data?.copy !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Copy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
					value: data.copy,
					onChange: (v) => s("copy", v),
					rows: 4
				})
			}),
			data?.cta !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "CTA Button",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
					value: data.cta,
					onChange: (v) => s("cta", v)
				})
			}),
			data?.image !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUpload, {
				value: data.image ?? "",
				onChange: (v) => s("image", v),
				label: "Background Image"
			})
		]
	});
}
function ImageSectionEditor({ data, onChange, label = "Image Section" }) {
	const s = (k, v) => onChange({
		...data,
		[k]: v
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-bold text-slate-500 uppercase tracking-wider",
				children: label
			}),
			data?.eyebrow !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Eyebrow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
					value: data.eyebrow,
					onChange: (v) => s("eyebrow", v)
				})
			}),
			data?.title !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
					value: data.title,
					onChange: (v) => s("title", v),
					rows: 2
				})
			}),
			data?.body !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Body",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
					value: data.body,
					onChange: (v) => s("body", v),
					rows: 3
				})
			}),
			data?.body1 !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Paragraph 1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
					value: data.body1,
					onChange: (v) => s("body1", v),
					rows: 3
				})
			}),
			data?.body2 !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Paragraph 2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
					value: data.body2,
					onChange: (v) => s("body2", v),
					rows: 3
				})
			}),
			data?.image !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUpload, {
				value: data.image ?? "",
				onChange: (v) => s("image", v),
				label: "Image"
			})
		]
	});
}
function NumberedStepsEditor({ data, onChange }) {
	const update = (i, k, v) => {
		const a = [...data];
		a[i] = {
			...a[i],
			[k]: v
		};
		onChange(a);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [(data ?? []).map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: step.title || `Step ${i + 1}`,
			badge: step.num,
			onRemove: () => onChange(data.filter((_, idx) => idx !== i)),
			defaultOpen: i === 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Number",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: step.num,
						onChange: (v) => update(i, "num", v)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: step.title,
						onChange: (v) => update(i, "title", v)
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Body",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
					value: step.body,
					onChange: (v) => update(i, "body", v),
					rows: 2
				})
			})]
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBtn, {
			label: "Add Step",
			onClick: () => onChange([...data ?? [], {
				num: `0${(data ?? []).length + 1}`,
				title: "",
				body: ""
			}])
		})]
	});
}
function FaqEditor({ data, onChange }) {
	const updateCat = (i, k, v) => {
		const a = [...data];
		a[i] = {
			...a[i],
			[k]: v
		};
		onChange(a);
	};
	const updateItem = (ci, ii, k, v) => {
		const a = [...data];
		const items = [...a[ci].items];
		items[ii] = {
			...items[ii],
			[k]: v
		};
		a[ci] = {
			...a[ci],
			items
		};
		onChange(a);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [(data ?? []).map((cat, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: cat.title || `Category ${ci + 1}`,
			onRemove: () => onChange(data.filter((_, i) => i !== ci)),
			defaultOpen: ci === 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Category Title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
					value: cat.title,
					onChange: (v) => updateCat(ci, "title", v)
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 mt-2",
				children: [cat.items.map((item, ii) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: item.q?.slice(0, 50) || `Q ${ii + 1}`,
					onRemove: () => updateCat(ci, "items", cat.items.filter((_, idx) => idx !== ii)),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Question",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
							value: item.q,
							onChange: (v) => updateItem(ci, ii, "q", v)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Answer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
							value: item.a,
							onChange: (v) => updateItem(ci, ii, "a", v),
							rows: 3
						})
					})]
				}, ii)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBtn, {
					label: "Add Q&A",
					onClick: () => updateCat(ci, "items", [...cat.items, {
						q: "",
						a: ""
					}])
				})]
			})]
		}, ci)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBtn, {
			label: "Add Category",
			onClick: () => onChange([...data ?? [], {
				title: "New Category",
				items: []
			}])
		})]
	});
}
function ResourcesDocsEditor({ data, onChange }) {
	const update = (i, k, v) => {
		const a = [...data];
		a[i] = {
			...a[i],
			[k]: v
		};
		onChange(a);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [(data ?? []).map((doc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: doc.title || `Document ${i + 1}`,
			onRemove: () => onChange(data.filter((_, idx) => idx !== i)),
			defaultOpen: i === 0,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Document Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: doc.title,
						onChange: (v) => update(i, "title", v)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Meta (e.g. PDF · Corporate)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: doc.meta,
						onChange: (v) => update(i, "meta", v)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-3 mt-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: doc.restricted,
							onChange: (e) => update(i, "restricted", e.target.checked),
							className: "w-4 h-4 accent-teal rounded"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-slate-600",
							children: "Restricted (requires access request)"
						})]
					})
				})
			]
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBtn, {
			label: "Add Document",
			onClick: () => onChange([...data ?? [], {
				title: "",
				meta: "PDF · Corporate",
				restricted: false
			}])
		})]
	});
}
function TechCardsEditor({ data, onChange }) {
	const update = (i, k, v) => {
		const a = [...data];
		a[i] = {
			...a[i],
			[k]: v
		};
		onChange(a);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [(data ?? []).map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: card.title || `Card ${i + 1}`,
			badge: card.num,
			onRemove: () => onChange(data.filter((_, idx) => idx !== i)),
			defaultOpen: i === 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Number",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
							value: card.num,
							onChange: (v) => update(i, "num", v)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Slug",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
							value: card.slug,
							onChange: (v) => update(i, "slug", v),
							placeholder: "e.g. exosome"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
							value: card.title,
							onChange: (v) => update(i, "title", v)
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Body",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
					value: card.body,
					onChange: (v) => update(i, "body", v),
					rows: 2
				})
			})]
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBtn, {
			label: "Add Technology Card",
			onClick: () => onChange([...data ?? [], {
				num: `0${(data ?? []).length + 1}`,
				slug: "",
				title: "",
				body: ""
			}])
		})]
	});
}
function ProductCategoriesEditor({ data, onChange }) {
	const updateCat = (i, k, v) => {
		const a = [...data];
		a[i] = {
			...a[i],
			[k]: v
		};
		onChange(a);
	};
	const updateItem = (ci, ii, k, v) => {
		const a = [...data];
		const items = [...a[ci].items];
		items[ii] = {
			...items[ii],
			[k]: v
		};
		a[ci] = {
			...a[ci],
			items
		};
		onChange(a);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [(data ?? []).map((cat, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: cat.title || `Category ${ci + 1}`,
			onRemove: () => onChange(data.filter((_, i) => i !== ci)),
			defaultOpen: ci === 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Key (internal)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: cat.key,
						onChange: (v) => updateCat(ci, "key", v)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Category Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: cat.title,
						onChange: (v) => updateCat(ci, "title", v)
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 mt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold text-slate-400 uppercase tracking-wider",
						children: "Products in this category"
					}),
					cat.items.map((item, ii) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
								value: item.slug,
								onChange: (v) => updateItem(ci, ii, "slug", v),
								placeholder: "slug"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
								value: item.name,
								onChange: (v) => updateItem(ci, ii, "name", v),
								placeholder: "Display name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => updateCat(ci, "items", cat.items.filter((_, idx) => idx !== ii)),
								className: "text-slate-300 hover:text-red-400 transition shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
							})
						]
					}, ii)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBtn, {
						label: "Add Product",
						onClick: () => updateCat(ci, "items", [...cat.items, {
							slug: "",
							name: ""
						}])
					})
				]
			})]
		}, ci)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBtn, {
			label: "Add Category",
			onClick: () => onChange([...data ?? [], {
				key: "",
				title: "New Category",
				items: []
			}])
		})]
	});
}
function ArticlesEditor({ data, onChange }) {
	const update = (i, k, v) => {
		const a = [...data];
		a[i] = {
			...a[i],
			[k]: v
		};
		onChange(a);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [(data ?? []).map((art, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: art.title?.slice(0, 50) || `Article ${i + 1}`,
			badge: art.category,
			onRemove: () => onChange(data.filter((_, idx) => idx !== i)),
			defaultOpen: i === 0,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Slug (URL)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
							value: art.slug,
							onChange: (v) => update(i, "slug", v),
							placeholder: "e.g. why-exosomes-matter"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Category",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
							value: art.category,
							onChange: (v) => update(i, "category", v)
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: art.title,
						onChange: (v) => update(i, "title", v)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Excerpt",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: art.excerpt,
						onChange: (v) => update(i, "excerpt", v),
						rows: 2
					})
				})
			]
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBtn, {
			label: "Add Article",
			onClick: () => onChange([...data ?? [], {
				slug: "",
				category: "Exosome Science",
				title: "",
				excerpt: ""
			}])
		})]
	});
}
function ValuesEditor({ data, onChange }) {
	const update = (i, k, v) => {
		const a = [...data];
		a[i] = {
			...a[i],
			[k]: v
		};
		onChange(a);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [(data ?? []).map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: val.title || `Value ${i + 1}`,
			onRemove: () => onChange(data.filter((_, idx) => idx !== i)),
			defaultOpen: i === 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
					value: val.title,
					onChange: (v) => update(i, "title", v)
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Body",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
					value: val.body,
					onChange: (v) => update(i, "body", v),
					rows: 2
				})
			})]
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBtn, {
			label: "Add Value",
			onClick: () => onChange([...data ?? [], {
				title: "",
				body: ""
			}])
		})]
	});
}
function RegionsEditor({ data, onChange }) {
	const update = (i, k, v) => {
		const a = [...data];
		a[i] = {
			...a[i],
			[k]: v
		};
		onChange(a);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [(data ?? []).map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
					value: r.name,
					onChange: (v) => update(i, "name", v),
					placeholder: "Region name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
					value: r.status,
					onChange: (v) => update(i, "status", v),
					placeholder: "Status (e.g. Active)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onChange(data.filter((_, idx) => idx !== i)),
					className: "text-slate-300 hover:text-red-400 transition shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
				})
			]
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBtn, {
			label: "Add Region",
			onClick: () => onChange([...data ?? [], {
				name: "",
				status: "Active"
			}])
		})]
	});
}
function FacilityAreasEditor({ data, onChange }) {
	const update = (i, k, v) => {
		const a = [...data];
		a[i] = {
			...a[i],
			[k]: v
		};
		onChange(a);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [(data ?? []).map((area, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: area.title || `Area ${i + 1}`,
			onRemove: () => onChange(data.filter((_, idx) => idx !== i)),
			defaultOpen: i === 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Area Name",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
					value: area.title,
					onChange: (v) => update(i, "title", v)
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Description",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
					value: area.body,
					onChange: (v) => update(i, "body", v),
					rows: 2
				})
			})]
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBtn, {
			label: "Add Facility Area",
			onClick: () => onChange([...data ?? [], {
				title: "",
				body: ""
			}])
		})]
	});
}
function FormFieldsEditor({ data, onChange }) {
	const update = (i, k, v) => {
		const a = [...data];
		a[i] = {
			...a[i],
			[k]: v
		};
		onChange(a);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [(data ?? []).map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
					value: f.label,
					onChange: (v) => update(i, "label", v),
					placeholder: "Field label"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
					value: f.ph,
					onChange: (v) => update(i, "ph", v),
					placeholder: "Placeholder text"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onChange(data.filter((_, idx) => idx !== i)),
					className: "text-slate-300 hover:text-red-400 transition shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
				})
			]
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBtn, {
			label: "Add Field",
			onClick: () => onChange([...data ?? [], {
				label: "",
				ph: ""
			}])
		})]
	});
}
function CharGroupsEditor({ data, onChange }) {
	const updateGroup = (i, k, v) => {
		const a = [...data];
		a[i] = {
			...a[i],
			[k]: v
		};
		onChange(a);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [(data ?? []).map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: g.title || `Group ${i + 1}`,
			onRemove: () => onChange(data.filter((_, idx) => idx !== i)),
			defaultOpen: i === 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Group Title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
					value: g.title,
					onChange: (v) => updateGroup(i, "title", v)
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StringList, {
				data: g.items,
				onChange: (v) => updateGroup(i, "items", v),
				label: "Methods / Items"
			})]
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBtn, {
			label: "Add Group",
			onClick: () => onChange([...data ?? [], {
				title: "",
				items: []
			}])
		})]
	});
}
/**
* AI PDF Import — reads a PDF as text and intelligently maps extracted
* headings, body text, and lists into the page's section data structure.
*
* No external AI API needed — uses heuristic text parsing that understands
* common section patterns from the Vesco brand document style.
*/
function cleanText(s) {
	return s.replace(/\s+/g, " ").trim();
}
/**
* Very lightweight PDF text extractor — reads the raw PDF bytes and
* grabs all BT/ET (begin-text/end-text) stream content. Works on most
* simple PDFs without needing pdf.js.
*/
async function extractTextFromPdf(file) {
	const buf = await file.arrayBuffer();
	const bytes = new Uint8Array(buf);
	const raw = new TextDecoder("latin1").decode(bytes);
	const chunks = [];
	const regex = /BT\s([\s\S]*?)ET/g;
	let m;
	while ((m = regex.exec(raw)) !== null) {
		const inner = m[1];
		const strRe = /\(([^)]*)\)/g;
		let sm;
		while ((sm = strRe.exec(inner)) !== null) {
			const txt = sm[1].replace(/\\(\d{3})/g, (_, oct) => String.fromCharCode(parseInt(oct, 8))).replace(/\\\n/g, "").replace(/\\n/g, "\n").replace(/\\/g, "");
			if (txt.trim()) chunks.push(txt);
		}
	}
	if (chunks.length > 0) return chunks.join(" ");
	return raw.replace(/[^\x20-\x7e\n]/g, " ").replace(/ {4,}/g, "\n").split("\n").map(cleanText).filter((l) => l.length > 3).join("\n");
}
function mapTextToPageData(text, slug, current) {
	const lines = text.split(/\n|(?<=\.)\s{2,}/).map(cleanText).filter((l) => l.length > 2);
	const isHeading = (l) => l === l.toUpperCase() && l.length > 3 && l.length < 80 && /[A-Z]/.test(l);
	const isShort = (l) => l.length < 80;
	const firstLong = (from, minLen = 60) => {
		for (let i = from; i < Math.min(from + 15, lines.length); i++) if (lines[i].length >= minLen) return lines[i];
		return "";
	};
	const paragraphAfter = (keyword) => {
		const idx = lines.findIndex((l) => l.toLowerCase().includes(keyword.toLowerCase()));
		if (idx === -1) return "";
		return firstLong(idx + 1, 40);
	};
	const listAfter = (keyword, max = 8) => {
		const idx = lines.findIndex((l) => l.toLowerCase().includes(keyword.toLowerCase()));
		if (idx === -1) return [];
		const results = [];
		for (let i = idx + 1; i < Math.min(idx + 20, lines.length); i++) {
			const l = lines[i];
			if (l.length < 6 || isHeading(l)) continue;
			if (l.length < 70) results.push(l.replace(/^[•\-–●·\d]+\.?\s*/, ""));
			if (results.length >= max) break;
		}
		return results;
	};
	if (slug === "home") {
		const merged = JSON.parse(JSON.stringify(current));
		const heroIdx = lines.findIndex((l) => l.toLowerCase().includes("advancing") || l.toLowerCase().includes("biotechnology") || isHeading(l));
		if (heroIdx !== -1 && lines[heroIdx]) merged.hero = {
			...merged.hero,
			heading: cleanText(lines[heroIdx]),
			subheading: cleanText(lines[heroIdx + 1] || merged.hero?.subheading || ""),
			body: cleanText(firstLong(heroIdx + 2) || merged.hero?.body || "")
		};
		const aboutCopy = paragraphAfter("who we are") || paragraphAfter("biotechnology meets");
		if (aboutCopy) merged.about = {
			...merged.about,
			copy: cleanText(aboutCopy)
		};
		const trustList = listAfter("capability") || listAfter("r&d driven");
		if (trustList.length > 0) merged.trustBar = trustList;
		const techIdx = lines.findIndex((l) => l.toLowerCase().includes("technology") && isShort(l));
		if (techIdx !== -1) {
			const cardTitles = listAfter("technology", 4);
			if (cardTitles.length > 0) merged.coreTechnology = {
				...merged.coreTechnology,
				heading: cleanText(lines[techIdx]),
				cards: cardTitles.map((title, i) => ({
					num: String(i + 1).padStart(2, "0"),
					title,
					body: cleanText(firstLong(techIdx + i + 2, 40) || merged.coreTechnology?.cards?.[i]?.body || "")
				}))
			};
		}
		const mfgCopy = paragraphAfter("manufacturing");
		if (mfgCopy) merged.manufacturing = {
			...merged.manufacturing,
			copy: cleanText(mfgCopy)
		};
		const ctaIdx = lines.findIndex((l) => l.toLowerCase().includes("build") || l.toLowerCase().includes("partnership"));
		if (ctaIdx !== -1) merged.finalCta = {
			...merged.finalCta,
			heading: cleanText(lines[ctaIdx] || merged.finalCta?.heading || ""),
			copy: cleanText(firstLong(ctaIdx + 1, 40) || merged.finalCta?.copy || "")
		};
		return merged;
	}
	if (slug === "about") {
		const merged = JSON.parse(JSON.stringify(current));
		const heroLine = lines.find((l) => l.toLowerCase().includes("advancing") || isHeading(l));
		if (heroLine) {
			merged.hero = {
				...merged.hero,
				heading: cleanText(heroLine)
			};
			const heroCopy = firstLong(lines.indexOf(heroLine) + 1, 50);
			if (heroCopy) merged.hero.copy = cleanText(heroCopy);
		}
		const whoIdx = lines.findIndex((l) => l.toLowerCase().includes("who we are"));
		if (whoIdx !== -1) {
			merged.whoWeAre = {
				...merged.whoWeAre,
				copy: cleanText(firstLong(whoIdx + 1, 40) || merged.whoWeAre?.copy || "")
			};
			const capList = listAfter("capabilities");
			if (capList.length > 0) merged.whoWeAre.capabilities = capList.map((title) => ({
				title,
				desc: cleanText(firstLong(lines.indexOf(title) + 1, 30) || "")
			}));
		}
		const sciIdx = lines.findIndex((l) => l.toLowerCase().includes("scientific approach") || l.toLowerCase().includes("biological science"));
		if (sciIdx !== -1) merged.scientificApproach = {
			...merged.scientificApproach,
			copy: cleanText(firstLong(sciIdx + 1, 40) || merged.scientificApproach?.copy || "")
		};
		const qualIdx = lines.findIndex((l) => l.toLowerCase().includes("quality") && isShort(l));
		if (qualIdx !== -1) {
			const qualPoints = listAfter("quality approach");
			if (qualPoints.length > 0) merged.quality = {
				...merged.quality,
				points: qualPoints.map((title, i) => ({
					num: String(i + 1).padStart(2, "0"),
					title: title.replace(/^\d+\s*[–—-]\s*/, ""),
					desc: cleanText(firstLong(qualIdx + i + 2, 30) || "")
				}))
			};
		}
		const visionIdx = lines.findIndex((l) => l.toLowerCase().includes("vision"));
		if (visionIdx !== -1) merged.visionMission = {
			...merged.visionMission,
			vision: {
				...merged.visionMission?.vision,
				copy: cleanText(firstLong(visionIdx + 1, 40) || merged.visionMission?.vision?.copy || "")
			}
		};
		const missionIdx = lines.findIndex((l) => l.toLowerCase().includes("mission"));
		if (missionIdx !== -1) merged.visionMission = {
			...merged.visionMission,
			mission: {
				...merged.visionMission?.mission,
				copy: cleanText(firstLong(missionIdx + 1, 40) || merged.visionMission?.mission?.copy || "")
			}
		};
		const ctaIdx = lines.findIndex((l) => l.toLowerCase().includes("build") || l.toLowerCase().includes("next generation"));
		if (ctaIdx !== -1) merged.finalCta = {
			...merged.finalCta,
			title: cleanText(lines[ctaIdx]),
			copy: cleanText(firstLong(ctaIdx + 1, 30) || merged.finalCta?.copy || "")
		};
		return merged;
	}
	return current;
}
function PdfImport({ pageSlug, currentData, onImport }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	const [preview, setPreview] = (0, import_react.useState)(null);
	const fileRef = (0, import_react.useRef)(null);
	const handleFile = async (file) => {
		if (!file.name.toLowerCase().endsWith(".pdf")) {
			setStatus("error");
			setMessage("Please upload a PDF file.");
			return;
		}
		setStatus("reading");
		setMessage("Extracting text from PDF…");
		try {
			const text = await extractTextFromPdf(file);
			setMessage("Mapping content to page sections…");
			await new Promise((r) => setTimeout(r, 600));
			const merged = mapTextToPageData(text, pageSlug, currentData);
			setPreview(merged);
			setStatus("done");
			setMessage(`Content extracted! Review the changes below, then click "Apply to Page".`);
		} catch (err) {
			setStatus("error");
			setMessage("Failed to read PDF: " + (err?.message || "Unknown error"));
		}
	};
	const handleApply = () => {
		if (preview) {
			onImport(preview);
			setOpen(false);
			setStatus("idle");
			setPreview(null);
		}
	};
	if (!open) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => setOpen(true),
		className: "flex items-center gap-2 bg-purple-600/10 hover:bg-purple-600/20 border border-purple-400/30 text-purple-600 text-xs font-bold px-4 py-2.5 rounded-lg transition",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), "AI PDF Import"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white rounded-2xl shadow-2xl w-full max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-5 border-b border-slate-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4.5 h-4.5 text-purple-600" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-slate-800 text-sm",
							children: "AI PDF Import"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-slate-400 text-xs",
							children: "Upload a brand doc to auto-fill sections"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setOpen(false);
							setStatus("idle");
							setPreview(null);
						},
						className: "text-slate-400 hover:text-slate-600 transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-2 border-dashed border-slate-200 rounded-xl p-8 text-center cursor-pointer hover:border-purple-400 hover:bg-purple-50/50 transition",
							onClick: () => fileRef.current?.click(),
							onDrop: (e) => {
								e.preventDefault();
								const f = e.dataTransfer.files[0];
								if (f) handleFile(f);
							},
							onDragOver: (e) => e.preventDefault(),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileRef,
									type: "file",
									accept: ".pdf",
									className: "hidden",
									onChange: (e) => {
										const f = e.target.files?.[0];
										if (f) handleFile(f);
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-8 h-8 text-slate-300 mx-auto mb-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-slate-500",
									children: ["Drop your PDF here or ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-purple-600 font-semibold",
										children: "browse"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-300 mt-1",
									children: "Brand docs, brochures, content sheets"
								})
							]
						}),
						status !== "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `flex items-start gap-3 rounded-xl px-4 py-3 text-sm ${status === "reading" ? "bg-blue-50 text-blue-700" : status === "done" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`,
							children: [
								status === "reading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-4 h-4 mt-0.5 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" }),
								status === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 mt-0.5 shrink-0" }),
								status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 mt-0.5 shrink-0" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: message })
							]
						}),
						preview && status === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-50 rounded-xl border border-slate-200 p-3 max-h-52 overflow-y-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2",
								children: "Sections to update:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1",
								children: Object.keys(preview).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "text-xs text-slate-600 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 bg-green-400 rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium capitalize",
										children: k.replace(/([A-Z])/g, " $1")
									})]
								}, k))
							})]
						})
					]
				}),
				status === "done" && preview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-3 px-5 pb-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setStatus("idle");
							setPreview(null);
						},
						className: "text-slate-500 text-sm hover:text-slate-700 transition px-4 py-2",
						children: "Discard"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleApply,
						className: "bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-4 h-4" }), "Apply to Page"]
					})]
				})
			]
		})
	});
}
var SECTION_MAP = {
	home: [
		{
			key: "hero",
			label: "Hero",
			icon: Star,
			color: "text-amber-500",
			description: "Heading, subheading, body, CTA, background image"
		},
		{
			key: "trustBar",
			label: "Trust / Cap. Bar",
			icon: Zap,
			color: "text-blue-500",
			description: "Capability tags below hero"
		},
		{
			key: "about",
			label: "About Vesco",
			icon: Info,
			color: "text-indigo-500",
			description: "Who we are block with image"
		},
		{
			key: "coreTechnology",
			label: "Core Technology",
			icon: Cpu,
			color: "text-teal-500",
			description: "Technology cards section"
		},
		{
			key: "exosomeSection",
			label: "Exosome Feature",
			icon: Zap,
			color: "text-cyan-500",
			description: "Exosome process steps panel"
		},
		{
			key: "manufacturing",
			label: "Manufacturing",
			icon: Settings2,
			color: "text-orange-500",
			description: "R&D to production flow"
		},
		{
			key: "quality",
			label: "Quality",
			icon: Award,
			color: "text-green-500",
			description: "Quality built into every stage"
		},
		{
			key: "finalCta",
			label: "Final CTA",
			icon: Type,
			color: "text-rose-500",
			description: "Call to action banner"
		}
	],
	about: [
		{
			key: "hero",
			label: "Hero",
			icon: Star,
			color: "text-amber-500",
			description: "Page hero with heading and copy"
		},
		{
			key: "whoWeAre",
			label: "Who We Are",
			icon: Info,
			color: "text-indigo-500",
			description: "Overview and capabilities list"
		},
		{
			key: "scientificApproach",
			label: "Scientific Approach",
			icon: Layers,
			color: "text-teal-500",
			description: "Integrated research to product copy"
		},
		{
			key: "manufacturing",
			label: "Manufacturing",
			icon: Settings2,
			color: "text-orange-500",
			description: "Development to production pipeline"
		},
		{
			key: "quality",
			label: "Quality",
			icon: Award,
			color: "text-green-500",
			description: "Quality points and copy"
		},
		{
			key: "partnership",
			label: "Global Partnership",
			icon: Globe,
			color: "text-blue-500",
			description: "Vesco × EverCeutical partnership"
		},
		{
			key: "visionMission",
			label: "Vision & Mission",
			icon: Star,
			color: "text-purple-500",
			description: "Vision and mission blocks"
		},
		{
			key: "finalCta",
			label: "Final CTA",
			icon: Type,
			color: "text-rose-500",
			description: "Contact / closing CTA"
		}
	],
	facility: [
		{
			key: "hero",
			label: "Hero",
			icon: Star,
			color: "text-amber-500",
			description: "Page hero"
		},
		{
			key: "areas",
			label: "Facility Areas",
			icon: Building2,
			color: "text-blue-500",
			description: "Grid of facility areas"
		},
		{
			key: "cleanroomSection",
			label: "Cleanroom",
			icon: ShieldCheck,
			color: "text-teal-500",
			description: "Cleanroom image + text section"
		},
		{
			key: "coldChainSection",
			label: "Cold Chain",
			icon: Package,
			color: "text-orange-500",
			description: "Cold chain logistics section"
		}
	],
	quality: [
		{
			key: "hero",
			label: "Hero",
			icon: Star,
			color: "text-amber-500",
			description: "Page hero"
		},
		{
			key: "flow",
			label: "Quality Flow",
			icon: List,
			color: "text-teal-500",
			description: "Step-by-step quality flow"
		},
		{
			key: "systems",
			label: "Quality Systems",
			icon: ShieldCheck,
			color: "text-blue-500",
			description: "List of quality systems"
		},
		{
			key: "cleanroomSection",
			label: "Cleanroom Section",
			icon: Building2,
			color: "text-indigo-500",
			description: "Cleanroom image + text"
		},
		{
			key: "characterization",
			label: "Characterization",
			icon: FlaskConical,
			color: "text-purple-500",
			description: "Analytical groups and methods"
		}
	],
	oem: [
		{
			key: "hero",
			label: "Hero",
			icon: Star,
			color: "text-amber-500",
			description: "Page hero"
		},
		{
			key: "oem",
			label: "OEM Model",
			icon: Settings2,
			color: "text-blue-500",
			description: "OEM title, body, steps"
		},
		{
			key: "odm",
			label: "ODM Model",
			icon: Settings2,
			color: "text-indigo-500",
			description: "ODM title, body, steps"
		},
		{
			key: "manufacturingSection",
			label: "Manufacturing",
			icon: Building2,
			color: "text-orange-500",
			description: "Manufacturing image section"
		},
		{
			key: "process",
			label: "9-Stage Process",
			icon: List,
			color: "text-teal-500",
			description: "Full development process steps"
		},
		{
			key: "customDev",
			label: "Custom Dev",
			icon: FlaskConical,
			color: "text-purple-500",
			description: "Custom development intro & inputs"
		},
		{
			key: "privateLabel",
			label: "Private Label",
			icon: Package,
			color: "text-rose-500",
			description: "Private label points"
		},
		{
			key: "regulatory",
			label: "Regulatory",
			icon: ShieldCheck,
			color: "text-green-500",
			description: "Regulatory support points"
		}
	],
	research: [
		{
			key: "hero",
			label: "Hero",
			icon: Star,
			color: "text-amber-500",
			description: "Page hero"
		},
		{
			key: "areas",
			label: "Research Areas",
			icon: FlaskConical,
			color: "text-teal-500",
			description: "Research area items"
		},
		{
			key: "seoulSection",
			label: "Seoul Section",
			icon: Building2,
			color: "text-blue-500",
			description: "Seoul biotech hub section"
		},
		{
			key: "scientistsSection",
			label: "Scientists",
			icon: Users,
			color: "text-indigo-500",
			description: "Scientists section"
		},
		{
			key: "team",
			label: "Team Disciplines",
			icon: Users,
			color: "text-purple-500",
			description: "Capability areas list"
		}
	],
	contact: [
		{
			key: "hero",
			label: "Hero",
			icon: Star,
			color: "text-amber-500",
			description: "Page hero"
		},
		{
			key: "info",
			label: "Contact Info",
			icon: Phone,
			color: "text-blue-500",
			description: "Address, email, hours"
		},
		{
			key: "officeSection",
			label: "Office Section",
			icon: Building2,
			color: "text-teal-500",
			description: "Office image + text"
		},
		{
			key: "consultSection",
			label: "Consult Section",
			icon: Users,
			color: "text-indigo-500",
			description: "Consultation image + text"
		}
	],
	faq: [{
		key: "hero",
		label: "Hero",
		icon: Star,
		color: "text-amber-500",
		description: "Page hero"
	}, {
		key: "categories",
		label: "FAQ Categories",
		icon: CircleQuestionMark,
		color: "text-teal-500",
		description: "All FAQ categories and Q&A pairs"
	}],
	resources: [{
		key: "hero",
		label: "Hero",
		icon: Star,
		color: "text-amber-500",
		description: "Page hero"
	}, {
		key: "docs",
		label: "Documents",
		icon: FolderOpen,
		color: "text-blue-500",
		description: "Download centre documents"
	}],
	technology: [
		{
			key: "hero",
			label: "Hero",
			icon: Star,
			color: "text-amber-500",
			description: "Page hero"
		},
		{
			key: "cards",
			label: "Tech Cards",
			icon: Cpu,
			color: "text-teal-500",
			description: "Six technology platform cards"
		},
		{
			key: "exosome",
			label: "Exosome Block",
			icon: FlaskConical,
			color: "text-blue-500",
			description: "Exosome feature + process steps"
		}
	],
	products: [{
		key: "hero",
		label: "Hero",
		icon: Star,
		color: "text-amber-500",
		description: "Page hero"
	}, {
		key: "categories",
		label: "Categories",
		icon: Package,
		color: "text-teal-500",
		description: "Product categories and items"
	}],
	insights: [
		{
			key: "hero",
			label: "Hero",
			icon: Star,
			color: "text-amber-500",
			description: "Page hero"
		},
		{
			key: "categories",
			label: "Categories",
			icon: List,
			color: "text-teal-500",
			description: "Article category filters"
		},
		{
			key: "articles",
			label: "Articles",
			icon: Newspaper,
			color: "text-blue-500",
			description: "Blog / insight articles"
		}
	],
	"about-mission": [
		{
			key: "hero",
			label: "Hero",
			icon: Star,
			color: "text-amber-500",
			description: "Page hero"
		},
		{
			key: "missionTitle",
			label: "Mission",
			icon: FlaskConical,
			color: "text-teal-500",
			description: "Mission title and body"
		},
		{
			key: "values",
			label: "Operating Values",
			icon: Award,
			color: "text-indigo-500",
			description: "Company values / principles"
		},
		{
			key: "researchSection",
			label: "Research Section",
			icon: Users,
			color: "text-blue-500",
			description: "Research image section"
		},
		{
			key: "seoulSection",
			label: "Seoul Section",
			icon: Building2,
			color: "text-purple-500",
			description: "Seoul / biotech hub section"
		}
	],
	"about-network": [
		{
			key: "hero",
			label: "Hero",
			icon: Star,
			color: "text-amber-500",
			description: "Page hero"
		},
		{
			key: "models",
			label: "Partnership Models",
			icon: Globe,
			color: "text-teal-500",
			description: "Six partnership model cards"
		},
		{
			key: "logisticsSection",
			label: "Logistics",
			icon: Package,
			color: "text-blue-500",
			description: "Global supply chain section"
		},
		{
			key: "supportSection",
			label: "Support Desk",
			icon: Phone,
			color: "text-indigo-500",
			description: "Partner support section"
		},
		{
			key: "coverage",
			label: "Market Coverage",
			icon: Globe,
			color: "text-purple-500",
			description: "Regional market coverage"
		}
	],
	"custom-development": [
		{
			key: "hero",
			label: "Hero",
			icon: Star,
			color: "text-amber-500",
			description: "Page hero"
		},
		{
			key: "pathway",
			label: "Pathway",
			icon: List,
			color: "text-teal-500",
			description: "Development pathway steps"
		},
		{
			key: "cleanroomSection",
			label: "Cleanroom",
			icon: Building2,
			color: "text-blue-500",
			description: "Cleanroom image section"
		},
		{
			key: "form",
			label: "Brief Form",
			icon: FlaskConical,
			color: "text-indigo-500",
			description: "Project brief form fields"
		},
		{
			key: "deliverables",
			label: "Deliverables",
			icon: Award,
			color: "text-purple-500",
			description: "What you receive section"
		}
	]
};
function renderSectionEditor(slug, sectionKey, data, onChange) {
	if (!data && data !== 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs text-slate-400 italic p-2",
		children: "No data for this section."
	});
	if (slug === "home") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroEditor, {
			data,
			onChange
		});
		case "trustBar": return Array.isArray(data) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBarEditor, {
			data,
			onChange
		}) : null;
		case "about": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutEditor, {
			data,
			onChange
		});
		case "coreTechnology": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreTechEditor, {
			data,
			onChange
		});
		case "exosomeSection": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExosomeSectionEditor, {
			data,
			onChange
		});
		case "manufacturing": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManufacturingEditor, {
			data,
			onChange
		});
		case "quality": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualityEditor, {
			data,
			onChange
		});
		case "finalCta": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaEditor, {
			data,
			onChange
		});
	}
	if (slug === "about") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroEditor, {
			data,
			onChange
		});
		case "whoWeAre": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutEditor, {
				data,
				onChange
			}), Array.isArray(data.capabilities) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-2 border-t border-slate-100",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3",
					children: "Capabilities List"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapabilitiesEditor, {
					data: data.capabilities,
					onChange: (caps) => onChange({
						...data,
						capabilities: caps
					})
				})]
			})]
		});
		case "scientificApproach": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScientificApproachEditor, {
			data,
			onChange
		});
		case "manufacturing": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManufacturingEditor, {
			data,
			onChange
		});
		case "quality": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualityEditor, {
			data,
			onChange
		});
		case "partnership": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnershipEditor, {
			data,
			onChange
		});
		case "visionMission": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisionMissionEditor, {
			data,
			onChange
		});
		case "finalCta": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaEditor, {
			data,
			onChange
		});
	}
	if (slug === "facility") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericHeroEditor, {
			data,
			onChange
		});
		case "areas": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacilityAreasEditor, {
			data,
			onChange
		});
		case "cleanroomSection":
		case "coldChainSection": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageSectionEditor, {
			data,
			onChange,
			label: sectionKey === "cleanroomSection" ? "Cleanroom Section" : "Cold Chain Section"
		});
	}
	if (slug === "quality") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericHeroEditor, {
			data,
			onChange
		});
		case "flow": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StringList, {
			data,
			onChange,
			label: "Quality Flow Steps"
		});
		case "systems": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StringList, {
			data,
			onChange,
			label: "Quality Systems"
		});
		case "cleanroomSection": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageSectionEditor, {
			data,
			onChange,
			label: "Cleanroom Section"
		});
		case "characterization": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Eyebrow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
							value: data.eyebrow ?? "",
							onChange: (v) => onChange({
								...data,
								eyebrow: v
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
							value: data.title ?? "",
							onChange: (v) => onChange({
								...data,
								title: v
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Intro",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.intro ?? "",
						onChange: (v) => onChange({
							...data,
							intro: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-slate-100 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3",
						children: "Characterization Groups"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharGroupsEditor, {
						data: data.groups ?? [],
						onChange: (groups) => onChange({
							...data,
							groups
						})
					})]
				})
			]
		});
	}
	if (slug === "oem") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericHeroEditor, {
			data,
			onChange
		});
		case "oem":
		case "odm": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.title ?? "",
						onChange: (v) => onChange({
							...data,
							title: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Body",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.body ?? "",
						onChange: (v) => onChange({
							...data,
							body: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StringList, {
					data: data.steps ?? [],
					onChange: (steps) => onChange({
						...data,
						steps
					}),
					label: "Steps"
				})
			]
		});
		case "manufacturingSection": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageSectionEditor, {
			data,
			onChange,
			label: "Manufacturing Section"
		});
		case "process": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Eyebrow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.eyebrow ?? "",
						onChange: (v) => onChange({
							...data,
							eyebrow: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.title ?? "",
						onChange: (v) => onChange({
							...data,
							title: v
						}),
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-slate-100 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3",
						children: "Process Steps"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberedStepsEditor, {
						data: data.steps ?? [],
						onChange: (steps) => onChange({
							...data,
							steps
						})
					})]
				})
			]
		});
		case "customDev": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Eyebrow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.eyebrow ?? "",
						onChange: (v) => onChange({
							...data,
							eyebrow: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.title ?? "",
						onChange: (v) => onChange({
							...data,
							title: v
						}),
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Intro",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.intro ?? "",
						onChange: (v) => onChange({
							...data,
							intro: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "CTA Button",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.cta ?? "",
						onChange: (v) => onChange({
							...data,
							cta: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StringList, {
					data: data.inputs ?? [],
					onChange: (inputs) => onChange({
						...data,
						inputs
					}),
					label: "Input Parameters"
				})
			]
		});
		case "privateLabel": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Eyebrow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.eyebrow ?? "",
						onChange: (v) => onChange({
							...data,
							eyebrow: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.title ?? "",
						onChange: (v) => onChange({
							...data,
							title: v
						}),
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Intro",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.intro ?? "",
						onChange: (v) => onChange({
							...data,
							intro: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StringList, {
					data: data.points ?? [],
					onChange: (points) => onChange({
						...data,
						points
					}),
					label: "Private Label Points"
				})
			]
		});
		case "regulatory": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Eyebrow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.eyebrow ?? "",
						onChange: (v) => onChange({
							...data,
							eyebrow: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.title ?? "",
						onChange: (v) => onChange({
							...data,
							title: v
						}),
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Intro",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.intro ?? "",
						onChange: (v) => onChange({
							...data,
							intro: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Note",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.note ?? "",
						onChange: (v) => onChange({
							...data,
							note: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StringList, {
					data: data.points ?? [],
					onChange: (points) => onChange({
						...data,
						points
					}),
					label: "Regulatory Points"
				})
			]
		});
	}
	if (slug === "research") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericHeroEditor, {
			data,
			onChange
		});
		case "areas": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Eyebrow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.eyebrow ?? "",
						onChange: (v) => onChange({
							...data,
							eyebrow: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.title ?? "",
						onChange: (v) => onChange({
							...data,
							title: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StringList, {
					data: data.items ?? [],
					onChange: (items) => onChange({
						...data,
						items
					}),
					label: "Research Areas"
				})
			]
		});
		case "seoulSection":
		case "scientistsSection": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageSectionEditor, {
			data,
			onChange
		});
		case "team": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
					value: data.title ?? "",
					onChange: (v) => onChange({
						...data,
						title: v
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StringList, {
				data: data.items ?? [],
				onChange: (items) => onChange({
					...data,
					items
				}),
				label: "Disciplines"
			})]
		});
	}
	if (slug === "contact") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericHeroEditor, {
			data,
			onChange
		});
		case "info": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Address",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.address ?? "",
						onChange: (v) => onChange({
							...data,
							address: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.email ?? "",
						onChange: (v) => onChange({
							...data,
							email: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Business Hours",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.hours ?? "",
						onChange: (v) => onChange({
							...data,
							hours: v
						})
					})
				})
			]
		});
		case "officeSection":
		case "consultSection": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageSectionEditor, {
			data,
			onChange
		});
	}
	if (slug === "faq") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericHeroEditor, {
			data,
			onChange
		});
		case "categories": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqEditor, {
			data,
			onChange
		});
	}
	if (slug === "resources") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericHeroEditor, {
			data,
			onChange
		});
		case "docs": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourcesDocsEditor, {
			data,
			onChange
		});
	}
	if (slug === "technology") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericHeroEditor, {
			data,
			onChange
		});
		case "cards": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechCardsEditor, {
			data,
			onChange
		});
		case "exosome": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Eyebrow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.eyebrow ?? "",
						onChange: (v) => onChange({
							...data,
							eyebrow: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.title ?? "",
						onChange: (v) => onChange({
							...data,
							title: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Body paragraph 1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.body1 ?? "",
						onChange: (v) => onChange({
							...data,
							body1: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Body paragraph 2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.body2 ?? "",
						onChange: (v) => onChange({
							...data,
							body2: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Process Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.processTitle ?? "",
						onChange: (v) => onChange({
							...data,
							processTitle: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StringList, {
					data: data.steps ?? [],
					onChange: (steps) => onChange({
						...data,
						steps
					}),
					label: "Process Steps"
				})
			]
		});
	}
	if (slug === "products") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericHeroEditor, {
			data,
			onChange
		});
		case "categories": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCategoriesEditor, {
			data,
			onChange
		});
	}
	if (slug === "insights") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericHeroEditor, {
			data,
			onChange
		});
		case "categories": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StringList, {
			data,
			onChange,
			label: "Article Categories"
		});
		case "articles": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticlesEditor, {
			data,
			onChange
		});
	}
	if (slug === "about-mission") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericHeroEditor, {
			data,
			onChange
		});
		case "missionTitle": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Mission Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.missionTitle ?? data.title ?? "",
						onChange: (v) => onChange({
							...data,
							missionTitle: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Mission Body",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.missionBody ?? data.body ?? "",
						onChange: (v) => onChange({
							...data,
							missionBody: v
						}),
						rows: 4
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Vision Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.visionTitle ?? "",
						onChange: (v) => onChange({
							...data,
							visionTitle: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Vision Body",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.visionBody ?? "",
						onChange: (v) => onChange({
							...data,
							visionBody: v
						}),
						rows: 4
					})
				})
			]
		});
		case "values": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValuesEditor, {
			data,
			onChange
		});
		case "researchSection":
		case "seoulSection": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageSectionEditor, {
			data,
			onChange
		});
	}
	if (slug === "about-network") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericHeroEditor, {
			data,
			onChange
		});
		case "models": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Eyebrow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.eyebrow ?? "",
						onChange: (v) => onChange({
							...data,
							eyebrow: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.title ?? "",
						onChange: (v) => onChange({
							...data,
							title: v
						}),
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-slate-100 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3",
						children: "Partnership Models"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValuesEditor, {
						data: data.items ?? [],
						onChange: (items) => onChange({
							...data,
							items
						})
					})]
				})
			]
		});
		case "logisticsSection":
		case "supportSection": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageSectionEditor, {
			data,
			onChange
		});
		case "coverage": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
					value: data.title ?? "",
					onChange: (v) => onChange({
						...data,
						title: v
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionsEditor, {
				data: data.regions ?? [],
				onChange: (regions) => onChange({
					...data,
					regions
				})
			})]
		});
	}
	if (slug === "custom-development") switch (sectionKey) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericHeroEditor, {
			data,
			onChange
		});
		case "pathway": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Eyebrow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.eyebrow ?? "",
						onChange: (v) => onChange({
							...data,
							eyebrow: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.title ?? "",
						onChange: (v) => onChange({
							...data,
							title: v
						}),
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StringList, {
					data: data.steps ?? [],
					onChange: (steps) => onChange({
						...data,
						steps
					}),
					label: "Pathway Steps"
				})
			]
		});
		case "cleanroomSection": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageSectionEditor, {
			data,
			onChange,
			label: "Cleanroom Section"
		});
		case "form": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Eyebrow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.eyebrow ?? "",
						onChange: (v) => onChange({
							...data,
							eyebrow: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.title ?? "",
						onChange: (v) => onChange({
							...data,
							title: v
						}),
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Intro",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TA, {
						value: data.intro ?? "",
						onChange: (v) => onChange({
							...data,
							intro: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Notes Label",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.notes ?? "",
						onChange: (v) => onChange({
							...data,
							notes: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Submit Button",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.submit ?? "",
						onChange: (v) => onChange({
							...data,
							submit: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-slate-100 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3",
						children: "Form Fields"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormFieldsEditor, {
						data: data.fields ?? [],
						onChange: (fields) => onChange({
							...data,
							fields
						})
					})]
				})
			]
		});
		case "deliverables": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Eyebrow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.eyebrow ?? "",
						onChange: (v) => onChange({
							...data,
							eyebrow: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TI, {
						value: data.title ?? "",
						onChange: (v) => onChange({
							...data,
							title: v
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StringList, {
					data: data.items ?? [],
					onChange: (items) => onChange({
						...data,
						items
					}),
					label: "Deliverable Items"
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs text-slate-400 italic p-2",
		children: "Editor not defined for this section."
	});
}
function SectionPanel({ slug, def, data, onChange }) {
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const Icon = def.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `bg-white rounded-2xl border shadow-sm overflow-hidden transition-all ${expanded ? "border-slate-300" : "border-slate-200 hover:border-slate-300"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "w-full flex items-center gap-4 px-5 py-4 text-left",
			onClick: () => setExpanded(!expanded),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `w-4 h-4 ${def.color}` })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-slate-800 text-sm",
						children: def.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-slate-400 truncate",
						children: def.description
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shrink-0 text-slate-400",
					children: expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-4 h-4" })
				})
			]
		}), expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-slate-100 px-5 py-5 bg-slate-50/50",
			children: renderSectionEditor(slug, def.key, data, onChange)
		})]
	});
}
var PAGE_LABELS = {
	home: "Home Page",
	about: "About Us",
	facility: "Facility",
	quality: "Quality",
	oem: "OEM / ODM",
	research: "Research & Dev",
	contact: "Contact",
	faq: "FAQ",
	resources: "Resources",
	technology: "Technology",
	products: "Products",
	insights: "Insights / Blog",
	"about-mission": "Mission & Vision",
	"about-network": "Global Network",
	"custom-development": "Custom Development"
};
var PREVIEW_URL = {
	home: "/",
	"about-mission": "/about/mission",
	"about-network": "/about/network"
};
function PageBuilderEditor() {
	const { slug, data: initialData } = Route.useLoaderData();
	const [formData, setFormData] = (0, import_react.useState)(initialData);
	const [saveStatus, setSaveStatus] = (0, import_react.useState)("idle");
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const router = useRouter();
	const sections = SECTION_MAP[slug] ?? [];
	const pageLabel = PAGE_LABELS[slug] ?? slug;
	const previewUrl = PREVIEW_URL[slug] ?? `/${slug}`;
	const setSectionData = (0, import_react.useCallback)((key, val) => {
		setFormData((prev) => ({
			...prev,
			[key]: val
		}));
	}, []);
	const handleSave = async () => {
		setSaveStatus("saving");
		setErrorMsg("");
		try {
			await updatePageData({ data: {
				slug,
				content_json: formData
			} });
			setSaveStatus("saved");
			setTimeout(() => setSaveStatus("idle"), 3e3);
			router.invalidate();
		} catch (e) {
			setSaveStatus("error");
			setErrorMsg(e?.message || "Save failed.");
		}
	};
	const handleReset = () => {
		if (confirm("Reset all changes to the last saved version?")) {
			setFormData(initialData);
			setSaveStatus("idle");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f1f5f9]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200 px-6 py-3 flex items-center gap-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 text-xs text-slate-400 flex-1 min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-3.5 h-3.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							className: "hover:text-slate-600 transition",
							children: "Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3 h-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-slate-700 font-semibold truncate",
							children: pageLabel
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfImport, {
							pageSlug: slug,
							currentData: formData,
							onImport: (merged) => setFormData(merged)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: previewUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold px-3 py-2.5 rounded-xl transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-3.5 h-3.5" }), " Preview"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleReset,
							className: "flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold px-3 py-2.5 rounded-xl transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-3.5 h-3.5" }), " Reset"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleSave,
							disabled: saveStatus === "saving",
							className: `flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl transition ${saveStatus === "saved" ? "bg-green-500 text-white" : saveStatus === "error" ? "bg-red-500 text-white" : "bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-60"}`,
							children: [
								saveStatus === "saving" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin" }),
								saveStatus === "saved" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5" }),
								saveStatus === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-3.5 h-3.5" }),
								saveStatus === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "w-3.5 h-3.5" }),
								saveStatus === "saving" ? "Saving…" : saveStatus === "saved" ? "Saved!" : saveStatus === "error" ? "Error" : "Save Changes"
							]
						})
					]
				})]
			}),
			saveStatus === "error" && errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-6 mt-4 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMsg })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-6 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex items-center gap-4 mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-6 h-6 text-slate-500" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-lg font-bold text-slate-800",
								children: pageLabel
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate-400",
								children: sections.length > 0 ? `${sections.length} editable sections — click any to expand` : "No sections defined for this page yet."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "ml-auto flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] bg-green-100 text-green-700 font-bold px-2.5 py-1 rounded-full",
									children: "Published"
								})
							})
						]
					}), sections.length > 0 ? sections.map((def) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionPanel, {
						slug,
						def,
						data: formData?.[def.key],
						onChange: (val) => setSectionData(def.key, val)
					}, def.key)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-400 text-sm",
						children: "No editor defined for this page yet. Save will still persist raw data."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "w-52 shrink-0 hidden xl:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-20 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white rounded-2xl border border-slate-200 p-4 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3",
								children: "Sections"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1",
								children: sections.map((def) => {
									const Icon = def.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "w-full flex items-center gap-2 text-[11px] text-slate-500 hover:text-slate-800 py-1.5 px-2 rounded-lg hover:bg-slate-50 transition cursor-default",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `w-3 h-3 ${def.color} shrink-0` }), def.label]
									}) }, def.key);
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-800 rounded-2xl p-4 text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold uppercase tracking-widest text-white/50 mb-2",
								children: "Tips"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-2 text-[11px] text-white/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-teal mt-0.5",
											children: "•"
										}), "Click a section to edit"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-teal mt-0.5",
											children: "•"
										}), "Drop or paste image URLs"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-teal mt-0.5",
											children: "•"
										}), "AI PDF auto-fills all sections"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-teal mt-0.5",
											children: "•"
										}), "Save when done"]
									})
								]
							})]
						})]
					})
				})]
			})
		]
	});
}
//#endregion
export { PageBuilderEditor as component };
