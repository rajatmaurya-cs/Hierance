"use client";

import Image from "next/image";
import { redirect, useParams } from "next/navigation";
import { useState } from "react";
import { BsBriefcase } from "react-icons/bs";
import { FiArrowRight, FiBookmark, FiClock, FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

import { mockJobs } from "@/shared/data/mockData";

type JobPreview = (typeof mockJobs)[number];

const JobFeedPage = () => {
  const username = useCandidateUsername();
  const currentJobs = mockJobs.slice(0, 4);
  const earlyAccessJobs = mockJobs.slice(4, 7);

  return (
    <main className="min-w-0 flex-1 space-y-6 pb-10">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <span className="inline-flex rounded-full bg-blue-50 px-3.5 py-1 text-[11px] font-semibold tracking-wide text-blue-600 uppercase font-inter">
          Personalized job matches
        </span>

        <h1 className="mt-4 max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-slate-800 sm:text-3xl font-inter">
          Find roles aligned with your{" "}
          <span className="text-blue-600">skills</span>, salary goals,
          and preferred location.
        </h1>

        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-500 font-inter">
          A focused shortlist of opportunities based on your profile, not a
          noisy feed. Review matches, save strong options, and apply when
          the role feels right.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => redirect(`/candidate/${username}/jobs`)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 font-inter"
            >
              Browse jobs
              <FiArrowRight size={16} />
            </button>
            <button className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 font-inter">
              Update preferences
            </button>
          </div>

          <div className="flex items-center gap-5 border-t border-slate-100 pt-4 sm:border-t-0 sm:pt-0 sm:border-l sm:pl-5">
            <StatCard label="Matches" value="24" />
            <StatCard label="Saved" value="08" />
            <StatCard label="Applied" value="12" />
          </div>
        </div>
      </section>

      <JobSection
        title="Recommended for you"
        subtitle="Balanced matches from your profile, skills, and recent activity"
        actionLabel="View all"
      >
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {currentJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </JobSection>

      <JobSection
        title="Early access roles"
        subtitle="Recently posted openings with lower application volume"
        actionLabel="Explore"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {earlyAccessJobs.map((job) => (
            <EarlyAccessCard key={job.id} job={job} />
          ))}
        </div>
      </JobSection>
    </main>
  );
};

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center font-inter">
    <p className="text-lg font-bold text-slate-800">{value}</p>
    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
      {label}
    </p>
  </div>
);

const JobSection = ({
  title,
  subtitle,
  actionLabel,
  children,
}: {
  title: string;
  subtitle: string;
  actionLabel: string;
  children: React.ReactNode;
}) => (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-slate-950">
          {title}
        </h2>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      </div>
      <button className="w-fit rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
        {actionLabel}
      </button>
    </div>
    {children}
  </section>
);

const JobCard = ({ job }: { job: JobPreview }) => {
  const username = useCandidateUsername();

  const handleApply = () => {
    const slug = generateSlug(job.title);
    window.open(`/candidate/${username}/apply/${slug}`, "_blank");
  };

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <CompanyLogo src={job.companyLogo} alt={job.companyName} />
          <div className="min-w-0">
            <h3 className="line-clamp-2 text-base font-bold leading-6 text-slate-950 font-jakarta">
              {job.title}
            </h3>
            <p className="mt-1 truncate text-sm font-medium text-slate-500">
              {job.companyName}
            </p>
          </div>
        </div>

        <button className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-800">
          <FiBookmark size={17} />
        </button>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-medium text-slate-600 font-inter">
        <Pill icon={<IoLocationOutline size={14} />} label={job.location} />
        <Pill icon={<BsBriefcase size={13} />} label={job.jobType} />
        <Pill label={job.salary} />
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <FiClock size={14} />
          {job.postedAt}
        </span>
        <button
          onClick={handleApply}
          className="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800"
        >
          Apply now
        </button>
      </div>
    </article>
  );
};

const EarlyAccessCard = ({ job }: { job: JobPreview }) => {
  const username = useCandidateUsername();

  const handleViewRole = () => {
    const slug = generateSlug(job.title);
    window.open(`/candidate/${username}/apply/${slug}`, "_blank");
  };

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-white hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-4">
        <CompanyLogo src={job.companyLogo} alt={job.companyName} compact />
        <span className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-600">
          New
        </span>
      </div>

      <h3 className="line-clamp-2 text-sm font-bold leading-5 text-slate-950">
        {job.title}
      </h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {job.companyName}
      </p>

      <div className="mt-4 space-y-2 text-xs font-semibold text-slate-600">
        <p className="flex items-center gap-2">
          <BsBriefcase size={14} className="text-slate-400" />
          3-5 yrs
        </p>
        <p className="text-slate-800">{job.salary}</p>
      </div>

      <button
        onClick={handleViewRole}
        className="mt-auto rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs font-bold text-slate-700 transition hover:bg-slate-100"
      >
        View role
      </button>
    </article>
  );
};

const CompanyLogo = ({
  src,
  alt,
  compact = false,
}: {
  src: string;
  alt: string;
  compact?: boolean;
}) => {
  const [error, setError] = useState(false);

  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-2 ${
        compact ? "h-11 w-11" : "h-14 w-14"
      }`}
    >
      {!error ? (
        <Image
          src={src}
          alt={alt}
          width={compact ? 32 : 40}
          height={compact ? 32 : 40}
          className="object-contain"
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-slate-100 text-base font-bold text-slate-500">
          {alt.charAt(0)}
        </div>
      )}
    </div>
  );
};

const Pill = ({ icon, label }: { icon?: React.ReactNode; label: string }) => (
  <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5">
    {icon}
    {label}
  </span>
);

const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

const useCandidateUsername = () => {
  const params = useParams();
  const username = params.username as string;

  return username === "undefined" ? "rajat" : username;
};

export default JobFeedPage;
