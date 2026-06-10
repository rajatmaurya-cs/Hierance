"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Full Time", value: 5200 },
  { name: "Internship", value: 2100 },
  { name: "Contract", value: 1200 },
  { name: "Freelance", value: 800 },
];

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#8b5cf6"];

export default function JobTypePreferenceChart() {
  return (
    <section className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col gap-6">
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">
          Job Type Preference
        </h3>
        <p className="text-sm text-neutral-500">
          Preferred working mode of candidates
        </p>
      </div>

      <div className="grid grid-cols-2 items-center">
        <div className="w-full h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col gap-3">
          {data.map((item, index) => (
            <div
              key={item.name}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: COLORS[index] }}
                />
                {item.name}
              </div>
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
