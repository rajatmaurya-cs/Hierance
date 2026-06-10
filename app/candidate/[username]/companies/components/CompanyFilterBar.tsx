"use client";

import { useState } from "react";
import FilterDropdown from "@/app/candidate/[username]/jobs/components/FilterDropdown";
import { SlidersHorizontal, X } from "lucide-react";

interface Filters {
  industry: string[];
  location: string[];
  companyType: string[];
  size: string[];
}

interface Props {
  onFilterChange?: (filters: Filters) => void;
}

export default function CompaniesFilterBar({ onFilterChange }: Props) {
  const [filters, setFilters] = useState<Filters>({
    industry: [],
    location: [],
    companyType: [],
    size: [],
  });

  const updateFilter = (key: keyof Filters, value: string[]) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    if (onFilterChange) onFilterChange(updated);
  };

  const removeFilterItem = (item: string) => {
    if (filters.industry.includes(item)) {
      updateFilter(
        "industry",
        filters.industry.filter((i) => i !== item),
      );
    } else if (filters.location.includes(item)) {
      updateFilter(
        "location",
        filters.location.filter((l) => l !== item),
      );
    } else if (filters.companyType.includes(item)) {
      updateFilter(
        "companyType",
        filters.companyType.filter((c) => c !== item),
      );
    } else if (filters.size.includes(item)) {
      updateFilter(
        "size",
        filters.size.filter((s) => s !== item),
      );
    }
  };

  const clearAll = () => {
    const cleared = {
      industry: [],
      location: [],
      companyType: [],
      size: [],
    };
    setFilters(cleared);
    if (onFilterChange) onFilterChange(cleared);
  };

  const activeFilters = [
    ...filters.industry,
    ...filters.location,
    ...filters.companyType,
    ...filters.size,
  ].filter(Boolean);

  return (
    <div className="w-full bg-white rounded-xl p-4 border border-slate-200 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 font-inter">
          <SlidersHorizontal size={15} />
          Filters
        </div>

        <div className="flex flex-wrap gap-2">
          <FilterDropdown
            label="Industry"
            options={["IT", "Marketing", "Finance", "Healthcare", "EdTech"]}
            selected={filters.industry}
            onChange={(v) => updateFilter("industry", v)}
          />

          <FilterDropdown
            label="Location"
            options={["Remote", "Delhi", "Mumbai", "Bangalore", "Hyderabad"]}
            selected={filters.location}
            onChange={(v) => updateFilter("location", v)}
          />

          <FilterDropdown
            label="Company Type"
            options={["Product", "Service", "Startup", "Enterprise"]}
            selected={filters.companyType}
            onChange={(v) => updateFilter("companyType", v)}
          />

          <FilterDropdown
            label="Size"
            options={["1 - 10", "11 - 50", "51 - 200", "201- 1000", "1000+"]}
            selected={filters.size}
            onChange={(v) => updateFilter("size", v)}
          />
        </div>
      </div>

      {/* Active Filter Chips */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3">
          {activeFilters.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-xs font-medium font-inter"
            >
              {item}
              <button
                onClick={() => removeFilterItem(item)}
                className="hover:text-red-500 transition"
              >
                <X size={13} />
              </button>
            </div>
          ))}

          <button
            onClick={clearAll}
            className="text-xs text-red-500 font-medium hover:underline ml-2 font-inter"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}
