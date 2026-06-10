import SubscriptionCard from "@/shared/components/ui/SubscriptionCard";
import SubscriptionTabs from "../components/SubscriptionTabs";

const UpgradePlan = () => {
  return (
    <section className="w-full">
      <SubscriptionTabs />
      <div>
        <h1 className="text-3xl font-semibold text-slate-900 mt-5">Upgrade Plan</h1>
        <p className="text-slate-600 text-sm mt-2 max-w-2xl">
          Upgrade or change your subscription to unlock higher limits, more
          features, and better hiring flexibility.
        </p>
      </div>
      <div className="flex justify-between gap-4 mt-5">
        <SubscriptionCard
          title="Starter"
          subtitle="Start exploring your career path"
          price={"Free"}
          duration="month"
          features={[
            "Career interest discovery (basic quiz)",
            "1 domain suggestion (based on answers)",
            "Basic roadmap (high-level)",
            "Free resources (articles, YouTube, blogs)",
            "Resume template (download only)",
            "Community access (read-only)",
            "Internship & job listings (view only)",
          ]}
          limitations={[
            "Career interest discovery (basic quiz)",
            "1 domain suggestion (based on answers)",
            "Basic roadmap (high-level)",
            "Free resources (articles, YouTube, blogs)",
          ]}
          cta1="Get Started"
          theme={true}
        />

        <SubscriptionCard
          title="Explorer"
          subtitle="Get clarity, direction & confidence"
          price={399}
          duration="month"
          isPreviousFeatures="Everything in Starter, and:"
          features={[
            "Personalized domain recommendation (Top 2 domains)",
            "Custom learning roadmap (step-by-step)",
            "Best courses list (free + paid, no selling bias)",
            "Resume feedback (AI + checklist)",
            "Monthly career guidance session (group)",
            "Curated beginner projects (domain-specific)",
            "Internship alerts (filtered)",
          ]}
          cta1="Buy Now"
          cta2="Contact Sales"
          theme={true}
        />

        <SubscriptionCard
          title="Accelerator"
          subtitle="Build skills, projects & real outcomes"
          price={"1,999"}
          duration="month"
          isPreviousFeatures="Everything in Explorer, and:"
          features={[
            "1:1 career mentorship (monthly call)",
            "Deep domain evaluation & switching guidance",
            "Advanced roadmap (skills + timeline)",
            "Project-based learning (real-world tasks)",
            "Resume + LinkedIn profile optimization",
            "Bi-weekly doubt & quiz sessions",
            "Mock interviews (HR + basic tech)",
            "Internship application guidance",
            "Priority support",
          ]}
          featured="Popular"
          cta1="Contact Us"
          theme={true}
        />
      </div>
    </section>
  );
};

export default UpgradePlan;
