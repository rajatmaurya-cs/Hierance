"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, CheckCircle2, ShieldCheck } from "lucide-react";
import animationData from "@/public/forgotpassword.json";
import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import Footer from "@/shared/components/layout/Footer";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f8fc]">
      <HomePageHeader />

      <main className="relative flex-1 flex items-center justify-center px-4 md:px-12 py-6 pt-24 pb-12 md:pt-28 md:pb-16">
        {/* Main Container Grid - items-stretch forces identical column heights */}
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
                      Forgot Password?
                    </h2>
                    <p className="mt-1 text-xs text-gray-500">
                      Enter your credentials to access your account
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Email Input Field */}
                    <div>
                      <label className="mb-1 block text-[10px] font-semibold text-gray-700">
                        Email Address
                      </label>
                      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-[#f9fafc] px-3.5 py-2transition-all focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
                        <Mail size={16} className="text-gray-400 flex-shrink-0" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full bg-transparent text-xs text-gray-900 placeholder:text-gray-400 outline-none p-3.5"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full mt-2 rounded-xl bg-[#5956ff] py-2.5 font-semibold text-white shadow-lg shadow-indigo-100 transition-all hover:bg-[#4845e0] active:scale-[0.99]"
                    >
                      Send Reset Link
                    </button>
                  </form>

                  {/* Return/Footer Link */}
                  <p className="mt-4 text-center text-xs text-gray-500">
                    Remember your password?{" "}
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
                    Check Your Email
                  </h2>

                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    We've sent a password reset link to:
                  </p>

                  <div className="mt-2 rounded-xl border border-gray-100 bg-[#f9fafc] px-4 py-2 text-xs font-medium text-gray-800 break-all">
                    {email}
                  </div>

                  <p className="mt-4 text-[10px] text-gray-400 leading-normal">
                    Didn't receive the email? Check your spam folder or try again.
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-blue-600 hover:underline"
                  >
                    Try Again
                  </button>

                  <Link
                    href="/auth"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-2.5 text-xs font-semibold text-gray-700 transition-all hover:bg-gray-50"
                  >
                    <ArrowLeft size={14} />
                    Back to Login
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* LEFT SIDE - Animation + Text - Shows second on mobile */}
          <div className="flex h-full items-center justify-center order-2 lg:order-1">
            <div className="flex h-full w-full flex-col justify-between rounded-2xl p-2 lg:p-4 text-center max-w-lg mx-auto">

              {/* Expanded height limits allow the compact asset to scale out to look visually equal */}
              <div className="w-full flex-1 flex items-center justify-center min-h-[200px] lg:min-h-[240px] max-h-[260px] mb-2">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  style={{ height: "100%", width: "auto" }}
                  className="object-contain max-h-[200px] lg:max-h-[240px] drop-shadow-[0_0_35px_rgba(59,130,246,0.12)]"
                />
              </div>

              {/* Content Stack */}
              <div className="w-full mt-2">
                {/* Badge */}
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-gradient-to-r from-indigo-50 to-blue-50 px-3 py-1 text-[10px] font-semibold text-indigo-600 shadow-sm">
                  <ShieldCheck size={12} className="text-indigo-500" />
                  Secure Account Recovery
                </div>

                {/* Heading Area */}
                <div className="w-full">
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 leading-tight">
                    Reset Your Password
                    <span className="block mt-0.5 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                      Safely & Quickly
                    </span>
                  </h1>
                </div>

                {/* Description Paragraph */}
                <p className="mt-2 text-xs leading-relaxed text-gray-500 px-4">
                  Happens to everyone. Enter your email and we'll send you a{" "}
                  <span className="font-semibold text-gray-900">secure reset link</span> to
                  get you back to <span className="font-semibold text-indigo-600">Hierance</span> instantly.
                </p>
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