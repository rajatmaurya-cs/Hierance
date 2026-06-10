import CompanyInfo from "../components/CompanySection";
import JobDescriptions from "../components/JobDescription";
import JobDetailsHeader from "../components/JobDetailsHeader";
import SimilarJobs from "../components/SimilarJobs";

const ApplyJobPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFF]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <JobDetailsHeader />
          
          <div className="flex flex-col gap-10">
            <JobDescriptions />
            <div className="h-px bg-slate-100" />
            <CompanyInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyJobPage;
