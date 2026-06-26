"use client";

import { useState } from "react";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { IoMdPeople } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { HiChartBar } from "react-icons/hi";
import { FaLightbulb } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import RecruiterOverviewPage from "./recruiter/overview/page";
import RecruiterRevenuePage from "./recruiter/revenue/page";
import RecruiterAnalyticsPage from "./recruiter/analytics/page";
import RecruiterNotificationPage from "./recruiter/notifications/page";
// import PlatformOverview from "./components/PlatformOverview";

type Tab = "overview" | "analytics" | "insights" | "revenue" | "notifications";

const AdminDashboardPage = () => {
  const [activeRole, setActiveRole] = useState<"recruiter" | "candidate">(
    "recruiter",
  );

  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const dashboardTabs = [
    { name: "overview", label: "Overview", icon: <MdDashboard /> },
    { name: "analytics", label: "Analytics", icon: <HiChartBar /> },
    { name: "revenue", label: "Revenue", icon: <FaMoneyBillWave /> },
    {
      name: "notifications",
      label: "Notifications",
      icon: <IoNotifications />,
    },
  ];

  return (
    <section className="w-full min-h-screen p-5 max-w-[1400px] mx-auto">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">Admin Dashboard</h1>
        <p className="text-sm text-neutral-500">
          Manage recruiters and job seekers on the platform
        </p>
      </div>

      {/* Recruiter / Candidate Toggle */}
      <div className="flex items-center gap-3 bg-neutral-100 rounded-xl p-2 w-fit mb-6">
        <button
          onClick={() => {
            setActiveRole("recruiter");
            setActiveTab("overview");
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
          ${
            activeRole === "recruiter"
              ? "bg-white text-blue-600 shadow-sm"
              : "text-neutral-600 hover:bg-white"
          }`}
        >
          <HiMiniBuildingOffice2 className="text-lg" />
          Recruiters
        </button>

        <button
          onClick={() => {
            setActiveRole("candidate");
            setActiveTab("overview");
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
          ${
            activeRole === "candidate"
              ? "bg-white text-blue-600 shadow-sm"
              : "text-neutral-600 hover:bg-white"
          }`}
        >
          <IoMdPeople className="text-lg" />
          Candidates
        </button>
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
        {activeRole === "recruiter" && (
          <>
            {activeTab === "overview" && <RecruiterOverviewPage />}
            {activeTab === "analytics" && <RecruiterAnalyticsPage />}
            {activeTab === "revenue" && <RecruiterRevenuePage />}
            {activeTab === "notifications" && <RecruiterNotificationPage />}
          </>
        )}
        
        {activeRole === "candidate" && (
          <div className="flex items-center justify-center h-64 text-neutral-400">
            Candidate dashboard under development...
          </div>
        )}
      </main>
    </section>
  );
};

export default AdminDashboardPage;
