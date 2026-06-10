"use client";

import { useState, useRef, useEffect, useCallback } from "react";
// import { AdminRole } from "../../types";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  CheckCircle,
  Clock,
  XCircle,
  Trash2,
  Search,
  Download,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Star,
  StarOff,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Building2,
  UserCircle,
  Calendar,
  Hash,
  MapPin,
  Ban,
  Banknote,
  Tag,
  Crown,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────
type JobStatus = "ACTIVE" | "PENDING" | "REJECTED" | "DELETED" | "CLOSED";
type Tab = "ALL" | "ACTIVE" | "PENDING" | "REJECTED" | "DELETED" | "CLOSED";
type JobType =
  | "Full-time"
  | "Part-time"
  | "Internship"
  | "Contract"
  | "Freelance";

type Job = {
  id: string;
  title: string;
  company: string;
  companyId: string;
  postedBy: string;
  postedByEmail: string;
  status: JobStatus;
  jobType: JobType;
  location: string;
  salary: string;
  postedAt: string;
  applicants: number;
  featured: boolean;
  statusReason: string; // reason for approve/reject/delete/pending
  experience: string;
  isPremium?: boolean;
  premiumFee?: string;
};

const PAGE_SIZE = 15;

// ─── Mock Data ────────────────────────────────────────────
export const MOCK_JOBS: Job[] = [
  {
    id: "JOB001",
    title: "Senior React Developer",
    company: "Infosys Ltd",
    companyId: "CMP001",
    postedBy: "Ananya Kapoor",
    postedByEmail: "ananya.k@infosys.com",
    status: "ACTIVE",
    jobType: "Full-time",
    location: "Bangalore",
    salary: "₹18–24 LPA",
    postedAt: "02 Jan 2025",
    applicants: 142,
    featured: true,
    statusReason: "Meets all platform guidelines and is verified.",
    experience: "4–7 yrs",
    isPremium: true,
    premiumFee: "₹4,999",
  },
  {
    id: "JOB002",
    title: "Data Scientist",
    company: "TCS",
    companyId: "CMP002",
    postedBy: "Rajesh Nair",
    postedByEmail: "rajesh.n@tcs.com",
    status: "ACTIVE",
    jobType: "Full-time",
    location: "Mumbai",
    salary: "₹14–20 LPA",
    postedAt: "05 Jan 2025",
    applicants: 98,
    featured: false,
    statusReason: "Approved after standard review.",
    experience: "3–6 yrs",
  },
  {
    id: "JOB003",
    title: "Product Manager",
    company: "Zomato",
    companyId: "CMP003",
    postedBy: "Shruti Malhotra",
    postedByEmail: "shruti@zomato.com",
    status: "PENDING",
    jobType: "Full-time",
    location: "Gurugram",
    salary: "₹22–30 LPA",
    postedAt: "10 Jan 2025",
    applicants: 0,
    featured: false,
    statusReason: "Awaiting admin review — company profile under verification.",
    experience: "5–8 yrs",
      isPremium: true,
    premiumFee: "₹2,999",
  },
  {
    id: "JOB004",
    title: "Backend Engineer (Node.js)",
    company: "Wipro",
    companyId: "CMP004",
    postedBy: "Arjun Mehta",
    postedByEmail: "arjun.m@wipro.com",
    status: "ACTIVE",
    jobType: "Full-time",
    location: "Pune",
    salary: "₹12–18 LPA",
    postedAt: "11 Jan 2025",
    applicants: 210,
    featured: false,
    statusReason: "Approved — standard listing.",
    experience: "3–5 yrs",
  },
  {
    id: "JOB005",
    title: "UI/UX Designer",
    company: "Freshworks",
    companyId: "CMP005",
    postedBy: "Kavitha Reddy",
    postedByEmail: "kavitha@freshworks.com",
    status: "REJECTED",
    jobType: "Full-time",
    location: "Chennai",
    salary: "₹8–13 LPA",
    postedAt: "12 Jan 2025",
    applicants: 0,
    featured: false,
    statusReason:
      "Job description was misleading — salary range not accurate. Recruiter warned.",
    experience: "2–4 yrs",
      isPremium: true,
    premiumFee: "₹9,999",
  },
  {
    id: "JOB006",
    title: "Frontend Intern",
    company: "StartupX",
    companyId: "CMP006",
    postedBy: "Saurabh Gupta",
    postedByEmail: "saurabh@startupx.io",
    status: "PENDING",
    jobType: "Internship",
    location: "Delhi",
    salary: "₹8–12k/mo",
    postedAt: "13 Jan 2025",
    applicants: 0,
    featured: false,
    statusReason:
      "New company — awaiting document verification before approval.",
    experience: "0–1 yr",
  },
  {
    id: "JOB007",
    title: "HR Business Partner",
    company: "HCL Technologies",
    companyId: "CMP007",
    postedBy: "Divya Krishnan",
    postedByEmail: "divya@hcltech.com",
    status: "ACTIVE",
    jobType: "Full-time",
    location: "Noida",
    salary: "₹10–15 LPA",
    postedAt: "14 Jan 2025",
    applicants: 67,
    featured: false,
    statusReason: "Approved — verified company.",
    experience: "3–6 yrs",
  },
  {
    id: "JOB008",
    title: "Sales Executive",
    company: "Recruit Pro Agency",
    companyId: "CMP008",
    postedBy: "Mohit Sharma",
    postedByEmail: "mohit.s@recruitpro.com",
    status: "DELETED",
    jobType: "Full-time",
    location: "Hyderabad",
    salary: "₹4–7 LPA",
    postedAt: "15 Jan 2025",
    applicants: 12,
    featured: false,
    statusReason:
      "Company blocked due to fraudulent activity. All jobs removed.",
    experience: "1–3 yrs",
  },
  {
    id: "JOB009",
    title: "DevOps Engineer",
    company: "Swiggy",
    companyId: "CMP009",
    postedBy: "Preeti Joshi",
    postedByEmail: "preeti@swiggy.com",
    status: "ACTIVE",
    jobType: "Full-time",
    location: "Bangalore",
    salary: "₹16–22 LPA",
    postedAt: "16 Jan 2025",
    applicants: 88,
    featured: true,
    statusReason: "Approved — featured by admin for high quality listing.",
    experience: "3–5 yrs",
  },
  {
    id: "JOB010",
    title: "Business Analyst",
    company: "Accenture",
    companyId: "CMP010",
    postedBy: "Varun Singhania",
    postedByEmail: "varun@accenture.com",
    status: "CLOSED",
    jobType: "Full-time",
    location: "Mumbai",
    salary: "₹12–17 LPA",
    postedAt: "01 Dec 2024",
    applicants: 305,
    featured: false,
    statusReason: "Position filled. Job closed by recruiter.",
    experience: "3–6 yrs",
  },
  {
    id: "JOB011",
    title: "Senior Consultant",
    company: "Deloitte",
    companyId: "CMP011",
    postedBy: "Ritu Agarwal",
    postedByEmail: "ritu.a@deloitte.com",
    status: "ACTIVE",
    jobType: "Full-time",
    location: "Gurugram",
    salary: "₹20–28 LPA",
    postedAt: "17 Jan 2025",
    applicants: 174,
    featured: true,
    statusReason: "Approved — premium listing.",
    experience: "5–9 yrs",
    isPremium: true,
    premiumFee: "₹4,999",
  },
  {
    id: "JOB012",
    title: "Content Writer",
    company: "SME Corp",
    companyId: "CMP012",
    postedBy: "Nikhil Bansal",
    postedByEmail: "nikhil@sme-corp.in",
    status: "PENDING",
    jobType: "Part-time",
    location: "Ahmedabad",
    salary: "₹3–5 LPA",
    postedAt: "18 Jan 2025",
    applicants: 0,
    featured: false,
    statusReason: "Under review — first time job post from this company.",
    experience: "1–3 yrs",
  },
  {
    id: "JOB013",
    title: "Full Stack Developer",
    company: "Cognizant",
    companyId: "CMP013",
    postedBy: "Sunita Rao",
    postedByEmail: "sunita@cognizant.com",
    status: "ACTIVE",
    jobType: "Full-time",
    location: "Chennai",
    salary: "₹14–21 LPA",
    postedAt: "19 Jan 2025",
    applicants: 119,
    featured: false,
    statusReason: "Approved — verified company.",
    experience: "3–7 yrs",
  },
  {
    id: "JOB014",
    title: "ML Engineer",
    company: "TechStartup Hub",
    companyId: "CMP014",
    postedBy: "Aditya Verma",
    postedByEmail: "aditya.v@techstartup.io",
    status: "REJECTED",
    jobType: "Full-time",
    location: "Pune",
    salary: "₹10–18 LPA",
    postedAt: "20 Jan 2025",
    applicants: 0,
    featured: false,
    statusReason: "Company profile incomplete — GST and CIN not provided.",
    experience: "2–5 yrs",
  },
  {
    id: "JOB015",
    title: "Cloud Architect",
    company: "IBM India",
    companyId: "CMP015",
    postedBy: "Meghna Pillai",
    postedByEmail: "meghna@ibm.com",
    status: "ACTIVE",
    jobType: "Full-time",
    location: "Bangalore",
    salary: "₹28–40 LPA",
    postedAt: "21 Jan 2025",
    applicants: 56,
    featured: true,
    statusReason: "Approved — featured listing.",
    experience: "7–12 yrs",
  },
  {
    id: "JOB016",
    title: "Telecaller",
    company: "Agency 360",
    companyId: "CMP016",
    postedBy: "Tarun Khanna",
    postedByEmail: "tarun@agency360.com",
    status: "DELETED",
    jobType: "Full-time",
    location: "Delhi",
    salary: "₹2–3.5 LPA",
    postedAt: "22 Jan 2025",
    applicants: 8,
    featured: false,
    statusReason: "Agency blocked for fake job postings. Job removed.",
    experience: "0–2 yrs",
  },
  {
    id: "JOB017",
    title: "Java Backend Developer",
    company: "Oracle India",
    companyId: "CMP017",
    postedBy: "Ishaan Tiwari",
    postedByEmail: "ishaan@oracle.com",
    status: "ACTIVE",
    jobType: "Full-time",
    location: "Hyderabad",
    salary: "₹16–24 LPA",
    postedAt: "23 Jan 2025",
    applicants: 93,
    featured: false,
    statusReason: "Approved.",
    experience: "3–6 yrs",
  },
  {
    id: "JOB018",
    title: "Retail Store Manager",
    company: "SmallBiz India",
    companyId: "CMP018",
    postedBy: "Nandita Mishra",
    postedByEmail: "nandita@smallbiz.in",
    status: "PENDING",
    jobType: "Full-time",
    location: "Kolkata",
    salary: "₹5–8 LPA",
    postedAt: "24 Jan 2025",
    applicants: 0,
    featured: false,
    statusReason: "Pending — company KYC documents submitted, under review.",
    experience: "2–4 yrs",
  },
  {
    id: "JOB019",
    title: "Python Developer",
    company: "Infosys Ltd",
    companyId: "CMP001",
    postedBy: "Ananya Kapoor",
    postedByEmail: "ananya.k@infosys.com",
    status: "CLOSED",
    jobType: "Full-time",
    location: "Bangalore",
    salary: "₹12–18 LPA",
    postedAt: "15 Dec 2024",
    applicants: 241,
    featured: false,
    statusReason: "Hiring complete. Position filled.",
    experience: "2–5 yrs",
  },
  {
    id: "JOB020",
    title: "Freelance Graphic Designer",
    company: "StartupX",
    companyId: "CMP006",
    postedBy: "Saurabh Gupta",
    postedByEmail: "saurabh@startupx.io",
    status: "ACTIVE",
    jobType: "Freelance",
    location: "Remote",
    salary: "₹500–1k/day",
    postedAt: "25 Jan 2025",
    applicants: 34,
    featured: false,
    statusReason: "Approved after manual review.",
    experience: "1–3 yrs",
  },
];

