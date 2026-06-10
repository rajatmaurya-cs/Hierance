"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { AdminRole } from "../../types";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  Clock,
  CheckCircle,
  XCircle,
  Search,
  Download,
  Eye,
  ShieldCheck,
  Ban,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Hash,
  Calendar,
  AlertTriangle,
  Flame,
  TrendingUp,
  Users,
  Briefcase,
  Building2,
  FileText,
  RefreshCw,
  MessageSquare,
  Flag,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────
type ReportStatus = "PENDING" | "IN_REVIEW" | "RESOLVED" | "DISMISSED";
type ReportUrgency = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
type ReportDomain =
  | "USER"
  | "JOB"
  | "COMPANY"
  | "RECRUITER"
  | "APPLICATION"
  | "PLATFORM";
type ReportType =
  | "SPAM"
  | "FRAUD"
  | "MISLEADING"
  | "ABUSE"
  | "FAKE_PROFILE"
  | "POLICY_VIOLATION"
  | "DATA_ISSUE"
  | "OTHER";
type Tab = "ALL" | "PENDING" | "IN_REVIEW" | "RESOLVED" | "DISMISSED";

type Report = {
  id: string;
  title: string;
  description: string;
  domain: ReportDomain;
  type: ReportType;
  urgency: ReportUrgency;
  status: ReportStatus;
  progress: number; // 0–100
  sentBy: string; // admin name
  sentByEmail: string;
  sentByRole: string;
  sentAt: string;
  lastUpdated: string;
  targetEntity: string; // what/who is reported
  targetId: string;
  resolvedBy?: string;
  notes: string;
};

const PAGE_SIZE = 15;

