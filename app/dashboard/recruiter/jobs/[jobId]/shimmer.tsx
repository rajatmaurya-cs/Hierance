import JobApplicantCardSkeleton from "./applicants/components/JobApplicantCardSkeleton";

const JobApplicantsShimmer = () => {
  return (
    <section className="w-full px-4 py-5 space-y-6 animate-pulse">
      {/* Header */}
      <div className="space-y-2">
        <div className="h-6 w-48 rounded bg-neutral-200" />
        <div className="h-4 w-72 rounded bg-neutral-200" />
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <div className="h-10 w-full rounded-lg bg-neutral-200" />
        <div className="h-10 w-28 rounded-lg bg-neutral-200" />
        <div className="h-10 w-32 rounded-lg bg-neutral-200" />
        <div className="h-10 w-28 rounded-lg bg-neutral-200" />
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        <JobApplicantCardSkeleton />
        <JobApplicantCardSkeleton />
        <JobApplicantCardSkeleton />
      </div>
    </section>
  );
};

export default JobApplicantsShimmer;
