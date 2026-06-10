import { Zap } from "lucide-react";

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto px-6 text-center">

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50/50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-8 animate-float mt-4">
        <Zap size={16} className="text-indigo-500" /> Over 10,000+ new jobs posted every day
      </div>

      <h1 className="text-6xl md:text-7xl font-light tracking-tight text-slate-900 leading-[1.1] mb-8">
        Discover your next <br />
        <span className="text-indigo-600">Great Adventure</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-700 font-light max-w-2xl mx-auto mb-12">
        Explore thousands of job opportunities from top companies and startups. 
        The future of your career starts right here.
      </p>
    </div>
  );
}
