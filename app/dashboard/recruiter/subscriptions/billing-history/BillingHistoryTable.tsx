const BillingHistoryTable = () => {
  return (
    <section className="bg-neutral-100 rounded-xl shadow-sm p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-slate-900">
          Payment records
        </h3>

        <button className="text-sm font-medium text-slate-700 hover:underline">
          Export
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-xs text-slate-500 border-b">
              <th className="py-3 text-left">Payment ID</th>
              <th className="py-3 text-left">Plan</th>
              <th className="py-3 text-left">Type</th>
              <th className="py-3 text-left">Team</th>
              <th className="py-3 text-left">Paid By</th>
              <th className="py-3 text-left">Amount</th>
              <th className="py-3 text-left">Payment Method</th>
              <th className="py-3 text-left">Purchased On</th>
              <th className="py-3 text-left">Ends On</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-right">Invoice</th>
            </tr>
          </thead>

          <tbody className="text-slate-700">
            {/* Row 1 */}
            <tr className="border-b last:border-none">
              <td className="py-3 font-mono text-slate-700">#PAY-89321</td>
              <td className="py-3">Recruiter Pro</td>
              <td className="py-3">
                <span className="px-2 py-1 text-xs rounded-full bg-slate-200">
                  Team
                </span>
              </td>
              <td className="py-3">3 members</td>
              <td className="py-3">Kanishq (Admin)</td>
              <td className="py-3 font-medium">₹4,999</td>
              <td className="py-3">Visa •••• 0032</td>
              <td className="py-3">25 Feb 2026</td>
              <td className="py-3">25 Mar 2026</td>
              <td className="py-3">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  Paid
                </span>
              </td>
              <td className="py-3 text-right">
                <button className="text-sm text-slate-700 hover:underline">
                  Download
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b last:border-none">
              <td className="py-3 font-mono text-slate-700">#PAY-88104</td>
              <td className="py-3">Starter</td>
              <td className="py-3">
                <span className="px-2 py-1 text-xs rounded-full bg-slate-200">
                  Solo
                </span>
              </td>
              <td className="py-3">—</td>
              <td className="py-3">Rajat</td>
              <td className="py-3 font-medium">₹1,999</td>
              <td className="py-3">UPI</td>
              <td className="py-3">25 Jan 2026</td>
              <td className="py-3">25 Feb 2026</td>
              <td className="py-3">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  Paid
                </span>
              </td>
              <td className="py-3 text-right">
                <button className="text-sm text-slate-700 hover:underline">
                  Download
                </button>
              </td>
            </tr>

            {/* Row 3 (Expired) */}
            <tr>
              <td className="py-3 font-mono text-slate-700">#PAY-86211</td>
              <td className="py-3">Recruiter Pro</td>
              <td className="py-3">
                <span className="px-2 py-1 text-xs rounded-full bg-slate-200">
                  Team
                </span>
              </td>
              <td className="py-3">2 members</td>
              <td className="py-3">Kanishq</td>
              <td className="py-3 font-medium">₹4,999</td>
              <td className="py-3">Mastercard •••• 0091</td>
              <td className="py-3">25 Dec 2025</td>
              <td className="py-3">25 Jan 2026</td>
              <td className="py-3">
                <span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-600">
                  Expired
                </span>
              </td>
              <td className="py-3 text-right">
                <button className="text-sm text-slate-700 hover:underline">
                  Download
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BillingHistoryTable;
