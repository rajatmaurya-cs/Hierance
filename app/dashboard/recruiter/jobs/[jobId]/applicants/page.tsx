"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JobApplicantCard from "./components/JobApplicantCard";
import JobApplicantsShimmer from "./components/JobApplicantCardSkeleton";
import { MOCK_APPLICANTS } from "../../mockData";
import { Search, Filter, Users, UserCheck, UserX, UserPlus, SlidersHorizontal, Zap, RotateCcw, ChevronDown, X, Sparkles } from "lucide-react";

import React from "react";

export default function JobApplicantsPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = React.use(params);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [roleFilter, setRoleFilter] = useState("All");
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const resetFilters = () => {
    setSearchTerm("");
    setStatusFilter("All");
    setRoleFilter("All");
  };

  const stats = useMemo(() => {
    return {
      total: MOCK_APPLICANTS.length,
      new: MOCK_APPLICANTS.filter(a => a.status === "New").length,
      shortlisted: MOCK_APPLICANTS.filter(a => a.status === "Shortlisted").length,
      interviewed: MOCK_APPLICANTS.filter(a => a.status === "Interviewed").length,
      rejected: MOCK_APPLICANTS.filter(a => a.status === "Rejected").length,
    };
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const APPLICANTS_PER_PAGE = 5;

  const filteredApplicants = useMemo(() => {
    setCurrentPage(1); // Reset to page 1 on filter change
    return MOCK_APPLICANTS.filter(app => {
      const matchesSearch = 
        app.applicantFullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.currentJobPosition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStatus = statusFilter === "All" || app.status === statusFilter;
      
      const matchesRole = roleFilter === "All" || 
        app.currentJobPosition.toLowerCase().includes(roleFilter.toLowerCase());

      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [searchTerm, statusFilter, roleFilter]);

  const totalPages = Math.ceil(filteredApplicants.length / APPLICANTS_PER_PAGE);
  const indexOfLastApplicant = currentPage * APPLICANTS_PER_PAGE;
  const indexOfFirstApplicant = indexOfLastApplicant - APPLICANTS_PER_PAGE;
  const currentApplicants = filteredApplicants.slice(indexOfFirstApplicant, indexOfLastApplicant);

  const roleCategories = ["All", "Frontend", "Backend", "DevOps", "Data Science", "UI/UX"];
  const statusOptions = ["All", "New", "Shortlisted", "Interviewed", "Rejected"];

  const activeFiltersCount = (statusFilter !== "All" ? 1 : 0) + (roleFilter !== "All" ? 1 : 0);

  return (
    <section className="space-y-10 pb-20 max-w-7xl mx-auto px-4 md:px-0 font-primary">
      {/* ================= Header ================= */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100">
              <Sparkles size={18} className="text-indigo-600" strokeWidth={2.5} />
            </div>
            <span className="text-[11px] font-semibold text-indigo-600 uppercase tracking-[0.15em] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Applicant Tracking
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-1.5">
            Candidates List
          </h1>
          <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
            Review and manage candidates in your hiring pipeline for this position.
          </p>
        </div>
      </div>

      {/* ================= Analytics Header ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: "Total Candidates", value: stats.total, icon: Users, gradient: "from-indigo-500 to-indigo-700", shadow: "shadow-indigo-200/60", accent: "text-indigo-600" },
          { label: "Shortlisted", value: stats.shortlisted, icon: UserPlus, gradient: "from-emerald-500 to-teal-600", shadow: "shadow-emerald-200/60", accent: "text-emerald-600" },
          { label: "Interviewed", value: stats.interviewed, icon: UserCheck, gradient: "from-purple-500 to-violet-600", shadow: "shadow-purple-200/60", accent: "text-purple-600" },
          { label: "Rejected", value: stats.rejected, icon: UserX, gradient: "from-rose-500 to-pink-600", shadow: "shadow-rose-200/60", accent: "text-rose-600" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass rounded-2xl p-5 border border-white/30 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg ${stat.shadow} group-hover:scale-105 transition-transform duration-300`}>
                <stat.icon size={20} strokeWidth={2} />
              </div>
              <div>
                <p className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${stat.accent} opacity-70 mb-0.5`}>{stat.label}</p>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">{stat.value}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= Search & Filters ================= */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 relative">
        {/* Search */}
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} strokeWidth={2} />
          <input 
            type="text" 
            placeholder="Search by name, skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-6 py-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all text-[14px] font-medium text-slate-700 placeholder:text-slate-400"
          />
        </div>

        {/* Custom Filters Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
            className={`flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white border shadow-sm font-semibold text-[14px] transition-all ${isAdvancedOpen || activeFiltersCount > 0 ? 'text-indigo-600 border-indigo-200 bg-indigo-50/50' : 'text-slate-600 border-slate-200/80 hover:bg-slate-50'}`}
          >
            <Filter size={17} strokeWidth={2} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="flex items-center justify-center w-5 h-5 ml-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">
                {activeFiltersCount}
              </span>
            )}
            <ChevronDown size={14} strokeWidth={2.5} className={`transition-transform duration-300 ml-0.5 ${isAdvancedOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isAdvancedOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsAdvancedOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 top-full mt-2 w-72 bg-white rounded-3xl shadow-2xl border border-slate-100 p-5 z-50 overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[13px] font-bold text-slate-900">Filter Applicants</h3>
                    {activeFiltersCount > 0 && (
                      <button onClick={resetFilters} className="text-[11px] font-semibold text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1">
                        <X size={12} strokeWidth={2.5} />
                        Clear all
                      </button>
                    )}
                  </div>

                  <div className="space-y-6">
                    {/* Job Role Section */}
                    <div>
                      <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.12em] mb-3 block">Candidate Role</label>
                      <div className="flex flex-wrap gap-2">
                        {roleCategories.map(role => (
                          <button
                            key={role}
                            onClick={() => setRoleFilter(role)}
                            className={`px-3 py-1.5 rounded-xl text-[12px] font-semibold transition-all ${roleFilter === role ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                          >
                            {role}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Status Section */}
                    <div>
                      <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.12em] mb-3 block">Hiring Stage</label>
                      <div className="flex flex-wrap gap-2">
                        {statusOptions.map(status => (
                          <button
                            key={status}
                            onClick={() => setStatusFilter(status)}
                            className={`px-3 py-1.5 rounded-xl text-[12px] font-semibold transition-all ${statusFilter === status ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsAdvancedOpen(false)}
                    className="w-full mt-6 py-2.5 rounded-xl bg-slate-900 text-white text-[12px] font-bold hover:bg-slate-800 transition-colors"
                  >
                    Apply Filters
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ================= Applicants List ================= */}
      <div className="space-y-5 pb-10">
        <AnimatePresence mode="popLayout">
          {!MOCK_APPLICANTS.length ? (
            <JobApplicantsShimmer />
          ) : currentApplicants.length > 0 ? (
            <>
              {currentApplicants.map((applicant, idx) => (
                <JobApplicantCard
                  key={applicant.applicantId}
                  jobId={jobId}
                  {...applicant}
                />
              ))}

              {/* PAGINATION UI */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-10">
                  <p className="text-[13px] font-medium text-slate-500">
                    Showing <span className="font-bold text-slate-900">{indexOfFirstApplicant + 1}</span> to <span className="font-bold text-slate-900">{Math.min(indexOfLastApplicant, filteredApplicants.length)}</span> of <span className="font-bold text-slate-900">{filteredApplicants.length}</span> candidates
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => {
                        setCurrentPage(prev => Math.max(prev - 1, 1));
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-2 rounded-xl border border-slate-200 text-[13px] font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Previous
                    </button>
                    
                    <div className="flex items-center gap-1">
                      {[...Array(totalPages)].map((_, idx) => (
                        <button
                          key={idx + 1}
                          onClick={() => {
                            setCurrentPage(idx + 1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`w-10 h-10 rounded-xl text-[13px] font-bold transition-all ${currentPage === idx + 1 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => {
                        setCurrentPage(prev => Math.min(prev + 1, totalPages));
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-2 rounded-xl border border-slate-200 text-[13px] font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 glass rounded-[2.5rem] border border-dashed border-slate-200"
            >
              <div className="p-6 bg-slate-50 w-fit mx-auto rounded-full mb-6">
                <Search size={40} className="text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No results found</h3>
              <p className="text-slate-500 font-medium">Try adjusting your search or filters to find what you're looking for.</p>
              <button 
                onClick={resetFilters}
                className="mt-6 px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-[13px] hover:bg-indigo-700 transition-all"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
