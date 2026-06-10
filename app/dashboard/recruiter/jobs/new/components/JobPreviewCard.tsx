import { JobData } from "../types";

interface Props {
  data: JobData;
}

export default function JobPreviewCard({ data }: Props) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <div className="flex gap-4">
        <div className="w-14 h-14 bg-gray-200 rounded-md" />
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {data.jobType || "Job Title"}
          </h2>
          <p className="text-gray-600">{data.companyName || "Company Name"}</p>
          <p className="text-sm text-gray-500">
            {data.jobLocation || "Location"} • {data.experience || "Experience"}
          </p>
        </div>
      </div>
    </div>
  );
}
