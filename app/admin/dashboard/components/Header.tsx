"use client";

import { motion } from "framer-motion";

export type StatItem = {
  icon: React.ReactNode;
  value: number;
  label: string;
  color: string;
  bg: string;
};

type HeaderProps = {
  mainStats: StatItem[];
  miniStats?: StatItem[];
};

const Header = ({ mainStats = [], miniStats = [] }: HeaderProps) => {
  return (
    <section className="flex gap-4 w-full">
      {/* MAIN STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1 bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        {mainStats.map((stat, index) => (
          <Stat key={index} {...stat} />
        ))}
      </div>

      {/* MINI CARDS */}
      {miniStats.map((stat, index) => (
        <MiniCard key={index} {...stat} />
      ))}
    </section>
  );
};

export default Header;

/* ---------------- STAT BLOCK ---------------- */

const Stat = ({ icon, value, label, color, bg }: StatItem) => {
  return (
    <motion.div whileHover={{ y: -3 }} className="flex items-center gap-4">
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-xl ${bg} ${color} text-xl`}
      >
        {icon}
      </div>

      <div>
        <h4 className="text-xl font-semibold text-neutral-900 leading-none">
          {value.toLocaleString()}
        </h4>

        <p className="text-sm text-neutral-500 mt-1">{label}</p>
      </div>
    </motion.div>
  );
};

/* ---------------- MINI CARD ---------------- */

const MiniCard = ({ icon, value, label, color, bg }: StatItem) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center min-w-[160px]"
    >
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-lg mb-3 ${bg} ${color}`}
      >
        {icon}
      </div>

      <h4 className="text-xl font-semibold text-neutral-900 leading-none">
        {value.toLocaleString()}
      </h4>

      <p className="text-sm text-neutral-500 mt-1">{label}</p>
    </motion.div>
  );
};
