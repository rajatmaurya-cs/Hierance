"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MOCK_JOBS } from '@/app/admin/platform-management/jobs/profiles/page'
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Banknote,
  Clock,
  Building2,
  CheckCircle,
  XCircle,
  Trash2,
  ExternalLink,
  ShieldCheck,
  Share2,
  Crown,
  Tag,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";

// --- Mock Job Data (In a real app, this would be fetched based on jobId) ---
const MOCK_JOB_DETAILS = {
  id: "JOB001",
  title: "Senior React Developer",
  company: "Infosys Ltd",
  companyLogo: "/logos/infosys.png",
  location: "Bangalore, India",
  salary: "₹18–24 LPA",
  jobType: "Full-time",
  experience: "4–7 yrs",
  status: "ACTIVE",
  postedAt: "02 Jan 2025",
  applicants: 142,
  featured: true,
  description: `
    <p>We are looking for a highly skilled <strong>Senior React Developer</strong> to join our high-performing team. In this role, you will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack.</p>
    
    <p>You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase. To ensure success as a Senior React Developer, you should have extensive knowledge of theoretical software engineering, be proficient in JavaScript, and be able to manage a team of junior developers.</p>
    
    <h3>Key Responsibilities:</h3>
    <ul>
      <li>Meeting with the design team to discuss UI ideas and applications.</li>
      <li>Reviewing application requirements and interface designs.</li>
      <li>Identifying web-based user interactions.</li>
      <li>Developing and implementing highly responsive user interface components using React concepts.</li>
      <li>Writing interface software and debugging application codes.</li>
      <li>Developing and implementing front-end architecture to support user interface concepts.</li>
      <li>Monitoring and improving front-end performance.</li>
      <li>Documenting application changes and developing updates.</li>
    </ul>

    <h3>Requirements:</h3>
    <ul>
      <li>Bachelor’s degree in Computer Science, Information Technology, or a similar field.</li>
      <li>Previous experience working as a React.js Developer (min 4 years).</li>
      <li>In-depth knowledge of JavaScript, CSS, HTML, and front-end languages.</li>
      <li>Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.</li>
      <li>Experience with user interface design.</li>
      <li>Knowledge of performance testing frameworks including Mocha and Jest.</li>
      <li>Experience with browser-based debugging and performance testing tools.</li>
      <li>Excellent troubleshooting skills and project management skills.</li>
    </ul>
  `,
  companyOverview: "Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation.",
};

