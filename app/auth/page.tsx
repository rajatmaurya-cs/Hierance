"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Image from "next/image";
import { Mail, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import Footer from "@/shared/components/layout/Footer";

export default function AuthPage() {
  const [animationData, setAnimationData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/Login2.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f8fc]">
      <HomePageHeader />

      {/* Tightened layout container */}
      <main className="flex-1 flex items-center justify-center px-6 py-6 pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="relative w-full max-w-7xl">
          {/* Soft Background Glow */}
          <div className="absolute left-1/2 top-1/2 h- w- -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/40 blur-3xl -z-10" />

          {/* items-stretch makes both grid cells equal height */}
          <div className="relative z-10 grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-10">

            {/* RIGHT SIDE - LOGIN CARD - Shows first on mobile */}
            <div className="flex h-full items-center justify-center order-1 lg:order-2">
              <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white/80 p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-2xl">
                {/* Heading */}
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Login</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Enter your credentials to access your account
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-4">
                  {/* Email */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-gray-700">
                      Email Address
                    </label>
                    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-[#f9fafc] px-4 py-2.5 transition-all focus-within:border-blue-400 focus-within:bg-white focus-within:shadow-md">
                      <Mail size={16} className="text-gray-400" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 outline-none"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-gray-700">
                      Password
                    </label>
                    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-[#f9fafc] px-4 py-2.5 transition-all focus-within:border-blue-400 focus-within:bg-white focus-within:shadow-md">
                      <LockKeyhole size={16} className="text-gray-400" />
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 outline-none"
                      />
                    </div>
                  </div>

                  {/* Forgot Password */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => router.push("/auth/forgotpassword")}
                      className="text-xs text-blue-500 transition hover:text-blue-600"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-indigo-500 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Sign In
                  </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-xs text-gray-400 font-medium">OR CONTINUE WITH</span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-3 gap-3">
                  <button className="flex items-center justify-center rounded-xl border border-gray-200 bg-white py-2.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-sm">
                    <Image
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google"
                      width={20}
                      height={20}
                    />
                  </button>
                  <button className="flex items-center justify-center rounded-xl border border-gray-200 bg-white py-2.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-sm">
                    <Image
                      src="https://www.svgrepo.com/show/512317/github-142.svg"
                      alt="GitHub"
                      width={20}
                      height={20}
                    />
                  </button>
                  <button className="flex items-center justify-center rounded-xl border border-gray-200 bg-white py-2.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-sm">
                    <Image
                      src="https://www.svgrepo.com/show/511330/apple-173.svg"
                      alt="Apple"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>

                {/* Footer Link */}
                <p className="mt-6 text-center text-sm text-gray-500">
                  Don’t have an account?{" "}
                  <Link href={'/auth/createaccount'}
                    className="cursor-pointer font-medium text-blue-500 hover:text-blue-600">
                    Create Account
                  </Link>
                </p>
              </div>
            </div>

            {/* LEFT SIDE - Animation + Text - Shows second on mobile */}
            <div className="flex h-full items-center justify-center order-2 lg:order-1">
              <div className="flex h-full w-full flex-col justify-between p-4 lg:p-6 text-center">
                <div className="mx-auto w-full max-w-md">
                  {animationData && (
                    <Lottie
                      animationData={animationData}
                      loop={true}
                      className="mx-auto max-h-[220px] lg:max-h-[260px] drop-shadow-[0_0_35px_rgba(59,130,246,0.12)]"
                    />
                  )}
                </div>

                <div className="mt-4 text-center">
                  {/* Badge */}
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-blue-600 shadow-sm backdrop-blur-xl">
                    Trusted by Thousands of Job Seekers
                  </div>

                  {/* Heading */}
                  <div className="text-center">
                    <h1 className="text-2xl tracking-tight text-gray-900 leading-tight">
                      Start Your Career
                    </h1>
                    <div className="mt-2 flex items-center justify-center gap-3">
                      <span className="text-2xl text-gray-900">with</span>
                      <Image
                        src="/hireance-PNG-logo.png"
                        alt="Hierance Logo"
                        width={90}
                        height={90}
                        className="h-auto object-contain"
                        priority
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 max-w-md mx-auto text-sm leading-relaxed text-gray-500">
                    Thousands of professionals found their dream jobs through{" "}
                    <span className="font-semibold text-gray-900">Hierance</span>. Join
                    the platform that connects talented people with top companies.
                  </p>

                  {/* Stats */}
                  {/* Stats Row - stays in row on all screens */}
                  <div className="mt-6 flex items-center justify-center gap-3 sm:gap-6 lg:gap-8">
                    <div className="text-center">
                      <h3 className="text-base sm:text-xl font-bold text-gray-900">15K+</h3>
                      <p className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">Successful Hires</p>
                    </div>

                    <div className="h-6 sm:h-8 w-px bg-gray-200" />

                    <div className="text-center">
                      <h3 className="text-base sm:text-xl font-bold text-gray-900">500+</h3>
                      <p className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">Hiring Companies</p>
                    </div>

                    <div className="h-6 sm:h-8 w-px bg-gray-200" />

                    <div className="text-center">
                      <h3 className="text-base sm:text-xl font-bold text-gray-900">95%</h3>
                      <p className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">Placement Success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}