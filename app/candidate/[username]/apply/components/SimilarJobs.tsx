"use client";

import { useParams } from "next/navigation";
import { BsBriefcase } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

import { mockJobs } from "@/shared/data/mockData";

const SimilarJobs = () => {
  const params = useParams();
  const slug = params.slug as string;
  const currentJob = getJobFromSlug(slug);
  const jobs = mockJobs
    .filter((job) => job.id !== currentJob.id)
    .slice(0, 4);

  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Application summary
        </p>
        <h2 className="mt-2 text-lg font-bold leading-6 text-slate-950">
          {currentJob.title}
        </h2>
        <p className="mt-1 text-sm font-semibold text-slate-500">
          {currentJob.companyName}
        </p>

        <div className="mt-5 space-y-3">
          <SummaryRow label="Salary" value={currentJob.salary} />
          <SummaryRow label="Type" value={currentJob.jobType} />
          <SummaryRow label="Location" value={currentJob.location} />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="text-lg font-bold tracking-tight text-slate-950">
            Similar roles
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            More openings that may fit your profile
          </p>
        </div>

        <div className="space-y-3">
          {jobs.map((job) => (
            <JobItem key={job.id} job={job} />
          ))}
        </div>

        <button className="mt-5 w-full rounded-xl border border-slate-300 bg-white py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
          View more roles
        </button>
      </div>
    </aside>
  );
};

export default SimilarJobs;

type SimilarJob = (typeof mockJobs)[number];

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-start justify-between gap-4 border-t border-slate-100 pt-3 first:border-t-0 first:pt-0">
    <span className="text-sm text-slate-500">{label}</span>
    <span className="text-right text-sm font-semibold text-slate-900">
      {value}
    </span>
  </div>
);

const JobItem = ({ job }: { job: SimilarJob }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-slate-50">
    <p className="line-clamp-2 text-sm font-bold leading-5 text-slate-950">
      {job.title}
    </p>
    <p className="mt-1 text-xs font-semibold text-slate-500">
      {job.companyName}
    </p>

    <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-500">
      <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1">
        <IoLocationOutline />
        {job.location}
      </span>
      <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1">
        <BsBriefcase />
        {job.jobType}
      </span>
    </div>
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
