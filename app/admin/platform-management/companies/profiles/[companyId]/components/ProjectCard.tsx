"use client";

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  skills: string[];
  startDate: string;
  endDate: string;
  github?: string;
  live?: string;
};

export default function ProjectCard({
  title,
  description,
  skills,
  startDate,
  endDate,
  github,
  live,
}: Project) {
  return (
    <div className="min-w-[340px] bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-neutral-900 text-lg">{title}</h3>

        <div className="flex gap-3 text-neutral-500">
          {github && (
            <a
              href={github}
              target="_blank"
              className="hover:text-black transition"
            >
              <FiGithub size={18} />
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Dates */}
      <div className="flex items-center gap-2 text-sm text-neutral-500 mt-2">
        <FaRegCalendarAlt />
        {startDate} — {endDate}
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-600 mt-4 leading-relaxed">
        {description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="text-xs px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
