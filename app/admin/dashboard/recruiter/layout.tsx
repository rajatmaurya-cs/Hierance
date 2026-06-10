"use client";

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      {/* recruiter dashboard container */}
      <div className="max-w-[1500px] mx-auto px-4 flex flex-col gap-8">
        {children}
      </div>
    </section>
  );
}
