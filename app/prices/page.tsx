"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, HelpCircle, Sparkles, Star, Zap, ChevronDown, CheckCircle2 } from "lucide-react";
import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import Footer from "@/shared/components/layout/Footer";
import WalletCards from "./cards";

// Plan Interface
interface PricingPlan {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  popular: boolean;
  badge?: string;
  theme: {
    cardBg: string;
    border: string;
    shadow: string;
    badgeBg: string;
    badgeText: string;
    iconBg: string;
    iconColor: string;
    btnClass: string;
  };
}

// Plan Data Array of Objects
const CANDIDATE_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: {
      monthly: 0,
      yearly: 0,
    },
    description: "Discover opportunities and get started with basic applications.",
    features: [
      "Access to 1,200+ public job listings",
      "Apply to 5 jobs per month",
      "Standard candidate profile",
      "AI match-score preview (3 per day)",
      "Standard email alerts"
    ],
    buttonText: "Start for Free",
    buttonHref: "/auth",
    popular: false,
    theme: {
      cardBg: "bg-white/80 backdrop-blur-sm",
      border: "border-slate-200/80 hover:border-slate-300",
      shadow: "shadow-sm hover:shadow-md",
      badgeBg: "bg-slate-100",
      badgeText: "text-slate-600",
      iconBg: "bg-slate-50",
      iconColor: "text-slate-400",
      btnClass: "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80"
    }
  },
  {
    id: "plus",
    name: "Plus",
    price: {
      monthly: 1299,
      yearly: 999,
    },
    description: "Accelerate your search with intelligent match scoring and priority referrals.",
    features: [
      "Unlimited job applications",
      "AI resume optimizer & full match scoring",
      "Featured profile in recruiter search",
      "Priority referral to hiring managers",
      "Access to exclusive virtual hiring events",
      "Salary insight estimation tools"
    ],
    buttonText: "Upgrade to Plus",
    buttonHref: "/auth",
    popular: true,
    badge: "Most Popular",
    theme: {
      cardBg: "bg-gradient-to-b from-indigo-50/20 via-white to-white",
      border: "border-indigo-150/80 shadow-indigo-100/40 shadow-xl border-indigo-200",
      shadow: "hover:shadow-2xl hover:shadow-indigo-100/50",
      badgeBg: "bg-indigo-50",
      badgeText: "text-indigo-600",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-500",
      btnClass: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-150/20"
    }
  },
  {
    id: "pro",
    name: "Pro",
    price: {
      monthly: 3299,
      yearly: 2599,
    },
    description: "Ultimate access for advanced professionals seeking high-impact roles.",
    features: [
      "Everything in Plus",
      "Direct messaging to recruiters & hiring managers",
      "48-hour early access to premium postings",
      "1-on-1 resume review & career check-in (yearly)",
      "Verified profile checkmark badge",
      "Dedicated candidate success support"
    ],
    buttonText: "Get Pro Access",
    buttonHref: "/auth",
    popular: false,
    theme: {
      cardBg: "bg-white/80 backdrop-blur-sm",
      border: "border-slate-200/80 hover:border-slate-300",
      shadow: "shadow-sm hover:shadow-md",
      badgeBg: "bg-slate-900",
      badgeText: "text-white",
      iconBg: "bg-slate-900",
      iconColor: "text-white",
      btnClass: "bg-slate-900 hover:bg-slate-800 text-white shadow-md"
    }
  }
];

