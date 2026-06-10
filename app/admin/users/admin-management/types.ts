// app/admin/admin-management/types.ts

/* =========================
   ROLES
========================= */

export type AdminRole = "SUPER_ADMIN" | "ADMIN" | "MANAGER";

/* =========================
   STATUS
========================= */

export type Status = "ACTIVE" | "DISABLED";

/* =========================
   TABS
========================= */

export type TabType = "CONTROLS" | "ADMINS" | "MANAGERS";

/* =========================
   BASE USER (COMMON)
========================= */

export type BaseUser = {
  id: string;
  name: string;
  email: string;
  status: Status;
  createdAt: string;
  lastLogin?: string;
};

/* =========================
   ADMIN USER
========================= */

export type AdminUser = BaseUser & {
  role: AdminRole;
  createdBy?: string; // kisne banaya
};

/* =========================
   MANAGER USER
========================= */

export type ManagerUser = BaseUser & {
  assignedBy?: string; // kis admin ne assign kiya
};

/* =========================
   PROFILE DATA (HEADER)
========================= */

export type ProfileData = {
  name: string;
  role: AdminRole;
  createdBy?: string;
};

/* =========================
   TAB CONFIG
========================= */

export type TabConfig = {
  key: TabType;
  label: string;
};

/* =========================
   PERMISSIONS
========================= */

export type Permissions = {
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

/* =========================
   DATA STRUCTURES (ROLE BASED)
========================= */

// 🔴 Super Admin Data
export type SuperAdminData = {
  profile: ProfileData;
  admins: AdminUser[];
  managers: ManagerUser[];
};

// 🟡 Admin Data
export type AdminData = {
  profile: ProfileData;
  fellowAdmins: AdminUser[];
  assignedManagers: ManagerUser[];
};

// 🟢 Manager Data
export type ManagerData = {
  profile: ProfileData;
  fellowManagers: ManagerUser[];
};
