"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { MapPin, Phone, Mail, Briefcase, Pencil } from "lucide-react";
import { mockCandidates } from "@/shared/data/mockData";

const CandidateProfileHeader = () => {
  const params = useParams();
  const username = params.username as string;
  const candidate = mockCandidates.find(c => c.username === username || c._id === username) || mockCandidates[0];

  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-100/60 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Avatar */}
        <div className="relative flex-shrink-0 group">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100/60 shadow-sm">
            {!imgError ? (
              <Image
                src={candidate.avatar}
                alt={candidate.fullName}
                width={64}
                height={64}
                className="object-cover w-full h-full"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-500 font-semibold text-xl bg-slate-200">
                {candidate.fullName.charAt(0)}
              </div>
            )}
          </div>
          <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all opacity-0 group-hover:opacity-100">
            <Pencil size={14} />
          </button>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 sm:pt-2">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800 font-inter tracking-tight">
                {candidate.fullName}
              </h1>
              <p className="text-[15px] text-slate-500 mt-1 font-inter">
                {candidate.headline}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium flex-shrink-0 font-inter">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
              Open to work
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 mt-4 text-[13px] text-slate-500 font-inter">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-slate-400" />
              {candidate.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} className="text-slate-400" />
              {candidate.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={14} className="text-slate-400" />
              {candidate.phone}
            </span>
            {candidate.experience.length > 0 && (
              <span className="flex items-center gap-1.5">
                <Briefcase size={14} className="text-slate-400" />
                {candidate.experience[0].title} at {candidate.experience[0].company}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfileHeader;
