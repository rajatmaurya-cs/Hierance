"use client";

import { useState } from "react";
import { AdminUser, AdminRole } from "../../types";
import AdminTable from "../tables/AdminTable";
import {
  Search,
  Download,
  Plus,
  Shield,
  ChevronDown,
  SlidersHorizontal,
  X,
} from "lucide-react";

type Props = {
  data: AdminUser[];
  role: AdminRole;
};

export default function AdminControl({ data, role }: Props) {
  const [searchValue, setSearchValue] = useState("");

  const stats = [
    { label: "Total Admins", value: data.length,  dot: "bg-blue-500"  },
    { label: "Active",       value: data.length,  dot: "bg-green-500" },
    { label: "Pending",      value: 0,            dot: "bg-amber-400" },
  ];

  return (
    <div className="flex flex-col">

      {/* ══════════ HEADER ══════════ */}
      <div className="px-6 pt-6 pb-5 border-b border-gray-100 bg-white">
        <div className="flex flex-wrap items-start justify-between gap-4">

          {/* Icon + Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
              <Shield size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900 leading-tight">
                Admin Control
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Manage admins, roles &amp; permissions
              </p>
            </div>
          </div>

          {/* Stat pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                <span className="text-gray-500 font-medium">{s.label}</span>
                <span className="text-gray-800 font-bold ml-0.5">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ TOOLBAR ══════════ */}
      <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">

        {/* Search */}
        <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg w-64 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-50 transition-all">
          <Search size={14} className="text-gray-400 flex-shrink-0" />
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search admin..."
            className="bg-transparent outline-none text-sm text-gray-700 w-full placeholder:text-gray-400"
          />
          {searchValue && (
            <button onClick={() => setSearchValue("")}>
              <X size={13} className="text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-gray-200 text-sm text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all">
            <SlidersHorizontal size={14} />
            Filter
            <ChevronDown size={12} className="text-gray-400" />
          </button>

          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-gray-200 text-sm text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all">
            <Download size={14} />
            Export
          </button>

          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold shadow-sm transition-all">
            <Plus size={14} strokeWidth={2.5} />
            Add Admin
          </button>
        </div>
      </div>

      {/* ══════════ TABLE ══════════ */}
      <div className="bg-white">
        <AdminTable data={data} currentUserRole={role} />
      </div>

    </div>
  );
}