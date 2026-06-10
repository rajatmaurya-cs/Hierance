"use client";

import Image from "next/image";
import { MapPin, Globe, Share2, CheckCircle, Building2, ExternalLink } from "lucide-react";
import { useState } from "react";

interface CompanyHeaderProps {
  company: {
    name: string;
    logo: string;
    industry: string;
    location: string;
    website: string;
    verified: boolean;
  };
}

export default function CompanyHeader({ company }: CompanyHeaderProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        {/* Logo */}
        <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center flex-shrink-0 overflow-hidden">
          {imgError ? (
            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold text-lg rounded">
              {company.name.charAt(0)}
            </div>
          ) : (
            <Image
              src={company.logo}
              alt={company.name}
              width={40}
              height={40}
              className="object-contain"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-slate-800 tracking-tight font-inter">
              {company.name}
            </h1>
            {company.verified && (
              <CheckCircle className="text-blue-500 w-4 h-4 flex-shrink-0" />
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-1.5 text-sm text-slate-500 font-inter">
            <span className="flex items-center gap-1.5">
              <Building2 size={14} className="text-slate-400" />
              {company.industry}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-slate-400" />
              {company.location}
            </span>
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-500 hover:text-blue-600 transition"
            >
              <Globe size={14} />
              Website
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`flex-1 sm:flex-none px-5 py-2 rounded-lg text-xs font-semibold transition font-inter ${
              isFollowing
                ? "bg-slate-100 text-slate-600 border border-slate-200"
                : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
          <button className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition">
            <Share2 size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
