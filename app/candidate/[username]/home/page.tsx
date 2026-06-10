import CandidateOverviewCard from "./components/CandidateOverviewCard";
import JobFeedPage from "./components/JobFeedPage";

const CandidateHomePage = () => {
  return (
    <section className="min-h-screen w-full bg-slate-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:px-8">
        <CandidateOverviewCard />
        <JobFeedPage />
      </div>
    </section>
  );
};

export default CandidateHomePage;
