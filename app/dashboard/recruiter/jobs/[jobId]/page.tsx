"use client";

import { motion } from "framer-motion";
import KPIStats from "./analytics/components/KPIStats";
import HiringFunnel from "./analytics/components/HiringFunnel";
import ApplicationsTrend from "./analytics/components/ApplicationsTrend";
import TrainingRevenueAnalytics from "./analytics/components/TrainingRevenueAnalytics";
import { ArrowLeft, TrendingUp, Users, Target, Activity } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

export default function JobAnalyticsPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = React.use(params);
  const router = useRouter();

  return (
    <div className="min-h-screen space-y-10 py-6 px-4 md:px-8 max-w-7xl mx-auto pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold text-sm transition-colors mb-4 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Jobs
          </button>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-200">
              <Activity size={24} />
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              Job Performance
            </h1>
          </div>
          <p className="text-slate-500 font-medium">
            Detailed analytics and hiring pipeline insights for Job ID: <span className="text-indigo-600 font-bold">{jobId}</span>
          </p>
        </div>

        <div className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
            <TrendingUp size={20} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth</p>
            <p className="text-sm font-black text-slate-900">+24.8% <span className="text-slate-400 font-bold">vs last month</span></p>
          </div>
        </div>
      </div>

      {/* Main Stats Row */}
      <KPIStats />

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Funnel & Rejection */}
        <div className="lg:col-span-4 space-y-8">
          <HiringFunnel />
          
          <div className="glass rounded-[2rem] p-8 border border-white/40 shadow-indigo-100/20">
            <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
              <Target size={20} className="text-indigo-600" />
              Top Hiring Sources
            </h3>
            <div className="space-y-4">
              {[
                { label: "Direct Applicants", value: 45, color: "bg-indigo-500" },
                { label: "LinkedIn", value: 30, color: "bg-blue-500" },
                { label: "Referrals", value: 15, color: "bg-emerald-500" },
                { label: "Recruiters", value: 10, color: "bg-purple-500" },
              ].map((source) => (
                <div key={source.label} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-slate-600">{source.label}</span>
                    <span className="text-slate-900">{source.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${source.value}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${source.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Trends & Revenue */}
        <div className="lg:col-span-8 space-y-8">
          <ApplicationsTrend />
          <TrainingRevenueAnalytics />
        </div>
      </div>
    </div>
  );
}
