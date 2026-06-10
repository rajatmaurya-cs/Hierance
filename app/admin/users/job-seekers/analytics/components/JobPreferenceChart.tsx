"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Remote", value: 4200 },
  { name: "Hybrid", value: 2800 },
  { name: "On-site", value: 1600 },
];

const COLORS = ["#3b82f6", "#6366f1", "#06b6d4"];

export default function JobPreferenceChart() {
  return (
    <section className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col gap-6 h-full">
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">
          Job Preference
        </h3>
        <p className="text-sm text-neutral-500">
          Preferred working mode of candidates
        </p>
      </div>

      <div className="items-center">
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