// ─── Tabs ────────────────────────────────────────────────
const TABS: { key: Tab; label: string }[] = [
  { key: "ALL", label: "All Jobs" },
  { key: "ACTIVE", label: "Active" },
  { key: "PENDING", label: "Pending" },
  { key: "REJECTED", label: "Rejected" },
  { key: "CLOSED", label: "Closed" },
  { key: "DELETED", label: "Deleted" },
];

// ─── Styles ───────────────────────────────────────────────
const statusStyle: Record<
  JobStatus,
  { badge: string; row: string; dot: string }
> = {
  ACTIVE: {
    badge: "bg-green-50 text-green-700 border-green-200",
    row: "",
    dot: "bg-green-500",
  },
  PENDING: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    row: "bg-blue-50/20",
    dot: "bg-blue-400",
  },
  REJECTED: {
    badge: "bg-red-50 text-red-700 border-red-200",
    row: "bg-red-50/30",
    dot: "bg-red-500",
  },
  CLOSED: {
    badge: "bg-gray-100 text-gray-600 border-gray-200",
    row: "bg-gray-50/50 opacity-80",
    dot: "bg-gray-400",
  },
  DELETED: {
    badge: "bg-rose-50 text-rose-700 border-rose-200",
    row: "bg-rose-50/20 opacity-60",
    dot: "bg-rose-500",
  },
};

