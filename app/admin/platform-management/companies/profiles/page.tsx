"use client";

import { useState, useRef, useEffect } from "react";
// import { AdminRole } from "../../types";
import { useRouter } from "next/navigation";
import {
  Building2,
  Users,
  Ban,
  AlertTriangle,
  Search,
  Download,
  ShieldAlert,
  Trash2,
  Eye,
  ShieldOff,
  ShieldCheck,
  RotateCcw,
  CheckCircle,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  UserCircle,
  MapPin,
  Hash,
  TrendingUp,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────
type CompanyStatus = "ACTIVE" | "BLOCKED" | "PENDING" | "SUSPENDED";
type Tab = "ALL" | "ACTIVE" | "BLOCKED" | "PENDING" | "SUSPENDED";

type Company = {
  id: string;
  name: string;
  email: string;
  status: CompanyStatus;
  industry: string;
  type: "MNC" | "Startup" | "SME" | "Agency" | "Enterprise";
  location: string;
  totalHired: number;
  openJobs: number;
  recruiterName: string;
  recruiterEmail: string;
  createdAt: string;
  employeeCount: string;
  verified: boolean;
};

const PAGE_SIZE = 15;

// ─── Mock Data ────────────────────────────────────────────
const MOCK_COMPANIES: Company[] = [
  {
    id: "CMP001",
    name: "Infosys Ltd",
    email: "hr@infosys.com",
    status: "ACTIVE",
    industry: "IT Services",
    type: "MNC",
    location: "Bangalore",
    totalHired: 1240,
    openJobs: 34,
    recruiterName: "Ananya Kapoor",
    recruiterEmail: "ananya.k@infosys.com",
    createdAt: "10 Jan 2023",
    employeeCount: "10000+",
    verified: true,
  },
  {
    id: "CMP002",
    name: "Tata Consultancy",
    email: "careers@tcs.com",
    status: "ACTIVE",
    industry: "IT Services",
    type: "MNC",
    location: "Mumbai",
    totalHired: 2180,
    openJobs: 52,
    recruiterName: "Rajesh Nair",
    recruiterEmail: "rajesh.n@tcs.com",
    createdAt: "22 Feb 2023",
    employeeCount: "10000+",
    verified: true,
  },
  {
    id: "CMP003",
    name: "Zomato Pvt Ltd",
    email: "people@zomato.com",
    status: "SUSPENDED",
    industry: "Food Tech",
    type: "Startup",
    location: "Gurugram",
    totalHired: 340,
    openJobs: 0,
    recruiterName: "Shruti Malhotra",
    recruiterEmail: "shruti@zomato.com",
    createdAt: "05 Mar 2023",
    employeeCount: "1000+",
    verified: true,
  },
  {
    id: "CMP004",
    name: "Wipro Technologies",
    email: "hr@wipro.com",
    status: "ACTIVE",
    industry: "IT Services",
    type: "MNC",
    location: "Pune",
    totalHired: 980,
    openJobs: 28,
    recruiterName: "Arjun Mehta",
    recruiterEmail: "arjun.m@wipro.com",
    createdAt: "14 Apr 2023",
    employeeCount: "10000+",
    verified: true,
  },
  {
    id: "CMP005",
    name: "Freshworks Inc",
    email: "talent@freshworks.com",
    status: "ACTIVE",
    industry: "SaaS",
    type: "MNC",
    location: "Chennai",
    totalHired: 570,
    openJobs: 15,
    recruiterName: "Kavitha Reddy",
    recruiterEmail: "kavitha@freshworks.com",
    createdAt: "28 May 2023",
    employeeCount: "5000+",
    verified: true,
  },
  {
    id: "CMP006",
    name: "StartupX Solutions",
    email: "jobs@startupx.io",
    status: "PENDING",
    industry: "Fintech",
    type: "Startup",
    location: "Delhi",
    totalHired: 18,
    openJobs: 6,
    recruiterName: "Saurabh Gupta",
    recruiterEmail: "saurabh@startupx.io",
    createdAt: "03 Jun 2023",
    employeeCount: "50-200",
    verified: false,
  },
  {
    id: "CMP007",
    name: "HCL Technologies",
    email: "hr@hcltech.com",
    status: "ACTIVE",
    industry: "IT Services",
    type: "MNC",
    location: "Noida",
    totalHired: 1760,
    openJobs: 41,
    recruiterName: "Divya Krishnan",
    recruiterEmail: "divya@hcltech.com",
    createdAt: "19 Jul 2023",
    employeeCount: "10000+",
    verified: true,
  },
  {
    id: "CMP008",
    name: "Recruit Pro Agency",
    email: "info@recruitpro.com",
    status: "BLOCKED",
    industry: "Staffing",
    type: "Agency",
    location: "Hyderabad",
    totalHired: 94,
    openJobs: 0,
    recruiterName: "Mohit Sharma",
    recruiterEmail: "mohit.s@recruitpro.com",
    createdAt: "07 Aug 2023",
    employeeCount: "200-500",
    verified: false,
  },
  {
    id: "CMP009",
    name: "Swiggy India",
    email: "careers@swiggy.com",
    status: "ACTIVE",
    industry: "Food Tech",
    type: "Startup",
    location: "Bangalore",
    totalHired: 630,
    openJobs: 22,
    recruiterName: "Preeti Joshi",
    recruiterEmail: "preeti@swiggy.com",
    createdAt: "15 Sep 2023",
    employeeCount: "5000+",
    verified: true,
  },
  {
    id: "CMP010",
    name: "Accenture India",
    email: "india.hr@accenture.com",
    status: "SUSPENDED",
    industry: "Consulting",
    type: "MNC",
    location: "Mumbai",
    totalHired: 1280,
    openJobs: 0,
    recruiterName: "Varun Singhania",
    recruiterEmail: "varun@accenture.com",
    createdAt: "30 Oct 2023",
    employeeCount: "10000+",
    verified: true,
  },
  {
    id: "CMP011",
    name: "Deloitte India",
    email: "careers@deloitte.in",
    status: "ACTIVE",
    industry: "Consulting",
    type: "Enterprise",
    location: "Gurugram",
    totalHired: 2010,
    openJobs: 37,
    recruiterName: "Ritu Agarwal",
    recruiterEmail: "ritu.a@deloitte.com",
    createdAt: "11 Nov 2023",
    employeeCount: "10000+",
    verified: true,
  },
  {
    id: "CMP012",
    name: "SME Corp India",
    email: "hr@sme-corp.in",
    status: "PENDING",
    industry: "Manufacturing",
    type: "SME",
    location: "Ahmedabad",
    totalHired: 22,
    openJobs: 4,
    recruiterName: "Nikhil Bansal",
    recruiterEmail: "nikhil@sme-corp.in",
    createdAt: "24 Dec 2023",
    employeeCount: "200-500",
    verified: false,
  },
  {
    id: "CMP013",
    name: "Cognizant Technology",
    email: "hr@cognizant.com",
    status: "ACTIVE",
    industry: "IT Services",
    type: "MNC",
    location: "Chennai",
    totalHired: 1550,
    openJobs: 44,
    recruiterName: "Sunita Rao",
    recruiterEmail: "sunita@cognizant.com",
    createdAt: "08 Jan 2024",
    employeeCount: "10000+",
    verified: true,
  },
  {
    id: "CMP014",
    name: "TechStartup Hub",
    email: "jobs@techstartup.io",
    status: "ACTIVE",
    industry: "AI/ML",
    type: "Startup",
    location: "Pune",
    totalHired: 9,
    openJobs: 5,
    recruiterName: "Aditya Verma",
    recruiterEmail: "aditya.v@techstartup.io",
    createdAt: "20 Feb 2024",
    employeeCount: "10-50",
    verified: false,
  },
  {
    id: "CMP015",
    name: "IBM India",
    email: "ibm.careers@ibm.com",
    status: "ACTIVE",
    industry: "IT Services",
    type: "MNC",
    location: "Bangalore",
    totalHired: 1830,
    openJobs: 29,
    recruiterName: "Meghna Pillai",
    recruiterEmail: "meghna@ibm.com",
    createdAt: "12 Mar 2024",
    employeeCount: "10000+",
    verified: true,
  },
  {
    id: "CMP016",
    name: "Agency 360 Staffing",
    email: "team@agency360.com",
    status: "BLOCKED",
    industry: "Staffing",
    type: "Agency",
    location: "Delhi",
    totalHired: 41,
    openJobs: 0,
    recruiterName: "Tarun Khanna",
    recruiterEmail: "tarun@agency360.com",
    createdAt: "05 Apr 2024",
    employeeCount: "200-500",
    verified: false,
  },
  {
    id: "CMP017",
    name: "Oracle India",
    email: "oracle.hr@oracle.com",
    status: "ACTIVE",
    industry: "Enterprise Tech",
    type: "MNC",
    location: "Hyderabad",
    totalHired: 970,
    openJobs: 18,
    recruiterName: "Ishaan Tiwari",
    recruiterEmail: "ishaan@oracle.com",
    createdAt: "18 May 2024",
    employeeCount: "10000+",
    verified: true,
  },
  {
    id: "CMP018",
    name: "SmallBiz India Ltd",
    email: "hr@smallbiz.in",
    status: "PENDING",
    industry: "Retail",
    type: "SME",
    location: "Kolkata",
    totalHired: 14,
    openJobs: 3,
    recruiterName: "Nandita Mishra",
    recruiterEmail: "nandita@smallbiz.in",
    createdAt: "29 Jun 2024",
    employeeCount: "50-200",
    verified: false,
  },
];

// ─── Constants ────────────────────────────────────────────
const TABS: { key: Tab; label: string }[] = [
  { key: "ALL", label: "All Companies" },
  { key: "ACTIVE", label: "Active" },
  { key: "PENDING", label: "Pending" },
  { key: "SUSPENDED", label: "Suspended" },
  { key: "BLOCKED", label: "Blocked" },
];

const statusStyle: Record<
  CompanyStatus,
  { badge: string; row: string; dot: string }
> = {
  ACTIVE: {
    badge: "bg-green-50 text-green-700 border-green-200",
    row: "",
    dot: "bg-green-500",
  },
  PENDING: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    row: "bg-blue-50/30",
    dot: "bg-blue-400",
  },
  SUSPENDED: {
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    row: "bg-amber-50/40",
    dot: "bg-amber-400",
  },
  BLOCKED: {
    badge: "bg-red-50 text-red-700 border-red-200",
    row: "bg-red-50/30 opacity-70",
    dot: "bg-red-500",
  },
};

