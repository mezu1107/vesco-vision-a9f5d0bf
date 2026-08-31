import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Route$21 } from "./router-CozBOSu6.mjs";
import { a as Section, i as Reveal, o as SectionHeading, s as TealButton } from "./primitives-DtnWq5Ev.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BPg_0xrh.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const data = Route$21.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate flex min-h-[70vh] items-center overflow-hidden bg-navy-deep",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: data.hero.image,
					alt: "About Hero",
					className: "absolute inset-0 h-full w-full object-cover opacity-30"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-[1240px] px-6 py-24 md:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "max-w-4xl text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] font-semibold text-white",
							children: data.hero.heading
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-3xl text-[1.0625rem] leading-relaxed text-white/80 whitespace-pre-wrap",
								children: data.hero.copy
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
									to: "/technology",
									children: data.hero.buttons[0]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
									to: "/oem",
									variant: "ghost",
									children: data.hero.buttons[1]
								})]
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: data.whoWeAre.heading,
				title: data.whoWeAre.subheading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-[1.1rem] leading-relaxed text-muted-foreground max-w-4xl",
				children: data.whoWeAre.copy
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: data.whoWeAre.capabilities.map((cap, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-8 outline outline-hairline h-full shadow-sm hover:shadow-md transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[1.1rem] font-semibold text-navy mb-3",
							children: cap.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-[0.95rem] leading-relaxed",
							children: cap.desc
						})]
					})
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-slate-50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1.1fr_1fr] items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: data.scientificApproach.image,
					className: "w-full h-auto aspect-video object-cover",
					alt: "Scientific Approach"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: data.scientificApproach.heading,
					title: data.scientificApproach.subheading
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-[1.05rem] leading-relaxed text-muted-foreground whitespace-pre-wrap",
					children: data.scientificApproach.copy
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
								eyebrow: data.manufacturing.heading,
								title: data.manufacturing.subheading
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-[1.05rem] leading-relaxed text-muted-foreground whitespace-pre-wrap",
								children: data.manufacturing.copy
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex flex-col items-start gap-2",
								children: data.manufacturing.flow.map((flow, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-teal text-white px-4 py-2 font-semibold text-sm rounded-sm",
										children: flow
									}), i < data.manufacturing.flow.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-teal ml-4",
										children: "↓"
									})]
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-[0.95rem] leading-relaxed text-muted-foreground italic",
								children: data.manufacturing.footer
							})
						]
					})
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: data.quality.heading,
				title: data.quality.subheading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-[1.05rem] leading-relaxed text-muted-foreground max-w-4xl whitespace-pre-wrap",
				children: data.quality.copy
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
				children: data.quality.points.map((pt, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: idx * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full bg-background p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[0.8rem] font-bold tracking-[0.15em] text-teal block mb-4",
								children: pt.num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[1.1rem] font-semibold text-navy mb-3",
								children: pt.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-[0.95rem] leading-relaxed",
								children: pt.desc
							})
						]
					})
				}, idx))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-navy text-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: data.partnership.heading,
					title: data.partnership.subheading,
					invert: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-8 text-2xl font-semibold text-teal",
					children: data.partnership.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-[1.05rem] leading-relaxed text-white/80 max-w-4xl",
					children: data.partnership.copy
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 bg-white/5 border border-white/10 p-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "whitespace-pre-wrap font-semibold text-lg",
							children: data.partnership.diagram.left
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl text-teal",
							children: "×"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "whitespace-pre-wrap font-semibold text-lg text-right",
							children: data.partnership.diagram.right
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 bg-teal text-white p-6 text-center whitespace-pre-wrap font-semibold",
					children: data.partnership.platforms
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: data.visionMission.vision.heading,
					title: data.visionMission.vision.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-[1.05rem] leading-relaxed text-muted-foreground whitespace-pre-wrap",
					children: data.visionMission.vision.copy
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: data.visionMission.mission.heading,
						title: data.visionMission.mission.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[1.05rem] leading-relaxed text-muted-foreground whitespace-pre-wrap",
						children: data.visionMission.mission.copy
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-teal text-white py-24 px-6 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[800px] mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "eyebrow !text-white/80 mb-4",
						children: data.finalCta.heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-5xl font-semibold mb-6",
						children: data.finalCta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg md:text-xl text-white/90 mb-10",
						children: data.finalCta.copy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
						to: "/contact",
						className: "!bg-navy !text-white hover:!bg-navy-deep px-8 py-4 text-lg",
						children: data.finalCta.buttonText
					})
				]
			}) })
		})
	] });
}
//#endregion
export { AboutPage as component };
