"use client";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DollarSign, PieChart as PieChartIcon, BarChart3, TrendingUp } from "lucide-react";

const revenueComparison = [
  { label: "Prev", revenue: 120000 },
  { label: "Now", revenue: 185000 },
];

const feeReasons = [
  { name: "Technical", value: 90000 },
  { name: "Prep", value: 40000 },
  { name: "Resume", value: 25000 },
  { name: "Soft Skills", value: 30000 },
];

const COLORS = ["#4f46e5", "#6366f1", "#818cf8", "#a5b4fc"];

export default function TrainingRevenueAnalytics() {
  const totalRevenue = revenueComparison[1].revenue;
  
  return (
    <div className="space-y-8">
      {/* Revenue Dashboard */}
      <div className="glass rounded-[2rem] p-8 border border-white/40 shadow-xl shadow-indigo-100/10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Left: Stats */}
          <div className="w-full lg:w-[300px] flex flex-col justify-between h-full min-h-[220px]">
            <div>
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-6 whitespace-nowrap">
                <DollarSign size={20} className="text-emerald-600" />
                Revenue Analytics
              </h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Training Revenue</p>
              <div className="flex items-center gap-3">
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">₹{totalRevenue.toLocaleString()}</h2>
                <span className="text-emerald-600 font-black text-sm flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <TrendingUp size={12} />
                  +54%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-100 mt-auto">
              <div className="min-w-fit">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Avg Duration</p>
                <p className="text-sm font-black text-slate-900 whitespace-nowrap">4.5 Weeks</p>
              </div>
              <div className="min-w-fit">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Trained</p>
                <p className="text-sm font-black text-slate-900 whitespace-nowrap">27 Candidates</p>
              </div>
            </div>
          </div>

          {/* Right: Bar Chart */}
          <div className="flex-1 w-full h-[250px] lg:h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueComparison} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="label" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 11, fontWeight: 900, fill: '#94a3b8' }} 
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="revenue" fill="#4f46e5" radius={[12, 12, 12, 12]} barSize={45} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Pie + Legend */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Pie Card */}
        <div className="glass rounded-[2rem] p-8 border border-white/40 flex flex-col h-full">
          <h3 className="text-[11px] font-black text-slate-900 flex items-center gap-2 mb-8 uppercase tracking-widest">
            <PieChartIcon size={16} className="text-indigo-600" />
            Training Breakdown
          </h3>
          <div className="flex-1 min-h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={feeReasons}
                  innerRadius={65}
                  outerRadius={90}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {feeReasons.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Legend Card */}
        <div className="glass rounded-[2rem] p-8 border border-white/40 flex flex-col justify-center h-full">
          <div className="space-y-6">
            {feeReasons.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-4 h-4 rounded-lg shadow-sm transition-transform group-hover:scale-110" 
                    style={{ backgroundColor: COLORS[index] }} 
                  />
                  <span className="text-sm font-bold text-slate-600">{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-300">₹{(item.value / 1000).toFixed(0)}k</span>
                  <div className="h-1.5 w-16 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full" 
                      style={{ 
                        backgroundColor: COLORS[index],
                        width: `${(item.value / feeReasons.reduce((acc, curr) => acc + curr.value, 0)) * 100}%` 
                      }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