const typeBadge: Record<Company["type"], string> = {
  MNC: "bg-blue-50 text-blue-600 border-blue-100",
  Startup: "bg-violet-50 text-violet-600 border-violet-100",
  SME: "bg-orange-50 text-orange-600 border-orange-100",
  Agency: "bg-teal-50 text-teal-600 border-teal-100",
  Enterprise: "bg-indigo-50 text-indigo-600 border-indigo-100",
};

// ─── Action Menu ──────────────────────────────────────────
function ActionMenu({
  company,
  onAction,
}: {
  company: Company;
  onAction: (a: string, id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const handleOpen = () => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) setPos({ top: rect.bottom + 4, left: rect.right - 176 });
    setOpen((p) => !p);
  };

  const actions = [
    { key: "view", label: "View Profile", icon: Eye, cls: "text-gray-700" },
    {
      key: "verify",
      label: "Verify Company",
      icon: CheckCircle,
      cls: "text-green-600",
      hide: company.verified || company.status === "BLOCKED",
    },
    {
      key: "suspend",
      label: "Suspend",
      icon: ShieldOff,
      cls: "text-amber-600",
      hide: company.status === "SUSPENDED" || company.status === "BLOCKED",
    },
    {
      key: "unsuspend",
      label: "Unsuspend",
      icon: ShieldCheck,
      cls: "text-green-600",
      hide: company.status !== "SUSPENDED",
    },
    {
      key: "block",
      label: "Block Company",
      icon: Ban,
      cls: "text-red-600",
      hide: company.status === "BLOCKED",
    },
    {
      key: "unblock",
      label: "Unblock",
      icon: RotateCcw,
      cls: "text-blue-600",
      hide: company.status !== "BLOCKED",
    },
    {
      key: "delete",
      label: "Delete Company",
      icon: Trash2,
      cls: "text-red-700",
      hide: company.status === "BLOCKED" ? false : false,
    },
  ].filter((a) => !a.hide);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={handleOpen}
        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <MoreVertical size={15} />
      </button>
      {open && (
        <div
          className="fixed z-[9999] w-44 bg-white border border-gray-200 rounded-xl shadow-xl py-1 overflow-hidden"
          style={{ top: pos.top, left: pos.left }}
        >
          {actions.map((a) => {
            const Icon = a.icon;
            return (
              <button
                key={a.key}
                onClick={() => {
                  onAction(a.key, company.id);
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
function PaginationBar({
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

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
    .reduce<(number | "...")[]>((acc, p, i, arr) => {
      if (i > 0 && (p as number) - (arr[i - 1] as number) > 1) acc.push("...");
      acc.push(p);
      return acc;
    }, []);

  return (
    <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-gray-100">
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
        {pages.map((p, i) =>
          p === "..." ? (
            <span key={`d${i}`} className="px-1 text-xs text-gray-400">
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onChange(p as number)}
              className={`w-7 h-7 rounded-lg text-xs font-semibold transition-all ${page === p ? "bg-blue-600 text-white shadow-sm" : "border border-gray-200 text-gray-600 hover:bg-white"}`}
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

export default function CompanyControl() {
  const router = useRouter();
  const [companies, setCompanies] = useState<Company[]>(MOCK_COMPANIES);
  const [activeTab, setActiveTab] = useState<Tab>("ALL");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // ── Counts ──
  const counts = {
    ALL: companies.length,
    ACTIVE: companies.filter((c) => c.status === "ACTIVE").length,
    PENDING: companies.filter((c) => c.status === "PENDING").length,
    SUSPENDED: companies.filter((c) => c.status === "SUSPENDED").length,
    BLOCKED: companies.filter((c) => c.status === "BLOCKED").length,
  };

  // ── Filter ──
  const filtered = companies.filter((c) => {
    const matchTab = activeTab === "ALL" || c.status === activeTab;
    const matchSearch =
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.recruiterName.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase()) ||
      c.industry.toLowerCase().includes(search.toLowerCase());
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
      router.push(`/admin/platform-management/companies/viewProfile/${id}`);
      return;
    }
    setCompanies((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;
        switch (action) {
          case "verify":
            return { ...c, verified: true };
          case "suspend":
            return { ...c, status: "SUSPENDED" };
          case "unsuspend":
            return { ...c, status: "ACTIVE" };
          case "block":
            return { ...c, status: "BLOCKED" };
          case "unblock":
            return { ...c, status: "ACTIVE" };
          case "delete":
            return { ...c, status: "BLOCKED" };
          default:
            return c;
        }
      }),
    );
  };

  // ── Stat cards ──
  const statCards = [
    {
      label: "Total Companies",
      value: counts.ALL,
      tab: "ALL" as Tab,
      icon: Building2,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      label: "Active",
      value: counts.ACTIVE,
      tab: "ACTIVE" as Tab,
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-100",
    },
    {
      label: "Pending Review",
      value: counts.PENDING,
      tab: "PENDING" as Tab,
      icon: AlertTriangle,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      label: "Blocked",
      value: counts.BLOCKED,
      tab: "BLOCKED" as Tab,
      icon: Ban,
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-100",
    },
  ];

  const totalHiredAll = companies.reduce((sum, c) => sum + c.totalHired, 0);
  const totalJobsAll = companies.reduce((sum, c) => sum + c.openJobs, 0);

  return (
    <div className="flex flex-col min-w-0">
      {/* ══════════ HEADER ══════════ */}
      <div className="px-6 pt-6 pb-5 border-b border-gray-100 bg-white">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
              <Building2 size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900 leading-tight">
                Company Control
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Manage all company profiles and organizations
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push("/admin/companies")}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-all"
            >
              <Building2 size={14} />
              View Companies
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-gray-200 text-sm text-gray-600 font-medium hover:bg-gray-50 transition-all">
              <Download size={14} />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* ══════════ STAT CARDS ══════════ */}
      <div className="px-6 py-5 bg-gray-50 border-b border-gray-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {statCards.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.label}
                onClick={() => handleTabChange(s.tab)}
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

        {/* Extra summary strip */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-gray-100 px-4 py-3 flex items-center gap-3 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
              <Users size={15} className="text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">
                Total Hires (All Companies)
              </p>
              <p className="text-lg font-bold text-gray-800">
                {totalHiredAll.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 px-4 py-3 flex items-center gap-3 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Briefcase size={15} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">
                Open Jobs Right Now
              </p>
              <p className="text-lg font-bold text-gray-800">{totalJobsAll}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ QUICK ACTIONS ══════════ */}
      <div className="px-6 py-4 bg-white border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Quick Actions
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {[
            {
              label: "Pending Review",
              icon: AlertTriangle,
              cls: "bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-100",
              tab: "PENDING" as Tab,
            },
            {
              label: "Suspended Cos",
              icon: ShieldAlert,
              cls: "bg-amber-50 text-amber-600 hover:bg-amber-100 border-amber-100",
              tab: "SUSPENDED" as Tab,
            },
            {
              label: "Blocked Cos",
              icon: Ban,
              cls: "bg-red-50 text-red-600 hover:bg-red-100 border-red-100",
              tab: "BLOCKED" as Tab,
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
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${activeTab === tab.key ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}
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
            placeholder="Search by name, email, recruiter or industry..."
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

      {/* ══════════ PAGINATION TOP ══════════ */}
      <div className="border-b border-gray-100">
        <PaginationBar
          total={filtered.length}
          page={page}
          pageSize={PAGE_SIZE}
          onChange={setPage}
        />
      </div>

      {/* ══════════ TABLE ══════════ */}
      <div className="bg-white">
        <table className="w-full text-sm table-fixed">
          <colgroup>
            <col style={{ width: "22%" }} />
            <col style={{ width: "7%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "7%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "16%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "4%" }} />
          </colgroup>
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide pl-6">
                Company
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                ID
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Industry
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Type
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Status
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Recruiter
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Hired
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Open Jobs
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Location
              </th>
              <th className="px-3 py-3 pr-6 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {paginated.length === 0 ? (
              <tr>
                <td
                  colSpan={10}
                  className="px-6 py-12 text-center text-sm text-gray-400"
                >
                  No companies found
                </td>
              </tr>
            ) : (
              paginated.map((company) => {
                const s = statusStyle[company.status];
                return (
                  <tr
                    key={company.id}
                    className={`hover:bg-blue-50/20 transition-colors duration-100 ${s.row}`}
                  >
                    {/* Company Name + Email + Verified */}
                    <td className="pl-6 pr-3 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {company.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1">
                            <p className="font-semibold text-gray-800 text-sm leading-tight truncate">
                              {company.name}
                            </p>
                            {company.verified && (
                              <CheckCircle
                                size={11}
                                className="text-blue-500 flex-shrink-0"
                              />
                            )}
                          </div>
                          <p className="text-xs text-gray-400 truncate">
                            {company.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* ID */}
                    <td className="px-3 py-3">
                      <span className="flex items-center gap-0.5 text-[11px] text-gray-400 font-mono">
                        <Hash
                          size={9}
                          className="text-gray-300 flex-shrink-0"
                        />
                        <span className="truncate">{company.id}</span>
                      </span>
                    </td>

                    {/* Industry */}
                    <td className="px-3 py-3">
                      <p className="text-xs text-gray-600 truncate">
                        {company.industry}
                      </p>
                    </td>

                    {/* Type */}
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold border ${typeBadge[company.type]}`}
                      >
                        {company.type}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${s.badge}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.dot}`}
                        />
                        {company.status.charAt(0) +
                          company.status.slice(1).toLowerCase()}
                      </span>
                    </td>

                    {/* Recruiter */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <UserCircle
                          size={13}
                          className="text-blue-400 flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-gray-700 truncate">
                            {company.recruiterName}
                          </p>
                          <p className="text-[10px] text-gray-400 truncate">
                            {company.recruiterEmail}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Total Hired */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1">
                        <TrendingUp
                          size={12}
                          className="text-green-400 flex-shrink-0"
                        />
                        <span className="text-sm font-bold text-gray-700">
                          {company.totalHired.toLocaleString()}
                        </span>
                      </div>
                    </td>

                    {/* Open Jobs */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1">
                        <Briefcase
                          size={12}
                          className="text-blue-400 flex-shrink-0"
                        />
                        <span className="text-sm font-semibold text-gray-700">
                          {company.openJobs}
                        </span>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1">
                        <MapPin
                          size={11}
                          className="text-gray-300 flex-shrink-0"
                        />
                        <span className="text-xs text-gray-500 truncate">
                          {company.location}
                        </span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-3 pr-6 py-3 text-right">
                      <ActionMenu company={company} onAction={handleAction} />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* ══════════ PAGINATION BOTTOM ══════════ */}
      <div className="border-t border-gray-100">
        <PaginationBar
          total={filtered.length}
          page={page}
          pageSize={PAGE_SIZE}
          onChange={setPage}
        />
      </div>
    </div>
  );
}
