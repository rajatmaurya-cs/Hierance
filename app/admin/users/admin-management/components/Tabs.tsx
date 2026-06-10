"use client";

import { useState, useEffect } from "react";
import { AdminRole, TabType } from "../types";
import { getTabsForRole } from "../config/tabsConfig";

type Props = {
  role: AdminRole;
  onTabChange: (tab: TabType) => void;
};

export default function Tabs({ role, onTabChange }: Props) {
  const tabs = getTabsForRole(role);

  // ✅ FIX: use tab.key instead of full object
  const [activeTab, setActiveTab] = useState<TabType>(tabs[0].key);

  const handleChange = (tab: TabType) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  // ✅ sync first tab when role changes
  useEffect(() => {
    setActiveTab(tabs[0].key);
    onTabChange(tabs[0].key);
  }, [role]);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-2 shadow-sm mt-6">
      <div className="flex gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key} // ✅ FIX
              onClick={() => handleChange(tab.key)} // ✅ FIX
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-xl transition-all
                ${
                  isActive
                    ? "bg-black text-white shadow"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              {tab.label} {/* ✅ label directly use */}
            </button>
          );
        })}
      </div>
    </div>
  );
}
