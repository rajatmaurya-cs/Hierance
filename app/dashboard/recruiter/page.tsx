"use client";

import { motion } from "framer-motion";
import {
  FaCalendar,
  FaArrowUp,
  FaBriefcase,
  FaUsers,
  FaUserCheck,
  FaBell,
  FaClock,
  FaChevronRight,
} from "react-icons/fa";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

/* ---------------- DATA ---------------- */

const stats = [
  {
    title: "Jobs Posted",
    value: 42,
    change: "+12%",
    icon: <FaBriefcase />,
  },
  {
    title: "Applicants",
    value: 4890,
    change: "+21%",
    icon: <FaUsers />,
  },
  {
    title: "Shortlisted",
    value: 186,
    change: "+8.4%",
    icon: <FaUserCheck />,
  },
  {
    title: "Subscription",
    value: "Pro Plan",
    sub: "18 days left",
    icon: <FaBell />,
  },
];

const hiringData = [
  { month: "Jan", applied: 320, hired: 6 },
  { month: "Feb", applied: 280, hired: 8 },
  { month: "Mar", applied: 410, hired: 12 },
  { month: "Apr", applied: 380, hired: 10 },
  { month: "May", applied: 460, hired: 14 },
  { month: "Jun", applied: 520, hired: 18 },
];

const funnelData = [
  { name: "Applied", value: 4890, color: "#4f46e5" }, // indigo-600
  { name: "Shortlisted", value: 612, color: "#818cf8" }, // indigo-400
  { name: "Interviewed", value: 142, color: "#a5b4fc" }, // indigo-300
  { name: "Hired", value: 14, color: "#c7d2fe" }, // indigo-200
];

const alerts = [
  {
    title: "Jobs expiring soon",
    desc: "2 jobs will expire in 3 days",
    color: "amber",
    icon: <FaClock />,
    action: "View jobs",
  },
  {
    title: "Low applicants",
    desc: "Backend role has low reach",
    color: "rose",
    icon: <FaUsers />,
    action: "Boost job",
  },
  {
    title: "Subscription renewal",
    desc: "Plan renews in 18 days",
    color: "indigo",
    icon: <FaBell />,
    action: "Manage plan",
  },
];

const COLORS = ["#4f46e5", "#818cf8", "#a5b4fc", "#c7d2fe"];

/* ---------------- COMPONENT ---------------- */

const RecruiterDashboard = () => {
  return (
    <section className="min-h-screen bg-[#f8fafc] px-8 py-8 text-slate-800 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -u-z-10 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -u-z-10 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-3xl opacity-50" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-10">
        <div className="space-y-1">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Analytics <span className="gradient-text">Overview</span>
          </h1>
          <p className="text-slate-500 font-medium">Welcome back, here's what's happening today.</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm text-sm font-semibold text-slate-600 hover:border-indigo-300 transition-colors cursor-pointer">
            <FaCalendar className="text-indigo-600" />
            <span>01 Feb 2026 - 01 Mar 2026</span>
          </div>

          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900 leading-none">Recruiter Name</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">Senior Talent Partner</p>
            </div>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-100 border-2 border-white">
              <FaUsers size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="glass group p-6 rounded-[2rem] hover:bg-white transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-5">
              <div className={`p-3 rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300`}>
                {item.icon}
              </div>
              {item.change && (
                <div className="flex items-center text-xs font-bold px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full">
                  <FaArrowUp className="mr-1" size={10} />
                  {item.change}
                </div>
              )}
            </div>

            <p className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-wider">{item.title}</p>
            <h2 className="text-3xl font-black text-slate-900">{item.value}</h2>

            {item.sub && (
              <div className="mt-3 flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                </div>
                <span className="text-xs font-bold text-slate-500">{item.sub}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* MIDDLE SECTION */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Hiring Activity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass p-8 rounded-[2.5rem] col-span-2 shadow-indigo-100/20"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">Hiring Activity</h3>
              <p className="text-sm text-slate-500 font-medium">Monthly application and hiring trends</p>
            </div>
            <select className="bg-slate-50 border-none rounded-lg text-xs font-bold text-slate-600 px-3 py-2 outline-none cursor-pointer">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={hiringData}>
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
              />
              <Tooltip 
                cursor={{ fill: '#f1f5f9' }}
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="applied" fill="#c7d2fe" radius={[8, 8, 0, 0]} barSize={32} />
              <Bar dataKey="hired" fill="#4f46e5" radius={[8, 8, 0, 0]} barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Funnel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="glass p-8 rounded-[2.5rem] shadow-indigo-100/20 flex flex-col"
        >
          <h3 className="text-xl font-extrabold text-slate-900 mb-1">Hiring Funnel</h3>
          <p className="text-sm text-slate-500 font-medium mb-8">
            Candidate distribution
          </p>

          <div className="flex-1 flex flex-col justify-center">
            {/* Donut Chart */}
            <div className="relative h-[220px] mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={funnelData}
                    innerRadius={75}
                    outerRadius={100}
                    paddingAngle={8}
                    dataKey="value"
                    stroke="none"
                  >
                    {funnelData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={entry.color}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-black text-slate-900">4.8k</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total</span>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-4">
              {funnelData.map((item, i) => {
                const total = funnelData.reduce(
                  (sum, curr) => sum + curr.value,
                  0,
                );
                const percentage = ((item.value / total) * 100).toFixed(0);

                return (
                  <div key={i} className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <p className="text-xs font-bold text-slate-700">{item.name}</p>
                    </div>
                    <p className="text-sm font-black text-slate-900 pl-4">
                      {percentage}%
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Salary Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass p-8 rounded-[2.5rem] col-span-2 shadow-indigo-100/20"
        >
          <h3 className="text-xl font-extrabold text-slate-900 mb-8">Avg Salary Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={hiringData}>
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Line
                type="monotone"
                dataKey="applied"
                stroke="#4f46e5"
                strokeWidth={4}
                dot={{ r: 6, fill: '#4f46e5', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Smart Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass p-8 rounded-[2.5rem] shadow-indigo-100/20"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-extrabold text-slate-900">Smart Alerts</h3>
            <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
          </div>

          <div className="space-y-4">
            {alerts.map((alert, i) => {
              const colorClasses: Record<string, string> = {
                amber: "bg-amber-50 text-amber-600 border-amber-100",
                rose: "bg-rose-50 text-rose-600 border-rose-100",
                indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
              };
              
              return (
                <div
                  key={i}
                  className={`group relative flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 ${colorClasses[alert.color] || "bg-slate-50 border-slate-100 text-slate-600"}`}
                >
                  <div className="mt-1 p-2 bg-white rounded-xl shadow-sm">
                    {alert.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-black mb-0.5">{alert.title}</p>
                    <p className="text-xs font-medium opacity-80 leading-relaxed">{alert.desc}</p>
                    <div className="mt-2 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {alert.action}
                      <FaChevronRight size={8} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruiterDashboard;
