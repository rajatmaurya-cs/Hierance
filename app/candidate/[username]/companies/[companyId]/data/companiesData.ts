export interface Job {
  id: string;
  title: string;
  location: string;
  salary: string;
  experience: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  size: string;
  founded: number;
  description: string;
  benefits: string[];
  jobs: Job[];
  email: string;
  website: string;
}

export const companies: Company[] = [
  {
    id: "shopify",
    name: "Shopify",
    logo: "/logos/shopify.png",
    industry: "E-Commerce",
    location: "Ottawa, Canada",
    size: "10000+ Employees",
    founded: 2006,
    description:
      "Shopify is a leading commerce platform that enables businesses of all sizes to build, grow, and manage their online stores globally.",
    benefits: [
      "Remote Work",
      "Health Insurance",
      "Learning Budget",
      "Stock Options",
      "Flexible Work Hours",
    ],
    email: "hr@shopify.com",
    website: "https://shopify.com",
    jobs: [
      {
        id: "1",
        title: "Frontend Engineer",
        location: "Remote",
        salary: "15-22 LPA",
        experience: "2-4 Years",
      },
      {
        id: "2",
        title: "Backend Developer",
        location: "Canada",
        salary: "18-25 LPA",
        experience: "3-5 Years",
      },
    ],
  },

  {
    id: "google",
    name: "Google",
    logo: "/logos/google.png",
    industry: "Technology",
    location: "Bangalore, India",
    size: "100000+ Employees",
    founded: 1998,
    description:
      "Google is a multinational technology company specializing in search engines, cloud computing, advertising technologies, and AI-driven solutions.",
    benefits: [
      "Health Insurance",
      "Remote Work",
      "Paid Leaves",
      "Stock Options",
      "Learning Budget",
    ],
    email: "hr@google.com",
    website: "https://google.com",
    jobs: [
      {
        id: "1",
        title: "Frontend Developer",
        location: "Bangalore",
        salary: "12-18 LPA",
        experience: "2-4 Years",
      },
      {
        id: "2",
        title: "Backend Engineer",
        location: "Hyderabad",
        salary: "15-22 LPA",
        experience: "3-5 Years",
      },
    ],
  },

  {
    id: "amazon",
    name: "Amazon",
    logo: "/logos/amazon.png",
    industry: "E-Commerce",
    location: "Hyderabad, India",
    size: "150000+ Employees",
    founded: 1994,
    description:
      "Amazon is a global e-commerce and cloud computing giant focused on customer-centric innovation and large-scale logistics systems.",
    benefits: [
      "Performance Bonus",
      "Health Insurance",
      "Work From Home",
      "Employee Discounts",
    ],
    email: "hr@amazon.com",
    website: "https://amazon.com",
    jobs: [
      {
        id: "1",
        title: "SDE 1",
        location: "Hyderabad",
        salary: "10-15 LPA",
        experience: "1-3 Years",
      },
      {
        id: "2",
        title: "Cloud Support Engineer",
        location: "Bangalore",
        salary: "12-18 LPA",
        experience: "2-4 Years",
      },
    ],
  },

  {
    id: "microsoft",
    name: "Microsoft",
    logo: "/logos/microsoft.png",
    industry: "Technology",
    location: "Noida, India",
    size: "180000+ Employees",
    founded: 1975,
    description:
      "Microsoft is a global technology company known for software, cloud services, AI research, and enterprise solutions.",
    benefits: [
      "Stock Awards",
      "Health Insurance",
      "Paid Leaves",
      "Hybrid Work",
      "Learning Programs",
    ],
    email: "hr@microsoft.com",
    website: "https://microsoft.com",
    jobs: [
      {
        id: "1",
        title: "Software Engineer",
        location: "Noida",
        salary: "18-28 LPA",
        experience: "2-5 Years",
      },
      {
        id: "2",
        title: "Azure Cloud Engineer",
        location: "Hyderabad",
        salary: "20-30 LPA",
        experience: "3-6 Years",
      },
    ],
  },

  {
    id: "tcs",
    name: "TCS",
    logo: "/logos/tcs.png",
    industry: "IT Services",
    location: "Mumbai, India",
    size: "600000+ Employees",
    founded: 1968,
    description:
      "TCS is one of the largest IT services and consulting companies in the world, delivering enterprise-scale digital transformation.",
    benefits: [
      "Medical Insurance",
      "Training Programs",
      "Onsite Opportunities",
      "Performance Incentives",
    ],
    email: "careers@tcs.com",
    website: "https://tcs.com",
    jobs: [
      {
        id: "1",
        title: "Java Developer",
        location: "Mumbai",
        salary: "6-10 LPA",
        experience: "1-3 Years",
      },
      {
        id: "2",
        title: "Data Analyst",
        location: "Chennai",
        salary: "5-9 LPA",
        experience: "1-2 Years",
      },
    ],
  },

  {
    id: "infosys",
    name: "Infosys",
    logo: "/logos/infosys.png",
    industry: "IT Services",
    location: "Bangalore, India",
    size: "350000+ Employees",
    founded: 1981,
    description:
      "Infosys is a global IT consulting and digital services company helping enterprises modernize technology and processes.",
    benefits: [
      "Health Insurance",
      "Work From Home",
      "Learning & Development",
      "Annual Bonus",
    ],
    email: "careers@infosys.com",
    website: "https://infosys.com",
    jobs: [
      {
        id: "1",
        title: "Full Stack Developer",
        location: "Bangalore",
        salary: "8-14 LPA",
        experience: "2-4 Years",
      },
      {
        id: "2",
        title: "QA Engineer",
        location: "Pune",
        salary: "6-11 LPA",
        experience: "1-3 Years",
      },
    ],
  },
];
