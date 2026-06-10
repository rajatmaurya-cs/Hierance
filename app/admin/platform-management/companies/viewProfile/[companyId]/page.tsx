"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Building2,
  Globe,
  Mail,
  Phone,
  ShieldCheck,
  ShieldAlert,
  Ban,
  CheckCircle,
  ExternalLink,
  Calendar,
  TrendingUp,
  Briefcase,
  Users
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";

// --- Mock Company Data ---
const MOCK_COMPANY_DETAILS = {
  id: "CMP001",
  name: "Infosys Ltd",
  logo: "I",
  industry: "IT Services & Consulting",
  type: "MNC",
  location: "Bangalore, KA",
  website: "https://www.infosys.com",
  email: "careers@infosys.com",
  phone: "+91 80 2852 0261",
  status: "ACTIVE",
  verified: true,
  createdAt: "10 Jan 2023",
  employeeCount: "10,000+",
  totalHired: 1240,
  openJobs: 34,
  revenue: "₹1.5T+",
  bio: `
    <p>Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation.</p>
    
    <p>With over four decades of experience in managing the systems and workings of global enterprises, we expertly lead our clients through their digital journey. We do it by enabling the enterprise with an AI-first core that helps prioritize the execution of change. We also empower the business with agile digital at scale to deliver unprecedented levels of performance and customer delight. Our always-on learning agenda drives their continuous improvement through building and transferring digital skills, expertise, and ideas from our innovation ecosystem.</p>

    <h3>Mission & Vision:</h3>
    <ul>
      <li>To be a globally respected corporation that provides best-of-breed business solutions, leveraging technology, delivered by best-in-class people.</li>
      <li>To lead the industry in client satisfaction by delivering high-quality, innovative software solutions and services.</li>
      <li>To create an environment for our employees to learn, grow, and innovate.</li>
    </ul>

    <h3>Global Presence:</h3>
    <p>Operations in 50+ countries with major development centers in India, USA, China, Australia, UK, and Canada.</p>
  `,
  recruiter: {
    name: "Ananya Kapoor",
    designation: "Senior HR Manager",
    email: "ananya.k@infosys.com",
    lastActive: "2 hours ago"
  }
};

