"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Cpu,
  Search,
  Users,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  Briefcase,
  Target,
  TrendingUp,
  Globe,
  Star,
  Quote,
  Layers,
  HeartHandshake,
} from "lucide-react";
import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import Footer from "@/shared/components/layout/Footer";

/* ─── animation helpers ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      delay: i * 0.1,
    },
  }),
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay: i * 0.1,
    },
  }),
};

/* ─── data ─── */

const CORE_SERVICES = [
  {
    icon: Cpu,
    title: "AI-Powered Matching",
    description:
      "Our proprietary algorithms analyze skills, experience depth, and culture fit to surface the top 3% of candidates for every role — reducing time-to-hire by 60%.",
    highlight: "60% faster hiring",
  },
  {
    icon: Search,
    title: "Smart Job Discovery",
    description:
      "Candidates receive hyper-personalized job recommendations based on career trajectory, salary expectations, and growth potential — not just keyword matches.",
    highlight: "95% relevance rate",
  },
  {
    icon: Shield,
    title: "Verified Talent Profiles",
    description:
      "Every professional on Hierance undergoes credential verification, skills assessment, and reference validation before appearing in recruiter search results.",
    highlight: "100% verified",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Real-time dashboards for recruiters showing pipeline health, conversion rates, time-to-fill benchmarks, and diversity hiring metrics across all active roles.",
    highlight: "Live dashboards",
  },
  {
    icon: Users,
    title: "Dedicated Recruitment",
    description:
      "Enterprise clients receive a dedicated success manager who architects custom hiring strategies, manages candidate outreach, and optimizes every pipeline stage.",
    highlight: "White-glove service",
  },
  {
    icon: Zap,
    title: "Instant Application",
    description:
      "One-click apply with AI-optimized resumes. Our system auto-tailors cover letters and highlights relevant experience for each specific job posting.",
    highlight: "1-click apply",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Profile Creation",
    description: "Build your verified professional profile with AI-assisted skill mapping and career timeline visualization.",
    icon: Layers,
  },
  {
    step: "02",
    title: "Intelligent Matching",
    description: "Our AI engine cross-references your profile against thousands of opportunities, scoring each for fit and growth potential.",
    icon: Target,
  },
  {
    step: "03",
    title: "Curated Shortlists",
    description: "Receive hand-picked opportunities ranked by match quality, or let recruiters discover you through our verified talent marketplace.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Seamless Hiring",
    description: "From interview scheduling to offer negotiation, our platform streamlines every step — so you can focus on finding the right fit.",
    icon: HeartHandshake,
  },
];

const STATS = [
  { value: "12k+", label: "Active Professionals" },
  { value: "850+", label: "Partner Companies" },
  { value: "96%", label: "Satisfaction Rate" },
  { value: "4.2 days", label: "Avg. Time to Match" },
];

const TESTIMONIALS = [
  {
    quote: "Hierance transformed how we approach technical recruiting. The AI matching is remarkably accurate — we hired 3 senior engineers in under 2 weeks.",
    name: "Priya Sharma",
    role: "VP Engineering, Finova",
    rating: 5,
  },
  {
    quote: "As a job seeker, the personalized recommendations were spot-on. I found a role that perfectly aligned with my career goals within days of signing up.",
    name: "James Chen",
    role: "Staff Engineer, CloudSync",
    rating: 5,
  },
  {
    quote: "The analytics dashboard alone is worth the investment. We can finally measure and optimize every stage of our hiring funnel with real data.",
    name: "Amara Okafor",
    role: "Head of Talent, NexGen Labs",
    rating: 5,
  },
];

const EMPLOYER_FEATURES = [
  "Custom career page branded to your company",
  "ATS integration with 30+ platforms",
  "AI-powered candidate ranking and scoring",
  "Automated interview scheduling",
  "Real-time analytics and hiring insights",
  "Dedicated recruitment success manager",
];

