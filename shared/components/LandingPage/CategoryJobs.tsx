"use client";

import { useRouter } from "next/navigation";
import { 
  ArrowRight,
  MapPin,
  Clock,
  Bookmark,
  DollarSign,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { JOBS } from "@/shared/data/jobsMockData";
import { mockJobs } from "@/shared/data/mockData";
import { useState, useRef, useEffect } from "react";

export default function CategoryJobs() {
  const router = useRouter();
  const [jobs] = useState(mockJobs.slice(0, 8));
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(2);

  const updateScrollState = () => {
    const container = scrollRef.current;
    if (container) {
      const { scrollLeft, clientWidth, scrollWidth } = container;
      const pageIndex = Math.round(scrollLeft / clientWidth);
      setCurrentPage(pageIndex);
      
      const pages = Math.ceil(scrollWidth / clientWidth);
      setTotalPages(pages || 1);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollState);
      // Run once initially and on resize
      updateScrollState();
      window.addEventListener("resize", updateScrollState);
      // Give a tiny timeout for DOM to fully render and calculate correct scrollWidth
      const timer = setTimeout(updateScrollState, 100);
      return () => {
        clearTimeout(timer);
        container.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const { clientWidth } = container;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToPage = (pageIndex: number) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTo({
        left: pageIndex * container.clientWidth,
        behavior: "smooth",
      });
      setCurrentPage(pageIndex);
    }
  };

  return (
    <section className="py-24 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-light text-slate-900 tracking-tight mb-4">
              Explore <span className="text-indigo-600">Opportunities</span>
            </h2>
            <p className="text-slate-700 max-w-xl font-light text-lg">
              Handpicked career opportunities from world-class companies. 
              Discover your next role today.
            </p>
          </div>
          
          {/* Scroll Controls */}
          <div className="hidden md:flex gap-3 shrink-0 justify-center">
            <button 
              onClick={() => scroll("left")}
              disabled={currentPage === 0}
              className="p-3.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-indigo-600 shadow-sm transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={22} />
            </button>
            <button 
              onClick={() => scroll("right")}
              disabled={currentPage >= totalPages - 1}
              className="p-3.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-indigo-600 shadow-sm transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-6 -mx-4 px-4 md:mx-0 md:px-0"
          >
            {jobs.map((job) => (
              <div 
                key={job.id}
                className="w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start group relative bg-white rounded-[2rem] p-6 border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 flex flex-col gap-6"
              >
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-3 overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={job.companyLogo}
                      alt={job.company}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <button className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 cursor-pointer">
                    <Bookmark size={20} />
                  </button>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-normal text-indigo-600 uppercase tracking-widest">{job.company}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                    <span className="text-[10px] font-normal text-slate-500 uppercase tracking-widest">{job.jobType}</span>
                  </div>
                  <h3 className="text-xl font-light text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 font-light">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-slate-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <DollarSign size={14} className="text-slate-400" />
                      {job.salary}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <span className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Clock size={14} />
                    {new Date(job.postedDate).toLocaleDateString()}
                  </span>
                  <button 
                    onClick={() => router.push(`/jobs/${job.id}`)}
                    className="flex items-center gap-2 text-indigo-600 font-normal text-sm hover:gap-3 transition-all cursor-pointer"
                  >
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToPage(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentPage === idx 
                    ? "w-8 bg-indigo-600" 
                    : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Go to slide page ${idx + 1}`}
              />
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <button 
            onClick={() => router.push('/jobs')}
            className="px-10 py-4 bg-indigo-600 text-white rounded-2xl text-sm font-normal hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all duration-300 cursor-pointer"
          >
            Explore all 1,200+ jobs
          </button>
        </div>
      </div>
    </section>
  );
}
