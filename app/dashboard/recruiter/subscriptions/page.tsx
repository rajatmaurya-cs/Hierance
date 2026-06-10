import BillingHistoryDetailPage from "./billing-history/page";
import CurrentPlan from "./components/CurrentPlan";
import SubscriptionTabs from "./components/SubscriptionTabs";
import PaymentMethodDetailPage from "./payment-methods/page";
import PlanUsageDetailPage from "./plan-usage/page";
import UpgradePlan from "./upgrade-plan/page";

const SubscriptionOverviewPage = () => {
  return (
    <section className="w-full space-y-6">
      {/* intro */}
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">
          Subscription & Billing
        </h1>
        <p className="text-slate-600 text-sm mt-2 max-w-2xl">
          Monitor your plan usage, manage billing details, and upgrade anytime
          as your hiring needs grow.
        </p>
      </div>

      {/* main content area */}
      <main className="space-y-6">
        {/* tabs */}
        <SubscriptionTabs />
        <CurrentPlan />
        {/* <PlanUsageDetailPage /> */}
        {/* <BillingHistoryDetailPage /> */}
        {/* <UpgradePlan /> */}
        {/* <PaymentMethodDetailPage /> */}
      </main>
    </section>
  );
};

export default SubscriptionOverviewPage;
