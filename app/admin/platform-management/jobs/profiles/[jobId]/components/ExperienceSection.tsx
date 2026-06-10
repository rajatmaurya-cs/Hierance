"use client";

import ExperienceCard from "./ExperienceCard";

type Experience = {
  companyLogo: string;
  companyName: string;
  role: string;
  joinAs: string;
  location: string;
  workType: string;
  startDate: string;
  endDate: string;
  skills: string[];
  description: string[];
};

type Props = {
  experiences: Experience[];
};

export default function ExperienceSection({ experiences }: Props) {
  return (
    <section className="w-full bg-white border border-neutral-200 rounded-2xl p-8">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-neutral-900">Experience</h2>

        <p className="text-sm text-neutral-500 mt-1">
          Candidate professional work experience
        </p>
      </div>

      {/* Scroll container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 w-max">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
