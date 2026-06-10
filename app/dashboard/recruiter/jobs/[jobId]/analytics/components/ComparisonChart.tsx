"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  {
    metric: "Applicants",
    previous: 44,
    current: 57,
  },
  {
    metric: "Shortlisted",
    previous: 14,
    current: 20,
  },
  {
    metric: "Interviewed",
    previous: 10,
    current: 15,
  },
  {
    metric: "Hired",
    previous: 3,
    current: 4,
  },
];

export default function ComparisonChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Performance Comparison
        </h2>
        <p className="text-sm text-slate-500">
          Compare previous job posting vs current posting
        </p>
      </div>

      {/* Chart */}
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />

            <XAxis
              dataKey="metric"
              tick={{ fill: "#64748b", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#64748b", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                fontSize: "12px",
              }}
            />

            <Legend wrapperStyle={{ fontSize: "12px", color: "#64748b" }} />

            <Bar
              dataKey="previous"
              name="Previous Posting"
              fill="#93c5fd"
              radius={[8, 8, 0, 0]}
            />

            <Bar
              dataKey="current"
              name="Current Posting"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
