"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import { Job } from "@/shared/data/jobsMockData";
import { mockJobs } from "@/shared/data/mockData";
import { 
  Search, 
  MapPin, 
  Filter, 
  DollarSign,
  ChevronRight,
  LayoutGrid,
  List,
  Clock,
  X
} from "lucide-react";
import { useState, useEffect, Suspense } from "react";

function JobsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  
  // Filter States
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState<number>(30000);
  const [location, setLocation] = useState<string>("");
  const [postedDay, setPostedDay] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const categories = Array.from(new Set(mockJobs.map(j => j.category)));
  
  // Display Jobs State
  const [filteredJobs, setFilteredJobs] = useState<any[]>(mockJobs);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    let result = mockJobs;
    
    // Search Query Filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(query) || 
        job.company.toLowerCase().includes(query) ||
        job.category.toLowerCase().includes(query)
      );
    }
    
    // Job Type Filter
    if (selectedTypes.length > 0) {
      result = result.filter(job => selectedTypes.includes(job.jobType));
    }

    // Category Filter
    if (selectedCategories.length > 0) {
      result = result.filter(job => selectedCategories.includes(job.category));
    }
    
    // Salary Filter
    result = result.filter(job => job.salaryMax >= salaryRange);
    
    // Location Filter
    if (location) {
      result = result.filter(job => job.location.toLowerCase().includes(location.toLowerCase()));
    }
    
    // Posted Date Filter
    if (postedDay !== "all") {
      const now = Date.now();
      const dayInMs = 86400000;
      result = result.filter(job => {
        const posted = new Date(job.postedDate).getTime();
        const diff = now - posted;
        if (postedDay === "24h") return diff <= dayInMs;
        if (postedDay === "1w") return diff <= dayInMs * 7;
        if (postedDay === "1m") return diff <= dayInMs * 30;
        return true;
      });
    }
    
    setFilteredJobs(result);
    setCurrentPage(1);
  }, [searchQuery, selectedTypes, selectedCategories, salaryRange, location, postedDay]);


  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const removeFilter = (type: string, value: string) => {
    if (type === "type") setSelectedTypes(prev => prev.filter(t => t !== value));
    if (type === "category") setSelectedCategories(prev => prev.filter(c => c !== value));
    if (type === "location") setLocation("");
    if (type === "search") setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
        <button onClick={() => router.push("/")} className="hover:text-indigo-600 transition-colors">Home</button>
        <ChevronRight size={14} />
        <span className="text-slate-600 font-medium">All Jobs</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDEBAR FILTERS */}
        <aside className="w-full lg:w-80 shrink-0 space-y-6">
          <div 
            className="glass p-8 rounded-3xl border border-white/50 sticky top-32 max-h-[calc(100vh-160px)] overflow-y-auto no-scrollbar scroll-smooth"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-indigo-600" />
                <h2 className="text-xl font-semibold text-slate-800 tracking-tight">Filters</h2>
              </div>
              <button 
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTypes([]);
                  setSalaryRange(30000);
                  setLocation("");
                  setPostedDay("all");
                  setFilteredJobs(mockJobs);
                  setCurrentPage(1);
                }}
                className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors bg-indigo-50 px-3 py-1.5 rounded-lg"
              >
                Reset
              </button>
            </div>

            {/* Keyword Search */}
            <div className="mb-8">
              <h3 className="text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]">Keywords</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Job title or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            {/* Job Type */}
            <div className="mb-8">
              <h3 className="text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]">Job Type</h3>
              <div className="space-y-3">
                {["Full-time", "Remote", "Internship", "Contract"].map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <div 
                      onClick={() => toggleType(type)}
                      className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${
                        selectedTypes.includes(type) ? 'bg-indigo-600 border-indigo-600' : 'border-slate-200 group-hover:border-indigo-400'
                      }`}
                    >
                      {selectedTypes.includes(type) && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span className={`text-sm font-medium transition-colors ${selectedTypes.includes(type) ? 'text-slate-900' : 'text-slate-500 group-hover:text-indigo-600'}`}>
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]">Category</h3>
              <div className="grid grid-cols-1 gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategory(cat)}
                    className={`text-left px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedCategories.includes(cat) ? 'bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200' : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Salary Range */}
            <div className="mb-8">
              <h3 className="text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]">Salary Range</h3>
              <input 
                type="range" 
                min="30000" 
                max="250000" 
                step="5000"
                value={salaryRange}
                onChange={(e) => setSalaryRange(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between mt-3 text-[10px] font-medium text-slate-400">
                <span>$30k</span>
                <span className="text-indigo-600 font-semibold">${(salaryRange/1000).toFixed(0)}k+</span>
                <span>$250k</span>
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <h3 className="text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]">Location</h3>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search location..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Posted Date */}
            <div className="mb-10">
              <h3 className="text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]">Job Posted Day</h3>
              <div className="space-y-2">
                {[
                  { label: "Anytime", value: "all" },
                  { label: "Last 24 hours", value: "24h" },
                  { label: "Last week", value: "1w" },
                  { label: "Last month", value: "1m" }
                ].map(option => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setPostedDay(option.value)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      postedDay === option.value ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN RESULTS AREA */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl font-normal text-slate-800 tracking-tight">All <span className="text-indigo-600/70">Jobs</span></h1>
              <p className="text-slate-500 mt-2 font-medium">Showing {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} available</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-xl border border-slate-100 flex shadow-sm">
                <button className="p-2 text-slate-400 hover:text-slate-600"><LayoutGrid size={18} /></button>
                <button className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><List size={18} /></button>
              </div>
            </div>
          </div>

          {/* Active Filter Chips */}
          {(selectedTypes.length > 0 || selectedCategories.length > 0 || location || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {searchQuery && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-full ring-1 ring-indigo-100">
                  "{searchQuery}"
                  <X size={14} className="cursor-pointer" onClick={() => removeFilter("search", "")} />
                </span>
              )}
              {selectedTypes.map(t => (
                <span key={t} className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-full ring-1 ring-slate-100">
                  {t}
                  <X size={14} className="cursor-pointer" onClick={() => removeFilter("type", t)} />
                </span>
              ))}
              {selectedCategories.map(c => (
                <span key={c} className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-full ring-1 ring-slate-100">
                  {c}
                  <X size={14} className="cursor-pointer" onClick={() => removeFilter("category", c)} />
                </span>
              ))}
              {location && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-full ring-1 ring-slate-100">
                  {location}
                  <X size={14} className="cursor-pointer" onClick={() => removeFilter("location", "")} />
                </span>
              )}
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTypes([]);
                  setSelectedCategories([]);
                  setLocation("");
                  setPostedDay("all");
                }}
                className="text-xs font-semibold text-red-500 hover:text-red-600 ml-2"
              >
                Clear All
              </button>
            </div>
          )}

          <div className="flex flex-col gap-4">
            {paginatedJobs.length > 0 ? (
              paginatedJobs.map((job) => (
                <div 
                  key={job.id} 
                  onClick={() => router.push(`/jobs/${job.id}`)}
                  className="group bg-white p-6 rounded-[2rem] border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden cursor-pointer flex flex-col md:flex-row md:items-center gap-6"
                >
                  <div className="h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center p-3 ring-1 ring-slate-100 shrink-0">
                    <img
                      src={job.companyLogo}
                      alt={job.company}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold text-indigo-600 uppercase tracking-widest">
                        {job.company}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-200" />
                      <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
                        {job.jobType}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium text-slate-800 group-hover:text-indigo-600 transition-colors mb-2 leading-tight">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-normal">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-slate-300" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <DollarSign size={14} className="text-slate-300" />
                        {job.salary}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-slate-300" />
                        {new Date(job.postedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <button className="px-8 py-3 bg-slate-50 group-hover:bg-indigo-600 text-slate-500 group-hover:text-white rounded-xl font-medium text-xs uppercase tracking-widest transition-all duration-300 shrink-0">
                    View Details
                  </button>
                </div>
              ))
            ) : (
              <div className="py-24 text-center bg-white border border-slate-100 rounded-[2.5rem]">
                <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                  <Clock size={40} />
                </div>
                <h3 className="text-2xl font-medium text-slate-800 mb-2">No jobs found</h3>
                <p className="text-slate-500 max-w-sm mx-auto font-normal">Try adjusting your filters to find what you&apos;re looking for.</p>
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTypes([]);
                    setSalaryRange(30000);
                    setLocation("");
                    setPostedDay("all");
                    setFilteredJobs(mockJobs);
                    setCurrentPage(1);
                  }}
                  className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-full font-medium shadow-lg shadow-indigo-100"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-6 py-2.5 bg-white border border-slate-100 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-30 transition-all"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-xl text-sm font-medium transition-all ${
                      currentPage === i + 1
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100"
                        : "bg-white border border-slate-100 text-slate-400 hover:bg-slate-50"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-6 py-2.5 bg-white border border-slate-100 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-30 transition-all"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <HomePageHeader />
      <Suspense fallback={<div className="pt-24 text-center">Loading jobs...</div>}>
        <JobsContent />
      </Suspense>
    </div>
  );
}
