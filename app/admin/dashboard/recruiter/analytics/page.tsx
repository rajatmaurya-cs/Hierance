"use client";

import { IoPeople } from "react-icons/io5";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import StatsCard from "../../components/StatsCard";
import TableCard from "../../components/TableCard";
import { HiMiniBuildingOffice2, HiOutlineBriefcase } from "react-icons/hi2";
import { MdOutlineEventAvailable, MdWorkOutline } from "react-icons/md";
import {
  FaBuilding,
  FaChartLine,
  FaClock,
  FaFileAlt,
  FaUserSlash,
} from "react-icons/fa";

import {
  FaUserCheck,
  FaUserClock,
  FaUserPlus,
  FaUserTie,
  FaUserTimes,
} from "react-icons/fa";

const RecruiterAnalyticsPage = () => {
  return (
    <section className="flex flex-col gap-8 w-full">
      {/* HEADER STATS */}
      <Header
        mainStats={[
          {
            icon: <MdWorkOutline />,
            value: 120,
            label: "Jobs Posted Today",
            color: "text-blue-600",
            bg: "bg-blue-50",
          },
          {
            icon: <MdWorkOutline />,
            value: 580,
            label: "Jobs This Week",
            color: "text-purple-600",
            bg: "bg-purple-50",
          },
          {
            icon: <MdWorkOutline />,
            value: 2100,
            label: "Jobs This Month",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
          },
          {
            icon: <HiOutlineBriefcase />,
            value: 320,
            label: "Active Jobs",
            color: "text-orange-600",
            bg: "bg-orange-50",
          },
        ]}
        miniStats={[
          {
            icon: <FaChartLine />,
            value: 150,
            label: "Closed Jobs",
            color: "text-red-600",
            bg: "bg-red-50",
          },
        ]}
      />

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* LEFT SIDEBAR */}
        <div className="lg:col-span-1">
          <Sidebar
            title="Application Insights"
            items={[
              {
                label: "Applications Received",
                value: 9850,
                icon: <FaUserCheck />,
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                label: "Applications Reviewed",
                value: 7420,
                icon: <FaUserClock />,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
              {
                label: "Candidates Shortlisted",
                value: 1500,
                icon: <FaUserTie />,
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                label: "Interviews Scheduled",
                value: 950,
                icon: <FaUserPlus />,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                label: "Candidates Rejected",
                value: 860,
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
            title="Job Performance Insights"
            items={[
              {
                label: "Top Hiring Company",
                value: 45,
                icon: <FaBuilding />,
                iconColor: "text-blue-600",
                iconBg: "bg-blue-200",
                description: "Google hired the most candidates this month",
                trend: 8,
                badge: "Leader",
              },
              {
                label: "Companies Posting Most Jobs",
                value: 120,
                icon: <FaBuilding />,
                iconColor: "text-indigo-600",
                iconBg: "bg-indigo-200",
                description: "Amazon posted the most job openings",
                trend: 5,
                badge: "High Activity",
              },
              {
                label: "Jobs With Most Applications",
                value: 980,
                icon: <FaUserCheck />,
                iconColor: "text-purple-600",
                iconBg: "bg-purple-200",
                description:
                  "Frontend Engineer role received highest applications",
                badge: "Trending",
              },
              {
                label: "Fastest Hiring Company",
                value: 7,
                icon: <FaClock />,
                iconColor: "text-emerald-600",
                iconBg: "bg-emerald-200",
                description: "Stripe filled positions in the shortest time",
                badge: "Fast Hire",
              },
              {
                label: "Most In-Demand Role",
                value: 1340,
                icon: <FaUserCheck />,
                iconColor: "text-orange-600",
                iconBg: "bg-orange-200",
                description: "React Developer jobs received highest interest",
                badge: "Trending",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default RecruiterAnalyticsPage;
