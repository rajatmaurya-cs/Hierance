"use client";

const CompanySizeFilter = () => {
  return (
    <select className="border border-slate-300 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
      <option value="">Employees</option>
      <option value="1-10">1–10</option>
      <option value="11-50">11–50</option>
      <option value="51-200">51–200</option>
      <option value="201-1000">201–1000</option>
      <option value="1000+">1000+</option>
    </select>
  );
};

export default CompanySizeFilter;