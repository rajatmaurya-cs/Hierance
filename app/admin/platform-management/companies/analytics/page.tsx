"use client";
import { FaBuilding, FaUserTie, FaChartLine, FaStar } from "react-icons/fa";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from "recharts";

const stats = [
  { title: "Total Companies", value: 1240, icon: <FaBuilding />, color: "text-purple-600", bg: "bg-purple-100", trend: 5 },
  { title: "Active Hiring", value: 850, icon: <FaUserTie />, color: "text-emerald-600", bg: "bg-emerald-100", trend: 12 },
  { title: "Total Jobs Posted", value: 4520, icon: <FaChartLine />, color: "text-blue-600", bg: "bg-blue-100", trend: 8 },
  { title: "Avg Rating", value: 4.2, icon: <FaStar />, color: "text-orange-600", bg: "bg-orange-100" },
];

const companyGrowth = [
  { name: "Jan", companies: 100 },
  { name: "Feb", companies: 150 },
  { name: "Mar", companies: 220 },
  { name: "Apr", companies: 280 },
  { name: "May", companies: 350 },
  { name: "Jun", companies: 420 },
];

const industryData = [
  { name: "Tech", value: 400 },
  { name: "Finance", value: 300 },
  { name: "Healthcare", value: 200 },
  { name: "Retail", value: 150 },
  { name: "Other", value: 190 },
];

const sizeData = [
  { name: "1-50", value: 35 },
  { name: "51-200", value: 40 },
  { name: "201-500", value: 15 },
  { name: "500+", value: 10 },
];

const COLORS = ['#8b5cf6', '#10b981', '#3b82f6', '#f59e0b', '#64748b'];
const PIE_COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e'];

export default function CompaniesAnalyticsPage() {
  return (
    <section className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-slate-800">Company Analytics</h1>
        <p className="text-slate-500">Overview of registered companies, hiring trends, and industry distribution.</p>
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
          <h3 className="text-lg font-semibold mb-4 text-slate-800">Company Signups Growth</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={companyGrowth}>
                <defs>
                  <linearGradient id="colorComps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#64748b' }} />
                <YAxis stroke="#64748b" tick={{ fill: '#64748b' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Area type="monotone" dataKey="companies" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorComps)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-slate-800">Company Size Distribution</h3>
          <div className="h-[300px] flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sizeData} cx="50%" cy="50%" innerRadius={80} outerRadius={110} paddingAngle={5} dataKey="value">
                  {sizeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <span className="block text-2xl font-bold text-slate-800">1,240</span>
                <span className="block text-sm text-slate-500">Total</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
              {sizeData.map((cat, i) => (
                  <div key={cat.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length]}}></div>
                      <span className="text-sm text-slate-600">{cat.name}</span>
                  </div>
              ))}
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-slate-800">Companies by Industry</h3>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={industryData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#64748b' }} />
              <YAxis stroke="#64748b" tick={{ fill: '#64748b' }} />
              <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={40}>
                {industryData.map((entry, index) => (
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
