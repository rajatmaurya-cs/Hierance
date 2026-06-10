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
  { name: "18-21", value: 1400 },
  { name: "22-25", value: 3200 },
  { name: "26-30", value: 2100 },
  { name: "30+", value: 900 },
];
const COLORS = ["#f59e0b", "#ef4444", "#ec4899", "#a855f7"];

export default function AgeDistributionChart() {
  return (
    <section className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col gap-6">
      {/* header */}
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">
          Age Distribution
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
