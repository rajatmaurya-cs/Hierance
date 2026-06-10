// --- Plan Type ---
export type PlanData = {
  id: string;
  name: string;
  price: string;
  type: string;
  users: number;
  color: string;
  newWeek: number;
  newMonth: number;
  discountPercent: number;
  discountFlat: string;
  icon: string;
  features: string[];
  segment: "CANDIDATE" | "RECRUITER";
};

// --- Initial Data ---
export const INITIAL_CANDIDATE_PLANS: PlanData[] = [
  {
    id: "candidate-basic",
    name: "Basic",
    price: "₹0",
    type: "Essential",
    users: 1240,
    color: "#3B82F6",
    newWeek: 45,
    newMonth: 180,
    discountPercent: 0,
    discountFlat: "₹0",
    icon: "🎯",
    segment: "CANDIDATE",
    features: [
      "Access to basic job listings",
      "Create & manage profile",
      "Apply to up to 5 jobs/day",
      "Email notifications for matches",
      "Community forum access",
    ],
  },
  {
    id: "candidate-pro",
    name: "Pro",
    price: "₹999",
    type: "Power User",
    users: 450,
    color: "#4F46E5",
    newWeek: 28,
    newMonth: 110,
    discountPercent: 15,
    discountFlat: "₹150",
    icon: "⚡",
    segment: "CANDIDATE",
    features: [
      "Unlimited job applications",
      "Priority profile visibility",
      "Resume builder with AI suggestions",
      "Advanced job filters & alerts",
      "Direct recruiter messaging",
    ],
  },
  {
    id: "candidate-elite",
    name: "Elite",
    price: "₹1,999",
    type: "Executive",
    users: 120,
    color: "#8B5CF6",
    newWeek: 12,
    newMonth: 45,
    discountPercent: 20,
    discountFlat: "₹400",
    icon: "👑",
    segment: "CANDIDATE",
    features: [
      "Everything in Pro tier",
      "Profile featured in top search results",
      "Dedicated career counselor",
      "Video interview preparation toolkit",
      "Exclusive executive job pipeline",
    ],
  },
];

export const INITIAL_RECRUITER_PLANS: PlanData[] = [
  {
    id: "recruiter-silver",
    name: "Silver",
    price: "₹12,499",
    type: "Agency Hub",
    users: 320,
    color: "#10B981",
    newWeek: 18,
    newMonth: 65,
    discountPercent: 10,
    discountFlat: "₹1,250",
    icon: "🏢",
    segment: "RECRUITER",
    features: [
      "Post up to 10 active job listings",
      "Access to candidate database",
      "Basic applicant tracking system",
      "Email support within 24 hours",
      "Company profile page",
    ],
  },
  {
    id: "recruiter-gold",
    name: "Gold",
    price: "₹24,999",
    type: "Enterprise Elite",
    users: 180,
    color: "#F59E0B",
    newWeek: 12,
    newMonth: 42,
    discountPercent: 18,
    discountFlat: "₹4,500",
    icon: "🌟",
    segment: "RECRUITER",
    features: [
      "Unlimited job postings",
      "AI-powered candidate matching",
      "Advanced analytics dashboard",
      "Bulk candidate outreach tools",
      "Priority customer support",
    ],
  },
  {
    id: "recruiter-platinum",
    name: "Platinum",
    price: "₹49,999",
    type: "MNC Specialist",
    users: 65,
    color: "#27BEF5",
    newWeek: 4,
    newMonth: 18,
    discountPercent: 25,
    discountFlat: "₹12,500",
    icon: "💎",
    segment: "RECRUITER",
    features: [
      "Everything in Gold tier",
      "Dedicated account manager",
      "Custom branded company portal",
      "API integration & webhooks",
      "White-glove onboarding & training",
    ],
  },
];

export const getStoredPlans = () => {
  if (typeof window === 'undefined') {
    return {
      candidatePlans: INITIAL_CANDIDATE_PLANS,
      recruiterPlans: INITIAL_RECRUITER_PLANS
    };
  }
  
  const savedCandidate = localStorage.getItem("candidate_plans");
  const savedRecruiter = localStorage.getItem("recruiter_plans");
  
  return {
    candidatePlans: savedCandidate ? JSON.parse(savedCandidate) : INITIAL_CANDIDATE_PLANS,
    recruiterPlans: savedRecruiter ? JSON.parse(savedRecruiter) : INITIAL_RECRUITER_PLANS
  };
};

export const saveStoredPlan = (plan: PlanData) => {
  if (typeof window === 'undefined') return;
  
  const { candidatePlans, recruiterPlans } = getStoredPlans();
  
  const isCandidate = plan.segment === "CANDIDATE" || plan.id.startsWith("candidate");
  
  if (isCandidate) {
    const updated = candidatePlans.map((p: PlanData) => p.id === plan.id ? plan : p);
    localStorage.setItem("candidate_plans", JSON.stringify(updated));
  } else {
    const updated = recruiterPlans.map((p: PlanData) => p.id === plan.id ? plan : p);
    localStorage.setItem("recruiter_plans", JSON.stringify(updated));
  }
};
