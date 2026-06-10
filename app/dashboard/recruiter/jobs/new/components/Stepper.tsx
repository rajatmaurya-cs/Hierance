import { Check } from "lucide-react";

interface Props {
  step: number;
}

export default function Stepper({ step }: Props) {
  const steps = [
    { number: 1, label: "Basic Info", description: "Job title, type & location" },
    { number: 2, label: "Job Details", description: "Description, skills & perks" }
  ];

  return (
    <div className="flex items-center justify-between gap-4">
      {steps.map((s, i) => (
        <div key={s.number} className="flex-1 flex items-center gap-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-2xl text-sm font-black transition-all duration-500
              ${step === s.number ? "bg-indigo-600 text-white shadow-xl shadow-indigo-100 scale-110" : 
                step > s.number ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"}`}
            >
              {step > s.number ? <Check size={20} strokeWidth={3} /> : s.number}
            </div>
            <div className="hidden sm:block text-left">
              <p className={`text-xs font-black uppercase tracking-widest ${step >= s.number ? "text-slate-900" : "text-slate-400"}`}>
                {s.label}
              </p>
              <p className="text-[10px] font-medium text-slate-400">
                {s.description}
              </p>
            </div>
          </div>
          {i === 0 && (
            <div className="flex-1 h-1 bg-slate-100 rounded-full mx-4 overflow-hidden">
              <div 
                className="h-full bg-indigo-600 transition-all duration-700 ease-out" 
                style={{ width: step > 1 ? "100%" : "0%" }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
