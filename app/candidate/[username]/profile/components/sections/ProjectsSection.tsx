"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { mockCandidates } from "@/shared/data/mockData";
import { Upload, Plus, Trash2, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  link?: string;
  technologies: string[];
};

const ProjectsSection = () => {
  const params = useParams();
  const username = params.username as string;
  const candidate = mockCandidates.find(c => c.username === username || c._id === username) || mockCandidates[0];

  const [projects, setProjects] = useState<Project[]>(candidate.projects);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
    technologies: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.title) return;
    setProjects([
      ...projects,
      {
        id: Date.now(),
        title: form.title,
        description: form.description,
        link: form.link || undefined,
        technologies: form.technologies.split(",").map((t) => t.trim()).filter(Boolean),
      },
    ]);
    setForm({ title: "", description: "", link: "", technologies: "" });
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
            <Upload size={16} className="text-indigo-600" />
          </div>
          <h2 className="text-[15px] font-semibold text-slate-800 font-inter">Projects</h2>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors font-inter px-3 py-1.5 rounded-lg hover:bg-indigo-50"
        >
          <Plus size={16} />
          Add
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-slate-50/50 border border-slate-100/60 rounded-xl p-5 space-y-4 shadow-sm">
          <div className="grid grid-cols-2 gap-3">
            <input name="title" placeholder="Project Title" value={form.title} onChange={handleChange}
              className="border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-inter bg-white shadow-sm" />
            <input name="link" placeholder="Project URL (optional)" value={form.link} onChange={handleChange}
              className="border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-inter bg-white shadow-sm" />
          </div>
          <textarea name="description" placeholder="Describe the project..." value={form.description} onChange={handleChange}
            className="w-full border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] min-h-[80px] resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-inter bg-white shadow-sm" />
          <input name="technologies" placeholder="Technologies (comma separated)" value={form.technologies} onChange={handleChange}
            className="w-full border border-slate-200/80 rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-inter bg-white shadow-sm" />
          <div className="flex justify-end gap-2 mt-2">
            <button onClick={() => setShowForm(false)} className="px-4 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-100 rounded-lg font-inter transition-colors">Cancel</button>
            <button onClick={handleAdd} className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-[13px] font-semibold hover:bg-indigo-700 shadow-sm transition-colors font-inter">Save</button>
          </div>
        </div>
      )}

      {/* List */}
      {projects.length > 0 ? (
        <div className="space-y-2">
          {projects.map((project) => (
            <div key={project.id} className="p-4 rounded-xl border border-slate-100 bg-white shadow-[0_1px_4px_-1px_rgba(0,0,0,0.05)] hover:shadow-md transition-all group">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-[15px] font-semibold text-slate-800 font-inter">{project.title}</h3>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-600 bg-indigo-50 hover:bg-indigo-100 p-1.5 rounded-md transition-colors">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  {project.description && (
                    <p className="text-[14px] text-slate-600 mt-2 leading-relaxed font-inter">{project.description}</p>
                  )}
                </div>
                <button onClick={() => handleDelete(project.id)} className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0">
                  <Trash2 size={16} />
                </button>
              </div>
              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3.5">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-inter tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-sm text-slate-400 font-inter">No projects added yet.</div>
      )}
    </div>
  );
};

export default ProjectsSection;