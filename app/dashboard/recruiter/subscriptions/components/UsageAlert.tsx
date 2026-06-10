const UsageAlert = () => {
  return (
    <div className="rounded-xl bg-amber-50 border border-amber-200 p-5 space-y-2">
      <h4 className="font-semibold text-amber-900">
        You’re approaching your plan limit
      </h4>
      <p className="text-sm text-amber-800">
        78% of your hiring credits have been used. Upgrade your plan to avoid
        interruptions.
      </p>

      <button className="text-sm font-medium text-amber-900 underline">
        Upgrade plan
      </button>
    </div>
  );
};

export default UsageAlert;
