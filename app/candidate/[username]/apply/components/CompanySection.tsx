"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { IoGlobeOutline } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";

import { mockCompanies, mockJobs } from "@/shared/data/mockData";

const CompanyInfo = () => {
  const params = useParams();
  const username = params.username as string;
  const slug = params.slug as string;
  const job = getJobFromSlug(slug);
  const company = mockCompanies.find((item) => item.id === job.companyId);

  const safeUsername = username === "undefined" ? "rajat" : username;
  const companyUrl = `/candidate/${safeUsername}/companies/${job.companyId}`;

  return (
    <section className="bg-transparent">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-6">
          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-3xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-slate-100/50">
            <img
              src={job.companyLogo}
              alt={job.companyName}
              className="h-10 w-10 object-contain"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              {job.companyName}
            </h2>
            <p className="mt-1 text-[15px] font-medium text-slate-400">
              {company?.industry || "Technology"} · {(company as any)?.contact?.website || "Company website"}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {((company as any)?.benefits?.slice(0, 3) || job.perks || []).map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-lg bg-slate-100/50 px-3 py-1 text-[12px] font-medium text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Link 
          href={companyUrl}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-[14px] font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm"
        >
          View Profile
        </Link>
      </div>

      <div className="mt-10 max-w-4xl">
        <p className="text-[16px] leading-[1.8] text-slate-500 font-normal">
          {company?.description ||
            `${job.companyName} builds thoughtful products and teams across modern technology markets.`}
        </p>
      </div>
    </section>
  );
};

export default CompanyInfo;

const getJobFromSlug = (slug: string) => {
  const job = mockJobs.find((item) => generateSlug(item.title) === slug);
  return job || mockJobs[0];
};

const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
