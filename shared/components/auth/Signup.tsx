"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

/* ---------------- TYPES ---------------- */

interface SignUpRightProps {
  onSwitch: () => void;
}

interface StepProps {
  text: string;
  active?: boolean;
}

interface SignUpFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

/* ---------------- LEFT SIDE ---------------- */

export const SignUpLeft: React.FC = () => {
  return (
    <div
      className="w-full h-full rounded-3xl relative overflow-hidden
      bg-[url(/bg-img.png)] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/80 to-indigo-800/80" />

      <div className="relative z-10 h-full flex items-end justify-center pb-14 px-8 text-white">
        <div className="w-full max-w-md rounded-2xl p-6">
          <p className="text-xs tracking-widest uppercase text-purple-200">
            Hireance
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-snug">
            Start your hiring journey
          </h2>

          <p className="mt-3 text-sm text-purple-100">
            Create your account and unlock personalized job opportunities.
          </p>

          <div className="mt-8 space-y-4">
            <Step active text="Create your account" />
            <Step text="Set up account details" />
            <Step text="Complete your profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- RIGHT SIDE ---------------- */

export const SignUpRight: React.FC<SignUpRightProps> = ({ onSwitch }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormInputs>();

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    const username = `${data.firstName}-${data.lastName}`
      .toLowerCase()
      .replace(/\s+/g, "");

    router.push(`/candidate/${username}/home`);
  };

  return (
    <div
      className="w-full h-full rounded-3xl
      bg-white
      px-12 py-14
      flex flex-col justify-center
      shadow-xl"
    >
      <h2 className="text-3xl font-semibold text-center text-slate-800">
        Create Account
      </h2>

      <p className="text-sm mt-3 text-slate-500 text-center">
        Enter your details below to get started.
      </p>

      {/* SOCIAL LOGIN */}
      <div className="mt-10 flex gap-4">
        <div
          className="flex items-center justify-center w-full gap-3 p-3 
          rounded-xl border border-slate-300 bg-slate-50
          hover:bg-slate-100 transition cursor-pointer"
        >
          <FcGoogle size={18} />
          <p className="text-sm font-medium text-slate-700">Google</p>
        </div>

        <div
          className="flex items-center justify-center w-full gap-3 p-3 
          rounded-xl border border-slate-300 bg-slate-50
          hover:bg-slate-100 transition cursor-pointer"
        >
          <FaGithub size={18} />
          <p className="text-sm font-medium text-slate-700">Github</p>
        </div>
      </div>

      <div className="flex items-center gap-3 my-4 text-slate-400">
        <hr className="w-full border-slate-200" />
        <span className="text-xs">or</span>
        <hr className="w-full border-slate-200" />
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-6">
          <div className="flex gap-4">
            <div className="w-full">
              <label className="text-sm text-slate-700 font-medium">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className={`mt-2 w-full rounded-xl p-3 text-sm 
                bg-slate-50 border 
                outline-none transition
                focus:ring-2 focus:ring-purple-500
                ${
                  errors.firstName
                    ? "border-red-500"
                    : "border-slate-300"
                }`}
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <label className="text-sm text-slate-700 font-medium">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Francisco"
                className={`mt-2 w-full rounded-xl p-3 text-sm 
                bg-slate-50 border 
                outline-none transition
                focus:ring-2 focus:ring-purple-500
                ${
                  errors.lastName
                    ? "border-red-500"
                    : "border-slate-300"
                }`}
                {...register("lastName", {
                  required: "Last name is required",
                })}
              />
              {errors.lastName && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm text-slate-700 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="john@gmail.com"
              className={`mt-2 w-full rounded-xl p-3 text-sm 
              bg-slate-50 border 
              outline-none transition
              focus:ring-2 focus:ring-purple-500
              ${
                errors.email ? "border-red-500" : "border-slate-300"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm text-slate-700 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`mt-2 w-full rounded-xl p-3 text-sm 
              bg-slate-50 border 
              outline-none transition
              focus:ring-2 focus:ring-purple-500
              ${
                errors.password
                  ? "border-red-500"
                  : "border-slate-300"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Must be at least 8 characters",
                },
              })}
            />
            {errors.password ? (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            ) : (
              <p className="text-xs text-slate-400 mt-1">
                Must be at least 8 characters
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="p-3 text-sm bg-purple-600 text-white rounded-xl 
            font-medium hover:bg-purple-700 transition"
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>

          <p className="text-slate-500 text-sm text-center">
            Already have an account?{" "}
            <span
              onClick={onSwitch}
              className="font-medium text-purple-600 cursor-pointer hover:underline"
            >
              Log in
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

/* ---------------- HELPER ---------------- */

const Step: React.FC<StepProps> = ({ text, active }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm
    transition border
    ${
      active
        ? "bg-white text-purple-700 border-white shadow"
        : "bg-white/10 text-purple-100 border-white/20"
    }`}
  >
    <span
      className={`h-2 w-2 rounded-full ${
        active ? "bg-purple-600" : "bg-white/40"
      }`}
    />
    <span>{text}</span>
  </div>
);

/* ---------------- EXPORT ---------------- */

const SignUp = {
  Left: SignUpLeft,
  Right: SignUpRight,
};

export default SignUp;