"use client";

import { useState, useRef, useEffect, useCallback } from "react";
// import { AdminRole } from "../../types";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  UserCheck,
  Ban,
  AlertTriangle,
  Search,
  Download,
  ShieldAlert,
  Trash2,
  Eye,
  ShieldOff,
  ShieldCheck,
  MessageSquareWarning,
  RotateCcw,
  Calendar,
  Hash,
  Building2,
  Users,
  Star,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────
type RecruiterStatus = "ACTIVE" | "SUSPENDED" | "WARNED" | "DELETED";

type Recruiter = {
  id: string;
  name: string;
  email: string;
  status: RecruiterStatus;
  companyName: string;
  companyType: "Startup" | "MNC" | "SME" | "Agency";
  designation: string;
  totalHired: number;
  activeJobs: number;
  createdAt: string;
  lastLogin: string;
  phone: string;
  location: string;
};

type Tab = "ALL" | "ACTIVE" | "SUSPENDED" | "WARNED" | "DELETED";

// ─── Mock Data ────────────────────────────────────────────
const MOCK_RECRUITERS: Recruiter[] = [
  {
    id: "REC001",
    name: "Ananya Kapoor",
    email: "ananya.k@infosys.com",
    status: "ACTIVE",
    companyName: "Infosys",
    companyType: "MNC",
    designation: "HR Manager",
    totalHired: 142,
    activeJobs: 8,
    createdAt: "10 Jan 2023",
    lastLogin: "1 hr ago",
    phone: "+91 98765 11111",
    location: "Bangalore",
  },
  {
    id: "REC002",
    name: "Rajesh Nair",
    email: "rajesh.n@tcs.com",
    status: "ACTIVE",
    companyName: "TCS",
    companyType: "MNC",
    designation: "Talent Acquisition",
    totalHired: 89,
    activeJobs: 5,
    createdAt: "22 Feb 2023",
    lastLogin: "3 hrs ago",
    phone: "+91 87654 22222",
    location: "Mumbai",
  },
  {
    id: "REC003",
    name: "Shruti Malhotra",
    email: "shruti@zomato.com",
    status: "SUSPENDED",
    companyName: "Zomato",
    companyType: "Startup",
    designation: "Recruiter",
    totalHired: 34,
    activeJobs: 0,
    createdAt: "05 Mar 2023",
    lastLogin: "8 days ago",
    phone: "+91 76543 33333",
    location: "Gurugram",
  },
  {
    id: "REC004",
    name: "Arjun Mehta",
    email: "arjun.m@wipro.com",
    status: "ACTIVE",
    companyName: "Wipro",
    companyType: "MNC",
    designation: "Sr. HR Executive",
    totalHired: 210,
    activeJobs: 12,
    createdAt: "14 Apr 2023",
    lastLogin: "Just now",
    phone: "+91 65432 44444",
    location: "Pune",
  },
  {
    id: "REC005",
    name: "Kavitha Reddy",
    email: "kavitha@freshworks.com",
    status: "WARNED",
    companyName: "Freshworks",
    companyType: "MNC",
    designation: "Recruiter",
    totalHired: 57,
    activeJobs: 3,
    createdAt: "28 May 2023",
    lastLogin: "2 days ago",
    phone: "+91 54321 55555",
    location: "Chennai",
  },
  {
    id: "REC006",
    name: "Saurabh Gupta",
    email: "saurabh@startupx.io",
    status: "ACTIVE",
    companyName: "StartupX",
    companyType: "Startup",
    designation: "Founder/Recruiter",
    totalHired: 18,
    activeJobs: 6,
    createdAt: "03 Jun 2023",
    lastLogin: "5 hrs ago",
    phone: "+91 43210 66666",
    location: "Delhi",
  },
  {
    id: "REC007",
    name: "Divya Krishnan",
    email: "divya@hcltech.com",
    status: "ACTIVE",
    companyName: "HCL Technologies",
    companyType: "MNC",
    designation: "HR Business Partner",
    totalHired: 176,
    activeJobs: 9,
    createdAt: "19 Jul 2023",
    lastLogin: "Yesterday",
    phone: "+91 32109 77777",
    location: "Noida",
  },
  {
    id: "REC008",
    name: "Mohit Sharma",
    email: "mohit.s@recruitagency.com",
    status: "DELETED",
    companyName: "Recruit Pro",
    companyType: "Agency",
    designation: "Senior Recruiter",
    totalHired: 94,
    activeJobs: 0,
    createdAt: "07 Aug 2023",
    lastLogin: "45 days ago",
    phone: "+91 21098 88888",
    location: "Hyderabad",
  },
  {
    id: "REC009",
    name: "Preeti Joshi",
    email: "preeti@swiggy.com",
    status: "ACTIVE",
    companyName: "Swiggy",
    companyType: "Startup",
    designation: "People & Culture",
    totalHired: 63,
    activeJobs: 4,
    createdAt: "15 Sep 2023",
    lastLogin: "4 hrs ago",
    phone: "+91 10987 99999",
    location: "Bangalore",
  },
  {
    id: "REC010",
    name: "Varun Singhania",
    email: "varun@accenture.com",
    status: "SUSPENDED",
    companyName: "Accenture",
    companyType: "MNC",
    designation: "Talent Specialist",
    totalHired: 128,
    activeJobs: 0,
    createdAt: "30 Oct 2023",
    lastLogin: "15 days ago",
    phone: "+91 99887 10101",
    location: "Mumbai",
  },
  {
    id: "REC011",
    name: "Ritu Agarwal",
    email: "ritu.a@deloitte.com",
    status: "ACTIVE",
    companyName: "Deloitte",
    companyType: "MNC",
    designation: "HR Consultant",
    totalHired: 201,
    activeJobs: 7,
    createdAt: "11 Nov 2023",
    lastLogin: "2 hrs ago",
    phone: "+91 88776 11111",
    location: "Gurugram",
  },
  {
    id: "REC012",
    name: "Nikhil Bansal",
    email: "nikhil@sme-corp.in",
    status: "WARNED",
    companyName: "SME Corp",
    companyType: "SME",
    designation: "HR Executive",
    totalHired: 22,
    activeJobs: 2,
    createdAt: "24 Dec 2023",
    lastLogin: "1 day ago",
    phone: "+91 77665 12121",
    location: "Ahmedabad",
  },
  {
    id: "REC013",
    name: "Sunita Rao",
    email: "sunita@cognizant.com",
    status: "ACTIVE",
    companyName: "Cognizant",
    companyType: "MNC",
    designation: "Sr. Recruiter",
    totalHired: 155,
    activeJobs: 11,
    createdAt: "08 Jan 2024",
    lastLogin: "Just now",
    phone: "+91 66554 13131",
    location: "Chennai",
  },
  {
    id: "REC014",
    name: "Aditya Verma",
    email: "aditya.v@techstartup.io",
    status: "ACTIVE",
    companyName: "TechStartup",
    companyType: "Startup",
    designation: "CTO/Recruiter",
    totalHired: 9,
    activeJobs: 3,
    createdAt: "20 Feb 2024",
    lastLogin: "6 hrs ago",
    phone: "+91 55443 14141",
    location: "Pune",
  },
  {
    id: "REC015",
    name: "Meghna Pillai",
    email: "meghna@ibm.com",
    status: "ACTIVE",
    companyName: "IBM",
    companyType: "MNC",
    designation: "Talent Acquisition",
    totalHired: 183,
    activeJobs: 6,
    createdAt: "12 Mar 2024",
    lastLogin: "3 hrs ago",
    phone: "+91 44332 15151",
    location: "Bangalore",
  },
  {
    id: "REC016",
    name: "Tarun Khanna",
    email: "tarun@agency360.com",
    status: "SUSPENDED",
    companyName: "Agency 360",
    companyType: "Agency",
    designation: "Lead Recruiter",
    totalHired: 41,
    activeJobs: 0,
    createdAt: "05 Apr 2024",
    lastLogin: "22 days ago",
    phone: "+91 33221 16161",
    location: "Delhi",
  },
  {
    id: "REC017",
    name: "Ishaan Tiwari",
    email: "ishaan@oracle.com",
    status: "ACTIVE",
    companyName: "Oracle",
    companyType: "MNC",
    designation: "HR Manager",
    totalHired: 97,
    activeJobs: 5,
    createdAt: "18 May 2024",
    lastLogin: "Yesterday",
    phone: "+91 22110 17171",
    location: "Hyderabad",
  },
  {
    id: "REC018",
    name: "Nandita Mishra",
    email: "nandita@smallbiz.in",
    status: "ACTIVE",
    companyName: "SmallBiz India",
    companyType: "SME",
    designation: "Recruiter",
    totalHired: 14,
    activeJobs: 2,
    createdAt: "29 Jun 2024",
    lastLogin: "5 hrs ago",
    phone: "+91 11009 18181",
    location: "Kolkata",
  },
];

