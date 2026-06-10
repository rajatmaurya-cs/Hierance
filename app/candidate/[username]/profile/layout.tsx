"use client";

import { useState } from "react";
import { Save, Check } from "lucide-react";
import CandidateProfileHeader from "./components/header/CandidateProfileHeader";
import ProfileNavigation from "./components/navigation/ProfileNavigation";
import ResumeSection from "./components/sections/ResumeSection";
import SkillsSection from "./components/sections/SkillsSection";
import EducationSection from "./components/sections/EducationSection";
import EmploymentSection from "./components/sections/EmploymentSection";
import PersonalDetailsSection from "./components/sections/PersonalDetailsSection";
import ProjectsSection from "./components/sections/ProjectsSection";

export default function ProfileLayout() {
  const [activeSection, setActiveSection] = useState("resume");
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleGlobalSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1000);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "resume":
        return <ResumeSection />;
      case "skills":
        return <SkillsSection />;
      case "employment":
        return <EmploymentSection />;
      case "education":
        return <EducationSection />;
      case "projects":
        return <ProjectsSection />;
      case "details":
        return <PersonalDetailsSection />;

      default:
        return <ResumeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-4 py-10 md:px-8 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-slate-800 font-inter tracking-tight">
            Profile Settings
          </h1>
          <button
            onClick={handleGlobalSave}
            disabled={isSaving}
            className={`px-5 py-2.5 rounded-xl text-[14px] font-semibold shadow-sm transition-all font-inter flex items-center justify-center gap-2 sm:w-auto w-full ${
              saved
                ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                : "bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-400"
            }`}
          >
            {saved ? (
              <>
                <Check size={16} />
                Saved Successfully
              </>
            ) : (
              <>
                {isSaving ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Save size={16} />
                )}
                {isSaving ? "Saving..." : "Save Profile"}
              </>
            )}
          </button>
        </div>

        <div className="sticky top-[64px] z-30 bg-[#f8fafc] pb-4 -mb-4">
          <CandidateProfileHeader />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:w-56 flex-shrink-0">
            <ProfileNavigation
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl border border-slate-100/60 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] p-6 sm:p-8">
              {renderSection()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
