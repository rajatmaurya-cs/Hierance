"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { mockCandidates } from "@/shared/data/mockData";
import { GraduationCap, Plus, Trash2, MapPin, Calendar } from "lucide-react";

type Education = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  percentage: string;
};

const EducationSection = () => {
  const params = useParams();
  const username = params.username as string;
  const candidate = mockCandidates.find(c => c.username === username || c._id === username) || mockCandidates[0];

  const [educations, setEducations] = useState<Education[]>(candidate.education);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    degree: "",
    institution: "",
    location: "",
    startDate: "",
    endDate: "",
    percentage: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.degree || !form.institution) return;
    setEducations([...educations, { id: Date.now(), ...form }]);
    setForm({ degree: "", institution: "", location: "", startDate: "", endDate: "", percentage: "" });
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    setEducations(educations.filter((e) => e.id !== id));
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
            <GraduationCap size={16} className="text-indigo-600" />
          </div>
          <h2 className="text-[15px] font-semibold text-slate-800 font-primary">Education</h2>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors font-primary px-3 py-1.5 rounded-lg hover:bg-indigo-50"
        >
          <Plus size={16} />
          Add
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-slate-50/50 border border-slate-100/60 rounded-xl p-5 space-y-4 shadow-sm">
          <div className="grid grid-cols-2 gap-3">
            <input name="degree" placeholder="Degree / Course" value={form.degree} onChange={handleChange}
              className="border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm" />
            <input name="institution" placeholder="Institution" value={form.institution} onChange={handleChange}
              className="border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm" />
            <input name="location" placeholder="Location" value={form.location} onChange={handleChange}
              className="border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm" />
            <input name="percentage" placeholder="Score (e.g. 8.5 CGPA)" value={form.percentage} onChange={handleChange}
              className="border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm" />
            <input name="startDate" type="text" placeholder="Start Year" value={form.startDate} onChange={handleChange}
              className="border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm" />
            <input name="endDate" type="text" placeholder="End Year" value={form.endDate} onChange={handleChange}
              className="border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm" />
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <button onClick={() => setShowForm(false)} className="px-4 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-100 rounded-lg font-primary transition-colors">Cancel</button>
            <button onClick={handleAdd} className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-[13px] font-semibold hover:bg-indigo-700 shadow-sm transition-colors font-primary">Save</button>
          </div>
        </div>
      )}

      {/* List */}
      {educations.length > 0 ? (
        <div className="space-y-2">
          {educations.map((edu) => (
            <div key={edu.id} className="p-4 rounded-xl border border-slate-100 bg-white shadow-[0_1px_4px_-1px_rgba(0,0,0,0.05)] hover:shadow-md transition-all group">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[15px] font-semibold text-slate-800 font-primary">{edu.degree}</h3>
                  <p className="text-[14px] text-slate-600 mt-0.5 font-primary font-medium">{edu.institution}</p>
                </div>
                <button onClick={() => handleDelete(edu.id)} className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all">
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-[13px] text-slate-500 font-primary">
                {edu.location && <span className="flex items-center gap-1.5"><MapPin size={14} className="text-slate-400" />{edu.location}</span>}
                <span className="flex items-center gap-1.5"><Calendar size={14} className="text-slate-400" />{edu.startDate} – {edu.endDate}</span>
                {edu.percentage && <span className="bg-indigo-50/50 text-indigo-600 px-2.5 py-1 rounded-md font-semibold">{edu.percentage}</span>}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-sm text-slate-400 font-primary">No education added yet.</div>
      )}
    </div>
  );
};

export default EducationSection;
