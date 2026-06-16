"use client";

import { useParams, useRouter } from "next/navigation";
import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import { JOBS, Job } from "@/shared/data/jobsMockData";
import { 
  MapPin, 
  Briefcase, 
  Calendar, 
  DollarSign, 
  ChevronLeft,
  ChevronRight,
  Share2,
  Bookmark,
  CheckCircle2,
  Globe,
  Building2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  GraduationCap,
  Users,
  ExternalLink,
  Heart,
  Award,
  Sparkles
} from "lucide-react";
import { useEffect, useState } from "react";

const getCompanyDomain = (company: string) => {
  const overrides: Record<string, string> = {
    "J.P. Morgan": "jpmorgan.com",
    "Meta": "meta.com",
    "Salesforce": "salesforce.com",
    "Accenture": "accenture.com",
    "Stripe": "stripe.com",
    "Uber": "uber.com",
    "Airbnb": "airbnb.com",
    "Spotify": "spotify.com",
    "Netflix": "netflix.com",
    "Tesla": "tesla.com",
    "Shopify": "shopify.com",
    "Google": "google.com",
    "Amazon": "amazon.com",
    "Microsoft": "microsoft.com",
  };
  const name = company.toLowerCase().replace(/\s+/g, '');
  return overrides[company] || (name.includes('.') ? name : name + '.com');
};

const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

