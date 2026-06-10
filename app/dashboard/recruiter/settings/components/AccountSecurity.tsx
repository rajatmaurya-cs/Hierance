import { Shield } from "lucide-react";

const AccountSecurity = () => {
  return (
    <div className="w-full bg-white border border-neutral-200 rounded-xl p-4 sm:p-6 mt-6">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <Shield className="w-6 h-6 text-neutral-700 mt-0.5" />
        <div>
          <h2 className="text-xl font-semibold text-neutral-900">
            Security
          </h2>
          <p className="text-sm text-neutral-500">
            Manage your account security
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-5">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-1">
            Current Password
          </label>
          <input
            type="password"
            placeholder="Enter current password"
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-neutral-700 text-gray-700"
          />
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-1">
            New Password
          </label>
          <input
            type="password"
            placeholder="Enter new password (min. 8 characters)"
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-neutral-700 text-gray-700"
          />
        </div>

        {/* Confirm New Password */}
        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-neutral-700 text-gray-700"
          />
        </div>

        {/* Button */}
        <div className="pt-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium cursor-pointer"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
export default AccountSecurity;