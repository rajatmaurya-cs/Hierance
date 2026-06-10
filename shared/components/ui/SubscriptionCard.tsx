"use client";

import { FaRupeeSign } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import Button from "@/shared/components/common/Button";

interface SubscriptionCardProps {
  title: string;
  subtitle: string;
  price?: string | number;
  duration?: string;
  isPreviousFeatures?: string;
  features?: string[];
  limitations?: string[];
  cta1?: string;
  cta2?: string;
  featured?: string;
  theme: boolean;
}

export default function SubscriptionCard({
  title,
  subtitle,
  price,
  duration,
  isPreviousFeatures,
  features = [],
  limitations = [],
  cta1,
  cta2,
  featured,
  theme,
}: SubscriptionCardProps) {
  const isWhite = theme; // ✅ FIXED

  return (
    <div
      className={`w-full rounded-2xl p-2 backdrop-blur-2xl shadow-xl
      ${isWhite ? "bg-neutral-100 outline outline-white" : "bg-neutral-800"}`}
    >
      {/* pricing card */}
      <div
        className={`rounded-t-xl rounded-b-3xl w-full p-2
        ${
          isWhite
            ? "bg-white shadow-sm outline outline-neutral-400/30"
            : "bg-neutral-700/70 shadow-sm outline outline-neutral-600"
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between gap-2">
          <div
            className={`flex gap-1.5 items-center ${
              isWhite ? "text-black" : "text-white"
            }`}
          >
            <MdPeopleAlt />
            <h3 className="lg:text-lg">{title}</h3>
          </div>

          {featured && (
            <p className="text-xs rounded-full px-2 py-0.5 bg-rose-300/80 text-white">
              {featured}
            </p>
          )}
        </div>
        <p className="text-sm text-neutral-400">{subtitle}</p>

        {/* price */}

        <div
          className={`mt-5 min-h-27  ${isWhite ? "text-black" : "text-white"}`}
        >
          {price && (
            <div className="flex items-end gap-1">
              <FaRupeeSign className="text-lg" />
              <p className="text-5xl font-bold">
                {price}
                <span className="text-sm font-normal text-neutral-400">
                  {" "}
                  / {duration}
                </span>
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="flex gap-3 mt-8 mb-3">
            {cta1 && (
              <Button
                extraClasses={`w-full rounded-full text-sm p-2 font-medium text-center 
                ${isWhite ? "bg-black text-white" : "bg-white text-black"}`}
                text={cta1}
              />
            )}

            {cta2 && isWhite && (
              <Button
                extraClasses="w-full rounded-full text-sm p-2 font-medium text-center
                bg-white text-black outline outline-neutral-500/50"
                text={cta2}
              />
            )}
          </div>
        </div>
        <p
          className={`text-sm pl-3 lg:text-sm mt-5 mb-3 ${
            isWhite ? "text-neutral-600" : "text-neutral-300"
          }`}
        >
          {isPreviousFeatures}
        </p>
      </div>

      {/* features */}
      <div className="mt-7 pl-2">
        <p
          className={`text-sm ${
            isWhite ? "text-neutral-600" : "text-neutral-300"
          }`}
        >
          How it works
        </p>

        {features.map((item, idx) => (
          <Steps key={idx} text={item} theme={theme} />
        ))}
      </div>
    </div>
  );
}

const Steps = ({ text, theme }: { text: string; theme: boolean }) => {
  return (
    <div className="flex gap-2 mt-5 lg:space-y-5">
      <IoCheckmarkSharp
        className={`rounded-full p-0.5 ${
          theme ? "text-black bg-neutral-400" : "text-white bg-neutral-700"
        }`}
      />
      <p
        className={`lg:text-sm ${theme ? "text-neutral-800" : "text-neutral-200"}`}
      >
        {text}
      </p>
    </div>
  );
};
