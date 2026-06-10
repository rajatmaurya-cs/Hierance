"use client";

import { useState, useRef, useEffect, useCallback } from "react";
// import { AdminRole } from "../../types";
import { useRouter } from "next/navigation";
import {
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  Search,
  Download,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Trash2,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Building2,
  UserCircle,
  Calendar,
  Hash,
  Briefcase,
  Ban,
  Star,
  RotateCcw,
  MessageSquare,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────
type AppStatus =
  | "APPLIED"
  | "SHORTLISTED"
  | "INTERVIEW"
  | "OFFERED"
  | "REJECTED"
  | "WITHDRAWN";
type Tab =
  | "ALL"
  | "APPLIED"
  | "SHORTLISTED"
  | "INTERVIEW"
  | "OFFERED"
  | "REJECTED"
  | "WITHDRAWN";

type Application = {
  id: string;
  applicantName: string;
  applicantEmail: string;
  jobTitle: string;
  company: string;
  companyId: string;
  recruiterName: string;
  status: AppStatus;
  appliedAt: string;
  lastUpdated: string;
  resumeScore: number; // 0-100
  experience: string;
  location: string;
  statusReason: string;
  interviewDate?: string;
};

const PAGE_SIZE = 15;

// ─── Mock Data ────────────────────────────────────────────
const MOCK_APPS: Application[] = [
  {
    id: "APP001",
    applicantName: "Rahul Sharma",
    applicantEmail: "rahul.sharma@gmail.com",
    jobTitle: "Senior React Developer",
    company: "Infosys Ltd",
    companyId: "CMP001",
    recruiterName: "Ananya Kapoor",
    status: "SHORTLISTED",
    appliedAt: "03 Jan 2025",
    lastUpdated: "05 Jan 2025",
    resumeScore: 88,
    experience: "4 yrs",
    location: "Bangalore",
    statusReason:
      "Strong portfolio and matching skill set. Moved to shortlist.",
    interviewDate: "12 Jan 2025",
  },
  {
    id: "APP002",
    applicantName: "Priya Verma",
    applicantEmail: "priya.verma@yahoo.com",
    jobTitle: "Data Scientist",
    company: "TCS",
    companyId: "CMP002",
    recruiterName: "Rajesh Nair",
    status: "INTERVIEW",
    appliedAt: "06 Jan 2025",
    lastUpdated: "08 Jan 2025",
    resumeScore: 91,
    experience: "3 yrs",
    location: "Mumbai",
    statusReason: "Cleared screening round. Technical interview scheduled.",
    interviewDate: "14 Jan 2025",
  },
  {
    id: "APP003",
    applicantName: "Amit Joshi",
    applicantEmail: "amit.joshi@outlook.com",
    jobTitle: "Backend Engineer (Node.js)",
    company: "Wipro",
    companyId: "CMP004",
    recruiterName: "Arjun Mehta",
    status: "REJECTED",
    appliedAt: "11 Jan 2025",
    lastUpdated: "13 Jan 2025",
    resumeScore: 42,
    experience: "2 yrs",
    location: "Pune",
    statusReason:
      "Experience below required threshold. Node.js skills insufficient.",
  },
  {
    id: "APP004",
    applicantName: "Sneha Patel",
    applicantEmail: "sneha.patel@gmail.com",
    jobTitle: "UI/UX Designer",
    company: "Freshworks",
    companyId: "CMP005",
    recruiterName: "Kavitha Reddy",
    status: "APPLIED",
    appliedAt: "12 Jan 2025",
    lastUpdated: "12 Jan 2025",
    resumeScore: 74,
    experience: "2 yrs",
    location: "Chennai",
    statusReason: "Application received. Under initial review by recruiter.",
  },
  {
    id: "APP005",
    applicantName: "Karan Mehta",
    applicantEmail: "karan.mehta@hotmail.com",
    jobTitle: "HR Business Partner",
    company: "HCL Technologies",
    companyId: "CMP007",
    recruiterName: "Divya Krishnan",
    status: "OFFERED",
    appliedAt: "14 Jan 2025",
    lastUpdated: "20 Jan 2025",
    resumeScore: 95,
    experience: "5 yrs",
    location: "Noida",
    statusReason: "Excellent interviews. Offer letter sent with CTC ₹14 LPA.",
  },
  {
    id: "APP006",
    applicantName: "Neha Singh",
    applicantEmail: "neha.singh@gmail.com",
    jobTitle: "Full Stack Developer",
    company: "Cognizant",
    companyId: "CMP013",
    recruiterName: "Sunita Rao",
    status: "WITHDRAWN",
    appliedAt: "07 Jan 2025",
    lastUpdated: "10 Jan 2025",
    resumeScore: 68,
    experience: "3 yrs",
    location: "Chennai",
    statusReason: "Candidate withdrew — accepted another offer.",
  },
  {
    id: "APP007",
    applicantName: "Vikram Rao",
    applicantEmail: "vikram.rao@gmail.com",
    jobTitle: "DevOps Engineer",
    company: "Swiggy",
    companyId: "CMP009",
    recruiterName: "Preeti Joshi",
    status: "SHORTLISTED",
    appliedAt: "16 Jan 2025",
    lastUpdated: "18 Jan 2025",
    resumeScore: 82,
    experience: "4 yrs",
    location: "Bangalore",
    statusReason: "Good DevOps background. Moved to shortlist for HR round.",
    interviewDate: "25 Jan 2025",
  },
  {
    id: "APP008",
    applicantName: "Anjali Gupta",
    applicantEmail: "anjali.gupta@yahoo.com",
    jobTitle: "Senior Consultant",
    company: "Deloitte",
    companyId: "CMP011",
    recruiterName: "Ritu Agarwal",
    status: "INTERVIEW",
    appliedAt: "17 Jan 2025",
    lastUpdated: "19 Jan 2025",
    resumeScore: 89,
    experience: "6 yrs",
    location: "Gurugram",
    statusReason: "Case study round cleared. Final round on 26 Jan.",
    interviewDate: "26 Jan 2025",
  },
  {
    id: "APP009",
    applicantName: "Rohit Kumar",
    applicantEmail: "rohit.kumar@gmail.com",
    jobTitle: "Cloud Architect",
    company: "IBM India",
    companyId: "CMP015",
    recruiterName: "Meghna Pillai",
    status: "APPLIED",
    appliedAt: "21 Jan 2025",
    lastUpdated: "21 Jan 2025",
    resumeScore: 77,
    experience: "8 yrs",
    location: "Bangalore",
    statusReason: "Application received and queued for initial screening.",
  },
  {
    id: "APP010",
    applicantName: "Pooja Nair",
    applicantEmail: "pooja.nair@outlook.com",
    jobTitle: "Java Backend Developer",
    company: "Oracle India",
    companyId: "CMP017",
    recruiterName: "Ishaan Tiwari",
    status: "REJECTED",
    appliedAt: "23 Jan 2025",
    lastUpdated: "25 Jan 2025",
    resumeScore: 51,
    experience: "2 yrs",
    location: "Hyderabad",
    statusReason: "Requires 3+ years Java experience. Candidate has 2 years.",
  },
  {
    id: "APP011",
    applicantName: "Deepak Tiwari",
    applicantEmail: "deepak.tiwari@gmail.com",
    jobTitle: "Senior React Developer",
    company: "Infosys Ltd",
    companyId: "CMP001",
    recruiterName: "Ananya Kapoor",
    status: "OFFERED",
    appliedAt: "02 Jan 2025",
    lastUpdated: "22 Jan 2025",
    resumeScore: 93,
    experience: "6 yrs",
    location: "Bangalore",
    statusReason:
      "All rounds cleared. Offer ₹22 LPA sent and verbally accepted.",
  },
  {
    id: "APP012",
    applicantName: "Meera Pillai",
    applicantEmail: "meera.pillai@yahoo.com",
    jobTitle: "Python Developer",
    company: "Infosys Ltd",
    companyId: "CMP001",
    recruiterName: "Ananya Kapoor",
    status: "SHORTLISTED",
    appliedAt: "15 Jan 2025",
    lastUpdated: "17 Jan 2025",
    resumeScore: 79,
    experience: "2 yrs",
    location: "Bangalore",
    statusReason:
      "Python skills verified. Shortlisted for technical interview.",
    interviewDate: "28 Jan 2025",
  },
  {
    id: "APP013",
    applicantName: "Siddharth Roy",
    applicantEmail: "sid.roy@gmail.com",
    jobTitle: "UI/UX Designer",
    company: "Freshworks",
    companyId: "CMP005",
    recruiterName: "Kavitha Reddy",
    status: "APPLIED",
    appliedAt: "13 Jan 2025",
    lastUpdated: "13 Jan 2025",
    resumeScore: 65,
    experience: "3 yrs",
    location: "Chennai",
    statusReason: "Application under review.",
  },
  {
    id: "APP014",
    applicantName: "Tanvi Bhatt",
    applicantEmail: "tanvi.bhatt@rediff.com",
    jobTitle: "Content Writer",
    company: "SME Corp",
    companyId: "CMP012",
    recruiterName: "Nikhil Bansal",
    status: "WITHDRAWN",
    appliedAt: "18 Jan 2025",
    lastUpdated: "20 Jan 2025",
    resumeScore: 60,
    experience: "2 yrs",
    location: "Ahmedabad",
    statusReason: "Candidate withdrew application — no reason provided.",
  },
  {
    id: "APP015",
    applicantName: "Gaurav Mishra",
    applicantEmail: "gaurav.m@gmail.com",
    jobTitle: "Full Stack Developer",
    company: "Cognizant",
    companyId: "CMP013",
    recruiterName: "Sunita Rao",
    status: "INTERVIEW",
    appliedAt: "19 Jan 2025",
    lastUpdated: "23 Jan 2025",
    resumeScore: 86,
    experience: "4 yrs",
    location: "Chennai",
    statusReason: "Technical round cleared. HR interview on 29 Jan.",
    interviewDate: "29 Jan 2025",
  },
  {
    id: "APP016",
    applicantName: "Ritu Sinha",
    applicantEmail: "ritu.sinha@gmail.com",
    jobTitle: "HR Business Partner",
    company: "HCL Technologies",
    companyId: "CMP007",
    recruiterName: "Divya Krishnan",
    status: "REJECTED",
    appliedAt: "14 Jan 2025",
    lastUpdated: "16 Jan 2025",
    resumeScore: 38,
    experience: "1 yr",
    location: "Noida",
    statusReason: "Less than 3 years HR experience required. Not eligible.",
  },
  {
    id: "APP017",
    applicantName: "Aryan Kapoor",
    applicantEmail: "aryan.k@gmail.com",
    jobTitle: "Frontend Intern",
    company: "StartupX",
    companyId: "CMP006",
    recruiterName: "Saurabh Gupta",
    status: "SHORTLISTED",
    appliedAt: "13 Jan 2025",
    lastUpdated: "15 Jan 2025",
    resumeScore: 72,
    experience: "Fresher",
    location: "Delhi",
    statusReason:
      "Good projects in portfolio. Shortlisted for assignment round.",
    interviewDate: "22 Jan 2025",
  },
  {
    id: "APP018",
    applicantName: "Bhavna Desai",
    applicantEmail: "bhavna.d@yahoo.com",
    jobTitle: "Retail Store Manager",
    company: "SmallBiz India",
    companyId: "CMP018",
    recruiterName: "Nandita Mishra",
    status: "APPLIED",
    appliedAt: "24 Jan 2025",
    lastUpdated: "24 Jan 2025",
    resumeScore: 70,
    experience: "3 yrs",
    location: "Kolkata",
    statusReason: "New application. Pending recruiter review.",
  },
];

// ─── Tabs ─────────────────────────────────────────────────
const TABS: { key: Tab; label: string }[] = [
  { key: "ALL", label: "All" },
  { key: "APPLIED", label: "Applied" },
  { key: "SHORTLISTED", label: "Shortlisted" },
  { key: "INTERVIEW", label: "Interview" },
  { key: "OFFERED", label: "Offered" },
  { key: "REJECTED", label: "Rejected" },
  { key: "WITHDRAWN", label: "Withdrawn" },
];

// ─── Styles ───────────────────────────────────────────────
const statusStyle: Record<
  AppStatus,
  { badge: string; row: string; dot: string }
> = {
  APPLIED: {
    badge: "bg-gray-100 text-gray-600 border-gray-200",
    row: "",
    dot: "bg-gray-400",
  },
  SHORTLISTED: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    row: "bg-blue-50/20",
    dot: "bg-blue-500",
  },
  INTERVIEW: {
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    row: "bg-violet-50/20",
    dot: "bg-violet-500",
  },
  OFFERED: {
    badge: "bg-green-50 text-green-700 border-green-200",
    row: "bg-green-50/20",
    dot: "bg-green-500",
  },
  REJECTED: {
    badge: "bg-red-50 text-red-700 border-red-200",
    row: "bg-red-50/30",
    dot: "bg-red-500",
  },
  WITHDRAWN: {
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    row: "bg-amber-50/20 opacity-80",
    dot: "bg-amber-400",
  },
};

