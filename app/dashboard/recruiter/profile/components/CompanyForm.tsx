"use client";

import { useState } from "react";
import { Pencil, Building2, Globe, Tag, Calendar, Users, Briefcase, MapPin, Heart, ChevronLeft, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------------------------------------------
   TYPES
------------------------------------------------------- */

interface CompanyData {
  companyName: string;
  website: string;
  tagline: string;
  about: string;
  founded: string;
  size: string;
  industry: string;
  type: string;
  headquarters: string;
  offices: string;
  workMode: string;
  culture: string;
  benefits: string;
  workingDays: string;
  interviewProcess: string;
}

/* -------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------- */

export default function CompanyForm({ onBack }: { onBack: () => void }) {
  const [isOrgCreated, setIsOrgCreated] = useState(true);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [companyData, setCompanyData] = useState<CompanyData>({
    companyName: "Hireance Pvt Ltd",
    website: "hireance.com",
    tagline: "Hiring made simple",
    about: "We are a technology company focused on simplifying the hiring process.",
    founded: "2023",
    size: "11–50",
    industry: "SaaS / HRTech",
    type: "Product-based",
    headquarters: "Bangalore, India",
    offices: "Bangalore, Pune",
    workMode: "Hybrid",
    culture: "Innovative and inclusive work environment.",
    benefits: "Health Insurance, ESOPs",
    workingDays: "5 Days / Week",
    interviewProcess: "Resume → Tech → HR",
  });

  const handleUpdateCompany = (newData: CompanyData) => {
    setCompanyData(newData);
    setIsEditOpen(false);
  };

  return (
    <div className="space-y-10">
      {/* Organisation Content */}
      {!isOrgCreated ? (
        <EmptyOrganisationState />
      ) : (
        <div className="space-y-8">
          <CompanyHeader onEdit={() => setIsEditOpen(true)} />
          <div className="grid grid-cols-1 gap-8">
            <CompanyInfoCard data={companyData} onEdit={() => setIsEditOpen(true)} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <LocationCard data={companyData} />
               <CultureCard data={companyData} />
            </div>
          </div>
        </div>
      )}

      {/* Common CTA */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-black text-slate-500 hover:bg-slate-50 transition-all"
        >
          <ChevronLeft size={16} />
          Back to Profile
        </button>
        
        <button 
          onClick={() => alert("Organisation details saved successfully!")}
          className="group flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-3.5 text-sm font-black text-white shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-300"
        >
          Save Organisation Details
          <CheckCircle2 size={16} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Edit Modal */}
      <AnimatePresence>
        {isEditOpen && (
          <EditOrganisationModal 
            data={companyData}
            onClose={() => setIsEditOpen(false)} 
            onSave={handleUpdateCompany}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------------------------
   EMPTY STATE
------------------------------------------------------- */

function EmptyOrganisationState() {
  return (
    <div className="rounded-[2rem] bg-slate-50/50 border-2 border-dashed border-slate-200 p-12 text-center">
      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
        <Building2 size={32} className="text-slate-300" />
      </div>
      <h2 className="text-xl font-extrabold text-slate-900">
        Organisation Profile
      </h2>
      <p className="mt-2 text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">
        Add company details so candidates can trust and learn about your organisation.
      </p>
    </div>
  );
}

/* -------------------------------------------------------
   COMPANY HEADER
------------------------------------------------------- */

function CompanyHeader({ onEdit }: { onEdit: () => void }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-2">
      <div className="relative group">
        <div className="h-32 w-32 rounded-[2.5rem] bg-slate-100 p-1 shadow-inner">
          <div className="h-full w-full rounded-[2.3rem] bg-white flex items-center justify-center overflow-hidden border-2 border-slate-50">
             <Building2 size={60} className="text-slate-100" />
          </div>
        </div>
        <button 
          onClick={onEdit}
          className="absolute -bottom-2 -right-2 p-3 bg-white rounded-2xl shadow-xl border border-slate-100 text-indigo-600 hover:scale-110 transition-transform"
        >
          <Pencil size={18} />
        </button>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-xl font-black text-slate-900 mb-1">Company Logo</h3>
        <p className="text-sm text-slate-500 font-medium mb-4 max-w-xs">
          This will be visible on all your job postings. Recommend 800x800px.
        </p>
        <button className="rounded-xl border border-slate-200 px-5 py-2 text-xs font-black text-slate-700 hover:bg-slate-50 transition-colors">
          Upload New Logo
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   COMPANY INFO (READ ONLY)
------------------------------------------------------- */

function CompanyInfoCard({ data, onEdit }: { data: CompanyData; onEdit: () => void }) {
  return (
    <div className="rounded-[2.5rem] bg-white border border-slate-100 p-8 shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50/20 rounded-bl-[6rem] -u-z-10 transition-all group-hover:scale-105" />
      
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
           <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
             <Building2 size={20} />
           </div>
           <h3 className="text-lg font-black text-slate-900">Company Information</h3>
        </div>

      
      </div>

      <div className="grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-2 lg:grid-cols-4">
        <InfoItem icon={<Building2 size={16}/>} label="Company Name" value={data.companyName} />
        <InfoItem icon={<Globe size={16}/>} label="Website" value={data.website} color="text-indigo-600" />
        <InfoItem icon={<Tag size={16}/>} label="Tagline" value={data.tagline} />
        <InfoItem icon={<Calendar size={16}/>} label="Founded" value={data.founded} />
        <InfoItem icon={<Users size={16}/>} label="Company Size" value={data.size} />
        <InfoItem icon={<Briefcase size={16}/>} label="Industry" value={data.industry} />
        <InfoItem icon={<CheckCircle2 size={16}/>} label="Company Type" value={data.type} />
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   LOCATION DETAILS
------------------------------------------------------- */

function LocationCard({ data }: { data: CompanyData }) {
  return (
    <div className="rounded-[2.5rem] bg-white border border-slate-100 p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-8">
         <div className="p-3 rounded-2xl bg-amber-50 text-amber-600">
           <MapPin size={20} />
         </div>
         <h3 className="text-lg font-black text-slate-900">Location Details</h3>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <InfoItem label="Headquarters" value={data.headquarters} />
        <InfoItem label="Office Locations" value={data.offices} />
        <InfoItem label="Work Mode" value={data.workMode} />
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   CULTURE & HIRING
------------------------------------------------------- */

function CultureCard({ data }: { data: CompanyData }) {
  return (
    <div className="rounded-[2.5rem] bg-white border border-slate-100 p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-8">
         <div className="p-3 rounded-2xl bg-rose-50 text-rose-600">
           <Heart size={20} />
         </div>
         <h3 className="text-lg font-black text-slate-900">Work Culture & Hiring</h3>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <InfoItem label="Working Days" value={data.workingDays} />
        <InfoItem label="Benefits" value={data.benefits} />
        <InfoItem label="Interview Process" value={data.interviewProcess} />
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value, color }: { icon?: any; label: string; value: string; color?: string }) {
  return (
    <div className="flex gap-4">
      {icon && <div className="mt-1 text-slate-400">{icon}</div>}
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <p className={`text-sm font-bold ${color || "text-slate-800"}`}>{value}</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   EDIT ORGANISATION MODAL
------------------------------------------------------- */

function EditOrganisationModal({ 
  data, 
  onClose, 
  onSave 
}: { 
  data: CompanyData; 
  onClose: () => void; 
  onSave: (newData: CompanyData) => void;
}) {
  const [formData, setFormData] = useState<CompanyData>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl rounded-[3rem] bg-white p-10 shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar"
      >
        <h2 className="text-2xl font-black text-slate-900 mb-8">Edit Organisation</h2>

        <div className="space-y-6">
          <Input label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Input label="Website URL" name="website" value={formData.website} onChange={handleChange} />
             <Input label="Tagline" name="tagline" value={formData.tagline} onChange={handleChange} />
          </div>
          
          <Textarea label="About Company" name="about" value={formData.about} onChange={handleChange} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Founded Year" name="founded" value={formData.founded} onChange={handleChange} />
            <Select 
              label="Company Size" 
              name="size"
              value={formData.size}
              onChange={handleChange}
              options={["1–10", "11–50", "51–200", "200+"]} 
            />
            <Select 
              label="Industry" 
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              options={["IT", "SaaS", "Fintech", "Healthcare", "EdTech"]} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Select 
               label="Company Type" 
               name="type"
               value={formData.type}
               onChange={handleChange}
               options={["Startup", "MNC", "Product-based", "Service-based"]} 
             />
             <Input label="Headquarters" name="headquarters" value={formData.headquarters} onChange={handleChange} />
          </div>
          
          <Input label="Office Locations" name="offices" value={formData.offices} onChange={handleChange} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Select 
               label="Work Mode" 
               name="workMode"
               value={formData.workMode}
               onChange={handleChange}
               options={["Remote", "Hybrid", "On-site"]} 
             />
             <Select 
               label="Working Days" 
               name="workingDays"
               value={formData.workingDays}
               onChange={handleChange}
               options={["5 Days", "6 Days"]} 
             />
          </div>

          <Textarea label="Work Culture Description" name="culture" value={formData.culture} onChange={handleChange} />
          <Input label="Benefits & Perks" name="benefits" value={formData.benefits} onChange={handleChange} />
          <Textarea label="Interview Process" name="interviewProcess" value={formData.interviewProcess} onChange={handleChange} />
        </div>

        <div className="mt-10 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-2xl px-6 py-3 text-sm font-black text-slate-500 hover:bg-slate-50 transition-colors"
          >
            Discard
          </button>
          <button
            onClick={() => onSave(formData)}
            className="rounded-2xl bg-indigo-600 px-8 py-3 text-sm font-black text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
          >
            Save Changes
          </button>
        </div>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------
   REUSABLE INPUTS
------------------------------------------------------- */

function Input({ 
  label, 
  name, 
  value, 
  onChange 
}: { 
  label: string; 
  name: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1 block">{label}</label>
      <input 
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-3.5 text-sm font-bold text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all" 
      />
    </div>
  );
}

function Textarea({ 
  label, 
  name, 
  value, 
  onChange 
}: { 
  label: string; 
  name: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1 block">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        className="w-full rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-3.5 text-sm font-bold text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all resize-none"
      />
    </div>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1 block">{label}</label>
      <select 
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-3.5 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}