export interface Job {
  id: string;
  title: string;
  company: string;
  category: string;
  location: string;
  salary: string;
  salaryMin: number;
  salaryMax: number;
  jobType: "Full-time" | "Part-time" | "Remote" | "Contract" | "Internship";
  postedDate: string; // ISO string
  description: string;
  logo: string;
  color: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  certificates: string[];
}

export const JOBS: Job[] = [
  {
    id: "1",
    title: "Senior AI Engineer",
    company: "Google",
    category: "remote",
    location: "Remote",
    salary: "$150k - $220k",
    salaryMin: 150000,
    salaryMax: 220000,
    jobType: "Remote",
    postedDate: new Date(Date.now() - 3600000 * 2).toISOString(),
    description: "Lead the development of next-generation AI models and integrate them into core Google services.",
    logo: "G",
    color: "text-red-500",
    responsibilities: [
      "Architect and implement large-scale machine learning systems.",
      "Collaborate with cross-functional teams to define AI strategy.",
      "Optimize model performance for low-latency production environments.",
      "Mentor junior engineers and lead code reviews."
    ],
    requirements: [
      "Masters or PhD in Computer Science or related field.",
      "5+ years of experience in AI/ML development.",
      "Expertise in PyTorch or TensorFlow.",
      "Strong background in distributed systems."
    ],
    perks: [
      "Competitive Equity Packages",
      "Comprehensive Health Insurance",
      "Flexible Remote Work Policy",
      "Annual Growth & Learning Budget"
    ],
    certificates: [
      "Google Professional ML Engineer",
      "AWS Certified Machine Learning - Specialty"
    ]
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "Microsoft",
    category: "mnc",
    location: "Redmond, WA",
    salary: "$130k - $180k",
    salaryMin: 130000,
    salaryMax: 180000,
    jobType: "Full-time",
    postedDate: new Date(Date.now() - 3600000 * 24).toISOString(),
    description: "Build scalable and secure web applications using modern cloud technologies on Azure.",
    logo: "M",
    color: "text-blue-500",
    responsibilities: [
      "Develop end-to-end features for cloud-based enterprise solutions.",
      "Ensure high performance and responsiveness of applications.",
      "Manage database schemas and optimize query performance.",
      "Participate in the full software development lifecycle."
    ],
    requirements: [
      "B.S. in Computer Science or equivalent experience.",
      "Proficiency in React, Node.js, and TypeScript.",
      "Experience with Azure services (App Service, CosmosDB).",
      "Solid understanding of RESTful API design."
    ],
    perks: [
      "On-site Gym & Wellness Center",
      "Generous Parental Leave",
      "Employee Stock Purchase Plan",
      "Free Lunch & Snacks"
    ],
    certificates: [
      "Azure Developer Associate (AZ-204)",
      "Microsoft Certified: Full Stack Developer"
    ]
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "Amazon",
    category: "data science",
    location: "Seattle, WA",
    salary: "$140k - $200k",
    salaryMin: 140000,
    salaryMax: 200000,
    jobType: "Full-time",
    postedDate: new Date(Date.now() - 3600000 * 48).toISOString(),
    description: "Extract actionable insights from massive retail datasets to drive business decisions.",
    logo: "A",
    color: "text-orange-500",
    responsibilities: [
      "Develop predictive models for customer behavior and demand.",
      "Interpret complex data patterns and present findings to leadership.",
      "A/B test product features and analyze results.",
      "Clean and preprocess raw data from multiple sources."
    ],
    requirements: [
      "Experience with SQL and Python/R.",
      "Understanding of statistical analysis and probability.",
      "Ability to communicate complex results to non-technical stakeholders.",
      "Familiarity with AWS SageMaker is a plus."
    ],
    perks: [
      "Relocation Assistance",
      "Commuter Benefits",
      "Pet-friendly Office",
      "Discounts on Amazon Services"
    ],
    certificates: [
      "AWS Certified Data Research",
      "Professional Data Scientist (PDS)"
    ]
  },
  {
    id: "4",
    title: "Marketing Manager",
    company: "Netflix",
    category: "marketing",
    location: "Los Gatos, CA",
    salary: "$120k - $160k",
    salaryMin: 120000,
    salaryMax: 160000,
    jobType: "Full-time",
    postedDate: new Date(Date.now() - 3600000 * 5).toISOString(),
    description: "Craft and execute global marketing strategies for Netflix original content.",
    logo: "N",
    color: "text-red-600",
    responsibilities: [
      "Lead cross-functional marketing campaigns for major launches.",
      "Manage creative agencies and production timelines.",
      "Analyze audience metrics to optimize channel performance.",
      "Ensure brand consistency across all touchpoints."
    ],
    requirements: [
      "7+ years in brand marketing or entertainment.",
      "Proven track record of successful multi-channel campaigns.",
      "Strong analytical and creative thinking skills.",
      "Excellent communication and presentation abilities."
    ],
    perks: [
      "Personalized Career Coaching",
      "Subsidized Childcare",
      "Unlimited PTO",
      "Premium Netflix Subscription"
    ],
    certificates: [
      "Google Analytics Certified",
      "HubSpot Content Marketing"
    ]
  },
  {
    id: "5",
    title: "Junior Analyst",
    company: "J.P. Morgan",
    category: "banking",
    location: "New York, NY",
    salary: "$80k - $110k",
    salaryMin: 80000,
    salaryMax: 110000,
    jobType: "Full-time",
    postedDate: new Date(Date.now() - 3600000 * 12).toISOString(),
    description: "Support investment banking teams with financial modeling and market research.",
    logo: "J",
    color: "text-blue-800",
    responsibilities: [
      "Assist in the preparation of pitch books and client presentations.",
      "Perform detailed industry and company research.",
      "Build basic financial models (DCF, LBO).",
      "Support senior analysts in transaction execution."
    ],
    requirements: [
      "Recent graduate with a degree in Finance or Economics.",
      "Strong Excel and PowerPoint skills.",
      "Attention to detail and ability to work under tight deadlines.",
      "Professional integrity and discretion."
    ],
    perks: [
      "Global Networking Events",
      "Retirement Savings Plan",
      "Work-from-Home Stipend",
      "Corporate Volunteer Programs"
    ],
    certificates: [
      "CFA Level 1 Candidate",
      "Wall Street Prep Excel Certification"
    ]
  },
  {
    id: "6",
    title: "Backend Developer",
    company: "Stripe",
    category: "startup",
    location: "San Francisco, CA",
    salary: "$160k - $210k",
    salaryMin: 160000,
    salaryMax: 210000,
    jobType: "Full-time",
    postedDate: new Date(Date.now() - 3600000 * 72).toISOString(),
    description: "Build the economic infrastructure for the internet, focusing on high-availability payment systems.",
    logo: "S",
    color: "text-indigo-600",
    responsibilities: [
      "Design and build reliable APIs for global payments.",
      "Optimize system reliability and uptime.",
      "Manage complex financial data flows securely.",
      "Collaborate on the design of new financial products."
    ],
    requirements: [
      "Strong experience with Ruby, Go, or Java.",
      "Understanding of security principles and high-availability systems.",
      "Experience with high-scale distributed databases.",
      "Passion for building great developer experiences."
    ],
    perks: [
      "Mental Health Reimbursement",
      "Home Office Setup Fund",
      "Paid Sabbaticals",
      "Gender Neutral Parental Leave"
    ],
    certificates: [
      "Certified Kubernetes Admin (CKA)",
      "GIAC Security Essentials (GSEC)"
    ]
  },
  {
    id: "7",
    title: "HR Specialist",
    company: "Meta",
    category: "hr",
    location: "Menlo Park, CA",
    salary: "$90k - $130k",
    salaryMin: 90000,
    salaryMax: 130000,
    jobType: "Full-time",
    postedDate: new Date(Date.now() - 3600000 * 4).toISOString(),
    description: "Manage global talent acquisition and employee engagement initiatives.",
    logo: "M",
    color: "text-blue-600",
    responsibilities: [
      "Full-cycle recruiting for technical and non-technical roles.",
      "Lead employee onboarding and cultural integration programs.",
      "Advise managers on employee relations and performance management.",
      "Analyze HR data to improve retention and hiring outcomes."
    ],
    requirements: [
      "Bachelors in HR or Organizational Psychology.",
      "Experience in high-growth tech environments.",
      "Excellent interpersonal and negotiation skills.",
      "Familiarity with ATS and HRIS systems."
    ],
    perks: [
      "On-site Health Clinic",
      "Shuttle Service from Major Hubs",
      "Family Building Benefits",
      "Virtual Reality Equipment Budget"
    ],
    certificates: [
      "SHRM Senior Certified Professional",
      "PHR (Professional in Human Resources)"
    ]
  },
  {
    id: "8",
    title: "Supply Chain Manager",
    company: "Tesla",
    category: "supplychain",
    location: "Austin, TX",
    salary: "$110k - $150k",
    salaryMin: 110000,
    salaryMax: 150000,
    jobType: "Full-time",
    postedDate: new Date(Date.now() - 86400000 * 10).toISOString(),
    description: "Orchestrate global supply chains for the production of sustainable electric vehicles.",
    logo: "T",
    color: "text-red-600",
    responsibilities: [
      "Manage relationships with critical parts suppliers.",
      "Optimize inventory levels and reduce lead times.",
      "Mitigate risks in the global logistics network.",
      "Drive sustainability initiatives across the supply chain."
    ],
    requirements: [
      "Degree in Supply Chain Management or Engineering.",
      "Experience with ERP systems and complex logistics.",
      "Strong project management and analytical skill.",
      "Willingness to travel to manufacturing sites."
    ],
    perks: [
      "Discounts on Tesla Performance Vehicles",
      "Employee Wellness Fund",
      "Relocation Packages",
      "Stock Options"
    ],
    certificates: [
      "Certified Supply Chain Professional (CSCP)",
      "Six Sigma Green Belt"
    ]
  },
  {
    id: "9",
    title: "Sales Executive",
    company: "Salesforce",
    category: "sales",
    location: "Chicago, IL",
    salary: "$100k - $140k",
    salaryMin: 100000,
    salaryMax: 140000,
    jobType: "Full-time",
    postedDate: new Date(Date.now() - 86400000 * 5).toISOString(),
    description: "Help enterprises digitally transform by selling cloud CRM solutions.",
    logo: "S",
    color: "text-blue-400",
    responsibilities: [
      "Identify and close new business opportunities in mid-market.",
      "Develop deep relationships with key executive stakeholders.",
      "Collaborate with solution engineers on client proposals.",
      "Meet or exceed quarterly sales targets."
    ],
    requirements: [
      "Proven track record in B2B SaaS sales.",
      "Strong executive presence and presentation skills.",
      "Ability to navigate complex sales cycles.",
      "Understanding of CRM and enterprise cloud solutions."
    ],
    perks: [
      "Uncapped Commission Structure",
      "Annual Sales Kickoff in Las Vegas",
      "Volunteer Time Off (VTO)",
      "Learning & Certification Reimbursement"
    ],
    certificates: [
      "Salesforce Certified Administrator",
      "Professional Sales Certification"
    ]
  },
  {
    id: "10",
    title: "Business Analyst",
    company: "Accenture",
    category: "analytics",
    location: "Remote",
    salary: "$95k - $130k",
    salaryMin: 95000,
    salaryMax: 130000,
    jobType: "Remote",
    postedDate: new Date(Date.now() - 3600000 * 1).toISOString(),
    description: "Advise global consulting clients on process optimization and digital transformation.",
    logo: "A",
    color: "text-red-500",
    responsibilities: [
      "Conduct in-depth process audits and identify inefficiencies.",
      "Define business requirements for technical implementations.",
      "Lead workshops and client presentations.",
      "Develop business cases for digital investments."
    ],
    requirements: [
      "Experience in management consulting or strategy.",
      "Strong analytical and visualization skills (Tableau/PowerBI).",
      "Excellent storytelling and narrative building.",
      "PMO experience is a plus."
    ],
    perks: [
      "Global Mobility Opportunities",
      "Industry Leading Professional Training",
      "Employee Wellness Platform",
      "Flexible Remote Work Equipment Allowance"
    ],
    certificates: [
      "Certified Business Analysis Professional (CBAP)",
      "Agile Product Owner Certification"
    ]
  },
  {
    id: "11",
    title: "Graduate Software Engineer",
    company: "Uber",
    category: "fresher",
    location: "New York, NY",
    salary: "$110k - $140k",
    salaryMin: 110000,
    salaryMax: 140000,
    jobType: "Full-time",
    postedDate: new Date(Date.now() - 86400000 * 2).toISOString(),
    description: "Join our Engineering Residency and build products that move people and things worldwide.",
    logo: "U",
    color: "text-black",
    responsibilities: [
      "Contribute to production codebases under senior guidance.",
      "Solve complex scalability challenges in transportation logistics.",
      "Participate in architecture design reviews.",
      "Write clean, maintainable, and well-tested code."
    ],
    requirements: [
      "Recent CS graduate or graduating soon.",
      "Strong understanding of core CS fundamentals.",
      "Experience with one or more major languages (Java, Go, C++).",
      "Passion for building products with real-world impact."
    ],
    perks: [
      "Significant Relocation Support",
      "Monthly Uber Credits",
      "On-site Cafeteria & Gym",
      "Collaborative Team Environment"
    ],
    certificates: [
      "AWS Certified Developer - Associate",
      "Oracle Certified Java Professional"
    ]
  },
  ...Array.from({ length: 90 }).map((_, i) => {
    const categories = ["remote", "mnc", "analytics", "banking", "startup", "fresher", "marketing", "data science", "supplychain", "sales", "hr"];
    const companies = ["Google", "Microsoft", "Amazon", "Netflix", "Tesla", "Stripe", "Meta", "Uber", "Airbnb", "Spotify"];
    const locations = ["Remote", "New York, NY", "San Francisco, CA", "London, UK", "Berlin, DE", "Bangalore, IN", "Austin, TX"];
    const jobTypes: ("Full-time" | "Part-time" | "Remote" | "Contract" | "Internship")[] = ["Full-time", "Remote", "Internship", "Contract"];
    
    const cat = categories[i % categories.length];
    const comp = companies[i % companies.length];
    const loc = locations[i % locations.length];
    const type = jobTypes[i % jobTypes.length];
    
    const minS = 60000 + (i * 1000) % 100000;
    const maxS = minS + 40000;
    const date = new Date(Date.now() - 86400000 * (i % 30)).toISOString();
    
    return {
      id: `${i + 12}`,
      title: `${comp} ${cat.charAt(0).toUpperCase() + cat.slice(1)} Professional`,
      company: comp,
      category: cat,
      location: type === "Remote" ? "Remote" : loc,
      salary: `$${minS/1000}k - $${maxS/1000}k`,
      salaryMin: minS,
      salaryMax: maxS,
      jobType: type,
      postedDate: date,
      description: `Opportunity to join ${comp} in our ${cat} division. Contribute to high impact projects globally.`,
      logo: comp.charAt(0),
      color: i % 2 === 0 ? "text-indigo-600" : "text-blue-500",
      responsibilities: [
        `Lead ${cat} initiatives within the organization.`,
        "Collaborate with global teams to ensure product quality.",
        "Solve complex technical and business challenges."
      ],
      requirements: [
        "Bachelor's degree in relevant field.",
        `3+ years experience in ${cat} or related areas.`,
        "Strong analytical and problem-solving skills."
      ],
      perks: [
        "Competitive Salary",
        "Career Development Programs",
        "Health & Wellness Benefits"
      ],
      certificates: [
        `${cat.toUpperCase()} Certified Professional`
      ]
    };
  })
];
