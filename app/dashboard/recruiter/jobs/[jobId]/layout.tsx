import JobHeader from "./components/JobHeader";
import Stepper from "./components/Stepper";

export default async function JobLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;

  return (
    <section className="w-full px-4 py-4 space-y-6">
      <JobHeader jobId={jobId} />
      <Stepper jobId={jobId} />
      {children}
    </section>
  );
}
