const BillingHistoryPreview = () => {
  return (
    <section className="bg-neutral-100 rounded-xl shadow-sm p-6 space-y-4 w-2/3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm text-slate-500">Billing history</h3>
          <p className="text-base font-semibold text-slate-900">
            Recent payments
          </p>
        </div>

        <button className="text-sm font-medium text-slate-700 hover:underline">
          View all →
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-xs text-slate-500 border-b">
              <th className="py-2">Payment ID</th>
              <th className="py-2">Paid By</th>
              <th className="py-2">Plan</th>
              <th className="py-2">Type</th>
              <th className="py-2">Purchased On</th>
              <th className="py-2">Payment Method</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {/* Row 1 */}
            <tr className="border-b last:border-none text-slate-700">
              <td className="py-3 font-mono text-slate-700">#PAY-89321</td>
              <td className="py-3">Kanishq (Admin)</td>
              <td className="py-3">Recruiter Pro</td>
              <td className="py-3">
                <span className="px-2 py-1 rounded-full text-xs bg-slate-200 text-slate-700">
                  Team
                </span>
              </td>
              <td className="py-3">25 Feb 2026</td>
              <td className="py-3">Visa •••• 0032</td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b last:border-none text-slate-700">
              <td className="py-3 font-mono text-slate-700">#PAY-88104</td>
              <td className="py-3">Rajat</td>
              <td className="py-3">Starter</td>
              <td className="py-3">
                <span className="px-2 py-1 rounded-full text-xs bg-slate-200 text-slate-700">
                  Solo
                </span>
              </td>
              <td className="py-3">25 Jan 2026</td>
              <td className="py-3">Mastercard •••• 0091</td>
            </tr>

            {/* Row 3 */}
            <tr className="text-slate-700">
              <td className="py-3 font-mono text-slate-700">#PAY-86211</td>
              <td className="py-3">Kanishq</td>
              <td className="py-3">Recruiter Pro</td>
              <td className="py-3">
                <span className="px-2 py-1 rounded-full text-xs bg-slate-200 text-slate-700">
                  Team
                </span>
              </td>
              <td className="py-3">25 Dec 2025</td>
              <td className="py-3">UPI</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BillingHistoryPreview;
