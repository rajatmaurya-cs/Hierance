import SubscriptionTabs from "../components/SubscriptionTabs";
import BillingHistoryTable from "./BillingHistoryTable";

const BillingHistoryDetailPage = () => {
  return (
    <section className="space-y-6">
      <SubscriptionTabs />
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Billing History
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          View all past subscription payments, invoices, and plan details.
        </p>
      </div>

      {/* Billing table */}
      <BillingHistoryTable />
    </section>
  );
};

export default BillingHistoryDetailPage;
