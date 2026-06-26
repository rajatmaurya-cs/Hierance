"use client";
import { FaFileAlt, FaCalendarCheck, FaTrophy, FaTimesCircle } from "react-icons/fa";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from "recharts";

const stats = [
  { title: "Total Applications", value: 24500, icon: <FaFileAlt />, color: "text-blue-600", bg: "bg-blue-100", trend: 15 },
  { title: "Interviews Scheduled", value: 3200, icon: <FaCalendarCheck />, color: "text-purple-600", bg: "bg-purple-100", trend: 5 },
  { title: "Offers Made", value: 850, icon: <FaTrophy />, color: "text-emerald-600", bg: "bg-emerald-100", trend: 22 },
  { title: "Rejected", value: 8400, icon: <FaTimesCircle />, color: "text-red-600", bg: "bg-red-100" },
];

const applicationsGrowth = [
  { name: "Jan", apps: 1500 },
  { name: "Feb", apps: 2200 },
  { name: "Mar", apps: 3800 },
  { name: "Apr", apps: 4100 },
  { name: "May", apps: 5500 },
  { name: "Jun", apps: 7400 },
];

const sourceData = [
  { name: "Direct", value: 8500 },
  { name: "Referral", value: 5200 },
  { name: "LinkedIn", value: 6800 },
  { name: "Agency", value: 2100 },
  { name: "Other", value: 1900 },
];

const statusData = [
  { name: "Pending", value: 45 },
  { name: "Reviewed", value: 25 },
  { name: "Interview", value: 15 },
  { name: "Offer", value: 5 },
  { name: "Rejected", value: 10 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#64748b'];
const PIE_COLORS = ['#64748b', '#3b82f6', '#8b5cf6', '#10b981', '#ef4444'];

export default function ApplicationsAnalyticsPage() {
  return (
    <section className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-slate-800">Applications Analytics</h1>
        <p className="text-slate-500">Track application volume, candidate pipeline status, and sourcing channels.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition">
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${stat.bg} ${stat.color} text-xl`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">{stat.title}</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-slate-900">{stat.value.toLocaleString()}</h3>
                {stat.trend && <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+{stat.trend}%</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-slate-800">Application Volume Trends</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={applicationsGrowth}>
                <defs>
                  <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#64748b' }} />
                <YAxis stroke="#64748b" tick={{ fill: '#64748b' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Area type="monotone" dataKey="apps" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorApps)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-slate-800">Pipeline Status Distribution</h3>
          <div className="h-[300px] flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={statusData} cx="50%" cy="50%" innerRadius={80} outerRadius={110} paddingAngle={5} dataKey="value">
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <span className="block text-2xl font-bold text-slate-800">24.5k</span>
                <span className="block text-sm text-slate-500">Total Apps</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
              {statusData.map((cat, i) => (
                  <div key={cat.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length]}}></div>
                      <span className="text-sm text-slate-600">{cat.name}</span>
                  </div>
              ))}
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-slate-800">Applications by Source</h3>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sourceData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#64748b' }} />
              <YAxis stroke="#64748b" tick={{ fill: '#64748b' }} />
              <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40}>
                {sourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
