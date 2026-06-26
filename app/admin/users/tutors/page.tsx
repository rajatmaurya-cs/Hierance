"use client";

import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { HiChartBar } from "react-icons/hi";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import TutorOverviewPage from "../../dashboard/tutor/overview/page";
import TutorAnalyticsPage from "../../dashboard/tutor/analytics/page";
import TutorRevenuePage from "../../dashboard/tutor/revenue/page";
import TutorNotificationPage from "../../dashboard/tutor/notifications/page";

type Tab = "overview" | "analytics" | "revenue" | "notifications";

const TutorManagementPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const dashboardTabs = [
    { name: "overview", label: "Overview", icon: <MdDashboard /> },
    { name: "analytics", label: "Analytics", icon: <HiChartBar /> },
    { name: "revenue", label: "Revenue", icon: <FaMoneyBillWave /> },
    { name: "notifications", label: "Notifications", icon: <IoNotifications /> },
  ];

  return (
    <section className="w-full min-h-screen p-5 max-w-[1400px] mx-auto">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">Tutor Management</h1>
        <p className="text-sm text-neutral-500">
          Manage tutors, courses, and educational content on the platform
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-neutral-200 mb-6 overflow-x-auto">
        {dashboardTabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name as Tab)}
            className={`flex items-center gap-2 pb-3 text-sm font-medium transition-all duration-200 border-b-2
            ${
              activeTab === tab.name
                ? "text-blue-600 border-blue-600"
                : "text-neutral-500 border-transparent hover:text-neutral-800"
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
        {activeTab === "overview" && <TutorOverviewPage />}
        {activeTab === "analytics" && <TutorAnalyticsPage />}
        {activeTab === "revenue" && <TutorRevenuePage />}
        {activeTab === "notifications" && <TutorNotificationPage />}
      </main>
    </section>
  );
};

export default TutorManagementPage;
