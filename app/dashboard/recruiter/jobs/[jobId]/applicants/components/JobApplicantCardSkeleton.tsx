const JobApplicantCardSkeleton = () => {
  return (
    <div
      className="
        w-full
        rounded-xl
        border border-neutral-200
        bg-white
        p-4
        animate-pulse
      "
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="w-14 h-14 rounded-full bg-neutral-200" />
          <div className="space-y-2">
            <div className="h-4 w-40 rounded bg-neutral-200" />
            <div className="h-3 w-32 rounded bg-neutral-200" />
            <div className="h-3 w-24 rounded bg-neutral-200" />
          </div>
        </div>

        <div className="space-y-2 text-right">
          <div className="h-4 w-24 rounded bg-neutral-200" />
          <div className="h-3 w-20 rounded bg-neutral-200" />
        </div>
      </div>

      {/* Skills */}
      <div className="mt-4 flex gap-2">
        <div className="h-6 w-16 rounded-full bg-neutral-200" />
        <div className="h-6 w-20 rounded-full bg-neutral-200" />
        <div className="h-6 w-14 rounded-full bg-neutral-200" />
      </div>

      {/* Footer */}
      <div className="mt-5 flex justify-between items-center">
        <div className="flex gap-3">
          <div className="h-5 w-5 rounded-full bg-neutral-200" />
          <div className="h-5 w-5 rounded-full bg-neutral-200" />
          <div className="h-5 w-5 rounded-full bg-neutral-200" />
          <div className="h-5 w-5 rounded-full bg-neutral-200" />
        </div>

        <div className="flex gap-2">
          <div className="h-8 w-28 rounded-lg bg-neutral-200" />
          <div className="h-8 w-20 rounded-lg bg-neutral-200" />
        </div>
      </div>
    </div>
  );
};

export default JobApplicantCardSkeleton;
