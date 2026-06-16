"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { mockCandidates } from "@/shared/data/mockData";
import { Plus, Trash2, Code2 } from "lucide-react";

type Skill = {
  id: string | number;
  name: string;
  level?: "Beginner" | "Intermediate" | "Expert";
};

const SkillsSection = () => {
  const params = useParams();
  const username = params.username as string;
  const candidate = mockCandidates.find(c => c.username === username || c._id === username) || mockCandidates[0];

  const [skills, setSkills] = useState<Skill[]>(candidate.skills);
  const [skillName, setSkillName] = useState("");
  const [level, setLevel] = useState<"Beginner" | "Intermediate" | "Expert">("Intermediate");

  const handleAddSkill = () => {
    if (!skillName.trim()) return;
    const newSkill: Skill = { id: Date.now(), name: skillName.trim(), level };
    setSkills([...skills, newSkill]);
    setSkillName("");
  };

  const handleDelete = (id: string | number) => {
    setSkills(skills.filter((s) => s.id !== id));
  };

  const levelColor = (l?: string) => {
    if (l === "Expert") return "bg-emerald-50 text-emerald-600";
    if (l === "Intermediate") return "bg-blue-50 text-blue-600";
    if (l === "Beginner") return "bg-slate-100 text-slate-500";
    return "bg-slate-50 text-slate-400";
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2.5 mb-3.5">
        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
          <Code2 size={16} className="text-indigo-600" />
        </div>
        <h2 className="text-[15px] font-semibold text-slate-800 font-primary">Key Skills</h2>
      </div>

      {/* Add Skill */}
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Skill name (e.g. React)"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
          className="flex-1 border border-slate-200/80 rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm"
        />
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value as "Beginner" | "Intermediate" | "Expert")}
          className="border border-slate-200/80 rounded-xl px-4 py-2.5 text-[14px] text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-primary bg-white shadow-sm"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
        <button
          onClick={handleAddSkill}
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-[14px] font-semibold hover:bg-indigo-700 shadow-sm transition-colors font-primary flex items-center gap-1.5"
        >
          <Plus size={16} />
          Add
        </button>
      </div>

      {/* Skills List */}
      {skills.length > 0 ? (
        <div className="space-y-2.5">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-white shadow-[0_1px_4px_-1px_rgba(0,0,0,0.05)] hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <span className="text-[15px] font-semibold text-slate-800 font-primary">{skill.name}</span>
                {skill.level && (
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider ${levelColor(skill.level)} font-primary`}>
                    {skill.level}
                  </span>
                )}
              </div>
              <button
                onClick={() => handleDelete(skill.id)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-sm text-slate-400 font-primary">
          No skills added yet. Add your first skill above.
        </div>
      )}
    </div>
  );
};

export default SkillsSection;
