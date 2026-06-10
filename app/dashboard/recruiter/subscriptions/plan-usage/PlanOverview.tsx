const PlanOverview = () => {
    return(
         <section className="bg-neutral-100 rounded-xl shadow-sm p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-slate-500">Current plan</p>
            <h2 className="text-xl font-semibold text-slate-900">
              Recruiter Pro — Team Plan
            </h2>
          </div>

          <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
            Active
          </span>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200">
          <div>
            <p className="text-xs text-slate-500">Purchased by</p>
            <p className="font-medium text-slate-900 mt-1">Kanishq (Admin)</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Billing period</p>
            <p className="font-medium text-slate-900 mt-1">
              1 Feb 2026 – 29 Feb 2026
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Plan type</p>
            <p className="font-medium text-slate-900 mt-1">Team</p>
          </div>
        </div>

        {/* Usage alert */}
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
          <p className="font-medium text-amber-900">
            You’re approaching your plan limit
          </p>
          <p className="text-sm text-amber-800 mt-1">
            78% of your credits are already used. Consider upgrading to avoid
            interruptions.
          </p>
        </div>
      </section>
    )
}

export default PlanOverview;