(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/legal/privacy/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrivacyPolicy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
"use client";
/* ──────────────────── ANIMATED COMPONENTS ──────────────────── */ function FloatingOrb({ size, color, top, left, delay = 0, duration = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        className: "absolute rounded-full pointer-events-none",
        style: {
            width: size,
            height: size,
            top,
            left,
            background: color,
            filter: `blur(${size * 0.6}px)`
        },
        animate: {
            y: [
                0,
                -30,
                10,
                -20,
                0
            ],
            x: [
                0,
                15,
                -10,
                20,
                0
            ],
            scale: [
                1,
                1.1,
                0.95,
                1.05,
                1
            ]
        },
        transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay
        }
    }, void 0, false, {
        fileName: "[project]/app/legal/privacy/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = FloatingOrb;
function AnimatedNumber({ num }) {
    _s();
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-80px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.span, {
        ref: ref,
        className: "inline-block",
        initial: {
            opacity: 0,
            scale: 0,
            rotateY: 90
        },
        animate: isInView ? {
            opacity: 1,
            scale: 1,
            rotateY: 0
        } : {
            opacity: 0,
            scale: 0,
            rotateY: 90
        },
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15
        },
        children: num
    }, void 0, false, {
        fileName: "[project]/app/legal/privacy/page.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(AnimatedNumber, "DljcBprJKYjULUac3YKdUV9OwZQ=", true);
_c1 = AnimatedNumber;
function AnimatedSection({ children, className = "" }) {
    _s1();
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-60px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        ref: ref,
        className: className,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        variants: staggerContainer,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/legal/privacy/page.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s1(AnimatedSection, "DljcBprJKYjULUac3YKdUV9OwZQ=", true);
_c2 = AnimatedSection;
function SectionHeader({ id, num, title, icon: Icon }) {
    _s2();
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-60px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        ref: ref,
        id: id,
        className: "flex items-center gap-5 mb-8 mt-16 pb-5 relative scroll-mt-28",
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                className: "absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-400 via-indigo-300 to-transparent",
                initial: {
                    width: "0%"
                },
                animate: isInView ? {
                    width: "100%"
                } : {
                    width: "0%"
                },
                transition: {
                    duration: 1.2,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ],
                    delay: 0.3
                }
            }, void 0, false, {
                fileName: "[project]/app/legal/privacy/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                className: "flex-shrink-0 w-14 h-14 bg-indigo-600/10 border border-indigo-600/20 text-indigo-600 rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm",
                variants: scaleIn,
                whileHover: {
                    scale: 1.1,
                    rotate: 5,
                    transition: {
                        type: "spring",
                        stiffness: 400
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedNumber, {
                    num: num
                }, void 0, false, {
                    fileName: "[project]/app/legal/privacy/page.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/legal/privacy/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h2, {
                    className: "text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-3",
                    variants: slideRight,
                    children: [
                        title,
                        Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.span, {
                            initial: {
                                opacity: 0,
                                scale: 0
                            },
                            animate: isInView ? {
                                opacity: 1,
                                scale: 1
                            } : {
                                opacity: 0,
                                scale: 0
                            },
                            transition: {
                                delay: 0.5,
                                type: "spring",
                                stiffness: 300,
                                damping: 15
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "w-6 h-6 text-indigo-400"
                            }, void 0, false, {
                                fileName: "[project]/app/legal/privacy/page.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/legal/privacy/page.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/legal/privacy/page.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/legal/privacy/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/legal/privacy/page.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s2(SectionHeader, "DljcBprJKYjULUac3YKdUV9OwZQ=", true);
_c3 = SectionHeader;
function SubSection({ title, children }) {
    _s3();
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-40px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        ref: ref,
        className: "mt-10 mb-8",
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        variants: staggerContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h3, {
                className: "text-xl font-semibold text-slate-700 mb-5 flex items-center gap-2",
                variants: fadeUp,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronRight, {
                        className: "w-5 h-5 text-indigo-400"
                    }, void 0, false, {
                        fileName: "[project]/app/legal/privacy/page.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/app/legal/privacy/page.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-slate-500 space-y-4 leading-relaxed pl-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/legal/privacy/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/legal/privacy/page.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_s3(SubSection, "DljcBprJKYjULUac3YKdUV9OwZQ=", true);
_c4 = SubSection;
function BulletItem({ title, desc, index = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.li, {
        className: "flex gap-4 group",
        variants: fadeUp,
        custom: index,
        whileHover: {
            x: 6,
            transition: {
                type: "spring",
                stiffness: 400
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                className: "w-2.5 h-2.5 rounded-full bg-indigo-600/20 border border-indigo-600/30 mt-2.5 shrink-0 group-hover:bg-indigo-600/50 transition-colors",
                whileHover: {
                    scale: 1.6
                },
                transition: {
                    type: "spring",
                    stiffness: 500
                }
            }, void 0, false, {
                fileName: "[project]/app/legal/privacy/page.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: "text-slate-700 block mb-1",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/legal/privacy/page.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-500",
                        children: desc
                    }, void 0, false, {
                        fileName: "[project]/app/legal/privacy/page.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/legal/privacy/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/legal/privacy/page.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_c5 = BulletItem;
function PolicyTable({ headers, rows }) {
    _s4();
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-40px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        ref: ref,
        className: "overflow-x-auto my-10 rounded-2xl border border-slate-200/80 shadow-sm bg-white/60 backdrop-blur-sm",
        initial: {
            opacity: 0,
            y: 30
        },
        animate: isInView ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 30
        },
        transition: {
            duration: 0.7,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full text-left border-collapse min-w-[600px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "bg-indigo-50/60 border-b border-indigo-100/60",
                        children: headers.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "py-4 px-6 font-semibold text-indigo-700/80 text-sm tracking-wide uppercase",
                                children: h
                            }, i, false, {
                                fileName: "[project]/app/legal/privacy/page.tsx",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/legal/privacy/page.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/legal/privacy/page.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "divide-y divide-slate-100",
                    children: rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.tr, {
                            className: "hover:bg-indigo-50/30 transition-colors",
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: isInView ? {
                                opacity: 1,
                                x: 0
                            } : {
                                opacity: 0,
                                x: -20
                            },
                            transition: {
                                delay: 0.1 + i * 0.05,
                                duration: 0.5,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            children: row.map((cell, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "py-4 px-6 text-slate-500",
                                    children: cell
                                }, j, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 268,
                                    columnNumber: 17
                                }, this))
                        }, i, false, {
                            fileName: "[project]/app/legal/privacy/page.tsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/legal/privacy/page.tsx",
                    lineNumber: 252,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/legal/privacy/page.tsx",
            lineNumber: 239,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/legal/privacy/page.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
_s4(PolicyTable, "DljcBprJKYjULUac3YKdUV9OwZQ=", true);
_c6 = PolicyTable;
function GlassCard({ children, className = "", hoverGlow = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        className: `relative rounded-2xl border border-white/40 bg-white/50 backdrop-blur-md shadow-sm overflow-hidden ${className}`,
        variants: fadeUp,
        whileHover: hoverGlow ? {
            y: -4,
            boxShadow: "0 20px 60px -15px rgba(99,102,241,0.15)",
            borderColor: "rgba(99,102,241,0.3)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        } : {
            y: -2,
            transition: {
                type: "spring",
                stiffness: 300
            }
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/legal/privacy/page.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this);
}
_c7 = GlassCard;
function ScrollProgress() {
    _s5();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        className: "fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-400 origin-left z-[9999]",
        style: {
            scaleX
        }
    }, void 0, false, {
        fileName: "[project]/app/legal/privacy/page.tsx",
        lineNumber: 318,
        columnNumber: 5
    }, this);
}
_s5(ScrollProgress, "UYAOtHxiUth0DU6Git6zGRnUBB4=", true);
_c8 = ScrollProgress;
const contentSections = [
    {
        id: "sec-01",
        num: "01",
        title: "Introduction & Scope"
    },
    {
        id: "sec-02",
        num: "02",
        title: "Information We Collect"
    },
    {
        id: "sec-03",
        num: "03",
        title: "How We Use Your Information"
    },
    {
        id: "sec-04",
        num: "04",
        title: "Sharing Your Information"
    },
    {
        id: "sec-05",
        num: "05",
        title: "Data Storage & Security"
    },
    {
        id: "sec-06",
        num: "06",
        title: "Cookies & Tracking Technologies"
    },
    {
        id: "sec-07",
        num: "07",
        title: "Your Rights & Choices"
    },
    {
        id: "sec-08",
        num: "08",
        title: "Children's Privacy"
    },
    {
        id: "sec-09",
        num: "09",
        title: "Third-Party Links & Services"
    },
    {
        id: "sec-10",
        num: "10",
        title: "Changes to This Policy"
    },
    {
        id: "sec-11",
        num: "11",
        title: "Contact & Grievance Officer"
    }
];
function PrivacyPolicy() {
    _s6();
    const [activeSection, setActiveSection] = useState("sec-01");
    useEffect({
        "PrivacyPolicy.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "PrivacyPolicy.useEffect": (entries)=>{
                    entries.forEach({
                        "PrivacyPolicy.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setActiveSection(entry.target.id);
                            }
                        }
                    }["PrivacyPolicy.useEffect"]);
                }
            }["PrivacyPolicy.useEffect"], {
                rootMargin: "-20% 0px -60% 0px"
            });
            contentSections.forEach({
                "PrivacyPolicy.useEffect": (sec)=>{
                    const el = document.getElementById(sec.id);
                    if (el) observer.observe(el);
                }
            }["PrivacyPolicy.useEffect"]);
            return ({
                "PrivacyPolicy.useEffect": ()=>{
                    contentSections.forEach({
                        "PrivacyPolicy.useEffect": (sec)=>{
                            const el = document.getElementById(sec.id);
                            if (el) observer.unobserve(el);
                        }
                    }["PrivacyPolicy.useEffect"]);
                }
            })["PrivacyPolicy.useEffect"];
        }
    }["PrivacyPolicy.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollProgress, {}, void 0, false, {
                fileName: "[project]/app/legal/privacy/page.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomePageHeader, {}, void 0, false, {
                fileName: "[project]/app/legal/privacy/page.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden bg-gradient-to-b from-indigo-50/40 via-white to-white pt-32 pb-12 border-b border-slate-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingOrb, {
                                size: 300,
                                color: "rgba(99,102,241,0.05)",
                                top: "-5%",
                                left: "-5%",
                                duration: 25
                            }, void 0, false, {
                                fileName: "[project]/app/legal/privacy/page.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingOrb, {
                                size: 250,
                                color: "rgba(129,140,248,0.04)",
                                top: "10%",
                                left: "75%",
                                delay: 3,
                                duration: 22
                            }, void 0, false, {
                                fileName: "[project]/app/legal/privacy/page.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/legal/privacy/page.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-6 md:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-10 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    initial: "hidden",
                                    animate: "visible",
                                    variants: staggerContainer,
                                    className: "text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                            variants: fadeUp,
                                            className: "inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-6 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Shield, {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 17
                                                }, this),
                                                "Legal"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h1, {
                                            className: "text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800 mb-5",
                                            variants: fadeUp,
                                            children: [
                                                "Privacy ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-indigo-600",
                                                    children: "Policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 410,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            className: "text-base md:text-lg text-slate-500 max-w-3xl leading-relaxed mb-8 font-light",
                                            variants: fadeUp,
                                            children: "At Hireance, your privacy is a fundamental priority. This policy explains what personal data we collect, why we collect it, how we protect it, and the choices you have."
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 418,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                            className: "flex flex-wrap items-center gap-3",
                                            variants: fadeUp,
                                            children: [
                                                {
                                                    icon: Clock,
                                                    text: "Effective: January 1, 2026"
                                                },
                                                {
                                                    icon: Clock,
                                                    text: "Last Updated: June 2026"
                                                },
                                                {
                                                    icon: Fingerprint,
                                                    text: "Jurisdiction: India"
                                                },
                                                {
                                                    icon: Lock,
                                                    text: "Applies to all Hireance platforms"
                                                }
                                            ].map((badge, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-2 px-4 py-2 bg-white border border-slate-200/60 rounded-full shadow-sm text-xs font-medium text-slate-500 transition-colors hover:border-indigo-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(badge.icon, {
                                                            className: "w-3.5 h-3.5 text-indigo-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 21
                                                        }, this),
                                                        badge.text
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.85
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.3
                                    },
                                    className: "hidden md:flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative p-6 rounded-3xl bg-indigo-50/50 border border-indigo-100/60 shadow-lg shadow-indigo-100/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Image, {
                                            src: "/PrivacyPolicy.png",
                                            alt: "privacy policy image",
                                            height: 120,
                                            width: 120,
                                            className: "w-auto h-auto max-h-[140px] object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 455,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                        lineNumber: 454,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 448,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/legal/privacy/page.tsx",
                            lineNumber: 393,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/legal/privacy/page.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/legal/privacy/page.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-6 md:px-8 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "hidden lg:block sticky top-28 bg-slate-50/60 border border-slate-200/50 p-6 rounded-2xl w-full max-w-[280px] shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileText, {
                                            size: 16,
                                            className: "text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 468,
                                            columnNumber: 15
                                        }, this),
                                        "Contents"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "space-y-1",
                                    children: contentSections.map((sec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `#${sec.id}`,
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                document.getElementById(sec.id)?.scrollIntoView({
                                                    behavior: "smooth"
                                                });
                                                setActiveSection(sec.id);
                                            },
                                            className: `flex items-start gap-3 py-2.5 px-3 rounded-lg text-xs font-medium transition-all ${activeSection === sec.id ? "bg-indigo-600 text-white shadow-md shadow-indigo-100" : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/70"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-mono text-[10px] ${activeSection === sec.id ? "text-indigo-200" : "text-indigo-400"}`,
                                                    children: sec.num
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: sec.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, sec.id, true, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 473,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/legal/privacy/page.tsx",
                            lineNumber: 466,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-16 lg:pl-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    id: "sec-01",
                                    num: "01",
                                    title: "Introduction & Scope",
                                    icon: Globe
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 499,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            className: "text-slate-500 text-lg leading-relaxed",
                                            variants: fadeUp,
                                            children: "Hierance Services Private Limited (“Hierance”, “we”, “our”, or “us”), a company incorporated under the laws of India with its registered office at 7-1-458 Ameerpet, Hyderabad, Telangana 500016, operates as a next-generation digital services company and is the parent entity of a portfolio of purpose-driven brands including Events Fare, Payblee, Filmskart, and Viral Wave."
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 501,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            className: "text-slate-500 text-lg leading-relaxed mt-5",
                                            variants: fadeUp,
                                            custom: 1,
                                            children: "This Privacy Policy (“Policy”) governs the collection, use, disclosure, and protection of personal information we receive from users across all our websites, mobile applications, platforms, and services (collectively, “Services”). By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Policy."
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 513,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                            className: "relative bg-indigo-50/50 border border-indigo-100/60 rounded-2xl p-7 mt-8 overflow-hidden",
                                            variants: fadeUp,
                                            custom: 2,
                                            whileHover: {
                                                borderColor: "rgba(99,102,241,0.3)",
                                                transition: {
                                                    duration: 0.3
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                    className: "absolute top-0 right-0 w-40 h-40 bg-indigo-200/20 rounded-full -mr-10 -mt-10",
                                                    animate: {
                                                        scale: [
                                                            1,
                                                            1.2,
                                                            1
                                                        ],
                                                        opacity: [
                                                            0.3,
                                                            0.5,
                                                            0.3
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 6,
                                                        repeat: Infinity
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "relative text-indigo-700/80 font-medium leading-relaxed",
                                                    children: "This Policy is compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable provisions of the Information Technology Act, 2000 and its rules. If you are located in the European Economic Area, additional rights under the GDPR may apply."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 527,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            className: "text-slate-500 text-lg leading-relaxed mt-5",
                                            variants: fadeUp,
                                            custom: 3,
                                            children: "This Policy applies to all Hierance platforms and brands. Individual brands may have supplementary privacy notices specific to their services, which should be read alongside this Policy."
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 553,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 500,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    id: "sec-02",
                                    num: "02",
                                    title: "Information We Collect",
                                    icon: Database
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 565,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                        className: "text-slate-500 text-lg mb-8 leading-relaxed",
                                        variants: fadeUp,
                                        children: "We collect personal data only when necessary and with appropriate legal basis. The categories of information we may collect include:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                        lineNumber: 572,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 571,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubSection, {
                                    title: "2.1 Information You Provide Directly",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.ul, {
                                        className: "space-y-5",
                                        variants: staggerContainer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                index: 0,
                                                title: "Account Registration:",
                                                desc: "Name, email address, phone number, password, and profile details when you create an account on any of our platforms."
                                            }, void 0, false, {
                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                lineNumber: 583,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                index: 1,
                                                title: "Transactions:",
                                                desc: "Payment information, billing address, transaction history, and financial account details when you make purchases or payments through Payblee or Events Fare."
                                            }, void 0, false, {
                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                lineNumber: 588,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                index: 2,
                                                title: "Communications:",
                                                desc: "Messages, enquiries, feedback, and correspondence you send to our support or sales teams."
                                            }, void 0, false, {
                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                lineNumber: 593,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                index: 3,
                                                title: "User-Generated Content:",
                                                desc: "Reviews, comments, and content you submit on our platforms including Filmskart and Events Fare."
                                            }, void 0, false, {
                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                lineNumber: 598,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                index: 4,
                                                title: "Influencer & Creator Data:",
                                                desc: "Portfolio information, social media handles, audience metrics, and campaign preferences provided through Viral Wave."
                                            }, void 0, false, {
                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                lineNumber: 603,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                index: 5,
                                                title: "Marketing Preferences:",
                                                desc: "Preferences you set for communications, newsletters, and promotional offers."
                                            }, void 0, false, {
                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                lineNumber: 608,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                        lineNumber: 582,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 581,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubSection, {
                                    title: "2.2 Information Collected Automatically",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.ul, {
                                        className: "space-y-5",
                                        variants: staggerContainer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                index: 0,
                                                title: "Device Information:",
                                                desc: "IP address, browser type, operating system, device identifiers, and mobile network information."
                                            }, void 0, false, {
                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                lineNumber: 618,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                index: 1,
                                                title: "Usage Data:",
                                                desc: "Pages visited, features used, time spent, click patterns, search queries, and interaction data within our Services."
                                            }, void 0, false, {
                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                lineNumber: 623,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                index: 2,
                                                title: "Location Data:",
                                                desc: "General geographic location derived from IP address; precise location only if you grant permission through our mobile applications."
                                            }, void 0, false, {
                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                lineNumber: 628,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                index: 3,
                                                title: "Cookies & Tracking Technologies:",
                                                desc: "Data collected via cookies, web beacons, pixels, and similar technologies. See our Cookie Policy for full details."
                                            }, void 0, false, {
                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                lineNumber: 633,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                index: 4,
                                                title: "Log Data:",
                                                desc: "Server logs including access timestamps, error logs, and referral URLs."
                                            }, void 0, false, {
                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                lineNumber: 638,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                        lineNumber: 617,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 616,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubSection, {
                                    title: "2.3 Information from Third Parties",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.ul, {
                                            className: "space-y-5 mb-8",
                                            variants: staggerContainer,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                    index: 0,
                                                    title: "Social Media Platforms:",
                                                    desc: "Profile data when you connect or log in using Google, Facebook, or other social accounts."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 648,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                    index: 1,
                                                    title: "Payment Processors:",
                                                    desc: "Transaction confirmation and fraud prevention data from partners like PhonePe, Razorpay, Cashfree, and EaseBuzz."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                    index: 2,
                                                    title: "Analytics Providers:",
                                                    desc: "Aggregated behavioural data from analytics services to improve our platforms."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletItem, {
                                                    index: 3,
                                                    title: "Business Partners:",
                                                    desc: "Contact and professional information from partner organisations in connection with B2B services."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 663,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 647,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                            className: "bg-amber-50/50 border border-amber-200/50 rounded-2xl p-6 text-amber-800/80 shadow-sm leading-relaxed",
                                            variants: fadeUp,
                                            custom: 5,
                                            children: "We do not collect sensitive personal data such as biometric data, health information, genetic data, religious beliefs, or caste unless explicitly required by a specific service and with your express consent."
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 670,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 646,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    id: "sec-03",
                                    num: "03",
                                    title: "How We Use Your Information",
                                    icon: FileText
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 683,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                        className: "text-slate-500 text-lg mb-6 leading-relaxed",
                                        variants: fadeUp,
                                        children: "We process your personal data on one or more of the following legal bases: your consent, performance of a contract, legitimate interests, or compliance with a legal obligation."
                                    }, void 0, false, {
                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                        lineNumber: 690,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 689,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PolicyTable, {
                                    headers: [
                                        "Purpose",
                                        "Data Used",
                                        "Legal Basis"
                                    ],
                                    rows: [
                                        [
                                            "Provide and operate our Services",
                                            "Account, payment, transaction data",
                                            "Contract performance"
                                        ],
                                        [
                                            "Process payments and settlements",
                                            "Financial data, transaction records",
                                            "Contract performance"
                                        ],
                                        [
                                            "Send transactional notifications",
                                            "Email, phone, preference data",
                                            "Contract performance"
                                        ],
                                        [
                                            "Improve and personalise Services",
                                            "Usage data, behavioural analytics",
                                            "Legitimate interests"
                                        ],
                                        [
                                            "Send marketing communications",
                                            "Email, name, preferences",
                                            "Consent"
                                        ],
                                        [
                                            "Detect and prevent fraud",
                                            "Device, IP, transaction data",
                                            "Legitimate interests / Legal obligation"
                                        ],
                                        [
                                            "Comply with legal obligations",
                                            "Any data as required by law",
                                            "Legal obligation"
                                        ],
                                        [
                                            "Resolve disputes and enforce terms",
                                            "Relevant account and transaction data",
                                            "Legitimate interests / Legal obligation"
                                        ],
                                        [
                                            "Conduct analytics and research",
                                            "Anonymised / aggregated usage data",
                                            "Legitimate interests"
                                        ],
                                        [
                                            "Match brands with influencers (Viral Wave)",
                                            "Creator profile and campaign data",
                                            "Contract performance / Consent"
                                        ]
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 700,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                        className: "text-slate-500 text-lg leading-relaxed",
                                        variants: fadeUp,
                                        children: "We do not sell your personal data to third parties for their own marketing purposes. We use data only for the purposes described in this Policy unless we obtain your additional consent."
                                    }, void 0, false, {
                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                        lineNumber: 757,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 756,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    id: "sec-04",
                                    num: "04",
                                    title: "Sharing Your Information",
                                    icon: Users
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 768,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                        className: "text-slate-500 text-lg mb-8 leading-relaxed",
                                        variants: fadeUp,
                                        children: "We may share your personal information with the following categories of recipients, and only to the extent necessary:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                        lineNumber: 775,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 774,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    className: "grid md:grid-cols-2 gap-6 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassCard, {
                                            className: "p-7",
                                            hoverGlow: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-slate-700 mb-3 text-lg flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-indigo-400 font-mono",
                                                            children: "4.1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                            lineNumber: 787,
                                                            columnNumber: 17
                                                        }, this),
                                                        " Within the Hierance Group"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-500 leading-relaxed",
                                                    children: "We may share data among our group entities and brands (Events Fare, Payblee, Filmskart, Viral Wave) for integrated service delivery, unified customer support, and fraud prevention. All group entities are bound by this Policy."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 790,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 785,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassCard, {
                                            className: "p-7",
                                            hoverGlow: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-slate-700 mb-3 text-lg flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-indigo-400 font-mono",
                                                            children: "4.3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                            lineNumber: 800,
                                                            columnNumber: 17
                                                        }, this),
                                                        " Legal & Regulatory"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 799,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-500 leading-relaxed",
                                                    children: "We may disclose your information when required to do so by applicable law, court order, government authority, or to protect the rights, property, or safety of Hierance, our users, or the public."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 803,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 798,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassCard, {
                                            className: "p-7 md:col-span-2",
                                            hoverGlow: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-slate-700 mb-5 text-lg flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-indigo-400 font-mono",
                                                            children: "4.2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                            lineNumber: 813,
                                                            columnNumber: 17
                                                        }, this),
                                                        " Service Providers and Partners"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 812,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
                                                    variants: staggerContainer,
                                                    children: [
                                                        {
                                                            name: "Payment Processors",
                                                            desc: "PhonePe, Razorpay, Cashfree, EaseBuzz"
                                                        },
                                                        {
                                                            name: "Banking Partners",
                                                            desc: "Axis Bank, IndusInd Bank"
                                                        },
                                                        {
                                                            name: "Cloud Providers",
                                                            desc: "Data hosting & infrastructure"
                                                        },
                                                        {
                                                            name: "Analytics Providers",
                                                            desc: "Platform monitoring"
                                                        },
                                                        {
                                                            name: "Email Services",
                                                            desc: "Communications"
                                                        },
                                                        {
                                                            name: "Support Tools",
                                                            desc: "User query management"
                                                        }
                                                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                            className: "bg-slate-50/80 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 transition-all duration-300",
                                                            variants: scaleIn,
                                                            custom: i,
                                                            whileHover: {
                                                                y: -3,
                                                                transition: {
                                                                    type: "spring",
                                                                    stiffness: 400
                                                                }
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "text-slate-700 block mb-1 text-sm",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                    lineNumber: 850,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-400 text-sm",
                                                                    children: item.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                    lineNumber: 853,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                            lineNumber: 840,
                                                            columnNumber: 19
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-5 text-sm text-slate-400 italic bg-slate-50/60 p-3 rounded-lg border border-slate-100 inline-block",
                                                    children: "All service providers are contractually required to process data only under our instructions, maintain appropriate security standards, and not use your data for their own purposes."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 857,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 811,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassCard, {
                                            className: "p-7 md:col-span-2",
                                            hoverGlow: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-slate-700 mb-3 text-lg flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-indigo-400 font-mono",
                                                            children: "4.4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                            lineNumber: 866,
                                                            columnNumber: 17
                                                        }, this),
                                                        " Business Transfers"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 865,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-500 leading-relaxed",
                                                    children: "In the event of a merger, acquisition, restructuring, or sale of all or part of our business, your personal data may be transferred to the acquiring entity, subject to equivalent privacy protections."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 869,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 864,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 784,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        className: "relative overflow-hidden bg-gradient-to-r from-indigo-50/70 to-purple-50/50 border border-indigo-100/50 rounded-2xl p-7 text-center",
                                        variants: fadeUp,
                                        whileHover: {
                                            scale: 1.01,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                className: "absolute inset-0 bg-gradient-to-r from-indigo-100/0 via-indigo-100/30 to-indigo-100/0",
                                                animate: {
                                                    x: [
                                                        "-100%",
                                                        "100%"
                                                    ]
                                                },
                                                transition: {
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                lineNumber: 887,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "relative text-indigo-600/80 font-semibold text-lg",
                                                children: "We never sell your personal data to advertisers or data brokers. Any third-party data sharing is governed by data processing agreements and restricted to the stated purposes."
                                            }, void 0, false, {
                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                lineNumber: 896,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                        lineNumber: 879,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 878,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    id: "sec-05",
                                    num: "05",
                                    title: "Data Storage & Security",
                                    icon: Lock
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 905,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubSection, {
                                    title: "5.1 Data Localisation",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                        className: "leading-relaxed",
                                        variants: fadeUp,
                                        children: "In compliance with the DPDP Act, 2023, personal data of Indian residents is stored and processed primarily within India. Where cross-border transfers occur, we ensure appropriate safeguards are in place as required by applicable law."
                                    }, void 0, false, {
                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                        lineNumber: 913,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 912,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubSection, {
                                    title: "5.2 Security Measures",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            className: "mb-8 leading-relaxed",
                                            variants: fadeUp,
                                            children: "We implement industry-standard technical and organisational security measures to protect your data from unauthorised access, disclosure, alteration, or destruction:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 922,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                            className: "grid sm:grid-cols-2 gap-4",
                                            variants: staggerContainer,
                                            children: [
                                                "End-to-end encryption for financial transactions and sensitive data in transit (TLS 1.3)",
                                                "Encryption at rest for stored personal data using AES-256",
                                                "Role-based access controls limiting internal data access to authorised personnel",
                                                "Regular security audits, penetration testing, and vulnerability assessments",
                                                "Multi-factor authentication for administrative systems",
                                                "Incident response procedures for data breach detection and reporting"
                                            ].map((measure, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                    className: "group flex items-start gap-4 bg-white/70 backdrop-blur-sm border border-slate-100 p-5 rounded-2xl shadow-sm cursor-default",
                                                    variants: scaleIn,
                                                    custom: i,
                                                    whileHover: {
                                                        y: -4,
                                                        borderColor: "rgba(99,102,241,0.25)",
                                                        boxShadow: "0 12px 40px -10px rgba(99,102,241,0.1)",
                                                        transition: {
                                                            type: "spring",
                                                            stiffness: 300,
                                                            damping: 20
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                            whileHover: {
                                                                rotate: 15,
                                                                scale: 1.15
                                                            },
                                                            transition: {
                                                                type: "spring",
                                                                stiffness: 400
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Shield, {
                                                                className: "w-6 h-6 text-indigo-400 shrink-0 mt-0.5 group-hover:text-indigo-500 transition-colors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                                lineNumber: 955,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                            lineNumber: 951,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-500 leading-relaxed",
                                                            children: measure
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                            lineNumber: 957,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 939,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 927,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 921,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubSection, {
                                    title: "5.3 Retention Periods",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PolicyTable, {
                                            headers: [
                                                "Data Category",
                                                "Retention Period",
                                                "Basis"
                                            ],
                                            rows: [
                                                [
                                                    "Account data",
                                                    "Duration of account + 2 years post-closure",
                                                    "Contractual / Regulatory"
                                                ],
                                                [
                                                    "Transaction records",
                                                    "7 years from transaction date",
                                                    "Income Tax Act / RBI norms"
                                                ],
                                                [
                                                    "Support communications",
                                                    "3 years from last interaction",
                                                    "Legitimate interests"
                                                ],
                                                [
                                                    "Marketing preferences",
                                                    "Until withdrawal of consent + 90 days",
                                                    "Consent"
                                                ],
                                                [
                                                    "Analytics data",
                                                    "18 months (anonymised thereafter)",
                                                    "Legitimate interests"
                                                ],
                                                [
                                                    "Fraud prevention logs",
                                                    "5 years",
                                                    "Legal obligation"
                                                ],
                                                [
                                                    "KYC documents (Payblee)",
                                                    "Per RBI / PMLA requirements",
                                                    "Legal obligation"
                                                ]
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 966,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            className: "text-slate-500 leading-relaxed",
                                            variants: fadeUp,
                                            children: "Upon expiry of retention periods, data is securely deleted or anonymised. You may request early deletion subject to our legal obligations."
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1002,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 965,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    id: "sec-06",
                                    num: "06",
                                    title: "Cookies & Tracking Technologies",
                                    icon: Eye
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1013,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                        className: "text-slate-500 text-lg leading-relaxed mb-8",
                                        variants: fadeUp,
                                        children: "We use cookies and similar tracking technologies to operate our platforms, understand usage patterns, and deliver personalised experiences. Our full Cookie Policy provides complete details on the types of cookies used, their purposes, and how to manage your preferences."
                                    }, void 0, false, {
                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                        lineNumber: 1020,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1019,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    className: "grid sm:grid-cols-2 gap-5 my-10",
                                    children: [
                                        {
                                            name: "Essential Cookies",
                                            desc: "Required for platform functionality — cannot be disabled.",
                                            color: "from-indigo-500 to-indigo-600"
                                        },
                                        {
                                            name: "Analytics Cookies",
                                            desc: "Help us understand how users interact with our Services.",
                                            color: "from-indigo-400 to-indigo-500"
                                        },
                                        {
                                            name: "Preference Cookies",
                                            desc: "Remember your settings and personalise your experience.",
                                            color: "from-indigo-400 to-purple-400"
                                        },
                                        {
                                            name: "Marketing Cookies",
                                            desc: "Used for relevant advertising — require your consent.",
                                            color: "from-purple-400 to-indigo-400"
                                        }
                                    ].map((cookie, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                            className: "relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-100 p-6 shadow-sm group cursor-default",
                                            variants: scaleIn,
                                            custom: i,
                                            whileHover: {
                                                y: -5,
                                                boxShadow: "0 20px 60px -15px rgba(99,102,241,0.12)",
                                                borderColor: "rgba(99,102,241,0.25)",
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 20
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                    className: `absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cookie.color}`,
                                                    initial: {
                                                        scaleX: 0
                                                    },
                                                    whileInView: {
                                                        scaleX: 1
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        duration: 0.8,
                                                        delay: i * 0.1,
                                                        ease: [
                                                            0.22,
                                                            1,
                                                            0.36,
                                                            1
                                                        ]
                                                    },
                                                    style: {
                                                        transformOrigin: "left"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1067,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-slate-700 block mb-2 text-lg",
                                                    children: cookie.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1079,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: cookie.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1082,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1055,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1032,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                        className: "text-slate-500 text-lg leading-relaxed",
                                        variants: fadeUp,
                                        children: "You can manage cookie preferences through your browser settings or our cookie consent manager. Please note that disabling certain cookies may affect the functionality of our Services."
                                    }, void 0, false, {
                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                        lineNumber: 1088,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1087,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    id: "sec-07",
                                    num: "07",
                                    title: "Your Rights & Choices",
                                    icon: Scale
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1099,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                        className: "text-slate-500 text-lg mb-6 leading-relaxed",
                                        variants: fadeUp,
                                        children: "Subject to applicable law, you have the following rights in relation to your personal data. You may exercise these rights by contacting our Grievance Officer."
                                    }, void 0, false, {
                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                        lineNumber: 1101,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1100,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PolicyTable, {
                                    headers: [
                                        "Right",
                                        "Description",
                                        "Response Time"
                                    ],
                                    rows: [
                                        [
                                            "Access",
                                            "Obtain a copy of the personal data we hold about you",
                                            "30 days"
                                        ],
                                        [
                                            "Correction",
                                            "Rectify inaccurate or incomplete personal data",
                                            "15 days"
                                        ],
                                        [
                                            "Erasure",
                                            "Request deletion of personal data (subject to legal obligations)",
                                            "30 days"
                                        ],
                                        [
                                            "Data Portability",
                                            "Receive your data in a structured, machine-readable format",
                                            "30 days"
                                        ],
                                        [
                                            "Withdraw Consent",
                                            "Withdraw consent for processing based on consent (future only)",
                                            "Immediate"
                                        ],
                                        [
                                            "Opt-out of Marketing",
                                            "Unsubscribe from marketing communications at any time",
                                            "10 business days"
                                        ],
                                        [
                                            "Grievance Redressal",
                                            "Lodge a complaint with our Grievance Officer",
                                            "30 days"
                                        ],
                                        [
                                            "Nomination",
                                            "Nominate a person to exercise rights in case of death/incapacity",
                                            "As applicable"
                                        ]
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1111,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        className: "bg-slate-50/60 backdrop-blur-sm rounded-2xl p-7 mb-8 mt-6 border border-slate-100 shadow-sm",
                                        variants: fadeUp,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 leading-relaxed",
                                            children: [
                                                "To exercise any of these rights, submit a request to",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:privacy@hierance.com",
                                                    className: "text-indigo-500 hover:text-indigo-600 hover:underline font-medium transition-colors",
                                                    children: "privacy@hierance.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1164,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                "or use the contact form on our Contact page. We may need to verify your identity before processing certain requests."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1162,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                        lineNumber: 1158,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1157,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubSection, {
                                    title: "7.1 Marketing Opt-Out",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                        className: "leading-relaxed",
                                        variants: fadeUp,
                                        children: [
                                            "You may unsubscribe from marketing emails at any time by clicking the “Unsubscribe” link in any marketing email or by emailing",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:privacy@hierance.com",
                                                className: "text-indigo-500 hover:text-indigo-600 hover:underline font-medium transition-colors",
                                                children: "privacy@hierance.com"
                                            }, void 0, false, {
                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                lineNumber: 1181,
                                                columnNumber: 15
                                            }, this),
                                            ". Note that you will continue to receive transactional and service-related communications."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                        lineNumber: 1177,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1176,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    id: "sec-08",
                                    num: "08",
                                    title: "Children's Privacy",
                                    icon: Users
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1193,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    className: "text-slate-500 text-lg space-y-5 leading-relaxed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            variants: fadeUp,
                                            children: "Our Services are not directed at children under the age of 18 years. We do not knowingly collect, process, or store personal data from children under 18 without verifiable parental or guardian consent."
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1200,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            variants: fadeUp,
                                            custom: 1,
                                            children: "In accordance with the DPDP Act, 2023, if we become aware that we have inadvertently collected data from a child under 18, we will delete such data promptly and notify the parent or guardian where possible."
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1206,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            variants: fadeUp,
                                            custom: 2,
                                            children: [
                                                "If you are a parent or guardian and believe your child has provided personal data to us without your consent, please contact our Grievance Officer immediately at",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:privacy@hierance.com",
                                                    className: "text-indigo-500 hover:text-indigo-600 hover:underline font-medium transition-colors",
                                                    children: "privacy@hierance.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1216,
                                                    columnNumber: 15
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1212,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-red-50/50 border border-red-100/60 rounded-2xl p-6 text-red-700/70 mt-6 flex gap-4 items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Shield, {
                                                    className: "w-6 h-6 shrink-0 text-red-400 mt-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1225,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium leading-relaxed",
                                                    children: "Payblee's financial services are available only to individuals who are 18 years or older and who have the legal capacity to enter into binding agreements under Indian law."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1226,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1224,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1199,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    id: "sec-09",
                                    num: "09",
                                    title: "Third-Party Links & Services",
                                    icon: Globe
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1235,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    className: "text-slate-500 text-lg space-y-5 leading-relaxed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            variants: fadeUp,
                                            children: "Our platforms may contain links to third-party websites, applications, or services not owned or controlled by Hierance. This Policy does not apply to those third-party services, and we are not responsible for their privacy practices."
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1242,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            variants: fadeUp,
                                            custom: 1,
                                            children: "We encourage you to review the privacy policies of any third-party services you access through our platforms, including but not limited to:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1248,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.ul, {
                                            className: "space-y-3 mt-4 mb-6",
                                            variants: staggerContainer,
                                            children: [
                                                "Payment gateway providers (PhonePe, Razorpay, Cashfree, EaseBuzz)",
                                                "Social media platforms used for login or content sharing",
                                                "Event venues and organisers listed on Events Fare",
                                                "Film studios and merchandise manufacturers on Filmskart"
                                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.li, {
                                                    className: "flex items-center gap-3 group",
                                                    variants: slideRight,
                                                    custom: i,
                                                    whileHover: {
                                                        x: 8,
                                                        transition: {
                                                            type: "spring",
                                                            stiffness: 400
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                            className: "w-2.5 h-2.5 rounded-full bg-indigo-600/20 border border-indigo-600/30 mt-2 shrink-0 group-hover:bg-indigo-600/50 transition-colors",
                                                            whileHover: {
                                                                scale: 1.6
                                                            },
                                                            transition: {
                                                                type: "spring",
                                                                stiffness: 500
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                            lineNumber: 1273,
                                                            columnNumber: 19
                                                        }, this),
                                                        item
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1263,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1253,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            variants: fadeUp,
                                            custom: 3,
                                            children: "Third-party integrations are selected for their compliance with applicable data protection standards, but Hierance accepts no liability for their independent data handling practices."
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1282,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1241,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    id: "sec-10",
                                    num: "10",
                                    title: "Changes to This Policy",
                                    icon: Bell
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1290,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    className: "text-slate-500 text-lg space-y-5 leading-relaxed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            variants: fadeUp,
                                            children: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1297,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.ul, {
                                            className: "space-y-3",
                                            variants: staggerContainer,
                                            children: [
                                                'Update the "Last Updated" date at the top of this page',
                                                "Send an email notification to registered users where the changes are significant",
                                                "Display a prominent notice on our platforms for at least 30 days",
                                                "Where required by law, seek your renewed consent"
                                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.li, {
                                                    className: "flex items-center gap-3 group",
                                                    variants: slideRight,
                                                    custom: i,
                                                    whileHover: {
                                                        x: 8,
                                                        transition: {
                                                            type: "spring",
                                                            stiffness: 400
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                            className: "w-2.5 h-2.5 rounded-full  border border-indigo-600/30 mt-2 shrink-0 group-hover:bg-indigo-600/50 transition-colors",
                                                            whileHover: {
                                                                scale: 1.6
                                                            },
                                                            transition: {
                                                                type: "spring",
                                                                stiffness: 500
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                            lineNumber: 1322,
                                                            columnNumber: 19
                                                        }, this),
                                                        item
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1312,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1302,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            variants: fadeUp,
                                            custom: 2,
                                            children: "Your continued use of our Services after the effective date of any changes constitutes your acceptance of the revised Policy. If you do not agree with any changes, you should discontinue use of our Services and contact us to close your account."
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1331,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            variants: fadeUp,
                                            custom: 3,
                                            children: "We maintain an archive of previous versions of this Policy. You may request a copy of any previous version by contacting our Grievance Officer."
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1337,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1296,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    id: "sec-11",
                                    num: "11",
                                    title: "Contact & Grievance Officer",
                                    icon: Phone
                                }, void 0, false, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1345,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSection, {
                                    className: "text-slate-500 text-lg space-y-6 leading-relaxed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            variants: fadeUp,
                                            children: "In accordance with the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023, Hierance has appointed a Grievance Officer to address privacy-related concerns. If you have any questions, complaints, or requests regarding this Policy or our data practices, please contact:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1352,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                            className: "relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white rounded-[2rem] p-10 md:p-14 shadow-2xl overflow-hidden mt-10 mb-6",
                                            variants: fadeUp,
                                            custom: 1,
                                            whileHover: {
                                                scale: 1.005,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 200,
                                                    damping: 20
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                    className: "absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none",
                                                    style: {
                                                        background: "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)"
                                                    },
                                                    animate: {
                                                        scale: [
                                                            1,
                                                            1.2,
                                                            1
                                                        ],
                                                        x: [
                                                            0,
                                                            20,
                                                            0
                                                        ],
                                                        y: [
                                                            0,
                                                            -20,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 8,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1370,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                    className: "absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none",
                                                    style: {
                                                        background: "radial-gradient(circle, rgba(129,140,248,0.1), transparent 70%)"
                                                    },
                                                    animate: {
                                                        scale: [
                                                            1,
                                                            1.3,
                                                            1
                                                        ],
                                                        x: [
                                                            0,
                                                            -15,
                                                            0
                                                        ],
                                                        y: [
                                                            0,
                                                            15,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 10,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                        delay: 2
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1387,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 opacity-[0.03]",
                                                    style: {
                                                        backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                                                        backgroundSize: "40px 40px"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1406,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h3, {
                                                    className: "text-3xl md:text-4xl font-bold mb-10 text-indigo-300 relative z-10",
                                                    initial: {
                                                        opacity: 0,
                                                        y: 20
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        duration: 0.6,
                                                        delay: 0.3
                                                    },
                                                    children: "Grievance Officer — Hierance"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1414,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid md:grid-cols-2 gap-10 relative z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                                    className: "flex gap-5 group",
                                                                    whileHover: {
                                                                        x: 5,
                                                                        transition: {
                                                                            type: "spring",
                                                                            stiffness: 400
                                                                        }
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "bg-white/10 backdrop-blur-sm p-3.5 rounded-xl h-fit border border-white/5 group-hover:bg-white/15 transition-colors",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapPin, {
                                                                                className: "w-6 h-6 text-indigo-300 shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                lineNumber: 1434,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                                            lineNumber: 1433,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-semibold text-white text-xl mb-2",
                                                                                    children: "Registered Office"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                    lineNumber: 1437,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-slate-400 leading-relaxed",
                                                                                    children: [
                                                                                        "Hierance Services Private Limited",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                            lineNumber: 1442,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        "7-1-458 Ameerpet, Hyderabad",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                            lineNumber: 1444,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        "Telangana, India — 500016"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                    lineNumber: 1440,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                                            lineNumber: 1436,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                    lineNumber: 1426,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                                    className: "flex gap-5 group",
                                                                    whileHover: {
                                                                        x: 5,
                                                                        transition: {
                                                                            type: "spring",
                                                                            stiffness: 400
                                                                        }
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "bg-white/10 backdrop-blur-sm p-3.5 rounded-xl h-fit border border-white/5 group-hover:bg-white/15 transition-colors",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Clock, {
                                                                                className: "w-6 h-6 text-indigo-300 shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                lineNumber: 1458,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                                            lineNumber: 1457,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-semibold text-white text-xl mb-2",
                                                                                    children: "Operating Hours"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                    lineNumber: 1461,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-slate-400 leading-relaxed",
                                                                                    children: [
                                                                                        "Monday – Saturday",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                            lineNumber: 1466,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        "9:00 AM – 7:00 PM IST"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                    lineNumber: 1464,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                                            lineNumber: 1460,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                    lineNumber: 1450,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                            lineNumber: 1425,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                                    className: "flex gap-5 group",
                                                                    whileHover: {
                                                                        x: 5,
                                                                        transition: {
                                                                            type: "spring",
                                                                            stiffness: 400
                                                                        }
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "bg-white/10 backdrop-blur-sm p-3.5 rounded-xl h-fit border border-white/5 group-hover:bg-white/15 transition-colors",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mail, {
                                                                                className: "w-6 h-6 text-indigo-300 shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                lineNumber: 1482,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                                            lineNumber: 1481,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-semibold text-white text-xl mb-2",
                                                                                    children: "Email"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                    lineNumber: 1485,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-slate-400",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-slate-500 block text-xs mb-1 uppercase tracking-[0.15em] font-semibold",
                                                                                                    children: "Privacy queries"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                                    lineNumber: 1490,
                                                                                                    columnNumber: 27
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                    href: "mailto:privacy@hierance.com",
                                                                                                    className: "hover:text-white transition-colors text-indigo-300 text-lg",
                                                                                                    children: "privacy@hierance.com"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                                    lineNumber: 1493,
                                                                                                    columnNumber: 27
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                            lineNumber: 1489,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-slate-400",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-slate-500 block text-xs mb-1 uppercase tracking-[0.15em] font-semibold",
                                                                                                    children: "General queries"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                                    lineNumber: 1501,
                                                                                                    columnNumber: 27
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                    href: "mailto:info@hierance.com",
                                                                                                    className: "hover:text-white transition-colors text-indigo-300 text-lg",
                                                                                                    children: "info@hierance.com"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                                    lineNumber: 1504,
                                                                                                    columnNumber: 27
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                            lineNumber: 1500,
                                                                                            columnNumber: 25
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                    lineNumber: 1488,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                                            lineNumber: 1484,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                    lineNumber: 1474,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                                    className: "flex gap-5 group",
                                                                    whileHover: {
                                                                        x: 5,
                                                                        transition: {
                                                                            type: "spring",
                                                                            stiffness: 400
                                                                        }
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "bg-white/10 backdrop-blur-sm p-3.5 rounded-xl h-fit border border-white/5 group-hover:bg-white/15 transition-colors",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Phone, {
                                                                                className: "w-6 h-6 text-indigo-300 shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                lineNumber: 1523,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                                            lineNumber: 1522,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-semibold text-white text-xl mb-2",
                                                                                    children: "Phone"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                    lineNumber: 1526,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-slate-400 text-lg",
                                                                                    children: "040 47088764"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                                    lineNumber: 1529,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                                            lineNumber: 1525,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                                    lineNumber: 1515,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                                            lineNumber: 1473,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1424,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                    className: "mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10",
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    whileInView: {
                                                        opacity: 1
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        delay: 0.8
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.span, {
                                                        className: "bg-indigo-500/15 text-indigo-300 px-6 py-3 rounded-full text-sm font-medium border border-indigo-500/20 flex items-center gap-2 backdrop-blur-sm",
                                                        whileHover: {
                                                            scale: 1.05,
                                                            backgroundColor: "rgba(99,102,241,0.25)",
                                                            transition: {
                                                                type: "spring",
                                                                stiffness: 400
                                                            }
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Clock, {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/legal/privacy/page.tsx",
                                                                lineNumber: 1550,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Expected Response Time: Within 30 days"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/legal/privacy/page.tsx",
                                                        lineNumber: 1542,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                                    lineNumber: 1535,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1361,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                            className: "p-7 bg-slate-50/60 backdrop-blur-sm border border-slate-100 rounded-2xl text-slate-400 italic leading-relaxed shadow-sm",
                                            variants: fadeUp,
                                            custom: 3,
                                            children: "If you are not satisfied with our response, you have the right to lodge a complaint with the Data Protection Board of India once established under the DPDP Act, 2023, or with any other applicable supervisory authority."
                                        }, void 0, false, {
                                            fileName: "[project]/app/legal/privacy/page.tsx",
                                            lineNumber: 1556,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/legal/privacy/page.tsx",
                                    lineNumber: 1351,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/legal/privacy/page.tsx",
                            lineNumber: 497,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/legal/privacy/page.tsx",
                    lineNumber: 464,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/legal/privacy/page.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/app/legal/privacy/page.tsx",
                lineNumber: 1571,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/legal/privacy/page.tsx",
        lineNumber: 368,
        columnNumber: 5
    }, this);
}
_s6(PrivacyPolicy, "prYG50kFBPHg1vTzXfUA8D0vElk=");
_c9 = PrivacyPolicy;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "FloatingOrb");
__turbopack_context__.k.register(_c1, "AnimatedNumber");
__turbopack_context__.k.register(_c2, "AnimatedSection");
__turbopack_context__.k.register(_c3, "SectionHeader");
__turbopack_context__.k.register(_c4, "SubSection");
__turbopack_context__.k.register(_c5, "BulletItem");
__turbopack_context__.k.register(_c6, "PolicyTable");
__turbopack_context__.k.register(_c7, "GlassCard");
__turbopack_context__.k.register(_c8, "ScrollProgress");
__turbopack_context__.k.register(_c9, "PrivacyPolicy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_legal_privacy_page_tsx_3388162b._.js.map