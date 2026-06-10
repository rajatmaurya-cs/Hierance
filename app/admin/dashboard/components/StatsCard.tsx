"use client";

import { motion } from "framer-motion";

export type StatCardItem = {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  bg: string;
  trend?: number; // optional growth %
};

type StatsCardProps = {
  items: StatCardItem[];
};

const StatsCard = ({ items }: StatsCardProps) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{
            y: -4,
            scale: 1.01,
          }}
          className="relative flex items-center gap-4 bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 overflow-hidden"
        >
          {/* subtle gradient hover glow */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-neutral-50 to-transparent" />

          {/* icon */}
          <div
            className={`relative flex items-center justify-center w-11 h-11 rounded-xl ${item.bg} ${item.color} text-lg`}
          >
            {item.icon}
          </div>

          {/* text */}
          <div className="relative flex flex-col">
            <h4 className="text-xl font-semibold text-neutral-900 leading-none">
              {item.value.toLocaleString()}
            </h4>

            <p className="text-sm text-neutral-500 mt-1">{item.label}</p>

            {/* trend indicator */}
            {item.trend !== undefined && (
              <span
                className={`text-xs font-medium mt-1 ${
                  item.trend >= 0 ? "text-emerald-600" : "text-red-600"
                }`}
              >
                {item.trend >= 0 ? "↑" : "↓"} {Math.abs(item.trend)}%
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default StatsCard;
