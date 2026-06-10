import AgeDistributionChart from "./components/AgeDistribution";
import ExperienceDistributionChart from "./components/ExperienceDistribution";
import GenderStatsCard from "./components/GenderDistribution";
import GrowthChart from "./components/GrowthAnalytics";
import JobPreferenceChart from "./components/JobPreferenceChart";
import JobTypePreferenceChart from "./components/JobTypePreference";
import JoiningAvailability from "./components/JoiningAvailability";
import LocationDistributionChart from "./components/LocationDistribution";
import MostAppliedRolesTable from "./components/MostAppliedRoles";
import SalaryDistributionChart from "./components/SalaryExpectation";
import SkillDistributionTable from "./components/SkillDistribution";
import TopSkillsCloud from "./components/SkillTagCloud";
import SummaryStats from "./components/SummaryStats";

const JobSeekerAnalyticsPage = () => {
  return (
    <section className="w-full flex flex-col gap-6">
      {/* TOP STATS */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-9">
          <SummaryStats />
        </div>

        <div className="col-span-3">
          <GenderStatsCard />
        </div>
      </div>

      {/* GROWTH + DEMOGRAPHICS */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6">
          <GrowthChart />
        </div>

        <div className="col-span-3">
          <LocationDistributionChart />
        </div>

        <div className="col-span-3">
          <AgeDistributionChart />
        </div>
      </div>

      {/* SKILLS + SALARY + EXPERIENCE */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6">
          <SkillDistributionTable />
        </div>

        <div className="col-span-3">
          <SalaryDistributionChart />
        </div>

        <div className="col-span-3">
          <ExperienceDistributionChart />
        </div>
      </div>

      {/* JOB PREFERENCES */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <JobPreferenceChart />
        </div>

        <div className="col-span-4">
          <JobTypePreferenceChart />
        </div>

        <div className="col-span-4">
          <JoiningAvailability />
        </div>
      </div>

      {/* SKILL CLOUD + ROLES */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <TopSkillsCloud />
        </div>

        <div className="col-span-9">
          <MostAppliedRolesTable />
        </div>
      </div>
    </section>
  );
};

export default JobSeekerAnalyticsPage;
