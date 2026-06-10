const ApplicantAboutSection = () => {
  return (
    <section
      className="
        w-full
        bg-white
        border border-neutral-200
        rounded-xl
        shadow-sm
        p-6
        space-y-4
      "
    >
      <h2 className="text-lg font-semibold text-neutral-900">
        Professional Summary
      </h2>

      <p className="text-sm text-neutral-700 leading-relaxed">
        Passionate Full-Stack Engineer with 4+ years of experience building
        scalable web applications. Strong background in React, Next.js, and
        backend architecture using Node.js and Spring Boot. Experienced in
        designing system architecture, implementing CI/CD pipelines, and
        delivering high-performance solutions.
      </p>

      <p className="text-sm text-neutral-700 leading-relaxed">
        Adept at collaborating with cross-functional teams and mentoring junior
        developers. Always eager to learn new technologies and improve system
        efficiency.
      </p>
    </section>
  );
};

export default ApplicantAboutSection;
