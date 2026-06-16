"use client";

import { FileText, Briefcase, GraduationCap, Code2, User, Upload } from "lucide-react";

type Props = {
  activeSection: string;
  setActiveSection: (value: string) => void;
};

const links = [
  { name: "Resume", key: "resume", icon: <FileText size={15} /> },
  { name: "Personal Details", key: "details", icon: <User size={15} /> },
  { name: "Key Skills", key: "skills", icon: <Code2 size={15} /> },
  { name: "Employment", key: "employment", icon: <Briefcase size={15} /> },
  { name: "Education", key: "education", icon: <GraduationCap size={15} /> },
  { name: "Projects", key: "projects", icon: <Upload size={15} /> },
];

const ProfileNavigation = ({ activeSection, setActiveSection }: Props) => {
  return (
    <aside className="w-full sticky top-[260px] self-start">
      <div className="bg-white rounded-2xl border border-slate-100/60 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] p-4">
        <nav className="space-y-1">
          {links.map((link) => {
            const isActive = activeSection === link.key;

            return (
              <button
                key={link.key}
                onClick={() => setActiveSection(link.key)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[14px] font-medium transition-all font-primary ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-100/50"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                }`}
              >
                <span className={isActive ? "text-indigo-600" : "text-slate-400"}>
                  {link.icon}
                </span>
                {link.name}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default ProfileNavigation;
