import { JOBS } from './jobsMockData';

// Helper to get correct domain for companies
const getCompanyDomain = (company: string) => {
  const overrides: Record<string, string> = {
    "J.P. Morgan": "jpmorgan.com",
    "Meta": "meta.com",
    "Salesforce": "salesforce.com",
    "Accenture": "accenture.com",
    "Stripe": "stripe.com",
    "Uber": "uber.com",
    "Airbnb": "airbnb.com",
    "Spotify": "spotify.com",
    "Netflix": "netflix.com",
    "Tesla": "tesla.com",
    "Shopify": "shopify.com",
    "Google": "google.com",
    "Amazon": "amazon.com",
    "Microsoft": "microsoft.com",
  };
  const name = company.toLowerCase().replace(/\s+/g, '');
  return overrides[company] || (name.includes('.') ? name : name + '.com');
};

// Map JOBS to mockJobs format expected by other components
export const mockJobs = JOBS.map((job) => {
  const domain = getCompanyDomain(job.company);
  const logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  
  return {
    ...job,
    companyLogo: logoUrl,
    companyName: job.company,
    companyId: job.company.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    postedAt: new Date(job.postedDate).toLocaleDateString(),
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  };
});

export interface Company {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviews: number;
  industry: string;
  location: string;
  employees: number;
  founded: number;
  companyType: string;
  openJobs: number;
  description: string;
  mission: string;
  vision: string;
  contact: { website: string; email: string };
  stats: { totalJobs: number; activeJobs: number; employees: string; rating: number };
  benefits: string[];
}

