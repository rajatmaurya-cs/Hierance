"use client";

type Skill = {
  name: string;
  users: number;
  color: string;
};

const skills: Skill[] = [
  { name: "React Developers", users: 2400, color: "bg-blue-500" },
  { name: "Backend Developers", users: 1800, color: "bg-purple-500" },
  { name: "AI / ML", users: 950, color: "bg-emerald-500" },
  { name: "DevOps", users: 620, color: "bg-orange-500" },
  { name: "Data Science", users: 740, color: "bg-indigo-500" },
];

const totalUsers = skills.reduce((acc, skill) => acc + skill.users, 0);

export default function SkillDistributionTable() {
  return (
    <section className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col gap-6 h-full">
      {/* header */}
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">
          Skill Distribution
        </h3>
        <p className="text-sm text-neutral-500">
          Most common skills among job seekers
        </p>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-neutral-500 border-b border-neutral-200">
              <th className="pb-3 font-medium">Rank</th>
              <th className="pb-3 font-medium">Skill</th>
              <th className="pb-3 font-medium">Developers</th>
              <th className="pb-3 font-medium">Distribution</th>
            </tr>
          </thead>

          <tbody>
            {skills.map((skill, index) => {
              const percentage = Math.round((skill.users / totalUsers) * 100);

              return (
                <tr
                  key={skill.name}
                  className="border-b border-neutral-100 hover:bg-neutral-50 transition"
                >
                  {/* rank */}
                  <td className="py-4 font-semibold text-neutral-700">
                    #{index + 1}
                  </td>

                  {/* skill name */}
                  <td className="py-4 font-medium text-neutral-900">
                    {skill.name}
                  </td>

                  {/* count */}
                  <td className="py-4 text-neutral-600">
                    {skill.users.toLocaleString()}
                  </td>

                  {/* progress */}
                  <td className="py-4 w-[40%]">
                    <div className="flex items-center gap-3">
                      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>

                      <span className="text-xs text-neutral-600 w-[40px]">
                        {percentage}%
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
