"use client";

import { useState } from "react";
import { AdminUser, AdminRole } from "../../types";
import { getPermissions } from "../..//config/role";
import { AdminData } from "../../types";

import RoleBadge from "./RoleBadge";
import ActionButtons from "./ActionButtons";
import AddAdminModal from "./AddAdminModal";
import { FiSearch, FiEdit, FiTrash2 } from "react-icons/fi";

type Props = {
  currentUserRole: AdminRole;
};

const dummyAdmins: AdminUser[] = [
  {
    id: "1",
    name: "Kanishq",
    email: "kanishq@mail.com",
    role: "SUPER_ADMIN",
    status: "ACTIVE",
    createdAt: "2026-03-10",
  },
  {
    id: "2",
    name: "Rajat",
    email: "rajat@mail.com",
    role: "ADMIN",
    status: "ACTIVE",
    createdAt: "2026-03-11",
  },
  {
    id: "3",
    name: "Amit",
    email: "amit@mail.com",
    role: "MANAGER",
    status: "DISABLED",
    createdAt: "2026-03-12",
  },
];

export default function AdminTable({ currentUserRole }: Props) {
  const [search, setSearch] = useState("");

  const permissions = getPermissions(currentUserRole);

  const filteredAdmins = dummyAdmins.filter((admin) =>
    admin.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Admin Management
        </h2>

        {currentUserRole === "SUPER_ADMIN" && (
          <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">
            + Add Admin
          </button>
        )}
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 mb-6 w-72">
        <FiSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search admin..."
          className="outline-none text-sm w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="py-3">Admin</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Created</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredAdmins.map((admin) => (
              <tr
                key={admin.id}
                className="border-b last:border-none hover:bg-gray-50 transition"
              >
                {/* NAME */}
                <td className="py-4 font-medium text-gray-800">{admin.name}</td>

                {/* EMAIL */}
                <td className="text-sm text-gray-600">{admin.email}</td>

                {/* ROLE */}
                <td>
                  <RoleBadge role={admin.role} />
                </td>

                {/* STATUS */}
                <td>
                  <StatusBadge status={admin.status} />
                </td>

                {/* DATE */}
                <td className="text-sm text-gray-500">{admin.createdAt}</td>

                {/* ACTIONS */}
                <td className="text-right">
                  <div className="flex justify-end gap-3">
                    {permissions.canEditAdmin && (
                      <button className="p-2 rounded-lg hover:bg-gray-100">
                        <FiEdit className="text-gray-600" />
                      </button>
                    )}

                    {permissions.canDeleteAdmin && (
                      <button className="p-2 rounded-lg hover:bg-red-50">
                        <FiTrash2 className="text-red-500" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// function RoleBadge({ role }: { role: AdminRole }) {
//   const styles = {
//     SUPER_ADMIN: "bg-red-100 text-red-600",
//     ADMIN: "bg-yellow-100 text-yellow-600",
//     MANAGER: "bg-green-100 text-green-600",
//   };

//   return (
//     <span
//       className={`px-3 py-1 text-xs rounded-full font-medium ${styles[role]}`}
//     >
//       {role.replace("_", " ")}
//     </span>
//   );
// }

function StatusBadge({ status }: { status: "ACTIVE" | "DISABLED" }) {
  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-medium ${
        status === "ACTIVE"
          ? "bg-green-100 text-green-600"
          : "bg-gray-200 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}
