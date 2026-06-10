import SubscriptionTabs from "../components/SubscriptionTabs";
import CurrentPaymentMethodCard from "./CurrentPaymentMethodCard";
import PaymentMethodUsageTable from "./PaymentMethodUsageTable";

const PaymentMethodDetailPage = () => {
  return (
    <section className="space-y-6">
      {/* Page Header */}
      <SubscriptionTabs />
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Payment Method
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Manage your saved payment methods and view transactions made using
          them.
        </p>
      </div>

      {/* Current payment method */}
      <CurrentPaymentMethodCard />

      {/* Usage */}
      <PaymentMethodUsageTable />
    </section>
  );
};

export default PaymentMethodDetailPage;
