(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const JobApplicantCard = ({ applicantId, jobId, profilePicture, applicantFullName, currentJobPosition, currentOrganization, location, experience, skills, salaryRange, linkedIn, github, twitter, gmail, lastUpdate, status, matchScore })=>{
    const statusStyles = {
        "New": "bg-blue-50 text-blue-700 border-blue-200/60",
        "Shortlisted": "bg-emerald-50 text-emerald-700 border-emerald-200/60",
        "Interviewed": "bg-purple-50 text-purple-700 border-purple-200/60",
        "Rejected": "bg-rose-50 text-rose-700 border-rose-200/60"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "bg-white rounded-3xl p-6 border border-slate-100 hover:shadow-xl hover:shadow-indigo-50/40 hover:-translate-y-0.5 transition-all duration-300 relative group overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:flex-row gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-20 w-20 rounded-2xl bg-slate-100 overflow-hidden border-2 border-white shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300",
                                    children: profilePicture ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: profilePicture,
                                        alt: applicantFullName,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl font-bold",
                                        children: applicantFullName.charAt(0)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute -bottom-2 -right-2 px-3 py-1 rounded-lg border text-[10px] font-bold uppercase tracking-wider shadow-sm ${statusStyles[status] || statusStyles.New}`,
                                    children: status
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight tracking-tight",
                                    children: applicantFullName
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[14px] font-semibold text-slate-500",
                                    children: [
                                        currentJobPosition,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-300 mx-1",
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                            lineNumber: 99,
                                            columnNumber: 36
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400 font-medium",
                                            children: currentOrganization
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                            lineNumber: 99,
                                            columnNumber: 83
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-4 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-[12px] font-semibold text-slate-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-1.5 rounded-lg bg-rose-50 text-rose-500 border border-rose-100/60",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 14,
                                                        strokeWidth: 2.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                location
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-[12px] font-semibold text-slate-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-1.5 rounded-lg bg-blue-50 text-blue-500 border border-blue-100/60",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                        size: 14,
                                                        strokeWidth: 2.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                experience,
                                                " Years Exp."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-[12px] font-semibold text-slate-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-1.5 rounded-lg bg-emerald-50 text-emerald-500 border border-emerald-100/60",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                        size: 14,
                                                        strokeWidth: 2.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "₹",
                                                salaryRange,
                                                " LPA"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 mb-6",
                            children: [
                                skills.slice(0, 5).map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1.5 rounded-xl bg-slate-50 text-slate-500 text-[11px] font-semibold tracking-wide border border-slate-100/80 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100 transition-colors cursor-default",
                                        children: skill
                                    }, skill, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))),
                                skills.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1.5 rounded-xl bg-slate-50 text-slate-400 text-[11px] font-semibold border border-slate-100/80",
                                    children: [
                                        "+",
                                        skills.length - 5,
                                        " More"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-4 mt-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        github && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: github,
                                            className: "p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all border border-slate-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                size: 16,
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        linkedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: linkedIn,
                                            className: "p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-white hover:shadow-sm transition-all border border-slate-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                size: 16,
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        gmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `mailto:${gmail}`,
                                            className: "p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-rose-500 hover:bg-white hover:shadow-sm transition-all border border-slate-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 16,
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                                lineNumber: 153,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/dashboard/recruiter/jobs/${jobId}/applicants/${applicantId}`,
                                            className: "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 text-[13px] font-bold hover:bg-slate-50 transition-all group/btn",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    size: 15,
                                                    strokeWidth: 2,
                                                    className: "opacity-70"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "View Profile",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    size: 14,
                                                    strokeWidth: 2.5,
                                                    className: "group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-[13px] font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    size: 15,
                                                    strokeWidth: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Contact"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = JobApplicantCard;
const __TURBOPACK__default__export__ = JobApplicantCard;
var _c;
__turbopack_context__.k.register(_c, "JobApplicantCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const JobApplicantCardSkeleton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " w-full rounded-xl border border-neutral-200 bg-white p-4 animate-pulse ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 rounded-full bg-neutral-200"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-40 rounded bg-neutral-200"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                                        lineNumber: 18,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-3 w-32 rounded bg-neutral-200"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-3 w-24 rounded bg-neutral-200"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-24 rounded bg-neutral-200"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3 w-20 rounded bg-neutral-200"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-16 rounded-full bg-neutral-200"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-20 rounded-full bg-neutral-200"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-14 rounded-full bg-neutral-200"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-5 w-5 rounded-full bg-neutral-200"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-5 w-5 rounded-full bg-neutral-200"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-5 w-5 rounded-full bg-neutral-200"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-5 w-5 rounded-full bg-neutral-200"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 w-28 rounded-lg bg-neutral-200"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 w-20 rounded-lg bg-neutral-200"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = JobApplicantCardSkeleton;
const __TURBOPACK__default__export__ = JobApplicantCardSkeleton;
var _c;
__turbopack_context__.k.register(_c, "JobApplicantCardSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/recruiter/jobs/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* -------------------------------------------------------
   MOCK JOBS DATA
------------------------------------------------------- */ __turbopack_context__.s([
    "MOCK_APPLICANTS",
    ()=>MOCK_APPLICANTS,
    "MOCK_JOBS",
    ()=>MOCK_JOBS
]);
const MOCK_JOBS = [
    {
        jobId: "job-1000",
        companyName: "Hireance",
        jobTitle: "Senior Frontend Engineer",
        exp: "3-5",
        location: "Remote",
        status: "Open",
        jobType: "Full-time",
        applications: 145,
        shortlisted: 12,
        postedOn: "2 days ago",
        lastActivity: "1 hr ago"
    },
    {
        jobId: "job-1001",
        companyName: "Hireance",
        jobTitle: "DevOps Specialist",
        exp: "5-8",
        location: "Jaipur, India",
        status: "Open",
        jobType: "Full-time",
        applications: 89,
        shortlisted: 8,
        postedOn: "4 days ago",
        lastActivity: "3 hrs ago"
    },
    {
        jobId: "job-1002",
        companyName: "Hireance",
        jobTitle: "FullStack AI Engineer",
        exp: "1-3",
        location: "Bangalore, India",
        status: "Open",
        jobType: "Contract",
        applications: 210,
        shortlisted: 15,
        postedOn: "1 day ago",
        lastActivity: "30 mins ago"
    },
    {
        jobId: "job-1003",
        companyName: "Hireance",
        jobTitle: "Machine Learning Trainer",
        exp: "5-8",
        location: "Remote",
        status: "Draft",
        jobType: "Part-time",
        applications: 0,
        shortlisted: 0,
        postedOn: "Just now",
        lastActivity: "Just now"
    },
    {
        jobId: "job-1004",
        companyName: "Hireance",
        jobTitle: "Backend Developer",
        exp: "3-5",
        location: "New York, USA",
        status: "Open",
        jobType: "Full-time",
        applications: 167,
        shortlisted: 22,
        postedOn: "6 days ago",
        lastActivity: "5 hrs ago"
    },
    {
        jobId: "job-1005",
        companyName: "Hireance",
        jobTitle: "Product Manager",
        exp: "8+",
        location: "London, UK",
        status: "Closed",
        jobType: "Full-time",
        applications: 342,
        shortlisted: 45,
        postedOn: "14 days ago",
        lastActivity: "2 days ago"
    },
    {
        jobId: "job-1006",
        companyName: "Hireance",
        jobTitle: "UI/UX Designer",
        exp: "1-3",
        location: "Remote",
        status: "Open",
        jobType: "Contract",
        applications: 94,
        shortlisted: 6,
        postedOn: "3 days ago",
        lastActivity: "4 hrs ago"
    },
    {
        jobId: "job-1007",
        companyName: "Hireance",
        jobTitle: "Data Scientist",
        exp: "3-5",
        location: "Bangalore, India",
        status: "Open",
        jobType: "Full-time",
        applications: 123,
        shortlisted: 18,
        postedOn: "5 days ago",
        lastActivity: "6 hrs ago"
    },
    {
        jobId: "job-1008",
        companyName: "Hireance",
        jobTitle: "Mobile Developer",
        exp: "2-4",
        location: "San Francisco, USA",
        status: "Open",
        jobType: "Full-time",
        applications: 78,
        shortlisted: 9,
        postedOn: "7 days ago",
        lastActivity: "1 day ago"
    },
    {
        jobId: "job-1009",
        companyName: "Hireance",
        jobTitle: "Cloud Architect",
        exp: "10+",
        location: "Remote",
        status: "Open",
        jobType: "Full-time",
        applications: 45,
        shortlisted: 12,
        postedOn: "10 days ago",
        lastActivity: "4 hrs ago"
    },
    {
        jobId: "job-1010",
        companyName: "Hireance",
        jobTitle: "QA Engineer",
        exp: "2-5",
        location: "Jaipur, India",
        status: "Open",
        jobType: "Full-time",
        applications: 112,
        shortlisted: 14,
        postedOn: "9 days ago",
        lastActivity: "8 hrs ago"
    },
    {
        jobId: "job-1011",
        companyName: "Hireance",
        jobTitle: "Cybersecurity Analyst",
        exp: "3-6",
        location: "London, UK",
        status: "Open",
        jobType: "Full-time",
        applications: 67,
        shortlisted: 5,
        postedOn: "12 days ago",
        lastActivity: "2 hrs ago"
    },
    {
        jobId: "job-1012",
        companyName: "Hireance",
        jobTitle: "Marketing Lead",
        exp: "5-7",
        location: "Remote",
        status: "Open",
        jobType: "Full-time",
        applications: 156,
        shortlisted: 20,
        postedOn: "1 day ago",
        lastActivity: "1 hr ago"
    },
    {
        jobId: "job-1013",
        companyName: "Hireance",
        jobTitle: "Technical Writer",
        exp: "2-4",
        location: "Bangalore, India",
        status: "Open",
        jobType: "Contract",
        applications: 34,
        shortlisted: 3,
        postedOn: "15 days ago",
        lastActivity: "3 days ago"
    },
    {
        jobId: "job-1014",
        companyName: "Hireance",
        jobTitle: "Customer Success",
        exp: "1-3",
        location: "Remote",
        status: "Open",
        jobType: "Full-time",
        applications: 203,
        shortlisted: 15,
        postedOn: "2 days ago",
        lastActivity: "6 hrs ago"
    },
    {
        jobId: "job-1015",
        companyName: "Hireance",
        jobTitle: "Data Engineer",
        exp: "4-7",
        location: "New York, USA",
        status: "Open",
        jobType: "Full-time",
        applications: 82,
        shortlisted: 11,
        postedOn: "4 days ago",
        lastActivity: "5 hrs ago"
    },
    {
        jobId: "job-1016",
        companyName: "Hireance",
        jobTitle: "Frontend Intern",
        exp: "0-1",
        location: "Remote",
        status: "Open",
        jobType: "Full-time",
        applications: 540,
        shortlisted: 30,
        postedOn: "3 days ago",
        lastActivity: "1 hr ago"
    },
    {
        jobId: "job-1017",
        companyName: "Hireance",
        jobTitle: "HR Generalist",
        exp: "3-5",
        location: "Jaipur, India",
        status: "Open",
        jobType: "Full-time",
        applications: 76,
        shortlisted: 8,
        postedOn: "11 days ago",
        lastActivity: "1 day ago"
    },
    {
        jobId: "job-1018",
        companyName: "Hireance",
        jobTitle: "iOS Developer",
        exp: "4-6",
        location: "London, UK",
        status: "Open",
        jobType: "Full-time",
        applications: 43,
        shortlisted: 6,
        postedOn: "13 days ago",
        lastActivity: "4 hrs ago"
    },
    {
        jobId: "job-1019",
        companyName: "Hireance",
        jobTitle: "Android Developer",
        exp: "4-6",
        location: "Bangalore, India",
        status: "Open",
        jobType: "Full-time",
        applications: 51,
        shortlisted: 7,
        postedOn: "14 days ago",
        lastActivity: "5 hrs ago"
    },
    {
        jobId: "job-1020",
        companyName: "Hireance",
        jobTitle: "Business Analyst",
        exp: "3-5",
        location: "Remote",
        status: "Open",
        jobType: "Full-time",
        applications: 122,
        shortlisted: 15,
        postedOn: "5 days ago",
        lastActivity: "2 hrs ago"
    },
    {
        jobId: "job-1021",
        companyName: "Hireance",
        jobTitle: "System Admin",
        exp: "5-8",
        location: "New York, USA",
        status: "Closed",
        jobType: "Full-time",
        applications: 65,
        shortlisted: 9,
        postedOn: "20 days ago",
        lastActivity: "1 week ago"
    },
    {
        jobId: "job-1022",
        companyName: "Hireance",
        jobTitle: "Growth Hacker",
        exp: "2-5",
        location: "Remote",
        status: "Open",
        jobType: "Contract",
        applications: 187,
        shortlisted: 24,
        postedOn: "6 days ago",
        lastActivity: "3 hrs ago"
    },
    {
        jobId: "job-1023",
        companyName: "Hireance",
        jobTitle: "Unity Developer",
        exp: "3-6",
        location: "Bangalore, India",
        status: "Open",
        jobType: "Full-time",
        applications: 29,
        shortlisted: 4,
        postedOn: "21 days ago",
        lastActivity: "2 days ago"
    },
    {
        jobId: "job-1024",
        companyName: "Hireance",
        jobTitle: "Python Developer",
        exp: "2-5",
        location: "Remote",
        status: "Open",
        jobType: "Full-time",
        applications: 312,
        shortlisted: 35,
        postedOn: "2 days ago",
        lastActivity: "30 mins ago"
    },
    {
        jobId: "job-1025",
        companyName: "Hireance",
        jobTitle: "Legal Counsel",
        exp: "7+",
        location: "London, UK",
        status: "Open",
        jobType: "Full-time",
        applications: 18,
        shortlisted: 3,
        postedOn: "25 days ago",
        lastActivity: "1 day ago"
    }
];
const MOCK_APPLICANTS = [
    {
        applicantId: "app-2000",
        profilePicture: "https://media.istockphoto.com/id/2203067311/photo/young-female-teacher-with-curly-hair-in-classroom-smiling-at-camera-with-arms-crossed.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWdN0e5FstxltxR6bWZ2y0BGH3hAmRb8iMYU-S9Q6uM=",
        applicantFullName: "Sarah Johnson",
        currentJobPosition: "Senior Frontend Developer",
        currentOrganization: "Google",
        location: "San Francisco, USA",
        experience: 5,
        skills: [
            "React",
            "TypeScript",
            "GraphQL",
            "Redux"
        ],
        salaryRange: "15 - 20",
        lastUpdate: 1,
        linkedIn: "https://linkedin.com/in/sarah",
        github: "https://github.com/sarah",
        twitter: "https://twitter.com/sarah",
        gmail: "sarah@example.com",
        status: "Shortlisted",
        matchScore: 94
    },
    {
        applicantId: "app-2001",
        profilePicture: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D",
        applicantFullName: "Raj Kumar",
        currentJobPosition: "Backend Engineer",
        currentOrganization: "Amazon",
        location: "Bangalore, India",
        experience: 4,
        skills: [
            "Node.js",
            "Python",
            "AWS",
            "MongoDB"
        ],
        salaryRange: "12 - 18",
        lastUpdate: 2,
        linkedIn: "https://linkedin.com/in/raj",
        github: "https://github.com/raj",
        twitter: "https://twitter.com/raj",
        gmail: "raj@example.com",
        status: "Interviewed",
        matchScore: 88
    },
    {
        applicantId: "app-2002",
        profilePicture: "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D",
        applicantFullName: "Emily Chen",
        currentJobPosition: "DevOps Engineer",
        currentOrganization: "Microsoft",
        location: "Seattle, USA",
        experience: 6,
        skills: [
            "Kubernetes",
            "Terraform",
            "Jenkins",
            "Azure"
        ],
        salaryRange: "18 - 25",
        lastUpdate: 3,
        linkedIn: "https://linkedin.com/in/emily",
        github: "https://github.com/emily",
        twitter: "https://twitter.com/emily",
        gmail: "emily@example.com",
        status: "New",
        matchScore: 91
    },
    {
        applicantId: "app-2003",
        profilePicture: "https://plus.unsplash.com/premium_photo-1661942126259-fb08e7cce1e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
        applicantFullName: "Michael Rodriguez",
        currentJobPosition: "UI/UX Designer",
        currentOrganization: "Netflix",
        location: "New York, USA",
        experience: 3,
        skills: [
            "Figma",
            "Adobe XD",
            "Sketch",
            "Prototyping"
        ],
        salaryRange: "10 - 15",
        lastUpdate: 4,
        linkedIn: "https://linkedin.com/in/mike",
        github: "https://github.com/mike",
        twitter: "https://twitter.com/mike",
        gmail: "mike@example.com",
        status: "Rejected",
        matchScore: 65
    },
    {
        applicantId: "app-2004",
        profilePicture: "https://media.istockphoto.com/id/2216805149/photo/teenager-boy-carrying-bag-in-library-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jf9esFTHuIBGfc-ppHmNVwHoK1qM9wOFsRQITX7sT9k=",
        applicantFullName: "John Marston",
        currentJobPosition: "FullStack Developer",
        currentOrganization: "Uber",
        location: "Mumbai, India",
        experience: 5,
        skills: [
            "Python",
            "Machine Learning",
            "TensorFlow",
            "SQL"
        ],
        salaryRange: "14 - 19",
        lastUpdate: 5,
        linkedIn: "https://linkedin.com/in/john",
        github: "https://github.com/john",
        twitter: "https://twitter.com/john",
        gmail: "john@example.com",
        status: "New",
        matchScore: 82
    },
    {
        applicantId: "app-2005",
        profilePicture: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnRzfGVufDB8fDB8fHww",
        applicantFullName: "Priya Sharma",
        currentJobPosition: "Data Scientist",
        currentOrganization: "Hireance",
        location: "Austin, USA",
        experience: 4,
        skills: [
            "React Native",
            "Swift",
            "Kotlin",
            "Firebase"
        ],
        salaryRange: "15 - 20",
        lastUpdate: 6,
        linkedIn: "https://linkedin.com/in/priya",
        github: "https://github.com/priya",
        twitter: "https://twitter.com/priya",
        gmail: "priya@example.com",
        status: "Shortlisted",
        matchScore: 89
    },
    {
        applicantId: "app-2006",
        profilePicture: "https://media.istockphoto.com/id/2203067311/photo/young-female-teacher-with-curly-hair-in-classroom-smiling-at-camera-with-arms-crossed.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWdN0e5FstxltxR6bWZ2y0BGH3hAmRb8iMYU-S9Q6uM=",
        applicantFullName: "David Kim",
        currentJobPosition: "Mobile Developer",
        currentOrganization: "Apple",
        location: "San Francisco, USA",
        experience: 7,
        skills: [
            "React",
            "TypeScript",
            "GraphQL",
            "Redux"
        ],
        salaryRange: "16 - 21",
        lastUpdate: 7,
        linkedIn: "https://linkedin.com/in/david",
        github: "https://github.com/david",
        twitter: "https://twitter.com/david",
        gmail: "david@example.com",
        status: "Interviewed",
        matchScore: 92
    },
    {
        applicantId: "app-2007",
        profilePicture: "https://media.istockphoto.com/id/2203067311/photo/young-female-teacher-with-curly-hair-in-classroom-smiling-at-camera-with-arms-crossed.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWdN0e5FstxltxR6bWZ2y0BGH3hAmRb8iMYU-S9Q6uM=",
        applicantFullName: "Alex Mercer",
        currentJobPosition: "Security Engineer",
        currentOrganization: "Meta",
        location: "Remote",
        experience: 8,
        skills: [
            "Pentesting",
            "C++",
            "Networking",
            "Linux"
        ],
        salaryRange: "20 - 30",
        lastUpdate: 8,
        linkedIn: "https://linkedin.com/in/alex",
        github: "https://github.com/alex",
        twitter: "https://twitter.com/alex",
        gmail: "alex@example.com",
        status: "New",
        matchScore: 78
    },
    {
        applicantId: "app-2008",
        profilePicture: "https://media.istockphoto.com/id/2203067311/photo/young-female-teacher-with-curly-hair-in-classroom-smiling-at-camera-with-arms-crossed.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWdN0e5FstxltxR6bWZ2y0BGH3hAmRb8iMYU-S9Q6uM=",
        applicantFullName: "Jane Doe",
        currentJobPosition: "Project Manager",
        currentOrganization: "Slack",
        location: "London, UK",
        experience: 5,
        skills: [
            "Agile",
            "Scrum",
            "Jira",
            "Strategy"
        ],
        salaryRange: "14 - 18",
        lastUpdate: 1,
        linkedIn: "https://linkedin.com/in/jane",
        github: "https://github.com/jane",
        twitter: "https://twitter.com/jane",
        gmail: "jane@example.com",
        status: "Rejected",
        matchScore: 45
    },
    {
        applicantId: "app-2009",
        profilePicture: "https://media.istockphoto.com/id/2203067311/photo/young-female-teacher-with-curly-hair-in-classroom-smiling-at-camera-with-arms-crossed.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWdN0e5FstxltxR6bWZ2y0BGH3hAmRb8iMYU-S9Q6uM=",
        applicantFullName: "Bob Smith",
        currentJobPosition: "QA Automation",
        currentOrganization: "Twitter",
        location: "New York, USA",
        experience: 4,
        skills: [
            "Selenium",
            "Python",
            "Cypress",
            "Appium"
        ],
        salaryRange: "12 - 16",
        lastUpdate: 2,
        linkedIn: "https://linkedin.com/in/bob",
        github: "https://github.com/bob",
        twitter: "https://twitter.com/bob",
        gmail: "bob@example.com",
        status: "New",
        matchScore: 71
    },
    {
        applicantId: "app-2010",
        profilePicture: "https://media.istockphoto.com/id/2203067311/photo/young-female-teacher-with-curly-hair-in-classroom-smiling-at-camera-with-arms-crossed.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWdN0e5FstxltxR6bWZ2y0BGH3hAmRb8iMYU-S9Q6uM=",
        applicantFullName: "Alice Johnson",
        currentJobPosition: "Cloud Engineer",
        currentOrganization: "IBM",
        location: "Remote",
        experience: 6,
        skills: [
            "GCP",
            "Docker",
            "Go",
            "Terraform"
        ],
        salaryRange: "18 - 24",
        lastUpdate: 3,
        linkedIn: "https://linkedin.com/in/alice",
        github: "https://github.com/alice",
        twitter: "https://twitter.com/alice",
        gmail: "alice@example.com",
        status: "Shortlisted",
        matchScore: 95
    },
    {
        applicantId: "app-2011",
        profilePicture: "https://media.istockphoto.com/id/2203067311/photo/young-female-teacher-with-curly-hair-in-classroom-smiling-at-camera-with-arms-crossed.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWdN0e5FstxltxR6bWZ2y0BGH3hAmRb8iMYU-S9Q6uM=",
        applicantFullName: "Kevin Heart",
        currentJobPosition: "HR Lead",
        currentOrganization: "Disney",
        location: "Orlando, USA",
        experience: 9,
        skills: [
            "Hiring",
            "Culture",
            "Retention",
            "Strategy"
        ],
        salaryRange: "15 - 22",
        lastUpdate: 4,
        linkedIn: "https://linkedin.com/in/kevin",
        github: "https://github.com/kevin",
        twitter: "https://twitter.com/kevin",
        gmail: "kevin@example.com",
        status: "Rejected",
        matchScore: 32
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobApplicantsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f5b$jobId$5d2f$applicants$2f$components$2f$JobApplicantCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f5b$jobId$5d2f$applicants$2f$components$2f$JobApplicantCardSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/components/JobApplicantCardSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/recruiter/jobs/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-x.js [app-client] (ecmascript) <export default as UserX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function JobApplicantsPage({ params }) {
    _s();
    const { jobId } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(params);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [roleFilter, setRoleFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [isAdvancedOpen, setIsAdvancedOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const resetFilters = ()=>{
        setSearchTerm("");
        setStatusFilter("All");
        setRoleFilter("All");
    };
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "JobApplicantsPage.useMemo[stats]": ()=>{
            return {
                total: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_APPLICANTS"].length,
                new: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_APPLICANTS"].filter({
                    "JobApplicantsPage.useMemo[stats]": (a)=>a.status === "New"
                }["JobApplicantsPage.useMemo[stats]"]).length,
                shortlisted: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_APPLICANTS"].filter({
                    "JobApplicantsPage.useMemo[stats]": (a)=>a.status === "Shortlisted"
                }["JobApplicantsPage.useMemo[stats]"]).length,
                interviewed: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_APPLICANTS"].filter({
                    "JobApplicantsPage.useMemo[stats]": (a)=>a.status === "Interviewed"
                }["JobApplicantsPage.useMemo[stats]"]).length,
                rejected: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_APPLICANTS"].filter({
                    "JobApplicantsPage.useMemo[stats]": (a)=>a.status === "Rejected"
                }["JobApplicantsPage.useMemo[stats]"]).length
            };
        }
    }["JobApplicantsPage.useMemo[stats]"], []);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const APPLICANTS_PER_PAGE = 5;
    const filteredApplicants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "JobApplicantsPage.useMemo[filteredApplicants]": ()=>{
            setCurrentPage(1); // Reset to page 1 on filter change
            return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_APPLICANTS"].filter({
                "JobApplicantsPage.useMemo[filteredApplicants]": (app)=>{
                    const matchesSearch = app.applicantFullName.toLowerCase().includes(searchTerm.toLowerCase()) || app.currentJobPosition.toLowerCase().includes(searchTerm.toLowerCase()) || app.skills.some({
                        "JobApplicantsPage.useMemo[filteredApplicants]": (skill)=>skill.toLowerCase().includes(searchTerm.toLowerCase())
                    }["JobApplicantsPage.useMemo[filteredApplicants]"]);
                    const matchesStatus = statusFilter === "All" || app.status === statusFilter;
                    const matchesRole = roleFilter === "All" || app.currentJobPosition.toLowerCase().includes(roleFilter.toLowerCase());
                    return matchesSearch && matchesStatus && matchesRole;
                }
            }["JobApplicantsPage.useMemo[filteredApplicants]"]);
        }
    }["JobApplicantsPage.useMemo[filteredApplicants]"], [
        searchTerm,
        statusFilter,
        roleFilter
    ]);
    const totalPages = Math.ceil(filteredApplicants.length / APPLICANTS_PER_PAGE);
    const indexOfLastApplicant = currentPage * APPLICANTS_PER_PAGE;
    const indexOfFirstApplicant = indexOfLastApplicant - APPLICANTS_PER_PAGE;
    const currentApplicants = filteredApplicants.slice(indexOfFirstApplicant, indexOfLastApplicant);
    const roleCategories = [
        "All",
        "Frontend",
        "Backend",
        "DevOps",
        "Data Science",
        "UI/UX"
    ];
    const statusOptions = [
        "All",
        "New",
        "Shortlisted",
        "Interviewed",
        "Rejected"
    ];
    const activeFiltersCount = (statusFilter !== "All" ? 1 : 0) + (roleFilter !== "All" ? 1 : 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-10 pb-20 max-w-7xl mx-auto px-4 md:px-0 font-jakarta",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-end justify-between gap-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2.5 rounded-xl bg-indigo-50 border border-indigo-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 18,
                                        className: "text-indigo-600",
                                        strokeWidth: 2.5
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-semibold text-indigo-600 uppercase tracking-[0.15em] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100",
                                    children: "Applicant Tracking"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-1.5",
                            children: "Candidates List"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] text-slate-500 font-medium leading-relaxed",
                            children: "Review and manage candidates in your hiring pipeline for this position."
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                children: [
                    {
                        label: "Total Candidates",
                        value: stats.total,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        gradient: "from-indigo-500 to-indigo-700",
                        shadow: "shadow-indigo-200/60",
                        accent: "text-indigo-600"
                    },
                    {
                        label: "Shortlisted",
                        value: stats.shortlisted,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"],
                        gradient: "from-emerald-500 to-teal-600",
                        shadow: "shadow-emerald-200/60",
                        accent: "text-emerald-600"
                    },
                    {
                        label: "Interviewed",
                        value: stats.interviewed,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
                        gradient: "from-purple-500 to-violet-600",
                        shadow: "shadow-purple-200/60",
                        accent: "text-purple-600"
                    },
                    {
                        label: "Rejected",
                        value: stats.rejected,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"],
                        gradient: "from-rose-500 to-pink-600",
                        shadow: "shadow-rose-200/60",
                        accent: "text-rose-600"
                    }
                ].map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: idx * 0.1
                        },
                        className: "glass rounded-2xl p-5 border border-white/30 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md duration-300 group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-3 rounded-xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg ${stat.shadow} group-hover:scale-105 transition-transform duration-300`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                        size: 20,
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-[11px] font-semibold uppercase tracking-[0.1em] ${stat.accent} opacity-70 mb-0.5`,
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-extrabold text-slate-900 tracking-tight leading-none",
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-stretch md:items-center gap-4 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors",
                                size: 18,
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search by name, skills...",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                className: "w-full pl-12 pr-6 py-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all text-[14px] font-medium text-slate-700 placeholder:text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsAdvancedOpen(!isAdvancedOpen),
                                className: `flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white border shadow-sm font-semibold text-[14px] transition-all ${isAdvancedOpen || activeFiltersCount > 0 ? 'text-indigo-600 border-indigo-200 bg-indigo-50/50' : 'text-slate-600 border-slate-200/80 hover:bg-slate-50'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        size: 17,
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    "Filters",
                                    activeFiltersCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center justify-center w-5 h-5 ml-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold",
                                        children: activeFiltersCount
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 14,
                                        strokeWidth: 2.5,
                                        className: `transition-transform duration-300 ml-0.5 ${isAdvancedOpen ? 'rotate-180' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: isAdvancedOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fixed inset-0 z-40",
                                            onClick: ()=>setIsAdvancedOpen(false)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10,
                                                scale: 0.95
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: 10,
                                                scale: 0.95
                                            },
                                            className: "absolute right-0 top-full mt-2 w-72 bg-white rounded-3xl shadow-2xl border border-slate-100 p-5 z-50 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-[13px] font-bold text-slate-900",
                                                            children: "Filter Applicants"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 21
                                                        }, this),
                                                        activeFiltersCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: resetFilters,
                                                            className: "text-[11px] font-semibold text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    size: 12,
                                                                    strokeWidth: 2.5
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Clear all"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-[10px] font-semibold text-slate-500 uppercase tracking-[0.12em] mb-3 block",
                                                                    children: "Candidate Role"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-2",
                                                                    children: roleCategories.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setRoleFilter(role),
                                                                            className: `px-3 py-1.5 rounded-xl text-[12px] font-semibold transition-all ${roleFilter === role ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`,
                                                                            children: role
                                                                        }, role, false, {
                                                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                                            lineNumber: 175,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-[10px] font-semibold text-slate-500 uppercase tracking-[0.12em] mb-3 block",
                                                                    children: "Hiring Stage"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-2",
                                                                    children: statusOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setStatusFilter(status),
                                                                            className: `px-3 py-1.5 rounded-xl text-[12px] font-semibold transition-all ${statusFilter === status ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`,
                                                                            children: status
                                                                        }, status, false, {
                                                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                                            lineNumber: 191,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                                    lineNumber: 189,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsAdvancedOpen(false),
                                                    className: "w-full mt-6 py-2.5 rounded-xl bg-slate-900 text-white text-[12px] font-bold hover:bg-slate-800 transition-colors",
                                                    children: "Apply Filters"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5 pb-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    children: !__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_APPLICANTS"].length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f5b$jobId$5d2f$applicants$2f$components$2f$JobApplicantCardSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                        lineNumber: 220,
                        columnNumber: 13
                    }, this) : currentApplicants.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            currentApplicants.map((applicant, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f5b$jobId$5d2f$applicants$2f$components$2f$JobApplicantCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    jobId: jobId,
                                    ...applicant
                                }, applicant.applicantId, false, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 17
                                }, this)),
                            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pt-8 border-t border-slate-100 mt-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] font-medium text-slate-500",
                                        children: [
                                            "Showing ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-900",
                                                children: indexOfFirstApplicant + 1
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 29
                                            }, this),
                                            " to ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-900",
                                                children: Math.min(indexOfLastApplicant, filteredApplicants.length)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 110
                                            }, this),
                                            " of ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-900",
                                                children: filteredApplicants.length
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 223
                                            }, this),
                                            " candidates"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: currentPage === 1,
                                                onClick: ()=>{
                                                    setCurrentPage((prev)=>Math.max(prev - 1, 1));
                                                    window.scrollTo({
                                                        top: 0,
                                                        behavior: 'smooth'
                                                    });
                                                },
                                                className: "px-4 py-2 rounded-xl border border-slate-200 text-[13px] font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                                                children: "Previous"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    ...Array(totalPages)
                                                ].map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setCurrentPage(idx + 1);
                                                            window.scrollTo({
                                                                top: 0,
                                                                behavior: 'smooth'
                                                            });
                                                        },
                                                        className: `w-10 h-10 rounded-xl text-[13px] font-bold transition-all ${currentPage === idx + 1 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-500 hover:bg-slate-50'}`,
                                                        children: idx + 1
                                                    }, idx + 1, false, {
                                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                lineNumber: 250,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: currentPage === totalPages,
                                                onClick: ()=>{
                                                    setCurrentPage((prev)=>Math.min(prev + 1, totalPages));
                                                    window.scrollTo({
                                                        top: 0,
                                                        behavior: 'smooth'
                                                    });
                                                },
                                                className: "px-4 py-2 rounded-xl border border-slate-200 text-[13px] font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                                                children: "Next"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                lineNumber: 233,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "text-center py-20 glass rounded-[2.5rem] border border-dashed border-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 bg-slate-50 w-fit mx-auto rounded-full mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    size: 40,
                                    className: "text-slate-300"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                    lineNumber: 286,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                lineNumber: 285,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-slate-900 mb-2",
                                children: "No results found"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                lineNumber: 288,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 font-medium",
                                children: "Try adjusting your search or filters to find what you're looking for."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: resetFilters,
                                className: "mt-6 px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-[13px] hover:bg-indigo-700 transition-all",
                                children: "Clear all filters"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                                lineNumber: 290,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                        lineNumber: 280,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/recruiter/jobs/[jobId]/applicants/page.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(JobApplicantsPage, "LOEKNTwpf21SYdeljAuQvE9LXA4=");
_c = JobApplicantsPage;
var _c;
__turbopack_context__.k.register(_c, "JobApplicantsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_dashboard_recruiter_jobs_4a5e1401._.js.map