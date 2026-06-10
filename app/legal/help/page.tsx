"use client";

import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import Footer from "@/shared/components/layout/Footer";
import Image from "next/image";
import { HelpCircle, Search, MessageCircle, FileText } from "lucide-react";

export default function HelpCentre() {
  const faqs = [
    {
      q: "How do I create a profile?",
      a: "Click on the 'Register' button in the top right corner and follow the instructions to set up your candidate profile."
    },
    {
      q: "How can I upload my resume?",
      a: "Once logged in, go to your Profile section and you will find an 'Upload Resume' button in the Resume tab."
    },
    {
      q: "Is Hireance free for job seekers?",
      a: "Yes, basic job searching and profile creation are free. We also offer premium preparation plans for a one-time fee."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HomePageHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 leading-tight">How can we <br className="hidden lg:block" />help you today?</h1>
            <div className="relative max-w-xl mx-auto lg:mx-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search for articles, guides, or FAQs..."
                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 transition-colors shadow-sm"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image 
              src="/support.svg" 
              alt="Help Centre" 
              width={500} 
              height={350} 
              className="w-full max-w-[500px] h-auto object-contain"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: FileText, title: "Guides", desc: "Step-by-step instructions for using the platform." },
            { icon: MessageCircle, title: "Support", desc: "Chat with our team for personalized help." },
            { icon: HelpCircle, title: "FAQ", desc: "Quick answers to commonly asked questions." },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <h4 className="font-medium text-slate-800 mb-2">{faq.q}</h4>
                <p className="text-slate-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
