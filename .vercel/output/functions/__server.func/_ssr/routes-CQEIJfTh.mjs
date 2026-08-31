import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as Route$21 } from "./router-RzC8V2F6.mjs";
import { a as Section, i as Reveal, o as SectionHeading, s as TealButton } from "./primitives-DtnWq5Ev.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CQEIJfTh.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const data = Route$21.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate flex min-h-[92vh] items-center overflow-hidden bg-navy-deep",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: data.hero.image,
					alt: "Hero background",
					className: "absolute inset-0 h-full w-full object-cover opacity-40",
					style: { animation: "vs-slow-zoom 26s ease-in-out infinite alternate" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 navy-grid opacity-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-[1240px] px-6 pt-28 pb-24 md:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "max-w-4xl text-[clamp(2.4rem,5.6vw,4.4rem)] leading-[1.03] font-semibold text-white",
							children: data.hero.heading
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-display text-[clamp(1.05rem,1.7vw,1.4rem)] text-teal",
								children: data.hero.subheading
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 220,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-white/70 whitespace-pre-wrap",
								children: data.hero.body
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 320,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-11",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
									to: "/technology",
									children: data.hero.buttonText
								})
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-background py-6 border-b border-hairline",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center gap-6 px-6 md:justify-between text-navy/80 text-[0.92rem] font-medium tracking-wide",
				children: data.trustBar.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }), i < data.trustBar.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-teal/40 hidden md:inline",
						children: "•"
					})]
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: data.about.smallHeading,
					title: data.about.mainHeading
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-[1.05rem] leading-relaxed text-muted-foreground whitespace-pre-wrap",
					children: data.about.copy
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
						to: "/about",
						variant: "outline",
						children: data.about.buttonText
					})
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 140,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: data.about.image,
					alt: "Lab / scientist / facility",
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: data.coreTechnology.heading }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: data.coreTechnology.cards.map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full border-t-2 border-teal/70 bg-background p-7 hover:shadow-lg transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-[0.8rem] font-bold text-teal",
									children: card.num
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-[1.02rem] font-semibold text-navy",
									children: card.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[0.9rem] leading-relaxed text-muted-foreground",
									children: card.body
								})
							]
						})
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 text-center md:text-left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/technology",
							variant: "outline",
							children: data.coreTechnology.buttonText
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-navy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: data.exosomeSection.image,
					alt: "Exosome Technology",
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover opacity-25"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-navy-deep/95 via-navy/85 to-navy-deep/95" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-14 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: data.exosomeSection.leftHeading,
							title: data.exosomeSection.leftSubheading,
							invert: true
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 150,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-teal mb-6 font-display font-medium tracking-wide uppercase",
								children: "Scientific Process"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-3",
								children: data.exosomeSection.process.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-white/10 text-white/90 px-5 py-3 border border-white/20 inline-block font-semibold rounded-sm self-start",
										children: step
									}), i < data.exosomeSection.process.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-teal font-bold ml-6 my-1",
										children: "↓"
									})]
								}, i))
							})] })
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: data.manufacturing.heading }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-[1.05rem] leading-relaxed text-muted-foreground max-w-3xl whitespace-pre-wrap",
					children: data.manufacturing.copy
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex flex-col md:flex-row items-center gap-4 text-navy font-semibold text-lg",
					children: data.manufacturing.steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 100,
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-6 py-3 bg-hairline rounded-sm border border-navy/10",
								children: step
							}),
							i < data.manufacturing.steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-teal font-bold hidden md:inline",
								children: "→"
							}),
							i < data.manufacturing.steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-teal font-bold md:hidden",
								children: "↓"
							})
						]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/oem",
							children: data.manufacturing.buttonText
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-slate-50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: data.quality.heading }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-4 sm:grid-cols-2",
						children: data.quality.points.map((pt, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-teal shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-navy font-medium",
								children: pt
							})]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/quality",
							variant: "outline",
							children: data.quality.buttonText
						})
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: data.quality.image,
						alt: "Quality built in every stage",
						loading: "lazy",
						className: "aspect-[4/3] w-full object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-teal text-white py-20 px-6 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[800px] mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-5xl font-semibold mb-6",
						children: data.finalCta.heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg md:text-xl text-white/90 mb-10",
						children: data.finalCta.copy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4 justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/contact",
							className: "!bg-navy !text-white hover:!bg-navy-deep",
							children: data.finalCta.buttons[0]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/contact",
							className: "!bg-transparent border border-white hover:!bg-white/10",
							children: data.finalCta.buttons[1]
						})]
					})
				]
			}) })
		})
	] });
}
//#endregion
export { Home as component };
