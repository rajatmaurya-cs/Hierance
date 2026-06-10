"use client";

import { Users, UserCheck, UserX, UserPlus, CheckCircle2, Percent } from "lucide-react";
import { motion } from "framer-motion";

interface KPIItem {
  title: string;
  value: string | number;
  change?: string;
  positive?: boolean;
  icon: any;
  color: string;
}

const stats: KPIItem[] = [
  { title: "Total Applicants", value: 57, change: "+12%", positive: true, icon: Users, color: "text-indigo-600 bg-indigo-50" },
  { title: "Shortlisted", value: 20, change: "+8%", positive: true, icon: UserPlus, color: "text-emerald-600 bg-emerald-50" },
  { title: "Interviewed", value: 15, change: "+5%", positive: true, icon: UserCheck, color: "text-blue-600 bg-blue-50" },
  { title: "Hired", value: 4, change: "+2%", positive: true, icon: CheckCircle2, color: "text-purple-600 bg-purple-50" },
  { title: "Rejected", value: 18, change: "-4%", positive: false, icon: UserX, color: "text-rose-600 bg-rose-50" },
  { title: "Conversion Rate", value: "7%", icon: Percent, color: "text-amber-600 bg-amber-50" },
];

export default function KPIStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-[2rem] p-6 border border-white/40 shadow-xl shadow-indigo-100/10 group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl ${item.color} transition-transform duration-300 group-hover:scale-110`}>
                <Icon size={20} />
              </div>
              {item.change && (
                <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${
                  item.positive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                }`}>
                  {item.change}
                </span>
              )}
            </div>

            <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] mb-1">
              {item.title}
            </p>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
              {item.value}
            </h3>
          </motion.div>
        );
      })}
    </div>
  );
}
