"use client";

import React from "react";
import { MOCK_APPLICANTS } from "../../../mockData";
import UnifiedProfile from "./components/UnifiedProfile";
import { Search } from "lucide-react";
import Link from "next/link";

const AppliedCandidateFullProfile = ({
  params,
}: {
  params: Promise<{ jobId: string; applicantId: string }>;
}) => {
  const { jobId, applicantId } = React.use(params);
  const applicant = MOCK_APPLICANTS.find(a => a.applicantId === applicantId);

  if (!applicant) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <div className="p-6 bg-slate-50 rounded-full mb-6">
          <Search size={40} className="text-slate-300" />
        </div>
        <h2 className="text-2xl font-black text-slate-900 mb-2">Applicant Not Found</h2>
        <p className="text-slate-500 font-bold mb-8">We couldn't find the candidate you're looking for.</p>
        <Link href={`/dashboard/recruiter/jobs/${jobId}/applicants`} className="px-8 py-4 bg-indigo-600 text-white rounded-[2rem] font-black text-sm shadow-xl shadow-indigo-100">
          Back to Applicants
        </Link>
      </div>
    );
  }

  return (
    <UnifiedProfile applicant={applicant} jobId={jobId} />
  );
};

export default AppliedCandidateFullProfile;
