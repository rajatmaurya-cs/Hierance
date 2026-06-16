"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  UserCircle,
  Briefcase,
  Building2,
  MapPin,
  Mail,
  Calendar,
  Clock,
  FileText,
  Star,
  CheckCircle,
  XCircle,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  ChevronRight,
  TrendingUp,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";

// --- Mock Application Data (In a real app, this would be fetched based on applicationId) ---
const MOCK_APP_DETAILS = {
  id: "APP001",
  applicantName: "Rahul Sharma",
  applicantEmail: "rahul.sharma@gmail.com",
  jobTitle: "Senior React Developer",
  jobId: "JOB001",
  company: "Infosys Ltd",
  companyId: "CMP001",
  status: "SHORTLISTED",
  appliedAt: "03 Jan 2025",
  lastUpdated: "05 Jan 2025",
  resumeScore: 88,
  experience: "4 years",
  location: "Bangalore, India",
  statusReason: "Strong portfolio and matching skill set. Moved to shortlist for technical review.",
  interviewDate: "12 Jan 2025",
  bio: "Highly motivated React Developer with a passion for building scalable web applications. Experienced in React, Next.js, and TypeScript.",
  skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  recruiterName: "Ananya Kapoor",
  timeline: [
    { date: "03 Jan 2025", event: "Application Submitted", icon: FileText, color: "text-blue-500", bg: "bg-blue-50" },
    { date: "04 Jan 2025", event: "Resume Screened (AI)", icon: Award, color: "text-emerald-500", bg: "bg-emerald-50" },
    { date: "05 Jan 2025", event: "Shortlisted by Recruiter", icon: ThumbsUp, color: "text-indigo-500", bg: "bg-indigo-50" },
  ]
};

