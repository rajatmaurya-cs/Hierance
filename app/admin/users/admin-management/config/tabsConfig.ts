// app/admin/admin-management/config/tabsConfig.ts

import { AdminRole, TabType } from "../types";

type TabConfig = {
  key: TabType;
  label: string;
};

type TabsConfigType = Record<AdminRole, TabConfig[]>;

export const tabsConfig: TabsConfigType = {
  SUPER_ADMIN: [
    {
      key: "CONTROLS",
      label: "Controls",
    },
    {
      key: "ADMINS",
      label: "Admins",
    },
    {
      key: "MANAGERS",
      label: "Managers",
    },
  ],

  ADMIN: [
    {
      key: "CONTROLS",
      label: "Controls",
    },
    {
      key: "ADMINS",
      label: "Admins",
    },
    {
      key: "MANAGERS",
      label: "Managers",
    },
  ],

  MANAGER: [
    {
      key: "CONTROLS",
      label: "Controls",
    },
    {
      key: "MANAGERS",
      label: "Managers",
    },
  ],
};

// helper (optional but useful)
export const getTabsForRole = (role: AdminRole): TabConfig[] => {
  return tabsConfig[role];
};
