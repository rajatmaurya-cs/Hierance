"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  TrendingUp,
  History,
  DollarSign,
  Download,
  Search,
  Clock,
  Calendar,
  ArrowRight,
  Filter
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/shared/components/ui/button";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import Link from "next/link";

// --- Mock Data Generators ---

const generateMockRevenue = (days: number) => {
  const data = [];
  const now = new Date();
  for (let i = days; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    data.push({
      id: `rev-${i}`,
      fullDate: d,
      date: d.toISOString().split('T')[0],
      day: d.toLocaleDateString('en-US', { weekday: 'short' }),
      plans: Math.floor(Math.random() * 50000) + 10000,
      fees: Math.floor(Math.random() * 30000) + 5000,
    });
  }
  return data;
};

const generateMockTransactions = (count: number) => {
  const companies = ["Infosys Ltd", "StartupX", "Zomato", "Freshworks", "TCS", "Accenture", "Swiggy", "PhonePe", "Flipkart", "Razorpay"];
  const plans = ["Enterprise", "Premium Job", "Pro Monthly", "Pro Yearly", "Lite Plus"];
  const statuses = ["SUCCESS", "FAILED", "PENDING"];
  const txns = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() - Math.floor(Math.random() * 400));
    const amount = (Math.floor(Math.random() * 95) + 5) * 1000;
    txns.push({
      id: `TXN-${Math.floor(Math.random() * 9000) + 1000}-${i}`,
      company: companies[Math.floor(Math.random() * companies.length)],
      amount: `₹${amount.toLocaleString()}`,
      rawAmount: amount,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      date: d.toISOString().split('T')[0],
      displayDate: d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      rawDate: d,
      plan: plans[Math.floor(Math.random() * plans.length)],
    });
  }
  return txns.sort((a, b) => b.rawDate.getTime() - a.rawDate.getTime());
};

type FilterType = "7D" | "30D" | "6M" | "1Y" | "CUSTOM";

