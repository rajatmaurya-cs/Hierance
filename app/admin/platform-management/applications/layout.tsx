"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiChartBar } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

export default function JobSeekersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const tabs = [
    {
      name: "Analytics",
      href: "/admin/platform-management/applications/analytics",
      icon: <HiChartBar />,
    },
    {
      name: "Profiles",
      href: "/admin/platform-management/applications/profiles",
      icon: <FaUser />,
    },
  ];

  return (
    <section className="flex flex-col gap-6 w-full p-6">
      {/* page header */}
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">Job Applications</h1>
        <p className="text-sm text-neutral-500">
          Manage and track candidate applications across all jobs
        </p>
      </div>

      {/* tabs */}
      <div className="flex items-center gap-6 border-b border-neutral-200">
        {tabs.map((tab) => {
          const active = pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`flex items-center gap-2 pb-3 text-sm font-medium border-b-2 transition
              ${
                active
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-neutral-500 hover:text-neutral-800"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.name}
            </Link>
          );
        })}
      </div>

      {/* page content */}
      <div className="w-full">{children}</div>
    </section>
  );
}