export const mockCompanies: Company[] = [
  {
    id: "shopify",
    name: "Shopify",
    logo: "https://www.google.com/s2/favicons?domain=shopify.com&sz=128",
    rating: 4.6,
    reviews: 1245,
    industry: "E-Commerce",
    location: "Ottawa, Canada",
    employees: 10000,
    founded: 2006,
    companyType: "Product",
    openJobs: 12,
    description: "Shopify is a leading global commerce company, providing trusted tools to start, grow, market, and manage a retail business of any size.",
    mission: "Making commerce better for everyone.",
    vision: "To build a global commerce operating system.",
    contact: { website: "shopify.com", email: "careers@shopify.com" },
    stats: { totalJobs: 120, activeJobs: 12, employees: "10k+", rating: 4.6 },
    benefits: ["Health Insurance", "Remote Work", "Gym Membership", "Stock Options"]
  },
  {
    id: "google",
    name: "Google",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    rating: 4.8,
    reviews: 5000,
    industry: "IT",
    location: "Bangalore, India",
    employees: 100000,
    founded: 1998,
    companyType: "Product",
    openJobs: 24,
    description: "Google's mission is to organize the world's information and make it universally accessible and useful.",
    mission: "To organize the world's information.",
    vision: "To provide access to the world's information in one click.",
    contact: { website: "google.com", email: "jobs@google.com" },
    stats: { totalJobs: 500, activeJobs: 24, employees: "100k+", rating: 4.8 },
    benefits: ["Free Meals", "Parental Leave", "Innovation Time Off", "Health Insurance"]
  },
  {
    id: "amazon",
    name: "Amazon",
    logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    rating: 4.5,
    reviews: 3890,
    industry: "E-Commerce",
    location: "Hyderabad, India",
    employees: 150000,
    founded: 1994,
    companyType: "Product",
    openJobs: 32,
    description: "Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking.",
    mission: "To be Earth's most customer-centric company.",
    vision: "To build a place where people can come to find and discover anything they might want to buy online.",
    contact: { website: "amazon.com", email: "recruiting@amazon.com" },
    stats: { totalJobs: 800, activeJobs: 32, employees: "150k+", rating: 4.5 },
    benefits: ["Relocation Assistance", "Employee Discounts", "Health Savings Account", "Retirement Plan"]
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    rating: 4.7,
    reviews: 4200,
    industry: "IT",
    location: "Redmond, WA",
    employees: 180000,
    founded: 1975,
    companyType: "Product",
    openJobs: 18,
    description: "Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge.",
    mission: "To empower every person and every organization on the planet to achieve more.",
    vision: "To help people and businesses throughout the world realize their full potential.",
    contact: { website: "microsoft.com", email: "jobs@microsoft.com" },
    stats: { totalJobs: 600, activeJobs: 18, employees: "180k+", rating: 4.7 },
    benefits: ["Health Insurance", "Paid Time Off", "401(k) Matching", "Tuition Reimbursement"]
  },
  {
    id: "netflix",
    name: "Netflix",
    logo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    rating: 4.4,
    reviews: 2100,
    industry: "Entertainment",
    location: "Los Gatos, CA",
    employees: 12000,
    founded: 1997,
    companyType: "Product",
    openJobs: 10,
    description: "Netflix is the world's leading streaming entertainment service.",
    mission: "To entertain the world.",
    vision: "Becoming the best global entertainment distribution service.",
    contact: { website: "netflix.com", email: "talent@netflix.com" },
    stats: { totalJobs: 100, activeJobs: 10, employees: "12k+", rating: 4.4 },
    benefits: ["Flexible Work", "Unlimited PTO", "Health Benefits", "Competitive Salary"]
  },
  {
    id: "j.p.-morgan",
    name: "J.P. Morgan",
    logo: "https://www.google.com/s2/favicons?domain=jpmorgan.com&sz=128",
    rating: 4.1,
    reviews: 3500,
    industry: "Banking",
    location: "New York, NY",
    employees: 250000,
    founded: 1799,
    companyType: "Service",
    openJobs: 45,
    description: "J.P. Morgan is a leader in financial services, offering solutions to clients in more than 100 countries.",
    mission: "To be the best financial services company in the world.",
    vision: "Enabling economic growth and financial opportunity.",
    contact: { website: "jpmorgan.com", email: "careers@jpmorgan.com" },
    stats: { totalJobs: 1200, activeJobs: 45, employees: "250k+", rating: 4.1 },
    benefits: ["Retirement Plan", "Health Care", "Life Insurance", "Tuition Assistance"]
  },
  {
    id: "stripe",
    name: "Stripe",
    logo: "https://www.google.com/s2/favicons?domain=stripe.com&sz=128",
    rating: 4.9,
    reviews: 1800,
    industry: "Fintech",
    location: "San Francisco, CA",
    employees: 8000,
    founded: 2010,
    companyType: "Product",
    openJobs: 15,
    description: "Stripe is a financial infrastructure platform for businesses.",
    mission: "To increase the GDP of the internet.",
    vision: "Building the economic infrastructure for the internet.",
    contact: { website: "stripe.com", email: "jobs@stripe.com" },
    stats: { totalJobs: 300, activeJobs: 15, employees: "8k+", rating: 4.9 },
    benefits: ["Health Coverage", "Remote First", "Learning Budget", "Paid Sabbaticals"]
  },
  {
    id: "meta",
    name: "Meta",
    logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    rating: 4.3,
    reviews: 8000,
    industry: "Social Media",
    location: "Menlo Park, CA",
    employees: 70000,
    founded: 2004,
    companyType: "Product",
    openJobs: 20,
    description: "Meta builds technologies that help people connect, find communities, and grow businesses.",
    mission: "To give people the power to build community and bring the world closer together.",
    vision: "To help build the metaverse.",
    contact: { website: "meta.com", email: "recruiting@meta.com" },
    stats: { totalJobs: 1500, activeJobs: 20, employees: "70k+", rating: 4.3 },
    benefits: ["Wellness Center", "Meal Allowances", "Commuter Benefits", "Family Planning"]
  },
  {
    id: "tesla",
    name: "Tesla",
    logo: "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
    rating: 4.2,
    reviews: 5000,
    industry: "Automotive",
    location: "Austin, TX",
    employees: 120000,
    founded: 2003,
    companyType: "Product",
    openJobs: 12,
    description: "Tesla's mission is to accelerate the world's transition to sustainable energy.",
    mission: "To accelerate the world's transition to sustainable energy.",
    vision: "To create the most compelling car company of the 21st century.",
    contact: { website: "tesla.com", email: "talent@tesla.com" },
    stats: { totalJobs: 900, activeJobs: 12, employees: "120k+", rating: 4.2 },
    benefits: ["Stock Options", "Employee Discounts", "Health Care", "Relocation Support"]
  },
  {
    id: "salesforce",
    name: "Salesforce",
    logo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    rating: 4.6,
    reviews: 4500,
    industry: "Cloud Computing",
    location: "San Francisco, CA",
    employees: 75000,
    founded: 1999,
    companyType: "Product",
    openJobs: 25,
    description: "Salesforce is the world's #1 customer relationship management (CRM) platform.",
    mission: "To help our customers connect with their customers in a whole new way.",
    vision: "The Customer Success Platform.",
    contact: { website: "salesforce.com", email: "careers@salesforce.com" },
    stats: { totalJobs: 1000, activeJobs: 25, employees: "75k+", rating: 4.6 },
    benefits: ["Volunteer Time Off", "Health & Wellness", "Education Reimbursement", "Parental Leave"]
  },
  {
    id: "accenture",
    name: "Accenture",
    logo: "https://www.google.com/s2/favicons?domain=accenture.com&sz=128",
    rating: 4.0,
    reviews: 12000,
    industry: "Consulting",
    location: "Dublin, Ireland",
    employees: 700000,
    founded: 1989,
    companyType: "Service",
    openJobs: 50,
    description: "Accenture is a global professional services company with leading capabilities in digital, cloud, and security.",
    mission: "To deliver on the promise of technology and human ingenuity.",
    vision: "Helping clients create their future.",
    contact: { website: "accenture.com", email: "jobs@accenture.com" },
    stats: { totalJobs: 5000, activeJobs: 50, employees: "700k+", rating: 4.0 },
    benefits: ["Global Mobility", "Professional Training", "Employee Stock Purchase", "Health Benefits"]
  },
  {
    id: "uber",
    name: "Uber",
    logo: "https://www.google.com/s2/favicons?domain=uber.com&sz=128",
    rating: 4.2,
    reviews: 3000,
    industry: "Transportation",
    location: "San Francisco, CA",
    employees: 30000,
    founded: 2009,
    companyType: "Product",
    openJobs: 15,
    description: "Uber's mission is to ignite opportunity by setting the world in motion.",
    mission: "To ignite opportunity by setting the world in motion.",
    vision: "Smarter mobility with less consumption.",
    contact: { website: "uber.com", email: "talent@uber.com" },
    stats: { totalJobs: 400, activeJobs: 15, employees: "30k+", rating: 4.2 },
    benefits: ["Uber Credits", "Health Care", "Flexible Schedules", "Relocation Assistance"]
  },
  {
    id: "airbnb",
    name: "Airbnb",
    logo: "https://www.google.com/s2/favicons?domain=airbnb.com&sz=128",
    rating: 4.7,
    reviews: 2500,
    industry: "Hospitality",
    location: "San Francisco, CA",
    employees: 6000,
    founded: 2008,
    companyType: "Product",
    openJobs: 8,
    description: "Airbnb's mission is to create a world where anyone can belong anywhere.",
    mission: "To create a world where anyone can belong anywhere.",
    vision: "Belong anywhere.",
    contact: { website: "airbnb.com", email: "careers@airbnb.com" },
    stats: { totalJobs: 200, activeJobs: 8, employees: "6k+", rating: 4.7 },
    benefits: ["Travel Credits", "Health Insurance", "Paid Parental Leave", "Annual Learning Fund"]
  },
  {
    id: "spotify",
    name: "Spotify",
    logo: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
    rating: 4.5,
    reviews: 2800,
    industry: "Music Streaming",
    location: "Stockholm, Sweden",
    employees: 9000,
    founded: 2006,
    companyType: "Product",
    openJobs: 12,
    description: "Spotify's mission is to unlock the potential of human creativity.",
    mission: "To unlock the potential of human creativity.",
    vision: "To be the world's most popular audio platform.",
    contact: { website: "spotify.com", email: "jobs@spotify.com" },
    stats: { totalJobs: 350, activeJobs: 12, employees: "9k+", rating: 4.5 },
    benefits: ["Work from Anywhere", "Subscription Credit", "Health & Dental", "Parental Leave"]
  },
];

