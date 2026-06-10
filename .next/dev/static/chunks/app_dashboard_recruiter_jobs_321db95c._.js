(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const JobCard = ({ jobId, logo, companyName, jobTitle, exp, location, status, jobType, applications, shortlisted, postedOn, lastActivity, onStatusChange, onDelete })=>{
    _s();
    const [openManage, setOpenManage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openStatus, setOpenStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleStatusUpdate = (newStatus)=>{
        if (onStatusChange) {
            onStatusChange(jobId, newStatus);
        }
        setOpenStatus(false);
    };
    const handleDelete = ()=>{
        if (onDelete) {
            onDelete(jobId);
        }
        setOpenManage(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:shadow-indigo-50/40 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute left-0 top-0 h-full w-1 ${status === 'Open' ? 'bg-gradient-to-b from-emerald-400 to-emerald-600' : status === 'Draft' ? 'bg-gradient-to-b from-amber-400 to-amber-600' : 'bg-gradient-to-b from-slate-300 to-slate-400'}`
            }, void 0, false, {
                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center justify-between gap-5 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-12 w-12 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-1 border border-slate-200/60 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300",
                                children: logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: logo,
                                    alt: companyName,
                                    className: "w-full h-full object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                    className: "text-slate-400",
                                    size: 22,
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/dashboard/recruiter/jobs/${jobId}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug tracking-tight mb-0.5",
                                            children: jobTitle
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] font-medium text-slate-400 tracking-wide",
                                        children: companyName
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpenStatus(!openStatus),
                                        className: `flex items-center gap-2 px-4 py-2 rounded-xl text-[12px] font-semibold transition-all border ${status === 'Open' ? 'bg-emerald-50 text-emerald-700 border-emerald-200/60 hover:bg-emerald-100' : status === 'Draft' ? 'bg-amber-50 text-amber-700 border-amber-200/60' : 'bg-slate-50 text-slate-500 border-slate-200/60'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-2 h-2 rounded-full ${status === 'Open' ? 'bg-emerald-500 animate-pulse' : status === 'Draft' ? 'bg-amber-500' : 'bg-slate-400'}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            status,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 13,
                                                strokeWidth: 2.5,
                                                className: `transition-transform duration-300 ${openStatus ? 'rotate-180' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: openStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            className: "absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusItem, {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 15,
                                                        strokeWidth: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 27
                                                    }, void 0),
                                                    label: "Set as Open",
                                                    color: "text-emerald-600 hover:bg-emerald-50",
                                                    onClick: ()=>handleStatusUpdate("Open")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusItem, {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                        size: 15,
                                                        strokeWidth: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 27
                                                    }, void 0),
                                                    label: "Close Job",
                                                    color: "text-rose-600 hover:bg-rose-50",
                                                    onClick: ()=>handleStatusUpdate("Closed")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpenManage(!openManage),
                                        className: "p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-slate-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                            size: 16,
                                            strokeWidth: 2
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: openManage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            className: "absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusItem, {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                        size: 15,
                                                        strokeWidth: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 37
                                                    }, void 0),
                                                    label: "Share Job",
                                                    color: "text-slate-600 hover:bg-slate-50"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusItem, {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 15,
                                                        strokeWidth: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 27
                                                    }, void 0),
                                                    label: "Delete Job",
                                                    color: "text-rose-600 hover:bg-rose-50",
                                                    onClick: handleDelete
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaItem, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                            size: 15,
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                            lineNumber: 171,
                            columnNumber: 25
                        }, void 0),
                        label: "Location",
                        value: location,
                        iconColor: "text-rose-500",
                        bgColor: "bg-rose-50",
                        borderColor: "border-rose-100/60"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaItem, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                            size: 15,
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                            lineNumber: 172,
                            columnNumber: 25
                        }, void 0),
                        label: "Experience",
                        value: `${exp} Years`,
                        iconColor: "text-blue-500",
                        bgColor: "bg-blue-50",
                        borderColor: "border-blue-100/60"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaItem, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            size: 15,
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                            lineNumber: 173,
                            columnNumber: 25
                        }, void 0),
                        label: "Job Type",
                        value: jobType,
                        iconColor: "text-amber-500",
                        bgColor: "bg-amber-50",
                        borderColor: "border-amber-100/60"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3.5 bg-indigo-50/60 p-3 rounded-xl border border-indigo-100/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 rounded-lg bg-white text-indigo-600 shadow-sm border border-indigo-100/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    size: 16,
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-semibold text-indigo-500 uppercase tracking-[0.1em] mb-0.5",
                                        children: "Applications"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] font-bold text-indigo-700",
                                        children: [
                                            applications,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-slate-400 mx-0.5",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                                lineNumber: 182,
                                                columnNumber: 30
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-600 font-semibold",
                                                children: [
                                                    shortlisted,
                                                    " shortlisted"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                                lineNumber: 182,
                                                columnNumber: 91
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-5 pt-5 border-t border-slate-100/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-[11px] font-medium text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                size: 13,
                                strokeWidth: 2,
                                className: "text-slate-300"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Posted ",
                            postedOn
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-[11px] font-medium text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                size: 13,
                                strokeWidth: 2,
                                className: "text-slate-300"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Last activity ",
                            lastActivity
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/dashboard/recruiter/jobs/${jobId}`,
                        className: "ml-auto flex items-center gap-1.5 text-[13px] font-semibold text-indigo-600 hover:text-indigo-700 group/link transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                size: 15,
                                strokeWidth: 2,
                                className: "opacity-70"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "View Details & Applicants",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 14,
                                strokeWidth: 2.5,
                                className: "group-hover/link:translate-x-0.5 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(JobCard, "pv3Szv53dlzvP+dB9szZTf5vXO8=");
_c = JobCard;
function StatusItem({ icon, label, color, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${color}`,
        children: [
            icon,
            label
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_c1 = StatusItem;
function MetaItem({ icon, label, value, iconColor, bgColor, borderColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-2 rounded-lg ${bgColor} ${iconColor} border ${borderColor}`,
                children: icon
            }, void 0, false, {
                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-semibold text-slate-400 uppercase tracking-[0.1em] mb-0.5",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] font-semibold text-slate-700",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx",
        lineNumber: 226,
        columnNumber: 5
    }, this);
}
_c2 = MetaItem;
const __TURBOPACK__default__export__ = JobCard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "JobCard");
__turbopack_context__.k.register(_c1, "StatusItem");
__turbopack_context__.k.register(_c2, "MetaItem");
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
"[project]/app/dashboard/recruiter/jobs/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f$components$2f$JobCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/recruiter/jobs/components/JobCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dashboard/recruiter/jobs/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const JobsPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFilterOpen, setIsFilterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const filterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [roleFilter, setRoleFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [locationFilter, setLocationFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [allJobs, setAllJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_JOBS"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobsPage.useEffect": ()=>{
            // Load session jobs
            const sessionJobsRaw = sessionStorage.getItem("recruiter_jobs_session");
            if (sessionJobsRaw) {
                const sessionJobs = JSON.parse(sessionJobsRaw);
                setAllJobs([
                    ...sessionJobs,
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_JOBS"]
                ]);
            }
        }
    }["JobsPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobsPage.useEffect": ()=>{
            function handleClickOutside(event) {
                if (filterRef.current && !filterRef.current.contains(event.target)) {
                    setIsFilterOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "JobsPage.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["JobsPage.useEffect"];
        }
    }["JobsPage.useEffect"], []);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const JOBS_PER_PAGE = 5;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobsPage.useEffect": ()=>{
            setCurrentPage(1);
        }
    }["JobsPage.useEffect"], [
        searchTerm,
        roleFilter,
        locationFilter
    ]);
    const filteredJobs = allJobs.filter((job)=>{
        const matchesSearch = job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) || job.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = roleFilter === "All" || job.jobTitle.startsWith(roleFilter);
        const matchesLocation = locationFilter === "All" || job.location === locationFilter;
        return matchesSearch && matchesRole && matchesLocation;
    });
    const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
    const indexOfLastJob = currentPage * JOBS_PER_PAGE;
    const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
    const activeFiltersCount = (roleFilter !== "All" ? 1 : 0) + (locationFilter !== "All" ? 1 : 0);
    const clearFilters = ()=>{
        setRoleFilter("All");
        setLocationFilter("All");
        setIsFilterOpen(false);
    };
    const handleStatusChange = (id, newStatus)=>{
        // 1. Update State
        const updatedJobs = allJobs.map((job)=>job.jobId === id ? {
                ...job,
                status: newStatus
            } : job);
        setAllJobs(updatedJobs);
        // 2. Update Session Storage
        const sessionJobsRaw = sessionStorage.getItem("recruiter_jobs_session");
        if (sessionJobsRaw) {
            const sessionJobs = JSON.parse(sessionJobsRaw);
            const updatedSessionJobs = sessionJobs.map((job)=>job.jobId === id ? {
                    ...job,
                    status: newStatus
                } : job);
            sessionStorage.setItem("recruiter_jobs_session", JSON.stringify(updatedSessionJobs));
        }
    };
    const handleDelete = (id)=>{
        // 1. Update State
        setAllJobs((prev)=>prev.filter((job)=>job.jobId !== id));
        // 2. Update Session Storage
        const sessionJobsRaw = sessionStorage.getItem("recruiter_jobs_session");
        if (sessionJobsRaw) {
            const sessionJobs = JSON.parse(sessionJobsRaw);
            const updatedSessionJobs = sessionJobs.filter((job)=>job.jobId !== id);
            sessionStorage.setItem("recruiter_jobs_session", JSON.stringify(updatedSessionJobs));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full h-full flex flex-col space-y-8 py-8 px-4 md:px-10 max-w-7xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row lg:items-end justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-semibold text-indigo-600 uppercase tracking-[0.15em] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100",
                                        children: "Hiring Pipeline"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-1.5",
                                children: "Job Openings"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[15px] text-slate-500 font-medium leading-relaxed",
                                children: "Manage your hiring pipeline and track applicant activity in real-time."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/dashboard/recruiter/jobs/new"),
                        className: "group flex items-center justify-center gap-2.5 rounded-2xl bg-indigo-600 px-8 py-3.5 text-[13px] font-bold text-white shadow-lg shadow-indigo-200/60 hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-200/80 transition-all duration-300 w-full lg:w-auto shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 17,
                                strokeWidth: 2.5,
                                className: "group-hover:rotate-90 transition-transform duration-300"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Post New Opening"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                            size: 20,
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                            lineNumber: 134,
                            columnNumber: 17
                        }, void 0),
                        label: "Total Openings",
                        value: allJobs.length.toString(),
                        gradient: "from-indigo-500 to-indigo-700",
                        shadowColor: "shadow-indigo-200/60",
                        accentText: "text-indigo-600"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            size: 20,
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                            lineNumber: 142,
                            columnNumber: 17
                        }, void 0),
                        label: "Active Jobs",
                        value: allJobs.filter((j)=>j.status === 'Open').length.toString(),
                        gradient: "from-emerald-500 to-teal-600",
                        shadowColor: "shadow-emerald-200/60",
                        accentText: "text-emerald-600"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            size: 20,
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                            lineNumber: 150,
                            columnNumber: 17
                        }, void 0),
                        label: "Closed Jobs",
                        value: allJobs.filter((j)=>j.status === 'Closed').length.toString(),
                        gradient: "from-slate-400 to-slate-600",
                        shadowColor: "shadow-slate-200/60",
                        accentText: "text-slate-500"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                            size: 20,
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                            lineNumber: 158,
                            columnNumber: 17
                        }, void 0),
                        label: "Total Applicants",
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_APPLICANTS"].length.toString(),
                        gradient: "from-violet-500 to-purple-600",
                        shadowColor: "shadow-purple-200/60",
                        accentText: "text-violet-600"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
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
                                fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search by job title, location...",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                className: "w-full pl-12 pr-6 py-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all text-[14px] font-medium text-slate-700 placeholder:text-slate-400 placeholder:font-normal"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative shrink-0",
                        ref: filterRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsFilterOpen(!isFilterOpen),
                                className: `flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white border shadow-sm font-semibold text-[14px] transition-all ${isFilterOpen || activeFiltersCount > 0 ? 'text-indigo-600 border-indigo-200 bg-indigo-50/50' : 'text-slate-600 border-slate-200/80 hover:bg-slate-50'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        size: 17,
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Filters",
                                    activeFiltersCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center justify-center w-5 h-5 ml-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold",
                                        children: activeFiltersCount
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 14,
                                        strokeWidth: 2.5,
                                        className: `transition-transform duration-300 ml-0.5 ${isFilterOpen ? 'rotate-180' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: isFilterOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                    children: "Filter Jobs"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                activeFiltersCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: clearFilters,
                                                    className: "text-[11px] font-semibold text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            size: 12,
                                                            strokeWidth: 2.5
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Clear all"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-semibold text-slate-500 uppercase tracking-[0.12em] mb-3 block",
                                                            children: "Job Role"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: [
                                                                "All",
                                                                "Senior Frontend Engineer",
                                                                "DevOps Specialist",
                                                                "FullStack AI Engineer",
                                                                "Machine Learning Trainer",
                                                                "Backend Developer",
                                                                "Product Manager",
                                                                "UI/UX Designer",
                                                                "Data Scientist"
                                                            ].map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setRoleFilter(role),
                                                                    className: `px-3 py-1.5 rounded-xl text-[12px] font-semibold transition-all ${roleFilter === role ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`,
                                                                    children: role
                                                                }, role, false, {
                                                                    fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                                                    lineNumber: 220,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-semibold text-slate-500 uppercase tracking-[0.12em] mb-3 block",
                                                            children: "Location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: [
                                                                "All",
                                                                "Remote",
                                                                "Jaipur, India",
                                                                "Bangalore, India",
                                                                "New York, USA",
                                                                "London, UK"
                                                            ].map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setLocationFilter(loc),
                                                                    className: `px-3 py-1.5 rounded-xl text-[12px] font-semibold transition-all ${locationFilter === loc ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`,
                                                                    children: loc
                                                                }, loc, false, {
                                                                    fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsFilterOpen(false),
                                            className: "w-full mt-6 py-2.5 rounded-xl bg-slate-900 text-white text-[12px] font-bold hover:bg-slate-800 transition-colors",
                                            children: "Apply Filters"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5 pb-10",
                children: currentJobs.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        currentJobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$recruiter$2f$jobs$2f$components$2f$JobCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                ...job,
                                onStatusChange: handleStatusChange,
                                onDelete: handleDelete
                            }, job.jobId, false, {
                                fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                lineNumber: 265,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))),
                        totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pt-8 border-t border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px] font-medium text-slate-500",
                                    children: [
                                        "Showing ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-slate-900",
                                            children: indexOfFirstJob + 1
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " to ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-slate-900",
                                            children: Math.min(indexOfLastJob, filteredJobs.length)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 102
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " of ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-slate-900",
                                            children: filteredJobs.length
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 203
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " openings"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            disabled: currentPage === 1,
                                            onClick: ()=>setCurrentPage((prev)=>Math.max(prev - 1, 1)),
                                            className: "px-4 py-2 rounded-xl border border-slate-200 text-[13px] font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                                            children: "Previous"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                ...Array(totalPages)
                                            ].map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCurrentPage(idx + 1),
                                                    className: `w-10 h-10 rounded-xl text-[13px] font-bold transition-all ${currentPage === idx + 1 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-500 hover:bg-slate-50'}`,
                                                    children: idx + 1
                                                }, idx + 1, false, {
                                                    fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            disabled: currentPage === totalPages,
                                            onClick: ()=>setCurrentPage((prev)=>Math.min(prev + 1, totalPages)),
                                            className: "px-4 py-2 rounded-xl border border-slate-200 text-[13px] font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                                            children: "Next"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                            lineNumber: 275,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20 glass rounded-[2rem]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 text-[15px] font-semibold",
                            children: "No jobs found matching your filters."
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                            lineNumber: 314,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        (searchTerm !== "" || roleFilter !== "All" || locationFilter !== "All") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSearchTerm("");
                                clearFilters();
                            },
                            className: "mt-4 px-6 py-2.5 rounded-xl bg-indigo-50 text-indigo-600 text-[13px] font-semibold hover:bg-indigo-100 transition-colors",
                            children: "Clear all filters"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                            lineNumber: 316,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                    lineNumber: 313,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(JobsPage, "q/4JnpRN8on0aMurNNez6DLNCzE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = JobsPage;
function StatsCard({ icon, label, value, gradient, shadowColor, accentText }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass rounded-2xl p-5 border border-white/30 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md duration-300 group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `p-3 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg ${shadowColor} group-hover:scale-105 transition-transform duration-300`,
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                    lineNumber: 338,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-[11px] font-semibold uppercase tracking-[0.1em] ${accentText} opacity-70 mb-0.5`,
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-2xl font-extrabold text-slate-900 tracking-tight leading-none",
                            children: value
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
            lineNumber: 337,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/dashboard/recruiter/jobs/page.tsx",
        lineNumber: 336,
        columnNumber: 5
    }, this);
}
_c1 = StatsCard;
const __TURBOPACK__default__export__ = JobsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "JobsPage");
__turbopack_context__.k.register(_c1, "StatsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_dashboard_recruiter_jobs_321db95c._.js.map