"use client";

import { useState, useRef, useEffect } from "react";
import { AdminRole } from "../../types";
import { getPermissions } from "../..//config/role";
import { MoreVertical, Pencil, Trash2, Shield } from "lucide-react";

type Props = {
  currentUserRole: AdminRole;
  targetAdminRole: AdminRole;
};

export default function ActionButtons({
  currentUserRole,
  targetAdminRole,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const permissions = getPermissions(currentUserRole);

  // close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg hover:bg-gray-100 transition"
      >
        <MoreVertical size={18} className="text-gray-600" />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-50 animate-in fade-in zoom-in-95">
          {/* EDIT ROLE */}
          {permissions.canChangeRole && (
            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-50 transition">
              <Shield size={14} />
              Change Role
            </button>
          )}

          {/* EDIT */}
          {permissions.canEditAdmin && (
            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-50 transition">
              <Pencil size={14} />
              Edit Admin
            </button>
          )}

          {permissions.canDeleteAdmin && (
            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition">
              <Trash2 size={14} />
              Remove Admin
            </button>
          )}
        </div>
      )}
    </div>
  );
}
