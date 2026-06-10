"use client";

import { Info, Target, Eye, Heart, ListChecks } from "lucide-react";

interface CompanyOverviewProps {
  overview: {
    shortDescription: string;
    mission: string;
    vision: string;
    culture: string;
    hiringProcess: string;
  };
}

export default function CompanyOverview({ overview }: CompanyOverviewProps) {
  return (
    <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 space-y-6">
      {/* About */}
      <div>
        <SectionLabel icon={<Info size={15} />} label="About Company" />
        <p className="text-sm text-slate-600 leading-relaxed mt-2 font-inter">
          {overview.shortDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Mission */}
        <div>
          <SectionLabel icon={<Target size={15} />} label="Our Mission" />
          <p className="text-sm text-slate-500 leading-relaxed mt-2 italic border-l-2 border-slate-200 pl-3 font-inter">
            &ldquo;{overview.mission}&rdquo;
          </p>
        </div>

        {/* Vision */}
        <div>
          <SectionLabel icon={<Eye size={15} />} label="Our Vision" />
          <p className="text-sm text-slate-500 leading-relaxed mt-2 italic border-l-2 border-slate-200 pl-3 font-inter">
            &ldquo;{overview.vision}&rdquo;
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-slate-100">
        {/* Culture */}
        <div>
          <SectionLabel icon={<Heart size={15} />} label="Company Culture" />
          <p className="text-sm text-slate-600 leading-relaxed mt-2 font-inter">
            {overview.culture}
          </p>
        </div>

        {/* Hiring Process */}
        <div>
          <SectionLabel icon={<ListChecks size={15} />} label="Hiring Process" />
          <p className="text-sm text-slate-600 leading-relaxed mt-2 font-inter">
            {overview.hiringProcess}
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-slate-400">{icon}</span>
      <h3 className="text-sm font-semibold text-slate-700 font-inter">{label}</h3>
    </div>
  );
}