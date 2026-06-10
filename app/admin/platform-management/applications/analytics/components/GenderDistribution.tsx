"use client";

import { FaMale, FaFemale } from "react-icons/fa";

export default function GenderStatsCard() {
  const data = [
    {
      label: "Male Candidates",
      value: 6840,
      icon: <FaMale />,
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      label: "Female Candidates",
      value: 5120,
      icon: <FaFemale />,
      bg: "bg-pink-50",
      iconBg: "bg-pink-100",
      color: "text-pink-600",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      {data.map((item) => (
        <div
          key={item.label}
          className={`rounded-xl border border-neutral-200 p-6  shadow-sm hover:shadow-md transition ${item.bg}`}
        >
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-lg ${item.iconBg}`}
          >
            <span className={`text-xl ${item.color}`}>{item.icon}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-neutral-500">{item.label}</p>
            <h2 className="text-3xl font-bold text-neutral-900">
              {item.value.toLocaleString()}
            </h2>
          </div>
        </div>
      ))}
    </section>
  );
}
