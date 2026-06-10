"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Stepper from "@/app/dashboard/recruiter/profile/components/Stepper";
import RecruiterForm from "./components/RecruiterForm";
import CompanyForm from "./components/CompanyForm";

type Step = "profile" | "organisation";

export default function RecruiterProfilePage() {
  const [activeStep, setActiveStep] = useState<Step>("profile");

  return (
    <div className="min-h-screen bg-[#f8fafc] px-6 py-10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -u-z-10 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 -u-z-10 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-3xl opacity-40" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Page Intro */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Set Up Your <span className="gradient-text">Hiring Profile</span>
          </h1>
          <p className="mt-3 text-slate-500 font-medium max-w-2xl">
            Create your recruiter profile and add organisation details to start
            hiring candidates on Hireance.
          </p>
        </div>

        {/* Tabs / Stepper */}
        <div className="mb-8 flex justify-center md:justify-start">
          <Stepper activeTab={activeStep} onChange={setActiveStep} />
        </div>

        {/* Content */}
        <div className="glass rounded-[2rem] p-8 md:p-10 shadow-indigo-100/20">
          {activeStep === "profile" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key="profile"
            >
              <RecruiterForm onNext={() => setActiveStep("organisation")} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key="organisation"
            >
              <CompanyForm onBack={() => setActiveStep("profile")} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
