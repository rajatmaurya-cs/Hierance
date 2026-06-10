const PlanUsagePreview = () => {
  return (
    <section className="bg-neutral-100 shadow-sm rounded-xl p-6 w-2/3 space-y-4">
      <div className="flex items-start justify-between">
        <p className="text-slate-500 text-sm">Plan usage</p>
        <button className="text-sm font-medium text-slate-700/50 hover:underline cursor-pointer">
          View detailed usage →
        </button>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-slate-900">
          42 / 100 credits used
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          58 credits remaining in this billing cycle
        </p>
      </div>

      {/* progress bar */}
      <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full w-[42%] bg-slate-900 rounded-full" />
      </div>

      {/* breakdown */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
        <div>
          <p className="text-xs text-slate-500">Solo usage</p>
          <p className="font-semibold text-slate-900 mt-1">26 credits</p>
        </div>

        <div>
          <p className="text-xs text-slate-500">Team usage</p>
          <p className="font-semibold text-slate-900 mt-1">16 credits</p>
        </div>

        <div>
          <p className="text-xs text-slate-500">Active members</p>
          <p className="font-semibold text-slate-900 mt-1">3 members</p>
        </div>
      </div>
    </section>
  );
};

export default PlanUsagePreview;
