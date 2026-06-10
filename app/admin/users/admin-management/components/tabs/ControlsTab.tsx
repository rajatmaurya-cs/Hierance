"use client";

import { useState } from "react";
import { AdminRole, AdminUser, ManagerUser } from "../../types";

import {
  Shield,
  Users,
  Briefcase,
  Settings,
  Building2,
  FileText,
  BarChart3,
  ChevronRight,
  ArrowLeft,
  LayoutDashboard,
} from "lucide-react";

import AdminControl from "../controls/AdminControl";
import ManagerControl from "../controls/ManagerControl";
import UserControl from "../controls/UserControl";
import RecruiterControl from "../controls/RecruiterControl";
import CompanyControl from "../controls/CompanyControl";
import JobControl from "../controls/JobControl";
import ApplicationControl from "../controls/ApplicationControl";
import ReportsControl from "../controls/Reports";
import SettingsControl from "../controls/Settings";

type ControlType =
  | "ADMIN"
  | "MANAGER"
  | "USER"
  | "RECRUITER"
  | "COMPANY"
  | "JOB"
  | "APPLICATION"
  | "REPORTS"
  | "SETTINGS";

const controlsConfig: Record<
  AdminRole,
  { key: ControlType; title: string; description: string; icon: any; color: string; bg: string }[]
> = {
  SUPER_ADMIN: [
    { key: "ADMIN",       title: "Admin Control",       description: "Manage admin accounts & roles",       icon: Shield,    color: "text-blue-600",   bg: "bg-blue-50"   },
    { key: "MANAGER",     title: "Manager Control",     description: "Oversee manager accounts",             icon: Users,     color: "text-indigo-600", bg: "bg-indigo-50" },
    { key: "USER",        title: "User Control",        description: "View and manage all users",            icon: Users,     color: "text-sky-600",    bg: "bg-sky-50"    },
    { key: "RECRUITER",   title: "Recruiter Control",   description: "Recruiter access & permissions",       icon: Briefcase, color: "text-blue-700",   bg: "bg-blue-50"   },
    { key: "COMPANY",     title: "Company Control",     description: "Manage registered companies",          icon: Building2, color: "text-slate-600",  bg: "bg-slate-50"  },
    { key: "JOB",         title: "Job Control",         description: "Monitor and manage job listings",      icon: Briefcase, color: "text-blue-500",   bg: "bg-blue-50"   },
    { key: "APPLICATION", title: "Application Control", description: "Track and review applications",        icon: FileText,  color: "text-indigo-500", bg: "bg-indigo-50" },
    { key: "REPORTS",     title: "Reports",             description: "Analytics and platform insights",      icon: BarChart3, color: "text-blue-600",   bg: "bg-blue-50"   },
    { key: "SETTINGS",    title: "Settings",            description: "Platform configuration & settings",    icon: Settings,  color: "text-slate-500",  bg: "bg-slate-50"  },
  ],
  ADMIN: [
    { key: "ADMIN",       title: "Admin Overview",      description: "View admin accounts & roles",          icon: Shield,    color: "text-blue-600",   bg: "bg-blue-50"   },
    { key: "MANAGER",     title: "Manager Control",     description: "Oversee manager accounts",             icon: Users,     color: "text-indigo-600", bg: "bg-indigo-50" },
    { key: "USER",        title: "User Control",        description: "View and manage all users",            icon: Users,     color: "text-sky-600",    bg: "bg-sky-50"    },
    { key: "RECRUITER",   title: "Recruiter Control",   description: "Recruiter access & permissions",       icon: Briefcase, color: "text-blue-700",   bg: "bg-blue-50"   },
    { key: "COMPANY",     title: "Company Control",     description: "Manage registered companies",          icon: Building2, color: "text-slate-600",  bg: "bg-slate-50"  },
    { key: "JOB",         title: "Job Control",         description: "Monitor and manage job listings",      icon: Briefcase, color: "text-blue-500",   bg: "bg-blue-50"   },
    { key: "APPLICATION", title: "Application Control", description: "Track and review applications",        icon: FileText,  color: "text-indigo-500", bg: "bg-indigo-50" },
    { key: "REPORTS",     title: "Reports",             description: "Analytics and platform insights",      icon: BarChart3, color: "text-blue-600",   bg: "bg-blue-50"   },
    { key: "SETTINGS",    title: "Settings",            description: "Platform configuration & settings",    icon: Settings,  color: "text-slate-500",  bg: "bg-slate-50"  },
  ],
  MANAGER: [
    { key: "MANAGER",     title: "Manager Overview",    description: "Your manager dashboard",               icon: Users,     color: "text-indigo-600", bg: "bg-indigo-50" },
    { key: "USER",        title: "User Monitoring",     description: "Monitor user activity",                icon: Users,     color: "text-sky-600",    bg: "bg-sky-50"    },
    { key: "JOB",         title: "Job Monitoring",      description: "Track active job listings",            icon: Briefcase, color: "text-blue-500",   bg: "bg-blue-50"   },
    { key: "APPLICATION", title: "Applications",        description: "Review incoming applications",         icon: FileText,  color: "text-indigo-500", bg: "bg-indigo-50" },
    { key: "REPORTS",     title: "Reports",             description: "Analytics and insights",               icon: BarChart3, color: "text-blue-600",   bg: "bg-blue-50"   },
  ],
};

