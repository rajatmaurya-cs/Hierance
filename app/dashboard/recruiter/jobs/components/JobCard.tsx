"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  Users, 
  ChevronDown, 
  MoreVertical, 
  CheckCircle2, 
  XCircle, 
  Share2, 
  Trash2,
  Calendar,
  ArrowRight,
  Eye
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type JobCardProps = {
  jobId: string | number;
  logo?: string;
  companyName: string;
  jobTitle: string;
  exp: string;
  location: string;
  status: string;
  jobType: string;
  applications: number;
  shortlisted: number;
  postedOn: string;
  lastActivity: string;
  onStatusChange?: (id: string | number, newStatus: string) => void;
  onDelete?: (id: string | number) => void;
};

const JobCard = ({
  jobId,
  logo,
  companyName,
  jobTitle,
  exp,
  location,
  status,
  jobType,
  applications,
  shortlisted,
  postedOn,
  lastActivity,
  onStatusChange,
  onDelete,
}: JobCardProps) => {
  const [openManage, setOpenManage] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);

  const handleStatusUpdate = (newStatus: string) => {
    if (onStatusChange) {
      onStatusChange(jobId, newStatus);
    }
    setOpenStatus(false);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(jobId);
    }
    setOpenManage(false);
  };

  return (
    <article className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:shadow-indigo-50/40 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
      {/* Status Bar */}
      <div className={`absolute left-0 top-0 h-full w-1 ${status === 'Open' ? 'bg-gradient-to-b from-emerald-400 to-emerald-600' : status === 'Draft' ? 'bg-gradient-to-b from-amber-400 to-amber-600' : 'bg-gradient-to-b from-slate-300 to-slate-400'}`} />

      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-1 border border-slate-200/60 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
            {logo ? (
              <img src={logo} alt={companyName} className="w-full h-full object-contain" />
            ) : (
              <Briefcase className="text-slate-400" size={22} strokeWidth={1.5} />
            )}
          </div>
          <div>
            <Link href={`/dashboard/recruiter/jobs/${jobId}`}>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug tracking-tight mb-0.5">
                {jobTitle}
              </h3>
            </Link>
            <p className="text-[13px] font-medium text-slate-400 tracking-wide">{companyName}</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="relative">
            <button
              onClick={() => setOpenStatus(!openStatus)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12px] font-semibold transition-all border ${
                status === 'Open' 
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200/60 hover:bg-emerald-100' 
                : status === 'Draft'
                ? 'bg-amber-50 text-amber-700 border-amber-200/60'
                : 'bg-slate-50 text-slate-500 border-slate-200/60'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${status === 'Open' ? 'bg-emerald-500 animate-pulse' : status === 'Draft' ? 'bg-amber-500' : 'bg-slate-400'}`} />
              {status}
              <ChevronDown size={13} strokeWidth={2.5} className={`transition-transform duration-300 ${openStatus ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {openStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 overflow-hidden"
                >
                  <StatusItem 
                    icon={<CheckCircle2 size={15} strokeWidth={2}/>} 
                    label="Set as Open" 
                    color="text-emerald-600 hover:bg-emerald-50" 
                    onClick={() => handleStatusUpdate("Open")}
                  />
                  <StatusItem 
                    icon={<XCircle size={15} strokeWidth={2}/>} 
                    label="Close Job" 
                    color="text-rose-600 hover:bg-rose-50" 
                    onClick={() => handleStatusUpdate("Closed")}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button
              onClick={() => setOpenManage(!openManage)}
              className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-slate-100"
            >
              <MoreVertical size={16} strokeWidth={2} />
            </button>

            <AnimatePresence>
              {openManage && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 overflow-hidden"
                >
                  <StatusItem icon={<Share2 size={15} strokeWidth={2}/>} label="Share Job" color="text-slate-600 hover:bg-slate-50" />
                  <StatusItem 
                    icon={<Trash2 size={15} strokeWidth={2}/>} 
                    label="Delete Job" 
                    color="text-rose-600 hover:bg-rose-50" 
                    onClick={handleDelete}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center mb-6">
        <MetaItem icon={<MapPin size={15} strokeWidth={2}/>} label="Location" value={location} iconColor="text-rose-500" bgColor="bg-rose-50" borderColor="border-rose-100/60" />
        <MetaItem icon={<Briefcase size={15} strokeWidth={2}/>} label="Experience" value={`${exp} Years`} iconColor="text-blue-500" bgColor="bg-blue-50" borderColor="border-blue-100/60" />
        <MetaItem icon={<Clock size={15} strokeWidth={2}/>} label="Job Type" value={jobType} iconColor="text-amber-500" bgColor="bg-amber-50" borderColor="border-amber-100/60" />
        
        <div className="flex items-center gap-3.5 bg-indigo-50/60 p-3 rounded-xl border border-indigo-100/50">
          <div className="p-2 rounded-lg bg-white text-indigo-600 shadow-sm border border-indigo-100/50">
            <Users size={16} strokeWidth={2} />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-indigo-500 uppercase tracking-[0.1em] mb-0.5">Applications</p>
            <p className="text-[13px] font-bold text-indigo-700">
              {applications} <span className="font-medium text-slate-400 mx-0.5">•</span> <span className="text-emerald-600 font-semibold">{shortlisted} shortlisted</span>
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="flex flex-wrap items-center gap-5 pt-5 border-t border-slate-100/80">
        <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
          <Calendar size={13} strokeWidth={2} className="text-slate-300" />
          Posted {postedOn}
        </div>
        <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
          <Clock size={13} strokeWidth={2} className="text-slate-300" />
          Last activity {lastActivity}
        </div>

        <Link 
          href={`/dashboard/recruiter/jobs/${jobId}`}
          className="ml-auto flex items-center gap-1.5 text-[13px] font-semibold text-indigo-600 hover:text-indigo-700 group/link transition-colors"
        >
          <Eye size={15} strokeWidth={2} className="opacity-70" />
          View Details & Applicants
          <ArrowRight size={14} strokeWidth={2.5} className="group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

function StatusItem({ icon, label, color, onClick }: { icon: any; label: string; color: string; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${color}`}
    >
      {icon}
      {label}
    </button>
  );
}

function MetaItem({ icon, label, value, iconColor, bgColor, borderColor }: { icon: any; label: string; value: string; iconColor: string; bgColor: string; borderColor: string }) {
  return (
    <div className="flex items-center gap-3.5">
      <div className={`p-2 rounded-lg ${bgColor} ${iconColor} border ${borderColor}`}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.1em] mb-0.5">{label}</p>
        <p className="text-[13px] font-semibold text-slate-700">{value}</p>
      </div>
    </div>
  );
}

export default JobCard;
