"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Medal, Info } from "lucide-react";
// import { Progress } from "@/shared/components/ui/Progress";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/shared/components/ui/toolTip";

export default function RewardsHeader() {
  const recruiterName = "Kanishq Sodhani";
  const currentTier = "Gold";
  const progressToNext = 68;
  const rank = 12;
  const reputation = 84;

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-20 backdrop-blur-xl bg-white/70 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left: Recruiter Info */}
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-2xl shadow-lg">
              <Medal className="text-white" size={28} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                {recruiterName}
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-3 py-1 text-sm font-medium rounded-full bg-yellow-100 text-yellow-700">
                  {currentTier} Tier
                </span>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info
                        size={16}
                        className="text-slate-400 hover:text-slate-600 transition"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      Tier unlocks based on successful hires & retention rate.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>

          {/* Right: Rank + Reputation */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-xl border">
              <Trophy size={18} className="text-yellow-500" />
              <span className="text-sm font-medium text-slate-700">
                Rank #{rank}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-xl border">
              <Star size={18} className="text-indigo-500" />
              <span className="text-sm font-medium text-slate-700">
                {reputation}/100 Reputation
              </span>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-2xl shadow-sm border p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-600">
              Progress to Platinum
            </span>
            <span className="text-sm font-semibold text-slate-900">
              {progressToNext}%
            </span>
          </div>

          <Progress value={progressToNext} className="h-3 rounded-full" />

          <p className="text-xs text-slate-500 mt-2">
            2 more successful hires needed to unlock Platinum Tier.
          </p>
        </div>
      </div>
    </motion.div>
  );
}



/* ============================= */
/* ===== Progress Component ==== */
/* ============================= */

interface ProgressProps {
  value: number;
  className?: string;
}

function Progress({ value, className }: ProgressProps) {
  return (
    <div
      className={`w-full bg-slate-200 rounded-full overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.8 }}
        className="h-full bg-indigo-600 rounded-full"
      />
    </div>
  );
}

/* ============================= */
/* ===== Tooltip Components ==== */
/* ============================= */

interface TooltipProps {
  children: ReactNode;
}

function TooltipProvider({ children }: TooltipProps) {
  return <>{children}</>;
}

function Tooltip({ children }: TooltipProps) {
  return <div className="relative group inline-block">{children}</div>;
}

function TooltipTrigger({ children }: TooltipProps) {
  return <>{children}</>;
}

function TooltipContent({ children }: TooltipProps) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-slate-900 text-white text-xs rounded-md px-3 py-2 shadow-lg whitespace-nowrap z-50">
      {children}
    </div>
  );
}