export default function ApplicationDetailsPage({ params }: { params: Promise<{ applicationId: string }> }) {
  const router = useRouter();
  const { applicationId } = use(params);

  // In real scenario, fetch application by applicationId
  const app = MOCK_APP_DETAILS;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-3 py-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 group text-sm font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Applications
        </button>
      </div>

      <main className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Application Content */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative overflow-hidden"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50/50 rounded-bl-full -z-0" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center text-3xl font-black text-white shadow-lg shadow-indigo-200">
                  {app.applicantName.charAt(0)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                      {app.applicantName}
                    </h1>
                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-black border border-indigo-100 uppercase tracking-wider">
                      {app.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-slate-400" /> {app.jobTitle}</span>
                    <span className="flex items-center gap-1.5"><Building2 size={14} className="text-slate-400" /> {app.company}</span>
                    <span className="flex items-center gap-1.5 text-indigo-600 font-bold"><Mail size={14} /> {app.applicantEmail}</span>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Applied Date</p>
                  <p className="text-sm font-black text-slate-900 leading-none flex items-center gap-1.5">
                    <Calendar size={13} className="text-indigo-500" />
                    {app.appliedAt}
                  </p>
                </div>
                <div className="space-y-1 border-l border-slate-200 pl-6">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Experience</p>
                  <p className="text-sm font-black text-slate-900 leading-none flex items-center gap-1.5">
                    < Award size={13} className="text-amber-500" />
                    {app.experience}
                  </p>
                </div>
                <div className="space-y-1 border-l border-slate-200 pl-6">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Location</p>
                  <p className="text-sm font-black text-slate-900 leading-none flex items-center gap-1.5">
                    <MapPin size={13} className="text-rose-500" />
                    {app.location}
                  </p>
                </div>
                <div className="space-y-1 border-l border-slate-200 pl-6">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Last Updated</p>
                  <p className="text-sm font-black text-slate-900 leading-none flex items-center gap-1.5">
                    <Clock size={13} className="text-emerald-500" />
                    {app.lastUpdated}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI Resume Insight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col items-center text-center justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500" />
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">AI Resume Score</p>
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray={364.4} strokeDashoffset={364.4 - (364.4 * app.resumeScore) / 100} className="text-indigo-600 transition-all duration-1000" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-3xl font-black text-slate-900">{app.resumeScore}%</p>
                </div>
              </div>
              <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">Highly Compatible</p>
              <p className="text-xs text-slate-400 mt-1 font-medium italic">Based on skill matching & experience</p>
            </motion.div>

            {/* Application Reason */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200"
            >
              <h3 className="text-sm font-black text-slate-900 mb-4 px-1 flex items-center gap-2">
                <MessageSquare size={16} className="text-indigo-400" />
                Reviewer Note
              </h3>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  `{app.statusReason}`
                </p>
              </div>
              <div className="mt-4 flex items-center gap-3 px-1">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-black text-indigo-600 uppercase">
                  {app.recruiterName?.charAt(0) || "A"}
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-900 uppercase">Ananya Kapoor</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase">Senior Recruiter</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200"
          >
            <h2 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
              Application Journey
            </h2>
            <div className="space-y-8 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
              {app.timeline.map((step, i) => (
                <div key={i} className="flex gap-6 relative group">
                  <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center z-10 border border-white shadow-sm group-hover:scale-110 transition-transform`}>
                    <step.icon size={16} className={step.color} />
                  </div>
                  <div className="pt-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">{step.date}</p>
                    <h4 className="text-sm font-black text-slate-900 tracking-tight">{step.event}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Actions & Files */}
        <div className="space-y-6">
          {/* Action Center */}
          {/* <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200"
          >
            <h3 className="text-sm font-black text-slate-900 mb-5 px-1 tracking-tight">Admin Action Center</h3>
            <div className="space-y-3">
              <Button className="w-full justify-start gap-4 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-100 rounded-2xl shadow-none font-bold text-xs py-4">
                <Star size={16} /> Shortlist Candidate
              </Button>
              <Button className="w-full justify-start gap-4 bg-violet-50 text-violet-700 hover:bg-violet-100 border border-violet-100 rounded-2xl shadow-none font-bold text-xs py-4">
                <Calendar size={16} /> Schedule Interview
              </Button>
              <Button className="w-full justify-start gap-4 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-100 rounded-2xl shadow-none font-bold text-xs py-4">
                <CheckCircle size={16} /> Roll-out Offer
              </Button>
              <div className="h-[1px] bg-slate-100 my-2" />
              <Button className="w-full justify-start gap-4 bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-100 rounded-2xl shadow-none font-bold text-xs py-4">
                <XCircle size={16} /> Reject Application
              </Button>
            </div>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-6 shadow-md border border-slate-200"
          >
            <h3 className="text-sm font-black text-slate-900 mb-5 px-1 tracking-tight">
              Admin Action Center
            </h3>


            <div className="space-y-3">


              {/* <Button
                className="w-full flex items-center gap-3 px-5 py-4
  bg-blue-600 text-white
  hover:bg-blue-700
  rounded-xl text-sm font-medium shadow-sm"
              >
                <Calendar size={18} />
                Schedule Interview
              </Button>

              <Button
                className="w-full flex items-center gap-3 px-5 py-4
  bg-emerald-600 text-white
  hover:bg-emerald-700
  rounded-xl text-sm font-medium shadow-sm"
              >
                <CheckCircle size={18} />
                Roll-out Offer
              </Button>

              <div className="h-px bg-slate-200 my-3" />

              <Button
                className="w-full flex items-center gap-3 px-5 py-4
  bg-red-600 text-white
  hover:bg-red-700
  rounded-xl text-sm font-medium shadow-sm"
              >
                <XCircle size={18} />
                Reject Application
              </Button> */}

              <Button
  className="w-full flex items-center gap-3 px-5 py-4
  bg-indigo-500 text-white
  hover:bg-indigo-600
  rounded-xl text-sm font-medium shadow-sm"
>
  <Calendar size={18} />
  Schedule Interview
</Button>

<Button
  className="w-full flex items-center gap-3 px-5 py-4
  bg-teal-500 text-white
  hover:bg-teal-600
  rounded-xl text-sm font-medium shadow-sm"
>
  <CheckCircle size={18} />
  Roll-out Offer
</Button>

<div className="h-px bg-slate-200 my-3" />

<Button
  className="w-full flex items-center gap-3 px-5 py-4
  bg-rose-500 text-white
  hover:bg-rose-600
  rounded-xl text-sm font-medium shadow-sm"
>
  <XCircle size={18} />
  Reject Application
</Button>


            </div>
          </motion.div>
          {/* Files & Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200"
          >
            <h3 className="text-sm font-black text-slate-900 mb-5 px-1 tracking-tight">Documents & Profile</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-indigo-200 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">Main_Resume.pdf</h4>
                    <p className="text-[10px] font-bold text-slate-400 mt-0.5">2.4 MB • PDF File</p>
                  </div>
                </div>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-indigo-400 transition-colors" />
              </a>
              <Link href={`/admin/platform-management/jobs/details/${app.jobId}`} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-indigo-200 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 leading-tight">View Job Post</h4>
                    <p className="text-[10px] font-bold text-slate-400 mt-1">Ref: {app.jobId}</p>
                  </div>
                </div>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-indigo-400 transition-colors" />
              </Link>
            </div>
          </motion.div>

          {/* Skills Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between mb-5 px-1">
              <h3 className="text-sm font-black text-slate-900 tracking-tight">Key Expertise</h3>
              <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                <TrendingUp size={10} /> High Match
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {app.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-black text-slate-600 uppercase tracking-tight">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <style jsx global>{`
        body { font-family: var(--font-primary); }
      `}</style>
    </div>
  );
}
