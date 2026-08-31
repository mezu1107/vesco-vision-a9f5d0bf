import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as CircleAlert, F as Eye, I as EyeOff, x as Lock, y as Mail } from "../_libs/lucide-react.mjs";
import { n as login } from "./admin-auth-D-n88pb4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-login-65Bd-DqM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPass, setShowPass] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		await new Promise((r) => setTimeout(r, 500));
		if (login(email, password)) navigate({ to: "/admin/" });
		else setError("Invalid email or password.");
		setLoading(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#0a1628] flex items-center justify-center px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-10 pointer-events-none",
			style: {
				backgroundImage: "linear-gradient(rgba(20,184,166,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.3) 1px, transparent 1px)",
				backgroundSize: "40px 40px"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 h-10 rounded-lg bg-teal flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#05231f] font-black text-lg",
								children: "V"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-white font-bold text-2xl tracking-tight",
							children: ["Vesco", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-teal font-light",
								children: "Science"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/50 text-sm tracking-wide uppercase",
						children: "Page Builder — Admin"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#111c2d] border border-white/10 rounded-2xl p-8 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-white text-2xl font-semibold mb-1",
							children: "Welcome back"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/50 text-sm mb-8",
							children: "Sign in to access the page builder"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: "admin@example.com",
										required: true,
										className: "w-full bg-white/5 border border-white/10 text-white rounded-lg px-10 py-3 text-sm placeholder:text-white/25 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: showPass ? "text" : "password",
											value: password,
											onChange: (e) => setPassword(e.target.value),
											placeholder: "••••••••",
											required: true,
											className: "w-full bg-white/5 border border-white/10 text-white rounded-lg px-10 py-3 text-sm placeholder:text-white/25 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowPass(!showPass),
											className: "absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition",
											children: showPass ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" })
										})
									]
								})] }),
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 text-red-400 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 shrink-0" }), error]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: loading,
									className: "w-full bg-teal text-[#05231f] font-bold py-3 rounded-lg text-sm tracking-wide uppercase hover:bg-teal/85 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2",
									children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" }), "Signing in…"] }) : "Sign In"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-white/25 text-xs mt-6",
					children: "Vesco Science · PageBuilder CMS"
				})
			]
		})]
	});
}
//#endregion
export { LoginPage as component };
