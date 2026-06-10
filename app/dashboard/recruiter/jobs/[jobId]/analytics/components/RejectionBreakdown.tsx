"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Not Relevant Skills", value: 12 },
  { name: "Fake Resume", value: 5 },
  { name: "High Salary Expectation", value: 8 },
  { name: "Did Not Join", value: 4 },
  { name: "Failed Interview", value: 6 },
];

const COLORS = [
  "#2563eb", // blue
  "#60a5fa", // light blue
  "#93c5fd",
  "#3b82f6",
  "#1d4ed8",
];

export default function RejectionBreakdown() {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Rejection Breakdown
        </h2>
        <p className="text-sm text-slate-500">
          Common reasons candidates were rejected
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6">
        {/* Donut Chart */}
        <div className="w-full lg:w-1/2 h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={3}
                cornerRadius={8}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  fontSize: "12px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute -mt-[160px] w-full text-center pointer-events-none">
            <p className="text-2xl font-semibold text-slate-900">{total}</p>
            <p className="text-xs text-slate-400">Total Rejections</p>
          </div>
        </div>

        {/* Legend */}
        <div className="w-full lg:w-1/2 space-y-3">
          {data.map((item, index) => {
            const percentage = ((item.value / total) * 100).toFixed(0);

            return (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-slate-600">{item.name}</span>
                </div>

                <div className="text-slate-900 font-medium">{percentage}%</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
