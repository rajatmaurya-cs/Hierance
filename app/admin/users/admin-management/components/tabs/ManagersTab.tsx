"use client";

import { AdminRole } from "../../types";
import ManagerTable from "../tables/ManagerTable";

type Manager = {
  id: string;
  name: string;
  email: string;
  status: "ACTIVE" | "DISABLED";
  createdAt: string;
  assignedBy?: string;
  lastLogin?: string;
};

type Props = {
  role: AdminRole;
  data: Manager[];
};

export default function ManagersTab({ role, data }: Props) {
  // 🔥 Dynamic title based on role
  const getTitle = () => {
    if (role === "SUPER_ADMIN") return "All Managers";
    if (role === "ADMIN") return "Assigned Managers";
    return "Fellow Managers";
  };

  const getDescription = () => {
    if (role === "SUPER_ADMIN")
      return "Manage all managers across the platform";
    if (role === "ADMIN") return "Managers assigned under your control";
    return "View other managers in the system";
  };

  return (
    <div className="w-full space-y-5">
      {/* HEADER */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800">{getTitle()}</h2>
        <p className="text-sm text-gray-500 mt-1">{getDescription()}</p>
      </div>

      {/* TABLE OR EMPTY STATE */}
      {data.length > 0 ? (
        <ManagerTable data={data} currentUserRole={role} />
      ) : (
        <div className="w-full bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
          <p className="text-gray-500 text-sm">No managers found</p>
        </div>
      )}
    </div>
  );
}
