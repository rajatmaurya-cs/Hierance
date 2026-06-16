"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Bookmark, MapPin, Briefcase, Clock, DollarSign } from "lucide-react";
import { useState } from "react";

interface JobCardProps {
  title: string;
  companyName: string;
  companyLogo: string;
  location: string;
  salary: string;
  experience?: string;
  tags?: string[];
  postedAt: string;
  jobType?: string;
}

const JobCard = ({
  title,
  companyName,
  companyLogo,
  location,
  salary,
  experience,
  tags = [],
  postedAt,
  jobType = "Full-Time",
}: JobCardProps) => {
  const params = useParams();
  const username = params.username as string;
  const [saved, setSaved] = useState(false);
  const [imgError, setImgError] = useState(false);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleApply = () => {
    const slug = generateSlug(title);
    const url = `/candidate/${username}/apply/${slug}`;
    window.open(url, "_blank");
  };

  return (
    <div className="group bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex items-center gap-4">
      {/* Company Logo */}
      <div className="w-11 h-11 rounded-lg bg-slate-50 border border-slate-100 p-1.5 flex items-center justify-center flex-shrink-0 overflow-hidden">
        {!imgError ? (
          <img
            src={companyLogo}
            alt={companyName}
            className="w-8 h-8 object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold text-sm rounded">
            {companyName.charAt(0)}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[15px] font-semibold text-slate-800 truncate group-hover:text-blue-600 transition font-primary">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-semibold uppercase tracking-wide font-primary">
              {jobType}
            </span>
            <button
              onClick={() => setSaved(!saved)}
              className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Bookmark
                size={15}
                className={saved ? "fill-blue-600 text-blue-600" : "text-slate-400"}
              />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs text-slate-500 font-primary">
          <span className="flex items-center gap-1">
            <Briefcase size={12} className="text-slate-400" />
            {companyName}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} className="text-slate-400" />
            {location}
          </span>
          <span className="flex items-center gap-1">
            <DollarSign size={12} className="text-slate-400" />
            {salary}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} className="text-slate-400" />
            {postedAt}
          </span>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tags.slice(0, 4).map((tag, index) => (
              <span
                key={index}
                className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Button */}
      <button
        onClick={handleApply}
        className="flex-shrink-0 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition font-primary"
      >
        Apply
      </button>
    </div>
  );
};

export default JobCard;