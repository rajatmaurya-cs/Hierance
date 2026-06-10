"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";
import JobForm from "./components/JobForm";
import { JobData } from "./types";

export default function NewJobPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<JobData>({
    jobTitle: "",
    companyName: "Hireance", // Defaulting for the recruiter
    jobType: "",
    experience: "",
    status: "Open",
    openings: "",
    jobLocation: "",
    logo: "",
    companyOverview: "",
    companyLocation: "",
    jobDescription: "",
    skills: "",
    perks: "",
    salary: "",
    contactDetails: "",
    bondDetails: "",
  });

  return (
    <div className="min-h-screen space-y-10 py-6 px-4 md:px-8 max-w-5xl mx-auto pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold text-sm transition-colors mb-4 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </button>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-200">
              <Sparkles size={24} />
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              Create New Job
            </h1>
          </div>
          <p className="text-slate-500 font-medium ml-1">
            Publish your next opening and reach thousands of top candidates.
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className="glass rounded-[2.5rem] p-1 md:p-2 shadow-indigo-100/20 border border-white/40 overflow-hidden">
        <JobForm formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
}
