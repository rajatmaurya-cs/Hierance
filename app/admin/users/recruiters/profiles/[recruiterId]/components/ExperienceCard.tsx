"use client";

import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";

type Experience = {
  companyLogo: string;
  companyName: string;
  role: string;
  joinAs: string;
  location: string;
  workType: string;
  startDate: string;
  endDate: string;
  skills: string[];
  description: string[];
};

export default function ExperienceCard({
  companyLogo,
  companyName,
  role,
  joinAs,
  location,
  workType,
  startDate,
  endDate,
  skills,
  description,
}: Experience) {
  return (
    <div className="min-w-[380px] bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex gap-4 items-start">
        {/* <Image
          src={companyLogo}
          alt={companyName}
          width={50}
          height={50}
          className="rounded-lg border"
        /> */}

        <div className="flex-1">
          <h3 className="font-semibold text-neutral-900">{role}</h3>

          <p className="text-sm text-neutral-600">{companyName}</p>

          <div className="flex items-center gap-2 text-sm text-neutral-500 mt-1">
            <HiOutlineLocationMarker />
            {location}
            <span>•</span>
            {workType}
          </div>
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex items-center gap-2 text-sm text-neutral-500 mt-3">
        <FaRegCalendarAlt />
        {startDate} — {endDate}
      </div>

      {/* Join Type */}
      <div className="mt-3">
        <span className="text-xs px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
          Joined as {joinAs}
        </span>
      </div>

      {/* Description */}
      <ul className="mt-4 text-sm text-neutral-600 list-disc pl-5 space-y-1">
        {description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

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
    </div>
  );
}
