"use client";

import { useState, useMemo } from "react";
import JobsFilterBar from "./components/JobsFilterBar";
import JobsGrid from "./components/JobsGrid";

interface Job {
  id: string;
  title: string;
  companyName: string;
  companyLogo: string;
  location: string;
  salary: string;
  skills: string[];
  jobType: string;
  postedAt: string;
  tags?: string[];
}

interface Filters {
  skills: string[];
  location: string[];
  jobType: string[];
  salary: string;
}

/* ---------------- Dummy Jobs Data ---------------- */

import { mockJobs as jobsData } from "@/shared/data/mockData";

/* ---------------- Page ---------------- */

export default function Page() {
  const [filters, setFilters] = useState<Filters>({
    skills: [],
    location: [],
    jobType: [],
    salary: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  /* ---------------- Filter Logic ---------------- */

  const filteredJobs = useMemo(() => {
    // Reset to page 1 when filters change
    setCurrentPage(1);
    return jobsData.filter((job) => {
      const skillMatch =
        filters.skills.length === 0 ||
        filters.skills.some((skill) => job.skills.includes(skill));

      const locationMatch =
        filters.location.length === 0 ||
        filters.location.includes(job.location);

      const jobTypeMatch =
        filters.jobType.length === 0 || filters.jobType.includes(job.jobType);

      const salaryMatch = !filters.salary || job.salary === filters.salary;

      return skillMatch && locationMatch && jobTypeMatch && salaryMatch;
    });
  }, [filters]);

  /* ---------------- Pagination Logic ---------------- */

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8 md:px-8 min-h-screen space-y-6">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800 tracking-tight font-inter">
            Available Opportunities
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-inter">
            Found {filteredJobs.length} matches based on your profile
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <JobsFilterBar onFilterChange={setFilters} />

      {/* Jobs List */}
      <JobsGrid jobs={paginatedJobs} />

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-500 hover:bg-slate-50 disabled:opacity-30 transition font-inter"
          >
            Previous
          </button>
          
          <div className="flex items-center gap-1">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition font-inter ${
                  currentPage === i + 1
                    ? "bg-slate-900 text-white"
                    : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-500 hover:bg-slate-50 disabled:opacity-30 transition font-inter"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
