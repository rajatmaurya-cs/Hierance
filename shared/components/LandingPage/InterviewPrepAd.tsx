"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

// SVGs for company logos
const CognizantLogo = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
    <path d="M30 40 C35 32, 65 32, 70 40 C60 48, 40 48, 30 40 Z" fill="#003366" />
    <path d="M30 60 C35 68, 65 68, 70 60 C60 52, 40 52, 30 60 Z" fill="#00cc99" />
  </svg>
);

const ByjusLogo = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#800080" />
    <text x="50" y="65" fill="white" fontSize="42" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">B</text>
  </svg>
);

const TCSLogo = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
    <path d="M30 65 L45 35 L60 65" stroke="#1d4ed8" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M50 35 L65 65" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" fill="none" />
  </svg>
);

const AccentureLogo = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
    <path d="M35 30 L65 50 L35 70" stroke="#a21caf" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const FlipkartLogo = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#facc15" />
    <path d="M25 35 C25 25, 75 25, 75 35 L70 75 L30 75 Z" fill="#1d4ed8" />
    <text x="50" y="62" fill="white" fontSize="28" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">f</text>
  </svg>
);

const AmazonLogo = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
    <text x="50" y="52" fill="#000000" fontSize="32" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">a</text>
    <path d="M25 60 Q50 78 75 60" stroke="#f97316" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M70 56 L77 62 L74 70" fill="#f97316" />
  </svg>
);