export default function CompanyProfilePage({ params }: { params: Promise<{ companyId: string }> }) {
  const router = useRouter();
  const { companyId } = use(params);
  const company = MOCK_COMPANY_DETAILS;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* HEADER NAVIGATION */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-indigo-600 hover:bg-white rounded-xl transition-all duration-300 group text-sm font-bold border border-transparent hover:border-slate-100 shadow-sm hover:shadow-md"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Directory
        </button>
      </div>

      <main className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT COLUMN: PRIMARY INFO */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative overflow-hidden"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-bl-full -z-0" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-900 flex items-center justify-center text-4xl font-black text-white shadow-xl shadow-indigo-100 ring-4 ring-white">
                  {company.logo}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                      {company.name}
                    </h1>
                    {company.verified && (
                      <div className="bg-indigo-50 text-indigo-600 p-1.5 rounded-full border border-indigo-100 shadow-sm" title="Verified Business">
                        <ShieldCheck size={18} />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 font-bold">
                    <span className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100"><Building2 size={14} className="text-indigo-500" /> {company.industry}</span>
                    <span className="flex items-center gap-2"><MapPin size={14} className="text-slate-400" /> {company.location}</span>
                    <Link href={company.website} target="_blank" className="flex items-center gap-2 text-indigo-600 hover:underline">
                      <Globe size={14} /> {company.website.replace('https://', '')}
                    </Link>
                  </div>
                </div>
              </div>

              {/* STATS BAR */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-slate-50/50 rounded-3xl border border-slate-100 backdrop-blur-sm">
                {[
                  { label: "Active Roles", value: company.openJobs, sub: "+3 New", color: "text-indigo-600", icon: <TrendingUp size={10} /> },
                  { label: "Talent Pool", value: company.employeeCount, sub: "T1 MNC", color: "text-slate-500" },
                  { label: "Success Hires", value: `${company.totalHired.toLocaleString()}+`, sub: "Global Rate", color: "text-emerald-600" },
                  { label: "Market Revenue", value: company.revenue, sub: "Annually", color: "text-slate-500" },
                ].map((s, idx) => (
                  <div key={idx} className={`${idx > 0 ? "md:border-l border-slate-200 md:pl-6" : ""}`}>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{s.label}</p>
                    <p className="text-2xl font-black text-slate-900 leading-none mb-2">{s.value}</p>
                    <p className={`text-[10px] font-black ${s.color} flex items-center gap-1 uppercase`}>
                      {s.icon && s.icon} {s.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* COMPANY BIO / OVERVIEW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200"
          >
            <h2 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
              Company Intelligence Dossier
            </h2>
            <div
              className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-[15px] space-y-6"
              dangerouslySetInnerHTML={{ __html: company.bio }}
            />
          </motion.div>
        </div>

        {/* RIGHT COLUMN: CONTROLS & CONTACTS */}
        <div className="space-y-6">

          {/* THE COMMAND CENTER (ADMIN ACTIONS) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between mb-6 px-1">
              <h3 className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-2">
                Command Center
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              </h3>
            </div>

            <div className="space-y-3">
              <Button className="w-full justify-start gap-4 px-6 py-4 bg-sky-600 text-white hover:bg-sky-700 rounded-2xl shadow-sm shadow-sky-100/40 transition-all duration-300 text-sm font-bold border-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300">
                <CheckCircle size={18} />
                Verify Platform Access
              </Button>

              <Button className="w-full justify-start gap-4 px-6 py-4 bg-amber-600 text-white hover:bg-amber-700 rounded-2xl shadow-sm shadow-amber-100/30 transition-all duration-300 text-sm font-bold border-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300">
                <ShieldAlert size={18} />
                Restrict Access Temporal
              </Button>

              <div className="h-px bg-slate-100 my-4" />

              <Button variant="outline" className="w-full justify-start gap-4 px-6 py-4 bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-300 rounded-2xl transition-all duration-300 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-200">
                <Ban size={18} />
                Block Permanent Access
              </Button>

            </div>
          </motion.div>

          {/* CONTACT POINT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200"
          >
            <h3 className="text-sm font-black text-slate-900 mb-6 px-1 tracking-tight">Intelligence Liaison</h3>
            <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-100/50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-indigo-100">
                    {company.recruiter.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 leading-none mb-1.5">{company.recruiter.name}</h4>
                    <p className="text-[11px] font-black text-indigo-600 uppercase tracking-wide">{company.recruiter.designation}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600 bg-white/60 p-2.5 rounded-xl border border-indigo-100/20">
                    <Mail size={14} className="text-indigo-400" />
                    {company.recruiter.email}
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600 bg-white/60 p-2.5 rounded-xl border border-indigo-100/20">
                    <Phone size={14} className="text-indigo-400" />
                    {company.phone}
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full mt-5 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border-2 border-slate-100 text-xs font-black text-slate-400 hover:text-indigo-600 hover:border-indigo-100 hover:bg-indigo-50 transition-all duration-300">
              Transmit Alert Signal <ExternalLink size={14} />
            </button>
          </motion.div>

          {/* ORGANIZATION DATA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200"
          >
            <h3 className="text-sm font-black text-slate-900 mb-6 px-1 tracking-tight">Organization Profile</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center px-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <Calendar size={14} className="text-slate-400" />
                  <span className="text-[11px] font-black text-slate-500 uppercase tracking-wide">Registry Date</span>
                </div>
                <span className="text-[11px] font-black text-slate-900">{company.createdAt}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <Building2 size={14} className="text-slate-400" />
                  <span className="text-[11px] font-black text-slate-500 uppercase tracking-wide">Enterprise Tier</span>
                </div>
                <span className="text-[11px] font-black text-slate-900">{company.type}</span>
              </div>
            </div>

            {/* TRUST INDICATOR */}
            <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100/50">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-100">
                <ShieldCheck size={20} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] font-black text-emerald-800 uppercase tracking-widest leading-none mb-1">KYC STATUS</p>
                <p className="text-[11px] font-black text-emerald-600 uppercase">Authenticated Org</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <style jsx global>{`
        .prose h3 { font-size: 1.25rem; font-weight: 900; color: #0f172a; margin-top: 2rem; margin-bottom: 1rem; border-left: 4px solid #4f46e5; padding-left: 1rem; }
        .prose p { margin-bottom: 1.25rem; font-weight: 500; color: #475569; }
        .prose ul { list-style-type: none; padding-left: 0; }
        .prose li { position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem; font-weight: 600; color: #334155; }
        .prose li::before { content: "•"; position: absolute; left: 0; color: #4f46e5; font-size: 1.5rem; line-height: 1; border-radius: 9999px; }
      `}</style>
    </div>
  );
}