"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { mockCandidates } from "@/shared/data/mockData";
import {
  FileText,
  UploadCloud,
  Trash2,
  Download,
  FileCheck,
} from "lucide-react";

const allowedTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/rtf",
];

const ResumeSection = () => {
  const params = useParams();
  const username = params.username as string;
  const candidate = mockCandidates.find(c => c.username === username || c._id === username) || mockCandidates[0];

  const [file, setFile] = useState<File | null>(null);
  const [headline, setHeadline] = useState(candidate.summary);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    if (!allowedTypes.includes(selected.type)) {
      alert("Only PDF, DOC, DOCX, RTF allowed");
      return;
    }
    if (selected.size > 5 * 1024 * 1024) {
      alert("Max file size is 5MB");
      return;
    }
    setFile(selected);
  };

  const handleDelete = () => setFile(null);

  const handleDownload = () => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Professional Summary */}
      <div>
        <div className="flex items-center gap-2.5 mb-3.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
            <FileText size={16} className="text-indigo-600" />
          </div>
          <h2 className="text-[15px] font-semibold text-slate-800 font-primary">Professional Summary</h2>
        </div>

        <textarea
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          placeholder="Write a short professional summary about yourself..."
          className="w-full min-h-[120px] bg-white border border-slate-200/80 rounded-xl p-4 text-[14px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none font-primary shadow-sm"
        />

        <div className="flex justify-between items-center mt-2">
          <p className="text-[11px] text-slate-400 font-primary">Keep it concise and impactful</p>
          <span className="text-[11px] text-slate-400 font-primary">{headline.length} chars</span>
        </div>
      </div>

      {/* Upload Resume */}
      <div>
        <div className="flex items-center gap-2.5 mb-3.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
            <UploadCloud size={16} className="text-indigo-600" />
          </div>
          <h2 className="text-[15px] font-semibold text-slate-800 font-primary">Resume</h2>
        </div>

        <div className="border-2 border-dashed border-slate-200/80 rounded-xl p-8 text-center hover:border-indigo-300 hover:bg-indigo-50/50 transition-all cursor-pointer">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="resumeUpload"
          />
          <label
            htmlFor="resumeUpload"
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <UploadCloud size={32} className="text-slate-300" />
            <p className="text-[14px] font-medium text-slate-600 font-primary mt-1">Click to upload resume</p>
            <p className="text-xs text-slate-400 font-primary">PDF, DOC, DOCX, RTF · Max 5MB</p>
          </label>
        </div>

        {/* File Preview */}
        {file && (
          <div className="mt-4 bg-white border border-slate-200/80 shadow-sm rounded-xl p-3 flex justify-between items-center">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <FileCheck size={18} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-[14px] font-medium text-slate-700 font-primary truncate max-w-[200px] sm:max-w-xs">{file.name}</p>
                <p className="text-xs text-slate-400 font-primary mt-0.5">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <div className="flex gap-1.5">
              <button onClick={handleDownload} className="p-2 rounded-lg hover:bg-slate-200 text-slate-500 transition">
                <Download size={15} />
              </button>
              <button onClick={handleDelete} className="p-2 rounded-lg hover:bg-red-50 text-red-400 hover:text-red-500 transition">
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeSection;