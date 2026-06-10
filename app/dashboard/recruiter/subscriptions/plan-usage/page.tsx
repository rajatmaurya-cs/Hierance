import SubscriptionTabs from "../components/SubscriptionTabs";
import PlanOverview from "./PlanOverview";
import TeamUsage from "./TeamUsage";
import UsageSummary from "./UsageSummary";

const PlanUsageDetailPage = () => {
  return (
    <section className="space-y-6">
      <SubscriptionTabs />
      {/* Page Header */}
      {/* <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Plan Usage Details
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          View detailed usage of your current subscription and manage team
          members.
        </p>
      </div> */}

      {/* Plan overview */}
      <PlanOverview />

      {/* Usage summary */}
      <UsageSummary />

      {/* Team usage */}
      <TeamUsage />
    </section>
  );
};

export default PlanUsageDetailPage;
