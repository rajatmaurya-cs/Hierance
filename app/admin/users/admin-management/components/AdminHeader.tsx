"use client";

import { AdminRole } from "../types";
import RoleBadge from "./common/RoleBadge";
import {
  Bell,
  Search,
  Settings,
  FileText,
} from "lucide-react";

/* =========================
   TYPES
========================= */

type Stats = {
  label: string;
  value: number | string;
};

type Props = {
  name: string;
  role: AdminRole;
  createdBy?: string;
  id?: string;
  createdAt?: string;
  lastLogin?: string;
  stats?: Stats[];
};

/* =========================
   COMPONENT
========================= */

export default function AdminHeader({
  name,
  role,
  createdBy,
  id = "ID-001",
  createdAt = "Jan 2026",
  lastLogin = "2h ago",
  stats = [],
}: Props) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <header className="w-full bg-white border border-blue-100 rounded-2xl px-6 py-4 shadow-sm">
      
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        
        {/* ================= LEFT ================= */}
        <div className="flex items-start gap-4">
          
          {/* AVATAR */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center text-lg font-semibold shadow">
            {initial}
          </div>

          {/* INFO */}
          <div>
            {/* NAME + ROLE */}
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-900">
                {name}
              </h2>
              <RoleBadge role={role} />
            </div>

            {/* META INFO */}
            <div className="text-xs text-gray-500 mt-1 flex flex-wrap gap-x-3">
              <span>ID: {id}</span>
              <span>• Since: {createdAt}</span>
              <span>• Last Login: {lastLogin}</span>
            </div>

            {/* ROLE BASED INFO */}
            <p className="text-xs text-gray-400 mt-1">
              {role === "SUPER_ADMIN" && "Full system access"}
              {role === "ADMIN" && `Created by ${createdBy}`}
              {role === "MANAGER" && `Assigned by ${createdBy}`}
            </p>
          </div>
        </div>

        {/* ================= CENTER (SEARCH) ================= */}
        {/* <div className="hidden lg:flex items-center gap-2 px-3 py-2 border border-blue-100 rounded-xl bg-blue-50 w-80">
          <Search size={16} className="text-blue-400" />
          <input
            placeholder="Search users, jobs, companies..."
            className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
          />
        </div> */}

        {/* ================= RIGHT ================= */}
        <div className="flex items-center gap-3">
          
          {/* VIEW LOGS */}
          <button className="hidden md:flex items-center gap-2 px-3 py-2 text-sm border border-blue-100 rounded-xl hover:bg-blue-50 transition">
            <FileText size={16} />
            Logs
          </button>

          {/* NOTIFICATIONS */}
          <button className="relative p-2 rounded-xl hover:bg-blue-50 transition">
            <Bell size={18} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 text-[10px] bg-blue-600 text-white px-1.5 rounded-full">
              2
            </span>
          </button>

          {/* SETTINGS */}
          <button className="p-2 rounded-xl hover:bg-blue-50 transition">
            <Settings size={18} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* ================= STATS ================= */}
      {stats.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {stats.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-xs font-medium"
            >
              {item.label}:{" "}
              <span className="font-semibold text-blue-900">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}