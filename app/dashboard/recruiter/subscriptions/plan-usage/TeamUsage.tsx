const TeamUsage = () => {
  return (
    <section className="bg-neutral-100 rounded-xl shadow-sm p-6 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-base font-semibold text-slate-900">Team usage</h3>
          <p className="text-sm text-slate-600">
            Usage breakdown by team members
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-slate-700 hover:underline">
            Share access
          </button>
          <button className="px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
            Add member
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-xs text-slate-500 border-b">
              <th className="py-3 text-left">Member ID</th>
              <th className="py-3 text-left">Name</th>
              <th className="py-3 text-left">Role</th>
              <th className="py-3 text-left">Organization</th>
              <th className="py-3 text-left">Usage</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="text-slate-700">
            <tr className="border-b last:border-none">
              <td className="py-3 font-mono text-slate-700">#MBR-001</td>
              <td className="py-3">Rajat</td>
              <td className="py-3">Recruiter</td>
              <td className="py-3">Hireance</td>
              <td className="py-3">10 credits</td>
              <td className="py-3">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  Active
                </span>
              </td>
              <td className="py-3 text-right">
                <button className="text-sm text-red-600 hover:underline">
                  Remove
                </button>
              </td>
            </tr>

            <tr>
              <td className="py-3 font-mono text-slate-700">#MBR-002</td>
              <td className="py-3">Ankit</td>
              <td className="py-3">Hiring Manager</td>
              <td className="py-3">Hireance</td>
              <td className="py-3">6 credits</td>
              <td className="py-3">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  Active
                </span>
              </td>
              <td className="py-3 text-right">
                <button className="text-sm text-red-600 hover:underline">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TeamUsage;
