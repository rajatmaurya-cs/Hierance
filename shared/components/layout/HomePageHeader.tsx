"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  ChevronDown, 
  Globe, 
  Briefcase, 
  Building2, 
  Mail, 
  MapPin, 
  Sparkles, 
  Info,
  Menu, 
  X,
  Cpu,
  CheckCircle2,
  ArrowUpRight,
  IndianRupee
} from "lucide-react";

export default function HomePageHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'company' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll for sticky glassmorphic header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      onMouseLeave={() => setActiveMenu(null)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled || activeMenu
          ? "py-3 bg-white/80 backdrop-blur-xl border-indigo-100/50 shadow-[0_2px_15px_-3px_rgba(79,70,229,0.05)]" 
          : "py-4 bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8">
        
        {/* LEFT LOGO & NAV */}
        <div className="flex items-center gap-10 lg:gap-14">
          <Link 
            href="/" 
            onMouseEnter={() => setActiveMenu(null)}
            className="flex items-center transform hover:scale-[1.02] transition-transform duration-300 shrink-0"
          >
            <Image
              src="/hireance-PNG-logo.png"
              alt="Hireance Logo"
              width={125}
              height={40}
              className="brightness-110 object-contain"
              style={{ height: "auto" }}
              priority
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {[
              { label: "Jobs", href: "/jobs", icon: Briefcase },
              { label: "Companies", href: "/companies", icon: Building2 },
              { label: "Services", href: "/services", icon: Globe },
              { label: "Prices", href: "/prices", icon: IndianRupee },
            ].map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                onMouseEnter={() => setActiveMenu(null)}
                className="group flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-900 transition-all duration-200 px-3 py-1.5 rounded-full hover:bg-indigo-50/70"
              >
                <item.icon size={14} className="text-indigo-400 group-hover:text-indigo-600 transition-colors" />
                {item.label}
              </Link>
            ))}

            {/* COMPANY NAV LINK */}
            <div 
              className="py-1"
              onMouseEnter={() => setActiveMenu('company')}
            >
              <button className={`flex items-center gap-1.5 text-sm font-medium transition-all duration-200 px-3 py-1.5 rounded-full cursor-pointer ${
                activeMenu === 'company' 
                  ? "bg-indigo-50 text-indigo-900" 
                  : "text-slate-600 hover:text-indigo-900 hover:bg-indigo-50/70"
              }`}>
                <Info size={14} className="text-indigo-400" />
                Company
                <ChevronDown size={12} className={`text-indigo-400 transition-transform duration-300 ${activeMenu === 'company' ? "rotate-180" : ""}`} />
              </button>
            </div>
          </nav>
        </div>

        {/* RIGHT ACTIONS */}
        <div 
          className="flex items-center gap-6"
          onMouseEnter={() => setActiveMenu(null)}
        >
          <div className="hidden md:flex items-center gap-3">
            <Link href="/auth">
              <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-900 hover:bg-indigo-50/80 rounded-full transition-all duration-200 cursor-pointer">
                Login
              </button>
            </Link>

            <Link href="/auth">
              <button className="px-5 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:bg-indigo-700 hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] active:bg-indigo-800 transform hover:-translate-y-[1px] transition-all duration-200 cursor-pointer">
                Register
              </button>
            </Link>
          </div>

          {/* HAMBURGER MENU BUTTON (MOBILE) */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl hover:bg-indigo-50 text-slate-600 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* DESKTOP MEGA MENU */}
      <div className="hidden md:block absolute top-full left-0 w-full">
        {/* Soft scrim — hovering here closes the menu */}
        <div 
          className={`fixed inset-0 top-[60px] bg-black/[0.06] transition-opacity duration-400 ${
            activeMenu === 'company' ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          onMouseEnter={() => setActiveMenu(null)}
        />

        {/* Menu Panel */}
        <div 
          className={`absolute top-0 left-0 w-full bg-white rounded-b-4xl border-t border-indigo-100/60 shadow-[0_24px_48px_-12px_rgba(79,70,229,0.06),0_0_0_1px_rgba(79,70,229,0.03)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${
            activeMenu === 'company' 
              ? "opacity-100 translate-y-0 visible" 
              : "opacity-0 -translate-y-2 invisible pointer-events-none"
          }`}
        >
          <div className="max-w-[1200px] mx-auto px-10 py-10">
            {/* Top: Section label */}
            <div className="flex items-center justify-between mb-8 pb-5 border-b border-indigo-50/60">
              <p className="text-[11px] font-medium text-indigo-400/80 uppercase tracking-[0.15em]">Company</p>
              <a href="mailto:support@hierance.com" className="text-[11px] text-indigo-400 hover:text-indigo-600 transition-colors font-medium">
                support@hierance.com
              </a>
            </div>

            {/* Main Grid — 4 columns */}
            <div className="grid grid-cols-4 gap-6">

              {/* Col 1: About */}
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-semibold text-indigo-400/80 uppercase tracking-[0.18em] mb-3 pl-3">About</p>
                
                <Link href="/about" className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-indigo-50/50 transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100/70 transition-colors mt-0.5">
                    <Sparkles size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-indigo-950 group-hover:text-indigo-600 transition-colors block leading-snug">Our Story</span>
                    <span className="text-[11px] text-slate-400 leading-relaxed mt-0.5 block">Mission, values &amp; vision</span>
                  </div>
                </Link>

                <Link href="/leadership" className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-indigo-50/50 transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100/70 transition-colors mt-0.5">
                    <Building2 size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-indigo-950 group-hover:text-indigo-600 transition-colors block leading-snug">Leadership</span>
                    <span className="text-[11px] text-slate-400 leading-relaxed mt-0.5 block">Meet the executive team</span>
                  </div>
                </Link>

                <Link href="/careers" className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-indigo-50/50 transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100/70 transition-colors mt-0.5">
                    <Briefcase size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-indigo-950 group-hover:text-indigo-600 transition-colors block leading-snug">Careers</span>
                    <span className="text-[11px] text-slate-400 leading-relaxed mt-0.5 block">Open roles at Hierance</span>
                  </div>
                </Link>
              </div>

              {/* Col 2: Resources */}
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-semibold text-indigo-400/80 uppercase tracking-[0.18em] mb-3 pl-3">Resources</p>
                
                <Link href="/news" className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-indigo-50/50 transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100/70 transition-colors mt-0.5">
                    <Globe size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-indigo-950 group-hover:text-indigo-600 transition-colors block leading-snug">Newsroom</span>
                    <span className="text-[11px] text-slate-400 leading-relaxed mt-0.5 block">Company announcements</span>
                  </div>
                </Link>

                <Link href="/blog" className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-indigo-50/50 transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100/70 transition-colors mt-0.5">
                    <Cpu size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-indigo-950 group-hover:text-indigo-600 transition-colors block leading-snug">Blog</span>
                    <span className="text-[11px] text-slate-400 leading-relaxed mt-0.5 block">Insights on tech &amp; hiring</span>
                  </div>
                </Link>

                <Link href="/press" className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-indigo-50/50 transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100/70 transition-colors mt-0.5">
                    <Info size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-indigo-950 group-hover:text-indigo-600 transition-colors block leading-snug">Press Kit</span>
                    <span className="text-[11px] text-slate-400 leading-relaxed mt-0.5 block">Brand assets &amp; media</span>
                  </div>
                </Link>
              </div>

              {/* Col 3: Support */}
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-semibold text-indigo-400/80 uppercase tracking-[0.18em] mb-3 pl-3">Support</p>
                
                <Link href="/legal/contact" className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-indigo-50/50 transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100/70 transition-colors mt-0.5">
                    <Mail size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-indigo-950 group-hover:text-indigo-600 transition-colors block leading-snug">Contact</span>
                    <span className="text-[11px] text-slate-400 leading-relaxed mt-0.5 block">Reach our support team</span>
                  </div>
                </Link>

                <Link href="/help" className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-indigo-50/50 transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100/70 transition-colors mt-0.5">
                    <CheckCircle2 size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-indigo-950 group-hover:text-indigo-600 transition-colors block leading-snug">Help Center</span>
                    <span className="text-[11px] text-slate-400 leading-relaxed mt-0.5 block">Guides &amp; documentation</span>
                  </div>
                </Link>

                <div className="flex items-start gap-3 px-3 py-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-indigo-950 block leading-snug">Offices</span>
                    <span className="text-[11px] text-slate-400 leading-relaxed mt-0.5 block">San Francisco &middot; Bangalore</span>
                  </div>
                </div>
              </div>

              {/* Col 4: Featured card */}
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-semibold text-indigo-400/80 uppercase tracking-[0.18em] mb-3 pl-0">Featured</p>
                
                <div className="bg-indigo-50/30 rounded-2xl p-6 border border-indigo-100/50 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-[15px] font-semibold text-indigo-950 mb-2 leading-snug">Why choose Hierance?</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed mb-6">
                      Precision AI matching, verified talent pools, and seamless discovery — built to bridge ambition with innovation.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5 text-[11px] text-slate-500">
                      <div className="w-1 h-1 rounded-full bg-indigo-300" />
                      1,200+ verified premium roles
                    </div>
                    <div className="flex items-center gap-2.5 text-[11px] text-slate-500">
                      <div className="w-1 h-1 rounded-full bg-indigo-300" />
                      AI-powered match scoring
                    </div>
                    <div className="flex items-center gap-2.5 text-[11px] text-slate-500">
                      <div className="w-1 h-1 rounded-full bg-indigo-300" />
                      Pre-screened talent pool
                    </div>
                  </div>

                  <Link href="/services" className="mt-6">
                    <button className="w-full py-2.5 bg-indigo-600 text-white rounded-lg text-[11px] font-semibold tracking-wide hover:bg-indigo-700 transition-colors cursor-pointer shadow-[0_4px_14px_rgba(79,70,229,0.2)]">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div 
        className={`fixed inset-x-0 top-[65px] bottom-0 z-40 bg-white/95 backdrop-blur-xl border-t border-indigo-100/40 flex flex-col p-6 transition-all duration-300 md:hidden overflow-y-auto ${
          mobileMenuOpen 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {[
            { label: "Jobs", href: "/jobs", icon: Briefcase },
            { label: "Companies", href: "/companies", icon: Building2 },
            { label: "Services", href: "/services", icon: Globe },
            { label: "Prices", href: "/prices", icon: IndianRupee },
          ].map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 text-base font-semibold text-slate-800 hover:text-indigo-700 py-1 transition-colors"
            >
              <item.icon size={18} className="text-indigo-400" />
              {item.label}
            </Link>
          ))}
          
          <div className="h-px bg-indigo-100/60 my-2" />

          {/* Company (Mobile Accordion Card) */}
          <div className="flex flex-col gap-4 bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100/40">
            <div className="flex items-start gap-3">
              <Sparkles size={18} className="text-indigo-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-indigo-950 mb-1">About Hierance</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  At Hierance, we bridge ambition with innovation. By combining precision AI matching with seamless discovery, we empower job seekers to land roles where they thrive and enable employers to build the future with absolute confidence.
                </p>
              </div>
            </div>
            
            <div className="h-px bg-indigo-100/40 my-1" />
            
            <div className="space-y-3">
              <h5 className="text-xs font-semibold text-indigo-900 uppercase tracking-wider">Contact Info</h5>
              <a href="mailto:support@hierance.com" className="flex items-center gap-3 text-xs text-slate-600 hover:text-indigo-700">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-indigo-100 text-indigo-400 shrink-0">
                  <Mail size={13} />
                </div>
                support@hierance.com
              </a>
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-indigo-100 text-indigo-400 shrink-0">
                  <MapPin size={13} />
                </div>
                Bangalore, India & SF, CA
              </div>
              <Link 
                href="/legal/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 block text-center py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-semibold text-[11px] uppercase tracking-wider transition-colors"
              >
                Open Contact Form
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Authentication */}
        <div className="mt-8 flex flex-col gap-3">
          <Link href="/auth" onClick={() => setMobileMenuOpen(false)} className="w-full">
            <button className="w-full py-3 text-center border border-indigo-200 text-indigo-700 hover:bg-indigo-50 rounded-xl text-sm font-semibold transition-colors cursor-pointer">
              Login
            </button>
          </Link>
          <Link href="/auth" onClick={() => setMobileMenuOpen(false)} className="w-full">
            <button className="w-full py-3 text-center bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl text-sm font-semibold shadow-sm transition-all cursor-pointer">
              Register
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}