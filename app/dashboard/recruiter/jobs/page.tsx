"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Search, Filter, BarChart3, Briefcase, CheckCircle2, Clock, ChevronDown, X, TrendingUp, Users, Sparkles } from "lucide-react";
import JobCard from "./components/JobCard";
import { MOCK_JOBS, MOCK_APPLICANTS } from "./mockData";
import { motion, AnimatePresence } from "framer-motion";

const JobsPage = () => {
  const router = useRouter();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const [roleFilter, setRoleFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");

  const [allJobs, setAllJobs] = useState(MOCK_JOBS);

  useEffect(() => {
    // Load session jobs
    const sessionJobsRaw = sessionStorage.getItem("recruiter_jobs_session");
    if (sessionJobsRaw) {
      const sessionJobs = JSON.parse(sessionJobsRaw);
      setAllJobs([...sessionJobs, ...MOCK_JOBS]);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const JOBS_PER_PAGE = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, roleFilter, locationFilter]);

  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "All" || job.jobTitle.startsWith(roleFilter);
    const matchesLocation = locationFilter === "All" || job.location === locationFilter;
    
    return matchesSearch && matchesRole && matchesLocation;
  });

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const indexOfLastJob = currentPage * JOBS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const activeFiltersCount = (roleFilter !== "All" ? 1 : 0) + (locationFilter !== "All" ? 1 : 0);

  const clearFilters = () => {
    setRoleFilter("All");
    setLocationFilter("All");
    setIsFilterOpen(false);
  };

  const handleStatusChange = (id: string | number, newStatus: string) => {
    // 1. Update State
    const updatedJobs = allJobs.map(job => 
      job.jobId === id ? { ...job, status: newStatus } : job
    );
    setAllJobs(updatedJobs);

    // 2. Update Session Storage
    const sessionJobsRaw = sessionStorage.getItem("recruiter_jobs_session");
    if (sessionJobsRaw) {
      const sessionJobs = JSON.parse(sessionJobsRaw);
      const updatedSessionJobs = sessionJobs.map((job: any) => 
        job.jobId === id ? { ...job, status: newStatus } : job
      );
      sessionStorage.setItem("recruiter_jobs_session", JSON.stringify(updatedSessionJobs));
    }
  };

  const handleDelete = (id: string | number) => {
    // 1. Update State
    setAllJobs(prev => prev.filter(job => job.jobId !== id));

    // 2. Update Session Storage
    const sessionJobsRaw = sessionStorage.getItem("recruiter_jobs_session");
    if (sessionJobsRaw) {
      const sessionJobs = JSON.parse(sessionJobsRaw);
      const updatedSessionJobs = sessionJobs.filter((job: any) => job.jobId !== id);
      sessionStorage.setItem("recruiter_jobs_session", JSON.stringify(updatedSessionJobs));
    }
  };

  return (
    <section className="w-full h-full flex flex-col space-y-8 py-8 px-4 md:px-10 max-w-7xl mx-auto">
      {/* ================= Heading & Stats ================= */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100">
              <Sparkles size={18} className="text-indigo-600" strokeWidth={2.5} />
            </div>
            <span className="text-[11px] font-semibold text-indigo-600 uppercase tracking-[0.15em] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Hiring Pipeline
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-1.5">
            Job Openings
          </h1>
          <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
            Manage your hiring pipeline and track applicant activity in real-time.
          </p>
        </div>

        <button
          onClick={() => router.push("/dashboard/recruiter/jobs/new")}
          className="group flex items-center justify-center gap-2.5 rounded-2xl bg-indigo-600 px-8 py-3.5 text-[13px] font-bold text-white shadow-lg shadow-indigo-200/60 hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-200/80 transition-all duration-300 w-full lg:w-auto shrink-0"
        >
          <Plus size={17} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-300" />
          Post New Opening
        </button>
      </div>

      {/* STATS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        <StatsCard 
          icon={<Briefcase size={20} strokeWidth={2} />} 
          label="Total Openings" 
          value={allJobs.length.toString()} 
          gradient="from-indigo-500 to-indigo-700" 
          shadowColor="shadow-indigo-200/60"
          accentText="text-indigo-600"
        />
        <StatsCard 
          icon={<CheckCircle2 size={20} strokeWidth={2} />} 
          label="Active Jobs" 
          value={allJobs.filter(j => j.status === 'Open').length.toString()} 
          gradient="from-emerald-500 to-teal-600" 
          shadowColor="shadow-emerald-200/60"
          accentText="text-emerald-600"
        />
        <StatsCard 
          icon={<Clock size={20} strokeWidth={2} />} 
          label="Closed Jobs" 
          value={allJobs.filter(j => j.status === 'Closed').length.toString()} 
          gradient="from-slate-400 to-slate-600" 
          shadowColor="shadow-slate-200/60"
          accentText="text-slate-500"
        />
        <StatsCard 
          icon={<Users size={20} strokeWidth={2} />} 
          label="Total Applicants" 
          value={MOCK_APPLICANTS.length.toString()} 
          gradient="from-violet-500 to-purple-600" 
          shadowColor="shadow-purple-200/60"
          accentText="text-violet-600"
        />
      </div>

      {/* FILTERS & SEARCH */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 relative">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} strokeWidth={2} />
          <input 
            type="text" 
            placeholder="Search by job title, location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-6 py-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all text-[14px] font-medium text-slate-700 placeholder:text-slate-400 placeholder:font-normal"
          />
        </div>
        
        <div className="relative shrink-0" ref={filterRef}>
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white border shadow-sm font-semibold text-[14px] transition-all ${isFilterOpen || activeFiltersCount > 0 ? 'text-indigo-600 border-indigo-200 bg-indigo-50/50' : 'text-slate-600 border-slate-200/80 hover:bg-slate-50'}`}
          >
            <Filter size={17} strokeWidth={2} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="flex items-center justify-center w-5 h-5 ml-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">
                {activeFiltersCount}
              </span>
            )}
            <ChevronDown size={14} strokeWidth={2.5} className={`transition-transform duration-300 ml-0.5 ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* FILTER DROPDOWN */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 top-full mt-2 w-72 bg-white rounded-3xl shadow-2xl border border-slate-100 p-5 z-50 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[13px] font-bold text-slate-900">Filter Jobs</h3>
                  {activeFiltersCount > 0 && (
                    <button onClick={clearFilters} className="text-[11px] font-semibold text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1">
                      <X size={12} strokeWidth={2.5} />
                      Clear all
                    </button>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Role Filter */}
                  <div>
                    <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.12em] mb-3 block">Job Role</label>
                    <div className="flex flex-wrap gap-2">
                      {["All", "Senior Frontend Engineer", "DevOps Specialist", "FullStack AI Engineer", "Machine Learning Trainer", "Backend Developer", "Product Manager", "UI/UX Designer", "Data Scientist"].map((role) => (
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

                  {/* Location Filter */}
                  <div>
                    <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.12em] mb-3 block">Location</label>
                    <div className="flex flex-wrap gap-2">
                      {["All", "Remote", "Jaipur, India", "Bangalore, India", "New York, USA", "London, UK"].map((loc) => (
                        <button
                          key={loc}
                          onClick={() => setLocationFilter(loc)}
                          className={`px-3 py-1.5 rounded-xl text-[12px] font-semibold transition-all ${locationFilter === loc ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full mt-6 py-2.5 rounded-xl bg-slate-900 text-white text-[12px] font-bold hover:bg-slate-800 transition-colors"
                >
                  Apply Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ================= Job List ================= */}
      <div className="space-y-5 pb-10">
        {currentJobs.length > 0 ? (
          <>
            {currentJobs.map((job) => (
              <JobCard
                key={job.jobId}
                {...job}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
              />
            ))}

            {/* PAGINATION UI */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                <p className="text-[13px] font-medium text-slate-500">
                  Showing <span className="font-bold text-slate-900">{indexOfFirstJob + 1}</span> to <span className="font-bold text-slate-900">{Math.min(indexOfLastJob, filteredJobs.length)}</span> of <span className="font-bold text-slate-900">{filteredJobs.length}</span> openings
                </p>

                <div className="flex items-center gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-[13px] font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Previous
                  </button>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(totalPages)].map((_, idx) => (
                      <button
                        key={idx + 1}
                        onClick={() => setCurrentPage(idx + 1)}
                        className={`w-10 h-10 rounded-xl text-[13px] font-bold transition-all ${currentPage === idx + 1 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-500 hover:bg-slate-50'}`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-[13px] font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 glass rounded-[2rem]">
            <p className="text-slate-500 text-[15px] font-semibold">No jobs found matching your filters.</p>
            {(searchTerm !== "" || roleFilter !== "All" || locationFilter !== "All") && (
              <button 
                onClick={() => {
                  setSearchTerm("");
                  clearFilters();
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-indigo-50 text-indigo-600 text-[13px] font-semibold hover:bg-indigo-100 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>
    </section>

  );
};

function StatsCard({ icon, label, value, gradient, shadowColor, accentText }: { icon: any; label: string; value: string; gradient: string; shadowColor: string; accentText: string }) {
  return (
    <div className="glass rounded-2xl p-5 border border-white/30 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md duration-300 group">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg ${shadowColor} group-hover:scale-105 transition-transform duration-300`}>
          {icon}
        </div>
        <div>
          <p className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${accentText} opacity-70 mb-0.5`}>{label}</p>
          <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">{value}</h4>
        </div>
      </div>
    </div>
  );
}

export default JobsPage;