const InterviewPrepAd = () => {
  return (
    <div className="w-full relative py-6">
      {/* Background orange tint overlay bar for overlapping effect */}
      <div className="absolute top-1/2 left-0 right-0 h-40 bg-[#fffbf7] -translate-y-1/2 -z-10 rounded-[3rem]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Panel: Prepare Banner */}
        <div className="lg:col-span-3 bg-[#fff7ee] border border-[#ffe9d2] p-8 rounded-[2rem] flex flex-col justify-between relative overflow-hidden min-h-[380px] lg:min-h-[420px]">
          
          

          {/* SVG Illustration of two people conversing */}
          <div className="w-full flex justify-center py-4 relative">
            <svg className="w-full max-w-[220px] h-36" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer soft glowing back circles */}
              <circle cx="55" cy="70" r="32" fill="#fffcf9" />
              <circle cx="145" cy="75" r="32" fill="#fffcf9" />
              
              {/* Left Person (Man with glasses) */}
              <g transform="translate(15, 20)">
                {/* Body / Jacket */}
                <path d="M15 80 C15 52, 45 52, 45 80" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
                <path d="M22 80 V62 H38 V80" fill="#f8fafc" />
                <path d="M30 62 V80" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* Head */}
                <circle cx="30" cy="42" r="13" fill="#ffe4e6" stroke="#1e293b" strokeWidth="2.5" />
                {/* Hair */}
                <path d="M16 40 C16 28, 44 28, 44 40" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                {/* Glasses */}
                <rect x="23" y="38" width="6" height="5" rx="1.5" stroke="#1e293b" strokeWidth="1.5" fill="none" />
                <rect x="31" y="38" width="6" height="5" rx="1.5" stroke="#1e293b" strokeWidth="1.5" fill="none" />
                <line x1="29" y1="41" x2="31" y2="41" stroke="#1e293b" strokeWidth="1.5" />
              </g>

              {/* Right Person (Woman with ponytail) */}
              <g transform="translate(125, 25)">
                {/* Body */}
                <path d="M15 75 C15 50, 45 50, 45 75" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
                <path d="M20 75 V60 H40 V75" fill="#f8fafc" />
                {/* Head */}
                <circle cx="30" cy="38" r="13" fill="#ffe4e6" stroke="#1e293b" strokeWidth="2.5" />
                {/* Hair / Ponytail */}
                <path d="M36 26 C22 24, 20 44, 18 48 C16 52, 14 54, 12 52" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M26 26 C36 20, 44 32, 42 45" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </g>

              {/* Speech Bubbles */}
              {/* Left bubble */}
              <g transform="translate(70, 10)">
                <path d="M 5 22 C 5 12, 25 12, 25 22 C 25 28, 20 30, 17 33 L 15 37 L 15 33 C 8 33, 5 28, 5 22" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
                <line x1="10" y1="20" x2="20" y2="20" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="10" y1="24" x2="18" y2="24" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              </g>

              {/* Right bubble */}
              <g transform="translate(100, 22)">
                <path d="M 25 22 C 25 12, 5 12, 5 22 C 5 28, 10 30, 13 33 L 15 37 L 15 33 C 22 33, 25 28, 25 22" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
                <line x1="10" y1="20" x2="20" y2="20" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="12" y1="24" x2="20" y2="24" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          {/* Heading Text */}
          <h3 className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight leading-tight select-none">
            Prepare for your next interview
          </h3>
        </div>

        {/* Middle Panel: Interview questions by company */}
        <div className="lg:col-span-5 bg-white border border-slate-100 p-8 rounded-[2rem] shadow-xl shadow-slate-100/40 flex flex-col justify-between min-h-[380px] lg:min-h-[420px]">
          <div>
            <h4 className="text-xl font-light text-slate-900 mb-6 font-semibold">
              Interview questions by company
            </h4>

            {/* 6 companies grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Cognizant", count: "1.6K+ Interviews", logo: CognizantLogo },
                { name: "Byjus", count: "816 Interviews", logo: ByjusLogo },
                { name: "TCS", count: "2.5K+ Interviews", logo: TCSLogo },
                { name: "Accenture", count: "2K+ Interviews", logo: AccentureLogo },
                { name: "Flipkart", count: "488 Interviews", logo: FlipkartLogo },
                { name: "Amazon", count: "1.7K+ Interviews", logo: AmazonLogo },
              ].map((comp, idx) => (
                <div 
                  key={idx}
                  className="group flex items-center justify-between p-4 border border-slate-100 hover:border-indigo-100 hover:shadow-sm rounded-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <comp.logo />
                    <div>
                      <h5 className="font-normal text-slate-800 group-hover:text-indigo-600 transition-colors text-sm md:text-base">
                        {comp.name}
                      </h5>
                      <span className="text-xs text-slate-400 font-normal">
                        {comp.count}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-[#4d3df5] transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* View All Companies */}
          <div className="text-center mt-6">
            <button className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-850 font-normal text-sm hover:underline cursor-pointer">
              View all companies
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Right Panel: Interview questions by role */}
        <div className="lg:col-span-4 bg-white border border-slate-100 p-8 rounded-[2rem] shadow-xl shadow-slate-100/40 flex flex-col justify-between min-h-[380px] lg:min-h-[420px]">
          <div>
            <h4 className="text-xl font-light text-slate-900 mb-6">
              Interview questions by role
            </h4>

            {/* List of roles */}
            <div className="divide-y divide-slate-100">
              {[
                { role: "Software Engineer", count: "7.2K+ questions" },
                { role: "Business Analyst", count: "2.8K+ questions" },
                { role: "Consultant", count: "2.4K+ questions" },
                { role: "Financial Analyst", count: "894 questions" },
                { role: "Sales & Marketing", count: "991 questions" },
                { role: "Quality Engineer", count: "1.3K+ questions" },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="group flex items-center justify-between py-3 cursor-pointer first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-normal text-slate-700 group-hover:text-indigo-600 transition-colors text-sm md:text-base">
                      {item.role}
                    </span>
                    <span className="text-xs text-slate-400 font-normal">
                      ({item.count})
                    </span>
                  </div>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-[#4d3df5] transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* View All Roles */}
          <div className="text-center mt-6">
            <button className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-850 font-normal text-sm hover:underline cursor-pointer">
              View all roles
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InterviewPrepAd;
