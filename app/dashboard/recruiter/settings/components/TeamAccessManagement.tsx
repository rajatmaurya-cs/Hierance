import { UserCog } from "lucide-react";

const TeamAccessManagement = () => {
  return (
    <div className="w-full bg-white border border-neutral-200 rounded-xl p-4 sm:p-6 mt-6">
      {/* Section Heading */}
      <div className="flex items-start gap-3 mb-6">
        <UserCog className="w-6 h-6 text-neutral-700 mt-0.5" />
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 mb-1">
            Team & Access Management
          </h2>
          <p className="text-sm text-neutral-500">
            Invite team members and control what they can access.
          </p>
        </div>
      </div>

      {/* Team Members Table */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-neutral-800 mb-3">
          Team Members
        </h3>

        <div className="overflow-hidden rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 text-neutral-500">
              <tr>
                <th className="text-left px-4 py-2 font-medium">Name</th>
                <th className="text-left px-4 py-2 font-medium">Role</th>
                <th className="text-left px-4 py-2 font-medium">Status</th>
              </tr>
            </thead>

            <tbody className="text-neutral-700">
              <tr className="border-t">
                <td className="px-4 py-3">Rajat Sen</td>
                <td className="px-4 py-3">Admin</td>
                <td className="px-4 py-3 text-green-600">Active</td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-3">Ankit Sharma</td>
                <td className="px-4 py-3">Recruiter</td>
                <td className="px-4 py-3 text-green-600">Active</td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-3">Priya Mehta</td>
                <td className="px-4 py-3">Viewer</td>
                <td className="px-4 py-3 text-yellow-600">Invited</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Roles Description */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-neutral-800 mb-2">Roles</h3>

        <ul className="space-y-2 text-sm text-neutral-600">
          <li>
            <span className="font-medium text-neutral-800">Admin</span> — Full
            access
          </li>
          <li>
            <span className="font-medium text-neutral-800">Recruiter</span> —
            Hiring access
          </li>
          <li>
            <span className="font-medium text-neutral-800">Viewer</span> —
            Read-only
          </li>
        </ul>
      </div>

      {/* Helper Text */}
      <p className="text-xs text-neutral-500 mb-6">
        You can control who can post jobs, view candidates, and manage billing.
      </p>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium cursor-pointer"
        >
          Invite Team Member
        </button>

        <button
          type="button"
          className="border border-neutral-300 text-neutral-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-neutral-50 cursor-pointer"
        >
          Manage Roles
        </button>
      </div>
    </div>
  );
};
export default TeamAccessManagement;
