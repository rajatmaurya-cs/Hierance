"use client";

type Skill = {
  name: string;
  users: number;
};

const skills: Skill[] = [
  { name: "React", users: 2400 },
  { name: "Next.js", users: 1800 },
  { name: "Node.js", users: 1500 },
  { name: "Python", users: 1300 },
  { name: "Docker", users: 900 },
  { name: "AWS", users: 850 },
  { name: "TypeScript", users: 1700 },
];

const getSize = (users: number) => {
  if (users > 2000) return "text-lg px-5 py-2";
  if (users > 1500) return "text-base px-4 py-2";
  if (users > 1000) return "text-sm px-3 py-1.5";
  return "text-xs px-3 py-1";
};

export default function TopSkillsCloud() {
  return (
    <section className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col gap-6 h-full">
      {/* header */}
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Top Skills</h3>
        <p className="text-sm text-neutral-500">
          Most popular skills among job seekers
        </p>
      </div>

      {/* skill cloud */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`rounded-full font-medium transition-all duration-200 cursor-pointer 
            bg-gradient-to-r from-blue-50 to-indigo-50 
            text-blue-700 border border-blue-100
            hover:scale-105 hover:shadow-sm
            ${getSize(skill.users)}`}
          >
            {skill.name}
            <span className="ml-2 text-xs text-neutral-500">{skill.users}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
