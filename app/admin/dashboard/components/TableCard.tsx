"use client";

import { motion } from "framer-motion";

export type TableItem = {
  label: string;
  value: number;
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
  rowBg?: string;
  description?: string;
  trend?: number;
  badge?: string;
};

type TableCardProps = {
  title?: string;
  items: TableItem[];
};

const TableCard = ({ title, items }: TableCardProps) => {
  return (
    <section className="rounded-2xl bg-white border border-neutral-200 shadow-sm p-5 flex flex-col gap-4 w-full">
      {/* title */}
      {title && (
        <h3 className="text-sm font-semibold text-neutral-700 mb-1">{title}</h3>
      )}

      <div className="flex flex-col divide-y divide-neutral-100 gap-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{
              y: -2,
              scale: 1.01,
            }}
            className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 hover:bg-neutral-50 ${
              item.rowBg ?? ""
            }`}
          >
            {/* LEFT SIDE */}
            <div className="flex items-center gap-3">
              {/* icon */}
              <div
                className={`flex items-center justify-center w-9 h-9 rounded-lg ${item.iconBg} ${item.iconColor}`}
              >
                {item.icon}
              </div>

              {/* text */}
              <div className="flex flex-col">
                <p className="text-sm font-medium text-neutral-700">
                  {item.label}
                </p>

                {item.description && (
                  <span className="text-xs text-neutral-500">
                    {item.description}
                  </span>
                )}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">
              {/* trend */}
              {item.trend !== undefined && (
                <span
                  className={`text-xs font-medium ${
                    item.trend >= 0 ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {item.trend >= 0 ? "↑" : "↓"} {Math.abs(item.trend)}%
                </span>
              )}

              {/* badge */}
              {item.badge && (
                <span className="text-xs px-2 py-1 rounded-md bg-neutral-100 text-neutral-600">
                  {item.badge}
                </span>
              )}

              {/* value */}
              <h4 className="text-lg font-semibold text-neutral-900">
                {item.value.toLocaleString()}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TableCard;
