module.exports = [
"[project]/shared/data/jobsMockData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JOBS",
    ()=>JOBS
]);
const JOBS = [
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
    ...Array.from({
        length: 90
    }).map((_, i)=>{
        const categories = [
            "remote",
            "mnc",
            "analytics",
            "banking",
            "startup",
            "fresher",
            "marketing",
            "data science",
            "supplychain",
            "sales",
            "hr"
        ];
        const companies = [
            "Google",
            "Microsoft",
            "Amazon",
            "Netflix",
            "Tesla",
            "Stripe",
            "Meta",
            "Uber",
            "Airbnb",
            "Spotify"
        ];
        const locations = [
            "Remote",
            "New York, NY",
            "San Francisco, CA",
            "London, UK",
            "Berlin, DE",
            "Bangalore, IN",
            "Austin, TX"
        ];
        const jobTypes = [
            "Full-time",
            "Remote",
            "Internship",
            "Contract"
        ];
        const cat = categories[i % categories.length];
        const comp = companies[i % companies.length];
        const loc = locations[i % locations.length];
        const type = jobTypes[i % jobTypes.length];
        const minS = 60000 + i * 1000 % 100000;
        const maxS = minS + 40000;
        const date = new Date(Date.now() - 86400000 * (i % 30)).toISOString();
        return {
            id: `${i + 12}`,
            title: `${comp} ${cat.charAt(0).toUpperCase() + cat.slice(1)} Professional`,
            company: comp,
            category: cat,
            location: type === "Remote" ? "Remote" : loc,
            salary: `$${minS / 1000}k - $${maxS / 1000}k`,
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
}),
"[project]/shared/data/mockData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockCandidates",
    ()=>mockCandidates,
    "mockCompanies",
    ()=>mockCompanies,
    "mockJobs",
    ()=>mockJobs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$data$2f$jobsMockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/data/jobsMockData.ts [app-ssr] (ecmascript)");
;
// Helper to get correct domain for companies
const getCompanyDomain = (company)=>{
    const overrides = {
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
        "Microsoft": "microsoft.com"
    };
    const name = company.toLowerCase().replace(/\s+/g, '');
    return overrides[company] || (name.includes('.') ? name : name + '.com');
};
const mockJobs = __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$data$2f$jobsMockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOBS"].map((job)=>{
    const domain = getCompanyDomain(job.company);
    const logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    return {
        ...job,
        companyLogo: logoUrl,
        companyName: job.company,
        companyId: job.company.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        postedAt: new Date(job.postedDate).toLocaleDateString(),
        skills: [
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS"
        ]
    };
});
const mockCompanies = [
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
        contact: {
            website: "shopify.com",
            email: "careers@shopify.com"
        },
        stats: {
            totalJobs: 120,
            activeJobs: 12,
            employees: "10k+",
            rating: 4.6
        },
        benefits: [
            "Health Insurance",
            "Remote Work",
            "Gym Membership",
            "Stock Options"
        ]
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
        contact: {
            website: "google.com",
            email: "jobs@google.com"
        },
        stats: {
            totalJobs: 500,
            activeJobs: 24,
            employees: "100k+",
            rating: 4.8
        },
        benefits: [
            "Free Meals",
            "Parental Leave",
            "Innovation Time Off",
            "Health Insurance"
        ]
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
        contact: {
            website: "amazon.com",
            email: "recruiting@amazon.com"
        },
        stats: {
            totalJobs: 800,
            activeJobs: 32,
            employees: "150k+",
            rating: 4.5
        },
        benefits: [
            "Relocation Assistance",
            "Employee Discounts",
            "Health Savings Account",
            "Retirement Plan"
        ]
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
        contact: {
            website: "microsoft.com",
            email: "jobs@microsoft.com"
        },
        stats: {
            totalJobs: 600,
            activeJobs: 18,
            employees: "180k+",
            rating: 4.7
        },
        benefits: [
            "Health Insurance",
            "Paid Time Off",
            "401(k) Matching",
            "Tuition Reimbursement"
        ]
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
        contact: {
            website: "netflix.com",
            email: "talent@netflix.com"
        },
        stats: {
            totalJobs: 100,
            activeJobs: 10,
            employees: "12k+",
            rating: 4.4
        },
        benefits: [
            "Flexible Work",
            "Unlimited PTO",
            "Health Benefits",
            "Competitive Salary"
        ]
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
        contact: {
            website: "jpmorgan.com",
            email: "careers@jpmorgan.com"
        },
        stats: {
            totalJobs: 1200,
            activeJobs: 45,
            employees: "250k+",
            rating: 4.1
        },
        benefits: [
            "Retirement Plan",
            "Health Care",
            "Life Insurance",
            "Tuition Assistance"
        ]
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
        contact: {
            website: "stripe.com",
            email: "jobs@stripe.com"
        },
        stats: {
            totalJobs: 300,
            activeJobs: 15,
            employees: "8k+",
            rating: 4.9
        },
        benefits: [
            "Health Coverage",
            "Remote First",
            "Learning Budget",
            "Paid Sabbaticals"
        ]
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
        contact: {
            website: "meta.com",
            email: "recruiting@meta.com"
        },
        stats: {
            totalJobs: 1500,
            activeJobs: 20,
            employees: "70k+",
            rating: 4.3
        },
        benefits: [
            "Wellness Center",
            "Meal Allowances",
            "Commuter Benefits",
            "Family Planning"
        ]
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
        contact: {
            website: "tesla.com",
            email: "talent@tesla.com"
        },
        stats: {
            totalJobs: 900,
            activeJobs: 12,
            employees: "120k+",
            rating: 4.2
        },
        benefits: [
            "Stock Options",
            "Employee Discounts",
            "Health Care",
            "Relocation Support"
        ]
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
        contact: {
            website: "salesforce.com",
            email: "careers@salesforce.com"
        },
        stats: {
            totalJobs: 1000,
            activeJobs: 25,
            employees: "75k+",
            rating: 4.6
        },
        benefits: [
            "Volunteer Time Off",
            "Health & Wellness",
            "Education Reimbursement",
            "Parental Leave"
        ]
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
        contact: {
            website: "accenture.com",
            email: "jobs@accenture.com"
        },
        stats: {
            totalJobs: 5000,
            activeJobs: 50,
            employees: "700k+",
            rating: 4.0
        },
        benefits: [
            "Global Mobility",
            "Professional Training",
            "Employee Stock Purchase",
            "Health Benefits"
        ]
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
        contact: {
            website: "uber.com",
            email: "talent@uber.com"
        },
        stats: {
            totalJobs: 400,
            activeJobs: 15,
            employees: "30k+",
            rating: 4.2
        },
        benefits: [
            "Uber Credits",
            "Health Care",
            "Flexible Schedules",
            "Relocation Assistance"
        ]
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
        contact: {
            website: "airbnb.com",
            email: "careers@airbnb.com"
        },
        stats: {
            totalJobs: 200,
            activeJobs: 8,
            employees: "6k+",
            rating: 4.7
        },
        benefits: [
            "Travel Credits",
            "Health Insurance",
            "Paid Parental Leave",
            "Annual Learning Fund"
        ]
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
        contact: {
            website: "spotify.com",
            email: "jobs@spotify.com"
        },
        stats: {
            totalJobs: 350,
            activeJobs: 12,
            employees: "9k+",
            rating: 4.5
        },
        benefits: [
            "Work from Anywhere",
            "Subscription Credit",
            "Health & Dental",
            "Parental Leave"
        ]
    }
];
const mockCandidates = [
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
            {
                id: "s1",
                name: "React.js"
            },
            {
                id: "s2",
                name: "Next.js"
            },
            {
                id: "s3",
                name: "TypeScript"
            },
            {
                id: "s4",
                name: "Tailwind CSS"
            }
        ],
        experience: [
            {
                id: 1,
                title: "Senior Frontend Engineer",
                company: "Hierance"
            }
        ],
        education: [
            {
                id: 1,
                degree: "B.Tech in Computer Science",
                institution: "IIT",
                location: "India",
                startDate: "2016",
                endDate: "2020",
                percentage: "8.5 CGPA"
            }
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
            {
                id: 1,
                name: "English",
                read: true,
                write: true,
                speak: true
            }
        ],
        projects: [],
        resume: null
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
            {
                id: "s1",
                name: "React.js"
            },
            {
                id: "s2",
                name: "Next.js"
            },
            {
                id: "s3",
                name: "TypeScript"
            },
            {
                id: "s4",
                name: "Tailwind CSS"
            }
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
        resume: null
    }
];
}),
"[project]/app/candidate/[username]/apply/components/CompanySection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/data/mockData.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const CompanyInfo = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const username = params.username;
    const slug = params.slug;
    const job = getJobFromSlug(slug);
    const company = __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCompanies"].find((item)=>item.id === job.companyId);
    const safeUsername = username === "undefined" ? "rajat" : username;
    const companyUrl = `/candidate/${safeUsername}/companies/${job.companyId}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-transparent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-3xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-slate-100/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: job.companyLogo,
                                    alt: job.companyName,
                                    className: "h-10 w-10 object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/app/candidate/[username]/apply/components/CompanySection.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/candidate/[username]/apply/components/CompanySection.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold text-slate-900",
                                        children: job.companyName
                                    }, void 0, false, {
                                        fileName: "[project]/app/candidate/[username]/apply/components/CompanySection.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[15px] font-medium text-slate-400",
                                        children: [
                                            company?.industry || "Technology",
                                            " · ",
                                            company?.contact?.website || "Company website"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/candidate/[username]/apply/components/CompanySection.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex flex-wrap gap-2",
                                        children: (company?.benefits?.slice(0, 3) || job.perks || []).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-lg bg-slate-100/50 px-3 py-1 text-[12px] font-medium text-slate-500",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/app/candidate/[username]/apply/components/CompanySection.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/candidate/[username]/apply/components/CompanySection.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/candidate/[username]/apply/components/CompanySection.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/candidate/[username]/apply/components/CompanySection.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: companyUrl,
                        className: "inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-[14px] font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm",
                        children: "View Profile"
                    }, void 0, false, {
                        fileName: "[project]/app/candidate/[username]/apply/components/CompanySection.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/candidate/[username]/apply/components/CompanySection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 max-w-4xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[16px] leading-[1.8] text-slate-500 font-normal",
                    children: company?.description || `${job.companyName} builds thoughtful products and teams across modern technology markets.`
                }, void 0, false, {
                    fileName: "[project]/app/candidate/[username]/apply/components/CompanySection.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/candidate/[username]/apply/components/CompanySection.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/candidate/[username]/apply/components/CompanySection.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CompanyInfo;
const getJobFromSlug = (slug)=>{
    const job = __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockJobs"].find((item)=>generateSlug(item.title) === slug);
    return job || __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockJobs"][0];
};
const generateSlug = (title)=>title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
}),
"[project]/app/candidate/[username]/apply/components/JobDescription.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/data/mockData.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const JobDescriptions = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params.slug;
    const job = getJobFromSlug(slug);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400",
                        children: "Role Overview"
                    }, void 0, false, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-4xl text-[17px] leading-[1.8] text-slate-600 font-normal",
                        children: job.description
                    }, void 0, false, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-12 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionBlock, {
                        title: "Key Responsibilities",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(List, {
                            items: job.responsibilities
                        }, void 0, false, {
                            fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionBlock, {
                        title: "Requirements",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(List, {
                            items: job.requirements
                        }, void 0, false, {
                            fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400",
                        children: "Required Tech Stack"
                    }, void 0, false, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2.5",
                        children: job.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-xl bg-slate-100/50 px-4 py-2 text-[13px] font-medium text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900",
                                children: skill
                            }, skill, false, {
                                fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = JobDescriptions;
const SectionBlock = ({ title, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const List = ({ items })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "space-y-5 text-[15px] leading-relaxed text-slate-600 font-normal",
        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-300"
                    }, void 0, false, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: item
                    }, void 0, false, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, item, true, {
                fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/app/candidate/[username]/apply/components/JobDescription.tsx",
        lineNumber: 69,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const getJobFromSlug = (slug)=>{
    const job = __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockJobs"].find((item)=>generateSlug(item.title) === slug);
    return job || __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockJobs"][0];
};
const generateSlug = (title)=>title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
}),
"[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/data/mockData.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const JobDetailsHeader = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const username = params.username;
    const slug = params.slug;
    const job = getJobFromSlug(slug);
    const safeUsername = username === "undefined" ? "rajat" : username;
    const handleApply = ()=>{
        router.push(`/candidate/${safeUsername}/apply/${slug}/fillform`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-transparent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-8 sm:flex-row sm:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-3xl bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-slate-100/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: job.companyLogo,
                            alt: job.companyName,
                            className: "h-12 w-12 object-contain"
                        }, void 0, false, {
                            fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex flex-wrap gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center rounded-full bg-slate-100 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500",
                                        children: job.companyName
                                    }, void 0, false, {
                                        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-600/80 ring-1 ring-blue-100/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-1 w-1 rounded-full bg-blue-500 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                                lineNumber: 42,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Active Hiring"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl",
                                children: job.title
                            }, void 0, false, {
                                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex flex-wrap gap-5 text-[14px] font-medium text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoLocationOutline"], {
                                                size: 18,
                                                className: "text-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: job.location
                                            }, void 0, false, {
                                                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsBriefcase"], {
                                                size: 17,
                                                className: "text-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: job.jobType
                                            }, void 0, false, {
                                                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiClock"], {
                                                size: 17,
                                                className: "text-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: job.postedAt
                                            }, void 0, false, {
                                                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 grid gap-6 sm:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                        label: "Compensation",
                        value: job.salary
                    }, void 0, false, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                        label: "Core Expertise",
                        value: job.skills.slice(0, 2).join(", ")
                    }, void 0, false, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                        label: "Sector",
                        value: "Technology"
                    }, void 0, false, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 flex flex-wrap gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleApply,
                        className: "inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-200 active:scale-[0.98]",
                        children: "Apply Now"
                    }, void 0, false, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-[15px] font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:border-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRegBookmark"], {
                                size: 15,
                                className: "text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Save Position"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SummaryCard = ({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_15px_rgba(0,0,0,0.02)] transition-all hover:shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                lineNumber: 92,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[16px] font-semibold text-slate-800",
                children: value
            }, void 0, false, {
                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                lineNumber: 95,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
        lineNumber: 91,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = JobDetailsHeader;
const MetaItem = ({ icon, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-1.5",
        children: [
            icon,
            label
        ]
    }, void 0, true, {
        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
        lineNumber: 102,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SummaryItem = ({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all hover:bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-bold uppercase tracking-widest text-slate-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                lineNumber: 110,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-[15px] font-bold text-slate-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
                lineNumber: 113,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/candidate/[username]/apply/components/JobDetailsHeader.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const getJobFromSlug = (slug)=>{
    const job = __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockJobs"].find((item)=>generateSlug(item.title) === slug);
    return job || __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockJobs"][0];
};
const generateSlug = (title)=>title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
}),
];

//# sourceMappingURL=_15be6840._.js.map