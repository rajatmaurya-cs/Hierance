import { Building } from "lucide-react";

const ProfileCompany = () => {
  return (
    <div className="w-full bg-white border border-neutral-200 rounded-xl p-4 sm:p-6">
      {/* Section Heading */}
      <div className="flex items-start gap-3 mb-6">
        <Building className="w-6 h-6 text-neutral-700 mt-0.5" />
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 mb-1">
            Profile & Company Information
          </h2>
          <p className="text-sm text-neutral-500">
            Keep your recruiter and company details up to date to build trust
            with candidates.
          </p>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-5">
        {/* Recruiter Name */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Recruiter Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black text-neutral-700"
          />
        </div>

        {/* Designation */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Designation
          </label>
          <input
            type="text"
            placeholder="e.g. Senior Technical Recruiter"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black text-neutral-700"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Your company name"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black text-neutral-700"
          />
        </div>

        {/* Company Website */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Company Website
          </label>
          <input
            type="url"
            placeholder="https://company.com"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black text-neutral-700"
          />
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Industry
          </label>
          <select className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black text-neutral-700">
            <option value="">Select industry</option>
            <option>Technology</option>
            <option>Finance</option>
            <option>Healthcare</option>
            <option>Education</option>
            <option>Other</option>
          </select>
        </div>

        {/* Company Size */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Company Size
          </label>
          <input
            type="text"
            placeholder="e.g. 11–50 employees"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black text-neutral-700"
          />
        </div>

        {/* Office Location */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Office Location
          </label>
          <input
            type="text"
            placeholder="City, Country"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black text-neutral-700"
          />
        </div>

        {/* About Company */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            About Company
          </label>
          <textarea
            placeholder="Brief description of your company"
            rows={4}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black resize-none text-neutral-700"
          />
        </div>

        {/* Helper Text */}
        <p className="text-xs text-neutral-500">
          Your company details help candidates understand your brand and
          culture.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium cursor-pointer"
          >
            Save Changes
          </button>

          <button
            type="button"
            className="border border-neutral-300 text-neutral-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-neutral-50 cursor-pointer"
          >
            Preview Public Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileCompany;
