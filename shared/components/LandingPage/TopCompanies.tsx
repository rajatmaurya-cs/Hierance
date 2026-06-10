import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export const TOP_COMPANIES = [
  { name: "Google", location: "Mountain View, CA", jobs: 120, logo: "G", color: "text-red-500", logoUrl: "https://www.google.com/s2/favicons?domain=google.com&sz=128" },
  { name: "Microsoft", location: "Redmond, WA", jobs: 85, logo: "M", color: "text-blue-500", logoUrl: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128" },
  { name: "Amazon", location: "Seattle, WA", jobs: 210, logo: "A", color: "text-orange-500", logoUrl: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128" },
  { name: "Netflix", location: "Los Gatos, CA", jobs: 45, logo: "N", color: "text-red-600", logoUrl: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128" },
  { name: "Meta", location: "Menlo Park, CA", jobs: 92, logo: "M", color: "text-blue-600", logoUrl: "https://www.google.com/s2/favicons?domain=meta.com&sz=128" },
  { name: "Apple", location: "Cupertino, CA", jobs: 110, logo: "A", color: "text-gray-900", logoUrl: "https://www.google.com/s2/favicons?domain=apple.com&sz=128" },
  { name: "Stripe", location: "San Francisco, CA", jobs: 64, logo: "S", color: "text-indigo-600", logoUrl: "https://www.google.com/s2/favicons?domain=stripe.com&sz=128" },
  { name: "Spotify", location: "Stockholm, Sweden", jobs: 73, logo: "S", color: "text-green-500", logoUrl: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128" },
];

export default function TopCompanies() {
  const router = useRouter();
  
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
      updateScrollState();
      window.addEventListener("resize", updateScrollState);
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

  const handleCompanyClick = (companyName: string) => {
    router.push(`/jobs/company/${encodeURIComponent(companyName)}`);
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Top Companies <span className="text-indigo-600">Hiring Now</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl font-light">
              Join the world&apos;s most innovative teams. Discover high-growth companies looking for talent.
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
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-6 -mx-4 px-4 md:mx-0 md:px-0"
          >
            {TOP_COMPANIES.slice(0, 8).map((company) => (
              <div 
                key={company.name}
                onClick={() => handleCompanyClick(company.name)}
                className="w-[85%] sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] shrink-0 snap-start bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-500 text-[10px] font-medium rounded-full uppercase tracking-wider">Hiring</span>
                </div>

                <div className="flex items-center gap-6 mb-8">
                  <div className="h-16 w-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-3 overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={company.logoUrl}
                      alt={company.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-light text-slate-700 text-xl group-hover:text-indigo-500 transition-colors tracking-tight">{company.name}</h3>
                    <div className="flex items-center gap-1 text-slate-400 text-sm mt-1 font-light">
                      <MapPin size={14} className="text-slate-300" /> {company.location}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                  <div className="text-slate-400 text-sm font-light">
                    <span className="text-indigo-400 font-light">{company.jobs}</span> Open Positions
                  </div>
                  <button className="p-3 rounded-full bg-slate-50 text-slate-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                    <ArrowRight size={18} />
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
            onClick={() => router.push("/companies")}
            className="px-10 py-4 bg-indigo-600 text-white rounded-2xl text-sm font-normal hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all duration-300 cursor-pointer"
          >
            Explore All Companies
          </button>
        </div>
      </div>
    </section>
  );
}
