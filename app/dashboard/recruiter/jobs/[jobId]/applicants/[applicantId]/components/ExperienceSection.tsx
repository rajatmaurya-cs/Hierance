const ExperienceSection = () => {
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
      {/* Section Heading */}
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Experience</h3>

      <div className="relative border-l border-neutral-200 ml-3 space-y-8">
        {/* ===== Experience 1 ===== */}
        <div className="relative pl-6">
          {/* Timeline Dot */}
          <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></span>

          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-base font-semibold text-slate-900">
                Senior Frontend Engineer
              </h4>
              <p className="text-sm text-slate-600">
                Google · San Francisco, USA
              </p>
            </div>

            <span className="text-xs text-slate-400 whitespace-nowrap">
              Jan 2021 – Present · 3 yrs 4 mos
            </span>
          </div>

          {/* Description */}
          <ul className="mt-3 text-sm text-slate-600 space-y-2">
            <li>
              • Led development of scalable UI architecture using React &
              TypeScript serving 1M+ users.
            </li>
            <li>
              • Reduced page load time by 32% through performance optimization.
            </li>
            <li>
              • Mentored 4 junior developers and improved team velocity by 18%.
            </li>
          </ul>

          {/* Key Skills */}
          <div className="mt-3 flex flex-wrap gap-2">
            {["React", "TypeScript", "Performance Optimization"].map(
              (skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>

        {/* ===== Experience 2 ===== */}
        <div className="relative pl-6">
          <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></span>

          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-base font-semibold text-slate-900">
                Frontend Developer
              </h4>
              <p className="text-sm text-slate-600">Startup XYZ · Remote</p>
            </div>

            <span className="text-xs text-slate-400 whitespace-nowrap">
              Jun 2019 – Dec 2020 · 1 yr 6 mos
            </span>
          </div>

          <ul className="mt-3 text-sm text-slate-600 space-y-2">
            <li>
              • Built responsive interfaces used by 50k+ monthly active users.
            </li>
            <li>
              • Integrated REST APIs and improved data fetching efficiency.
            </li>
            <li>• Collaborated closely with product & UX teams.</li>
          </ul>

          <div className="mt-3 flex flex-wrap gap-2">
            {["React", "REST APIs", "UI Development"].map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
