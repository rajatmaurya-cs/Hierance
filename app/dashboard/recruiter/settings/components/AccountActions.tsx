import { AlertTriangle } from "lucide-react";

const AccountActions = () => {
  return (
    <div className="w-full bg-white border border-neutral-200 rounded-xl p-4 sm:p-6 mt-6">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <AlertTriangle className="w-6 h-6 text-black mt-0.5" />
        <div>
          <h2 className="text-xl font-semibold text-black">Account Actions</h2>
          <p className="text-sm text-neutral-500">
            Manage critical actions related to your recruiter account.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-6">
        {/* Temporarily Disable Account */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-neutral-200 rounded-lg p-4">
          <div>
            <p className="text-sm font-medium text-neutral-900">
              Temporarily Disable Account
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Pause your recruiter account if you are not actively hiring. You
              can re-enable it anytime.
            </p>
          </div>

          <button
            type="button"
            className="border border-neutral-300 text-neutral-700 px-5 py-2 rounded-lg text-sm font-medium hover:bg-neutral-50 w-full sm:w-auto cursor-pointer"
          >
            Disable Account
          </button>
        </div>

        {/* Delete Account */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-red-300 rounded-lg p-4 bg-red-50">
          <div>
            <p className="text-sm font-medium text-red-700">
              Permanently Delete Account
            </p>
            <p className="text-xs text-red-600 mt-1">
              This action is irreversible. All company data, job posts, and
              candidate information will be permanently removed.
            </p>
          </div>

          <button
            type="button"
            className="bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-700 w-full sm:w-auto cursor-pointer"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Helper Warning */}
      <p className="text-xs text-neutral-500 mt-6">
        Please proceed carefully. Some actions may permanently affect your
        recruiter account and company data.
      </p>
    </div>
  );
};

export default AccountActions;
