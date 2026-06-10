"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HiOutlineDotsVertical, HiOutlineLocationMarker } from "react-icons/hi";
import { FaBriefcase } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FiExternalLink, FiDownload } from "react-icons/fi";
import { BsShieldLock } from "react-icons/bs";
import { AiOutlineStop } from "react-icons/ai";
import { BiBlock } from "react-icons/bi";

type JobSeeker = {
  id: string;
  name: string;
  image: string;
  skills: string[];
  company: string;
  designation: string;
  location: string;
  experience: number;
  verified?: boolean;
};

type Props = {
  user: JobSeeker;
};

export default function JobSeekerOverviewCard({ user }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="relative w-full bg-white border border-neutral-200 rounded-xl px-6 py-5 hover:shadow-lg transition-all duration-300 flex items-center gap-6"
    >
      {/* Avatar */}
      <Image
        src={user.image}
        alt={user.name}
        width={55}
        height={55}
        className="rounded-full object-cover"
      />

      {/* Main Info */}
      <div className="flex flex-col flex-1">
        {/* Name */}
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-neutral-900 text-lg">
            {user.name}
          </h3>

          {user.verified && <MdVerified className="text-blue-500 text-lg" />}
        </div>

        {/* designation */}
        <p className="flex items-center gap-2 text-sm text-neutral-600 mt-1">
          <FaBriefcase className="text-neutral-400" />
          {user.designation}
          <span className="text-neutral-400">•</span>
          {user.company}
        </p>

        {/* location */}
        <p className="flex items-center gap-2 text-sm text-neutral-500 mt-1">
          <HiOutlineLocationMarker />
          {user.location}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-3">
          {user.skills.slice(0, 5).map((skill, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs bg-neutral-100 text-neutral-700 rounded-md border border-neutral-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="text-sm text-neutral-500 min-w-[120px]">
        {user.experience}+ yrs exp
      </div>

      {/* CTA */}
      <Link
        href={`/admin/users/job-seekers/profiles/${user.id}`}
        target="_blank"
        className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-neutral-900 text-white hover:bg-black transition"
      >
        View Profile
        <FiExternalLink size={14} />
      </Link>

      {/* Dropdown */}
      <div ref={menuRef} className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-lg hover:bg-neutral-100"
        >
          <HiOutlineDotsVertical size={18} />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-3 w-52 bg-white border border-neutral-200 rounded-xl shadow-xl overflow-hidden z-50"
            >
              <DropdownItem icon={<FiExternalLink />} label="View Profile" />
              <DropdownItem icon={<BsShieldLock />} label="Verify Profile" />
              <DropdownItem icon={<FiDownload />} label="Download Resume" />

              <div className="border-t my-1" />

              <DropdownItem
                icon={<AiOutlineStop />}
                label="Suspend User"
                danger
              />
              <DropdownItem icon={<BiBlock />} label="Block User" danger />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function DropdownItem({
  icon,
  label,
  danger,
}: {
  icon: React.ReactNode;
  label: string;
  danger?: boolean;
}) {
  return (
    <button
      className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm transition 
      ${
        danger
          ? "text-red-600 hover:bg-red-50"
          : "text-neutral-700 hover:bg-neutral-100"
      }`}
    >
      <span className="text-lg">{icon}</span>
      {label}
    </button>
  );
}
