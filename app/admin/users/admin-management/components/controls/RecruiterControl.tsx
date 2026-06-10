"use client";

import { AdminRole } from "../../types";
import { Users, ArrowRight, ShieldCheck, Clock, Settings, UserPlus } from "lucide-react";
import Link from "next/link";

type Props = {
  role: AdminRole;
};

export default function RecruiterControl({ role }: Props) {
  return (
    <div className="flex flex-col">
      <div className="px-6 pt-6 pb-5 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center shadow-sm flex-shrink-0">
            <UserPlus size={18} className="text-white" />
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-900 leading-tight">
              Recruiter Access Control
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Current Access Level: <span className="font-bold text-violet-600">{role.replace("_", " ")}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 bg-gray-50 flex flex-col items-center text-center justify-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 mb-5 relative">
          <UserPlus size={32} className="text-violet-400" />
          <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-1 border-2 border-white">
            <ShieldCheck size={14} />
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2">Module is Active</h3>
        <p className="text-sm text-gray-500 max-w-md mb-8">
          The recruiter authorization and profile verification system is governed by the Users Management module.
        </p>

        <div className="flex gap-4">
          <Link 
            href="/admin/users/recruiters" 
            className="flex items-center gap-2 px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-all"
          >
            Go to Recruiters Module <ArrowRight size={16} />
          </Link>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-sm font-medium transition-all">
            <Settings size={16} className="text-gray-400" /> Configure Settings
          </button>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-white border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400 font-medium h-12">
        <Clock size={14} /> Last synced: Just now
      </div>
    </div>
  );
}
