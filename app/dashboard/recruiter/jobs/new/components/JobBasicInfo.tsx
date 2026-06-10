import { JobData } from "../types";
import { Briefcase, Building2, MapPin, Users, History, Layout, Image } from "lucide-react";

interface Props {
  formData: JobData;
  setFormData: React.Dispatch<React.SetStateAction<JobData>>;
}

export default function JobBasicInfo({ formData, setFormData }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle =
    "w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none transition-all text-slate-700 font-semibold placeholder:text-slate-400 shadow-sm";
  
  const labelStyle = "flex items-center gap-2 mb-2 text-[11px] font-black text-slate-500 uppercase tracking-widest";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div className="md:col-span-2">
        <label className={labelStyle}>
          <Briefcase size={12} className="text-indigo-600" />
          Job Title <span className="text-rose-500 ml-1">*</span>
        </label>
        <input
          name="jobTitle"
          placeholder="e.g. Senior Frontend Engineer"
          value={formData.jobTitle}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <div>
        <label className={labelStyle}>
          <Building2 size={12} className="text-indigo-600" />
          Company Name <span className="text-rose-500 ml-1">*</span>
        </label>
        <input
          name="companyName"
          placeholder="Enter company name"
          value={formData.companyName}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <div>
        <label className={labelStyle}>
          <Layout size={12} className="text-indigo-600" />
          Job Type <span className="text-rose-500 ml-1">*</span>
        </label>
        <select
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="">Select Type</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
          <option>Contract</option>
          <option>Freelance</option>
        </select>
      </div>

      <div>
        <label className={labelStyle}>
          <History size={12} className="text-indigo-600" />
          Experience Required <span className="text-rose-500 ml-1">*</span>
        </label>
        <input
          name="experience"
          placeholder="e.g. 3-5 Years"
          value={formData.experience}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <div>
        <label className={labelStyle}>
          <Users size={12} className="text-indigo-600" />
          Number of Openings <span className="text-rose-500 ml-1">*</span>
        </label>
        <input
          name="openings"
          type="number"
          placeholder="e.g. 5"
          value={formData.openings}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <div>
        <label className={labelStyle}>
          <MapPin size={12} className="text-indigo-600" />
          Job Location <span className="text-rose-500 ml-1">*</span>
        </label>
        <input
          name="jobLocation"
          placeholder="e.g. Remote or Jaipur, India"
          value={formData.jobLocation}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <div>
        <label className={labelStyle}>
          <Image size={12} className="text-indigo-600" />
          Company Logo URL <span className="text-slate-400 font-medium lowercase ml-1">(optional)</span>
        </label>
        <input
          name="logo"
          placeholder="https://example.com/logo.png"
          value={formData.logo}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

    </div>
  );
}
