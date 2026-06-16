"use client";

import { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import SalaryRangeDropdown from "./SalaryFilter";
import { SlidersHorizontal, X } from "lucide-react";

interface Filters {
  skills: string[];
  location: string[];
  jobType: string[];
  salary: string;
}

interface Props {
  onFilterChange: (filters: Filters) => void;
}

export default function JobsFilterBar({ onFilterChange }: Props) {
  const [filters, setFilters] = useState<Filters>({
    skills: [],
    location: [],
    jobType: [],
    salary: "",
  });

  const updateFilter = (key: keyof Filters, value: any) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onFilterChange(updated);
  };

  const removeFilterItem = (item: string) => {
    if (filters.skills.includes(item)) {
      updateFilter(
        "skills",
        filters.skills.filter((s) => s !== item),
      );
    } else if (filters.location.includes(item)) {
      updateFilter(
        "location",
        filters.location.filter((l) => l !== item),
      );
    } else if (filters.jobType.includes(item)) {
      updateFilter(
        "jobType",
        filters.jobType.filter((j) => j !== item),
      );
    } else if (filters.salary === item) {
      updateFilter("salary", "");
    }
  };

  const clearAll = () => {
    const cleared = {
      skills: [],
      location: [],
      jobType: [],
      salary: "",
    };
    setFilters(cleared);
    onFilterChange(cleared);
  };

  const activeFilters = [
    ...filters.skills,
    ...filters.location,
    ...filters.jobType,
    filters.salary,
  ].filter(Boolean);

  return (
    <div className="w-full bg-white rounded-xl p-4 border border-slate-200 space-y-3">
      {/* Top Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 font-primary">
          <SlidersHorizontal size={15} />
          Filters
        </div>

        <div className="flex flex-wrap gap-3">
          <FilterDropdown
            label="Skills"
            options={["React", "Next.js", "UI/UX", "Node.js", "Figma"]}
            selected={filters.skills}
            onChange={(v) => updateFilter("skills", v)}
          />

          <FilterDropdown
            label="Location"
            options={["Remote", "Delhi", "Mumbai", "Bangalore"]}
            selected={filters.location}
            onChange={(v) => updateFilter("location", v)}
          />

          <FilterDropdown
            label="Job Type"
            options={["Full-Time", "Part-Time", "Contract"]}
            selected={filters.jobType}
            onChange={(v) => updateFilter("jobType", v)}
          />

          <SalaryRangeDropdown
            value={filters.salary}
            onChange={(v) => updateFilter("salary", v)}
          />
        </div>
      </div>

      {/* Active Filter Chips */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {activeFilters.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-xs font-medium"
            >
              {item}
              <button
                onClick={() => removeFilterItem(item)}
                className="hover:text-red-500 transition"
              >
                <X size={14} />
              </button>
            </div>
          ))}

          <button
            onClick={clearAll}
            className="text-xs text-red-500 font-medium hover:underline ml-2"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}
