"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Wallet, ArrowUpRight, Clock, Info } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/shared/components/ui/toolTip";

export default function WalletCard() {
  const available = 42500;
  const pending = 18500;

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
            <Wallet className="text-indigo-600" size={22} />
          </div>
          <h2 className="text-lg font-semibold text-slate-900">
            Wallet Overview
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
              Rewards are released after candidate completes probation period.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-50 rounded-xl p-4 border">
          <p className="text-xs text-slate-500 mb-1">Available Balance</p>
          <p className="text-xl font-bold text-slate-900">
            ₹{available.toLocaleString()}
          </p>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 border">
          <p className="text-xs text-yellow-600 mb-1 flex items-center gap-1">
            <Clock size={14} />
            Pending Balance
          </p>
          <p className="text-xl font-bold text-slate-900">
            ₹{pending.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Action Section */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">Minimum withdrawal ₹1,000</p>

        <Button className="flex items-center gap-2 rounded-xl">
          Withdraw
          <ArrowUpRight size={16} />
        </Button>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-slate-400 mt-4">
        Withdrawals are processed within 2–3 business days.
      </p>
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
