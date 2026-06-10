import { FaBell, FaBuilding, FaClock, FaFileAlt, FaUserSlash } from "react-icons/fa";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import StatsCard from "../../components/StatsCard";
import TableCard from "../../components/TableCard";
import { IoNotifications } from "react-icons/io5";
import { MdEmail, MdOutlineEventAvailable } from "react-icons/md";

import {
  FaUserCheck,
  FaUserClock,
  FaUserPlus,
  FaUserTie,
  FaUserTimes,
} from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi2";

const RecruiterNotificationPage = () => {
  return (
    <section className="flex flex-col gap-8 w-full">
      {/* HEADER STATS */}
      <Header
        mainStats={[
          {
            icon: <IoNotifications />,
            value: 1450,
            label: "Notifications Sent",
            color: "text-blue-600",
            bg: "bg-blue-50",
          },
          {
            icon: <MdEmail />,
            value: 890,
            label: "Emails Sent",
            color: "text-purple-600",
            bg: "bg-purple-50",
          },
          {
            icon: <FaBell />,
            value: 620,
            label: "Push Notifications",
            color: "text-orange-600",
            bg: "bg-orange-50",
          },
          {
            icon: <FaBell />,
            value: 72,
            label: "Unread Alerts",
            color: "text-red-600",
            bg: "bg-red-50",
          },
        ]}
        miniStats={[
          {
            icon: <IoNotifications />,
            value: 92,
            label: "Notifications Today",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
          },
        ]}
      />

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* LEFT SIDEBAR */}
        <div className="lg:col-span-1">
          <Sidebar
            title="Notification Metrics"
            items={[
              {
                label: "Notifications Sent",
                value: 1450,
                icon: <FaUserCheck />,
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                label: "Emails Delivered",
                value: 1200,
                icon: <FaUserClock />,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
              {
                label: "Push Notifications",
                value: 620,
                icon: <FaUserTie />,
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                label: "Open Rate",
                value: 68,
                icon: <FaUserPlus />,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                label: "Unread Alerts",
                value: 72,
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
            title="Notification Performance"
            items={[
              {
                label: "Notifications Sent",
                value: 1450,
                icon: <FaUserCheck />,
                iconColor: "text-blue-600",
                iconBg: "bg-blue-200",
                description: "Total notifications sent to recruiters",
                trend: 9,
                badge: "Active",
              },
              {
                label: "Emails Delivered",
                value: 1200,
                icon: <FaBuilding />,
                iconColor: "text-indigo-600",
                iconBg: "bg-indigo-200",
                description: "Emails successfully delivered",
                trend: 6,
                badge: "Healthy",
              },
              {
                label: "Push Notifications",
                value: 620,
                icon: <FaClock />,
                iconColor: "text-purple-600",
                iconBg: "bg-purple-200",
                description: "Mobile notifications sent",
                badge: "Live",
              },
              {
                label: "Unread Alerts",
                value: 72,
                icon: <FaUserSlash />,
                iconColor: "text-red-600",
                iconBg: "bg-red-200",
                description: "Notifications not yet opened",
                badge: "Attention",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default RecruiterNotificationPage;
