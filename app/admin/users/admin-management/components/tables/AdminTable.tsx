"use client";

import { AdminUser, AdminRole } from "../../types";
import RoleBadge from "../common/RoleBadge";

type Props = {
  data: AdminUser[];
  currentUserRole: AdminRole;
};

export default function AdminTable({ data }: Props) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* ================= HEADER ================= */}
      <div className="px-6 py-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Admin Management
          </h3>
          <p className="text-sm text-gray-500">
            Manage platform admins & permissions
          </p>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          {/* HEAD */}
          <thead>
            <tr className="text-xs text-gray-400 uppercase border-b">
              <th className="px-6 py-3 text-left font-medium">Admin</th>
              <th className="font-medium">Role</th>
              <th className="font-medium">Work</th>
              <th className="font-medium">Created</th>
              <th className="font-medium">Last Login</th>
              <th className="font-medium">Status</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-gray-100">
            {data.map((admin) => (
              <tr key={admin.id} className="group hover:bg-gray-50 transition">
                {/* ADMIN */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                      {admin.name.charAt(0)}
                    </div>

                    {/* Info */}
                    <div>
                      <p className="font-medium text-gray-900">{admin.name}</p>
                      <p className="text-xs text-gray-400">{admin.email}</p>
                    </div>
                  </div>
                </td>

                {/* ROLE */}
                <td className="text-center">
                  <RoleBadge role={admin.role} />
                </td>

                {/* WORK */}
                <td className="text-gray-500 text-center">
                  {admin.role === "SUPER_ADMIN"
                    ? "Full Control"
                    : admin.role === "ADMIN"
                      ? "Manage Managers"
                      : "Monitor Activity"}
                </td>

                {/* CREATED */}
                <td className="text-gray-500 text-sm text-center">{admin.createdAt}</td>

                {/* LOGIN */}
                <td className="text-gray-400 text-sm text-center">
                  {admin.lastLogin || "—"}
                </td>

                {/* STATUS */}
                <td className="text-center">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                      admin.status === "ACTIVE"
                        ? "bg-green-50 text-green-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {admin.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