const reasonIcon: Record<AppStatus, React.ReactNode> = {
  APPLIED: <Clock size={11} className="text-gray-400   flex-shrink-0" />,
  SHORTLISTED: <Star size={11} className="text-blue-400   flex-shrink-0" />,
  INTERVIEW: <Calendar size={11} className="text-violet-400 flex-shrink-0" />,
  OFFERED: <CheckCircle size={11} className="text-green-500  flex-shrink-0" />,
  REJECTED: <XCircle size={11} className="text-red-500    flex-shrink-0" />,
  WITHDRAWN: <RotateCcw size={11} className="text-amber-400  flex-shrink-0" />,
};

function scoreColor(score: number) {
  if (score >= 80) return "text-green-600 bg-green-50 border-green-200";
  if (score >= 60) return "text-blue-600 bg-blue-50 border-blue-200";
  if (score >= 40) return "text-amber-600 bg-amber-50 border-amber-200";
  return "text-red-600 bg-red-50 border-red-200";
}

// ─── Action Menu ──────────────────────────────────────────
function ActionMenu({
  app,
  onAction,
}: {
  app: Application;
  onAction: (a: string, id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });

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

  const calcPos = useCallback(() => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    setPos({
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
    { key: "view", label: "View Application", icon: Eye, cls: "text-gray-700" },
    {
      key: "resume",
      label: "View Resume",
      icon: FileText,
      cls: "text-blue-600",
    },
    {
      key: "shortlist",
      label: "Shortlist",
      icon: ThumbsUp,
      cls: "text-blue-600",
      hide:
        app.status === "SHORTLISTED" ||
        app.status === "OFFERED" ||
        app.status === "WITHDRAWN",
    },
    {
      key: "interview",
      label: "Schedule Interview",
      icon: Calendar,
      cls: "text-violet-600",
      hide: app.status !== "SHORTLISTED",
    },
    {
      key: "offer",
      label: "Send Offer",
      icon: CheckCircle,
      cls: "text-green-600",
      hide: app.status !== "INTERVIEW",
    },
    {
      key: "reject",
      label: "Reject",
      icon: ThumbsDown,
      cls: "text-red-600",
      hide:
        app.status === "REJECTED" ||
        app.status === "OFFERED" ||
        app.status === "WITHDRAWN",
    },
    {
      key: "message",
      label: "Message Applicant",
      icon: MessageSquare,
      cls: "text-gray-600",
    },
    {
      key: "delete",
      label: "Delete Application",
      icon: Trash2,
      cls: "text-red-700",
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
          className="fixed z-[9999] w-48 bg-white border border-gray-200 rounded-xl shadow-xl py-1 overflow-hidden"
          style={{ top: pos.top, left: pos.left }}
        >
          {actions.map((a) => {
            const Icon = a.icon;
            return (
              <button
                key={a.key}
                onClick={() => {
                  onAction(a.key, app.id);
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
              className={`w-7 h-7 rounded-lg text-xs font-semibold transition-all ${page === p ? "bg-blue-600 text-white shadow-sm" : "border border-gray-200 text-gray-600 hover:bg-white"}`}
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

export default function ApplicationControl() {
  const router = useRouter();
  const [apps, setApps] = useState<Application[]>(MOCK_APPS);
  const [activeTab, setActiveTab] = useState<Tab>("ALL");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const counts = {
    ALL: apps.length,
    APPLIED: apps.filter((a) => a.status === "APPLIED").length,
    SHORTLISTED: apps.filter((a) => a.status === "SHORTLISTED").length,
    INTERVIEW: apps.filter((a) => a.status === "INTERVIEW").length,
    OFFERED: apps.filter((a) => a.status === "OFFERED").length,
    REJECTED: apps.filter((a) => a.status === "REJECTED").length,
    WITHDRAWN: apps.filter((a) => a.status === "WITHDRAWN").length,
  };

  const filtered = apps.filter((a) => {
    const matchTab = activeTab === "ALL" || a.status === activeTab;
    const q = search.toLowerCase();
    const matchSearch =
      !search ||
      a.applicantName.toLowerCase().includes(q) ||
      a.applicantEmail.toLowerCase().includes(q) ||
      a.jobTitle.toLowerCase().includes(q) ||
      a.company.toLowerCase().includes(q) ||
      a.id.toLowerCase().includes(q);
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
      router.push(`/admin/platform-management/applications/viewApplication/${id}`);
      return;
    }
    if (action === "resume") {
      router.push(`/admin/applications/${id}/resume`);
      return;
    }
    if (action === "message") {
      router.push(`/admin/applications/${id}/message`);
      return;
    }
    setApps((prev) =>
      prev.map((a) => {
        if (a.id !== id) return a;
        switch (action) {
          case "shortlist":
            return {
              ...a,
              status: "SHORTLISTED",
              statusReason: "Shortlisted by admin.",
            };
          case "interview":
            return {
              ...a,
              status: "INTERVIEW",
              statusReason: "Interview scheduled by admin.",
            };
          case "offer":
            return {
              ...a,
              status: "OFFERED",
              statusReason: "Offer sent by admin.",
            };
          case "reject":
            return {
              ...a,
              status: "REJECTED",
              statusReason: "Rejected by admin.",
            };
          case "delete":
            return {
              ...a,
              status: "WITHDRAWN",
              statusReason: "Deleted by admin.",
            };
          default:
            return a;
        }
      }),
    );
  };

  const statCards = [
    {
      label: "Total Applications",
      value: counts.ALL,
      tab: "ALL" as Tab,
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      label: "Shortlisted",
      value: counts.SHORTLISTED,
      tab: "SHORTLISTED" as Tab,
      icon: Star,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      label: "In Interview",
      value: counts.INTERVIEW,
      tab: "INTERVIEW" as Tab,
      icon: Calendar,
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-100",
    },
    {
      label: "Offered",
      value: counts.OFFERED,
      tab: "OFFERED" as Tab,
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-100",
    },
  ];

  return (
    <div className="flex flex-col min-w-0">
      {/* ══════════ HEADER ══════════ */}
      <div className="px-6 pt-6 pb-5 border-b border-gray-100 bg-white">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
              <FileText size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900 leading-tight">
                Application Control
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Track and manage all job applications on the platform
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push("/admin/applications")}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-all"
            >
              <FileText size={14} />
              View Applications
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
              label: "New Applications",
              icon: Clock,
              cls: "bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-200",
              tab: "APPLIED" as Tab,
            },
            {
              label: "In Interview",
              icon: Calendar,
              cls: "bg-violet-50 text-violet-600 hover:bg-violet-100 border-violet-100",
              tab: "INTERVIEW" as Tab,
            },
            {
              label: "Rejected",
              icon: XCircle,
              cls: "bg-red-50 text-red-600 hover:bg-red-100 border-red-100",
              tab: "REJECTED" as Tab,
            },
            {
              label: "Withdrawn",
              icon: RotateCcw,
              cls: "bg-amber-50 text-amber-600 hover:bg-amber-100 border-amber-100",
              tab: "WITHDRAWN" as Tab,
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
            placeholder="Search by applicant, job, company or ID..."
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
            <col style={{ width: "20%" }} />
            <col style={{ width: "6%" }} />
            <col style={{ width: "16%" }} />
            <col style={{ width: "13%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "17%" }} />
            <col style={{ width: "4%" }} />
          </colgroup>
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide pl-6">
                Applicant
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                ID
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Job / Company
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Recruiter
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Score
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Applied
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Status
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Reason / Note
              </th>
              <th className="px-3 py-3 pr-6 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {paginated.length === 0 ? (
              <tr>
                <td
                  colSpan={9}
                  className="px-6 py-12 text-center text-sm text-gray-400"
                >
                  No applications found
                </td>
              </tr>
            ) : (
              paginated.map((app) => {
                const s = statusStyle[app.status];
                return (
                  <tr
                    key={app.id}
                    className={`hover:bg-blue-50/20 transition-colors duration-100 ${s.row}`}
                  >
                    {/* Applicant */}
                    <td className="pl-6 pr-3 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {app.applicantName
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-gray-800 text-sm leading-tight truncate">
                            {app.applicantName}
                          </p>
                          <p className="text-[11px] text-gray-400 truncate">
                            {app.applicantEmail}
                          </p>
                          <p className="text-[10px] text-gray-400 mt-0.5">
                            {app.experience} exp · {app.location}
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
                        <span className="truncate">{app.id}</span>
                      </span>
                    </td>

                    {/* Job + Company */}
                    <td className="px-3 py-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1">
                          <Briefcase
                            size={11}
                            className="text-blue-400 flex-shrink-0"
                          />
                          <p className="text-xs font-semibold text-gray-700 truncate">
                            {app.jobTitle}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Building2
                            size={11}
                            className="text-gray-300 flex-shrink-0"
                          />
                          <p className="text-[11px] text-gray-500 truncate">
                            {app.company}
                          </p>
                        </div>
                        {app.interviewDate && (
                          <div className="flex items-center gap-1 mt-0.5">
                            <Calendar
                              size={10}
                              className="text-violet-400 flex-shrink-0"
                            />
                            <p className="text-[10px] text-violet-600 font-medium">
                              Interview: {app.interviewDate}
                            </p>
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Recruiter */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <UserCircle
                          size={13}
                          className="text-blue-400 flex-shrink-0"
                        />
                        <p className="text-xs text-gray-600 truncate">
                          {app.recruiterName}
                        </p>
                      </div>
                    </td>

                    {/* Resume Score */}
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold border ${scoreColor(app.resumeScore)}`}
                      >
                        {app.resumeScore}%
                      </span>
                    </td>

                    {/* Applied At */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1">
                        <Calendar
                          size={10}
                          className="text-gray-300 flex-shrink-0"
                        />
                        <span className="text-[11px] text-gray-500">
                          {app.appliedAt}
                        </span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${s.badge}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.dot}`}
                        />
                        {app.status.charAt(0) +
                          app.status.slice(1).toLowerCase()}
                      </span>
                    </td>

                    {/* Reason */}
                    <td className="px-3 py-3">
                      <div className="flex items-start gap-1">
                        {reasonIcon[app.status]}
                        <p className="text-[11px] text-gray-500 leading-tight line-clamp-2">
                          {app.statusReason}
                        </p>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-3 pr-6 py-3 text-right">
                      <ActionMenu app={app} onAction={handleAction} />
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