export const mockCandidates = [
  {
    _id: "456",
    username: "456",
    fullName: "Rajat Maurya",
    email: "rajat@example.com",
    phone: "+91 9876543210",
    avatar: "/avatars/rajat.png",
    headline: "Senior Frontend Engineer | React & Next.js",
    summary: "Passionate software engineer with over 5 years of experience in building scalable web applications. Expert in React, Next.js, and modern JavaScript.",
    location: "Remote, India",
    skills: [
      { id: "s1", name: "React.js" },
      { id: "s2", name: "Next.js" },
      { id: "s3", name: "TypeScript" },
      { id: "s4", name: "Tailwind CSS" }
    ],
    experience: [
      { id: 1, title: "Senior Frontend Engineer", company: "Hierance" }
    ],
    education: [
      { id: 1, degree: "B.Tech in Computer Science", institution: "IIT", location: "India", startDate: "2016", endDate: "2020", percentage: "8.5 CGPA" }
    ],
    personalDetails: {
      gender: "Male",
      dob: "1998-01-01",
      maritalStatus: "Single",
      nationality: "Indian",
      city: "Bangalore",
      state: "Karnataka"
    },
    languages: [
      { id: 1, name: "English", read: true, write: true, speak: true }
    ],
    projects: [],
    resume: null,
  },
  {
    _id: "rajat",
    username: "rajat",
    fullName: "Rajat Maurya",
    email: "rajat@example.com",
    phone: "+91 9876543210",
    avatar: "/avatars/rajat.png",
    headline: "Senior Frontend Engineer | React & Next.js",
    summary: "Passionate software engineer with over 5 years of experience in building scalable web applications. Expert in React, Next.js, and modern JavaScript.",
    location: "Remote, India",
    skills: [
      { id: "s1", name: "React.js" },
      { id: "s2", name: "Next.js" },
      { id: "s3", name: "TypeScript" },
      { id: "s4", name: "Tailwind CSS" }
    ],
    experience: [],
    education: [],
    personalDetails: {
      gender: "Male",
      dob: "1998-01-01",
      maritalStatus: "Single",
      nationality: "Indian",
      city: "Bangalore",
      state: "Karnataka"
    },
    languages: [],
    projects: [],
    resume: null,
  }
];
