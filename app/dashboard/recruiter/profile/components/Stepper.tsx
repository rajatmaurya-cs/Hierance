import { User, Building2 } from "lucide-react";

type Tab = "profile" | "organisation";

interface TabsProps {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

export default function Stepper({ activeTab, onChange }: TabsProps) {
  return (
    <div className="flex gap-3 bg-white/50 backdrop-blur-sm border border-slate-200 p-1.5 rounded-2xl shadow-sm">
      <button
        onClick={() => onChange("profile")}
        className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
          activeTab === "profile"
            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-[1.02]"
            : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
        }`}
      >
        <User size={18} />
        Profile
      </button>

      <button
        onClick={() => onChange("organisation")}
        className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
          activeTab === "organisation"
            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-[1.02]"
            : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
        }`}
      >
        <Building2 size={18} />
        Organisation
      </button>
    </div>
  );
}
