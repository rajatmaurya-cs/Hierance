// app/admin/admin-management/config/roles.ts

import { AdminRole } from "../types";

type Permissions = {
  // UI Actions
  canAddAdmin: boolean;
  canEditAdmin: boolean;
  canDeleteAdmin: boolean;
  canChangeRole: boolean;

  // Data Access
  canViewAllAdmins: boolean;
  canViewAllManagers: boolean;
  canViewAssignedManagers: boolean;

  // Tabs Access
  canViewAdminsTab: boolean;
  canViewManagersTab: boolean;
};

export const rolePermissions: Record<AdminRole, Permissions> = {
  SUPER_ADMIN: {
    // Full Power 🔥
    canAddAdmin: true,
    canEditAdmin: true,
    canDeleteAdmin: true,
    canChangeRole: true,

    // Data Access
    canViewAllAdmins: true,
    canViewAllManagers: true,
    canViewAssignedManagers: true,

    // Tabs
    canViewAdminsTab: true,
    canViewManagersTab: true,
  },

  ADMIN: {
    // Limited Control ⚙️
    canAddAdmin: false,
    canEditAdmin: false,
    canDeleteAdmin: false,
    canChangeRole: false,

    // Data Access
    canViewAllAdmins: true, // 👀 only view
    canViewAllManagers: false,
    canViewAssignedManagers: true,

    // Tabs
    canViewAdminsTab: true,
    canViewManagersTab: true,
  },

  MANAGER: {
    // Minimal 👀
    canAddAdmin: false,
    canEditAdmin: false,
    canDeleteAdmin: false,
    canChangeRole: false,

    // Data Access
    canViewAllAdmins: false,
    canViewAllManagers: false,
    canViewAssignedManagers: true, // fellow managers

    // Tabs
    canViewAdminsTab: false,
    canViewManagersTab: true,
  },
};

export const getPermissions = (role: AdminRole) => {
  return rolePermissions[role];
};
