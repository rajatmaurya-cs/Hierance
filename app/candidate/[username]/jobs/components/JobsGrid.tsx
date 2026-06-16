"use client";

import JobCard from "./JobCard";

interface Job {
  id: string;
  title: string;
  companyName: string;
  companyLogo: string;
  location: string;
  salary: string;
  tags?: string[];
  postedAt: string;
  jobType?: string;
}

interface JobsGridProps {
  jobs: Job[];
}

const JobsGrid = ({ jobs }: JobsGridProps) => {
  if (!jobs.length) {
    return (
      <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-200">
        <div className="text-3xl mb-3">🔍</div>
        <h3 className="text-base font-semibold text-slate-700 font-primary">No jobs found</h3>
        <p className="text-sm text-slate-400 mt-1 font-primary">Try adjusting your filters to find more opportunities.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobsGrid;
