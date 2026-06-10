"use client";

import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaBriefcase } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";

type ProfileHeaderProps = {
  image: string;
  name: string;
  location: string;
  designation: string;
  company: string;
  skills: string[];
  bio: string;
  experienceTag: "Fresher" | "Experienced";
  profileTag?: "New Profile";
  salary: string;
  jobType: string;
  joiningType: string;
  verified?: boolean;
};

export default function ProfileHeader({
  image,
  name,
  location,
  designation,
  company,
  skills,
  bio,
  experienceTag,
  profileTag,
  salary,
  jobType,
  joiningType,
  verified,
}: ProfileHeaderProps) {
  return (
    <div className="w-full bg-white border border-neutral-200 rounded-2xl p-8">
      {/* Top Section */}
      <div className="flex gap-6">
        {/* Profile Image */}
        <div className="overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={name}
            width={120}
            height={120}
            className="object-cover transition-all duration-300 hover:scale-105  rounded-full w-30 h-30 p-1"
          />
        </div>

        {/* Main Info */}
        <div className="flex-1">
          {/* Name */}
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold text-neutral-900">{name}</h1>

            {verified && <MdVerified className="text-blue-600 text-xl" />}
          </div>

          {/* designation */}
          <p className="flex items-center gap-2 text-neutral-600 mt-1">
            <FaBriefcase className="text-neutral-400" />
            {designation}
            <span className="text-neutral-400">•</span>
            {company}
          </p>

          {/* location */}
          <p className="flex items-center gap-2 text-neutral-500 mt-1">
            <HiOutlineLocationMarker />
            {location}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium">
              {experienceTag}
            </span>

            {profileTag && (
              <span className="px-3 py-1 text-xs rounded-full bg-green-50 text-green-600 font-medium">
                {profileTag}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-neutral-600 text-sm mt-5 max-w-3xl">{bio}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-md bg-blue-50 text-blue-700 border border-blue-100"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Info Row */}
      <div className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-neutral-300/50">
        <InfoItem
          label="Expected Salary"
          value={salary}
          icon={<BsCurrencyRupee />}
        />

        <InfoItem label="Job Preference" value={jobType} />

        <InfoItem label="Joining Availability" value={joiningType} />
      </div>
    </div>
  );
}

function InfoItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs text-neutral-500 mb-1">{label}</p>
      <p className="flex items-center gap-1 font-medium text-neutral-800">
        {icon}
        {value}
      </p>
    </div>
  );
}
