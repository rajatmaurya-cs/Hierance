"use client";

import Link from "next/link";
import { Gem, Bot, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function ProBanner() {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-r from-[#4834df] via-[#5b45f4] to-[#4834df] text-white p-8 md:p-10 shadow-2xl flex items-center justify-center text-center mx-auto min-h-[220px]">
      
      {/* Background decorative concentric rings */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none overflow-hidden">
        {/* Left Rings */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border-[1.5px] border-white"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full border-[1.5px] border-white"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full border-[1.5px] border-white bg-[#3020b0]/50"></div>
        
        {/* Right Rings */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full border-[1.5px] border-white"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[350px] h-[350px] rounded-full border-[1.5px] border-white"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[200px] h-[200px] rounded-full border-[1.5px] border-white bg-[#3020b0]/50"></div>
      </div>

      {/* Decorative Icons mimicking the characters in the screenshot */}
      <div className="hidden md:flex absolute left-12 top-1/2 -translate-y-1/2 z-10 flex-col items-center">
        <div className="w-24 h-24 bg-blue-500/20 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center transform -rotate-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <Bot size={50} className="text-white opacity-90 drop-shadow-md" />
        </div>
      </div>
      <div className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 z-10 flex-col items-center">
        <div className="w-24 h-24 bg-yellow-500/20 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center transform rotate-6 shadow-[0_0_30px_rgba(255,215,0,0.1)]">
          <GraduationCap size={50} className="text-[#FFD700] opacity-90 drop-shadow-md" />
        </div>
      </div>

      <div className="relative z-20 w-full max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Headline */}
        <h2 className="text-3xl md:text-[2.5rem] font-bold mb-5 tracking-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-2 leading-tight">
          Upgrade Your Career
          <span className="relative text-[#FFD700] whitespace-nowrap">
            with AI
            {/* Hand-drawn style ellipse using an SVG */}
            <svg className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] text-white/80" viewBox="0 0 100 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="50" cy="20" rx="48" ry="18" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              {/* Star sparkle */}
              <path d="M88 0 L90 5 L95 7 L90 9 L88 14 L86 9 L81 7 L86 5 Z" fill="currentColor" stroke="none" />
            </svg>
          </span>
        </h2>

        {/* Pill tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
          <span className="px-3.5 py-1.5 bg-white/[0.15] backdrop-blur-md rounded text-sm font-semibold border border-white/30 shadow-sm text-white/95">
            AI-powered mock interviews
          </span>
          <span className="px-3.5 py-1.5 bg-white/[0.15] backdrop-blur-md rounded text-sm font-semibold border border-white/30 shadow-sm text-white/95">
            Mock tests
          </span>
          <span className="px-3.5 py-1.5 bg-white/[0.15] backdrop-blur-md rounded text-sm font-semibold border border-white/30 shadow-sm text-white/95">
            Career-ready courses
          </span>
        </div>

        {/* Subtext */}
        <p className="text-[17px] text-white/95 font-medium mb-5 drop-shadow-sm">
          All included with <span className="font-bold">Hireance Pro</span>
        </p>

        {/* Button */}
        <Link href="/prices">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-[#ffc107] hover:bg-[#ffcd38] text-[#332288] rounded-full font-bold text-[15px] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,193,7,0.4)] transition-colors cursor-pointer"
          >
            <Gem size={18} className="text-[#4834df] fill-[#4834df]" />
            Go Pro
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
