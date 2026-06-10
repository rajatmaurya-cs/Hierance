const CurrentPaymentMethodCard = () => {
  return (
    <section className="bg-neutral-100 rounded-xl shadow-sm p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Current payment method
          </h3>
          <p className="text-sm text-slate-600">
            This method is used for all subscription payments.
          </p>
        </div>

        <button className="text-sm text-red-600 hover:underline">Remove</button>
      </div>

      {/* Credit card UI */}
      <div className="relative max-w-md rounded-2xl p-5 text-white bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 overflow-hidden">
        <p className="text-sm font-semibold tracking-wide">VISA</p>

        <p className="mt-6 font-mono text-lg tracking-widest">
          •••• •••• •••• 0032
        </p>

        <p className="mt-4 text-sm font-medium">Edward Hunt</p>

        <div className="absolute inset-0 bg-white/10 rounded-2xl pointer-events-none" />
      </div>

      {/* Card details */}
      <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200">
        <div>
          <p className="text-xs text-slate-500">Card brand</p>
          <p className="font-medium text-slate-900 mt-1">Visa</p>
        </div>

        <div>
          <p className="text-xs text-slate-500">Expiry</p>
          <p className="font-medium text-slate-900 mt-1">08 / 2027</p>
        </div>

        <div>
          <p className="text-xs text-slate-500">Status</p>
          <p className="font-medium text-green-700 mt-1">Active</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
          Add new payment method
        </button>

        <button className="text-sm font-medium text-slate-700 hover:underline">
          Change default method
        </button>
      </div>
    </section>
  );
};

export default CurrentPaymentMethodCard;
