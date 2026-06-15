"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import Footer from "@/shared/components/layout/Footer";
import { mockCompanies } from "@/shared/data/mockData";
import { 
  Search, 
  MapPin, 
  ChevronRight, 
  Users, 
  Star,
  Building2,
  Filter,
  LayoutGrid,
  List,
  X
} from "lucide-react";

function CompaniesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || "";

  // Filter States
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [inputVal, setInputVal] = useState(initialQuery);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number>(1);
  const [location, setLocation] = useState<string>("");
  const [companySize, setCompanySize] = useState<string>("all");

  const industries = Array.from(new Set(mockCompanies.map(c => c.industry)));

  // Display Companies State
  const [filteredCompanies, setFilteredCompanies] = useState<any[]>(mockCompanies);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCompanies = filteredCompanies.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    let result = mockCompanies;

    // Search Query Filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(company => 
        company.name.toLowerCase().includes(query) || 
        company.industry.toLowerCase().includes(query) ||
        company.description.toLowerCase().includes(query)
      );
    }

    // Company Type Filter
    if (selectedTypes.length > 0) {
      result = result.filter(company => selectedTypes.includes(company.companyType));
    }

    // Industry Filter
    if (selectedIndustries.length > 0) {
      result = result.filter(company => selectedIndustries.includes(company.industry));
    }

    // Rating Filter
    result = result.filter(company => company.rating >= minRating);

    // Location Filter
    if (location) {
      result = result.filter(company => company.location.toLowerCase().includes(location.toLowerCase()));
    }

    // Company Size Filter
    if (companySize !== "all") {
      result = result.filter(company => {
        const empCount = company.employees;
        if (companySize === "small") return empCount < 10000;
        if (companySize === "medium") return empCount >= 10000 && empCount <= 50000;
        if (companySize === "large") return empCount > 50000;
        return true;
      });
    }

    setFilteredCompanies(result);
    setCurrentPage(1);
  }, [searchQuery, selectedTypes, selectedIndustries, minRating, location, companySize]);

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleIndustry = (ind: string) => {
    setSelectedIndustries(prev => 
      prev.includes(ind) ? prev.filter(i => i !== ind) : [...prev, ind]
    );
  };

  const removeFilter = (type: string, value: string) => {
    if (type === "type") setSelectedTypes(prev => prev.filter(t => t !== value));
    if (type === "industry") setSelectedIndustries(prev => prev.filter(i => i !== value));
    if (type === "location") setLocation("");
    if (type === "search") {
      setSearchQuery("");
      setInputVal("");
    }
    setCurrentPage(1);
  };

  const handleCompanyClick = (companyName: string) => {
    router.push(`/jobs/company/${encodeURIComponent(companyName)}`);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
        <button onClick={() => router.push("/")} className="hover:text-indigo-600 transition-colors font-medium">Home</button>
        <ChevronRight size={14} />
        <span className="text-slate-600 font-medium">All Companies</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDEBAR FILTERS */}
        <aside className="w-full lg:w-80 shrink-0 space-y-6">
          <div className="glass p-8 rounded-3xl border border-white/50 sticky top-32 max-h-[calc(100vh-160px)] overflow-y-auto no-scrollbar scroll-smooth">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-indigo-600" />
                <h2 className="text-xl font-semibold text-slate-800 tracking-tight">Filters</h2>
              </div>
              <button 
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setInputVal("");
                  setSelectedTypes([]);
                  setSelectedIndustries([]);
                  setMinRating(1);
                  setLocation("");
                  setCompanySize("all");
                  setFilteredCompanies(mockCompanies);
                  setCurrentPage(1);
                }}
                className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors bg-indigo-50 px-3 py-1.5 rounded-lg"
              >
                Reset
              </button>
            </div>



            {/* Company Type */}
            <div className="mb-8">
              <h3 className="text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]">Company Type</h3>
              <div className="space-y-3">
                {["Product", "Service"].map(type => (
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

            {/* Industry Filter */}
            <div className="mb-8">
              <h3 className="text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]">Industry</h3>
              <div className="grid grid-cols-1 gap-2">
                {industries.map(ind => (
                  <button
                    key={ind}
                    type="button"
                    onClick={() => toggleIndustry(ind)}
                    className={`text-left px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedIndustries.includes(ind) ? 'bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200' : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* Minimum Rating */}
            <div className="mb-8">
              <h3 className="text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]">Minimum Rating</h3>
              <input 
                type="range" 
                min="1" 
                max="5" 
                step="0.1"
                value={minRating}
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between mt-3 text-[10px] font-medium text-slate-400">
                <span>1.0 ★</span>
                <span className="text-indigo-600 font-semibold">{minRating.toFixed(1)} ★+</span>
                <span>5.0 ★</span>
              </div>
            </div>



            {/* Company Size */}
            <div className="mb-10">
              <h3 className="text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]">Company Size</h3>
              <div className="space-y-2">
                {[
                  { label: "Any size", value: "all" },
                  { label: "Small (< 10k)", value: "small" },
                  { label: "Medium (10k - 50k)", value: "medium" },
                  { label: "Large (> 50k)", value: "large" }
                ].map(option => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setCompanySize(option.value)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      companySize === option.value ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'
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
              <h1 className="text-4xl font-normal text-slate-800 tracking-tight">All <span className="text-indigo-600/70">Companies</span></h1>
              <p className="text-slate-500 mt-2 font-medium">Showing {filteredCompanies.length} compan{filteredCompanies.length !== 1 ? 'ies' : 'y'} available</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-xl border border-slate-100 flex shadow-sm">
                <button className="p-2 text-slate-400 hover:text-slate-600"><LayoutGrid size={18} /></button>
                <button className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><List size={18} /></button>
              </div>
            </div>
          </div>

          {/* Top Search Input and Locations Selector */}
          <div className="mb-8 space-y-4">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setSearchQuery(inputVal);
              }}
              className="relative w-full max-w-md flex items-center bg-white border border-slate-200/80 rounded-2xl shadow-sm p-1.5 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all"
            >
              <div className="relative flex-grow flex items-center">
                <Search className="absolute left-4 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search company or industry..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="w-full pl-11 pr-10 py-2 bg-transparent border-none outline-none text-sm font-medium text-slate-700 placeholder:text-slate-400"
                />
                {inputVal && (
                  <button 
                    onClick={() => {
                      setInputVal("");
                      setSearchQuery("");
                    }}
                    className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition"
                    type="button"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Search
              </button>
            </form>

            {/* Locations List */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Locations:</span>
              {[
                { label: "All Locations", value: "" },
                { label: "Remote", value: "Remote" },
                { label: "New York, NY", value: "New York" },
                { label: "San Francisco, CA", value: "San Francisco" },
                { label: "London, UK", value: "London" },
                { label: "Bangalore, IN", value: "Bangalore" },
                { label: "Delhi NCR", value: "Delhi" },
                { label: "Mumbai, IN", value: "Mumbai" },
                { label: "Hyderabad, IN", value: "Hyderabad" },
                { label: "Pune, IN", value: "Pune" },
                { label: "Chennai, IN", value: "Chennai" }
              ].map((loc) => {
                const isActive = (loc.value === "" && location === "") || (loc.value !== "" && location.toLowerCase().includes(loc.value.toLowerCase()));
                return (
                  <button
                    key={loc.label}
                    type="button"
                    onClick={() => {
                      if (loc.value === "") {
                        setLocation("");
                      } else {
                        const isCurrentlyActive = location.toLowerCase().includes(loc.value.toLowerCase());
                        setLocation(isCurrentlyActive ? "" : loc.value);
                      }
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100 ring-1 ring-indigo-500' 
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {loc.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filter Chips */}
          {(selectedTypes.length > 0 || selectedIndustries.length > 0 || location || searchQuery || minRating > 1 || companySize !== "all") && (
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
              {selectedIndustries.map(i => (
                <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-full ring-1 ring-slate-100">
                  {i}
                  <X size={14} className="cursor-pointer" onClick={() => removeFilter("industry", i)} />
                </span>
              ))}
              {minRating > 1 && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-full ring-1 ring-slate-100">
                  {minRating}★+
                  <X size={14} className="cursor-pointer" onClick={() => setMinRating(1)} />
                </span>
              )}
              {location && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-full ring-1 ring-slate-100">
                  {location}
                  <X size={14} className="cursor-pointer" onClick={() => removeFilter("location", "")} />
                </span>
              )}
              {companySize !== "all" && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-full ring-1 ring-slate-100">
                  Size: {companySize === "small" ? "< 10k" : companySize === "medium" ? "10k - 50k" : "> 50k"}
                  <X size={14} className="cursor-pointer" onClick={() => setCompanySize("all")} />
                </span>
              )}
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setInputVal("");
                  setSelectedTypes([]);
                  setSelectedIndustries([]);
                  setMinRating(1);
                  setLocation("");
                  setCompanySize("all");
                }}
                className="text-xs font-semibold text-red-500 hover:text-red-600 ml-2"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Companies List */}
          <div className="flex flex-col gap-4">
            {paginatedCompanies.length > 0 ? (
              paginatedCompanies.map((company) => (
                <div 
                  key={company.id} 
                  onClick={() => handleCompanyClick(company.name)}
                  className="group bg-white p-6 rounded-[2rem] border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden cursor-pointer flex flex-col md:flex-row md:items-center gap-6"
                >
                  <div className="h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center p-3 ring-1 ring-slate-100 shrink-0">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold text-indigo-600 uppercase tracking-widest">
                        {company.industry}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-200" />
                      <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
                        {company.companyType}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium text-slate-800 group-hover:text-indigo-600 transition-colors mb-2 leading-tight flex items-center gap-2">
                      {company.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-normal">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-slate-300" />
                        {company.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users size={14} className="text-slate-300" />
                        {company.stats.employees} Employees
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Star size={14} className="text-amber-400 fill-amber-400" />
                        {company.rating} ({company.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <button className="px-8 py-3 bg-slate-50 group-hover:bg-indigo-600 text-slate-500 group-hover:text-white rounded-xl font-medium text-xs uppercase tracking-widest transition-all duration-300 shrink-0">
                    {company.stats.activeJobs} Open Jobs
                  </button>
                </div>
              ))
            ) : (
              <div className="py-24 text-center bg-white border border-slate-100 rounded-[2.5rem]">
                <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                  <Building2 size={40} />
                </div>
                <h3 className="text-2xl font-medium text-slate-800 mb-2">No companies found</h3>
                <p className="text-slate-500 max-w-sm mx-auto font-normal">Try adjusting your filters to find what you&apos;re looking for.</p>
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setInputVal("");
                    setSelectedTypes([]);
                    setSelectedIndustries([]);
                    setMinRating(1);
                    setLocation("");
                    setCompanySize("all");
                    setFilteredCompanies(mockCompanies);
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

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <HomePageHeader />
      <Suspense fallback={<div className="pt-24 text-center">Loading companies...</div>}>
        <CompaniesContent />
      </Suspense>
      <Footer />
    </div>
  );
}
