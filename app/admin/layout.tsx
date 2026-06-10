"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Building2,
  FileText,
  CreditCard,
  BarChart3,
  AlertCircle,
  Megaphone,
  Settings,
  LogOut,
  ChevronRight,
  ShieldCheck,
  UserCircle,
  Bell,
  Sparkles,
} from "lucide-react";

type Props = {
  children: React.ReactNode;
};

const AdminPageLayout = ({ children }: Props) => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);


    const router = useRouter();

    const handellogout = async ()=>{
    
      router.push('/')


    }

  const navItem = (href: string, title: string, Icon: React.ElementType) => {
    const isActive =
      pathname === href ||
      (href !== "/admin/dashboard" && pathname?.startsWith(href));

    const isHovered = hoveredItem === href;


  

    return (
      <Link
        href={href}
        className="relative block w-full outline-none group"
        onMouseEnter={() => setHoveredItem(href)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div
          className={`relative flex items-center justify-between rounded-xl px-3.5 py-2.5 transition-all duration-200 overflow-hidden ${isActive
            ? "bg-blue-600 text-white shadow-lg shadow-blue-200/60"
            : "hover:bg-slate-50 text-slate-600"
            }`}
        >
          {/* Hover shimmer */}
          {!isActive && isHovered && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/60 to-transparent translate-x-[-100%] animate-shimmer pointer-events-none" />
          )}

          {/* Active glow */}
          {isActive && (
            <div className="absolute inset-0 bg-blue-600 opacity-100" />
          )}

          <div className="relative flex items-center gap-3">
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${isActive
                ? "bg-white/20"
                : "bg-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600"
                }`}
            >
              <Icon
                size={15}
                strokeWidth={isActive ? 2.5 : 2}
                className={
                  isActive
                    ? "text-white"
                    : "text-slate-400 group-hover:text-blue-500 transition-colors duration-200"
                }
              />
            </div>
            <span
              className={`text-[13px] transition-all duration-200 ${isActive
                ? "font-bold text-white"
                : "font-medium text-slate-600 group-hover:text-slate-800"
                }`}
            >
              {title}
            </span>
          </div>

          <ChevronRight
            size={13}
            className={`relative transition-all duration-200 ${isActive
              ? "opacity-60 text-white translate-x-0"
              : "opacity-0 group-hover:opacity-40 text-slate-400 group-hover:translate-x-0.5"
              }`}
          />
        </div>

        {/* Active left indicator bar */}
        {isActive && (
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-5 bg-blue-800 rounded-r-full" />
        )}
      </Link>
    );
  };

  const SectionLabel = ({ label }: { label: string }) => (
    <div className="flex items-center gap-2 px-3 mt-6 mb-1.5">
      <p className="text-[9.5px] font-black uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <div className="flex-1 h-[1px] bg-slate-100" />
    </div>
  );

  return (
    <section className="bg-white w-full flex h-screen overflow-hidden font-sans">
      {/* ================= SIDEBAR ================= */}
      <aside className="w-[268px] bg-white border-r border-slate-100 h-full flex flex-col z-20 shadow-[1px_0_20px_rgba(0,0,0,0.04)]">

        {/* LOGO AREA */}
     
        <div className="h-[68px] flex flex-col items-center justify-center px-6 border-b border-slate-100">
          <Link href="/admin/dashboard" className="flex items-center group">
            <div className="relative w-[140px] h-[32px] flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/hireance-PNG-logo.png"
                alt="Hierance Logo"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </Link>

          <span className="font-extrabold text-gray-500">
            Admin Console
          </span>
        </div>

        {/* NAV LIST */}
        <nav className="flex-1 overflow-y-auto px-3 py-2 custom-scrollbar space-y-0.5">
          <SectionLabel label="General" />
          {navItem("/admin/dashboard", "Overview", LayoutDashboard)}

          <SectionLabel label="User Base" />
          {navItem("/admin/users/job-seekers", "Job Seekers", Users)}
          {navItem("/admin/users/recruiters", "Recruiters", UserCircle)}
          {navItem("/admin/users/admin-management", "Administrators", ShieldCheck)}

          <SectionLabel label="Platform" />
          {navItem("/admin/platform-management/jobs", "Listing Management", Briefcase)}
          {navItem("/admin/platform-management/companies", "Company Directory", Building2)}
          {navItem("/admin/platform-management/applications", "Job Applications", FileText)}

          <SectionLabel label="Business" />
          {navItem("/admin/subscriptions", "Revenue & Plans", CreditCard)}
          {navItem("/admin/analytics", "Data Insights", BarChart3)}

          <SectionLabel label="Moderation" />
          {navItem("/admin/reports", "Incident Logs", AlertCircle)}
          {navItem("/admin/announcements", "Global Alerts", Megaphone)}

          <SectionLabel label="Configuration" />
          {navItem("/admin/settings", "System Settings", Settings)}

          <div className="h-4" />
        </nav>

        {/* FOOTER USER PROFILE */}
        <div className="p-3 border-t border-slate-100">
          <div className="flex items-center justify-between px-3 py-2 mb-2 rounded-lg bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-2 h-2">
                <span className="absolute w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-60" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[10px] font-semibold text-slate-500">
                All systems operational
              </span>
            </div>
            <Sparkles size={11} className="text-slate-300" />
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 group cursor-pointer">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-black text-sm shadow-md shadow-blue-200">
                K
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-bold text-slate-900 truncate leading-tight">
                Kanishq
              </p>
              <p className="text-[10px] text-blue-600 font-semibold mt-0.5">
                Super Admin
              </p>
            </div>
            <button

              onClick={(()=>handellogout())}
            
            className="p-1.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100">
              <LogOut size={14} />
            </button>
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#F7F9FC]">
        <header className="h-[68px] bg-white border-b border-slate-100 px-6 flex items-center justify-between sticky top-0 z-10 shadow-sm shadow-slate-100/60">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              {pathname?.split("/").filter(Boolean).map((segment, i, arr) => (
                <React.Fragment key={i}>
                  <span className={`text-[12px] font-semibold capitalize transition-colors ${i === arr.length - 1 ? "text-slate-800" : "text-slate-400 hover:text-slate-600"}`}>
                    {segment.replace(/-/g, " ")}
                  </span>
                  {i < arr.length - 1 && <ChevronRight size={12} className="text-slate-300" />}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex flex-col items-end mr-2">
              <p className="text-[11px] font-bold text-slate-700 leading-none">
                Monday, 23 Mar
              </p>
              <p className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider mt-1">
                System Online
              </p>
            </div>
            <div className="h-7 w-[1px] bg-slate-100 mx-1" />
            <button className="relative p-2.5 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-xl transition-all duration-200 group">
              <Bell size={17} strokeWidth={2} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 border-2 border-white rounded-full animate-pulse" />
            </button>
            <div className="relative ml-1">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-black text-sm shadow-md shadow-blue-100 cursor-pointer hover:shadow-blue-200 transition-all duration-200 hover:scale-105">
                K
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar-main font-sans">
          <div className="p-5 md:p-6 lg:p-7 max-w-[1600px] mx-auto">
            {children}
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer { animation: shimmer 0.6s ease-in-out; }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e8edf5; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
        .custom-scrollbar-main::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar-main::-webkit-scrollbar-track { background: #f1f5f9; }
        .custom-scrollbar-main::-webkit-scrollbar-thumb { background: #dde3ed; border-radius: 100px; border: 1px solid #f1f5f9; }
        .custom-scrollbar-main::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>
    </section>

  );
};

export default AdminPageLayout;
