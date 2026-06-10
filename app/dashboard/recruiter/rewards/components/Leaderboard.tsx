"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const leaderboard = [
  { id: 1, name: "Priya Mehta", earnings: "₹1,20,000", rank: 1 },
  { id: 2, name: "Amit Singh", earnings: "₹95,000", rank: 2 },
  { id: 3, name: "Kanishq Sodhani", earnings: "₹82,000", rank: 3 },
  { id: 4, name: "Rohit Sharma", earnings: "₹60,000", rank: 4 },
];

export default function Leaderboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-1/3 bg-white rounded-2xl shadow-sm border p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Leaderboard
        </h2>
        <Trophy size={20} className="text-yellow-500" />
      </div>

      <div className="space-y-4">
        {leaderboard.map((user) => (
          <div
            key={user.id}
            className={`flex items-center justify-between p-4 rounded-xl border transition hover:shadow-md ${
              user.name === "Kanishq Sodhani"
                ? "bg-indigo-50 border-indigo-200"
                : "bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold ${
                  user.rank === 1
                    ? "bg-yellow-400 text-white"
                    : user.rank === 2
                    ? "bg-gray-400 text-white"
                    : user.rank === 3
                    ? "bg-orange-400 text-white"
                    : "bg-slate-300 text-slate-700"
                }`}
              >
                {user.rank}
              </div>

              <div>
                <p className="text-sm font-medium text-slate-800">
                  {user.name}
                </p>
                <p className="text-xs text-slate-500">
                  Total Earnings
                </p>
              </div>
            </div>

            <span className="text-sm font-semibold text-slate-900">
              {user.earnings}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
