"use client";

import { CheckCircle2 } from "lucide-react";

interface CompanyBenefitsProps {
  benefits: string[];
}

export default function CompanyBenefits({ benefits }: CompanyBenefitsProps) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
      <h2 className="text-sm font-semibold text-slate-700 font-inter">Perks & Benefits</h2>
      <div className="space-y-2">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100"
          >
            <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={14} />
            <span className="text-xs font-medium text-slate-600 font-inter">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