// ─── Mock Data ────────────────────────────────────────────
const MOCK_REPORTS: Report[] = [
  {
    id: "RPT001",
    title: "Mass Spam Applications Detected",
    description: "User sending 50+ applications per day using automated tools.",
    domain: "USER",
    type: "SPAM",
    urgency: "HIGH",
    status: "IN_REVIEW",
    progress: 60,
    sentBy: "Ananya Kapoor",
    sentByEmail: "ananya.k@infosys.com",
    sentByRole: "Admin",
    sentAt: "05 Jan 2025",
    lastUpdated: "07 Jan 2025",
    targetEntity: "Deepak Tiwari (USR011)",
    targetId: "USR011",
    resolvedBy: undefined,
    notes: "IP flagged for bot-like behavior. Reviewing session logs.",
  },
  {
    id: "RPT002",
    title: "Fake Job Listing – Frontend Dev",
    description:
      "Job listing has incorrect salary range and misleading role description.",
    domain: "JOB",
    type: "MISLEADING",
    urgency: "MEDIUM",
    status: "PENDING",
    progress: 0,
    sentBy: "Rajesh Nair",
    sentByEmail: "rajesh.n@tcs.com",
    sentByRole: "Admin",
    sentAt: "06 Jan 2025",
    lastUpdated: "06 Jan 2025",
    targetEntity: "JOB005 – Freshworks",
    targetId: "JOB005",
    resolvedBy: undefined,
    notes: "Awaiting recruiter response on salary discrepancy.",
  },
  {
    id: "RPT003",
    title: "Company Profile Fraud – Agency 360",
    description:
      "Agency posted fabricated company registration details and GST numbers.",
    domain: "COMPANY",
    type: "FRAUD",
    urgency: "CRITICAL",
    status: "IN_REVIEW",
    progress: 80,
    sentBy: "Divya Krishnan",
    sentByEmail: "divya@hcltech.com",
    sentByRole: "Admin",
    sentAt: "07 Jan 2025",
    lastUpdated: "09 Jan 2025",
    targetEntity: "Agency 360 (CMP016)",
    targetId: "CMP016",
    resolvedBy: undefined,
    notes: "Legal team notified. GST verification in progress.",
  },
  {
    id: "RPT004",
    title: "Recruiter Abusive Messages",
    description:
      "Recruiter sent inappropriate and threatening messages to job applicants.",
    domain: "RECRUITER",
    type: "ABUSE",
    urgency: "HIGH",
    status: "RESOLVED",
    progress: 100,
    sentBy: "Ritu Agarwal",
    sentByEmail: "ritu.a@deloitte.com",
    sentByRole: "Admin",
    sentAt: "03 Jan 2025",
    lastUpdated: "06 Jan 2025",
    targetEntity: "Mohit Sharma (REC008)",
    targetId: "REC008",
    resolvedBy: "Super Admin",
    notes: "Recruiter account blocked. Applicants notified and compensated.",
  },
  {
    id: "RPT005",
    title: "Fake Resume Score Manipulation",
    description:
      "Applicant altered their resume to artificially boost ATS score.",
    domain: "APPLICATION",
    type: "FRAUD",
    urgency: "MEDIUM",
    status: "PENDING",
    progress: 10,
    sentBy: "Sunita Rao",
    sentByEmail: "sunita@cognizant.com",
    sentByRole: "Admin",
    sentAt: "08 Jan 2025",
    lastUpdated: "08 Jan 2025",
    targetEntity: "APP003 – Amit Joshi",
    targetId: "APP003",
    resolvedBy: undefined,
    notes: "Resume flagged for duplicate sections and inflated skill scores.",
  },
  {
    id: "RPT006",
    title: "Platform Downtime – Search Module",
    description:
      "Job search returning 500 errors for 15% of users in Bangalore region.",
    domain: "PLATFORM",
    type: "DATA_ISSUE",
    urgency: "CRITICAL",
    status: "RESOLVED",
    progress: 100,
    sentBy: "Arjun Mehta",
    sentByEmail: "arjun.m@wipro.com",
    sentByRole: "Admin",
    sentAt: "02 Jan 2025",
    lastUpdated: "02 Jan 2025",
    targetEntity: "Search Service",
    targetId: "SVC_SEARCH",
    resolvedBy: "Tech Team",
    notes: "Redis cache flush resolved the issue. Monitoring for 48h.",
  },
  {
    id: "RPT007",
    title: "User Profile – Fake Identity",
    description:
      "User uploaded fabricated ID documents to verify professional credentials.",
    domain: "USER",
    type: "FAKE_PROFILE",
    urgency: "HIGH",
    status: "PENDING",
    progress: 20,
    sentBy: "Preeti Joshi",
    sentByEmail: "preeti@swiggy.com",
    sentByRole: "Admin",
    sentAt: "09 Jan 2025",
    lastUpdated: "09 Jan 2025",
    targetEntity: "Vikram Rao (USR007)",
    targetId: "USR007",
    resolvedBy: undefined,
    notes: "Document verification pending. Aadhar match failed.",
  },
  {
    id: "RPT008",
    title: "Multiple Accounts – Same Recruiter",
    description:
      "Recruiter operating 3 accounts under different names to bypass posting limits.",
    domain: "RECRUITER",
    type: "POLICY_VIOLATION",
    urgency: "HIGH",
    status: "IN_REVIEW",
    progress: 45,
    sentBy: "Kavitha Reddy",
    sentByEmail: "kavitha@freshworks.com",
    sentByRole: "Admin",
    sentAt: "10 Jan 2025",
    lastUpdated: "12 Jan 2025",
    targetEntity: "Tarun Khanna (REC016)",
    targetId: "REC016",
    resolvedBy: undefined,
    notes:
      "IP and device fingerprinting confirms 3 accounts from same location.",
  },
  {
    id: "RPT009",
    title: "Job Listing – Wrong Category",
    description:
      "Full-time job posted as internship to attract more applicants.",
    domain: "JOB",
    type: "MISLEADING",
    urgency: "LOW",
    status: "DISMISSED",
    progress: 100,
    sentBy: "Ishaan Tiwari",
    sentByEmail: "ishaan@oracle.com",
    sentByRole: "Admin",
    sentAt: "01 Jan 2025",
    lastUpdated: "03 Jan 2025",
    targetEntity: "JOB006 – StartupX",
    targetId: "JOB006",
    resolvedBy: "Super Admin",
    notes:
      "After review, category was an honest mistake. Recruiter corrected it.",
  },
  {
    id: "RPT010",
    title: "Data Leak – Application Emails",
    description:
      "Applicant emails visible in public API response without authentication.",
    domain: "PLATFORM",
    type: "DATA_ISSUE",
    urgency: "CRITICAL",
    status: "IN_REVIEW",
    progress: 70,
    sentBy: "Nikhil Bansal",
    sentByEmail: "nikhil@sme-corp.in",
    sentByRole: "Admin",
    sentAt: "11 Jan 2025",
    lastUpdated: "13 Jan 2025",
    targetEntity: "Applications API",
    targetId: "API_APPS",
    resolvedBy: undefined,
    notes: "API endpoint patched. DPDP Act compliance team alerted.",
  },
  {
    id: "RPT011",
    title: "Company – Misleading Job Count",
    description:
      "Company showing 50 open jobs but only 3 are real active listings.",
    domain: "COMPANY",
    type: "MISLEADING",
    urgency: "MEDIUM",
    status: "RESOLVED",
    progress: 100,
    sentBy: "Aditya Verma",
    sentByEmail: "aditya.v@techstartup.io",
    sentByRole: "Admin",
    sentAt: "04 Jan 2025",
    lastUpdated: "06 Jan 2025",
    targetEntity: "StartupX (CMP006)",
    targetId: "CMP006",
    resolvedBy: "Super Admin",
    notes: "Company warned and job count corrected. Under monitoring.",
  },
  {
    id: "RPT012",
    title: "Spam Comments on Job Posts",
    description:
      "Bot accounts flooding job listing comment sections with promotional links.",
    domain: "JOB",
    type: "SPAM",
    urgency: "MEDIUM",
    status: "PENDING",
    progress: 5,
    sentBy: "Meghna Pillai",
    sentByEmail: "meghna@ibm.com",
    sentByRole: "Admin",
    sentAt: "12 Jan 2025",
    lastUpdated: "12 Jan 2025",
    targetEntity: "Multiple Job Posts",
    targetId: "BULK",
    resolvedBy: undefined,
    notes: "22 bot accounts identified. Bulk action pending approval.",
  },
  {
    id: "RPT013",
    title: "Applicant – Harassment of Recruiter",
    description:
      "Applicant sent 30+ emails to recruiter after rejection, including threats.",
    domain: "APPLICATION",
    type: "ABUSE",
    urgency: "HIGH",
    status: "RESOLVED",
    progress: 100,
    sentBy: "Nandita Mishra",
    sentByEmail: "nandita@smallbiz.in",
    sentByRole: "Admin",
    sentAt: "08 Jan 2025",
    lastUpdated: "10 Jan 2025",
    targetEntity: "Ritu Sinha (USR016)",
    targetId: "USR016",
    resolvedBy: "Super Admin",
    notes:
      "User account suspended. Recruiter given option to file police complaint.",
  },
  {
    id: "RPT014",
    title: "Platform – Slow Load in Mobile App",
    description:
      "Job feed taking 8–12 seconds to load on Android devices below 4GB RAM.",
    domain: "PLATFORM",
    type: "OTHER",
    urgency: "LOW",
    status: "IN_REVIEW",
    progress: 35,
    sentBy: "Ananya Kapoor",
    sentByEmail: "ananya.k@infosys.com",
    sentByRole: "Admin",
    sentAt: "13 Jan 2025",
    lastUpdated: "14 Jan 2025",
    targetEntity: "Mobile App – Android",
    targetId: "APP_ANDROID",
    resolvedBy: undefined,
    notes:
      "Performance profiling in progress. Bundle optimization planned for v2.4.",
  },
  {
    id: "RPT015",
    title: "Recruiter – Charging Candidates Fees",
    description:
      "Recruiter illegally charging job seekers ₹2000 'registration fee' to apply.",
    domain: "RECRUITER",
    type: "POLICY_VIOLATION",
    urgency: "CRITICAL",
    status: "PENDING",
    progress: 15,
    sentBy: "Varun Singhania",
    sentByEmail: "varun@accenture.com",
    sentByRole: "Admin",
    sentAt: "14 Jan 2025",
    lastUpdated: "14 Jan 2025",
    targetEntity: "Shruti Malhotra (REC003)",
    targetId: "REC003",
    resolvedBy: undefined,
    notes:
      "3 candidates have provided payment screenshots. Case under investigation.",
  },
  {
    id: "RPT016",
    title: "Fake Internship – No Stipend Paid",
    description:
      "Company listed internship with ₹10k/month stipend but never paid interns.",
    domain: "COMPANY",
    type: "FRAUD",
    urgency: "HIGH",
    status: "IN_REVIEW",
    progress: 55,
    sentBy: "Rajesh Nair",
    sentByEmail: "rajesh.n@tcs.com",
    sentByRole: "Admin",
    sentAt: "15 Jan 2025",
    lastUpdated: "17 Jan 2025",
    targetEntity: "TechStartup Hub (CMP014)",
    targetId: "CMP014",
    resolvedBy: undefined,
    notes:
      "5 interns reported non-payment. Company profile suspended pending hearing.",
  },
  {
    id: "RPT017",
    title: "Duplicate Job Postings – TCS",
    description:
      "Same job posted 8 times with slightly different titles to game algorithm.",
    domain: "JOB",
    type: "POLICY_VIOLATION",
    urgency: "LOW",
    status: "DISMISSED",
    progress: 100,
    sentBy: "Divya Krishnan",
    sentByEmail: "divya@hcltech.com",
    sentByRole: "Admin",
    sentAt: "29 Dec 2024",
    lastUpdated: "31 Dec 2024",
    targetEntity: "TCS (CMP002)",
    targetId: "CMP002",
    resolvedBy: "Super Admin",
    notes:
      "TCS confirmed it was a system sync issue. Duplicates removed automatically.",
  },
  {
    id: "RPT018",
    title: "User – Abusive Profile Bio",
    description:
      "User profile bio contains hate speech targeting a specific community.",
    domain: "USER",
    type: "ABUSE",
    urgency: "HIGH",
    status: "RESOLVED",
    progress: 100,
    sentBy: "Preeti Joshi",
    sentByEmail: "preeti@swiggy.com",
    sentByRole: "Admin",
    sentAt: "10 Jan 2025",
    lastUpdated: "11 Jan 2025",
    targetEntity: "Bhavna Desai (USR018)",
    targetId: "USR018",
    resolvedBy: "Super Admin",
    notes:
      "Profile content removed. User issued final warning before permanent ban.",
  },
];

