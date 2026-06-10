import { Bell } from "lucide-react";

const Notifications = () => {
  return (
    <div className="w-full bg-white border border-neutral-200 rounded-xl p-4 sm:p-6 mt-6">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <Bell className="w-6 h-6 text-neutral-700 mt-0.5" />
        <div>
          <h2 className="text-xl font-semibold text-neutral-900">
            Notifications
          </h2>
          <p className="text-sm text-neutral-500">
            Choose how and when you receive updates.
          </p>
        </div>
      </div>

      {/* Notification Items */}
      <div className="space-y-4">
        <NotificationItem label="New candidate application" />
        <NotificationItem label="Candidate shortlisted" />
        <NotificationItem label="Interview scheduled" />
        <NotificationItem label="Job post expiry reminder" />
        <NotificationItem label="Subscription & billing alerts" />
      </div>

      {/* Helper Text */}
      <p className="text-xs text-neutral-500 mt-6">
        You can change notification preferences anytime.
      </p>
    </div>
  );
};

export default Notifications;

/* Toggle Row */
function NotificationItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-neutral-700">{label}</span>

      {/* Toggle */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />

        {/* Track */}
        <div className="w-11 h-6 bg-neutral-400 rounded-full peer-checked:bg-green-500 transition-colors duration-200" />

        {/* Thumb */}
        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-200 peer-checked:translate-x-5 flex items-center justify-center">
          {/* Cross */}
          <svg
            className="w-2 h-2 text-neutral-400 peer-checked:hidden"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.3 5.7a1 1 0 0 0-1.4 0L12 10.6 7.1 5.7a1 1 0 0 0-1.4 1.4L10.6 12l-4.9 4.9a1 1 0 0 0 1.4 1.4l4.9-4.9 4.9 4.9a1 1 0 0 0 1.4-1.4L13.4 12l4.9-4.9a1 1 0 0 0 0-1.4z" />
          </svg>

          {/* Check */}
          <svg
            className="w-3 h-3 text-green-500 hidden peer-checked:block"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9.707 19.121a1 1 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 2.121-2.121L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 2.121z" />
          </svg>
        </div>
      </label>
    </div>
  );
}
