"use client";

import { Sparkles } from "lucide-react";

interface JobHeaderProps {
  jobId?: string;
}

function formatJobTitle(slug?: string) {
  if (!slug) return "Job Details";
  // Remove hyphens and capitalize
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default function JobHeader({ jobId }: JobHeaderProps) {
  const formattedTitle = formatJobTitle(jobId);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-jakarta">
      <div className="space-y-1.5">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {formattedTitle}
        </h1>

        <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
          Monitor hiring performance, applicant progress and job insights
        </p>
      </div>

      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 text-[12px] font-bold uppercase tracking-wider">
        <Sparkles size={14} strokeWidth={2.5} />
        Active Job
      </div>
    </div>
  );
}
