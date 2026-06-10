"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, User, Lock, CheckCircle2 } from "lucide-react";
import animationData from "@/public/Welcome.json";
import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import Footer from "@/shared/components/layout/Footer";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password });
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f8fc]">
      <HomePageHeader />

      <main className="relative flex-1 flex items-center justify-center px-4 md:px-12 py-6 pt-24 pb-12 md:pt-28 md:pb-16">
        {/* Main Container Grid - items-stretch balances column heights globally */}
        <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-10">

          {/* RIGHT SIDE - Form Authentication Card - Shows first on mobile */}
          <div className="flex h-full items-center justify-center w-full order-1 lg:order-2">
            <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-5 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              
              {/* Branded Logo */}
              <div className="mb-4 flex justify-start">
                <Image
                  src="/hireance-PNG-logo.png"
                  alt="Hierance Logo"
                  width={100}
                  height={28}
                  className="h-6.5 w-auto object-contain"
                  priority
                />
              </div>

              {!isSubmitted? (
                <>
                  {/* Heading */}
                  <div className="mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                      Create Account
                    </h2>
                    <p className="mt-1 text-xs text-gray-500">
                      Enter your credentials to access your account
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Full Name Input Field */}
                    <div>
                      <label className="mb-1 block text-[10px] font-semibold text-gray-700">
                        Full Name
                      </label>
                      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-[#f9fafc] px-3.5 py-2 transition-all focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
                        <User size={16} className="text-gray-400 flex-shrink-0" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your full name"
                          className="w-full bg-transparent text-xs text-gray-900 placeholder:text-gray-400 outline-none p-1"
                        />
                      </div>
                    </div>

                    {/* Email Input Field */}
                    <div>
                      <label className="mb-1 block text-[10px] font-semibold text-gray-700">
                        Email Address
                      </label>
                      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-[#f9fafc] px-3.5 py-2 transition-all focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
                        <Mail size={16} className="text-gray-400 flex-shrink-0" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full bg-transparent text-xs text-gray-900 placeholder:text-gray-400 outline-none p-1"
                        />
                      </div>
                    </div>

                    {/* Password Input Field */}
                    <div>
                      <label className="mb-1 block text-[10px] font-semibold text-gray-700">
                        Password
                      </label>
                      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-[#f9fafc] px-3.5 py-2 transition-all focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
                        <Lock size={16} className="text-gray-400 flex-shrink-0" />
                        <input
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Create a password"
                          className="w-full bg-transparent text-xs text-gray-900 placeholder:text-gray-400 outline-none p-1"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full mt-1.5 rounded-xl bg-[#5956ff] py-2.5 font-semibold text-white shadow-lg shadow-indigo-100 transition-all hover:bg-[#4845e0] active:scale-[0.99]"
                    >
                      Sign Up
                    </button>
                  </form>

                  {/* Divider Line */}
                  <div className="my-4 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gray-100" />
                    <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">Or Continue With</span>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>

                  {/* Social Auth Buttons Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {/* Google Button */}
                    <button type="button" className="flex items-center justify-center rounded-xl border border-gray-200 bg-white py-2 transition-all hover:bg-gray-50 active:scale-[0.98]">
                      <Image
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                    </button>
                    
                    {/* GitHub Button */}
                    <button type="button" className="flex items-center justify-center rounded-xl border border-gray-200 bg-white py-2 transition-all hover:bg-gray-50 active:scale-[0.98]">
                      <Image
                        src="https://www.svgrepo.com/show/512317/github-142.svg"
                        alt="GitHub"
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                    </button>

                    {/* Apple Button */}
                    <button type="button" className="flex items-center justify-center rounded-xl border border-gray-200 bg-white py-2 transition-all hover:bg-gray-50 active:scale-[0.98]">
                      <Image
                        src="https://www.svgrepo.com/show/511330/apple-173.svg"
                        alt="Apple"
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                    </button>
                  </div>

                  {/* Return/Footer Link */}
                  <p className="mt-4 text-center text-xs text-gray-500">
                    Already have an account?{" "}
                    <Link
                      href="/auth"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Sign In
                    </Link>
                  </p>
                </>
              ) : (
                /* Success State Card View */
                <div className="text-center py-2">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle2 size={24} className="text-green-500" />
                  </div>

                  <h2 className="text-xl font-bold text-gray-900">
                    Account Created!
                  </h2>

                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    Welcome aboard, {name}! We've sent a verification link to:
                  </p>

                  <div className="mt-2 rounded-xl border border-gray-100 bg-[#f9fafc] px-4 py-2 text-xs font-medium text-gray-800 break-all">
                    {email}
                  </div>

                  <p className="mt-4 text-[10px] text-gray-400 leading-normal">
                    Please click the link in your inbox to verify your account and start your journey.
                  </p>

                  <Link
                    href="/auth"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-2.5 text-xs font-semibold text-gray-700 transition-all hover:bg-gray-50"
                  >
                    <ArrowLeft size={14} />
                    Proceed to Sign In
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* LEFT SIDE - Animation + Text - Shows second on mobile */}
          <div className="flex h-full items-center justify-center order-2 lg:order-1">
            <div className="flex h-full w-full flex-col rounded-2xl p-2 lg:p-4 text-center max-w-lg mx-auto">

              {/* flex-1 wrapper dynamically stretches and maximizes animation display room */}
              <div className="w-full flex items-center justify-center min-h-[200px] lg:min-h-[240px] max-h-[260px]">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  style={{ height: "100%", width: "auto" }}
                  className="object-contain max-h-[200px] lg:max-h-[240px] drop-shadow-[0_0_35px_rgba(59,130,246,0.12)]"
                />
              </div>

              {/* Content Stack */}
              <div className="mt-2 w-full">
                {/* Badge */}
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-[10px] font-medium text-blue-600 shadow-sm">
                  Trusted by Thousands of Job Seekers
                </div>

                {/* Heading Area */}
                <div className="w-full">
                  <h1 className="text-xl sm:text-2xl font-normal tracking-tight text-gray-900 leading-tight">
                    Start Your Career
                  </h1>
                </div>

                {/* Description Paragraph */}
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-500 px-4">
                  Join the platform that connects talented people with top companies worldwide. Thousands of professionals have already found their dream jobs through Hierance.
                </p>

                {/* Stats Row */}
                <div className="mt-4 flex w-full items-center justify-center gap-4 sm:gap-6 border-t border-gray-100 pt-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-900">15K+</h3>
                    <p className="text-[10px] text-gray-400 mt-0.5">Successful Hires</p>
                  </div>
                  <div className="h-6 w-px bg-gray-200" />
                  <div>
                    <h3 className="text-base font-bold text-gray-900">500+</h3>
                    <p className="text-[10px] text-gray-400 mt-0.5">Hiring Companies</p>
                  </div>
                  <div className="h-6 w-px bg-gray-200" />
                  <div>
                    <h3 className="text-base font-bold text-gray-900">95%</h3>
                    <p className="text-[10px] text-gray-400 mt-0.5">Placement Success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Decorative Bottom Left Corner Icon/Watermark */}
        <div className="absolute bottom-6 left-6 hidden lg:flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-xs font-bold font-serif shadow-sm">
          N
        </div>
      </main>

      <Footer />
    </div>
  );
}