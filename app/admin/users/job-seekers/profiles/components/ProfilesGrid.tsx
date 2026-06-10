"use client";

import EmptyState from "./EmptyState";
import JobSeekerOverviewCard from "./JobSeekerOverviewCard";

type JobSeeker = {
  id: string;
  name: string;
  image: string;
  skills: string[];
  company: string;
  designation: string;
  location: string;
  experience: number;
};

type Props = {
  data: JobSeeker[];
};

export default function ProfilesGrid({ data }: Props) {
  if (!data.length) {
    return <EmptyState />;
  }

  return (
    <div className="flex flex-col gap-5">
      {data.map((user) => (
        <JobSeekerOverviewCard key={user.id} user={user} />
      ))}
    </div>
  );
}
