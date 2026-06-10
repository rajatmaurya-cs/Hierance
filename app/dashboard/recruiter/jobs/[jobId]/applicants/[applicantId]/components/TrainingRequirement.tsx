"use client";

import { useState } from "react";

const TrainingRequirement = () => {
  const [trainingRequired, setTrainingRequired] = useState(false);

  return (
    <section className="bg-blue-50 border border-blue-200 rounded-xl p-5 space-y-4">
      <h3 className="text-sm font-semibold text-blue-800">
        Training Requirement
      </h3>

      {/* Toggle */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={trainingRequired}
          onChange={() => setTrainingRequired(!trainingRequired)}
          className="w-4 h-4 accent-blue-600"
        />
        <span className="text-sm text-blue-900">
          Candidate requires pre-joining training
        </span>
      </div>

      {trainingRequired && (
        <div className="space-y-4">
          {/* Skill Gap */}
          <div>
            <label className="text-xs font-medium text-blue-900">
              Skill Gaps Identified
            </label>
            <input
              type="text"
              placeholder="Example: React, System Design, Docker"
              className="w-full mt-1 rounded-lg border border-blue-200 px-3 py-2 text-sm focus:border-blue-400 outline-none text-slate-500"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="text-xs font-medium text-blue-900">
              Training Duration
            </label>
            <input
              type="text"
              placeholder="Example: 4 Weeks"
              className="w-full mt-1 rounded-lg border border-blue-200 px-3 py-2 text-sm focus:border-blue-400 outline-none text-slate-500"
            />
          </div>

          {/* Cost */}
          <div>
            <label className="text-xs font-medium text-blue-900">
              Training Cost (Paid by Candidate)
            </label>
            <input
              type="text"
              placeholder="₹ 15,000"
              className="w-full mt-1 rounded-lg border border-blue-200 px-3 py-2 text-sm focus:border-blue-400 outline-none text-slate-500"
            />
          </div>

          {/* Payment Status */}
          <div>
            <label className="text-xs font-medium text-blue-900">
              Payment Status
            </label>
            <div className="flex gap-3 mt-1">
              <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                Pending
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                Paid
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
              Submit
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrainingRequirement;
