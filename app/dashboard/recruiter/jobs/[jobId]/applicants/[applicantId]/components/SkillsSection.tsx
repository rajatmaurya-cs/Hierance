const SkillsSection = () => {
  return (
    <section
      className="
        w-1/2
        bg-white
        border border-neutral-200
        rounded-2xl
        shadow-sm
        p-6
      "
    >
      <h3 className="text-lg font-semibold text-neutral-900 mb-6">
        Skills & Expertise
      </h3>

      {/* Grid Layout Instead of Long Vertical Stack */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        <SkillGroup
          title="Frontend"
          skills={["React", "Next.js", "TypeScript", "Tailwind"]}
        />

        <SkillGroup
          title="Backend"
          skills={["Node.js", "Express", "Spring Boot"]}
        />

        <SkillGroup
          title="Database"
          skills={["MongoDB", "PostgreSQL", "MySQL"]}
        />

        <SkillGroup title="DevOps" skills={["Docker", "Kubernetes", "AWS"]} />
      </div>
    </section>
  );
};

export default SkillsSection;

const SkillGroup = ({ title, skills }: { title: string; skills: string[] }) => (
  <div>
    {/* Category Title */}
    <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
      {title}
    </h4>

    {/* Skills */}
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="
            text-xs
            px-3 py-1
            rounded-full
            bg-neutral-100
            text-neutral-700
            hover:bg-blue-50
            hover:text-blue-600
            transition
          "
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);
