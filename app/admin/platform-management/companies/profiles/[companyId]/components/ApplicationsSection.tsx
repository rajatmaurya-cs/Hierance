"use client";

import ApplicationCard from "./ApplicationCard";

type ApplicationStatus =
  | "Applied"
  | "Shortlisted"
  | "Interview"
  | "Hired"
  | "Rejected";

type Application = {
  companyLogo: string;
  companyName: string;
  location: string;
  jobType: string;
  role: string;
  department: string;
  experienceRequired: string;
  salaryRange: string;
  skills: string[];
  joiningDate: string;
  appliedDate: string;
  status: ApplicationStatus;
};

type Props = {
  applications: Application[];
};

export default function ApplicationsSection({ applications }: Props) {
  return (
    <section className="w-full bg-white border border-neutral-200 rounded-2xl p-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-neutral-900">Applications</h2>

        <p className="text-sm text-neutral-500 mt-1">
          Companies where this candidate has applied
        </p>
      </div>

      {/* Scroll Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 w-max">
          {applications.map((app, index) => (
            <ApplicationCard key={index} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
}
