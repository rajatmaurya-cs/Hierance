const PaymentMethodUsageTable = () => {
  return (
    <section className="bg-neutral-100 rounded-xl shadow-sm p-6 space-y-4">
      <h3 className="text-base font-semibold text-slate-900">
        Payments made using this method
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-xs text-slate-500 border-b">
              <th className="py-3 text-left">Payment ID</th>
              <th className="py-3 text-left">Plan</th>
              <th className="py-3 text-left">Amount</th>
              <th className="py-3 text-left">Purchased On</th>
              <th className="py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody className="text-slate-700">
            <tr className="border-b last:border-none">
              <td className="py-3 font-mono text-slate-700">#PAY-89321</td>
              <td className="py-3">Recruiter Pro</td>
              <td className="py-3 font-medium">₹4,999</td>
              <td className="py-3">25 Feb 2026</td>
              <td className="py-3">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  Paid
                </span>
              </td>
            </tr>

            <tr>
              <td className="py-3 font-mono text-slate-700">#PAY-86211</td>
              <td className="py-3">Recruiter Pro</td>
              <td className="py-3 font-medium">₹4,999</td>
              <td className="py-3">25 Dec 2025</td>
              <td className="py-3">
                <span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-600">
                  Expired
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PaymentMethodUsageTable;
