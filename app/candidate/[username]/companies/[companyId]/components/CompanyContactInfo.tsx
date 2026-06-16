"use client";

import { Mail, Globe, Linkedin, Twitter } from "lucide-react";

interface CompanyContactInfoProps {
  contact: {
    email: string;
    website: string;
  };
}

export default function CompanyContactInfo({
  contact,
}: CompanyContactInfoProps) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
      <h2 className="text-sm font-semibold text-slate-700 font-primary">Connect</h2>

      <div className="space-y-2.5">
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
          <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider font-primary">Email</p>
          <div className="flex items-center gap-1.5 text-sm text-slate-700 mt-0.5 font-primary">
            <Mail size={13} className="text-slate-400" />
            {contact.email}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
          <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider font-primary">Website</p>
          <div className="flex items-center gap-1.5 text-sm text-slate-700 mt-0.5 font-primary">
            <Globe size={13} className="text-slate-400" />
            {contact.website.replace("https://", "")}
          </div>
        </div>
      </div>

      <div className="pt-2">
        <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-2.5 font-primary">Social</p>
        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition text-slate-500 text-xs font-primary">
            <Linkedin size={14} />
            LinkedIn
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition text-slate-500 text-xs font-primary">
            <Twitter size={14} />
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
}