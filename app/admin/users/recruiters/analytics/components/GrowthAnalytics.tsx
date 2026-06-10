"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

type Range = "daily" | "weekly" | "monthly";

const dataSets = {
  daily: [
    { name: "Mon", users: 40 },
    { name: "Tue", users: 65 },
    { name: "Wed", users: 120 },
    { name: "Thu", users: 90 },
    { name: "Fri", users: 150 },
    { name: "Sat", users: 200 },
    { name: "Sun", users: 170 },
  ],

  weekly: [
    { name: "Week 1", users: 450 },
    { name: "Week 2", users: 620 },
    { name: "Week 3", users: 820 },
    { name: "Week 4", users: 980 },
  ],

  monthly: [
    { name: "Jan", users: 1200 },
    { name: "Feb", users: 1600 },
    { name: "Mar", users: 2200 },
    { name: "Apr", users: 3000 },
    { name: "May", users: 4200 },
    { name: "Jun", users: 5100 },
  ],
};

export default function GrowthChart() {
  const [range, setRange] = useState<Range>("daily");

  return (
    <section className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">
            User Signups Over Time
          </h3>
          <p className="text-sm text-neutral-500">
            Track growth of job seekers on the platform
          </p>
        </div>

        {/* Toggle */}
        <div className="flex bg-neutral-100 rounded-lg p-1">
          {["daily", "weekly", "monthly"].map((item) => (
            <button
              key={item}
              onClick={() => setRange(item as Range)}
              className={`px-3 py-1.5 text-sm rounded-md transition ${
                range === item
                  ? "bg-white shadow text-blue-600"
                  : "text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dataSets[range]}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />

            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#888" />

            <YAxis tick={{ fontSize: 12 }} stroke="#888" />

            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #eee",
              }}
            />

            <Area
              type="monotone"
              dataKey="users"
              stroke="#2563eb"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorUsers)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