// ─── Tabs ─────────────────────────────────────────────────
const TABS: { key: Tab; label: string }[] = [
  { key: "ALL", label: "All Reports" },
  { key: "PENDING", label: "Pending" },
  { key: "IN_REVIEW", label: "In Review" },
  { key: "RESOLVED", label: "Resolved" },
  { key: "DISMISSED", label: "Dismissed" },
];

// ─── Style Maps ───────────────────────────────────────────
const statusStyle: Record<
  ReportStatus,
  { badge: string; row: string; dot: string }
> = {
  PENDING: {
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    row: "bg-amber-50/20",
    dot: "bg-amber-400",
  },
  IN_REVIEW: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    row: "bg-blue-50/20",
    dot: "bg-blue-500",
  },
  RESOLVED: {
    badge: "bg-green-50 text-green-700 border-green-200",
    row: "",
    dot: "bg-green-500",
  },
  DISMISSED: {
    badge: "bg-gray-100 text-gray-500 border-gray-200",
    row: "bg-gray-50/50 opacity-80",
    dot: "bg-gray-400",
  },
};

const urgencyStyle: Record<
  ReportUrgency,
  { badge: string; icon: React.ReactNode }
> = {
  LOW: {
    badge: "bg-gray-50 text-gray-500 border-gray-200",
    icon: <Flag size={10} className="text-gray-400" />,
  },
  MEDIUM: {
    badge: "bg-blue-50 text-blue-600 border-blue-100",
    icon: <Flag size={10} className="text-blue-400" />,
  },
  HIGH: {
    badge: "bg-orange-50 text-orange-600 border-orange-200",
    icon: <AlertTriangle size={10} className="text-orange-500" />,
  },
  CRITICAL: {
    badge: "bg-red-50 text-red-700 border-red-200",
    icon: <Flame size={10} className="text-red-500" />,
  },
};

