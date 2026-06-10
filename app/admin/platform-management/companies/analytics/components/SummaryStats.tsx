"use client";

import {
  FaUsers,
  FaUserPlus,
  FaUserClock,
  FaUserCheck,
  FaUserCog,
} from "react-icons/fa";

type Stat = {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend?: number;
  color: string;
  bg: string;
};

const stats: Stat[] = [
  {
    title: "Total Job Seekers",
    value: 12540,
    icon: <FaUsers />,
    trend: 8,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "New Users Today",
    value: 84,
    icon: <FaUserPlus />,
    trend: 12,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    title: "New Users This Week",
    value: 430,
    icon: <FaUserClock />,
    trend: 6,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "Active Users (7 days)",
    value: 3920,
    icon: <FaUserCheck />,
    trend: 5,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    title: "Profile Completed %",
    value: 72,
    icon: <FaUserCog />,
    trend: 3,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
];

const SummaryStats = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="group relative bg-white border border-neutral-200 rounded-xl p-5 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          {/* icon */}
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-lg ${stat.bg}`}
          >
            <span className={`text-lg ${stat.color}`}>{stat.icon}</span>
          </div>

          {/* content */}
          <div className="flex flex-col">
            <p className="text-sm text-neutral-500">{stat.title}</p>

            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-neutral-900">
                {stat.value}
              </h3>

              {stat.trend && (
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                  +{stat.trend}%
                </span>
              )}
            </div>
          </div>

          {/* hover gradient */}
          {/* <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-gradient-to-r from-transparent via-neutral-100 to-transparent blur-xl"></div> */}
        </div>
      ))}
    </section>
  );
};

export default SummaryStats;
