import { FaArrowUp, FaArrowDown, FaReceipt, FaFileInvoiceDollar, FaRegCreditCard } from "react-icons/fa";

const TutorRevenuePage = () => {
  const transactions = [
    { id: "TRX-8923", tutor: "Dr. Emily Smith", amount: "₹1,250.00", type: "Course Payout", status: "Completed", date: "Today, 10:42 AM" },
    { id: "TRX-8924", tutor: "James Wilson", amount: "₹840.00", type: "Subscription Fee", status: "Completed", date: "Today, 09:15 AM" },
    { id: "TRX-8925", tutor: "Lisa Wong", amount: "₹3,420.00", type: "Course Payout", status: "Processing", date: "Yesterday" },
    { id: "TRX-8926", tutor: "David Miller", amount: "₹150.00", type: "Refund Deduction", status: "Completed", date: "Yesterday" },
    { id: "TRX-8927", tutor: "Sarah Jenkins", amount: "₹980.00", type: "Course Payout", status: "Completed", date: "Oct 24, 2023" },
  ];

  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in duration-500">
      
      {/* Top Split Header */}
      <div className="flex flex-col md:flex-row gap-6 md:items-end justify-between bg-stone-50 border border-stone-100 rounded-2xl p-8">
        <div>
          <p className="text-stone-500 font-medium mb-2 flex items-center gap-2">
            <FaFileInvoiceDollar /> Total Platform Revenue (YTD)
          </p>
          <div className="flex items-baseline gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-800">₹452,000</h1>
            <span className="flex items-center gap-1 text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
              <FaArrowUp size={10} /> 12.5%
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <div className="bg-white border border-stone-100 rounded-xl p-4 min-w-[140px] shadow-sm">
            <p className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-1">Course Sales</p>
            <p className="text-lg font-semibold text-stone-700">₹380,500</p>
          </div>
          <div className="bg-white border border-stone-100 rounded-xl p-4 min-w-[140px] shadow-sm">
            <p className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-1">Subscriptions</p>
            <p className="text-lg font-semibold text-stone-700">₹71,500</p>
          </div>
        </div>
      </div>

      {/* Main Ledger Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Transactions List (Wide) */}
        <div className="lg:col-span-3 bg-white border border-stone-100 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-stone-50 flex items-center justify-between bg-stone-50/30">
            <div className="flex items-center gap-2">
              <FaReceipt className="text-stone-400" />
              <h3 className="font-semibold text-stone-800">Recent Transactions</h3>
            </div>
            <button className="text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors">Download CSV</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-50/50 text-xs uppercase tracking-wider text-stone-400 border-b border-stone-50">
                  <th className="px-6 py-4 font-medium">Transaction ID</th>
                  <th className="px-6 py-4 font-medium">Tutor</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {transactions.map((trx) => (
                  <tr key={trx.id} className="hover:bg-stone-50/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-stone-500">{trx.id}</td>
                    <td className="px-6 py-4 font-medium text-stone-700">{trx.tutor}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-md">{trx.type}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-stone-500">{trx.date}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${trx.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                        {trx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-stone-700">{trx.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side Panel (Narrow) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Refunds Widget */}
          <div className="bg-white border border-stone-100 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-stone-800 mb-4">Refunds & Disputes</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-stone-500">Refund Rate</span>
              <span className="text-sm font-semibold text-amber-600">2.4%</span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-2 mb-6">
              <div className="bg-amber-400 h-2 rounded-full" style={{ width: '24%' }}></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-stone-600">
                  <FaArrowDown className="text-stone-400" size={12} /> Pending Reviews
                </div>
                <span className="font-medium text-stone-700">12</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-stone-600">
                  <FaRegCreditCard className="text-stone-400" size={12} /> Processed (MTD)
                </div>
                <span className="font-medium text-stone-700">₹1,450</span>
              </div>
            </div>
          </div>
          
          {/* Action Card */}
          <div className="bg-stone-50 border border-stone-100 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-stone-400 mb-3 shadow-sm border border-stone-100">
              <FaFileInvoiceDollar size={20} />
            </div>
            <h4 className="font-medium text-stone-800 text-sm">Generate Financial Report</h4>
            <p className="text-xs text-stone-500 mt-2 mb-4">Export comprehensive ledger for accounting.</p>
            <button className="w-full py-2 bg-stone-800 text-white text-sm font-medium rounded-lg hover:bg-stone-700 transition-colors">
              Export PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TutorRevenuePage;
