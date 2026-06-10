"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  label: string;
  options: string[];
  selected: string[];
  onChange: (value: string[]) => void;
}

export default function FilterDropdown({
  label,
  options,
  selected,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition text-sm font-medium"
      >
        {label}
        {selected.length > 0 && (
          <span className="bg-slate-900 text-white text-xs px-2 py-0.5 rounded-full">
            {selected.length}
          </span>
        )}
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute z-30 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="max-h-60 overflow-y-auto space-y-2">
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-50 transition"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => toggleOption(option)}
                  className="accent-slate-900"
                />
                <span className="text-sm text-slate-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
