"use client";

import { motion } from "framer-motion";
import { Filter } from "lucide-react";

const funnelData = [
  { label: "Applicants", count: 57, color: "bg-indigo-600" },
  { label: "Shortlisted", count: 20, color: "bg-indigo-500" },
  { label: "Interviewed", count: 15, color: "bg-indigo-400" },
  { label: "Hired", count: 4, color: "bg-emerald-500" },
];

export default function HiringFunnel() {
  const maxValue = funnelData[0].count;

  return (
    <div className="glass rounded-[2rem] p-8 border border-white/40 shadow-indigo-100/20">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
          <Filter size={20} className="text-indigo-600" />
          Hiring Pipeline
        </h3>
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">
          Current Status
        </span>
      </div>

      <div className="space-y-4">
        {funnelData.map((stage, index) => {
          const percentage = (stage.count / maxValue) * 100;
          const previousStage = funnelData[index - 1];
          const conversion = index > 0 ? ((stage.count / previousStage.count) * 100).toFixed(0) : null;

          return (
            <div key={index} className="relative">
              {index > 0 && (
                <div className="flex justify-center my-3 relative h-8">
                  <div className="w-px h-full bg-slate-200 border-l border-dashed border-slate-300" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[10px] font-black text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 whitespace-nowrap shadow-sm">
                    {conversion}% conversion
                  </span>
                </div>
              )}
              
              <div className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider">{stage.label}</span>
                  <span className="text-sm font-black text-slate-900">{stage.count}</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "circOut" }}
                    className={`h-full ${stage.color} shadow-lg shadow-indigo-100/50`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
