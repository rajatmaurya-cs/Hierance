"use client";

import { useState } from "react";

const companyTypes = ["Product", "Service", "Startup", "Enterprise"];

const CompanyTypeFilter = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <select
      className="border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
      value={selected ?? ""}
      onChange={(e) => setSelected(e.target.value)}
    >
      <option value="">Company Type</option>

      {companyTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default CompanyTypeFilter;
