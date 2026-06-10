import { CreditCard } from "lucide-react";

const BillingSubscription = () => {
  return (
    <div className="w-full bg-white border border-neutral-200 rounded-xl p-4 sm:p-6 mt-6">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <CreditCard className="w-6 h-6 text-neutral-700 mt-0.5" />
        <div>
          <h2 className="text-xl font-semibold text-neutral-900">
            Billing & Subscription
          </h2>
          <p className="text-sm text-neutral-500">
            View your plan details and manage payments.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5">
        {/* Current Plan */}
        <div>
          <p className="text-sm font-medium text-neutral-800 mb-1">
            Current Plan
          </p>
          <p className="text-sm text-neutral-600">
            Pro Plan · Valid till 28 Feb 2026
          </p>
        </div>

        {/* Usage Summary */}
        <div>
          <p className="text-sm font-medium text-neutral-800 mb-1">
            Usage Summary
          </p>
          <p className="text-sm text-neutral-600">8 / 10 job posts used</p>

          {/* Progress Bar */}
          <div className="mt-2 h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
            <div className="h-full w-4/5 bg-black" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            className="text-white px-5 py-2.5 rounded-lg text-sm font-medium bg-blue-500 hover:bg-blue-700 w-full sm:w-auto cursor-pointer"
          >
            Upgrade Plan
          </button>

          <button
            type="button"
            className="border border-neutral-300 text-neutral-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-50 transition w-full sm:w-auto cursor-pointer"
          >
            View Billing History
          </button>

          <button
            type="button"
            className="border border-neutral-300 text-neutral-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-50 transition w-full sm:w-auto cursor-pointer"
          >
            Download Invoices
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingSubscription;
