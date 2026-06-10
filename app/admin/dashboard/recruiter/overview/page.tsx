import { IoPeople } from "react-icons/io5";
import { HiMiniBuildingOffice2, HiOutlineBriefcase } from "react-icons/hi2";
import { MdOutlineEventAvailable, MdWorkOutline } from "react-icons/md";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import StatsCard from "../../components/StatsCard";
import TableCard from "../../components/TableCard";

import {
  FaBuilding,
  FaClock,
  FaFileAlt,
  FaUserCheck,
  FaUserClock,
  FaUserPlus,
  FaUserSlash,
  FaUserTie,
  FaUserTimes,
} from "react-icons/fa";

const RecruiterOverviewPage = () => {
  return (
    <section className="flex flex-col gap-8 w-full">
      {/* HEADER STATS */}
      <Header
        mainStats={[
          {
            icon: <IoPeople />,
            value: 750,
            label: "Total Recruiters",
            color: "text-blue-600",
            bg: "bg-blue-50",
          },
          {
            icon: <HiMiniBuildingOffice2 />,
            value: 420,
            label: "Total Companies",
            color: "text-purple-600",
            bg: "bg-purple-50",
          },
          {
            icon: <MdWorkOutline />,
            value: 1240,
            label: "Jobs Posted",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
          },
          {
            icon: <HiOutlineBriefcase />,
            value: 9850,
            label: "Applications",
            color: "text-orange-600",
            bg: "bg-orange-50",
          },
        ]}
        miniStats={[
          {
            icon: <MdWorkOutline />,
            value: 320,
            label: "Active Jobs",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
          },
          {
            icon: <IoPeople />,
            value: 84,
            label: "Active Recruiters Today",
            color: "text-blue-600",
            bg: "bg-blue-50",
          },
        ]}
      />

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* LEFT SIDEBAR */}
        <div className="lg:col-span-1">
          <Sidebar
            title="Hiring Pipeline"
            items={[
              {
                label: "Total Shortlisted",
                value: 1500,
                icon: <FaUserCheck />,
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                label: "Total Interviewed",
                value: 950,
                icon: <FaUserClock />,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
              {
                label: "Offers Sent",
                value: 430,
                icon: <FaUserTie />,
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                label: "Total Hired",
                value: 210,
                icon: <FaUserPlus />,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                label: "Total Rejected",
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
            title="Verification Status"
            items={[
              {
                label: "Verified Recruiters",
                value: 750,
                icon: <FaUserCheck />,
                iconColor: "text-emerald-600",
                iconBg: "bg-emerald-200",
                rowBg: "bg-emerald-50",
                description: "Recruiters with verified company profiles",
                trend: 6,
                badge: "Active",
              },
              {
                label: "Verified Companies",
                value: 420,
                icon: <FaBuilding />,
                iconColor: "text-green-600",
                iconBg: "bg-green-200",
                rowBg: "bg-green-50",
                description: "Companies approved by admin",
                trend: 4,
                badge: "Trusted",
              },
              {
                label: "Pending Verifications",
                value: 32,
                icon: <FaClock />,
                iconColor: "text-amber-600",
                iconBg: "bg-amber-200",
                rowBg: "bg-amber-50",
                description: "Profiles awaiting admin approval",
                badge: "Review",
              },
              {
                label: "Suspended Recruiters",
                value: 12,
                icon: <FaUserSlash />,
                iconColor: "text-red-600",
                iconBg: "bg-red-200",
                rowBg: "bg-red-50",
                description: "Accounts flagged for violations",
                badge: "Blocked",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default RecruiterOverviewPage;