const reasonIcon: Record<JobStatus, React.ReactNode> = {
  ACTIVE: <CheckCircle size={11} className="text-green-500 flex-shrink-0" />,
  PENDING: <Clock size={11} className="text-blue-400  flex-shrink-0" />,
  REJECTED: <XCircle size={11} className="text-red-500   flex-shrink-0" />,
  CLOSED: <Ban size={11} className="text-gray-400  flex-shrink-0" />,
  DELETED: <Trash2 size={11} className="text-rose-500  flex-shrink-0" />,
};

const jobTypeBadge: Record<JobType, string> = {
  "Full-time": "bg-blue-50 text-blue-600 border-blue-100",
  "Part-time": "bg-violet-50 text-violet-600 border-violet-100",
  Internship: "bg-orange-50 text-orange-600 border-orange-100",
  Contract: "bg-teal-50 text-teal-600 border-teal-100",
  Freelance: "bg-pink-50 text-pink-600 border-pink-100",
};

// ─── Action Menu ──────────────────────────────────────────
function ActionMenu({
  job,
  onAction,
}: {
  job: Job;
  onAction: (a: string, id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });

  // Close on outside click
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      )
        setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  // Recalculate position on scroll / resize
  const calcPos = useCallback(() => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    setMenuPos({
      top: r.bottom + window.scrollY + 4,
      left: r.right + window.scrollX - 176,
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    calcPos();
    window.addEventListener("scroll", calcPos, true);
    window.addEventListener("resize", calcPos);
    return () => {
      window.removeEventListener("scroll", calcPos, true);
      window.removeEventListener("resize", calcPos);
    };
  }, [open, calcPos]);

  const actions = [

    { key: "view", 
      label: "View Details", 
      icon: Eye, 
      cls: "text-gray-700" },
      
    {
      key: "approve",
      label: "Approve Job",
      icon: ThumbsUp,
      cls: "text-green-600",
      hide: job.status === "ACTIVE" || job.status === "DELETED",
    },
    {
      key: "reject",
      label: "Reject Job",
      icon: ThumbsDown,
      cls: "text-red-600",
      hide: job.status === "REJECTED" || job.status === "DELETED",
    },
    {
      key: "feature",
      label: "Feature Job",
      icon: Star,
      cls: "text-amber-500",
      hide: job.featured || job.status !== "ACTIVE",
    },
    {
      key: "unfeature",
      label: "Remove Feature",
      icon: StarOff,
      cls: "text-amber-600",
      hide: !job.featured,
    },
    {
      key: "close",
      label: "Close Job",
      icon: Ban,
      cls: "text-gray-600",
      hide: job.status !== "ACTIVE",
    },
    {
      key: "delete",
      label: "Delete Job",
      icon: Trash2,
      cls: "text-red-700",
      hide: job.status === "DELETED",
    },
  ].filter((a) => !a.hide);

  return (
    <>
      <button
        ref={btnRef}
        onClick={() => setOpen((p) => !p)}
        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <MoreVertical size={15} />
      </button>

      {open && (
        <div
          ref={menuRef}
          className="fixed z-[9999] w-44 bg-white border border-gray-200 rounded-xl shadow-xl py-1 overflow-hidden"
          style={{ top: menuPos.top, left: menuPos.left }}
        >
          {actions.map((a) => {
            const Icon = a.icon;
            return (
              <button
                key={a.key}
                onClick={() => {
                  onAction(a.key, job.id);
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
    </>
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
    <div className="flex items-center justify-between px-6 py-3 bg-gray-50">
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
          disabled={page === Math.ceil(total / pageSize)}
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

export default function JobControl() {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS);
  const [activeTab, setActiveTab] = useState<Tab>("ALL");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const counts = {
    ALL: jobs.length,
    ACTIVE: jobs.filter((j) => j.status === "ACTIVE").length,
    PENDING: jobs.filter((j) => j.status === "PENDING").length,
    REJECTED: jobs.filter((j) => j.status === "REJECTED").length,
    CLOSED: jobs.filter((j) => j.status === "CLOSED").length,
    DELETED: jobs.filter((j) => j.status === "DELETED").length,
  };

  const filtered = jobs.filter((j) => {
    const matchTab = activeTab === "ALL" || j.status === activeTab;
    const q = search.toLowerCase();
    const matchSearch =
      !search ||
      j.title.toLowerCase().includes(q) ||
      j.company.toLowerCase().includes(q) ||
      j.postedBy.toLowerCase().includes(q) ||
      j.id.toLowerCase().includes(q) ||
      j.location.toLowerCase().includes(q);
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

  const handleAction = (action: string, id: string) => {
    if (action === "view") {
      router.push(`/admin/platform-management/jobs/details/${id}`);
      return;
    }
    setJobs((prev) =>
      prev.map((j) => {
        if (j.id !== id) return j;
        switch (action) {
          case "approve":
            return {
              ...j,
              status: "ACTIVE",
              statusReason: "Approved by admin.",
            };
          case "reject":
            return {
              ...j,
              status: "REJECTED",
              statusReason: "Rejected by admin — does not meet guidelines.",
            };
          case "feature":
            return { ...j, featured: true, statusReason: j.statusReason };
          case "unfeature":
            return { ...j, featured: false, statusReason: j.statusReason };
          case "close":
            return {
              ...j,
              status: "CLOSED",
              statusReason: "Manually closed by admin.",
            };
          case "delete":
            return {
              ...j,
              status: "DELETED",
              statusReason: "Deleted by admin.",
            };
          default:
            return j;
        }
      }),
    );
  };

  const statCards = [
    {
      label: "Total Jobs",
      value: counts.ALL,
      tab: "ALL" as Tab,
      icon: Briefcase,
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
      label: "Pending",
      value: counts.PENDING,
      tab: "PENDING" as Tab,
      icon: Clock,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      label: "Rejected",
      value: counts.REJECTED,
      tab: "REJECTED" as Tab,
      icon: XCircle,
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-100",
    },
  ];

  return (
    <div className="flex flex-col min-w-0">
      {/* ══════════ HEADER ══════════ */}
      <div className="px-6 pt-6 pb-5 border-b border-gray-100 bg-white">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
              <Briefcase size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900 leading-tight">
                Job Control
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Manage all job listings across the platform
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push("/admin/jobs")}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-all"
            >
              <Briefcase size={14} />
              View All Jobs
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

      {/* ══════════ QUICK ACTIONS ══════════ */}
      <div className="px-6 py-4 bg-white border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Quick Actions
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {[
            {
              label: "Pending Review",
              icon: Clock,
              cls: "bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-100",
              tab: "PENDING" as Tab,
            },
            {
              label: "Rejected Jobs",
              icon: XCircle,
              cls: "bg-red-50 text-red-600 hover:bg-red-100 border-red-100",
              tab: "REJECTED" as Tab,
            },
            {
              label: "Closed Jobs",
              icon: Ban,
              cls: "bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-200",
              tab: "CLOSED" as Tab,
            },
            {
              label: "Deleted Jobs",
              icon: Trash2,
              cls: "bg-rose-50 text-rose-600 hover:bg-rose-100 border-rose-100",
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
            placeholder="Search by title, company, recruiter or ID..."
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
            <col style={{ width: "21%" }} />
            <col style={{ width: "6%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "7%" }} />
            <col style={{ width: "7%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "4%" }} />
          </colgroup>
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide pl-6">
                Job Title
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                ID
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Company / Posted By
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Type
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Location
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Salary
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Apps
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Status
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Reason
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
                  No jobs found
                </td>
              </tr>
            ) : (
              paginated.map((job) => {
                const s = statusStyle[job.status];
                return (
                  <tr
                    key={job.id}
                    className={`hover:bg-blue-50/20 transition-colors duration-100 ${job.isPremium ? "bg-amber-50/40 hover:bg-amber-100/50" : s.row}`}
                  >
                    {/* Title + Experience + Featured */}
                    <td className="pl-6 pr-3 py-3">
                      <div className="flex items-start gap-1.5">
                        
                        {/* {job.featured && (
                          <Star
                            size={11}
                            className="text-amber-400 mt-0.5 flex-shrink-0"
                          />
                        )} */}

                        {job.isPremium && (
                          <Crown
                            size={12}
                            className="text-amber-600 mt-0.5 flex-shrink-0"
                          />
                        )}
                        <div className="min-w-0">
                          <p className="font-semibold text-gray-800 text-sm leading-tight truncate">
                            {job.title}
                          </p>
                          <p className="text-[11px] text-gray-400 mt-0.5">
                            {job.experience}
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
                        <span className="truncate">{job.id}</span>
                      </span>
                    </td>

                    {/* Company + Posted By */}
                    <td className="px-3 py-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1">
                          <Building2
                            size={11}
                            className="text-blue-400 flex-shrink-0"
                          />
                          <p className="text-xs font-semibold text-gray-700 truncate">
                            {job.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <UserCircle
                            size={11}
                            className="text-gray-300 flex-shrink-0"
                          />
                          <p className="text-[11px] text-gray-400 truncate">
                            {job.postedBy}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Calendar
                            size={10}
                            className="text-gray-300 flex-shrink-0"
                          />
                          <p className="text-[10px] text-gray-400">
                            {job.postedAt}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Job Type */}
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold border ${jobTypeBadge[job.jobType]}`}
                      >
                        {job.jobType}
                      </span>
                    </td>

                    {/* Location */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1">
                        <MapPin
                          size={11}
                          className="text-gray-300 flex-shrink-0"
                        />
                        <span className="text-xs text-gray-500 truncate">
                          {job.location}
                        </span>
                      </div>
                    </td>

                    {/* Salary */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1">
                        <Banknote
                          size={11}
                          className="text-green-400 flex-shrink-0"
                        />
                        <span className="text-xs text-gray-600 font-medium truncate">
                          {job.salary}
                        </span>
                      </div>
                    </td>

                    {/* Applicants */}
                    <td className="px-3 py-3">
                      <span className="text-sm font-bold text-gray-700">
                        {job.applicants}
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
                        {job.status.charAt(0) +
                          job.status.slice(1).toLowerCase()}
                      </span>
                      {job.isPremium && (
                        <div className="mt-1 flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-100/50 px-1.5 py-0.5 rounded border border-amber-200 w-fit">
                          <Tag size={10} />
                          {job.premiumFee}
                        </div>
                      )}
                    </td>

                    {/* Reason */}
                    <td className="px-3 py-3">
                      <div className="flex items-start gap-1">
                        {reasonIcon[job.status]}
                        <p className="text-[11px] text-gray-500 leading-tight line-clamp-2">
                          {job.statusReason}
                        </p>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-3 pr-6 py-3 text-right">
                      <ActionMenu job={job} onAction={handleAction} />
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
