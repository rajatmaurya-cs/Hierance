"use client";

import { useState, useRef, useEffect } from "react";
// import { AdminRole } from "../../types";
import { useRouter } from "next/navigation";
import {
  Users,
  UserCheck,
  UserX,
  Search,
  Download,
  ShieldAlert,
  Trash2,
  Activity,
  AlertTriangle,
  MoreVertical,
  Eye,
  ShieldOff,
  ShieldCheck,
  Ban,
  MessageSquareWarning,
  RotateCcw,
  Briefcase,
  Calendar,
  Hash,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────
type UserStatus = "ACTIVE" | "SUSPENDED" | "WARNED" | "DELETED";

type User = {
  id: string;
  name: string;
  email: string;
  status: UserStatus;
  createdAt: string;
  lastLogin: string;
  appliedCompanies: number;
  totalApplications: number;
  location: string;
  phone: string;
};

type Tab = "ALL" | "ACTIVE" | "SUSPENDED" | "WARNED" | "DELETED";

// ─── Mock Data ────────────────────────────────────────────
const MOCK_USERS: User[] = [
  {
    id: "USR001",
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    status: "ACTIVE",
    createdAt: "12 Jan 2024",
    lastLogin: "2 hrs ago",
    appliedCompanies: 14,
    totalApplications: 28,
    location: "Mumbai",
    phone: "+91 98765 43210",
  },
  {
    id: "USR002",
    name: "Priya Verma",
    email: "priya.verma@yahoo.com",
    status: "ACTIVE",
    createdAt: "03 Feb 2024",
    lastLogin: "1 day ago",
    appliedCompanies: 7,
    totalApplications: 12,
    location: "Delhi",
    phone: "+91 87654 32109",
  },
  {
    id: "USR003",
    name: "Amit Joshi",
    email: "amit.joshi@outlook.com",
    status: "SUSPENDED",
    createdAt: "20 Nov 2023",
    lastLogin: "5 days ago",
    appliedCompanies: 32,
    totalApplications: 61,
    location: "Pune",
    phone: "+91 76543 21098",
  },
  {
    id: "USR004",
    name: "Sneha Patel",
    email: "sneha.patel@gmail.com",
    status: "WARNED",
    createdAt: "08 Mar 2024",
    lastLogin: "3 hrs ago",
    appliedCompanies: 5,
    totalApplications: 9,
    location: "Ahmedabad",
    phone: "+91 65432 10987",
  },
  {
    id: "USR005",
    name: "Karan Mehta",
    email: "karan.mehta@hotmail.com",
    status: "ACTIVE",
    createdAt: "15 Apr 2024",
    lastLogin: "Just now",
    appliedCompanies: 2,
    totalApplications: 3,
    location: "Bangalore",
    phone: "+91 54321 09876",
  },
  {
    id: "USR006",
    name: "Neha Singh",
    email: "neha.singh@gmail.com",
    status: "DELETED",
    createdAt: "01 Oct 2023",
    lastLogin: "30 days ago",
    appliedCompanies: 19,
    totalApplications: 44,
    location: "Hyderabad",
    phone: "+91 43210 98765",
  },
  {
    id: "USR007",
    name: "Vikram Rao",
    email: "vikram.rao@gmail.com",
    status: "SUSPENDED",
    createdAt: "22 Dec 2023",
    lastLogin: "12 days ago",
    appliedCompanies: 41,
    totalApplications: 78,
    location: "Chennai",
    phone: "+91 32109 87654",
  },
  {
    id: "USR008",
    name: "Anjali Gupta",
    email: "anjali.gupta@yahoo.com",
    status: "ACTIVE",
    createdAt: "17 May 2024",
    lastLogin: "6 hrs ago",
    appliedCompanies: 8,
    totalApplications: 15,
    location: "Kolkata",
    phone: "+91 21098 76543",
  },
  {
    id: "USR009",
    name: "Rohit Kumar",
    email: "rohit.kumar@gmail.com",
    status: "WARNED",
    createdAt: "29 Jun 2024",
    lastLogin: "2 days ago",
    appliedCompanies: 11,
    totalApplications: 22,
    location: "Jaipur",
    phone: "+91 10987 65432",
  },
  {
    id: "USR010",
    name: "Pooja Nair",
    email: "pooja.nair@outlook.com",
    status: "ACTIVE",
    createdAt: "05 Jul 2024",
    lastLogin: "Yesterday",
    appliedCompanies: 4,
    totalApplications: 6,
    location: "Kochi",
    phone: "+91 99887 76655",
  },
  {
    id: "USR011",
    name: "Deepak Tiwari",
    email: "deepak.tiwari@gmail.com",
    status: "SUSPENDED",
    createdAt: "14 Aug 2023",
    lastLogin: "20 days ago",
    appliedCompanies: 55,
    totalApplications: 102,
    location: "Lucknow",
    phone: "+91 88776 65544",
  },
  {
    id: "USR012",
    name: "Meera Pillai",
    email: "meera.pillai@yahoo.com",
    status: "ACTIVE",
    createdAt: "26 Sep 2024",
    lastLogin: "4 hrs ago",
    appliedCompanies: 3,
    totalApplications: 5,
    location: "Trivandrum",
    phone: "+91 77665 54433",
  },
];

// ─── Tab config ───────────────────────────────────────────
const TABS: { key: Tab; label: string }[] = [
  { key: "ALL", label: "All Users" },
  { key: "ACTIVE", label: "Active" },
  { key: "SUSPENDED", label: "Suspended" },
  { key: "WARNED", label: "Warned" },
  { key: "DELETED", label: "Deleted" },
];

// ─── Status styling ───────────────────────────────────────
const statusStyle: Record<
  UserStatus,
  { badge: string; row: string; dot: string }
> = {
  ACTIVE: {
    badge: "bg-green-50 text-green-700 border-green-200",
    row: "",
    dot: "bg-green-500",
  },
  SUSPENDED: {
    badge: "bg-red-50 text-red-700 border-red-200",
    row: "bg-red-50/40",
    dot: "bg-red-500",
  },
  WARNED: {
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    row: "bg-amber-50/40",
    dot: "bg-amber-400",
  },
  DELETED: {
    badge: "bg-gray-100 text-gray-500 border-gray-200",
    row: "bg-gray-50/60 opacity-60",
    dot: "bg-gray-400",
  },
};

// ─── Action Menu ──────────────────────────────────────────
function ActionMenu({
  user,
  onAction,
}: {
  user: User;
  onAction: (action: string, userId: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const actions = [
    {
      key: "view",
      label: "View Profile",
      icon: Eye,
      className: "text-gray-700",
    },
    {
      key: "warn",
      label: "Warn User",
      icon: MessageSquareWarning,
      className: "text-amber-600",
      hide: user.status === "WARNED" || user.status === "DELETED",
    },
    {
      key: "suspend",
      label: "Suspend",
      icon: ShieldOff,
      className: "text-red-600",
      hide: user.status === "SUSPENDED" || user.status === "DELETED",
    },
    {
      key: "unsuspend",
      label: "Unsuspend",
      icon: ShieldCheck,
      className: "text-green-600",
      hide: user.status !== "SUSPENDED",
    },
    {
      key: "restore",
      label: "Restore Account",
      icon: RotateCcw,
      className: "text-blue-600",
      hide: user.status !== "DELETED",
    },
    {
      key: "delete",
      label: "Delete Account",
      icon: Trash2,
      className: "text-red-700",
      hide: user.status === "DELETED",
    },
  ].filter((a) => !a.hide);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <MoreVertical size={15} />
      </button>

      {open && (
        <div className="absolute right-0 top-8 z-50 w-44 bg-white border border-gray-200 rounded-xl shadow-lg py-1 overflow-hidden">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.key}
                onClick={() => {
                  onAction(action.key, user.id);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium hover:bg-gray-50 transition-colors ${action.className}`}
              >
                <Icon size={13} />
                {action.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────
// type Props = { role: AdminRole };

export default function ProfilesPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("ALL");
  const [users, setUsers] = useState<User[]>(MOCK_USERS);

  // ── Counts ──
  const counts = {
    ALL: users.length,
    ACTIVE: users.filter((u) => u.status === "ACTIVE").length,
    SUSPENDED: users.filter((u) => u.status === "SUSPENDED").length,
    WARNED: users.filter((u) => u.status === "WARNED").length,
    DELETED: users.filter((u) => u.status === "DELETED").length,
  };

  // ── Filter ──
  const filtered = users.filter((u) => {
    const matchTab = activeTab === "ALL" || u.status === activeTab;
    const matchSearch =
      !search ||
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.id.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  // ── Actions ──
  const handleAction = (action: string, userId: string) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id !== userId) return u;
        switch (action) {
          case "suspend":
            return { ...u, status: "SUSPENDED" };
          case "unsuspend":
            return { ...u, status: "ACTIVE" };
          case "warn":
            return { ...u, status: "WARNED" };
          case "delete":
            return { ...u, status: "DELETED" };
          case "restore":
            return { ...u, status: "ACTIVE" };
          case "view":
            router.push(`/admin/users/job-seekers/profiles/${userId}`);
            return u;
          default:
            return u;
        }
      }),
    );
  };

  // ── Stat cards ──
  const statCards = [
    {
      label: "Total Users",
      value: counts.ALL,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      label: "Active Users",
      value: counts.ACTIVE,
      icon: UserCheck,
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-100",
    },
    {
      label: "Suspended",
      value: counts.SUSPENDED,
      icon: Ban,
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-100",
    },
    {
      label: "Warned",
      value: counts.WARNED,
      icon: AlertTriangle,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* ══════════ HEADER ══════════ */}
      <div className="px-6 pt-6 pb-5 border-b border-gray-100 bg-white">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
              <Users size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900 leading-tight">
                User Management
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Manage and monitor all job seekers activity
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push("/admin/users")}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-all"
            >
              <Users size={14} />
              View Users
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-gray-200 text-sm text-gray-600 font-medium hover:bg-gray-50 transition-all">
              <Download size={14} />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* ══════════ STAT CARDS ══════════ */}
      <div className="px-6 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50 border-b border-gray-100">
        {statCards.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className={`bg-white rounded-xl border ${s.border} p-4 flex items-center justify-between shadow-sm`}
            >
              <div>
                <p className="text-xs text-gray-500 font-medium">{s.label}</p>
                <p className={`text-2xl font-bold mt-1 ${s.color}`}>
                  {s.value}
                </p>
              </div>
              <div
                className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center`}
              >
                <Icon size={18} className={s.color} />
              </div>
            </div>
          );
        })}
      </div>

      {/* ══════════ QUICK ACTIONS ══════════ */}
      <div className="px-6 py-4 bg-white border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Quick Actions
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {[
            {
              label: "Suspend Users",
              icon: ShieldAlert,
              cls: "bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-100",
            },
            {
              label: "Warn Users",
              icon: AlertTriangle,
              cls: "bg-amber-50 text-amber-600 hover:bg-amber-100 border-amber-100",
            },
            {
              label: "Delete Accounts",
              icon: Trash2,
              cls: "bg-red-50 text-red-600 hover:bg-red-100 border-red-100",
            },
            {
              label: "View Activity Logs",
              icon: Activity,
              cls: "bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-200",
            },
          ].map((qa) => {
            const Icon = qa.icon;
            return (
              <button
                key={qa.label}
                className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all ${qa.cls}`}
              >
                <Icon size={14} />
                {qa.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ══════════ TABS + SEARCH ══════════ */}
      <div className="px-6 pt-4 pb-0 bg-white border-b border-gray-100">
        {/* Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-0">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.key
                  ? "border-blue-600 text-blue-600 bg-blue-50/50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.label}
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                  activeTab === tab.key
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {counts[tab.key]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Search bar */}
      <div className="px-6 py-3 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg w-72 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-50 transition-all">
          <Search size={14} className="text-gray-400 flex-shrink-0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email or ID..."
            className="bg-transparent outline-none text-sm text-gray-700 w-full placeholder:text-gray-400"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-gray-400 hover:text-gray-600 text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ══════════ TABLE ══════════ */}
      <div className="bg-white overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {[
                "User",
                "User ID",
                "Status",
                "Applied Companies",
                "Total Applications",
                "Created",
                "Last Login",
                "",
              ].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap first:pl-6 last:pr-6 last:text-right"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-6 py-12 text-center text-sm text-gray-400"
                >
                  No users found
                </td>
              </tr>
            ) : (
              filtered.map((user) => {
                const s = statusStyle[user.status];
                return (
                  <tr
                    key={user.id}
                    className={`group hover:bg-blue-50/30 transition-colors duration-100 ${s.row}`}
                  >
                    {/* Name + Email */}
                    <td className="pl-6 pr-4 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm leading-tight">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* ID */}
                    <td className="px-4 py-3.5">
                      <span className="flex items-center gap-1 text-xs text-gray-500 font-mono">
                        <Hash size={10} className="text-gray-300" />
                        {user.id}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${s.badge}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                        {user.status.charAt(0) +
                          user.status.slice(1).toLowerCase()}
                      </span>
                    </td>

                    {/* Applied Companies */}
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <Briefcase size={12} className="text-blue-400" />
                        <span className="text-sm font-semibold text-gray-700">
                          {user.appliedCompanies}
                        </span>
                        <span className="text-xs text-gray-400">companies</span>
                      </div>
                    </td>

                    {/* Total Applications */}
                    <td className="px-4 py-3.5">
                      <span className="text-sm font-semibold text-gray-700">
                        {user.totalApplications}
                      </span>
                      <span className="text-xs text-gray-400 ml-1">apps</span>
                    </td>

                    {/* Created */}
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar size={11} className="text-gray-300" />
                        {user.createdAt}
                      </div>
                    </td>

                    {/* Last Login */}
                    <td className="px-4 py-3.5 text-xs text-gray-500 tabular-nums">
                      {user.lastLogin}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-3.5 text-right">
                      <ActionMenu user={user} onAction={handleAction} />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* ══════════ FOOTER ══════════ */}
      <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
        <p className="text-xs text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-600">{filtered.length}</span>{" "}
          of <span className="font-semibold text-gray-600">{users.length}</span>{" "}
          users
        </p>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          Live data
        </div>
      </div>
    </div>
  );
}
