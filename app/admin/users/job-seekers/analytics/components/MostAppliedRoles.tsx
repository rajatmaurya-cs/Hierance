"use client";

type Role = {
  role: string;
  applications: number;
  growth: number;
  salary: string;
  experience: string;
  location: string;
  share: number;
};

const roles: Role[] = [
  {
    role: "Frontend Developer",
    applications: 3200,
    growth: 12,
    salary: "₹12–18 LPA",
    experience: "1-3 yrs",
    location: "India",
    share: 32,
  },
  {
    role: "Backend Developer",
    applications: 2800,
    growth: 9,
    salary: "₹14–20 LPA",
    experience: "2-4 yrs",
    location: "USA",
    share: 28,
  },
  {
    role: "Full Stack Developer",
    applications: 2500,
    growth: 15,
    salary: "₹16–24 LPA",
    experience: "2-5 yrs",
    location: "Remote",
    share: 25,
  },
  {
    role: "AI Engineer",
    applications: 1100,
    growth: 22,
    salary: "₹18–30 LPA",
    experience: "3-6 yrs",
    location: "Germany",
    share: 11,
  },
  {
    role: "DevOps Engineer",
    applications: 900,
    growth: 10,
    salary: "₹15–22 LPA",
    experience: "2-5 yrs",
    location: "UK",
    share: 9,
  },
];

export default function MostAppliedRolesTable() {
  return (
    <section className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm flex flex-col gap-6">
      {/* header */}
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">
          Most Applied Roles
        </h3>
        <p className="text-sm text-neutral-500">
          Roles receiving the highest number of job applications
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          {/* table header */}
          <thead>
            <tr className="text-left text-neutral-500 border-b border-neutral-200">
              <th className="pb-3 font-medium">Rank</th>
              <th className="pb-3 font-medium">Role</th>
              <th className="pb-3 font-medium">Applications</th>
              <th className="pb-3 font-medium">Growth</th>
              <th className="pb-3 font-medium">Avg Salary</th>
              <th className="pb-3 font-medium">Experience</th>
              <th className="pb-3 font-medium">Top Location</th>
              <th className="pb-3 font-medium">Share</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody>
            {roles.map((role, index) => (
              <tr
                key={role.role}
                className="border-b border-neutral-100 hover:bg-neutral-50 transition"
              >
                {/* rank */}
                <td className="py-4 font-semibold text-neutral-700">
                  #{index + 1}
                </td>

                {/* role */}
                <td className="py-4 font-medium text-neutral-900">
                  {role.role}
                </td>

                {/* applications */}
                <td className="py-4 text-neutral-600">
                  {role.applications.toLocaleString()}
                </td>

                {/* growth */}
                <td className="py-4">
                  <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-xs font-semibold">
                    +{role.growth}%
                  </span>
                </td>

                {/* salary */}
                <td className="py-4 text-neutral-600">{role.salary}</td>

                {/* experience */}
                <td className="py-4 text-neutral-600">{role.experience}</td>

                {/* location */}
                <td className="py-4 text-neutral-600">{role.location}</td>

                {/* share */}
                <td className="py-4 w-[150px]">
                  <div className="flex items-center gap-3">
                    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${role.share}%` }}
                      />
                    </div>

                    <span className="text-xs text-neutral-600 w-[35px]">
                      {role.share}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
