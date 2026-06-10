import React from "react";
import Button from "../common/Button";
import { FaGithub, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { SiGoogle } from "react-icons/si";

/* ---------------- TYPES ---------------- */

interface LoginRightProps {
  onSwitch: () => void;
}

interface SocialIconProps {
  icon: React.ReactNode;
}

/* ---------------- LEFT ---------------- */

export const LoginLeft: React.FC = () => (
  <div className="w-full h-full rounded-3xl relative overflow-hidden group">
    {/* Background Image */}
    <div className="absolute inset-0 bg-[url(/login.png)] bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700" />

    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-purple-900/60" />

    {/* Animated Glow Blob */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-between p-10 text-white">
      {/* Top Badge */}
      <div className="flex justify-between items-center">
        <span className="px-4 py-1 text-xs tracking-wider uppercase rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          Hireance
        </span>
        <span className="text-xs text-neutral-300">
          Trusted by 10k+ professionals
        </span>
      </div>

      {/* Bottom Text Section */}
      <div className="space-y-4 max-w-md">
        <h2 className="text-3xl font-semibold leading-snug">
          Find jobs that match your ambition.
        </h2>

        <p className="text-sm text-neutral-300">
          Discover opportunities tailored to your skills and track your
          applications in one powerful dashboard.
        </p>

        {/* Stats Row */}
        <div className="flex gap-6 pt-4">
          <div>
            <p className="text-xl font-semibold">25K+</p>
            <p className="text-xs text-neutral-400">Active Jobs</p>
          </div>
          <div>
            <p className="text-xl font-semibold">8K+</p>
            <p className="text-xs text-neutral-400">Companies</p>
          </div>
          <div>
            <p className="text-xl font-semibold">15K+</p>
            <p className="text-xs text-neutral-400">Hires</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ---------------- RIGHT ---------------- */

export const LoginRight: React.FC<LoginRightProps> = ({ onSwitch }) => {
  return (
    <div
      className="w-full h-full rounded-3xl 
        bg-white 
        px-10 py-12
        text-slate-800 
        flex flex-col justify-center 
        shadow-xl"
    >
      <p className="text-sm tracking-wide text-slate-500 font-medium">
        Hireance
      </p>

      <h2 className="text-3xl font-semibold mt-3">Welcome back</h2>

      <p className="text-sm text-slate-500 mt-3">
        Log in to access your customized opportunities and track your progress.
      </p>

      {/* form */}
      <div className="mt-10 space-y-5">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl text-sm 
              bg-slate-50 border border-slate-300 
              outline-none
              focus:ring-2 focus:ring-purple-400 
              focus:border-purple-400
              transition"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl text-sm 
              bg-slate-50 border border-slate-300 
              outline-none
              focus:ring-2 focus:ring-purple-400 
              focus:border-purple-400
              transition"
        />

        {/* forgot password */}
        <p className="text-xs text-right text-slate-500 cursor-pointer hover:text-purple-600 transition">
          Forgot password?
        </p>

        <Button
          extraClasses="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-xl font-medium text-center transition"
          text="Continue"
        />
      </div>

      {/* divider */}
      <div className="flex items-center gap-3 my-8 text-slate-400">
        <hr className="w-full border-slate-200" />
        <span className="text-xs">or</span>
        <hr className="w-full border-slate-200" />
      </div>

      {/* social login */}
      <div className="flex justify-between gap-4">
        <SocialIcon icon={<SiGoogle />} />
        <SocialIcon icon={<FaGithub />} />
        <SocialIcon icon={<FaXTwitter />} />
        <SocialIcon icon={<FaFacebook />} />
      </div>

      {/* create account */}
      <p className="text-sm text-center text-slate-500 mt-10">
        Don’t have an account?{" "}
        <span
          onClick={onSwitch}
          className="text-purple-600 font-medium cursor-pointer hover:underline"
        >
          Create new account
        </span>
      </p>
    </div>
  );
};

/* ---------------- HELPER ---------------- */

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <span
    className="flex items-center justify-center w-full py-3 rounded-xl
      bg-slate-50 border border-slate-300 
      cursor-pointer
      hover:bg-slate-100 
      hover:border-purple-400
      transition"
  >
    {icon}
  </span>
);

/* ---------------- EXPORT ---------------- */

const Login = {
  Left: LoginLeft,
  Right: LoginRight,
};

export default Login;
