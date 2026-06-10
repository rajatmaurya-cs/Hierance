"use client";

import { AdminRole, AdminUser } from "../../types";
import AdminTable from "../tables/AdminTable";

type Props = {
  role: AdminRole;
  data: AdminUser[];
};

export default function AdminsTab({ role, data }: Props) {
  
  // 👇 Role-based heading text
  const getTitle = () => {
    if (role === "SUPER_ADMIN") return "Manage Admins";
    if (role === "ADMIN") return "All Admins (View Only)";
    return "Admins";
  };

  const getDescription = () => {
    if (role === "SUPER_ADMIN")
      return "Create, manage and control all admins";
    if (role === "ADMIN")
      return "View other admins in the system";
    return "Admins overview";
  };

  return (
    <div className="space-y-5">
      
      {/* HEADER */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800">
          {getTitle()}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          {getDescription()}
        </p>
      </div>

      {/* TABLE */}
      <AdminTable
        data={data}
        currentUserRole={role}
      />

      {/* EMPTY STATE (optional fallback) */}
      {data.length === 0 && (
        <div className="text-center py-10 text-gray-400 text-sm">
          No admins found
        </div>
      )}
    </div>
  );
}