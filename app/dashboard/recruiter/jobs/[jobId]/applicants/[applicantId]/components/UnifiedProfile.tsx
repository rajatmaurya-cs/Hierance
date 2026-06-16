"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Twitter,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ApplicantProfile {
  applicantId: string;
  profilePicture?: string;
  applicantFullName: string;
  currentJobPosition: string;
  currentOrganization: string;
  location: string;
  experience: number;
  skills: string[];
  salaryRange: string;
  linkedIn?: string;
  github?: string;
  twitter?: string;
  gmail?: string;
  status: string;
  matchScore: number;
  lastUpdate: number;
}

interface Props {
  applicant: ApplicantProfile;
  jobId: string;
}

const statusStyles: Record<string, string> = {
  New: "bg-blue-50 text-blue-700 border-blue-200",
  Shortlisted: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Interviewed: "bg-violet-50 text-violet-700 border-violet-200",
  Rejected: "bg-rose-50 text-rose-700 border-rose-200",
};

const pipelineSteps = ["Applied", "Screening", "Interview", "Offer"];

export default function UnifiedProfile({ applicant }: Props) {
  const router = useRouter();
  const currentStep = applicant.status === "New" ? 1 : applicant.status === "Interviewed" ? 2 : applicant.status === "Shortlisted" ? 2 : 0;

  const summaryStats = [
    { label: "Experience", value: `${applicant.experience} yrs`, icon: BriefcaseBusiness, tone: "text-sky-600 bg-sky-50 border-sky-100" },
    { label: "Expected CTC", value: `INR ${applicant.salaryRange} LPA`, icon: WalletCards, tone: "text-emerald-600 bg-emerald-50 border-emerald-100" },
    { label: "Updated", value: `${applicant.lastUpdate}d ago`, icon: Clock3, tone: "text-amber-600 bg-amber-50 border-amber-100" },
  ];

  const contactLinks = [
    { label: "Email", value: applicant.gmail || "Not provided", href: applicant.gmail ? `mailto:${applicant.gmail}` : "#", icon: Mail },
    { label: "LinkedIn", value: "View profile", href: applicant.linkedIn || "#", icon: Linkedin },
    { label: "GitHub", value: "View work", href: applicant.github || "#", icon: Github },
    { label: "Twitter", value: "View updates", href: applicant.twitter || "#", icon: Twitter },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-12 font-primary">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() => router.back()}
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600"
          >
            <ArrowLeft size={17} strokeWidth={2.4} />
            Back to applicants
          </button>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 shadow-sm transition hover:bg-slate-100">
              <Download size={17} strokeWidth={2.4} />
              Resume
            </button>
            <Link
              href={applicant.gmail ? `mailto:${applicant.gmail}` : "#"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
            >
              <MessageCircle size={17} strokeWidth={2.4} />
              Contact candidate
            </Link>
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="border-b border-slate-100 bg-white px-5 py-6 sm:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                  {applicant.profilePicture ? (
                    <Image src={applicant.profilePicture} alt={applicant.applicantFullName} fill sizes="96px" className="object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-indigo-600 text-3xl font-black text-white">
                      {applicant.applicantFullName.charAt(0)}
                    </div>
                  )}
                </div>

                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className={`rounded-full border px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] ${statusStyles[applicant.status] || statusStyles.New}`}>
                      {applicant.status}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
                      <Sparkles size={13} />
                      {applicant.matchScore}% match
                    </span>
                  </div>
                  <h1 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{applicant.applicantFullName}</h1>
                  <p className="mt-2 text-sm font-semibold text-slate-500 sm:text-base">
                    {applicant.currentJobPosition} at <span className="text-slate-800">{applicant.currentOrganization}</span>
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={16} className="text-rose-500" />
                      {applicant.location}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Building2 size={16} className="text-indigo-500" />
                      {applicant.currentOrganization}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:w-[420px]">
                {summaryStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl border ${stat.tone}`}>
                      <stat.icon size={17} strokeWidth={2.4} />
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">{stat.label}</p>
                    <p className="mt-1 text-lg font-black text-slate-950">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="space-y-6 p-5 sm:p-8">
              <section className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-600">Recruiter summary</p>
                    <h2 className="mt-1 text-xl font-black tracking-tight text-slate-950">Profile snapshot</h2>
                  </div>
                  <ShieldCheck className="text-emerald-500" size={24} />
                </div>
                <p className="text-sm font-medium leading-7 text-slate-600">
                  {applicant.applicantFullName} is a {applicant.currentJobPosition.toLowerCase()} with {applicant.experience} years of experience,
                  currently working at {applicant.currentOrganization}. The profile shows strong alignment for this role through{" "}
                  {applicant.skills.slice(0, 3).join(", ")} and a current match score of {applicant.matchScore}%.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-100 bg-violet-50 text-violet-600">
                    <Star size={19} strokeWidth={2.4} />
                  </div>
                  <div>
                    <h2 className="text-lg font-black tracking-tight text-slate-950">Core skills</h2>
                    <p className="text-sm font-semibold text-slate-400">Skills listed by the applicant</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {applicant.skills.map((skill) => (
                    <span key={skill} className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-bold text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600">
                    <BriefcaseBusiness size={19} strokeWidth={2.4} />
                  </div>
                  <div>
                    <h2 className="text-lg font-black tracking-tight text-slate-950">Experience</h2>
                    <p className="text-sm font-semibold text-slate-400">Current and previous role summary</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      title: applicant.currentJobPosition,
                      company: applicant.currentOrganization,
                      period: "Current role",
                      text: `Owns product delivery across ${applicant.skills.slice(0, 2).join(" and ")} workstreams with a focus on production-ready execution.`,
                    },
                    {
                      title: "Earlier experience",
                      company: "Previous organizations",
                      period: `${Math.max(applicant.experience - 2, 1)}+ years`,
                      text: "Built a foundation across team collaboration, implementation quality, and release delivery in fast-moving engineering environments.",
                    },
                  ].map((role) => (
                    <div key={role.title} className="relative border-l-2 border-slate-100 pl-5">
                      <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-indigo-600 shadow" />
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-black text-slate-950">{role.title}</h3>
                          <p className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
                            <Building2 size={15} />
                            {role.company}
                          </p>
                        </div>
                        <span className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-500">
                          <CalendarDays size={14} />
                          {role.period}
                        </span>
                      </div>
                      <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{role.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="border-t border-slate-100 bg-slate-50/70 p-5 sm:p-8 lg:border-l lg:border-t-0">
              <div className="space-y-6 lg:sticky lg:top-6">
                <section className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h2 className="mb-4 text-lg font-black tracking-tight text-slate-950">Hiring pipeline</h2>
                  <div className="space-y-3">
                    {pipelineSteps.map((step, index) => {
                      const isDone = index <= currentStep && applicant.status !== "Rejected";
                      return (
                        <div key={step} className="flex items-center gap-3">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-black ${isDone ? "border-emerald-200 bg-emerald-50 text-emerald-600" : "border-slate-200 bg-slate-50 text-slate-400"}`}>
                            {isDone ? <CheckCircle2 size={16} /> : index + 1}
                          </div>
                          <span className={`text-sm font-bold ${isDone ? "text-slate-900" : "text-slate-400"}`}>{step}</span>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h2 className="mb-4 text-lg font-black tracking-tight text-slate-950">Contact details</h2>
                  <div className="space-y-3">
                    {contactLinks.map((item) => (
                      <Link key={item.label} href={item.href} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition hover:border-indigo-100 hover:bg-indigo-50/60">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm">
                          <item.icon size={17} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{item.label}</span>
                          <span className="block truncate text-sm font-bold text-slate-700">{item.value}</span>
                        </span>
                      </Link>
                    ))}
                    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm">
                        <Phone size={17} />
                      </span>
                      <span>
                        <span className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Phone</span>
                        <span className="block text-sm font-bold text-slate-700">Not provided</span>
                      </span>
                    </div>
                  </div>
                </section>

              </div>
            </aside>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