const CANDIDATE_FEATURES = [
  "AI-optimized resume and cover letter builder",
  "Personalized job match scoring",
  "Salary insights and negotiation tools",
  "Profile verified badge for credibility",
  "Priority visibility to top employers",
  "Career growth tracking and recommendations",
];

/* ─── component ─── */

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"employers" | "candidates">("employers");

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <HomePageHeader />

      <main className="flex-grow">
        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section className="relative pt-40 pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
          {/* Super animated ambient background */}
          <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-indigo-200/30 to-blue-100/20 rounded-full blur-[120px]"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-indigo-100/40 to-white/10 rounded-full blur-[140px]"
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md border border-indigo-100/60 rounded-full text-xs font-bold text-indigo-500 tracking-widest uppercase shadow-[0_4px_24px_-8px_rgba(79,70,229,0.15)]">
                <Globe size={14} className="text-indigo-400" />
                World-Class Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", damping: 20 }}
              className="text-5xl md:text-7xl font-light text-slate-800 tracking-tight leading-[1.1] mb-8"
            >
              Intelligent hiring,{" "}
              <span className="font-semibold bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                redefined.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-14"
            >
              We combine advanced AI with human expertise to create the most seamless
              recruitment experience — for employers building world-class teams and
              professionals seeking roles where they truly belong.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <Link href="/auth">
                <button className="px-9 py-4 bg-indigo-600 text-white rounded-full text-sm font-medium shadow-[0_8px_30px_-8px_rgba(79,70,229,0.5)] hover:bg-indigo-700 hover:shadow-[0_8px_30px_-8px_rgba(79,70,229,0.7)] active:scale-[0.98] transform transition-all duration-300 flex items-center gap-2.5 cursor-pointer">
                  Get Started Free
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/prices">
                <button className="px-9 py-4 bg-white/80 backdrop-blur-md text-slate-700 rounded-full text-sm font-medium border border-indigo-100 hover:bg-white hover:border-indigo-200 hover:shadow-[0_8px_30px_-8px_rgba(79,70,229,0.1)] transition-all duration-300 cursor-pointer">
                  View Pricing Plans
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════ CORE SERVICES GRID ═══════════════════════ */}
        <section className="relative py-32 px-6 bg-white border-y border-indigo-50/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-24"
            >
              <motion.span
                variants={fadeUp}
                custom={0}
                className="inline-block text-[11px] font-bold text-indigo-400 uppercase tracking-[0.25em] mb-5"
              >
                What We Offer
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight"
              >
                Services built for{" "}
                <span className="font-semibold text-indigo-900">modern hiring</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {CORE_SERVICES.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={scaleIn}
                  custom={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-slate-50/50 backdrop-blur-xl p-10 rounded-[2.5rem] border border-indigo-50 hover:border-indigo-200/60 hover:bg-white transition-all duration-500 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] overflow-hidden"
                >
                  {/* Subtle corner glow on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/0 group-hover:bg-indigo-100/50 rounded-full blur-3xl transition-all duration-700 pointer-events-none transform translate-x-1/2 -translate-y-1/2" />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white border border-indigo-50 text-indigo-500 flex items-center justify-center mb-8 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>

                  {/* Highlight pill */}
                  <span className="inline-block text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                    {service.highlight}
                  </span>

                  <h3 className="text-xl font-semibold text-slate-800 mb-4 tracking-tight group-hover:text-indigo-950 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════ HOW IT WORKS ═══════════════════════ */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-24"
            >
              <motion.span
                variants={fadeUp}
                custom={0}
                className="inline-block text-[11px] font-bold text-indigo-400 uppercase tracking-[0.25em] mb-5"
              >
                The Process
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight"
              >
                How Hierance{" "}
                <span className="font-semibold text-indigo-900">works</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
            >
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  custom={index}
                  className="relative group"
                >
                  {/* Connector line (desktop only) */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[calc(100%-10%)] h-px bg-gradient-to-r from-indigo-200/80 to-transparent" />
                  )}

                  <div className="relative bg-white p-8 rounded-[2rem] border border-indigo-50/80 hover:border-indigo-200 transition-all duration-500 hover:shadow-[0_15px_35px_-10px_rgba(79,70,229,0.08)] transform hover:-translate-y-2">
                    {/* Step number */}
                    <span className="text-xs font-black text-indigo-100 tracking-widest mb-6 block group-hover:text-indigo-200 transition-colors">
                      STEP {step.step}
                    </span>

                    <div className="w-12 h-12 rounded-xl bg-indigo-50/80 text-indigo-500 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <step.icon size={22} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-800 mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════ STATS STRIP ═══════════════════════ */}
        <section className="py-24 px-6 relative z-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto bg-indigo-50/80 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-[0_20px_50px_-15px_rgba(79,70,229,0.1)] border border-indigo-100"
          >
            {/* Animated glowing orbs inside soft strip */}
            <motion.div
              animate={{ x: [0, 50, 0], y: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-50%] left-[-10%] w-[400px] h-[400px] bg-indigo-200/40 rounded-full blur-[80px]"
            />
            <motion.div
              animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[-50%] right-[-10%] w-[300px] h-[300px] bg-blue-200/30 rounded-full blur-[80px]"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 relative z-10">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  custom={index}
                  className="text-center"
                >
                  <span className="text-4xl md:text-5xl font-semibold text-slate-800 tracking-tight block mb-3 drop-shadow-sm">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════ FOR EMPLOYERS / CANDIDATES TAB ═══════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeUp}
                custom={0}
                className="inline-block text-[11px] font-bold text-indigo-400 uppercase tracking-[0.25em] mb-5"
              >
                Tailored Solutions
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight"
              >
                Built for{" "}
                <span className="font-semibold text-indigo-900">everyone</span>
              </motion.h2>
            </motion.div>

            {/* Tab toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-16"
            >
              <button
                onClick={() => setActiveTab("employers")}
                className={`px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeTab === "employers"
                    ? "bg-indigo-600 text-white shadow-[0_8px_20px_-6px_rgba(79,70,229,0.4)]"
                    : "bg-white text-slate-500 border border-indigo-100 hover:bg-indigo-50 hover:text-indigo-700"
                  }`}
              >
                <span className="flex items-center gap-2.5">
                  <Building2 size={16} />
                  For Employers
                </span>
              </button>
              <button
                onClick={() => setActiveTab("candidates")}
                className={`px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeTab === "candidates"
                    ? "bg-indigo-600 text-white shadow-[0_8px_20px_-6px_rgba(79,70,229,0.4)]"
                    : "bg-white text-slate-500 border border-indigo-100 hover:bg-indigo-50 hover:text-indigo-700"
                  }`}
              >
                <span className="flex items-center gap-2.5">
                  <Briefcase size={16} />
                  For Candidates
                </span>
              </button>
            </motion.div>

            {/* Tab content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, type: "spring" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* Left — description card */}
              <div className="bg-white border border-indigo-50 rounded-[2.5rem] p-12 md:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-15px_rgba(79,70,229,0.1)] transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-8">
                  {activeTab === "employers" ? (
                    <TrendingUp size={26} strokeWidth={1.5} />
                  ) : (
                    <Target size={26} strokeWidth={1.5} />
                  )}
                </div>

                <h3 className="text-3xl font-semibold text-slate-800 tracking-tight mb-5 leading-tight">
                  {activeTab === "employers"
                    ? "Scale your team with confidence"
                    : "Land your dream role, faster"}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed font-light mb-10">
                  {activeTab === "employers"
                    ? "From sourcing to onboarding, our platform handles the heavy lifting so your team can focus on building. Access verified talent, automate repetitive tasks, and gain visibility into every metric that matters."
                    : "Your career deserves more than a keyword search. Get matched to roles based on your entire professional story — skills, aspirations, culture preferences, and growth trajectory."}
                </p>

                <Link href="/auth">
                  <button className="px-7 py-3.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer group">
                    {activeTab === "employers" ? "Start Hiring" : "Create Profile"}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Right — features list */}
              <div className="bg-gradient-to-br from-indigo-50/80 to-blue-50/50 backdrop-blur-xl text-slate-800 border border-indigo-100 rounded-[2.5rem] p-12 md:p-14 shadow-[0_20px_50px_-15px_rgba(79,70,229,0.1)] relative overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-blue-200/30 rounded-full blur-[60px]" />

                <div className="relative z-10">
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-8 block">
                    {activeTab === "employers" ? "Employer features" : "Candidate features"}
                  </span>

                  <ul className="space-y-6">
                    {(activeTab === "employers" ? EMPLOYER_FEATURES : CANDIDATE_FEATURES).map(
                      (feature, idx) => (
                        <motion.li
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          key={idx}
                          className="flex items-start gap-4"
                        >
                          <div className="mt-0.5 w-6 h-6 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center shrink-0">
                            <CheckCircle2 size={14} strokeWidth={2.5} />
                          </div>
                          <span className="text-slate-600 text-base font-light leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */}
        <section className="py-32 px-6 bg-white border-y border-indigo-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.span
                variants={fadeUp}
                custom={0}
                className="inline-block text-[11px] font-bold text-indigo-400 uppercase tracking-[0.25em] mb-5"
              >
                Trusted by Thousands
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight"
              >
                What people are{" "}
                <span className="font-semibold text-indigo-900">saying</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {TESTIMONIALS.map((t, index) => (
                <motion.div
                  key={t.name}
                  variants={scaleIn}
                  custom={index}
                  whileHover={{ y: -5 }}
                  className="group bg-slate-50/50 p-10 rounded-[2rem] hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] transition-all duration-500 flex flex-col border border-indigo-50/50"
                >
                  {/* Quote mark */}
                  <Quote size={32} className="text-indigo-200 mb-8 -scale-x-100" strokeWidth={1.5} />

                  {/* Stars */}
                  <div className="flex items-center gap-1.5 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" className="text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed font-light flex-1 mb-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="pt-6 border-t border-indigo-100/60 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-slate-800 mb-0.5">
                        {t.name}
                      </span>
                      <span className="text-xs text-indigo-500 font-medium">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════ BOTTOM CTA ═══════════════════════ */}
        <section className="py-32 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="max-w-5xl mx-auto relative overflow-hidden bg-white border border-indigo-100/80 rounded-[3rem] p-16 md:p-24 text-center shadow-[0_20px_60px_-20px_rgba(79,70,229,0.15)]"
          >
            {/* Animated Ambient blobs */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-30%] left-[-20%] w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[-30%] right-[-20%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[90px] pointer-events-none"
            />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-50 border border-indigo-100 rounded-full text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-8">
                <Sparkles size={14} className="text-indigo-400" />
                Ready to begin?
              </span>

              <h2 className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight mb-6 leading-tight">
                Start building your future,{" "}
                <span className="font-semibold text-indigo-600">today</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-xl mx-auto font-light leading-relaxed mb-12">
                Join thousands of professionals and companies who trust Hierance to
                create meaningful connections that drive careers forward.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link href="/auth">
                  <button className="px-9 py-4 bg-indigo-600 text-white rounded-full text-sm font-medium shadow-[0_8px_30px_-8px_rgba(79,70,229,0.5)] hover:bg-indigo-700 active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 cursor-pointer group">
                    Create Free Account
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/companies">
                  <button className="px-9 py-4 bg-white text-slate-600 rounded-full text-sm font-medium border border-indigo-200 hover:border-indigo-400 hover:text-indigo-700 hover:shadow-[0_8px_20px_-8px_rgba(79,70,229,0.15)] transition-all duration-300 cursor-pointer">
                    Browse Companies
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
