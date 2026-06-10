import Button from "@/shared/components/common/Button";
import PlanUsagePreview from "./PlanUsagePreview";
import UsageAlert from "./UsageAlert";
import UpgradePlanMockupCard from "./UpgradePlanMockupCard";
import BillingHistoryPreview from "./BillingHistoryPreview";
import PaymentMethodPreview from "./PaymentMethodPreview";

const CurrentPlan = () => {
  return (
    <section className="space-y-6">
      {/* current plan */}
      <div className="w-full bg-neutral-100 rounded-xl shadow-sm p-6 space-y-5">
        {/* plan header */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-slate-500 text-sm">Current plan</p>

            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-slate-900">
                Recruiter Pro
              </h2>
              <span className="rounded-full px-3 py-1 text-xs font-medium bg-slate-200 text-slate-700">
                Team Plan
              </span>
            </div>
          </div>

          {/* plan manage buttons */}
          <div className="flex items-center gap-3 w-1/4">
            <Button
              text="Manage Plan"
              extraClasses="border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 text-center rounded-md text-sm px-5 py-2"
            />
            <Button
              text="Upgrade Plan"
              extraClasses="bg-slate-900 text-white hover:bg-slate-800 text-center rounded-md text-sm px-5 py-2"
            />
          </div>
        </div>

        {/* plan description */}
        <p className="text-sm text-slate-600 max-w-3xl">
          Designed for hiring teams that need higher limits, team collaboration,
          and advanced candidate access.
        </p>

        {/* plan summary */}
        <div className="grid grid-cols-4 gap-6 pt-4 border-t border-slate-200">
          <div>
            <p className="text-xs text-slate-500">Status</p>
            <p className="font-semibold text-slate-900 mt-1">Active</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Billing Cycle</p>
            <p className="font-semibold text-slate-900 mt-1">Monthly</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Next Renewal</p>
            <p className="font-semibold text-slate-900 mt-1">25 March 2026</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Team Members</p>
            <p className="font-semibold text-slate-900 mt-1">3 / 5</p>
          </div>
        </div>

        {/* footer meta */}
        <p className="text-xs text-slate-500">
          Auto-renewal enabled · Billed via saved payment method
        </p>
      </div>

      {/* middle section */}
      <div className="flex justify-between gap-6">
        <PlanUsagePreview />
        <div className="flex flex-col gap-6 w-1/3">
          <UsageAlert />
          <UpgradePlanMockupCard />
        </div>
      </div>

      {/* lower section */}
      <div className="flex justify-between gap-6">
        <BillingHistoryPreview />
        <PaymentMethodPreview />
      </div>
    </section>
  );
};

export default CurrentPlan;
