const PaymentMethodPreview = () => {
  return (
    <section className="w-1/3 bg-neutral-100 rounded-xl shadow-sm p-6 space-y-4">
      {/* Header */}
      <div>
        <h3 className="text-sm text-slate-500">Payment method</h3>
        <p className="text-base font-semibold text-slate-900">
          Default payment method
        </p>
      </div>

      {/* Credit Card UI */}
      <div className="relative rounded-2xl p-5 text-white overflow-hidden bg-linear-to-br from-indigo-500 via-purple-500 to-pink-400">
        {/* Brand */}
        <p className="text-sm font-semibold tracking-wide">VISA</p>

        {/* Card Number */}
        <p className="mt-6 font-mono text-lg tracking-widest">
          •••• •••• •••• 0032
        </p>

        {/* Card Holder */}
        <p className="mt-4 text-sm font-medium">Edward Hunt</p>

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-white/10 rounded-2xl pointer-events-none" />
      </div>

      {/* Meta info */}
      <div className="text-sm text-slate-600 space-y-1">
        <p>Expires 08 / 2027</p>
        <p>Used for all subscription renewals</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 pt-2">
        <button className="text-sm font-medium text-slate-900 hover:underline">
          Change method
        </button>
        <button className="text-sm font-medium text-slate-600 hover:underline">
          Add new
        </button>
      </div>
    </section>
  );
};

export default PaymentMethodPreview;
