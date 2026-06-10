import { notFound } from "next/navigation";
import { mockCompanies as companies, mockJobs } from "@/shared/data/mockData";
import CompanyHeader from "./components/CompanyHeader";
import CompanyOverview from "./components/CompanyOverview";
import CompanyStats from "./components/CompanyStats";
import CompanyJobsList from "./components/CompanyJobsList";
import CompanyBenefits from "./components/CompanyBenefits";
import CompanyContactInfo from "./components/CompanyContactInfo";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ username: string; companyId: string }>;
}) {
  const { companyId } = await params;

  const company = companies.find(
    (c) => c.id.toLowerCase() === companyId.toLowerCase(),
  );

  if (!company) {
    return notFound();
  }

  // Filter jobs for this specific company
  const companyJobs = mockJobs.filter(
    (job) => job.companyId.toLowerCase() === companyId.toLowerCase()
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8 md:px-8 space-y-6 pb-16">
        {/* HEADER */}
        <CompanyHeader
          company={{
            name: company.name,
            logo: company.logo,
            industry: company.industry,
            location: company.location,
            website: company.contact.website,
            verified: true,
          }}
        />

        {/* STATS */}
        <CompanyStats
          totalJobs={company.stats.totalJobs}
          activeJobs={company.stats.activeJobs}
          employees={company.employees}
          foundedYear={company.founded}
          rating={company.stats.rating}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* OVERVIEW */}
            <CompanyOverview
              overview={{
                shortDescription: company.description,
                mission: company.mission,
                vision: company.vision,
                culture: "Collaborative and innovation-driven work culture.",
                hiringProcess: "Screening → Technical Round → HR Round",
              }}
            />

            {/* JOBS LIST */}
            <CompanyJobsList
              companySlug={company.id}
              jobs={companyJobs.map((job) => ({
                _id: job.id,
                title: job.title,
                experience: "3-5 Yrs",
                salaryMin: 1200000,
                salaryMax: 2400000,
                location: job.location,
              }))}
            />
          </div>

          <div className="space-y-6">
            {/* BENEFITS */}
            <CompanyBenefits benefits={company.benefits} />

            {/* CONTACT */}
            <CompanyContactInfo
              contact={{
                email: company.contact.email,
                website: company.contact.website,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
