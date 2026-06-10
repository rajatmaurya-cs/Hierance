"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp, Info } from "lucide-react";
// import { Progress } from "@/shared/components/ui/progress";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/shared/components/ui/toolTip";

export default function ReputationCard() {
  const overallScore = 86;

  const metrics = [
    { label: "Candidate Quality", value: 92 },
    { label: "Retention Rate", value: 88 },
    { label: "Hiring Speed", value: 79 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-1/2 bg-white rounded-2xl shadow-sm border p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-indigo-100">
            <Star className="text-indigo-600" size={22} />
          </div>
          <h2 className="text-lg font-semibold text-slate-900">
            Reputation Score
          </h2>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info
                size={18}
                className="text-slate-400 hover:text-slate-600 cursor-pointer transition"
              />
            </TooltipTrigger>
            <TooltipContent>
              Reputation is calculated based on retention, feedback & hiring
              performance.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Overall Score */}
      <div className="bg-indigo-50 rounded-xl p-6 mb-6 text-center border">
        <p className="text-sm text-indigo-600 mb-2">Overall Score</p>
        <p className="text-4xl font-bold text-slate-900">
          {overallScore}
          <span className="text-lg text-slate-500"> /100</span>
        </p>
        <div className="flex justify-center mt-2 text-xs text-slate-500 items-center gap-1">
          <TrendingUp size={14} />
          +4% this month
        </div>
      </div>

      {/* Breakdown */}
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">{metric.label}</span>
              <span className="font-medium text-slate-900">
                {metric.value}%
              </span>
            </div>
            <Progress value={metric.value} className="h-2 rounded-full" />
          </div>
        ))}
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
