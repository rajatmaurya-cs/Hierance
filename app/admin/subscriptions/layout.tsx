"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DollarSign, Layers } from "lucide-react";

export default function SubscriptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Determine active state based on current path
  const isRevenue = pathname.includes("/revenue");
  const isPlans = pathname.includes("/plans");

  return (
    <div className="min-h-screen">
      {/* HEADER & TOGGLE */}
      <div className="mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Revenue & Subscription Hub
          </h1>
          <p className="text-slate-500 font-bold text-sm flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Live Financial Architecture & Product Adoption
          </p>
        </div>

        {/* Segmented Control Toggle - Navigating with Links */}
        <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center shadow-inner border border-slate-200">
          <Link
            href="/admin/subscriptions/revenue"
            className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
              isRevenue
                ? "bg-white text-indigo-600 shadow-md ring-1 ring-slate-200"
                : "text-slate-500 hover:text-slate-700 font-bold"
            }`}
          >
            <DollarSign size={13} /> Revenue Analytics
          </Link>
          <Link
            href="/admin/subscriptions/plans"
            className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
              isPlans
                ? "bg-white text-indigo-600 shadow-md ring-1 ring-slate-200"
                : "text-slate-500 hover:text-slate-700 font-bold"
            }`}
          >
            <Layers size={13} /> Plan Architecture
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
}
