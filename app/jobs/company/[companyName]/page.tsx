"use client";

import { useParams } from "next/navigation";
import JobsBrowser from "@/shared/components/JobsBrowser/JobsBrowser";

export default function CompanyJobsPage() {
  const params = useParams();
  const companyName = params.companyName as string;
  
  return <JobsBrowser filterType="company" filterValue={decodeURIComponent(companyName)} />;
}