type Props = {
  role: AdminRole;
  admins: AdminUser[];
  managers: ManagerUser[];
};

export default function ControlsTab({ role, admins, managers }: Props) {
  const controls = controlsConfig[role];
  const [activeControl, setActiveControl] = useState<ControlType | null>(null);

  const activeItem = controls.find((c) => c.key === activeControl);

  const renderContent = () => {
    switch (activeControl) {
      case "ADMIN":       return <AdminControl data={admins} role={role} />;
      case "MANAGER":     return <ManagerControl data={managers} role={role} />;
      case "USER":        return <UserControl role={role} />;
      case "RECRUITER":   return <RecruiterControl role={role} />;
      case "COMPANY":     return <CompanyControl role={role} />;
      case "JOB":         return <JobControl role={role} />;
      case "APPLICATION": return <ApplicationControl role={role} />;
      case "REPORTS":     return <ReportsControl role={role} />;
      case "SETTINGS":    return <SettingsControl />;
      default:            return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Top page header ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <LayoutDashboard size={16} className="text-white" />
          </div>
          <div>
            <h1 className="text-base font-semibold text-gray-900 leading-tight">
              Control Panel
            </h1>
            <p className="text-xs text-gray-400 leading-none mt-0.5">
              {role.replace("_", " ")} · {controls.length} modules available
            </p>
          </div>

          {/* Breadcrumb */}
          {activeControl && (
            <div className="ml-4 flex items-center gap-1.5 text-xs text-gray-400">
              <span className="text-gray-300">·</span>
              <span
                className="hover:text-blue-600 cursor-pointer transition-colors"
                onClick={() => setActiveControl(null)}
              >
                All Controls
              </span>
              <ChevronRight size={12} />
              <span className="text-blue-600 font-medium">{activeItem?.title}</span>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">

        {/* ── GRID VIEW ── */}
        {!activeControl && (
          <>
            <p className="text-sm text-gray-500 mb-5">
              Select a module to manage
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {controls.map((item, i) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveControl(item.key)}
                    className="group text-left bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-200 ${item.bg} group-hover:bg-blue-100`}
                    >
                      <Icon size={18} className={`${item.color} group-hover:text-blue-600 transition-colors`} />
                    </div>

                    {/* Text */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <ChevronRight
                        size={16}
                        className="text-gray-300 group-hover:text-blue-400 transition-all group-hover:translate-x-0.5 mt-0.5 flex-shrink-0"
                      />
                    </div>

                    {/* Bottom accent line on hover */}
                    <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-blue-500 rounded-full transition-all duration-300" />
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* ── CONTENT VIEW ── */}
        {activeControl && (
          <div>
            {/* Back button */}
            <button
              onClick={() => setActiveControl(null)}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-5 group"
            >
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              Back to Controls
            </button>

            {/* Content panel */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              {renderContent()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}