"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const salaryOptions = [
  "0-5 LPA",
  "5-10 LPA",
  "10-20 LPA",
  "20-40 LPA",
  "40+ LPA",
];

export default function SalaryRangeDropdown({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition text-sm font-medium"
      >
        Salary
        {value && (
          <span className="bg-slate-900 text-white text-xs px-2 py-0.5 rounded-full">
            1
          </span>
        )}
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute z-30 mt-3 w-34 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 space-y-2">
          {salaryOptions.map((salary) => (
            <div
              key={salary}
              onClick={() => {
                onChange(salary);
                setOpen(false);
              }}
              className={`px-3 py-2 rounded-lg cursor-pointer text-sm transition ${
                value === salary
                  ? "bg-slate-900 text-white"
                  : "hover:bg-slate-50"
              }`}
            >
              {salary}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
