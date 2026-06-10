"use client";

import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  skills: string[];
  startDate: string;
  endDate: string;
  github?: string;
  live?: string;
};

type Props = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: Props) {
  return (
    <section className="w-full bg-white border border-neutral-200 rounded-2xl p-8">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-neutral-900">Projects</h2>

        <p className="text-sm text-neutral-500 mt-1">
          Candidate personal and professional projects
        </p>
      </div>

      {/* Scroll Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 w-max">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