// ─── Constants ────────────────────────────────────────────
const TABS: { key: Tab; label: string }[] = [
  { key: "ALL", label: "All Recruiters" },
  { key: "ACTIVE", label: "Active" },
  { key: "SUSPENDED", label: "Suspended" },
  { key: "WARNED", label: "Warned" },
  { key: "DELETED", label: "Deleted" },
];

const PAGE_SIZE = 15;

const statusStyle: Record<
  RecruiterStatus,
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

const companyTypeBadge: Record<Recruiter["companyType"], string> = {
  MNC: "bg-blue-50 text-blue-600 border-blue-100",
  Startup: "bg-violet-50 text-violet-600 border-violet-100",
  SME: "bg-orange-50 text-orange-600 border-orange-100",
  Agency: "bg-teal-50 text-teal-600 border-teal-100",
};

// ─── Action Menu ──────────────────────────────────────────
function ActionMenu({
  recruiter,
  onAction,
}: {
  recruiter: Recruiter;
  onAction: (action: string, id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const actions = [
    { key: "view", label: "View Profile", icon: Eye, cls: "text-gray-700" },
    {
      key: "warn",
      label: "Warn Recruiter",
      icon: MessageSquareWarning,
      cls: "text-amber-600",
      hide: recruiter.status === "WARNED" || recruiter.status === "DELETED",
    },
    {
      key: "suspend",
      label: "Suspend",
      icon: ShieldOff,
      cls: "text-red-600",
      hide: recruiter.status === "SUSPENDED" || recruiter.status === "DELETED",
    },
    {
      key: "unsuspend",
      label: "Unsuspend",
      icon: ShieldCheck,
      cls: "text-green-600",
      hide: recruiter.status !== "SUSPENDED",
    },
    {
      key: "restore",
      label: "Restore Account",
      icon: RotateCcw,
      cls: "text-blue-600",
      hide: recruiter.status !== "DELETED",
    },
    {
      key: "delete",
      label: "Delete Account",
      icon: Trash2,
      cls: "text-red-700",
      hide: recruiter.status === "DELETED",
    },
  ].filter((a) => !a.hide);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <MoreVertical size={15} />
      </button>

      {open && (
        <div
          className="fixed z-[9999] w-44 bg-white border border-gray-200 rounded-xl shadow-xl py-1 overflow-hidden"
          style={{
            top: (ref.current?.getBoundingClientRect().bottom ?? 0) + 4,
            left: (ref.current?.getBoundingClientRect().right ?? 0) - 176,
          }}
        >
          {actions.map((a) => {
            const Icon = a.icon;
            return (
              <button
                key={a.key}
                onClick={() => {
                  onAction(a.key, recruiter.id);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium hover:bg-gray-50 transition-colors ${a.cls}`}
              >
                <Icon size={13} />
                {a.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Pagination ───────────────────────────────────────────
function Pagination({
  total,
  page,
  pageSize,
  onChange,
}: {
  total: number;
  page: number;
  pageSize: number;
  onChange: (p: number) => void;
}) {
  const totalPages = Math.ceil(total / pageSize);
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between px-6 py-3 border-t border-gray-100 bg-gray-50">
      <p className="text-xs text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-600">
          {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, total)}
        </span>{" "}
        of <span className="font-semibold text-gray-600">{total}</span>
      </p>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onChange(page - 1)}
          disabled={page === 1}
          className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft size={14} />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
          .reduce<(number | "...")[]>((acc, p, i, arr) => {
            if (i > 0 && (p as number) - (arr[i - 1] as number) > 1)
              acc.push("...");
            acc.push(p);
            return acc;
          }, [])
          .map((p, i) =>
            p === "..." ? (
              <span key={`dots-${i}`} className="px-1 text-xs text-gray-400">
                …
              </span>
            ) : (
              <button
                key={p}
                onClick={() => onChange(p as number)}
                className={`w-7 h-7 rounded-lg text-xs font-semibold transition-all ${
                  page === p
                    ? "bg-blue-600 text-white shadow-sm"
                    : "border border-gray-200 text-gray-600 hover:bg-white"
                }`}
              >
                {p}
              </button>
            ),
          )}

        <button
          onClick={() => onChange(page + 1)}
          disabled={page === totalPages}
          className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────
// type Props = { role: AdminRole };

export default function RecruiterControl() {
  const router = useRouter();

  const [recruiters, setRecruiters] = useState<Recruiter[]>(MOCK_RECRUITERS);
  const [activeTab, setActiveTab] = useState<Tab>("ALL");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // ── Counts ──
  const counts = {
    ALL: recruiters.length,
    ACTIVE: recruiters.filter((r) => r.status === "ACTIVE").length,
    SUSPENDED: recruiters.filter((r) => r.status === "SUSPENDED").length,
    WARNED: recruiters.filter((r) => r.status === "WARNED").length,
    DELETED: recruiters.filter((r) => r.status === "DELETED").length,
  };

  // ── Filter ──
  const filtered = recruiters.filter((r) => {
    const matchTab = activeTab === "ALL" || r.status === activeTab;
    const matchSearch =
      !search ||
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.email.toLowerCase().includes(search.toLowerCase()) ||
      r.companyName.toLowerCase().includes(search.toLowerCase()) ||
      r.id.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setPage(1);
  };
  const handleSearch = (v: string) => {
    setSearch(v);
    setPage(1);
  };

  // ── Actions ──
  const handleAction = (action: string, id: string) => {
    if (action === "view") {
      router.push(`/admin/users/recruiters/viewProfile/${id}`);
      return;
    }
    setRecruiters((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        switch (action) {
          case "suspend":
            return { ...r, status: "SUSPENDED" };
          case "unsuspend":
            return { ...r, status: "ACTIVE" };
          case "warn":
            return { ...r, status: "WARNED" };
          case "delete":
            return { ...r, status: "DELETED" };
          case "restore":
            return { ...r, status: "ACTIVE" };
          default:
            return r;
        }
      }),
    );
  };

  // ── Stat cards ──
  const statCards = [
    {
      label: "Total Recruiters",
      value: counts.ALL,
      icon: Briefcase,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      label: "Active",
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
              <Briefcase size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900 leading-tight">
                Recruiter Control
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Manage all recruiters and hiring accounts
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push("/admin/recruiters")}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-all"
            >
              <Briefcase size={14} />
              View Recruiters
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
            <button
              key={s.label}
              onClick={() => {
                if (s.label === "Total Recruiters") handleTabChange("ALL");
                else if (s.label === "Active") handleTabChange("ACTIVE");
                else if (s.label === "Suspended") handleTabChange("SUSPENDED");
                else if (s.label === "Warned") handleTabChange("WARNED");
              }}
              className={`bg-white rounded-xl border ${s.border} p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-all text-left group`}
            >
              <div>
                <p className="text-xs text-gray-500 font-medium">{s.label}</p>
                <p className={`text-2xl font-bold mt-1 ${s.color}`}>
                  {s.value}
                </p>
              </div>
              <div
                className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <Icon size={18} className={s.color} />
              </div>
            </button>
          );
        })}
      </div>

      {/* ══════════ QUICK ACTIONS ══════════ */}
      <div className="px-6 py-4 bg-white border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Quick Actions
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {[
            {
              label: "Suspend Recruiters",
              icon: ShieldAlert,
              cls: "bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-100",
              tab: "SUSPENDED" as Tab,
            },
            {
              label: "Warn Recruiters",
              icon: AlertTriangle,
              cls: "bg-amber-50 text-amber-600 hover:bg-amber-100 border-amber-100",
              tab: "WARNED" as Tab,
            },
            {
              label: "Delete Accounts",
              icon: Trash2,
              cls: "bg-red-50 text-red-600 hover:bg-red-100 border-red-100",
              tab: "DELETED" as Tab,
            },
          ].map((qa) => {
            const Icon = qa.icon;
            return (
              <button
                key={qa.label}
                onClick={() => handleTabChange(qa.tab)}
                className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all ${qa.cls}`}
              >
                <Icon size={14} />
                {qa.label}
                <span className="ml-auto bg-white/60 rounded-full px-1.5 py-0.5 text-[10px] font-bold">
                  {counts[qa.tab]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ══════════ TABS ══════════ */}
      <div className="px-6 pt-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-1 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
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

      {/* ══════════ SEARCH ══════════ */}
      <div className="px-6 py-3 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg w-80 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-50 transition-all">
          <Search size={14} className="text-gray-400 flex-shrink-0" />
          <input
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by name, email, company or ID..."
            className="bg-transparent outline-none text-sm text-gray-700 w-full placeholder:text-gray-400"
          />
          {search && (
            <button
              onClick={() => handleSearch("")}
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
                "Recruiter",
                "ID",
                "Company",
                "Type",
                "Designation",
                "Total Hired",
                "Active Jobs",
                "Status",
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
            {paginated.length === 0 ? (
              <tr>
                <td
                  colSpan={10}
                  className="px-6 py-12 text-center text-sm text-gray-400"
                >
                  No recruiters found
                </td>
              </tr>
            ) : (
              paginated.map((rec) => {
                const s = statusStyle[rec.status];
                return (
                  <tr
                    key={rec.id}
                    className={`group hover:bg-blue-50/30 transition-colors duration-100 ${s.row}`}
                  >
                    {/* Name + Email */}
                    <td className="pl-6 pr-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {rec.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm leading-tight">
                            {rec.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {rec.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* ID */}
                    <td className="px-4 py-3">
                      <span className="flex items-center gap-1 text-xs text-gray-500 font-mono">
                        <Hash size={10} className="text-gray-300" />
                        {rec.id}
                      </span>
                    </td>

                    {/* Company */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <Building2
                          size={12}
                          className="text-blue-400 flex-shrink-0"
                        />
                        <span className="text-sm text-gray-700 font-medium whitespace-nowrap">
                          {rec.companyName}
                        </span>
                      </div>
                    </td>

                    {/* Company Type */}
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold border ${companyTypeBadge[rec.companyType]}`}
                      >
                        {rec.companyType}
                      </span>
                    </td>

                    {/* Designation */}
                    <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">
                      {rec.designation}
                    </td>

                    {/* Total Hired */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <Users size={12} className="text-green-400" />
                        <span className="text-sm font-bold text-gray-700">
                          {rec.totalHired}
                        </span>
                      </div>
                    </td>

                    {/* Active Jobs */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <Star size={11} className="text-amber-400" />
                        <span className="text-sm font-semibold text-gray-600">
                          {rec.activeJobs}
                        </span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${s.badge}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                        {rec.status.charAt(0) +
                          rec.status.slice(1).toLowerCase()}
                      </span>
                    </td>

                    {/* Last Login */}
                    <td className="px-4 py-3 text-xs text-gray-500 tabular-nums whitespace-nowrap">
                      {rec.lastLogin}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {rec.status === "ACTIVE" ? (
                          <button
                            onClick={() => handleAction("suspend", rec.id)}
                            className="px-2.5 py-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 border border-rose-100"
                          >
                            <ShieldOff size={12} />
                            Suspend
                          </button>
                        ) : rec.status === "SUSPENDED" ? (
                          <button
                            onClick={() => handleAction("unsuspend", rec.id)}
                            className="px-2.5 py-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 border border-emerald-100"
                          >
                            <ShieldCheck size={12} />
                            Unsuspend
                          </button>
                        ) : null}
                        <ActionMenu recruiter={rec} onAction={handleAction} />
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* ══════════ PAGINATION ══════════ */}
      <Pagination
        total={filtered.length}
        page={page}
        pageSize={PAGE_SIZE}
        onChange={setPage}
      />
    </div>
  );
}
