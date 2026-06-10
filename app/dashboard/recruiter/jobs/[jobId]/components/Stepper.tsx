"use client";

import { usePathname, useRouter } from "next/navigation";
import { BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";

interface StepperProps {
  jobId: string;
}

export default function Stepper({ jobId }: StepperProps) {
  const router = useRouter();
  const pathname = usePathname();

  const basePath = `/dashboard/recruiter/jobs/${jobId}`;
  const isApplicants = pathname.includes("/applicants");

  return (
    <div className="relative flex w-fit bg-slate-100/50 p-1 rounded-[1rem] border border-slate-200/50 font-jakarta">
      {/* Active Background */}
      <motion.div
        layoutId="stepper-bg"
        className="absolute top-1 bottom-1 bg-white rounded-lg shadow-sm border border-slate-200/50"
        initial={false}
        animate={{
          x: isApplicants ? "100%" : "0%",
          width: "calc(50% - 4px)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      />

      {/* Analytics */}
      <button
        onClick={() => router.push(basePath)}
        className={`relative z-10 flex items-center gap-2 px-6 py-2.5 text-[13px] font-bold transition-all duration-300 rounded-lg ${
          !isApplicants
            ? "text-indigo-600"
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/30"
        }`}
      >
        <BarChart3 size={16} strokeWidth={!isApplicants ? 2.5 : 2} />
        Analytics
      </button>

      {/* Applicants */}
      <button
        onClick={() => router.push(`${basePath}/applicants`)}
        className={`relative z-10 flex items-center gap-2 px-6 py-2.5 text-[13px] font-bold transition-all duration-300 rounded-lg ${
          isApplicants
            ? "text-indigo-600"
            : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/30"
        }`}
      >
        <Users size={16} strokeWidth={isApplicants ? 2.5 : 2} />
        Applicants
      </button>
    </div>
  );
}
