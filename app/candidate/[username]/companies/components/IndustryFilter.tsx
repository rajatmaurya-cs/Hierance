"use client";

import { useState } from "react";

const industries = [
  "IT",
  "Marketing",
  "Finance",
  "Business",
  "Healthcare",
  "EdTech",
];

const IndustryFilter = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <select
      className="border border-slate-300 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
      value={selected ?? ""}
      onChange={(e) => setSelected(e.target.value)}
    >
      <option value="">Industry</option>
      {industries.map((industry) => (
        <option key={industry} value={industry}>
          {industry}
        </option>
      ))}
    </select>
  );
};

export default IndustryFilter;
