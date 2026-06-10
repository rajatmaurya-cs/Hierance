"use client";

import { useState } from "react";
import AdminHeader from "./components/AdminHeader";
import Tabs from "./components/Tabs";

import ManagersTab from "./components/tabs/ManagersTab";
import ControlsTab from "./components/tabs/ControlsTab"; // ✅ NEW
import AdminTable from "./components/tables/AdminTable";

import { AdminRole, TabType, AdminUser, ManagerUser } from "./types";

/* =========================
   🔥 MOCK DATA (TESTING)
========================= */

// 🔴 SUPER ADMIN DATA
const superAdminData = {
  profile: {
    name: "Kanishq",
    role: "SUPER_ADMIN" as AdminRole,
    createdBy: "",
  },
  admins: [
    {
      id: "1",
      name: "Rajat",
      email: "rajat@mail.com",
      role: "ADMIN" as AdminRole,
      status: "ACTIVE",
      createdAt: "2026-03-10",
      lastLogin: "2026-03-15",
      createdBy: "Kanishq", // ✅ added for UI
    },
  ] as AdminUser[],
  managers: [
    {
      id: "m1",
      name: "Amit",
      email: "amit@mail.com",
      status: "ACTIVE",
      createdAt: "2026-03-11",
      assignedBy: "Rajat",
    },
  ] as ManagerUser[],
};

// 🟡 ADMIN DATA
const adminData = {
  profile: {
    name: "Rajat",
    role: "ADMIN" as AdminRole,
    createdBy: "Kanishq",
  },
  fellowAdmins: superAdminData.admins,
  assignedManagers: superAdminData.managers,
};

// 🟢 MANAGER DATA
const managerData = {
  profile: {
    name: "Amit",
    role: "MANAGER" as AdminRole,
    createdBy: "Rajat",
  },
  fellowManagers: superAdminData.managers,
};

export default function AdminManagementPage() {
  /* =========================
     🔥 CHANGE ROLE HERE (TEST)
  ========================= */
  const role: AdminRole = "SUPER_ADMIN"; // try ADMIN / MANAGER

  const [activeTab, setActiveTab] = useState<TabType>("CONTROLS");

  /* =========================
     🔥 DATA SELECTION
  ========================= */

  const getProfile = () => {
    if (role === "SUPER_ADMIN") return superAdminData.profile;
    if (role === "ADMIN") return adminData.profile;
    return managerData.profile;
  };

  const getAdminsData = () => {
    if (role === "SUPER_ADMIN") return superAdminData.admins;
    if (role === "ADMIN") return adminData.fellowAdmins;
    return [];
  };

  const getManagersData = () => {
    if (role === "SUPER_ADMIN") return superAdminData.managers;
    if (role === "ADMIN") return adminData.assignedManagers;
    return managerData.fellowManagers;
  };

  const profile = getProfile();

  /* =========================
     🔥 TAB RENDER
  ========================= */

  const renderTabContent = () => {
    switch (activeTab) {
      case "CONTROLS":
        return (
          <ControlsTab
            role={role}
            admins={getAdminsData()} // ✅ NEW
            managers={getManagersData()} // ✅ NEW
          />
        );

      case "ADMINS":
        return <AdminTable data={getAdminsData()} currentUserRole={role} />;

      case "MANAGERS":
        return <ManagersTab role={role} data={getManagersData()} />;

      default:
        return null;
    }
  };

  /* =========================
     🔥 UI
  ========================= */

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 space-y-6">
      {/* HEADER */}
      <AdminHeader
        name={profile.name}
        role={profile.role}
        createdBy={profile.createdBy ?? ""}
      />

      {/* TABS */}
      <Tabs role={role} onTabChange={setActiveTab} />

      {/* CONTENT */}
      {renderTabContent()}
    </div>
  );
}
