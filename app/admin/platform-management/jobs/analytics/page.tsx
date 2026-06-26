"use client";
import { FaBriefcase, FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from "recharts";

const stats = [
  { title: "Total Jobs", value: 4520, icon: <FaBriefcase />, color: "text-blue-600", bg: "bg-blue-100", trend: 12 },
  { title: "Active Listings", value: 3210, icon: <FaCheckCircle />, color: "text-emerald-600", bg: "bg-emerald-100", trend: 8 },
  { title: "Pending Approval", value: 150, icon: <FaClock />, color: "text-orange-600", bg: "bg-orange-100" },
  { title: "Expired Jobs", value: 1160, icon: <FaTimesCircle />, color: "text-red-600", bg: "bg-red-100" },
];

const jobsGrowth = [
  { name: "Jan", jobs: 400 },
  { name: "Feb", jobs: 550 },
  { name: "Mar", jobs: 700 },
  { name: "Apr", jobs: 680 },
  { name: "May", jobs: 900 },
  { name: "Jun", jobs: 1100 },
];

const categoryData = [
  { name: "Engineering", value: 45 },
  { name: "Design", value: 20 },
  { name: "Marketing", value: 15 },
  { name: "Sales", value: 20 },
];
const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#ef4444'];

export default function JobsAnalyticsPage() {
  return (
    <section className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-slate-800">Jobs Analytics</h1>
        <p className="text-slate-500">Track job postings, active listings, and category distributions.</p>
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
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                {stat.trend && <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+{stat.trend}%</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-slate-800">Job Postings Growth</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={jobsGrowth}>
                <defs>
                  <linearGradient id="colorJobs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#64748b' }} />
                <YAxis stroke="#64748b" tick={{ fill: '#64748b' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Area type="monotone" dataKey="jobs" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorJobs)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-slate-800">Jobs by Category</h3>
          <div className="h-[300px] flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" innerRadius={80} outerRadius={110} paddingAngle={5} dataKey="value">
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <span className="block text-2xl font-bold text-slate-800">4,520</span>
                <span className="block text-sm text-slate-500">Total</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
              {categoryData.map((cat, i) => (
                  <div key={cat.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length]}}></div>
                      <span className="text-sm text-slate-600">{cat.name}</span>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
