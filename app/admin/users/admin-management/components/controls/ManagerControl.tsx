"use client";

import { useState } from "react";
import ManagerTable from "../tables/ManagerTable";
import { ManagerUser, AdminRole } from "../../types";
import { Search, Download, Plus, Users, ChevronDown, X } from "lucide-react";

type Props = {
  data: ManagerUser[];
  role: AdminRole;
};

export default function ManagerControl({ data, role }: Props) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"ALL" | "ACTIVE" | "DISABLED">("ALL");

  const filtered = data.filter((m) => {
    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "ALL" || m.status === status;
    return matchSearch && matchStatus;
  });

  const activeCount = data.filter((m) => m.status === "ACTIVE").length;
  const disabledCount = data.filter((m) => m.status === "DISABLED").length;

  const stats = [
    { label: "Total", value: data.length, dot: "bg-blue-500" },
    { label: "Active", value: activeCount, dot: "bg-green-500" },
    { label: "Disabled", value: disabledCount, dot: "bg-gray-400" },
  ];

  return (
    <div className="flex flex-col">
      {/* ══════════ HEADER ══════════ */}
      <div className="px-6 pt-6 pb-5 border-b border-gray-100 bg-white">
        <div className="flex flex-wrap items-start justify-between gap-4">
          {/* Icon + Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
              <Users size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900 leading-tight">
                Manager Control
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Manage and assign managers across the platform
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
                <span className="text-gray-800 font-bold ml-0.5">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ TOOLBAR ══════════ */}
      <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
        {/* Left — Search + Status filter */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg w-60 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-50 transition-all">
            <Search size={14} className="text-gray-400 flex-shrink-0" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search managers..."
              className="bg-transparent outline-none text-sm text-gray-700 w-full placeholder:text-gray-400"
            />
            {search && (
              <button onClick={() => setSearch("")}>
                <X size={13} className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          {/* Status dropdown */}
          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as typeof status)}
              className="appearance-none pl-3 pr-8 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 font-medium focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all cursor-pointer"
            >
              <option value="ALL">All Status</option>
              <option value="ACTIVE">Active</option>
              <option value="DISABLED">Disabled</option>
            </select>
            <ChevronDown
              size={13}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* Right — Actions */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-gray-200 text-sm text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all">
            <Download size={14} />
            Export
          </button>

          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold shadow-sm transition-all">
            <Plus size={14} strokeWidth={2.5} />
            Add Manager
          </button>
        </div>
      </div>

      {/* ══════════ TABLE ══════════ */}
      <div className="bg-white">
        <ManagerTable data={filtered} currentUserRole={role} />
      </div>
    </div>
  );
}
