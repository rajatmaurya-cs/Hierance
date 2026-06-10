"use client";

import { useState } from "react";

const locations = [
  "Remote",
  "Bangalore",
  "Delhi",
  "Mumbai",
  "Hyderabad",
  "Pune",
  "Chennai",
];

const LocationFilter = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <select
      className="border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
      value={selected ?? ""}
      onChange={(e) => setSelected(e.target.value)}
    >
      <option value="">Location</option>

      {locations.map((location) => (
        <option key={location} value={location}>
          {location}
        </option>
      ))}
    </select>
  );
};

export default LocationFilter;
