"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FaCrown } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";

type ProfileDrawerProps = {
  onClose: () => void;
};

const ProfileDrawer = ({ onClose }: ProfileDrawerProps) => {
  const params = useParams();
  const username = params.username as string;
  const safeUsername = username === "undefined" ? "rajat" : username;

  const openProfile = () => {
    window.open(`/candidate/${safeUsername}/profile`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-[400px] h-screen bg-white shadow-2xl z-50 flex flex-col animate-slideIn rounded-l-3xl overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            My Account
          </h2>
          <IoClose
            onClick={onClose}
            className="text-2xl text-slate-500 cursor-pointer hover:text-black transition"
          />
        </div>

        {/* Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">

          {/* ================= PROFILE ================= */}
          <div className="flex items-center gap-4">

            <div className="relative">
              <svg className="absolute -inset-1 w-20 h-20">
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  stroke="#e5e7eb"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  stroke="#3b82f6"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="214"
                  strokeDashoffset="53"
                  strokeLinecap="round"
                />
              </svg>

              <div className="relative w-16 h-16">
                <Image
                  src="/random.jpg"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover border-4 border-white shadow"
                />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Kanishq Sodhani
              </h3>
              <p className="text-sm text-slate-500">
                Frontend Web Developer
              </p>
              <button
                onClick={openProfile}
                className="text-blue-600 text-sm mt-1 hover:underline"
              >
                View & Edit Profile
              </button>
            </div>
          </div>

          {/* ================= UPGRADE ================= */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-5 text-white shadow-md hover:shadow-lg transition cursor-pointer">
            <div className="flex items-center gap-3">
              <FaCrown className="text-xl" />
              <div>
                <p className="font-semibold">Upgrade to Hireance Pro</p>
                <p className="text-xs opacity-90">
                  Get 3x visibility & early access roles
                </p>
              </div>
            </div>
          </div>

          {/* ================= PROFILE STRENGTH ================= */}
          <div>
            <h4 className="text-sm font-semibold text-slate-800 mb-4">
              Profile Completion
            </h4>

            <div className="bg-slate-100 rounded-full h-3 w-full overflow-hidden">
              <div className="bg-blue-600 h-full w-[75%] rounded-full transition-all duration-500" />
            </div>

            <p className="text-xs text-slate-500 mt-2">
              You&apos;re <span className="font-semibold text-slate-900">75% done</span>
            </p>

            <div className="mt-4 bg-slate-50 rounded-xl p-4 space-y-3 text-xs">
              <ChecklistItem label="Add profile summary" done />
              <ChecklistItem label="Add skills" />
              <ChecklistItem label="Upload resume" />
            </div>

            <button className="mt-5 w-full bg-blue-600 text-white text-sm py-2.5 rounded-xl hover:bg-blue-700 transition">
              Complete Profile
            </button>
          </div>

          {/* ================= MENU ================= */}
          <div className="space-y-2 border-t border-slate-200">

            <MenuItem icon={<FiSettings />} label="Settings" />
            <MenuItem icon={<FiLogOut />} label="Logout" danger />

          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.35s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProfileDrawer;

/* ================= SUB COMPONENTS ================= */

const ChecklistItem = ({
  label,
  done = false,
}: {
  label: string;
  done?: boolean;
}) => (
  <div className="flex justify-between items-center">
    <span className={done ? "text-slate-900" : "text-slate-600"}>
      {done ? "✔ " : "➤ "}
      {label}
    </span>
    {done ? (
      <span className="text-green-600 font-semibold text-[10px]">
        Done
      </span>
    ) : (
      <span className="text-blue-600 cursor-pointer hover:underline">
        Add
      </span>
    )}
  </div>
);

const MenuItem = ({
  icon,
  label,
  danger = false,
}: {
  icon: React.ReactNode;
  label: string;
  danger?: boolean;
}) => (
  <div
    className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition
    ${
      danger
        ? "text-red-500 hover:bg-red-50"
        : "text-slate-700 hover:bg-slate-100"
    }`}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);
