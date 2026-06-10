"use client";

import { useState } from "react";
import { FiFilter } from "react-icons/fi";

type Filters = {
  experience?: string;
  location?: string;
  skill?: string;
  salary?: string;
  gender?: string;
  company?: string;
  designation?: string;
  verified?: string;
};

type Props = {
  onChange: (filters: Filters) => void;
};

export default function FiltersPanel({ onChange }: Props) {
  const [filters, setFilters] = useState<Filters>({});

  function updateFilter(key: keyof Filters, value: string) {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onChange(updated);
  }

  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-5 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-2">
        <FiFilter className="text-neutral-500" />
        <h3 className="font-semibold text-neutral-800">Filters</h3>
      </div>

      <div className="flex items-center  gap-3">
        {/* Experience */}
        <select
          onChange={(e) => updateFilter("experience", e.target.value)}
          className="filter-input"
        >
          <option value="">Experience</option>
          <option value="0-1">0-1 Years</option>
          <option value="1-3">1-3 Years</option>
          <option value="3-5">3-5 Years</option>
          <option value="5+">5+ Years</option>
        </select>

        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          onChange={(e) => updateFilter("location", e.target.value)}
          className="filter-input"
        />

        {/* Skills */}
        <input
          type="text"
          placeholder="Skills (React, Python...)"
          onChange={(e) => updateFilter("skill", e.target.value)}
          className="filter-input"
        />

        {/* Salary */}
        <select
          onChange={(e) => updateFilter("salary", e.target.value)}
          className="filter-input"
        >
          <option value="">Salary Range</option>
          <option value="3">3 LPA+</option>
          <option value="6">6 LPA+</option>
          <option value="10">10 LPA+</option>
          <option value="20">20 LPA+</option>
        </select>

        {/* Gender */}
        <select
          onChange={(e) => updateFilter("gender", e.target.value)}
          className="filter-input"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Company */}
        <input
          type="text"
          placeholder="Current Company"
          onChange={(e) => updateFilter("company", e.target.value)}
          className="filter-input"
        />

        {/* Designation */}
        <input
          type="text"
          placeholder="Designation"
          onChange={(e) => updateFilter("designation", e.target.value)}
          className="filter-input"
        />

        {/* Verified */}
        <select
          onChange={(e) => updateFilter("verified", e.target.value)}
          className="filter-input"
        >
          <option value="">Verification</option>
          <option value="true">Verified</option>
          <option value="false">Unverified</option>
        </select>
      </div>
    </div>
  );
}
