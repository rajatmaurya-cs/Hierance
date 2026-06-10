"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Fresher", value: 2500 },
  { name: "0-1 Years", value: 1700 },
  { name: "1-3 Years", value: 2100 },
  { name: "3-5 Years", value: 900 },
  { name: "5+ Years", value: 600 },
];

const COLORS = ["#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6", "#ec4899"];

export default function ExperienceDistributionChart() {
  return (
    <section className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col gap-6">
      {/* header */}
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">
          Experience Distribution
        </h3>
        <p className="text-sm text-neutral-500">
          Where job seekers are located
        </p>
      </div>

      {/* chart */}
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #eee",
              }}
            />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
