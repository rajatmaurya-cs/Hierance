import ProfileHeader from "./components/ProfileHeader";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ApplicationsSection from "./components/ApplicationsSection";

import { mockCandidate } from "./mockData";

export default function Page() {
  return (
    <div className="space-y-8 p-6">
      <ProfileHeader {...mockCandidate.profile} />

      <ProjectsSection projects={mockCandidate.projects} />

      <ExperienceSection experiences={mockCandidate.experiences} />

      <ApplicationsSection applications={mockCandidate.applications} />
    </div>
  );
}
