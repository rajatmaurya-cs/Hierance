"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, XCircle, Info } from "lucide-react";

const rewards = [
  {
    id: 1,
    candidate: "Rahul Sharma",
    company: "TCS",
    role: "Frontend Developer",
    status: "Approved",
    amount: "₹8,000",
    releaseDate: "12 Mar 2026",
  },
  {
    id: 2,
    candidate: "Sneha Verma",
    company: "Infosys",
    role: "Backend Engineer",
    status: "Pending",
    amount: "₹6,500",
    releaseDate: "25 Mar 2026",
  },
  {
    id: 3,
    candidate: "Aman Gupta",
    company: "Wipro",
    role: "UI/UX Designer",
    status: "Rejected",
    amount: "₹0",
    releaseDate: "-",
  },
];

const statusConfig = {
  Approved: {
    color: "text-green-600 bg-green-50",
    icon: <CheckCircle2 size={16} />,
  },
  Pending: {
    color: "text-yellow-600 bg-yellow-50",
    icon: <Clock size={16} />,
  },
  Rejected: {
    color: "text-red-600 bg-red-50",
    icon: <XCircle size={16} />,
  },
};

export default function RewardsHistoryTable() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-2/3 bg-white rounded-2xl shadow-sm border p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Reward History
        </h2>
        <Info size={18} className="text-slate-400 hover:text-slate-600 cursor-pointer transition" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="text-slate-500 border-b">
              <th className="py-3">Candidate</th>
              <th className="py-3">Company</th>
              <th className="py-3">Role</th>
              <th className="py-3">Status</th>
              <th className="py-3">Reward</th>
              <th className="py-3">Release Date</th>
            </tr>
          </thead>

          <tbody>
            {rewards.map((reward) => (
              <tr
                key={reward.id}
                className="border-b last:border-none hover:bg-slate-50 transition"
              >
                <td className="py-4 font-medium text-slate-800">
                  {reward.candidate}
                </td>
                <td className="py-4 text-slate-600">
                  {reward.company}
                </td>
                <td className="py-4 text-slate-600">
                  {reward.role}
                </td>

                <td className="py-4">
                  <span
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium w-fit ${statusConfig[reward.status as keyof typeof statusConfig].color}`}
                  >
                    {statusConfig[reward.status as keyof typeof statusConfig].icon}
                    {reward.status}
                  </span>
                </td>

                <td className="py-4 font-semibold text-slate-900">
                  {reward.amount}
                </td>

                <td className="py-4 text-slate-500">
                  {reward.releaseDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