const RECRUITER_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: {
      monthly: 4999,
      yearly: 3999,
    },
    description: "Essential tools for small teams to find and hire talent.",
    features: [
      "Post up to 3 active jobs",
      "Basic candidate search",
      "Standard applicant tracking",
      "Email support"
    ],
    buttonText: "Start Hiring",
    buttonHref: "/auth",
    popular: false,
    theme: {
      cardBg: "bg-white/80 backdrop-blur-sm",
      border: "border-slate-200/80 hover:border-slate-300",
      shadow: "shadow-sm hover:shadow-md",
      badgeBg: "bg-slate-100",
      badgeText: "text-slate-600",
      iconBg: "bg-slate-50",
      iconColor: "text-slate-400",
      btnClass: "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80"
    }
  },
  {
    id: "growth",
    name: "Growth",
    price: {
      monthly: 14999,
      yearly: 11999,
    },
    description: "Advanced features for growing teams with high hiring volume.",
    features: [
      "Post up to 10 active jobs",
      "Advanced AI candidate matching",
      "Automated outreach campaigns",
      "Priority support",
      "Team collaboration tools"
    ],
    buttonText: "Upgrade to Growth",
    buttonHref: "/auth",
    popular: true,
    badge: "Most Popular",
    theme: {
      cardBg: "bg-gradient-to-b from-indigo-50/20 via-white to-white",
      border: "border-indigo-150/80 shadow-indigo-100/40 shadow-xl border-indigo-200",
      shadow: "hover:shadow-2xl hover:shadow-indigo-100/50",
      badgeBg: "bg-indigo-50",
      badgeText: "text-indigo-600",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-500",
      btnClass: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-150/20"
    }
  },
  {
    id: "scale",
    name: "Scale",
    price: {
      monthly: 39999,
      yearly: 31999,
    },
    description: "Customized solutions for enterprise recruitment needs.",
    features: [
      "Unlimited active jobs",
      "Custom AI model training",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "White-labeled career page"
    ],
    buttonText: "Contact Sales",
    buttonHref: "/auth",
    popular: false,
    theme: {
      cardBg: "bg-white/80 backdrop-blur-sm",
      border: "border-slate-200/80 hover:border-slate-300",
      shadow: "shadow-sm hover:shadow-md",
      badgeBg: "bg-slate-900",
      badgeText: "text-white",
      iconBg: "bg-slate-900",
      iconColor: "text-white",
      btnClass: "bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
    }
  }
];

// FAQs Data Array
const FAQS = [
  {
    q: "Can I switch plans or cancel at any time?",
    a: "Yes, you can upgrade, downgrade, or cancel your subscription at any time from your account settings. If you cancel, your premium benefits will remain active until the end of your billing cycle."
  },
  {
    q: "How does the AI match scoring work?",
    a: "Our AI model analyzes your skills, experiences, and resume against real-time employer requirements to show you a percentage score of how closely you match a job, helping you optimize your application."
  },
  {
    q: "What is a featured profile badge?",
    a: "When partner recruiters search for candidates on Hierance, Plus and Pro members are highlighted at the top of the search results, increasing profile visibility by up to 3x."
  },
  {
    q: "Are there any hidden transaction fees?",
    a: "No. The price you see is exactly what you pay. We do not charge application fees or take a cut of your starting salary when you find a job."
  }
];

