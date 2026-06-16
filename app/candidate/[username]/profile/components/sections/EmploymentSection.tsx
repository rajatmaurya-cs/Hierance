"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { mockCandidates } from "@/shared/data/mockData";
import { Briefcase, Plus, Trash2, MapPin, Calendar } from "lucide-react";

type Employment = {
  id: number;
  title: string;
  company: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  description?: string;
};

const EmploymentSection = () => {
  const params = useParams();
  const username = params.username as string;
  const candidate = mockCandidates.find(c => c.username === username || c._id === username) || mockCandidates[0];

  const [employments, setEmployments] = useState<Employment[]>(candidate.experience);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleAdd = () => {
    if (!form.company || !form.title) return;
    setEmployments([...employments, { id: Date.now(), ...form }]);
    setForm({ title: "", company: "", location: "", startDate: "", endDate: "", current: false, description: "" });
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    setEmployments(employments.filter((emp) => emp.id !== id));
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
            <Briefcase size={16} className="text-indigo-600" />
          </div>
          <h2 className="text-[15px] font-semibold text-slate-800 font-primary">Employment History</h2>
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
            <input name="title" placeholder="Job Title" value={form.title} onChange={handleChange}
              className="border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm" />
            <input name="company" placeholder="Company" value={form.company} onChange={handleChange}
              className="border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm" />
            <input name="location" placeholder="Location" value={form.location} onChange={handleChange}
              className="border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm" />
            <input name="startDate" type="month" value={form.startDate} onChange={handleChange}
              className="border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm" />
          </div>
          <textarea name="description" placeholder="Describe your role..." value={form.description} onChange={handleChange}
            className="w-full border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] min-h-[80px] resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm" />
          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-[13px] text-slate-600 font-primary cursor-pointer">
              <input type="checkbox" name="current" checked={form.current} onChange={handleChange} className="rounded text-indigo-600 focus:ring-indigo-500 border-slate-300" />
              Currently working here
            </label>
            <div className="flex gap-2">
              <button onClick={() => setShowForm(false)} className="px-4 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-100 rounded-lg font-primary transition-colors">Cancel</button>
              <button onClick={handleAdd} className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-[13px] font-semibold hover:bg-indigo-700 shadow-sm transition-colors font-primary">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* List */}
      {employments.length > 0 ? (
        <div className="space-y-2">
          {employments.map((emp) => (
            <div key={emp.id} className="p-4 rounded-xl border border-slate-100 bg-white shadow-[0_1px_4px_-1px_rgba(0,0,0,0.05)] hover:shadow-md transition-all group">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[15px] font-semibold text-slate-800 font-primary">{emp.title}</h3>
                  <p className="text-[14px] text-slate-600 mt-0.5 font-primary font-medium">{emp.company}</p>
                </div>
                <button onClick={() => handleDelete(emp.id)} className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all">
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-[13px] text-slate-500 font-primary">
                {emp.location && (
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-slate-400" />{emp.location}</span>
                )}
                {(emp.startDate || emp.current) && (
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-slate-400" />{emp.startDate} – {emp.current ? "Present" : (emp.endDate || "N/A")}</span>
                )}
              </div>
              {emp.description && (
                <p className="text-[14px] text-slate-600 mt-3 leading-relaxed font-primary">{emp.description}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-sm text-slate-400 font-primary">No employment history added yet.</div>
      )}
    </div>
  );
};

export default EmploymentSection;
