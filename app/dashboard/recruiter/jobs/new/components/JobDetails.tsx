import { JobData } from "../types";
import { FileText, MapPin, List, Gift, DollarSign, Phone, ShieldCheck, Globe } from "lucide-react";

interface Props {
  formData: JobData;
  setFormData: React.Dispatch<React.SetStateAction<JobData>>;
}

export default function JobDetails({ formData, setFormData }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle =
    "w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none transition-all text-slate-700 font-semibold placeholder:text-slate-400 shadow-sm min-h-[120px]";
  
  const labelStyle = "flex items-center gap-2 mb-3 text-[11px] font-black text-slate-500 uppercase tracking-widest";

  const fields = [
    { name: "companyOverview", label: "Company Overview", icon: <Globe size={12} className="text-indigo-600" />, optional: true },
    { name: "companyLocation", label: "Company Headquarter", icon: <MapPin size={12} className="text-indigo-600" />, optional: true },
    { name: "jobDescription", label: "Detailed Job Description", icon: <FileText size={12} className="text-indigo-600" /> },
    { name: "skills", label: "Mandatory Skills", icon: <List size={12} className="text-indigo-600" />, placeholder: "e.g. React, Node.js, AWS" },
    { name: "perks", label: "Perks & Benefits", icon: <Gift size={12} className="text-indigo-600" />, placeholder: "e.g. Health Insurance, Remote Work", optional: true },
    { name: "salary", label: "Salary Details", icon: <DollarSign size={12} className="text-indigo-600" />, placeholder: "e.g. $80k - $120k / Year", optional: true },
    { name: "contactDetails", label: "Contact Info", icon: <Phone size={12} className="text-indigo-600" />, placeholder: "e.g. hr@company.com", optional: true },
    { name: "bondDetails", label: "Service Bond Details", icon: <ShieldCheck size={12} className="text-indigo-600" />, placeholder: "e.g. 1 Year service agreement", optional: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {fields.map((field) => (
        <div key={field.name} className={field.name === "jobDescription" || field.name === "companyOverview" ? "md:col-span-2" : ""}>
          <label className={labelStyle}>
            {field.icon}
            {field.label}
            {field.optional ? (
              <span className="text-slate-400 font-medium lowercase ml-1">(optional)</span>
            ) : (
              <span className="text-rose-500 ml-1">*</span>
            )}
          </label>
          <textarea
            name={field.name}
            placeholder={(field as any).placeholder || `Provide details about ${field.label.toLowerCase()}...`}
            value={(formData as any)[field.name]}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      ))}
    </div>
  );
}
