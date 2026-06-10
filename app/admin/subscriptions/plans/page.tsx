"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Users,
  Building2,
  UserCircle,
  TrendingUp,
  Zap,
  ShieldCheck,
  Building,
  Target,
  Edit3,
  Check,
  X,
  Save,
  Percent,
  BadgeDollarSign,
  Eye,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { 
  PlanData, 
  INITIAL_CANDIDATE_PLANS, 
  INITIAL_RECRUITER_PLANS,
  getStoredPlans
} from "./constants";
import { useRouter } from "next/navigation";


export default function PlansPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [userType, setUserType] = useState<"CANDIDATE" | "RECRUITER">("CANDIDATE");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // --- Plans State ---
  const [candidatePlans, setCandidatePlans] = useState(INITIAL_CANDIDATE_PLANS);
  const [recruiterPlans, setRecruiterPlans] = useState(INITIAL_RECRUITER_PLANS);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const { candidatePlans: storedCands, recruiterPlans: storedRecs } = getStoredPlans();
    setCandidatePlans(storedCands);
    setRecruiterPlans(storedRecs);
  }, []);

  const activePlans = useMemo(() => {
    return userType === "CANDIDATE" ? candidatePlans : recruiterPlans;
  }, [userType, candidatePlans, recruiterPlans]);

  const stats = useMemo(() => {
    const total = activePlans.reduce((acc, curr) => acc + curr.users, 0);
    const newWeek = activePlans.reduce((acc, curr) => acc + curr.newWeek, 0);
    const newMonth = activePlans.reduce((acc, curr) => acc + curr.newMonth, 0);
    return { total, newWeek, newMonth };
  }, [activePlans]);

  // Transform data for Pie Chart
  const pieData = useMemo(() => {
    return activePlans.map(p => ({
      name: p.name,
      value: p.users,
      color: p.color
    }));
  }, [activePlans]);

  // --- Modal Editing Actions moved to dynamic route ---

  // Custom Label Renderer for Pie Chart
  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 1.25;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#64748B"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-[10px] font-black uppercase tracking-tighter"
      >
        {`${name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Hydration Guard
  if (!isMounted) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="h-20 bg-slate-100 rounded-3xl" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-32 bg-slate-100 rounded-3xl" />
          <div className="h-32 bg-slate-100 rounded-3xl" />
          <div className="h-32 bg-slate-100 rounded-3xl" />
        </div>
        <div className="h-[600px] bg-slate-100 rounded-3xl" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8 pb-10 relative"
    >
      {/* SUCCESS TOAST */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 20, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-0 left-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700/50 backdrop-blur-md"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Check size={16} strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-black uppercase tracking-widest leading-none mb-0.5">Matrix Updated</span>
              <span className="text-[10px] font-bold text-slate-400">Pricing layers synced successfully</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PLAN DETAILS MOVED TO DYNAMIC ROUTE */}

      {/* SEGMENTED CONTROL TOGGLE */}
      <div className="bg-white p-2 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div className="flex bg-slate-100/80 p-1.5 rounded-2xl w-full max-w-[500px]">
          <button
            onClick={() => setUserType("CANDIDATE")}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
              userType === "CANDIDATE"
                ? "bg-white text-blue-600 shadow-md ring-1 ring-slate-200"
                : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
            }`}
          >
            <UserCircle size={15} />
            Candidate Architecture
          </button>
          <button
            onClick={() => setUserType("RECRUITER")}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
              userType === "RECRUITER"
                ? "bg-white text-emerald-600 shadow-md ring-1 ring-slate-200"
                : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
            }`}
          >
            <Building2 size={15} />
            Recruiter Ecosystem
          </button>
        </div>
        <div className="hidden lg:flex items-center gap-4 px-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-2xl">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Matrix Synced</span>
          </div>
        </div>
      </div>

      {/* GROWTH METRICS RIBBON */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            label: `Total Active ${userType === "CANDIDATE" ? "Seekers" : "Companies"}`, 
            value: stats.total.toLocaleString(), 
            change: "+12.4%", 
            isUp: true, 
            icon: userType === "CANDIDATE" ? <Users className="text-blue-500" /> : <Building className="text-emerald-500" /> 
          },
          { 
            label: "New Last 7 Days", 
            value: stats.newWeek.toLocaleString(), 
            change: "+4.2% wk/wk", 
            isUp: true, 
            icon: <Zap className="text-amber-500" /> 
          },
          { 
            label: "New Last 30 Days", 
            value: stats.newMonth.toLocaleString(), 
            change: "+18.5% mo/mo", 
            isUp: true, 
            icon: <TrendingUp className="text-indigo-600" /> 
          },
        ].map((stat, i) => (
          <motion.div 
            key={`${userType}-${i}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 opacity-50 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-xl ${stat.isUp ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-rose-50 text-rose-600 border border-rose-100"}`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.18em] mb-1">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
                  <span className="text-[10px] font-bold text-slate-400">units</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* PLAN GRID (Left Column - 5 spans) */}
        <div className="lg:col-span-12 xl:col-span-5">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden h-full flex flex-col">
             <div className={`absolute top-0 left-0 w-1.5 h-full ${userType === "CANDIDATE" ? "bg-blue-600" : "bg-emerald-600"}`} />
            
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-3">
                {userType === "CANDIDATE" ? <ShieldCheck className="text-blue-500" size={22} /> : <Building2 className="text-emerald-500" size={22} />}
                {userType === "CANDIDATE" ? "Candidate Tiers" : "Recruiter Tiers"}
              </h2>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <ShieldCheck size={14} />
                  Matrix Authorized
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 py-2">
              <AnimatePresence mode="popLayout">
                {activePlans.map((plan, i) => (
                  <motion.div 
                    key={`${plan.name}`}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: i * 0.05 }}
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className="group p-6 rounded-2xl border transition-all duration-300 relative border-slate-100 bg-slate-50/20 hover:border-slate-300 hover:bg-white cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{plan.icon}</span>
                        <div>
                          <h3 className="text-base font-black text-slate-900">{plan.name}</h3>
                          <p className="text-[10px] font-bold text-slate-400 mt-0.5 uppercase tracking-[0.12em]">{plan.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-black text-slate-900 tracking-tight">{plan.price}</span>
                        <p className="text-[9px] font-black text-slate-400 uppercase">per unit</p>
                      </div>
                    </div>

                      <div className="flex flex-wrap items-center gap-1.5 mb-4">
                        {plan.discountPercent > 0 && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-violet-50 border border-violet-100 rounded-lg text-[9px] font-black text-violet-600 uppercase tracking-wider">
                            {plan.discountPercent}% off
                          </span>
                        )}
                        {plan.discountFlat !== "₹0" && plan.discountFlat !== "" && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 border border-amber-100 rounded-lg text-[9px] font-black text-amber-600 uppercase tracking-wider">
                            {plan.discountFlat} off
                          </span>
                        )}
                        {(plan.discountPercent === 0 || !plan.discountPercent) && (plan.discountFlat === "₹0" || !plan.discountFlat) && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                            No discount
                          </span>
                        )}
                      </div>


                    <div className="flex items-center justify-between pt-4 border-t border-slate-100/50">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${userType === "CANDIDATE" ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"}`}>
                          <Target size={14} />
                        </div>
                        <span className="text-[12px] font-bold text-slate-700">{plan.users.toLocaleString()} Active Units</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/admin/subscriptions/plans/${plan.id}`);
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-all font-bold"
                        title="View full plan details"
                      >
                        <Eye size={12} />
                        Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between px-2">
               <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest italic">Tier management interface stable</span>
               <div className="flex gap-1">
                  {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-100" />)}
               </div>
            </div>
          </div>
        </div>

        {/* PIE DISTRIBUTION (Right Column - 7 spans) */}
        <div className="lg:col-span-12 xl:col-span-7">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden h-full flex flex-col min-h-[640px]">
            <div className="mb-6">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-3">
                <Target className={userType === "CANDIDATE" ? "text-blue-500" : "text-emerald-500"} size={22} />
                Market Saturation Matrix
              </h2>
              <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest italic leading-relaxed">
                Distribution of global {userType.toLowerCase()} layers with direct visualization
              </p>
            </div>

            <div className="flex-1 flex flex-col items-center justify-around py-6">
              {/* CHART CONTENT */}
              <div className="relative w-full aspect-square max-w-[460px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip 
                      contentStyle={{ borderRadius: "20px", border: "none", boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)", padding: "16px" }}
                      itemStyle={{ fontWeight: 900, fontSize: "12px", textTransform: "uppercase" }}
                    />
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={155}
                      dataKey="value"
                      labelLine={true}
                      label={renderCustomLabel}
                      animationBegin={0}
                      animationDuration={1500}
                      stroke="none"
                    >
                      {pieData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color} 
                          className="hover:opacity-80 transition-opacity cursor-pointer outline-none"
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* STATS OVERVIEW Grid */}
              <div className="mt-6 grid grid-cols-3 gap-6 w-full max-w-[580px]">
                {activePlans.map((plan) => (
                  <div key={plan.name} className="flex flex-col items-center p-4 bg-slate-50/50 rounded-2xl border border-slate-100 group hover:border-slate-300 transition-all">
                    <div className="w-2.5 h-2.5 rounded-full mb-2" style={{ backgroundColor: plan.color }} />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">{plan.name}</span>
                    <span className="text-base font-black text-slate-800 tracking-tight mt-1">{plan.users.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex items-center justify-between mt-auto">
              <div className="flex gap-4">
                <div className={`p-2 rounded-lg ${userType === "CANDIDATE" ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"}`}>
                  <ShieldCheck size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-800 uppercase tracking-tight">Security Audit</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Global Architecture Synced</span>
                </div>
              </div>
              <p className="text-[11px] font-bold text-slate-400 italic font-mono">Total Verified Units: {stats.total.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
