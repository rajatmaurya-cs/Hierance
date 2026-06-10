"use client";

import { motion } from "framer-motion";

export type SidebarItem = {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  bg: string;
};

type SidebarProps = {
  items: SidebarItem[];
  title?: string;
};

const Sidebar = ({ items, title }: SidebarProps) => {
  return (
    <section className="rounded-2xl bg-white border border-neutral-200 shadow-sm p-5 flex flex-col gap-4 h-full">
      {/* optional title */}
      {title && (
        <h3 className="text-sm font-semibold text-neutral-800 mb-1">{title}</h3>
      )}

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{
            x: 4,
            scale: 1.01,
          }}
          className="flex items-center justify-between gap-4 p-2 rounded-lg transition-all duration-200 hover:bg-neutral-50"
        >
          {/* left side */}
          <div className="flex items-center gap-3">
            {/* icon */}
            <div
              className={`flex items-center justify-center w-9 h-9 rounded-lg ${item.bg} ${item.color} text-sm`}
            >
              {item.icon}
            </div>

            {/* label */}
            <p className="text-sm text-neutral-600 font-medium">{item.label}</p>
          </div>

          {/* value */}
          <h4 className="text-lg font-semibold text-neutral-900">
            {item.value.toLocaleString()}
          </h4>
        </motion.div>
      ))}
    </section>
  );
};

export default Sidebar;
