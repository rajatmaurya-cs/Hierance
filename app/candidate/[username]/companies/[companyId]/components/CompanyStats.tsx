"use client";

import { Briefcase, Users, Calendar, Star } from "lucide-react";

interface CompanyStatsProps {
  totalJobs: number;
  activeJobs: number;
  employees: number;
  foundedYear: number;
  rating: number;
}

export default function CompanyStats({
  totalJobs,
  activeJobs,
  employees,
  foundedYear,
  rating,
}: CompanyStatsProps) {
  const stats = [
    {
      label: "Open Positions",
      value: activeJobs,
      icon: <Briefcase size={16} className="text-blue-500" />,
    },
    {
      label: "Employees",
      value: `${(employees / 1000).toFixed(0)}k+`,
      icon: <Users size={16} className="text-slate-500" />,
    },
    {
      label: "Founded",
      value: foundedYear,
      icon: <Calendar size={16} className="text-slate-500" />,
    },
    {
      label: "Rating",
      value: rating,
      icon: <Star size={16} className="text-amber-500 fill-amber-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-4 border border-slate-200 flex items-center gap-3"
        >
          <div className="w-9 h-9 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">
            {stat.icon}
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-800 font-inter">{stat.value}</p>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider font-inter">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