const getTimeAgo = (dateStr: string) => {
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  return `${weeks}w ago`;
};

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.jobId as string;
  const [job, setJob] = useState<Job | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const foundJob = JOBS.find(j => j.id === jobId);
    if (foundJob) {
      setJob(foundJob);
    }
  }, [jobId]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6">
        <HomePageHeader />
        <div className="text-center">
          <div className="h-20 w-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Briefcase size={32} className="text-slate-300" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-900 mb-2">Job Not Found</h1>
          <p className="text-slate-500 mb-8 font-medium text-sm max-w-sm">The job listing you are looking for is no longer available or has been removed.</p>
          <button 
            onClick={() => router.push("/jobs")}
            className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium text-sm transition-all hover:bg-indigo-700 shadow-lg shadow-indigo-100"
          >
            Browse All Jobs
          </button>
        </div>
      </div>
    );
  }

  const companyDomain = getCompanyDomain(job.company);
  const companyLogo = `https://www.google.com/s2/favicons?domain=${companyDomain}&sz=128`;

  // Get similar jobs (same category, different id)
  const similarJobs = JOBS.filter(j => j.category === job.category && j.id !== job.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-primary">
      <HomePageHeader />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <button onClick={() => router.push("/")} className="hover:text-indigo-600 transition-colors font-medium">Home</button>
          <ChevronRight size={14} />
          <button onClick={() => router.push("/jobs")} className="hover:text-indigo-600 transition-colors font-medium">Jobs</button>
          <ChevronRight size={14} />
          <span className="text-slate-600 font-medium truncate max-w-[200px]">{job.title}</span>
        </div>

        {/* Hero Header Card */}
        <div className="glass rounded-3xl border border-white/50 p-8 md:p-10 mb-8 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-50 via-transparent to-transparent rounded-bl-full opacity-60 pointer-events-none" />
          
          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center shrink-0 ring-1 ring-slate-100 shadow-sm">
                <img
                  src={companyLogo}
                  alt={job.company}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">{job.company}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-200" />
                  <span className="text-[10px] font-medium text-emerald-600 uppercase tracking-[0.2em] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Actively Hiring
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-3">
                  {job.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-slate-300" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={14} className="text-slate-300" />
                    {job.jobType}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-slate-300" />
                    Posted {getTimeAgo(job.postedDate)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <DollarSign size={14} className="text-slate-300" />
                    {job.salary}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleShare}
                className="relative p-3 bg-white text-slate-400 hover:text-indigo-600 rounded-xl transition-all border border-slate-100 hover:border-indigo-100 hover:shadow-md"
                title="Copy link"
              >
                <Share2 size={18} />
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg whitespace-nowrap">
                    Link copied!
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`p-3 rounded-xl transition-all border ${
                  isSaved 
                    ? 'bg-indigo-50 text-indigo-600 border-indigo-100' 
                    : 'bg-white text-slate-400 hover:text-indigo-600 border-slate-100 hover:border-indigo-100 hover:shadow-md'
                }`}
                title="Save job"
              >
                <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} />
              </button>
              <button 
                onClick={() => router.push(`/candidate/456/apply/${generateSlug(job.title)}`)}
                className="px-7 py-3 bg-indigo-600 text-white rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-100 hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-0.5 duration-300"
              >
                Apply Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT — Main Content */}
          <div className="flex-1 min-w-0 space-y-8">
            
            {/* About */}
            <section className="glass rounded-3xl border border-white/50 p-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-4 tracking-tight flex items-center gap-2">
                <div className="w-1 h-5 rounded-full bg-indigo-500" />
                About this role
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {job.description}
              </p>
            </section>

            {/* Responsibilities */}
            {job.responsibilities && (
              <section className="glass rounded-3xl border border-white/50 p-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                  <div className="w-1 h-5 rounded-full bg-indigo-500" />
                  Key Responsibilities
                </h2>
                <div className="space-y-4">
                  {job.responsibilities.map((res, i) => (
                    <div key={i} className="flex gap-3.5 group">
                      <div className="mt-0.5 shrink-0 h-6 w-6 rounded-lg bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                        <CheckCircle2 size={14} className="text-indigo-500" />
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">{res}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Requirements */}
            {job.requirements && (
              <section className="glass rounded-3xl border border-white/50 p-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                  <div className="w-1 h-5 rounded-full bg-amber-500" />
                  Requirements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {job.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/80 border border-slate-100/60 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-300 group">
                      <div className="mt-0.5 shrink-0 h-5 w-5 rounded-full bg-white flex items-center justify-center ring-1 ring-slate-100 group-hover:ring-indigo-200 transition-all">
                        <div className="h-1.5 w-1.5 rounded-full bg-amber-400 group-hover:bg-indigo-500 transition-colors" />
                      </div>
                      <span className="text-sm text-slate-600 font-medium leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Certificates */}
            {job.certificates && job.certificates.length > 0 && (
              <section className="glass rounded-3xl border border-white/50 p-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                  <div className="w-1 h-5 rounded-full bg-emerald-500" />
                  Preferred Certificates
                </h2>
                <div className="flex flex-wrap gap-3">
                  {job.certificates.map((cert, i) => (
                    <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100/60 hover:border-emerald-200 transition-all">
                      <Award size={14} className="text-emerald-500 shrink-0" />
                      <span className="text-sm text-emerald-700 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Perks & Benefits */}
            {job.perks && (
              <section className="glass rounded-3xl border border-white/50 p-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                  <div className="w-1 h-5 rounded-full bg-violet-500" />
                  Perks & Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-violet-50/50 to-indigo-50/30 border border-violet-100/40 hover:border-violet-200 transition-all duration-300">
                      <div className="h-9 w-9 rounded-xl bg-white flex items-center justify-center ring-1 ring-violet-100 shrink-0">
                        <Sparkles size={16} className="text-violet-500" />
                      </div>
                      <span className="text-sm text-slate-700 font-medium">{perk}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Similar Jobs */}
            {similarJobs.length > 0 && (
              <section className="glass rounded-3xl border border-white/50 p-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                  <div className="w-1 h-5 rounded-full bg-sky-500" />
                  Similar Jobs
                </h2>
                <div className="space-y-3">
                  {similarJobs.map((sj) => {
                    const sjDomain = getCompanyDomain(sj.company);
                    const sjLogo = `https://www.google.com/s2/favicons?domain=${sjDomain}&sz=128`;
                    return (
                      <div 
                        key={sj.id}
                        onClick={() => router.push(`/jobs/${sj.id}`)}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/60 border border-slate-100/60 hover:border-indigo-100 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      >
                        <div className="h-11 w-11 rounded-xl bg-white flex items-center justify-center ring-1 ring-slate-100 shrink-0">
                          <img src={sjLogo} alt={sj.company} className="w-6 h-6 object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors truncate">{sj.title}</p>
                          <p className="text-xs text-slate-400 font-medium mt-0.5">{sj.company} · {sj.location}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs font-semibold text-slate-700">{sj.salary}</p>
                          <p className="text-[10px] text-slate-400 font-medium mt-0.5">{sj.jobType}</p>
                        </div>
                        <ChevronRight size={16} className="text-slate-300 group-hover:text-indigo-500 transition-colors shrink-0" />
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* RIGHT — Sticky Sidebar */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="sticky top-32 space-y-6">

              {/* Quick Stats Card */}
              <div className="glass rounded-3xl border border-white/50 p-6">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-5">Job Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-indigo-50 flex items-center justify-center">
                        <DollarSign size={16} className="text-indigo-500" />
                      </div>
                      <span className="text-xs font-medium text-slate-500">Salary</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{job.salary}</span>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-amber-50 flex items-center justify-center">
                        <Briefcase size={16} className="text-amber-500" />
                      </div>
                      <span className="text-xs font-medium text-slate-500">Job Type</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{job.jobType}</span>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                        <MapPin size={16} className="text-emerald-500" />
                      </div>
                      <span className="text-xs font-medium text-slate-500">Location</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-800 text-right max-w-[120px] truncate">{job.location}</span>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-violet-50 flex items-center justify-center">
                        <GraduationCap size={16} className="text-violet-500" />
                      </div>
                      <span className="text-xs font-medium text-slate-500">Category</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-800 capitalize">{job.category}</span>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-sky-50 flex items-center justify-center">
                        <Calendar size={16} className="text-sky-500" />
                      </div>
                      <span className="text-xs font-medium text-slate-500">Posted</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{getTimeAgo(job.postedDate)}</span>
                  </div>
                </div>
              </div>

              {/* Company Card */}
              <div className="glass rounded-3xl border border-white/50 p-6">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-5">About the Company</h3>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center ring-1 ring-slate-100 shadow-sm">
                    <img
                      src={companyLogo}
                      alt={job.company}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{job.company}</p>
                    <p className="text-[10px] text-slate-400 font-medium capitalize">{job.category} · {job.location}</p>
                  </div>
                </div>
                <a 
                  href={`https://${companyDomain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 rounded-xl text-xs font-semibold transition-all border border-slate-100 hover:border-indigo-100"
                >
                  <Globe size={14} />
                  Visit Company Website
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Apply CTA Card */}
              <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 text-white relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5" />
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={16} className="text-amber-300" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-200">Quick Apply</span>
                  </div>
                  <h3 className="text-base font-semibold mb-1.5">Ready to apply?</h3>
                  <p className="text-xs text-indigo-200 mb-5 leading-relaxed">
                    Join {job.company} and take the next step in your career journey.
                  </p>
                  <button 
                    onClick={() => router.push(`/candidate/456/apply/${generateSlug(job.title)}`)}
                    className="w-full py-3 bg-white text-indigo-600 rounded-xl font-semibold text-sm hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    Apply for this role <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Safety Badge */}
              <div className="glass rounded-3xl border border-white/50 p-5 flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} className="text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800 mb-0.5">Verified Listing</p>
                  <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
                    This job has been verified and is actively accepting applications.
                  </p>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
