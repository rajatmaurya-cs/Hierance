"use client";

import { useState } from "react";
import { Pencil, User, Mail, Phone, Briefcase, MapPin, Linkedin, GraduationCap, Building } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------------------------------------------
   TYPES
------------------------------------------------------- */

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  designation: string;
  department: string;
  experience: string;
  linkedin: string;
  location: string;
}

/* -------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------- */

export default function RecruiterForm({ onNext }: { onNext: () => void }) {
  const [isProfileCreated, setIsProfileCreated] = useState(true);
  const [isEditOpen, setIsEditOpen] = useState(false);
  
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: "John Doe",
    email: "john@company.com",
    phone: "+91 98765 43210",
    designation: "HR Manager",
    department: "Human Resources",
    experience: "6",
    linkedin: "linkedin.com/in/johndoe",
    location: "California, USA",
  });

  const handleUpdateProfile = (newData: ProfileData) => {
    setProfileData(newData);
    setIsEditOpen(false);
  };

  return (
    <div className="space-y-10">
      {/* Profile Content */}
      {!isProfileCreated ? (
        <EmptyProfileState />
      ) : (
        <div className="space-y-8">
          <ProfileAvatar onEdit={() => setIsEditOpen(true)} />
          <PersonalInfoCard 
            data={profileData} 
            onEdit={() => setIsEditOpen(true)} 
          />
        </div>
      )}

      {/* Common CTA */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
        <p className="text-sm text-slate-400 font-medium italic">All changes are automatically saved as drafts.</p>
        <button 
          onClick={onNext}
          className="group flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-3.5 text-sm font-black text-white shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-300"
        >
          Next: Organisation
          <Briefcase size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Edit Modal */}
      <AnimatePresence>
        {isEditOpen && (
          <EditProfileModal 
            data={profileData} 
            onClose={() => setIsEditOpen(false)} 
            onSave={handleUpdateProfile}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------------------------
   EMPTY STATE (NEW RECRUITER)
------------------------------------------------------- */

function EmptyProfileState() {
  return (
    <div className="rounded-[2rem] bg-slate-50/50 border-2 border-dashed border-slate-200 p-12 text-center">
      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
        <User size={32} className="text-slate-300" />
      </div>
      <h2 className="text-xl font-extrabold text-slate-900">
        Complete Your Profile
      </h2>
      <p className="mt-2 text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">
        Let candidates know who they are talking to. A complete profile increases trust.
      </p>
    </div>
  );
}

/* -------------------------------------------------------
   PROFILE AVATAR
------------------------------------------------------- */

function ProfileAvatar({ onEdit }: { onEdit: () => void }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-2">
      <div className="relative group">
        <div className="h-32 w-32 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-2xl shadow-indigo-200">
          <div className="h-full w-full rounded-[2.3rem] bg-white flex items-center justify-center overflow-hidden">
             <User size={60} className="text-slate-200" />
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
        <h3 className="text-xl font-black text-slate-900 mb-1">Profile Photo</h3>
        <p className="text-sm text-slate-500 font-medium mb-4 max-w-xs">
          Help candidates recognise you. Recommend 800x800px.
        </p>
        <button className="rounded-xl border border-slate-200 px-5 py-2 text-xs font-black text-slate-700 hover:bg-slate-50 transition-colors">
          Change Image
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   PERSONAL INFO (READ ONLY)
------------------------------------------------------- */

function PersonalInfoCard({ data, onEdit }: { data: ProfileData; onEdit: () => void }) {
  return (
    <div className="rounded-[2.5rem] bg-white border border-slate-100 p-8 shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/30 rounded-bl-[5rem] -u-z-10 transition-all group-hover:scale-110" />
      
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
           <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
             <User size={20} />
           </div>
           <h3 className="text-lg font-black text-slate-900">Personal Information</h3>
        </div>

      </div>

      <div className="grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
        <InfoItem icon={<User size={16}/>} label="Full Name" value={data.fullName} />
        <InfoItem icon={<Mail size={16}/>} label="Work Email" value={data.email} />
        <InfoItem icon={<Phone size={16}/>} label="Phone Number" value={data.phone} />
        <InfoItem icon={<Briefcase size={16}/>} label="Designation" value={data.designation} />
        <InfoItem icon={<Building size={16}/>} label="Department" value={data.department} />
        <InfoItem icon={<GraduationCap size={16}/>} label="Experience" value={`${data.experience}+ Years`} />
        <InfoItem icon={<Linkedin size={16}/>} label="LinkedIn" value={data.linkedin} color="text-blue-600" />
        <InfoItem icon={<MapPin size={16}/>} label="Location" value={data.location} />
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value, color }: { icon: any; label: string; value: string; color?: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 text-slate-400">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <p className={`text-sm font-bold ${color || "text-slate-800"}`}>{value}</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   EDIT PROFILE MODAL
------------------------------------------------------- */

function EditProfileModal({ 
  data, 
  onClose, 
  onSave 
}: { 
  data: ProfileData; 
  onClose: () => void; 
  onSave: (newData: ProfileData) => void;
}) {
  const [formData, setFormData] = useState<ProfileData>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        <h2 className="text-2xl font-black text-slate-900 mb-8">Edit Profile Details</h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Input 
               label="Full Name" 
               name="fullName"
               value={formData.fullName} 
               onChange={handleChange}
             />
             <Input 
               label="Work Email" 
               name="email"
               value={formData.email} 
               onChange={handleChange}
             />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input 
              label="Phone Number" 
              name="phone"
              value={formData.phone} 
              onChange={handleChange}
            />
            <Input 
              label="Designation" 
              name="designation"
              value={formData.designation} 
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Department</label>
              <DepartmentSelect 
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>
            <Input 
              label="Experience (Years)" 
              name="experience"
              value={formData.experience} 
              onChange={handleChange}
            />
          </div>

          <Input 
            label="LinkedIn URL" 
            name="linkedin"
            value={formData.linkedin} 
            onChange={handleChange}
          />
          <Input 
            label="Current Location" 
            name="location"
            value={formData.location} 
            onChange={handleChange}
          />
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
  onChange,
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

function DepartmentSelect({ 
  name, 
  value, 
  onChange 
}: { 
  name: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select 
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 w-full rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-3.5 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all cursor-pointer"
    >
      <option>Human Resources</option>
      <option>Technology</option>
      <option>Operations</option>
      <option>Finance</option>
      <option>Marketing</option>
      <option>Sales</option>
    </select>
  );
}
