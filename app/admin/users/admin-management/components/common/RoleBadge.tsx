"use client";

import { AdminRole } from "../../types";
import { Shield, UserCog, Eye } from "lucide-react";

type Props = {
  role: AdminRole;
};

export default function RoleBadge({ role }: Props) {
  const roleConfig = {
    SUPER_ADMIN: {
      label: "Super Admin",
      icon: Shield,
      className: "bg-red-50 text-red-600 border border-red-200 shadow-sm",
    },
    ADMIN: {
      label: "Admin",
      icon: UserCog,
      className:
        "bg-yellow-50 text-yellow-700 border border-yellow-200 shadow-sm",
    },
    MANAGER: {
      label: "Manager",
      icon: Eye,
      className: "bg-green-50 text-green-600 border border-green-200 shadow-sm",
    },
  };

  const config = roleConfig[role];
  const Icon = config.icon;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 ${config.className}`}
    >
      <Icon size={14} />
      <span>{config.label}</span>
    </div>
  );
}
