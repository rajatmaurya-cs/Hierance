"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Calendar, 
  Briefcase, 
  Users, 
  Star,
  CheckCircle2,
  ShieldOff,
  Clock
} from "lucide-react";

export default function RecruiterProfilePage() {
  const params = useParams();
  const router = useRouter();
  const recruiterId = params.recruiterId as string;

  // Mock data for the recruiter
  const recruiter = {
    id: recruiterId,
    name: "Ananya Kapoor",
    email: "ananya.k@infosys.com",
    phone: "+91 98765 11111",
    location: "Bangalore, India",
    status: "ACTIVE",
    joinedAt: "10 Jan 2023",
    companyName: "Infosys",
    companyType: "MNC",
    designation: "HR Manager",
    stats: {
      totalHired: 142,
      activeJobs: 8,
      totalApplications: 4520,
      responseTime: "2 Days"
    }
  };

  const recentJobs = [
    { id: "JOB102", title: "Senior Frontend Developer", type: "Full-time", status: "Active", applicants: 120, posted: "2 days ago" },
    { id: "JOB103", title: "Product Designer", type: "Contract", status: "Closed", applicants: 45, posted: "1 week ago" },
    { id: "JOB104", title: "Backend Engineer (Go)", type: "Full-time", status: "Active", applicants: 210, posted: "3 weeks ago" },
  ];

  return (
    <div className="w-full flex flex-col gap-6 font-sans">
      {/* ══════════ TOP BAR ══════════ */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => router.back()}
          className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Recruiter Profile</h1>
          <p className="text-slate-500 text-sm">Detailed overview of recruiter activity and company information.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ══════════ LEFT COLUMN: PROFILE CARD ══════════ */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl font-black mb-4 shadow-inner">
              {recruiter.name.split(" ").map(n => n[0]).join("")}
            </div>
            
            <h2 className="text-xl font-bold text-slate-900">{recruiter.name}</h2>
            <p className="text-sm font-semibold text-blue-600 mb-4">{recruiter.designation}</p>
            
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">{recruiter.status}</span>
            </div>

            <div className="w-full flex flex-col gap-3 text-left">
              <div className="flex items-center gap-3 text-sm text-slate-600 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <Mail size={16} className="text-slate-400" />
                <span className="font-medium">{recruiter.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <Phone size={16} className="text-slate-400" />
                <span className="font-medium">{recruiter.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <MapPin size={16} className="text-slate-400" />
                <span className="font-medium">{recruiter.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <Calendar size={16} className="text-slate-400" />
                <span className="font-medium">Joined {recruiter.joinedAt}</span>
              </div>
            </div>

            <div className="w-full mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
              <button className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-sm">
                Message Recruiter
              </button>
              <button className="w-full py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-100 text-rose-600 font-semibold text-sm transition-all flex items-center justify-center gap-2">
                <ShieldOff size={16} />
                Suspend Account
              </button>
            </div>
          </div>
        </div>

        {/* ══════════ RIGHT COLUMN: STATS & DATA ══════════ */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Company Details */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">{recruiter.companyName}</h3>
                <p className="text-sm text-slate-500 font-medium">{recruiter.companyType} Enterprise</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
              View Company Profile
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center mb-1 relative z-10">
                <Users size={16} />
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide relative z-10">Total Hired</p>
              <h4 className="text-2xl font-black text-slate-800 relative z-10">{recruiter.stats.totalHired}</h4>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center mb-1 relative z-10">
                <Briefcase size={16} />
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide relative z-10">Active Jobs</p>
              <h4 className="text-2xl font-black text-slate-800 relative z-10">{recruiter.stats.activeJobs}</h4>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center mb-1 relative z-10">
                <Star size={16} />
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide relative z-10">Applications</p>
              <h4 className="text-2xl font-black text-slate-800 relative z-10">{recruiter.stats.totalApplications.toLocaleString()}</h4>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center mb-1 relative z-10">
                <Clock size={16} />
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide relative z-10">Avg Response</p>
              <h4 className="text-2xl font-black text-slate-800 relative z-10">{recruiter.stats.responseTime}</h4>
            </div>
          </div>

          {/* Recent Jobs */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800">Recent Job Postings</h3>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">View All</button>
            </div>
            
            <div className="flex flex-col divide-y divide-slate-100">
              {recentJobs.map((job) => (
                <div key={job.id} className="p-4 px-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{job.title}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs font-medium text-slate-500">{job.id}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="text-xs font-medium text-slate-500">{job.type}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="text-xs font-medium text-slate-500">Posted {job.posted}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm font-bold text-slate-700">{job.applicants}</p>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Applicants</p>
                    </div>
                    <div className={`px-2.5 py-1 rounded-full text-xs font-bold border ${job.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-100 text-slate-500 border-slate-200'}`}>
                      {job.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
