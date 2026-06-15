"use client";

import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import Footer from "@/shared/components/layout/Footer";
import { 
  ShieldCheck, 
  Info, 
  CheckCircle2, 
  XCircle, 
  Mail, 
  RefreshCw, 
  ChevronRight,
  HelpCircle
} from "lucide-react";
import { useState } from "react";

export default function RefundPolicy() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "1. Overview", icon: Info },
    { id: "eligibility", label: "2. Eligibility", icon: CheckCircle2 },
    { id: "non-refundable", label: "3. Non-Refundable", icon: XCircle },
    { id: "request", label: "4. How to Request", icon: HelpCircle },
    { id: "processing", label: "5. Processing", icon: RefreshCw },
    { id: "contact", label: "6. Contact Us", icon: Mail }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (!element) return;

    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
    if (isDesktop) {
      const container = document.getElementById("content-container");
      if (container) {
        const containerTop = container.getBoundingClientRect().top;
        const elementTop = element.getBoundingClientRect().top;
        const relativeTop = elementTop - containerTop + container.scrollTop;

        container.scrollTo({
          top: relativeTop,
          behavior: "smooth"
        });
      }
    } else {
      const offset = 120; // top offset for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 overflow-x-hidden">
      <HomePageHeader />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 left-0 right-0 -z-10 h-[500px] overflow-hidden bg-gradient-to-b from-indigo-50/50 via-purple-50/20 to-transparent">
        <div className="absolute top-[10%] left-[-5%] h-[300px] w-[300px] rounded-full bg-indigo-200/20 blur-[100px]" />
        <div className="absolute top-[20%] right-[-5%] h-[300px] w-[300px] rounded-full bg-purple-200/20 blur-[100px]" />
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-10 lg:h-[calc(100vh-130px)] lg:min-h-[500px]">
          {/* Navigation Sidebar */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="glass p-6 rounded-2xl border border-indigo-100/40 space-y-6">
              {/* Title & Meta Info */}
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-semibold tracking-wider uppercase mb-3">
                  <ShieldCheck size={11} className="text-indigo-500" /> Policy
                </div>
                <h1 className="text-2xl font-light text-slate-900 tracking-tight leading-tight">
                  Refund <span className="text-indigo-600 font-semibold">Policy</span>
                </h1>
                <p className="text-[11px] text-slate-400 font-normal mt-2">
                  Last updated: May 10, 2026
                </p>
              </div>

              <div className="h-px bg-slate-100" />

              {/* Table of Contents */}
              <div className="space-y-2">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.2em] px-3">Table of Contents</p>
                {sections.map((sec) => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                      isActive 
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" 
                        : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                    }`}
                  >
                    <Icon size={16} className={isActive ? "text-white" : "text-indigo-500"} />
                    {sec.label.split(". ")[1]}
                  </button>
                );
              })}
            </div>
            </div>
          </aside>

          {/* Policy Text Cards */}
          <div 
            id="content-container"
            className="flex-1 space-y-8 lg:h-full lg:overflow-y-auto lg:pr-4 scroll-smooth no-scrollbar"
          >
            {/* 1. Overview */}
            <section id="overview" className="bg-white p-8 rounded-3xl border border-slate-100/80 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Info size={20} />
                </div>
                <h2 className="text-xl font-semibold text-slate-800 tracking-tight">1. Overview</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-light text-base">
                At Hireance, we strive to ensure complete satisfaction with our services. This Refund Policy outlines 
                the conditions under which refunds may be issued for paid services purchased through our platform. 
                Our goal is to build mutual trust with recruiters, startups, and job seekers using our premium systems.
              </p>
            </section>

            {/* 2. Eligibility for Refunds */}
            <section id="eligibility" className="bg-white p-8 rounded-3xl border border-slate-100/80 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <CheckCircle2 size={20} />
                </div>
                <h2 className="text-xl font-semibold text-slate-800 tracking-tight">2. Eligibility for Refunds</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-light mb-6 text-base">
                Refund requests are evaluated on a case-by-case basis. You may be eligible for a refund under the 
                following specific circumstances:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Service not delivered", desc: "If a purchased service was not delivered as described within the stated timeframe." },
                  { title: "Technical issues", desc: "If persistent technical issues on our end prevented you from accessing or using the paid service." },
                  { title: "Duplicate payment", desc: "If you were charged more than once for the same service." },
                  { title: "Cooling-off period", desc: "If you cancel a subscription or service within 7 days of purchase and have not used the service." }
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-50/50 border border-slate-100 flex items-start gap-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Non-Refundable Services */}
            <section id="non-refundable" className="bg-white p-8 rounded-3xl border border-slate-100/80 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <XCircle size={20} />
                </div>
                <h2 className="text-xl font-semibold text-slate-800 tracking-tight">3. Non-Refundable Services</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-light mb-6 text-base">
                Certain premium services and modules are completely non-refundable once activated or accessed. 
                These include:
              </p>
              <div className="space-y-3">
                {[
                  "Services that have been fully delivered and consumed.",
                  "One-time preparation plan purchases after the materials have been accessed or downloaded.",
                  "Services where a refund request is made after 30 days from the date of purchase."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50/30 border border-red-100/50 text-slate-600 text-sm font-light">
                    <XCircle size={14} className="text-red-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* 4. How to Request a Refund */}
            <section id="request" className="bg-white p-8 rounded-3xl border border-slate-100/80 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <HelpCircle size={20} />
                </div>
                <h2 className="text-xl font-semibold text-slate-800 tracking-tight">4. How to Request a Refund</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-light mb-6 text-base">
                To request a refund, please contact our support team at{" "}
                <a href="mailto:support@hierance.com" className="text-indigo-600 hover:underline font-semibold">support@hierance.com</a>{" "}
                with the following details in your email:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Email Address", val: "Your registered email address." },
                  { label: "Transaction ID", val: "Order or transaction ID details." },
                  { label: "Reason for Refund", val: "Clear reason for the refund request." },
                  { label: "Evidence", val: "Any supporting documentation or screenshots." }
                ].map((req, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 bg-indigo-50/30 border border-indigo-100/50 rounded-2xl text-xs text-slate-600">
                    <ChevronRight size={14} className="text-indigo-500 shrink-0" />
                    <div>
                      <span className="font-semibold text-indigo-950 block">{req.label}</span>
                      <span className="font-light text-slate-500">{req.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Refund Processing */}
            <section id="processing" className="bg-white p-8 rounded-3xl border border-slate-100/80 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <RefreshCw size={20} />
                </div>
                <h2 className="text-xl font-semibold text-slate-800 tracking-tight">5. Refund Processing</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-light text-base">
                Once your refund request is received and reviewed, we will notify you of the approval or rejection of 
                your refund. If approved, your refund will be processed within <strong>7–10 business days</strong> and 
                credited back to your original payment method automatically.
              </p>
            </section>

            {/* 6. Contact Us */}
            <section id="contact" className="bg-gradient-to-br from-indigo-900 to-indigo-950 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute -top-[20%] -right-[10%] h-[250px] w-[250px] rounded-full bg-indigo-500/20 blur-[60px]" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight mb-2">6. Have Questions?</h2>
                  <p className="text-indigo-200 font-light text-sm max-w-md">
                    If you have any questions about our refund policy, our support team is ready to help you resolve them quickly.
                  </p>
                </div>
                <a 
                  href="mailto:support@hierance.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-900 rounded-xl text-sm font-semibold hover:bg-indigo-50 transition-colors shrink-0"
                >
                  <Mail size={16} /> support@hierance.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
