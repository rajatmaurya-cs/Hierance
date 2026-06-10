import { MdOutlineEventAvailable, MdSubscriptions } from "react-icons/md";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import StatsCard from "../../components/StatsCard";
import TableCard from "../../components/TableCard";
import { IoTrendingUp } from "react-icons/io5";
import {
  FaBuilding,
  FaClock,
  FaFileAlt,
  FaMoneyBillWave,
  FaUserSlash,
} from "react-icons/fa";

import {
  FaUserCheck,
  FaUserClock,
  FaUserPlus,
  FaUserTie,
  FaUserTimes,
} from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi2";

const RecruiterRevenuePage = () => {
  return (
    <section className="flex flex-col gap-8 w-full">
      {/* HEADER STATS */}
      <Header
        mainStats={[
          {
            icon: <FaMoneyBillWave />,
            value: 842000,
            label: "Total Revenue",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
          },
          {
            icon: <IoTrendingUp />,
            value: 120000,
            label: "Monthly Revenue",
            color: "text-blue-600",
            bg: "bg-blue-50",
          },
          {
            icon: <MdSubscriptions />,
            value: 430,
            label: "Active Subscriptions",
            color: "text-purple-600",
            bg: "bg-purple-50",
          },
          {
            icon: <MdSubscriptions />,
            value: 120,
            label: "Expired Subscriptions",
            color: "text-orange-600",
            bg: "bg-orange-50",
          },
        ]}
        miniStats={[
          {
            icon: <MdSubscriptions />,
            value: 310,
            label: "Premium Recruiters",
            color: "text-indigo-600",
            bg: "bg-indigo-50",
          },
        ]}
      />

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* LEFT SIDEBAR */}
        <div className="lg:col-span-1">
          <Sidebar
            title="Subscription Stats"
            items={[
              {
                label: "Premium Recruiters",
                value: 310,
                icon: <FaUserCheck />,
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                label: "Active Subscriptions",
                value: 430,
                icon: <FaUserClock />,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
              {
                label: "Renewals This Month",
                value: 120,
                icon: <FaUserTie />,
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                label: "Expired Subscriptions",
                value: 45,
                icon: <FaUserPlus />,
                color: "text-orange-600",
                bg: "bg-orange-50",
              },
              {
                label: "Churned Recruiters",
                value: 22,
                icon: <FaUserTimes />,
                color: "text-red-600",
                bg: "bg-red-50",
              },
            ]}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* TODAY STATS */}
          <StatsCard
            items={[
              {
                label: "Jobs Posted Today",
                value: 75,
                icon: <HiOutlineBriefcase />,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                trend: 8,
              },
              {
                label: "Applications Today",
                value: 320,
                icon: <FaFileAlt />,
                color: "text-blue-600",
                bg: "bg-blue-50",
                trend: 12,
              },
              {
                label: "Interviews Scheduled",
                value: 42,
                icon: <MdOutlineEventAvailable />,
                color: "text-purple-600",
                bg: "bg-purple-50",
                trend: 5,
              },
            ]}
          />

          {/* VERIFICATION PANEL */}
          <TableCard
            title="Subscription Insights"
            items={[
              {
                label: "Premium Recruiters",
                value: 310,
                icon: <FaUserCheck />,
                iconColor: "text-emerald-600",
                iconBg: "bg-emerald-200",
                description: "Recruiters using premium hiring plans",
                trend: 7,
                badge: "Growth",
              },
              {
                label: "Active Subscriptions",
                value: 430,
                icon: <FaBuilding />,
                iconColor: "text-blue-600",
                iconBg: "bg-blue-200",
                description: "Recruiters with currently active plans",
                trend: 5,
                badge: "Active",
              },
              {
                label: "Renewals This Month",
                value: 120,
                icon: <FaClock />,
                iconColor: "text-indigo-600",
                iconBg: "bg-indigo-200",
                description: "Subscriptions renewed successfully",
                trend: 3,
                badge: "Stable",
              },
              {
                label: "Expired Subscriptions",
                value: 45,
                icon: <FaUserSlash />,
                iconColor: "text-red-600",
                iconBg: "bg-red-200",
                description: "Plans that expired this month",
                badge: "Attention",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default RecruiterRevenuePage;
