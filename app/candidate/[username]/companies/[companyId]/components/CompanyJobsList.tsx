"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Briefcase, MapPin, DollarSign } from "lucide-react";

interface CompanyJobsListProps {
  companySlug: string;
  jobs: {
    _id: string;
    title: string;
    experience: string;
    salaryMin: number;
    salaryMax: number;
    location: string;
  }[];
}

export default function CompanyJobsList({
  companySlug,
  jobs,
}: CompanyJobsListProps) {
  const params = useParams();
  const username = params.username as string;

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleApply = (title: string) => {
    const slug = generateSlug(title);
    window.open(`/candidate/${username}/apply/${slug}`, "_blank");
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-700 font-primary">Current Openings</h2>
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full font-primary">
          {jobs.length} positions
        </span>
      </div>

      <div className="space-y-2">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job._id}
              className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition group"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] font-semibold text-slate-700 truncate group-hover:text-blue-600 transition font-primary">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-slate-400 font-primary">
                  <span className="flex items-center gap-1">
                    <Briefcase size={11} />
                    {job.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign size={11} />
                    {(job.salaryMin / 100000).toFixed(0)}-{(job.salaryMax / 100000).toFixed(0)} LPA
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleApply(job.title)}
                className="flex-shrink-0 px-3.5 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition font-primary"
              >
                Apply
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-sm text-slate-400 font-primary">
            No current openings at the moment.
          </div>
        )}
      </div>
    </div>
  );
}