export default function PricesPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [planType, setPlanType] = useState<"candidate" | "recruiter">("candidate");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const currentPlans = planType === "candidate" ? CANDIDATE_PLANS : RECRUITER_PLANS;

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans">
      <HomePageHeader />

      <main className="flex-grow pt-32 pb-24">
        
        {/* HERO SECTION */}
        <section className="relative px-6 max-w-7xl mx-auto mb-16 pt-4">
          <div className="absolute top-[-100px] left-1/4 -translate-x-1/2 w-[300px] h-[300px] bg-indigo-100/40 rounded-full blur-[100px] -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            {/* Left Column: Text & Controls */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-600 tracking-wide mb-6">
                <Sparkles size={12} className="animate-pulse" /> Transparent Pricing Plans
              </span>
              
              <h1 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight mb-6">
                Invest in your career. <br />
                <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-700">
                  Unlock your true earning potential.
                </span>
              </h1>
              
              <p className="text-slate-500 text-base md:text-lg max-w-2xl lg:mx-0 mx-auto font-light leading-relaxed mb-10">
                {planType === "candidate" 
                  ? "Find the plan tailored to your journey. Whether you are actively seeking new opportunities, building your skill profile, or looking for premium AI matches."
                  : "Discover the perfect tools to scale your team. Access top talent, advanced AI matching, and seamless applicant tracking."}
              </p>

              {/* PLAN TYPE TOGGLE */}
              <div className="flex items-center lg:justify-start justify-center gap-2 mb-8 bg-slate-100/80 p-1.5 rounded-full w-fit lg:mx-0 mx-auto border border-slate-200/60 shadow-inner">
                <button
                  onClick={() => setPlanType("candidate")}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    planType === "candidate" 
                      ? "bg-white text-indigo-600 shadow-sm border border-slate-200/40" 
                      : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                  }`}
                >
                  For Candidates
                </button>
                <button
                  onClick={() => setPlanType("recruiter")}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    planType === "recruiter" 
                      ? "bg-white text-indigo-600 shadow-sm border border-slate-200/40" 
                      : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                  }`}
                >
                  For Recruiters
                </button>
              </div>

              {/* BILLING TOGGLE */}
              <div className="flex items-center lg:justify-start justify-center gap-3.5">
                <span className={`text-sm font-medium transition-colors duration-200 ${billingPeriod === "monthly" ? "text-slate-900" : "text-slate-400"}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingPeriod(prev => prev === "monthly" ? "yearly" : "monthly")}
                  className="w-14 h-8 bg-slate-200 hover:bg-slate-300 rounded-full p-1 transition-colors duration-300 relative focus:outline-none"
                  aria-label="Toggle billing period"
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
                      billingPeriod === "yearly" ? "translate-x-6 bg-indigo-600" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium transition-colors duration-200 ${billingPeriod === "yearly" ? "text-slate-900" : "text-slate-400"} flex items-center gap-1.5`}>
                  Yearly 
                  <span className="px-2 py-0.5 bg-emerald-50 text-[10px] font-bold text-emerald-600 rounded-md border border-emerald-150">
                    Save 20%
                  </span>
                </span>
              </div>
            </div>

            {/* Right Column: Wallet/Cards Animation */}
            <div className="flex justify-center items-center lg:mt-0 mt-8">
              <div className="scale-95 md:scale-100 lg:scale-110">
                <WalletCards />
              </div>
            </div>
          </div>
        </section>

        {/* PRICING GRID */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {currentPlans.map((plan, index) => {
              const currentPrice = billingPeriod === "yearly" ? plan.price.yearly : plan.price.monthly;
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col justify-between p-8 md:p-10 rounded-[2.5rem] border ${plan.theme.cardBg} ${plan.theme.border} ${plan.theme.shadow} transition-all duration-500`}
                >
                  {/* Badge for Popular Plan */}
                  {plan.popular && plan.badge && (
                    <div className="absolute top-0 right-8 -translate-y-1/2">
                      <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-600 text-white shadow-lg shadow-indigo-100">
                        <Star size={10} fill="white" /> {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Header Area */}
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <h2 className="text-xl font-bold text-slate-900">{plan.name}</h2>
                      {plan.id === "plus" && (
                        <span className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
                          <Zap size={18} fill="currentColor" className="opacity-90" />
                        </span>
                      )}
                    </div>

                    <p className="text-slate-500 text-xs leading-relaxed mb-8 font-light min-h-[40px]">
                      {plan.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-8 flex items-baseline gap-1 text-slate-900">
                      <span className="text-4xl md:text-5xl font-semibold tracking-tight">
                        ₹{currentPrice}
                      </span>
                      <span className="text-sm text-slate-400 font-medium">
                        / month
                      </span>
                      {billingPeriod === "yearly" && currentPrice > 0 && (
                        <span className="block text-[10px] text-emerald-600 font-semibold ml-2">
                          (Billed annually)
                        </span>
                      )}
                    </div>

                    <div className="h-px bg-slate-100 w-full mb-8" />

                    {/* Features List */}
                    <ul className="space-y-4 mb-10">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${plan.popular ? "bg-indigo-50 text-indigo-500" : "bg-slate-100 text-slate-400"}`}>
                            <Check size={12} className="stroke-[3]" />
                          </div>
                          <span className="text-slate-600 text-xs font-normal leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <Link href={plan.buttonHref} className="w-full">
                    <button className={`w-full py-4 rounded-2xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${plan.theme.btnClass}`}>
                      {plan.buttonText}
                    </button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ENTERPRISE CALLOUT */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200/80 shadow-lg shadow-slate-100/40">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-100/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-100/60 rounded-full text-[10px] font-bold uppercase tracking-wider text-indigo-600 mb-4">
                Enterprise Solutions
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Looking to hire scale developers?</h3>
              <p className="text-slate-500 text-xl leading-relaxed font-light">
                Get custom recruiting packages, automated ATS matching pipelines, candidate assessments, and dedicated recruitment success managers for your business.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <Link href="/legal/contact">
                <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-semibold tracking-wider uppercase shadow-md shadow-indigo-100/40 transition-all cursor-pointer">
                  Contact Enterprise Sales
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light text-slate-800 tracking-tight text-center mb-12">
            Frequently Asked <span className="font-semibold text-slate-900">Questions</span>
          </h2>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={expandedFaq === index}
                >
                  <span className="text-sm font-semibold text-slate-800 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={16} 
                    className={`text-slate-400 transition-transform duration-300 shrink-0 ${expandedFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                
                {expandedFaq === index && (
                  <div className="px-6 pb-6 pt-0 border-t border-slate-50">
                    <p className="text-slate-500 text-xs leading-relaxed font-light pt-4">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
