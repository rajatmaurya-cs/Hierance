"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { JobData } from "../types";
import Stepper from "./Stepper";
import JobBasicInfo from "./JobBasicInfo";
import JobDetails from "./JobDetails";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

interface Props {
  formData: JobData;
  setFormData: React.Dispatch<React.SetStateAction<JobData>>;
}

export default function JobForm({ formData, setFormData }: Props) {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const validateStepOne = () => {
    const {
      jobTitle,
      companyName,
      jobType,
      experience,
      openings,
      jobLocation,
    } = formData;

    return (
      jobTitle &&
      companyName &&
      jobType &&
      experience &&
      openings &&
      jobLocation
    );
  };

  const validateStepTwo = () => {
    const { jobDescription, skills } = formData;
    return jobDescription && skills;
  };

  const handleNext = () => {
    if (!validateStepOne()) return;
    setStep(2);
  };

  const handlePublish = () => {
    if (!validateStepTwo()) return;
    
    // Create the job object in the format MOCK_JOBS expects
    const newJob = {
      jobId: `job-${Date.now()}`,
      companyName: formData.companyName || "Hireance",
      jobTitle: formData.jobTitle,
      exp: formData.experience,
      location: formData.jobLocation,
      status: formData.status || "Open",
      jobType: formData.jobType,
      applications: 0,
      shortlisted: 0,
      postedOn: "Just now",
      lastActivity: "Just now"
    };

    // Save to sessionStorage
    const existingJobsRaw = sessionStorage.getItem("recruiter_jobs_session");
    let jobs = [];
    if (existingJobsRaw) {
      jobs = JSON.parse(existingJobsRaw);
    }
    
    // Add to the beginning of the list
    const updatedJobs = [newJob, ...jobs];
    sessionStorage.setItem("recruiter_jobs_session", JSON.stringify(updatedJobs));

    // Redirect to jobs page
    router.push("/dashboard/recruiter/jobs");
  };

  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-10">
      <Stepper step={step} />

      <div className="mt-12">
        {step === 1 && (
          <JobBasicInfo formData={formData} setFormData={setFormData} />
        )}

        {step === 2 && (
          <JobDetails formData={formData} setFormData={setFormData} />
        )}
      </div>

      <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-100">
        <div>
          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Basics
            </button>
          )}
        </div>

        <div className="flex gap-4">
          {step === 1 ? (
            <button
              onClick={handleNext}
              disabled={!validateStepOne()}
              className={`group flex items-center gap-2 px-10 py-4 rounded-2xl font-black text-white shadow-xl transition-all ${
                validateStepOne() 
                  ? "bg-indigo-600 shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1" 
                  : "bg-slate-300 cursor-not-allowed opacity-50"
              }`}
            >
              Continue
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <button 
              onClick={handlePublish}
              disabled={!validateStepTwo()}
              className={`flex items-center gap-2 px-10 py-4 rounded-2xl font-black shadow-xl transition-all ${
                validateStepTwo()
                  ? "bg-emerald-500 text-white shadow-emerald-100 hover:bg-emerald-600 hover:-translate-y-1"
                  : "bg-slate-300 text-white cursor-not-allowed opacity-50"
              }`}
            >
              <Check size={18} />
              Publish Job
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
