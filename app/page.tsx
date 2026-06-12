"use client";

import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import LandingHeader from "@/shared/components/LandingPage/LandingHeader";
import CategoryJobs from "@/shared/components/LandingPage/CategoryJobs";
import CompanyTicker from "@/shared/components/LandingPage/CompanyTicker";
import TopCompanies from "@/shared/components/LandingPage/TopCompanies";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  MapPin,
  Briefcase,
  Cpu,
  Code,
  Zap
} from "lucide-react";
import CoursesSection from "@/shared/components/LandingPage/CoursesSection";
import ProBanner from "@/shared/components/LandingPage/ProBanner";
import PremiumServicesAd from "@/shared/components/LandingPage/PremiumServicesAd";
import InterviewPrepAd from "@/shared/components/LandingPage/InterviewPrepAd";
import Footer from "@/shared/components/layout/Footer";

const SUB_CATEGORIES = [
  { name: "Manager", icon: Briefcase },
  { name: "DevOps", icon: Cpu },
  { name: "Full Stack", icon: Code },
  { name: "AI Engineer", icon: Zap },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/jobs?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">




      <HomePageHeader />


      {/* ================= PREMIUM SERVICES BANNER ================= */}
      {/* <section className="pb-0 px-6 mt-[72px]">
        <div className="max-w-7xl mx-auto">
          <PremiumServicesAd />
        </div>
      </section> */}

      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="relative isolate pt-28 pb-16">
      
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/50 via-purple-50/20 to-white">
       
            <div className="absolute top-0 left-0 h-[450px] w-[450px] rounded-full bg-indigo-200/25 blur-[120px] animate-pulse" />
 
         
            <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-200/25 blur-[120px] animate-pulse delay-700" />
 
          
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100/20 blur-[100px]" />
            
          </div>
          <LandingHeader />

          {/* Premium Search Box */}
          <div className="max-w-7xl mx-auto px-6">
            <form
              onSubmit={handleSearch}
              className="max-w-3xl mx-auto glass p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center gap-2 shadow-2xl transition-all duration-300 hover:shadow-indigo-200/50"
            >
              <div className="flex-1 flex items-center gap-3 px-6 py-3 w-full">
                <Search className="text-slate-400 shrink-0" size={24} />
                <input
                  type="text"
                  placeholder="Job title,or company..."
                  className="bg-transparent border-none outline-none text-slate-800 text-lg w-full placeholder:text-slate-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="hidden md:block h-8 w-px bg-slate-200 mx-2" />

              <div className="flex-1 flex items-center gap-3 px-6 py-3 w-full">
                <MapPin className="text-slate-400 shrink-0" size={24} />
                <input
                  type="text"
                  placeholder="City, state or zip"
                  className="bg-transparent border-none outline-none text-slate-800 text-lg w-full placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-indigo-600 text-white rounded-xl md:rounded-full font-medium text-lg hover:bg-indigo-700 transform hover:scale-[1.01] transition-all shadow-lg shadow-indigo-200"
              >
                Search
              </button>
            </form>

            {/* Popular Tags */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <span className="text-sm font-medium text-slate-500">Popular:</span>
              {SUB_CATEGORIES.map((sub) => (
                <button
                  key={sub.name}
                  onClick={() => setSearchQuery(sub.name)}
                  className="text-sm font-normal text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        </section>



        {/* ================= CATEGORIES SECTION ================= */}
        <CategoryJobs />

        {/* ================= COMPANY LOGOS TICKER ================= */}
        <CompanyTicker />

        {/* ================= TOP COMPANIES SECTION ================= */}
        <TopCompanies />

        {/* ================= INTERVIEW PREPARATION SECTION ================= */}
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <InterviewPrepAd />
          </div>
        </section>
        {/* ================= ONLINE COURSES SECTION ================= */}
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <CoursesSection />
          </div>
        </section>

        {/* ================= PRO BANNER SECTION ================= */}
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <ProBanner />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
