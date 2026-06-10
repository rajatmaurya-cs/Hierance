const ProjectsSection = () => {
  return (
    <section
      className="
        w-full
        rounded-2xl
        border border-neutral-200
        bg-white
        p-6
      "
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Projects</h3>

      <div className="space-y-6">
        {/* ===== Project 1 ===== */}
        <div className="border border-neutral-200 rounded-xl p-5 hover:shadow-sm transition">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-base font-semibold text-slate-900">
                Hireance Job Portal
              </h4>
              <p className="text-sm text-slate-500">
                Full-stack recruitment platform
              </p>
            </div>

            <span className="text-xs text-slate-400">2023</span>
          </div>

          {/* Tech Stack */}
          <div className="mt-3 flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Tailwind", "Node.js"].map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="mt-4 text-sm text-slate-600 space-y-2">
            <p>
              • Designed recruiter and candidate dashboards with role-based
              access.
            </p>
            <p>• Built job posting, applicant tracking and filtering system.</p>
            <p>• Optimized backend queries reducing response time by 40%.</p>
          </div>

          <a
            href="#"
            className="inline-block mt-4 text-sm text-blue-600 font-medium hover:underline"
          >
            View Live Project →
          </a>
        </div>

        {/* ===== Project 2 ===== */}
        <div className="border border-neutral-200 rounded-xl p-5 hover:shadow-sm transition">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-base font-semibold text-slate-900">
                Analytics Dashboard
              </h4>
              <p className="text-sm text-slate-500">
                Real-time data visualization platform
              </p>
            </div>

            <span className="text-xs text-slate-400">2022</span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {["React", "D3.js", "REST APIs"].map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4 text-sm text-slate-600 space-y-2">
            <p>• Built interactive dashboards handling 100k+ data points.</p>
            <p>• Integrated multiple third-party APIs for live reporting.</p>
            <p>• Improved user retention by 25% with UX enhancements.</p>
          </div>

          <a
            href="#"
            className="inline-block mt-4 text-sm text-blue-600 font-medium hover:underline"
          >
            View Case Study →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