export default function JobDetailsPage({ params }: { params: Promise<{ jobId: string }> }) {
  const router = useRouter();
  const { jobId } = use(params);
  const foundJob = MOCK_JOBS.find((j: any) => j.id === jobId);

  // If not found, we merge with MOCK_JOB_DETAILS for static content like description
  const job = {
    ...MOCK_JOB_DETAILS,
    ...(foundJob || {}),
    description: MOCK_JOB_DETAILS.description,
    companyOverview: MOCK_JOB_DETAILS.companyOverview,
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-3 py-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 group text-sm font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to All Jobs
        </button>
      </div>

      <main className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Job Content */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-bl-full -z-0" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold border border-green-100 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {job.status}
                    </span>
                    {job.featured && (
                      <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100 flex items-center gap-1.5">
                        <Star size={10} className="fill-amber-400 text-amber-400" />
                        FEATURED
                      </span>
                    )}
                    {job.isPremium && (
                      <span className="px-3 py-1 rounded-full bg-amber-600 text-white text-[10px] font-black border border-amber-500 shadow-sm flex items-center gap-1.5 animate-pulse">
                        <Crown size={10} />
                        PREMIUM
                      </span>
                    )}
                  </div>
                  <h1 className="text-3xl font-bold text-slate-900 leading-tight mb-2">
                    {job.title}
                  </h1>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <Building2 size={16} className="text-slate-400" />
                    {job.company}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="p-2.5 rounded-xl border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Salary Range</p>
                  <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                    <Banknote size={14} className="text-indigo-500" />
                    {job.salary}
                  </div>
                </div>
                <div className="space-y-1 border-l border-slate-200 pl-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
                  <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                    <MapPin size={14} className="text-rose-500" />
                    {job.location}
                  </div>
                </div>
                <div className="space-y-1 md:border-l border-slate-200 md:pl-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Job Type</p>
                  <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                    <Briefcase size={14} className="text-emerald-500" />
                    {job.jobType}
                  </div>
                </div>
                <div className="space-y-1 border-l border-slate-200 pl-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Experience</p>
                  <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                    <Clock size={14} className="text-amber-500" />
                    {job.experience}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
              Job Description
            </h2>
            <div
              className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4 text-[15px]"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </motion.div>
        </div>

        {/* Right Column: Actions & Details */}
        <div className="space-y-6">
          {job.isPremium && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 shadow-sm border border-amber-200 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Crown size={80} className="text-amber-600" />
              </div>
              <h3 className="text-sm font-bold text-amber-900 mb-4 flex items-center gap-2">
                <Crown size={16} className="text-amber-600" /> Premium Listing
              </h3>
              <div className="space-y-4 relative z-10">
                <div className="bg-white/60 rounded-2xl p-4 border border-amber-200/50 shadow-inner">
                  <p className="text-[10px] font-bold text-amber-800 uppercase tracking-widest mb-1">Fee Collected</p>
                  <p className="text-2xl font-black text-amber-600">{job.premiumFee}</p>
                </div>
                <ul className="space-y-2">
                  {[
                    "Priority search placement",
                    "Golden row highlight",
                    "Revenue-generating tier",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-[11px] font-bold text-amber-800/70">
                      <ShieldCheck size={12} className="text-amber-500" /> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
          {/* Admin Action Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200"
          >
            <h3 className="text-sm font-bold text-slate-900 mb-4 px-2 tracking-tight">Admin Controls</h3>
            <div className="space-y-3">
          

 


<Button className="w-full justify-start gap-3 bg-sky-600 text-white hover:bg-sky-700 rounded-2xl font-semibold text-sm py-3.5 shadow-sm shadow-sky-200/50 transition-all border-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300">
  <CheckCircle size={16} /> Approve Listing
</Button>

<Button className="w-full justify-start gap-3 bg-amber-500 text-white hover:bg-amber-600 rounded-2xl font-semibold text-sm py-3.5 shadow-sm shadow-amber-200/40 transition-all border-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300">
  <XCircle size={16} /> Reject with Reason
</Button>

<div className="h-px bg-slate-100 my-3" />

<Button className="w-full justify-start gap-3 bg-rose-600 text-white hover:bg-rose-700 rounded-2xl font-semibold text-sm py-3.5 shadow-sm shadow-rose-200/40 transition-all border-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-300">
  <Trash2 size={16} /> Delete Forever
</Button>




            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3 px-1">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                <ShieldCheck size={14} className="text-slate-400" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Security Status</p>
                <p className="text-[11px] font-bold text-emerald-600 mt-1 uppercase tracking-tight">Verified Post</p>
              </div>
            </div>
          </motion.div>

          {/* Company Brief */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl font-black text-indigo-600">
                {job.company.charAt(0)}
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-slate-900 truncate tracking-tight">{job.company}</h3>
                <Link href="#" className="text-[11px] font-medium text-indigo-600 hover:underline flex items-center gap-1 mt-0.5">
                  View Directory <ExternalLink size={10} />
                </Link>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              {job.companyOverview}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                <p>Posted By</p>
                <p className="text-slate-900">Ananya Kapoor</p>
              </div>
              <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                <p>Applicants</p>
                <p className="text-indigo-600">{job.applicants} Active</p>
              </div>
              <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                <p>Posted On</p>
                <p className="text-slate-900">{job.postedAt}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <style jsx global>{`
        .prose strong { color: #1e293b; font-weight: 700; }
        .prose h3 { font-size: 1.1rem; font-weight: 800; margin-top: 1.5rem; color: #0f172a; margin-bottom: 0.5rem; }
        .prose ul { list-style-type: none; padding-left: 0.25rem; }
        .prose li { position: relative; padding-left: 1.25rem; margin-bottom: 0.4rem; }
        .prose li::before { content: "→"; position: absolute; left: 0; color: #4f46e5; font-weight: 900; }
      `}</style>
    </div>
  );
}
