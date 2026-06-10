"use client";

import { useParams } from "next/navigation";
import { mockJobs } from "@/shared/data/mockData";

const JobDescriptions = () => {
  const params = useParams();
  const slug = params.slug as string;
  const job = getJobFromSlug(slug);

  return (
    <div className="space-y-12">
      <section>
        <h2 className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
          Role Overview
        </h2>
        <p className="max-w-4xl text-[17px] leading-[1.8] text-slate-600 font-normal">
          {job.description}
        </p>
      </section>

      <div className="grid gap-12 sm:grid-cols-2">
        <SectionBlock title="Key Responsibilities">
          <List items={job.responsibilities} />
        </SectionBlock>

        <SectionBlock title="Requirements">
          <List items={job.requirements} />
        </SectionBlock>
      </div>

      <section>
        <h2 className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
          Required Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl bg-slate-100/50 px-4 py-2 text-[13px] font-medium text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobDescriptions;

const SectionBlock = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section>
    <h2 className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
      {title}
    </h2>
    {children}
  </section>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-5 text-[15px] leading-relaxed text-slate-600 font-normal">
    {items.map((item) => (
      <li key={item} className="flex gap-4">
        <div className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-300" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const getJobFromSlug = (slug: string) => {
  const job = mockJobs.find((item) => generateSlug(item.title) === slug);
  return job || mockJobs[0];
};

const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
