"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { mockCandidates } from "@/shared/data/mockData";
import {
  User,
  Calendar,
  Heart,
  Globe,
  MapPin,
  Languages,
  Pencil,
  Save,
  X,
  Plus,
  Trash2,
} from "lucide-react";

type Language = {
  id: number;
  name: string;
  read: boolean;
  write: boolean;
  speak: boolean;
};

export default function PersonalDetailsSection() {
  const params = useParams();
  const username = params.username as string;
  const candidate = mockCandidates.find(c => c.username === username || c._id === username) || mockCandidates[0];

  const [editMode, setEditMode] = useState(false);
  const [details, setDetails] = useState(candidate.personalDetails);
  const [tempDetails, setTempDetails] = useState(details);
  const [languages, setLanguages] = useState<Language[]>(candidate.languages);
  const [tempLanguages, setTempLanguages] = useState<Language[]>(languages);

  const calculateAge = (dob: string) => {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const today = new Date();
    return today.getFullYear() - birthDate.getFullYear();
  };

  const handleEdit = () => {
    setTempDetails(details);
    setTempLanguages(languages);
    setEditMode(true);
  };

  const handleSave = () => {
    setDetails(tempDetails);
    setLanguages(tempLanguages);
    setEditMode(false);
  };

  const handleCancel = () => {
    setTempDetails(details);
    setTempLanguages(languages);
    setEditMode(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
            <User size={16} className="text-indigo-600" />
          </div>
          <h2 className="text-[15px] font-semibold text-slate-800 font-primary">Personal Details</h2>
        </div>

        {!editMode ? (
          <button
            onClick={handleEdit}
            className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors font-primary"
          >
            <Pencil size={14} />
            Edit
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-100 rounded-lg font-primary transition-colors flex items-center gap-1.5"
            >
              <X size={16} />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-[13px] font-semibold hover:bg-indigo-700 shadow-sm transition-colors font-primary flex items-center gap-1.5"
            >
              <Save size={16} />
              Save
            </button>
          </div>
        )}
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Field icon={<User size={14} />} label="Gender">
          {editMode ? (
            <select
              className="w-full border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm"
              value={tempDetails.gender}
              onChange={(e) => setTempDetails({ ...tempDetails, gender: e.target.value })}
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          ) : (
            <Display value={details.gender} />
          )}
        </Field>

        <Field icon={<Calendar size={14} />} label="Date of Birth">
          {editMode ? (
            <input
              type="date"
              className="w-full border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm"
              value={tempDetails.dob}
              onChange={(e) => setTempDetails({ ...tempDetails, dob: e.target.value })}
            />
          ) : (
            <Display value={details.dob} />
          )}
        </Field>

        <Field label="Age">
          <Display value={calculateAge(details.dob)} />
        </Field>

        <Field icon={<Heart size={14} />} label="Marital Status">
          {editMode ? (
            <select
              className="w-full border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm"
              value={tempDetails.maritalStatus}
              onChange={(e) => setTempDetails({ ...tempDetails, maritalStatus: e.target.value })}
            >
              <option value="">Select</option>
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
            </select>
          ) : (
            <Display value={details.maritalStatus} />
          )}
        </Field>

        <Field icon={<Globe size={14} />} label="Nationality">
          {editMode ? (
            <input
              className="w-full border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm"
              value={tempDetails.nationality}
              onChange={(e) => setTempDetails({ ...tempDetails, nationality: e.target.value })}
            />
          ) : (
            <Display value={details.nationality} />
          )}
        </Field>

        <Field icon={<MapPin size={14} />} label="Location">
          <Display value={`${details.city}, ${details.state}`} />
        </Field>
      </div>

      {/* Languages */}
      <div className="pt-6 border-t border-slate-100/60 mt-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
              <Languages size={16} className="text-indigo-600" />
            </div>
            <h3 className="text-[15px] font-semibold text-slate-800 font-primary">Languages</h3>
          </div>

          {editMode && (
            <button
              onClick={() =>
                setTempLanguages([
                  ...tempLanguages,
                  { id: Date.now(), name: "", read: false, write: false, speak: false },
                ])
              }
              className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 font-primary px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              <Plus size={16} />
              Add
            </button>
          )}
        </div>

        <div className="space-y-1.5">
          {(editMode ? tempLanguages : languages).map((lang) => (
            <div
              key={lang.id}
              className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-white shadow-[0_1px_4px_-1px_rgba(0,0,0,0.05)]"
            >
              {editMode ? (
                <>
                  <input
                    className="border border-slate-200/80 rounded-lg px-3.5 py-2 text-[14px] w-40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm font-primary"
                    placeholder="Language"
                    value={lang.name}
                    onChange={(e) =>
                      setTempLanguages(
                        tempLanguages.map((l) =>
                          l.id === lang.id ? { ...l, name: e.target.value } : l,
                        ),
                      )
                    }
                  />
                  <div className="flex gap-4 text-[13px] font-primary">
                    {(["read", "write", "speak"] as const).map((skill) => (
                      <label key={skill} className="flex items-center gap-1.5 capitalize text-slate-600 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={(lang as any)[skill]}
                          onChange={(e) =>
                            setTempLanguages(
                              tempLanguages.map((l) =>
                                l.id === lang.id ? { ...l, [skill]: e.target.checked } : l,
                              ),
                            )
                          }
                          className="rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                        />
                        {skill}
                      </label>
                    ))}
                  </div>
                  <button
                    onClick={() => setTempLanguages(tempLanguages.filter((l) => l.id !== lang.id))}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </>
              ) : (
                <div className="flex justify-between w-full items-center">
                  <span className="text-[15px] font-semibold text-slate-800 font-primary">{lang.name}</span>
                  <span className="text-[13px] text-slate-500 font-medium font-primary">
                    {[lang.read && "Read", lang.write && "Write", lang.speak && "Speak"].filter(Boolean).join(" · ")}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
  icon,
}: {
  label: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-500 uppercase tracking-wider font-primary">
        {icon && <span className="text-slate-400">{icon}</span>}
        {label}
      </label>
      {children}
    </div>
  );
}

function Display({ value }: { value: any }) {
  return (
    <p className="text-[15px] font-medium text-slate-800 font-primary">
      {value || <span className="text-slate-300 italic font-normal">Not specified</span>}
    </p>
  );
}
