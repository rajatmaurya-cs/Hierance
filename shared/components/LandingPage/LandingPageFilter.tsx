"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal, Briefcase, MapPin, Target, Wallet } from "lucide-react";

const CATEGORIES = ["Software", "MNC", "Analytics", "Banking", "Startup", "Fresher", "Marketing", "Data Science"];
const SKILLS = ["React", "Next.js", "Node.js", "TypeScript", "Figma"];
const LOCATIONS = ["Remote", "Bangalore", "Mumbai", "Delhi", "Seattle"];
const JOB_TYPES = ["Full-Time", "Part-Time", "Contract", "Internship"];

export default function LandingPageFilter() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="w-full sticky top-32">
      <div className="mb-6">
        <h3 className="text-2xl font-light text-slate-800 mb-2">Find your fit</h3>
        <p className="text-sm text-slate-400 font-light">Refine the opportunities based on your preferences.</p>
      </div>

      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl hover:bg-slate-100 transition-all duration-300 group"
        >
          <div className="flex items-center gap-3">
            <SlidersHorizontal size={18} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
            <span className="text-slate-600 font-normal">Filter by</span>
          </div>
          <ChevronDown size={18} className={`text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="mt-4 p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 space-y-10 animate-in slide-in-from-top-4 duration-500">
            {/* Categories */}
            <FilterSection 
              title="Job Category" 
              icon={<Briefcase size={16} />} 
              items={CATEGORIES} 
            />

            {/* Skills */}
            <FilterSection 
              title="Top Skills" 
              icon={<Target size={16} />} 
              items={SKILLS} 
            />

            {/* Location */}
            <FilterSection 
              title="Location" 
              icon={<MapPin size={16} />} 
              items={LOCATIONS} 
            />

            {/* Job Type */}
            <FilterSection 
              title="Work Type" 
              icon={<Target size={16} />} 
              items={JOB_TYPES} 
            />
            
            <button className="w-full py-4 bg-indigo-500/10 text-indigo-600 rounded-2xl text-sm font-medium hover:bg-indigo-500 hover:text-white transition-all duration-300">
              Apply Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterSection({ title, icon, items }: { title: string, icon: React.ReactNode, items: string[] }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-slate-400">
        {icon}
        <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em]">{title}</h4>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {items.map(item => (
          <label key={item} className="flex items-center gap-3 group cursor-pointer">
            <div className="relative flex items-center justify-center w-5 h-5 rounded-md border border-slate-200 group-hover:border-indigo-400 transition-all">
              <input type="checkbox" className="peer opacity-0 absolute inset-0 cursor-pointer" />
              <div className="w-2.5 h-2.5 rounded-sm bg-indigo-500 opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
            <span className="text-sm text-slate-500 font-light group-hover:text-slate-800 transition-colors">{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
