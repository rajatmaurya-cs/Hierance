"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBookmark, FaRegBookmark, FaStar } from "react-icons/fa";
import { Briefcase, MapPin, Users } from "lucide-react";

import type { Company } from "@/shared/data/mockData";

const CompanyCard = ({
  company,
  username,
}: {
  company: Company;
  username: string;
}) => {
  const [imgError, setImgError] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <article className="bg-white rounded-xl border border-slate-200 p-4 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex items-center gap-4">
      {/* Logo */}
      <div className="w-11 h-11 rounded-lg bg-slate-50 border border-slate-100 p-1.5 flex items-center justify-center flex-shrink-0 overflow-hidden">
        {!imgError ? (
          <Image
            src={company.logo}
            alt={company.name}
            width={32}
            height={32}
            className="object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold text-sm rounded">
            {company.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <h3 className="text-[15px] font-semibold text-slate-800 truncate font-primary">
              {company.name}
            </h3>
            <span className="flex items-center gap-1 text-xs text-slate-500 flex-shrink-0 font-primary">
              <FaStar size={11} className="text-amber-400" />
              {company.rating}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-semibold text-slate-500 uppercase tracking-wide flex-shrink-0 font-primary">
              {company.industry}
            </span>
          </div>
          <button
            onClick={() => setSaved(!saved)}
            className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors flex-shrink-0"
            aria-label={saved ? "Unsave company" : "Save company"}
          >
            {saved ? (
              <FaBookmark size={13} className="text-blue-600" />
            ) : (
              <FaRegBookmark size={13} className="text-slate-400" />
            )}
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs text-slate-500 font-primary">
          <span className="flex items-center gap-1">
            <MapPin size={12} className="text-slate-400" />
            {company.location}
          </span>
          <span className="flex items-center gap-1">
            <Users size={12} className="text-slate-400" />
            {company.employees.toLocaleString()} employees
          </span>
          <span className="flex items-center gap-1">
            <Briefcase size={12} className="text-slate-400" />
            <span className="text-blue-600 font-medium">{company.openJobs} open roles</span>
          </span>
          <span className="text-slate-400">
            {company.reviews.toLocaleString()} reviews · {company.companyType}
          </span>
        </div>
      </div>

      {/* Action */}
      <Link
        href={`/candidate/${username}/companies/${company.id}`}
        target="_blank"
        className="flex-shrink-0 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition font-primary"
      >
        View
      </Link>
    </article>
  );
};

export default CompanyCard;
