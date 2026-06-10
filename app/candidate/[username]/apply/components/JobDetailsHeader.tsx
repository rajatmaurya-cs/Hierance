"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { BsBriefcase } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

import { mockJobs } from "@/shared/data/mockData";

const JobDetailsHeader = () => {
  const router = useRouter();
  const params = useParams();
  const username = params.username as string;
  const slug = params.slug as string;
  const job = getJobFromSlug(slug);

  const safeUsername = username === "undefined" ? "rajat" : username;

  const handleApply = () => {
    router.push(`/candidate/${safeUsername}/apply/${slug}/fillform`);
  };

  return (
    <section className="bg-transparent">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-3xl bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-slate-100/50">
          <img
            src={job.companyLogo}
            alt={job.companyName}
            className="h-12 w-12 object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-4 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              {job.companyName}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-600/80 ring-1 ring-blue-100/30">
              <span className="h-1 w-1 rounded-full bg-blue-500 animate-pulse"></span>
              Active Hiring
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {job.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-5 text-[14px] font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <IoLocationOutline size={18} className="text-slate-300" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <BsBriefcase size={17} className="text-slate-300" />
              <span>{job.jobType}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock size={17} className="text-slate-300" />
              <span>{job.postedAt}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <SummaryCard label="Compensation" value={job.salary} />
        <SummaryCard label="Core Expertise" value={job.skills.slice(0, 2).join(", ")} />
        <SummaryCard label="Sector" value="Technology" />
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <button
          onClick={handleApply}
          className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-200 active:scale-[0.98]"
        >
          Apply Now
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-[15px] font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:border-slate-300">
          <FaRegBookmark size={15} className="text-slate-400" />
          Save Position
        </button>
      </div>
    </section>
  );
};

const SummaryCard = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_15px_rgba(0,0,0,0.02)] transition-all hover:shadow-md">
    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
      {label}
    </p>
    <p className="mt-2 text-[16px] font-semibold text-slate-800">{value}</p>
  </div>
);

export default JobDetailsHeader;

const MetaItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-1.5">
    {icon}
    {label}
  </span>
);

const SummaryItem = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all hover:bg-slate-50">
    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
      {label}
    </p>
    <p className="mt-1.5 text-[15px] font-bold text-slate-900">{value}</p>
  </div>
);

const getJobFromSlug = (slug: string) => {
  const job = mockJobs.find((item) => generateSlug(item.title) === slug);
  return job || mockJobs[0];
};

const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
