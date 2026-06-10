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
  { name: "0-5 LPA", value: 2200 },
  { name: "5-10 LPA", value: 3100 },
  { name: "10-20 LPA", value: 1800 },
  { name: "20+ LPA", value: 700 },
];

const COLORS = ["#10b981", "#3b82f6", "#8b5cf6", "#f59e0b"];

export default function SalaryDistributionChart() {
  return (
    <section className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col gap-6">
      {/* header */}
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">
          Salary Distribution
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
