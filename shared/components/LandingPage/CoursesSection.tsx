"use client";

import React from "react";
import { Check, ChevronRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  thumbnail: string;
  skillsCount: string;
  tools: { name: string; color: string; bg: string }[];
  bullet1: string;
  bullet2: string;
  bullet3: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  thumbnail,
  skillsCount,
  tools,
  bullet1,
  bullet2,
  bullet3,
}) => {
  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 overflow-hidden flex flex-col h-full group">
      
      {/* Thumbnail */}
      <div className="relative h-56 w-full overflow-hidden border-b border-slate-50 shrink-0">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-1 gap-4">
        
        {/* Header */}
        <div>
          <h4 className="text-lg md:text-xl font-light text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
            {title}
          </h4>
          <span className="text-slate-400 text-xs font-medium mt-0.5 block">
            with Placement Assistance
          </span>
        </div>

        {/* Bullet offerings */}
        <div className="flex-1">
          <ul className="space-y-2">
            <li className="flex items-start gap-2.5 text-slate-600 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span>{bullet1}</span>
            </li>
            <li className="flex items-start gap-2.5 text-slate-600 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span>{bullet2}</span>
            </li>
            <li className="flex items-start gap-2.5 text-slate-600 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span>{bullet3}</span>
            </li>
          </ul>
        </div>

        {/* Skills & Tools line */}
        <div className="flex items-center gap-3 pt-3 border-t border-slate-50">
          <span className="text-slate-500 text-xs font-normal shrink-0">
            Skills & Tools
          </span>
          <div className="flex items-center gap-1.5 overflow-hidden">
            {tools.map((t, idx) => (
              <span 
                key={idx}
                className={`text-[9px] font-bold px-2 py-0.5 rounded-md ${t.color} ${t.bg} uppercase tracking-wider shrink-0 select-none`}
              >
                {t.name}
              </span>
            ))}
            <span className="text-slate-400 text-[11px] font-medium pl-1 select-none">
              & more
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-normal rounded-xl text-sm transition-all hover:scale-[1.01] flex items-center justify-center gap-1 cursor-pointer">
          <span>Know More</span>
          <ChevronRight size={16} />
        </button>

      </div>
    </div>
  );
};

const CoursesSection = () => {
  return (
    <div className="w-full">
      
      {/* Top Banner and Brand Logo */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight leading-tight mb-4">
            Online Courses with Placement Assistance
          </h2>
          
          {/* Bullet point header badges */}
          <div className="flex flex-wrap gap-3">
            {[
              "Real world projects",
              "Unlimited AI mock interviews",
              "Priority Access to top opportunities"
            ].map((text, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-1.5 px-4 py-2 bg-indigo-50/40 border border-indigo-100/50 text-indigo-600 rounded-full text-xs font-normal tracking-wide"
              >
                <Check size={14} className="stroke-[3]" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Offered By Badge */}
        <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-sm shrink-0 self-start md:self-center">
          <span className="text-[11px] font-normal text-slate-400 uppercase tracking-widest">
            Offered by
          </span>
          <img 
            src="/hireance-PNG-logo.png" 
            alt="Hierance Logo" 
            className="h-7 object-contain"
          />
        </div>
      </div>

      {/* Grid of 3 courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-10">
        
        {/* Web Development */}
        <CourseCard
          title="Web Development Course"
          thumbnail="/web_dev_thumb.png"
          skillsCount="8+"
          bullet1="Master 8+ in-demand skills & tools"
          bullet2="Unlimited mock AI interviews"
          bullet3="Priority access to top opportunities"
          tools={[
            { name: "React", color: "text-indigo-600", bg: "bg-indigo-50" },
            { name: "Node", color: "text-indigo-600", bg: "bg-indigo-50" },
            { name: "Mongo", color: "text-indigo-600", bg: "bg-indigo-50" },
            { name: "JS", color: "text-indigo-600", bg: "bg-indigo-50" },
          ]}
        />

        {/* Data Science */}
        <CourseCard
          title="Data Science Course"
          thumbnail="/data_science_thumb.png"
          skillsCount="10+"
          bullet1="Master 10+ in-demand skills & tools"
          bullet2="Unlimited mock AI interviews"
          bullet3="Priority access to top opportunities"
          tools={[
            { name: "Python", color: "text-indigo-600", bg: "bg-indigo-50" },
            { name: "SQL", color: "text-indigo-600", bg: "bg-indigo-50" },
            { name: "Pandas", color: "text-indigo-600", bg: "bg-indigo-50" },
            { name: "NumPy", color: "text-indigo-600", bg: "bg-indigo-50" },
          ]}
        />

        {/* Digital Marketing */}
        <CourseCard
          title="Digital Marketing Course"
          thumbnail="/marketing_thumb.png"
          skillsCount="8+"
          bullet1="Master 8+ in-demand skills & tools"
          bullet2="Unlimited mock AI interviews"
          bullet3="Priority access to top opportunities"
          tools={[
            { name: "SEO", color: "text-indigo-600", bg: "bg-indigo-50" },
            { name: "Ads", color: "text-indigo-600", bg: "bg-indigo-50" },
            { name: "Social", color: "text-indigo-600", bg: "bg-indigo-50" },
            { name: "Mail", color: "text-indigo-600", bg: "bg-indigo-50" },
          ]}
        />

      </div>

    </div>
  );
};

export default CoursesSection;
