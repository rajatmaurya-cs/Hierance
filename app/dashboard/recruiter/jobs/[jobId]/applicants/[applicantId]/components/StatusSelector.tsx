"use client";

import { useState } from "react";
import TrainingRequirement from "./TrainingRequirement";
import { ChevronDown } from "lucide-react";

const statusOptions = [
  { label: "Pending", color: "bg-yellow-100 text-yellow-700" },
  { label: "Shortlisted", color: "bg-blue-100 text-blue-700" },
  { label: "Interviewed", color: "bg-purple-100 text-purple-700" },
  { label: "Rejected", color: "bg-red-100 text-red-700" },
  { label: "Waitlist", color: "bg-gray-100 text-gray-700" },
  { label: "Hired", color: "bg-green-100 text-green-700" },
];

const StatusSelector = () => {
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Pending");

  const current = statusOptions.find((s) => s.label === selectedStatus);

  return (
    <section className="w-full bg-white border border-neutral-200 rounded-2xl p-6 space-y-6">
      {/* Heading */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-900">
          Candidate Evaluation
        </h2>
        <p className="text-sm text-neutral-500">
          Lock candidate status based on evaluation
        </p>
      </div>

      {/* Modern Dropdown */}
      <div className="relative w-60">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-4 py-2 rounded-xl border border-neutral-200 hover:border-neutral-300 transition"
        >
          <span
            className={`px-3 py-1 rounded-md text-xs font-medium w-full ${current?.color}`}
          >
            {selectedStatus}
          </span>

          <ChevronDown
            size={18}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="absolute z-50 mt-2 w-full bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden">
            {statusOptions.map((status) => (
              <div
                key={status.label}
                onClick={() => {
                  setSelectedStatus(status.label);
                  setOpen(false);
                }}
                className="px-4 py-3 hover:bg-neutral-50 cursor-pointer flex items-center"
              >
                <span
                  className={`px-3 py-1 rounded-md text-xs font-medium w-full text-center ${status.color}`}
                >
                  {status.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Remarks */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-neutral-800">
          Recruiter Remarks
        </h3>
        <textarea
          placeholder="Add evaluation notes about this candidate..."
          className="w-full rounded-xl border border-neutral-200 p-3 text-sm focus:border-blue-400 outline-none resize-none text-slate-600"
          rows={4}
        />
      </div>

      {/* Conditional Training Section */}
      {selectedStatus === "Shortlisted" && <TrainingRequirement />}
    </section>
  );
};

export default StatusSelector;
