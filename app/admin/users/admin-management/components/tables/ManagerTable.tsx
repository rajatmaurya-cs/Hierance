"use client";

import { AdminRole } from "../../types";
import { getPermissions } from "../../config/role";
import ActionButtons from "../common/ActionButtons";

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
  data: Manager[];
  currentUserRole: AdminRole;
};

export default function ManagerTable({ data, currentUserRole }: Props) {
  const permissions = getPermissions(currentUserRole);

  return (
    <div className="w-full overflow-hidden">

      {/* ══════════ TABLE ══════════ */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          {/* HEAD */}
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Manager
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Assigned By
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Created
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Last Login
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Actions
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-gray-100">
            {data.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-400">
                  No managers found
                </td>
              </tr>
            ) : (
              data.map((manager) => (
                <tr
                  key={manager.id}
                  className="group hover:bg-blue-50/40 transition-colors duration-150"
                >
                  {/* NAME + Avatar */}
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {manager.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </div>
                      <span className="font-semibold text-gray-800 text-sm">
                        {manager.name}
                      </span>
                    </div>
                  </td>

                  {/* EMAIL */}
                  <td className="px-4 py-3.5 text-gray-500 text-sm">
                    {manager.email}
                  </td>

                  {/* ASSIGNED BY */}
                  <td className="px-4 py-3.5 text-sm">
                    {manager.assignedBy ? (
                      <span className="text-gray-600">{manager.assignedBy}</span>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>

                  {/* CREATED */}
                  <td className="px-4 py-3.5 text-gray-500 text-sm tabular-nums">
                    {manager.createdAt}
                  </td>

                  {/* LAST LOGIN */}
                  <td className="px-4 py-3.5 text-sm tabular-nums">
                    {manager.lastLogin ? (
                      <span className="text-gray-500">{manager.lastLogin}</span>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>

                  {/* STATUS */}
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                        manager.status === "ACTIVE"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-gray-100 text-gray-500 border border-gray-200"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          manager.status === "ACTIVE" ? "bg-green-500" : "bg-gray-400"
                        }`}
                      />
                      {manager.status === "ACTIVE" ? "Active" : "Disabled"}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-3.5 text-right">
                    <ActionButtons
                      currentUserRole={currentUserRole}
                      targetAdminRole="MANAGER"
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ══════════ FOOTER ══════════ */}
      {data.length > 0 && (
        <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            Showing <span className="font-semibold text-gray-600">{data.length}</span> manager{data.length !== 1 ? "s" : ""}
          </p>
          {permissions.canAddAdmin && (
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
              + Add Manager
            </button>
          )}
        </div>
      )}

    </div>
  );
}