export default function RevenuePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [filter, setFilter] = useState<FilterType>("7D");
  const [customRange, setCustomRange] = useState({ start: "", end: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [rawData, setRawData] = useState<{ revenue: any[], transactions: any[] }>({ revenue: [], transactions: [] });

  // Client-side initialization to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    setRawData({
      revenue: generateMockRevenue(400),
      transactions: generateMockTransactions(150),
    });
  }, []);

  // Filtering Logic
  const filteredOutput = useMemo(() => {
    if (!isMounted || rawData.revenue.length === 0) return null;

    const now = new Date();
    let startDate = new Date();
    let compareDate = new Date();

    if (filter === "7D") {
      startDate.setDate(now.getDate() - 7);
      compareDate.setDate(startDate.getDate() - 7);
    } else if (filter === "30D") {
      startDate.setDate(now.getDate() - 30);
      compareDate.setDate(startDate.getDate() - 30);
    } else if (filter === "6M") {
      startDate.setMonth(now.getMonth() - 6);
      compareDate.setMonth(startDate.getMonth() - 6);
    } else if (filter === "1Y") {
      startDate.setFullYear(now.getFullYear() - 1);
      compareDate.setFullYear(startDate.getFullYear() - 1);
    } else if (filter === "CUSTOM" && customRange.start && customRange.end) {
      startDate = new Date(customRange.start);
      const endDate = new Date(customRange.end);
      endDate.setHours(23, 59, 59);
      const diff = endDate.getTime() - startDate.getTime();
      compareDate = new Date(startDate.getTime() - diff);
    }

    const currentData = rawData.revenue.filter(d => {
      const dt = new Date(d.fullDate);
      if (filter === "CUSTOM" && customRange.end) {
        const endDt = new Date(customRange.end);
        endDt.setHours(23, 59, 59);
        return dt >= startDate && dt <= endDt;
      }
      return dt >= startDate;
    });

    const previousData = rawData.revenue.filter(d => {
      const dt = new Date(d.fullDate);
      return dt >= compareDate && dt < startDate;
    });

    const currentTotal = currentData.reduce((acc, curr) => acc + curr.plans + curr.fees, 0);
    const prevTotal = previousData.reduce((acc, curr) => acc + curr.plans + curr.fees, 0);
    const pctChange = prevTotal === 0 ? 100 : ((currentTotal - prevTotal) / prevTotal) * 100;

    const currentPlans = currentData.reduce((acc, curr) => acc + curr.plans, 0);
    const currentFees = currentData.reduce((acc, curr) => acc + curr.fees, 0);

    const filteredTransactions = rawData.transactions.filter(t => {
      const tDate = new Date(t.rawDate);
      const inRange = tDate >= startDate && (filter === "CUSTOM" && customRange.end ? tDate <= new Date(customRange.end) : true);
      const matchesSearch = t.company.toLowerCase().includes(searchQuery.toLowerCase()) || t.id.toLowerCase().includes(searchQuery.toLowerCase());
      return inRange && matchesSearch;
    });

    return {
      revenueData: currentData,
      transactions: filteredTransactions,
      total: currentTotal,
      plans: currentPlans,
      fees: currentFees,
      change: pctChange.toFixed(1),
      isUp: pctChange >= 0,
      periodLabel: filter === "CUSTOM" ? "Custom Range" : filter === "7D" ? "Past 7 Days" : filter === "30D" ? "Past 30 Days" : filter === "6M" ? "Past 6 Months" : "Past Year"
    };
  }, [filter, customRange, searchQuery, isMounted, rawData]);

  // Hydration Guard - Render a consistent skeleton during SSR/Hydration
  if (!isMounted) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="h-24 bg-slate-100 rounded-3xl" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-32 bg-slate-100 rounded-3xl" />
          <div className="h-32 bg-slate-100 rounded-3xl" />
          <div className="h-32 bg-slate-100 rounded-3xl" />
        </div>
        <div className="h-[400px] bg-slate-100 rounded-3xl" />
        <div className="h-64 bg-slate-100 rounded-3xl" />
      </div>
    );
  }

  // Safety check for Memoized output
  if (!filteredOutput) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8 pb-10"
    >
      {/* FILTER BAR & ACTIONS */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-2xl text-[10px] font-black text-slate-500 uppercase tracking-widest">
            <Filter size={14} /> Filter Range
          </div>
          {[
            { id: "7D", label: "1 Week" },
            { id: "30D", label: "1 Month" },
            { id: "6M", label: "6 Months" },
            { id: "1Y", label: "1 Year" },
            { id: "CUSTOM", label: "Custom" },
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id as FilterType)}
              className={`px-5 py-2.5 rounded-xl text-[11px] font-bold transition-all ${
                filter === opt.id
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                  : "bg-white text-slate-600 border border-slate-100 hover:border-indigo-200 hover:bg-slate-50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {filter === "CUSTOM" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-3 bg-indigo-50/50 p-2 rounded-2xl border border-indigo-100"
            >
              <input
                type="date"
                value={customRange.start}
                onChange={(e) => setCustomRange({ ...customRange, start: e.target.value })}
                className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <span className="text-[10px] font-black text-slate-400">TO</span>
              <input
                type="date"
                value={customRange.end}
                onChange={(e) => setCustomRange({ ...customRange, end: e.target.value })}
                className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </motion.div>
          )}
        </AnimatePresence>

      
      </div>

      {/* AGGREGATE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            label: "Plans Revenue", 
            date: filteredOutput.periodLabel, 
            value: `₹${(filteredOutput.plans / 100000).toFixed(2)}L`, 
            change: `${filteredOutput.isUp ? "+" : ""}${filteredOutput.change}%`, 
            isUp: filteredOutput.isUp, 
            icon: <Calendar size={18} className="text-blue-500" /> 
          },
          { 
            label: "Additional Fees", 
            date: filteredOutput.periodLabel, 
            value: `₹${(filteredOutput.fees / 1000).toFixed(1)}K`, 
            change: "+8.5%", 
            isUp: true, 
            icon: <TrendingUp size={18} className="text-indigo-600" /> 
          },
          { 
            label: "Gross Settlement", 
            date: filteredOutput.periodLabel, 
            value: `₹${(filteredOutput.total / 100000).toFixed(2)}L`, 
            change: `${filteredOutput.isUp ? "+" : ""}${filteredOutput.change}%`, 
            isUp: filteredOutput.isUp, 
            icon: <DollarSign size={18} className="text-emerald-500" /> 
          },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50/50 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${stat.isUp ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-1">{stat.label}</p>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
                <p className="text-[9px] font-bold text-slate-400 mt-2 flex items-center gap-1.5 italic">
                  <Clock size={10} strokeWidth={2.5} /> {stat.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* REVENUE TIMELINE CHART - Only render when mounted */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm min-h-[460px]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-3">
              <TrendingUp className="text-indigo-600" size={20} />
              Financial Narrative
            </h2>
            <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">
              Revenue Growth: {filteredOutput.periodLabel}
            </p>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-xl text-[9px] font-black text-indigo-600 uppercase tracking-tight">
              <div className="w-2 h-2 rounded-full bg-indigo-600" /> Premium Plans
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-100 rounded-xl text-[9px] font-black text-amber-600 uppercase tracking-tight">
              <div className="w-2 h-2 rounded-full bg-amber-500" /> Premium Fees
            </div>
          </div>
        </div>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={filteredOutput.revenueData}>
              <defs>
                <linearGradient id="colorPlans" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorFees" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 9, fontWeight: 700, fill: "#94a3b8" }} 
                dy={10}
                tickFormatter={(val) => {
                  try {
                    const d = new Date(val);
                    if (filter === "7D" || filter === "30D") return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
                    return d.toLocaleDateString('en-GB', { month: 'short', year: '2-digit' });
                  } catch { return val; }
                }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fontWeight: 700, fill: "#94a3b8" }} 
                tickFormatter={(val) => `₹${val/1000}k`}
              />
              <Tooltip 
                contentStyle={{ borderRadius: "16px", border: "none", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)", padding: "12px" }}
                labelStyle={{ fontWeight: 900, marginBottom: "4px", fontSize: "11px" }}
              />
              <Area 
                type="monotone" 
                dataKey="plans" 
                stroke="#4f46e5" 
                fillOpacity={1} 
                fill="url(#colorPlans)" 
                strokeWidth={3}
                animationDuration={1500}
              />
              <Area 
                type="monotone" 
                dataKey="fees" 
                stroke="#f59e0b" 
                fillOpacity={1} 
                fill="url(#colorFees)" 
                strokeWidth={3}
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* TRANSACTION HISTORY */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-3">
              <History className="text-indigo-600" size={20} />
              Historical Settlement Log
            </h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              Found {filteredOutput.transactions.length} verified records
            </p>
          </div>
          <div className="flex gap-2">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={14} />
              <input 
                type="text" 
                placeholder="Search ID or Entity..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-300 transition-all w-64" 
              />
            </div>
            <Button variant="outline" className="rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50"><Download size={14} /></Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">Transaction</th>
                <th className="text-left py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">Entity</th>
                <th className="py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 text-center">Date</th>
                <th className="py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 text-center">Security</th>
                <th className="text-right py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">Settlement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredOutput.transactions.slice(0, 10).map((txn, idx) => (
                <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-4 font-black text-slate-900 text-xs tracking-tight">{txn.id}</td>
                  <td className="py-4 px-4">
                    <p className="text-xs font-black text-slate-800 leading-none">{txn.company}</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tight">{txn.plan}</p>
                  </td>
                  <td className="py-4 px-4 text-center text-[10px] font-bold text-slate-500">{txn.displayDate}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="inline-flex items-center justify-center">
                      <span className={`px-3 py-1.5 rounded-xl border text-[9px] font-black uppercase ${
                        txn.status === "SUCCESS" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                        txn.status === "PENDING" ? "bg-amber-50 text-amber-600 border-amber-100" :
                        "bg-rose-50 text-rose-600 border-rose-100"
                      }`}>
                        {txn.status === "SUCCESS" ? "Verified" : txn.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right font-black text-slate-900 text-xs">{txn.amount}</td>
                </tr>
              ))}
              {filteredOutput.transactions.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-20 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300">
                        <History size={24} />
                      </div>
                      <p className="text-sm font-bold text-slate-400">No records found for this period</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {filteredOutput.transactions.length > 10 && (
             <div className="mt-6 flex justify-center">
                <Button variant="ghost" className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:bg-indigo-50 rounded-xl">
                   View All {filteredOutput.transactions.length} Records
                </Button>
             </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
