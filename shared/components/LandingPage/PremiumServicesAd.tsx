import Image from "next/image";
import {
  Zap,
  FileText,
  Target,
  Shield,
  ChevronRight,
} from "lucide-react";

export default function PremiumServicesAd() {
  const features = [
    { icon: Zap, text: "AI Job Matching" },
    { icon: FileText, text: "Resume Writing" },
    { icon: Target, text: "Easy Shortlisting" },
    { icon: Shield, text: "Trusted Platform" },
  ];

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40 min-h-[calc(100vh-72px)] flex items-center justify-center pt-12 pb-12 px-6 md:pt-16 md:pb-16 md:px-8">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Logo */}
      <div className="absolute right-6 top-6 md:right-10 md:top-10">
        <div className="relative h-12 w-40">
          <Image
            src="/hireance-PNG-logo.png"
            alt="Hireance"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 w-full max-w-7xl mx-auto px-6 md:px-8">

        {/* Left Side Illustration */}
        <div className="relative shrink-0">

          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full scale-90" />

          <div className="relative w-[350px] sm:w-[450px] lg:w-[550px] xl:w-[650px]">

            <Image
              src="Hire.png"
              // src="/Hire2.jpg"
              alt="Hireance Illustration"
              width={700}
              height={700}
              priority
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(79,70,229,0.20)]"
            />

          </div>
        </div>

        {/* Right Side Content */}
        <div className="flex-1 max-w-2xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            ✨ Trusted by 1M+ Job Seekers
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Land Your Dream Job
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Faster Than Ever
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Discover 10,000+ verified opportunities with AI-powered
            matching, ATS-optimized resumes, recruiter visibility,
            priority applications, and premium career services — all in
            one platform.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-8">

            <div>
              <div className="text-3xl font-bold text-slate-900">
                10K+
              </div>
              <div className="text-sm text-slate-500">
                Active Jobs
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold text-slate-900">
                1M+
              </div>
              <div className="text-sm text-slate-500">
                Users Trust Us
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold text-slate-900">
                AI
              </div>
              <div className="text-sm text-slate-500">
                Smart Matching
              </div>
            </div>

          </div>

          {/* Features */}
          <div className="mt-8 flex flex-wrap gap-3">

            {features.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <item.icon
                  size={16}
                  className="text-indigo-600"
                />

                <span className="text-sm font-medium text-slate-700">
                  {item.text}
                </span>
              </div>
            ))}

          </div>

       
         

          <p className="mt-4 text-sm text-slate-500">
            Resume Writing • AI Matching • Priority Applications •
            Recruiter Visibility
          </p>

        </div>

      </div>
    </div>
  );
}