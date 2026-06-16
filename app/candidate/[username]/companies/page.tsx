"use client";
import { useMemo, useState } from "react";
import CompaniesFilterBar from "./components/CompanyFilterBar";
import CompanyCard from "./components/CompanyCard";
import { mockCompanies as companies } from "@/shared/data/mockData";

import { useParams } from "next/navigation";

export default function CompaniesPage() {
  const params = useParams();
  const username = params.username as string;

  const [filters, setFilters] = useState({
    industry: [] as string[],
    location: [] as string[],
    companyType: [] as string[],
    size: [] as string[],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const handleFiltersChange = (nextFilters: typeof filters) => {
    setFilters(nextFilters);
    setCurrentPage(1);
  };

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const industryMatch =
        filters.industry.length === 0 ||
        filters.industry.some((i) => company.industry.toLowerCase().includes(i.toLowerCase()));

      const locationMatch =
        filters.location.length === 0 ||
        filters.location.some((l) => company.location.toLowerCase().includes(l.toLowerCase()));

      const typeMatch =
        filters.companyType.length === 0 ||
        filters.companyType.some((t) => company.companyType.toLowerCase() === t.toLowerCase());

      // Simple size mapping for dummy data
      const sizeMatch = filters.size.length === 0 || true; // Placeholder for size logic

      return industryMatch && locationMatch && typeMatch && sizeMatch;
    });
  }, [filters]);

  /* ---------------- Pagination Logic ---------------- */

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCompanies = filteredCompanies.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8 md:px-8 min-h-screen space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800 tracking-tight font-primary">
            Explore Companies
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-primary">
            {filteredCompanies.length} companies hiring now
          </p>
        </div>
        <div className="flex items-center gap-5">
          <StatItem label="Companies" value={filteredCompanies.length} />
          <StatItem
            label="Open roles"
            value={filteredCompanies.reduce((t, c) => t + c.openJobs, 0)}
          />
        </div>
      </div>

      {/* Filter Bar */}
      <CompaniesFilterBar onFilterChange={handleFiltersChange} />

      {/* Company List */}
      <div className="flex flex-col gap-3">
        {paginatedCompanies.length > 0 ? (
          paginatedCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} username={username} />
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-200">
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="text-base font-semibold text-slate-700 font-primary">No companies found</h3>
            <p className="text-sm text-slate-400 mt-1 font-primary">
              Try adjusting your filters to find more organizations.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-500 hover:bg-slate-50 disabled:opacity-30 transition font-primary"
          >
            Previous
          </button>

          <div className="flex items-center gap-1">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition font-primary ${
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
            className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-500 hover:bg-slate-50 disabled:opacity-30 transition font-primary"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}

const StatItem = ({ label, value }: { label: string; value: number }) => (
  <div className="text-center font-primary">
    <p className="text-lg font-bold text-slate-800">{value}</p>
    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">{label}</p>
  </div>
);
