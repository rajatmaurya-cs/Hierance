"use client";

import { usePathname, useRouter } from "next/navigation";

const tabs = [
  {
    label: "Overview",
    path: "/dashboard/recruiter/subscriptions",
  },
  {
    label: "Usage",
    path: "/dashboard/recruiter/subscriptions/plan-usage",
  },
  {
    label: "Billing",
    path: "/dashboard/recruiter/subscriptions/billing-history",
  },
  {
    label: "Upgrade Plans",
    path: "/dashboard/recruiter/subscriptions/upgrade-plan",
  },
  {
    label: "Payment Method",
    path: "/dashboard/recruiter/subscriptions/payment-methods",
  },
];

const SubscriptionTabs = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full flex items-center gap-3">
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;

        return (
          <button
            key={tab.label}
            onClick={() => router.push(tab.path)}
            className={`text-sm font-medium rounded-md px-4 py-2 transition
              ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "bg-slate-200/60 text-slate-600 hover:bg-slate-300/70"
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default SubscriptionTabs;