const domainIcon: Record<ReportDomain, React.ReactNode> = {
  USER: <Users size={11} className="text-blue-400" />,
  JOB: <Briefcase size={11} className="text-indigo-400" />,
  COMPANY: <Building2 size={11} className="text-teal-400" />,
  RECRUITER: <Users size={11} className="text-violet-400" />,
  APPLICATION: <FileText size={11} className="text-orange-400" />,
  PLATFORM: <BarChart3 size={11} className="text-rose-400" />,
};

const domainBadge: Record<ReportDomain, string> = {
  USER: "bg-blue-50 text-blue-600 border-blue-100",
  JOB: "bg-indigo-50 text-indigo-600 border-indigo-100",
  COMPANY: "bg-teal-50 text-teal-600 border-teal-100",
  RECRUITER: "bg-violet-50 text-violet-600 border-violet-100",
  APPLICATION: "bg-orange-50 text-orange-600 border-orange-100",
  PLATFORM: "bg-rose-50 text-rose-600 border-rose-100",
};

function progressColor(p: number) {
  if (p === 100) return "bg-green-500";
  if (p >= 60) return "bg-blue-500";
  if (p >= 30) return "bg-amber-400";
  return "bg-red-400";
}

// ─── Action Menu ──────────────────────────────────────────
function ActionMenu({
  report,
  onAction,
}: {
  report: Report;
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
    { key: "view", label: "View Full Report", icon: Eye, cls: "text-gray-700" },
    {
      key: "review",
      label: "Mark In Review",
      icon: RefreshCw,
      cls: "text-blue-600",
      hide: report.status !== "PENDING",
    },
    {
      key: "resolve",
      label: "Mark Resolved",
      icon: ShieldCheck,
      cls: "text-green-600",
      hide: report.status === "RESOLVED" || report.status === "DISMISSED",
    },
    {
      key: "dismiss",
      label: "Dismiss Report",
      icon: XCircle,
      cls: "text-gray-600",
      hide: report.status === "DISMISSED" || report.status === "RESOLVED",
    },
    {
      key: "block",
      label: "Block Entity",
      icon: Ban,
      cls: "text-red-600",
      hide: report.status === "DISMISSED" || report.status === "RESOLVED",
    },
    {
      key: "message",
      label: "Reply to Admin",
      icon: MessageSquare,
      cls: "text-indigo-600",
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
          style={{ top: pos.top, left: pos.left }}
        >
          {actions.map((a) => {
            const Icon = a.icon;
            return (
              <button
                key={a.key}
                onClick={() => {
                  onAction(a.key, report.id);
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
type Props = { role: AdminRole };

export default function ReportsControl({ role }: Props) {
  const router = useRouter();
  const [reports, setReports] = useState<Report[]>(MOCK_REPORTS);
  const [activeTab, setActiveTab] = useState<Tab>("ALL");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const counts = {
    ALL: reports.length,
    PENDING: reports.filter((r) => r.status === "PENDING").length,
    IN_REVIEW: reports.filter((r) => r.status === "IN_REVIEW").length,
    RESOLVED: reports.filter((r) => r.status === "RESOLVED").length,
    DISMISSED: reports.filter((r) => r.status === "DISMISSED").length,
  };

  const criticalCount = reports.filter(
    (r) => r.urgency === "CRITICAL" && r.status === "PENDING",
  ).length;

  const filtered = reports.filter((r) => {
    const matchTab = activeTab === "ALL" || r.status === activeTab;
    const q = search.toLowerCase();
    const matchSearch =
      !search ||
      r.title.toLowerCase().includes(q) ||
      r.sentBy.toLowerCase().includes(q) ||
      r.targetEntity.toLowerCase().includes(q) ||
      r.id.toLowerCase().includes(q) ||
      r.domain.toLowerCase().includes(q) ||
      r.type.toLowerCase().includes(q);
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
      router.push(`/admin/reports/${id}`);
      return;
    }
    if (action === "message") {
      router.push(`/admin/reports/${id}/reply`);
      return;
    }
    setReports((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        switch (action) {
          case "review":
            return {
              ...r,
              status: "IN_REVIEW",
              progress: Math.max(r.progress, 20),
            };
          case "resolve":
            return {
              ...r,
              status: "RESOLVED",
              progress: 100,
              resolvedBy: "Super Admin",
            };
          case "dismiss":
            return {
              ...r,
              status: "DISMISSED",
              progress: 100,
              resolvedBy: "Super Admin",
            };
          case "block":
            return {
              ...r,
              status: "IN_REVIEW",
              notes: r.notes + " | Entity blocked by Super Admin.",
            };
          default:
            return r;
        }
      }),
    );
  };

  const statCards = [
    {
      label: "Total Reports",
      value: counts.ALL,
      tab: "ALL" as Tab,
      icon: BarChart3,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      label: "Pending",
      value: counts.PENDING,
      tab: "PENDING" as Tab,
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
    },
    {
      label: "In Review",
      value: counts.IN_REVIEW,
      tab: "IN_REVIEW" as Tab,
      icon: RefreshCw,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      label: "Resolved",
      value: counts.RESOLVED,
      tab: "RESOLVED" as Tab,
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
              <BarChart3 size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900 leading-tight">
                Reports & Moderation
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Review and act on reports submitted by admins
              </p>
            </div>
          </div>
          {/* Critical alert */}
          {criticalCount > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 border border-red-200">
              <Flame size={13} className="text-red-500" />
              <span className="text-xs font-semibold text-red-700">
                {criticalCount} Critical Pending
              </span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push("/admin/reports")}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-all"
            >
              <BarChart3 size={14} />
              View All Reports
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
              label: "Pending Reports",
              icon: Clock,
              cls: "bg-amber-50 text-amber-600 hover:bg-amber-100 border-amber-100",
              tab: "PENDING" as Tab,
            },
            {
              label: "Under Review",
              icon: RefreshCw,
              cls: "bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-100",
              tab: "IN_REVIEW" as Tab,
            },
            {
              label: "Resolved",
              icon: CheckCircle,
              cls: "bg-green-50 text-green-600 hover:bg-green-100 border-green-100",
              tab: "RESOLVED" as Tab,
            },
            {
              label: "Dismissed",
              icon: XCircle,
              cls: "bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-200",
              tab: "DISMISSED" as Tab,
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
            placeholder="Search by title, admin, entity, domain..."
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
            <col style={{ width: "5%" }} />
            <col style={{ width: "18%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "9%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "13%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "4%" }} />
          </colgroup>
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide pl-6">
                ID
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Report Title
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Domain
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Type
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Urgency
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Sent By
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Target Entity
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Status
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Progress / Notes
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
                  No reports found
                </td>
              </tr>
            ) : (
              paginated.map((report) => {
                const s = statusStyle[report.status];
                const u = urgencyStyle[report.urgency];
                return (
                  <tr
                    key={report.id}
                    className={`hover:bg-blue-50/20 transition-colors duration-100 ${s.row}`}
                  >
                    {/* ID */}
                    <td className="pl-6 pr-2 py-3">
                      <span className="flex items-center gap-0.5 text-[11px] text-gray-400 font-mono">
                        <Hash
                          size={9}
                          className="text-gray-300 flex-shrink-0"
                        />
                        <span>{report.id.replace("RPT", "")}</span>
                      </span>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        {report.sentAt}
                      </p>
                    </td>

                    {/* Title */}
                    <td className="px-3 py-3">
                      <p className="font-semibold text-gray-800 text-xs leading-tight line-clamp-2">
                        {report.title}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">
                        {report.description}
                      </p>
                    </td>

                    {/* Domain */}
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${domainBadge[report.domain]}`}
                      >
                        {domainIcon[report.domain]}
                        {report.domain.charAt(0) +
                          report.domain.slice(1).toLowerCase()}
                      </span>
                    </td>

                    {/* Type */}
                    <td className="px-3 py-3">
                      <p className="text-[11px] text-gray-600 font-medium leading-tight">
                        {report.type.replace(/_/g, " ").charAt(0) +
                          report.type.replace(/_/g, " ").slice(1).toLowerCase()}
                      </p>
                    </td>

                    {/* Urgency */}
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${u.badge}`}
                      >
                        {u.icon}
                        {report.urgency.charAt(0) +
                          report.urgency.slice(1).toLowerCase()}
                      </span>
                    </td>

                    {/* Sent By */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                          {report.sentBy
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-gray-700 truncate">
                            {report.sentBy}
                          </p>
                          <p className="text-[10px] text-gray-400">
                            {report.sentByRole}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Target Entity */}
                    <td className="px-3 py-3">
                      <p className="text-xs text-gray-600 font-medium truncate">
                        {report.targetEntity}
                      </p>
                    </td>

                    {/* Status */}
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${s.badge}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.dot}`}
                        />
                        {report.status === "IN_REVIEW"
                          ? "In Review"
                          : report.status.charAt(0) +
                            report.status.slice(1).toLowerCase()}
                      </span>
                      {report.resolvedBy && (
                        <p className="text-[10px] text-gray-400 mt-0.5">
                          by {report.resolvedBy}
                        </p>
                      )}
                    </td>

                    {/* Progress + Notes */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${progressColor(report.progress)}`}
                            style={{ width: `${report.progress}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-bold text-gray-500 flex-shrink-0">
                          {report.progress}%
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400 leading-tight line-clamp-2">
                        {report.notes}
                      </p>
                    </td>

                    {/* Actions */}
                    <td className="px-3 pr-6 py-3 text-right">
                      <ActionMenu report={report} onAction={handleAction} />
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
