"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Briefcase, 
  Calendar, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Target,
  User,
  Eye,
  MessageCircle
} from "lucide-react";
import { motion } from "framer-motion";

interface JobApplicantCardProps {
  jobId: string;
  applicantId: string;
  profilePicture?: string;
  applicantFullName: string;
  currentJobPosition: string;
  currentOrganization: string;
  location: string;
  experience: number;
  skills: string[];
  salaryRange: string;
  linkedIn?: string;
  github?: string;
  twitter?: string;
  gmail?: string;
  lastUpdate: number;
  status: string;
  matchScore: number;
}

const JobApplicantCard: React.FC<JobApplicantCardProps> = ({
  applicantId,
  jobId,
  profilePicture,
  applicantFullName,
  currentJobPosition,
  currentOrganization,
  location,
  experience,
  skills,
  salaryRange,
  linkedIn,
  github,
  twitter,
  gmail,
  lastUpdate,
  status,
  matchScore,
}) => {
  const statusStyles: any = {
    "New": "bg-blue-50 text-blue-700 border-blue-200/60",
    "Shortlisted": "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    "Interviewed": "bg-purple-50 text-purple-700 border-purple-200/60",
    "Rejected": "bg-rose-50 text-rose-700 border-rose-200/60",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl p-6 border border-slate-100 hover:shadow-xl hover:shadow-indigo-50/40 hover:-translate-y-0.5 transition-all duration-300 relative group overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Profile Photo & Basic Info */}
        <div className="flex items-start gap-6">
          <div className="relative">
            <div className="h-20 w-20 rounded-2xl bg-slate-100 overflow-hidden border-2 border-white shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
              {profilePicture ? (
                <Image src={profilePicture} alt={applicantFullName} fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl font-bold">
                  {applicantFullName.charAt(0)}
                </div>
              )}
            </div>
            <div className={`absolute -bottom-2 -right-2 px-3 py-1 rounded-lg border text-[10px] font-bold uppercase tracking-wider shadow-sm ${statusStyles[status] || statusStyles.New}`}>
              {status}
            </div>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight tracking-tight">
              {applicantFullName}
            </h3>
            <p className="text-[14px] font-semibold text-slate-500">
              {currentJobPosition} <span className="text-slate-300 mx-1">•</span> <span className="text-slate-400 font-medium">{currentOrganization}</span>
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-500">
                <div className="p-1.5 rounded-lg bg-rose-50 text-rose-500 border border-rose-100/60">
                  <MapPin size={14} strokeWidth={2.5} />
                </div>
                {location}
              </div>
              <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-500">
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-500 border border-blue-100/60">
                  <Briefcase size={14} strokeWidth={2.5} />
                </div>
                {experience} Years Exp.
              </div>
              <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-500">
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-500 border border-emerald-100/60">
                  <Zap size={14} strokeWidth={2.5} />
                </div>
                ₹{salaryRange} LPA
              </div>
            </div>
          </div>
        </div>

        {/* Right: Skills & Actions */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.slice(0, 5).map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-xl bg-slate-50 text-slate-500 text-[11px] font-semibold tracking-wide border border-slate-100/80 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100 transition-colors cursor-default">
                {skill}
              </span>
            ))}
            {skills.length > 5 && (
              <span className="px-3 py-1.5 rounded-xl bg-slate-50 text-slate-400 text-[11px] font-semibold border border-slate-100/80">
                +{skills.length - 5} More
              </span>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 mt-auto">
            <div className="flex items-center gap-2.5">
              {github && (
                <Link href={github} className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all border border-slate-100">
                  <Github size={16} strokeWidth={2} />
                </Link>
              )}
              {linkedIn && (
                <Link href={linkedIn} className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-white hover:shadow-sm transition-all border border-slate-100">
                  <Linkedin size={16} strokeWidth={2} />
                </Link>
              )}
              {gmail && (
                <Link href={`mailto:${gmail}`} className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-rose-500 hover:bg-white hover:shadow-sm transition-all border border-slate-100">
                  <Mail size={16} strokeWidth={2} />
                </Link>
              )}
            </div>

            <div className="flex items-center gap-3">
              <Link href={`/dashboard/recruiter/jobs/${jobId}/applicants/${applicantId}`} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 text-[13px] font-bold hover:bg-slate-50 transition-all group/btn">
                <Eye size={15} strokeWidth={2} className="opacity-70" />
                View Profile
                <ArrowUpRight size={14} strokeWidth={2.5} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-[13px] font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all">
                <MessageCircle size={15} strokeWidth={2} />
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default JobApplicantCard;
