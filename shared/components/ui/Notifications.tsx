"use client";

import { IoClose } from "react-icons/io5";

type NotificationsProps = {
  onClose: () => void;
};

const Notifications = ({ onClose }: NotificationsProps) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-[420px] h-screen bg-white shadow-2xl flex flex-col animate-slideIn rounded-l-3xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-slate-200">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Notifications
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Stay updated with your activity
            </p>
          </div>

          <IoClose
            onClick={onClose}
            className="text-2xl text-slate-400 hover:text-black cursor-pointer transition"
          />
        </div>

        {/* Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
          {/* ================= TODAY ================= */}
          <SectionLabel title="Today" />

          <NotificationCard
            icon="👑"
            title="25% Off Hireance Pro This Winter!"
            description="Boost your visibility with Hireance Pro."
            time="2h ago"
            actionLabel="Unlock Offer"
            unread
          />

          <NotificationCard
            icon="🧠"
            title="Solve today's problem to test your skills!"
            description="Take the daily challenge and improve."
            time="4h ago"
            unread
          />

          {/* ================= EARLIER ================= */}
          <SectionLabel title="Earlier" />

          <NotificationCard
            icon="📢"
            title="15 new job recommendations for you"
            description="Based on your updated profile."
            time="1d ago"
          />

          <NotificationCard
            icon="🎉"
            title="Your application was viewed!"
            description="A recruiter checked your profile."
            time="2d ago"
          />
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

export default Notifications;

/* ================= SUB COMPONENTS ================= */

const SectionLabel = ({ title }: { title: string }) => (
  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
    {title}
  </div>
);

type NotificationCardProps = {
  icon: string;
  title: string;
  description: string;
  time: string;
  actionLabel?: string;
  unread?: boolean;
};

const NotificationCard = ({
  icon,
  title,
  description,
  time,
  actionLabel,
  unread,
}: NotificationCardProps) => {
  return (
    <div className="relative bg-slate-50 hover:bg-slate-100 transition p-4 rounded-2xl cursor-pointer group">
      {/* Unread Dot */}
      {unread && (
        <span className="absolute top-4 right-4 w-2 h-2 bg-blue-600 rounded-full" />
      )}

      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-xl bg-white shadow flex items-center justify-center text-lg">
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500 mt-1">{description}</p>

          {actionLabel && (
            <button className="mt-3 px-4 py-1.5 text-xs bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              {actionLabel}
            </button>
          )}

          <p className="text-xs text-slate-400 mt-3">{time}</p>
        </div>
      </div>
    </div>
  );
};
