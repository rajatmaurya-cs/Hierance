"use client";

import { useState } from "react";
import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import Footer from "@/shared/components/layout/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Linkedin,
  MessageSquare,
  Building2
} from "lucide-react";

/* ─── Clean Input Component ──────────────────────────────────────────── */
function FormInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  as = "input",
  rows = 4,
  placeholder = "",
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  as?: "input" | "textarea";
  rows?: number;
  placeholder?: string;
}) {
  const sharedCls = `
    w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl
    px-4 py-3.5 text-sm text-[#334155] outline-none
    transition-all duration-300
    focus:border-[#818CF8] focus:bg-white focus:shadow-[0_0_0_4px_rgba(129,140,248,0.1)]
    placeholder-[#94A3B8] font-medium
  `;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-semibold tracking-wider text-[#64748B] uppercase ml-1">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          rows={rows}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${sharedCls} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={sharedCls}
        />
      )}
    </div>
  );
}

/* ─── Bento Info Card ────────────────────────────────────────────────── */
function BentoCard({
  icon: Icon,
  title,
  content,
  subContent,
  colorScheme,
}: {
  icon: React.ElementType;
  title: string;
  content: string;
  subContent?: string;
  colorScheme: "blue" | "purple" | "rose" | "amber" | "emerald";
}) {
  const schemes = {
    blue: "bg-[#EFF6FF] text-[#1E3A8A] icon-[#3B82F6] border-[#DBEAFE]",
    purple: "bg-[#FAF5FF] text-[#581C87] icon-[#A855F7] border-[#F3E8FF]",
    rose: "bg-[#FFF1F2] text-[#881337] icon-[#F43F5E] border-[#FFE4E6]",
    amber: "bg-[#FFFBEB] text-[#78350F] icon-[#F59E0B] border-[#FEF3C7]",
    emerald: "bg-[#ECFDF5] text-[#064E3B] icon-[#10B981] border-[#D1FAE5]",
  };

  const scheme = schemes[colorScheme];
  const [bgCls, textCls, iconCls, borderCls] = scheme.split(" ").map(s => s.split("-")[1]);

  return (
    <div className={`p-6 rounded-3xl ${scheme.split(" ")[0]} border ${scheme.split(" ")[3]} flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-1`}>
      <div className="mb-4">
        <div className={`w-10 h-10 rounded-2xl bg-white/60 flex items-center justify-center mb-4 shadow-sm`}>
          <Icon size={20} className={scheme.split(" ")[2].replace("icon-[", "").replace("]", "")} />
        </div>
        <h3 className={`text-sm font-semibold tracking-wide uppercase opacity-70 ${scheme.split(" ")[1]}`}>
          {title}
        </h3>
      </div>
      <div>
        <p className={`text-base font-medium leading-snug ${scheme.split(" ")[1]}`}>
          {content}
        </p>
        {subContent && (
          <p className={`text-sm mt-1 opacity-80 ${scheme.split(" ")[1]}`}>
            {subContent}
          </p>
        )}
      </div>
    </div>
  );
}

/* ─── Page Component ─────────────────────────────────────────────────── */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] text-[#334155] font-sans selection:bg-[#818CF8] selection:text-white">
      <HomePageHeader />

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-6">
            <MessageSquare size={14} className="text-[#818CF8]" />
            <span className="text-xs font-semibold tracking-wider text-[#64748B] uppercase">Get in touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight mb-6">
            Let's start a conversation
          </h1>
          <p className="text-lg text-[#64748B] font-medium leading-relaxed">
            Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bento Grid for Contact Info */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <BentoCard
                icon={Building2}
                title="Our Office"
                content="7-1-458 Ameerpet, Hyderabad"
                subContent="Telangana, India — 500016"
                colorScheme="blue"
              />
            </div>
            <BentoCard
              icon={Phone}
              title="Call Us"
              content="040 47088764"
              colorScheme="purple"
            />
            <BentoCard
              icon={Mail}
              title="Email Us"
              content="info@smallfare.com"
              colorScheme="rose"
            />
            <div className="sm:col-span-2">
              <BentoCard
                icon={Clock}
                title="Business Hours"
                content="Monday – Saturday"
                subContent="9:00 AM – 7:00 PM IST"
                colorScheme="emerald"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#F1F5F9]">
              {isSubmitted ? (
                <div className="py-20 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-[#ECFDF5] rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-[#10B981]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Message Sent Successfully!</h2>
                  <p className="text-[#64748B] text-lg max-w-md mx-auto">
                    Thanks for reaching out. We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput
                      id="name"
                      label="Full Name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(v) => setFormData(p => ({ ...p, name: v }))}
                    />
                    <FormInput
                      id="email"
                      label="Email Address"
                      type="email"
                      placeholder="john@company.com"
                      required
                      value={formData.email}
                      onChange={(v) => setFormData(p => ({ ...p, email: v }))}
                    />
                  </div>
                  <FormInput
                    id="subject"
                    label="Subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(v) => setFormData(p => ({ ...p, subject: v }))}
                  />
                  <FormInput
                    id="message"
                    label="Your Message"
                    as="textarea"
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    required
                    value={formData.message}
                    onChange={(v) => setFormData(p => ({ ...p, message: v }))}
                  />
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full md:w-auto px-8 py-4 bg-[#6366F1] hover:bg-[#4F46E5] text-white rounded-xl font-semibold tracking-wide transition-all duration-300 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {submitting ? (
                        <>
                          <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Other Channels Section */}
        <div className="mt-24 pt-16 border-t border-[#E2E8F0]">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0F172A]">Connect with us elsewhere</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto gap-6">
            <a 
              href="https://www.linkedin.com/company/smallfare" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#818CF8] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#EEF2FF] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Linkedin size={24} className="text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-1">LinkedIn</h3>
                <p className="text-[#0F172A] font-medium group-hover:text-[#6366F1] transition-colors">Follow our updates</p>
              </div>
            </a>

            <a 
              href="mailto:info@smallfare.com" 
              className="group flex items-center gap-5 p-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#F43F5E] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#FFF1F2] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} className="text-[#F43F5E]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-1">Direct Email</h3>
                <p className="text-[#0F172A] font-medium group-hover:text-[#F43F5E] transition-colors">info@smallfare.com</p>
              </div>
            </a>

            <a 
              href="tel:04047088764" 
              className="group flex items-center gap-5 p-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#A855F7] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#FAF5FF] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone size={24} className="text-[#A855F7]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-1">Call Us</h3>
                <p className="text-[#0F172A] font-medium group-hover:text-[#A855F7] transition-colors">040 47088764</p>
              </div>
            </a>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
