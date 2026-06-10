const UsageSummary = () => {
    return (
        <section className="bg-neutral-100 rounded-xl shadow-sm p-6 space-y-4">
        <h3 className="text-base font-semibold text-slate-900">
          Usage summary
        </h3>

        <div className="grid grid-cols-4 gap-6">
          <div>
            <p className="text-xs text-slate-500">Total credits</p>
            <p className="font-semibold text-slate-900 mt-1">100</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Used</p>
            <p className="font-semibold text-slate-900 mt-1">42</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Admin usage</p>
            <p className="font-semibold text-slate-900 mt-1">26</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Team usage</p>
            <p className="font-semibold text-slate-900 mt-1">16</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="pt-3">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>Used</span>
            <span>Remaining: 58</span>
          </div>

          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full w-[42%] bg-slate-900 rounded-full" />
          </div>
        </div>
      </section>
    )
}


export default UsageSummary;