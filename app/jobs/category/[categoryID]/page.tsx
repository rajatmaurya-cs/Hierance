"use client";

import { useParams } from "next/navigation";
import JobsBrowser from "@/shared/components/JobsBrowser/JobsBrowser";

export default function CategoryJobsPage() {
  const params = useParams();
  const categoryID = params.categoryID as string;
  
  return <JobsBrowser filterType="category" filterValue={categoryID} />;
}
