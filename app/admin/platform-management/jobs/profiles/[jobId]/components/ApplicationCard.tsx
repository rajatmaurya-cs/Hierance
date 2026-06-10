"use client";

import Image from "next/image";
import { HiOutlineLocationMarker, HiOutlineBriefcase } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";

type ApplicationStatus =
  | "Applied"
  | "Shortlisted"
  | "Interview"
  | "Hired"
  | "Rejected";

type ApplicationCardProps = {
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

export default function ApplicationCard({
  companyLogo,
  companyName,
  location,
  jobType,
  role,
  department,
  experienceRequired,
  salaryRange,
  skills,
  joiningDate,
  appliedDate,
  status,
}: ApplicationCardProps) {
  return (
    <div className="min-w-[420px] bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-all">
      {/* Header */}
      <div className="flex gap-4 items-start">
        <Image
          src={companyLogo}
          alt={companyName}
          width={48}
          height={48}
          className="rounded-lg border"
        />

        <div className="flex-1">
          <h3 className="font-semibold text-neutral-900">{companyName}</h3>

          <p className="text-sm text-neutral-600">
            {role} • {department}
          </p>

          <div className="flex items-center gap-2 text-sm text-neutral-500 mt-1">
            <HiOutlineLocationMarker />
            {location}
            <span>•</span>
            {jobType}
          </div>
        </div>

        <StatusBadge status={status} />
      </div>

      {/* Meta Row */}
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <div className="flex items-center gap-2 text-neutral-600">
          <HiOutlineBriefcase />
          {experienceRequired}
        </div>

        <div className="flex items-center gap-2 text-neutral-600">
          <BsCurrencyRupee />
          {salaryRange}
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="text-xs px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-neutral-500">
        <div className="flex items-center gap-2">
          <FaRegCalendarAlt />
          Applied: {appliedDate}
        </div>

        <div className="flex items-center gap-2">
          <FaRegCalendarAlt />
          Joining: {joiningDate}
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: ApplicationStatus }) {
  const styles = {
    Applied: "bg-gray-100 text-gray-600",
    Shortlisted: "bg-blue-50 text-blue-600",
    Interview: "bg-purple-50 text-purple-600",
    Hired: "bg-green-50 text-green-600",
    Rejected: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`text-xs px-3 py-1 rounded-full font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
