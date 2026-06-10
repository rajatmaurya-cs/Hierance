module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
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
"[project]/shared/components/layout/HomePageHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-ssr] (ecmascript) <export default as IndianRupee>");
"use client";
;
;
;
;
;
function HomePageHeader() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle scroll for sticky glassmorphic header
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        onMouseLeave: ()=>setActiveMenu(null),
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled || activeMenu ? "py-3 bg-white/80 backdrop-blur-xl border-indigo-100/50 shadow-[0_2px_15px_-3px_rgba(79,70,229,0.05)]" : "py-4 bg-transparent border-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-10 lg:gap-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                onMouseEnter: ()=>setActiveMenu(null),
                                className: "flex items-center transform hover:scale-[1.02] transition-transform duration-300 shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/hireance-PNG-logo.png",
                                    alt: "Hireance Logo",
                                    width: 125,
                                    height: 40,
                                    className: "brightness-110 object-contain",
                                    style: {
                                        height: "auto"
                                    },
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden md:flex items-center gap-6 lg:gap-8",
                                children: [
                                    [
                                        {
                                            label: "Jobs",
                                            href: "/jobs",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
                                        },
                                        {
                                            label: "Companies",
                                            href: "/companies",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
                                        },
                                        {
                                            label: "Services",
                                            href: "/services",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
                                        },
                                        {
                                            label: "Prices",
                                            href: "/prices",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"]
                                        }
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            onMouseEnter: ()=>setActiveMenu(null),
                                            className: "group flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-900 transition-all duration-200 px-3 py-1.5 rounded-full hover:bg-indigo-50/70",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                    size: 14,
                                                    className: "text-indigo-400 group-hover:text-indigo-600 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, this),
                                                item.label
                                            ]
                                        }, item.label, true, {
                                            fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-1",
                                        onMouseEnter: ()=>setActiveMenu('company'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `flex items-center gap-1.5 text-sm font-medium transition-all duration-200 px-3 py-1.5 rounded-full cursor-pointer ${activeMenu === 'company' ? "bg-indigo-50 text-indigo-900" : "text-slate-600 hover:text-indigo-900 hover:bg-indigo-50/70"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                    size: 14,
                                                    className: "text-indigo-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this),
                                                "Company",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 12,
                                                    className: `text-indigo-400 transition-transform duration-300 ${activeMenu === 'company' ? "rotate-180" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        onMouseEnter: ()=>setActiveMenu(null),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/auth",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-900 hover:bg-indigo-50/80 rounded-full transition-all duration-200 cursor-pointer",
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/auth",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-5 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:bg-indigo-700 hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] active:bg-indigo-800 transform hover:-translate-y-[1px] transition-all duration-200 cursor-pointer",
                                            children: "Register"
                                        }, void 0, false, {
                                            fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                className: "md:hidden p-2.5 rounded-xl hover:bg-indigo-50 text-slate-600 transition-colors cursor-pointer",
                                "aria-label": "Toggle menu",
                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                    lineNumber: 128,
                                    columnNumber: 31
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                    lineNumber: 128,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block relative max-w-7xl mx-auto px-6 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute top-full left-6 right-6 md:left-8 md:right-8 bg-white/95 backdrop-blur-xl border border-indigo-100/50 shadow-[0_25px_60px_-15px_rgba(79,70,229,0.1)] rounded-[2rem] p-8 mt-3 transition-all duration-300 transform origin-top ${activeMenu === 'company' ? "opacity-100 translate-y-0 scale-100 visible" : "opacity-0 -translate-y-2 scale-95 invisible pointer-events-none"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 bg-gradient-to-br from-indigo-50/50 to-white text-slate-800 rounded-[1.5rem] p-8 border border-indigo-100/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] relative overflow-hidden flex flex-col justify-between min-h-[340px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/20 rounded-full blur-[40px]"
                                    }, void 0, false, {
                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/hireance-PNG-logo.png",
                                                    alt: "Hireance Logo",
                                                    width: 110,
                                                    height: 35,
                                                    className: "brightness-110 object-contain",
                                                    style: {
                                                        height: "auto"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-indigo-950 tracking-tight mb-4",
                                                children: "Why Choose Hierance?"
                                            }, void 0, false, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-600 leading-relaxed font-light",
                                                children: [
                                                    "At ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-indigo-900",
                                                        children: "Hierance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 22
                                                    }, this),
                                                    ", we don't just connect resumes to job descriptions; we bridge ambition with innovation. By combining precision AI matching with seamless discovery, we empower job seekers to land roles where they thrive, and enable top-tier employers to build the future with absolute confidence."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 mt-6 pt-4 border-t border-indigo-100/60 text-xs text-indigo-500/70 italic",
                                        children: "“Unifying potential with opportunity, daily.”"
                                    }, void 0, false, {
                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 flex flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[10px] font-bold uppercase text-indigo-400 tracking-wider",
                                        children: "How it works"
                                    }, void 0, false, {
                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3.5 group/item cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 rounded-xl bg-indigo-50 text-indigo-500 group-hover/item:bg-indigo-100 group-hover/item:text-indigo-700 flex items-center justify-center shrink-0 transition-all duration-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-xs font-semibold text-slate-800 group-hover/item:text-indigo-900 transition-colors",
                                                                children: "1,200+ Premium Jobs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-slate-500 mt-1 leading-relaxed font-light",
                                                                children: "Direct access to verified high-paying roles from top global tech companies."
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3.5 group/item cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 rounded-xl bg-indigo-50 text-indigo-500 group-hover/item:bg-indigo-100 group-hover/item:text-indigo-700 flex items-center justify-center shrink-0 transition-all duration-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-xs font-semibold text-slate-800 group-hover/item:text-indigo-900 transition-colors",
                                                                children: "Smart AI Matching"
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-slate-500 mt-1 leading-relaxed font-light",
                                                                children: "Optimize your profile with advanced AI match scoring before submitting application."
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3.5 group/item cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 rounded-xl bg-indigo-50 text-indigo-500 group-hover/item:bg-indigo-100 group-hover/item:text-indigo-700 flex items-center justify-center shrink-0 transition-all duration-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-xs font-semibold text-slate-800 group-hover/item:text-indigo-900 transition-colors",
                                                                children: "Validated Talent Pool"
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-slate-500 mt-1 leading-relaxed font-light",
                                                                children: "Browse pre-screened technical experts with verified skills and credentials."
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 flex flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[10px] font-bold uppercase text-indigo-400 tracking-wider",
                                        children: "Get in Touch"
                                    }, void 0, false, {
                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:support@hierance.com",
                                                className: "flex items-start gap-3.5 group/item cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 rounded-xl bg-indigo-50 text-indigo-500 group-hover/item:bg-indigo-100 group-hover/item:text-indigo-700 flex items-center justify-center shrink-0 transition-all duration-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-xs font-semibold text-slate-800 group-hover/item:text-indigo-900 transition-colors",
                                                                children: "support@hierance.com"
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-slate-500 mt-1 leading-relaxed font-light",
                                                                children: "For billing questions, profile support, and security inquiries."
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-xs font-semibold text-slate-800",
                                                                children: "Bangalore & San Francisco"
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-slate-500 mt-1 leading-relaxed font-light",
                                                                children: "Global office hubs managing matching intelligence and operations."
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/legal/contact",
                                                className: "flex items-start gap-3.5 group/item cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 rounded-xl bg-indigo-50 text-indigo-500 group-hover/item:bg-indigo-100 group-hover/item:text-indigo-700 flex items-center justify-center shrink-0 transition-all duration-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-xs font-semibold text-slate-800 group-hover/item:text-indigo-900 transition-colors",
                                                                children: "Send Secure Message"
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-slate-500 mt-1 leading-relaxed font-light",
                                                                children: "Open our contact inquiry form to reach customer support desk directly."
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-x-0 top-[65px] bottom-0 z-40 bg-white/95 backdrop-blur-xl border-t border-indigo-100/40 flex flex-col p-6 transition-all duration-300 md:hidden overflow-y-auto ${mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col gap-6",
                        children: [
                            [
                                {
                                    label: "Jobs",
                                    href: "/jobs",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
                                },
                                {
                                    label: "Companies",
                                    href: "/companies",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
                                },
                                {
                                    label: "Services",
                                    href: "/services",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
                                },
                                {
                                    label: "Prices",
                                    href: "/prices",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"]
                                }
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    onClick: ()=>setMobileMenuOpen(false),
                                    className: "flex items-center gap-3 text-base font-semibold text-slate-800 hover:text-indigo-700 py-1 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                            size: 18,
                                            className: "text-indigo-400"
                                        }, void 0, false, {
                                            fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this),
                                        item.label
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-indigo-100/60 my-2"
                            }, void 0, false, {
                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                size: 18,
                                                className: "text-indigo-500 mt-0.5 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 287,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-semibold text-indigo-950 mb-1",
                                                        children: "About Hierance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-600 leading-relaxed font-light",
                                                        children: "At Hierance, we bridge ambition with innovation. By combining precision AI matching with seamless discovery, we empower job seekers to land roles where they thrive and enable employers to build the future with absolute confidence."
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 288,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px bg-indigo-100/40 my-1"
                                    }, void 0, false, {
                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "text-xs font-semibold text-indigo-900 uppercase tracking-wider",
                                                children: "Contact Info"
                                            }, void 0, false, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:support@hierance.com",
                                                className: "flex items-center gap-3 text-xs text-slate-600 hover:text-indigo-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-indigo-100 text-indigo-400 shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 17
                                                    }, this),
                                                    "support@hierance.com"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 text-xs text-slate-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-indigo-100 text-indigo-400 shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Bangalore, India & SF, CA"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/legal/contact",
                                                onClick: ()=>setMobileMenuOpen(false),
                                                className: "mt-2 block text-center py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-semibold text-[11px] uppercase tracking-wider transition-colors",
                                                children: "Open Contact Form"
                                            }, void 0, false, {
                                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                                lineNumber: 312,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth",
                                onClick: ()=>setMobileMenuOpen(false),
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full py-3 text-center border border-indigo-200 text-indigo-700 hover:bg-indigo-50 rounded-xl text-sm font-semibold transition-colors cursor-pointer",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth",
                                onClick: ()=>setMobileMenuOpen(false),
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full py-3 text-center bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl text-sm font-semibold shadow-sm transition-all cursor-pointer",
                                    children: "Register"
                                }, void 0, false, {
                                    fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shared/components/layout/HomePageHeader.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/shared/components/JobsBrowser/JobsBrowser.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobsBrowser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/data/mockData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-ssr] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$layout$2f$HomePageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/layout/HomePageHeader.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function JobsBrowser({ filterType, filterValue }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Filter States
    const [selectedTypes, setSelectedTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCategories, setSelectedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [salaryRange, setSalaryRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(30000);
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [postedDay, setPostedDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Get the base jobs for this filter
    const baseJobs = __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockJobs"].filter((job)=>{
        if (filterType === "category") {
            return job.category.toLowerCase() === filterValue.toLowerCase();
        } else {
            return job.company.toLowerCase() === filterValue.toLowerCase();
        }
    });
    const categories = Array.from(new Set(baseJobs.map((j)=>j.category)));
    // Display Jobs State
    const [filteredJobs, setFilteredJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(baseJobs);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 7;
    const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let result = baseJobs;
        // Search Query Filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter((job)=>job.title.toLowerCase().includes(query) || job.company.toLowerCase().includes(query) || job.category.toLowerCase().includes(query));
        }
        // Job Type Filter
        if (selectedTypes.length > 0) {
            result = result.filter((job)=>selectedTypes.includes(job.jobType));
        }
        // Category Filter
        if (selectedCategories.length > 0) {
            result = result.filter((job)=>selectedCategories.includes(job.category));
        }
        // Salary Filter
        result = result.filter((job)=>job.salaryMax >= salaryRange);
        // Location Filter
        if (location) {
            result = result.filter((job)=>job.location.toLowerCase().includes(location.toLowerCase()));
        }
        // Posted Date Filter
        if (postedDay !== "all") {
            const now = Date.now();
            const dayInMs = 86400000;
            result = result.filter((job)=>{
                const posted = new Date(job.postedDate).getTime();
                const diff = now - posted;
                if (postedDay === "24h") return diff <= dayInMs;
                if (postedDay === "1w") return diff <= dayInMs * 7;
                if (postedDay === "1m") return diff <= dayInMs * 30;
                return true;
            });
        }
        setFilteredJobs(result);
        setCurrentPage(1);
    }, [
        searchQuery,
        selectedTypes,
        selectedCategories,
        salaryRange,
        location,
        postedDay,
        filterValue,
        filterType
    ]);
    const toggleType = (type)=>{
        setSelectedTypes((prev)=>prev.includes(type) ? prev.filter((t)=>t !== type) : [
                ...prev,
                type
            ]);
    };
    const toggleCategory = (cat)=>{
        setSelectedCategories((prev)=>prev.includes(cat) ? prev.filter((c)=>c !== cat) : [
                ...prev,
                cat
            ]);
    };
    const removeFilter = (type, value)=>{
        if (type === "type") setSelectedTypes((prev)=>prev.filter((t)=>t !== value));
        if (type === "category") setSelectedCategories((prev)=>prev.filter((c)=>c !== value));
        if (type === "location") setLocation("");
        if (type === "search") setSearchQuery("");
        setCurrentPage(1);
    };
    const resetFilters = ()=>{
        setSearchQuery("");
        setSelectedTypes([]);
        setSelectedCategories([]);
        setSalaryRange(30000);
        setLocation("");
        setPostedDay("all");
        setCurrentPage(1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#f8fafc]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$layout$2f$HomePageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-6 pt-32 pb-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm text-slate-400 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/"),
                                className: "hover:text-indigo-600 transition-colors",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/jobs"),
                                className: "hover:text-indigo-600 transition-colors",
                                children: "All Jobs"
                            }, void 0, false, {
                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-600 font-medium capitalize",
                                children: filterValue
                            }, void 0, false, {
                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "w-full lg:w-80 shrink-0 space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass p-8 rounded-3xl border border-white/50 sticky top-32 max-h-[calc(100vh-160px)] overflow-y-auto no-scrollbar scroll-smooth",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                            size: 20,
                                                            className: "text-indigo-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-xl font-semibold text-slate-800 tracking-tight",
                                                            children: "Filters"
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: resetFilters,
                                                    className: "text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors bg-indigo-50 px-3 py-1.5 rounded-lg",
                                                    children: "Reset"
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]",
                                                    children: "Keywords"
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Job title or keyword...",
                                                            value: searchQuery,
                                                            onChange: (e)=>setSearchQuery(e.target.value),
                                                            className: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium text-slate-700"
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]",
                                                    children: "Job Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        "Full-time",
                                                        "Remote",
                                                        "Internship",
                                                        "Contract"
                                                    ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-3 cursor-pointer group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>toggleType(type),
                                                                    className: `w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${selectedTypes.includes(type) ? 'bg-indigo-600 border-indigo-600' : 'border-slate-200 group-hover:border-indigo-400'}`,
                                                                    children: selectedTypes.includes(type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-1.5 h-1.5 rounded-full bg-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                        lineNumber: 196,
                                                                        columnNumber: 58
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-sm font-medium transition-colors ${selectedTypes.includes(type) ? 'text-slate-900' : 'text-slate-500 group-hover:text-indigo-600'}`,
                                                                    children: type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, type, true, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, this),
                                        categories.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]",
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 gap-2",
                                                    children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>toggleCategory(cat),
                                                            className: `text-left px-4 py-2 rounded-xl text-xs font-medium transition-all ${selectedCategories.includes(cat) ? 'bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200' : 'text-slate-500 hover:bg-slate-50'}`,
                                                            children: cat.charAt(0).toUpperCase() + cat.slice(1)
                                                        }, cat, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]",
                                                    children: "Salary Range"
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "30000",
                                                    max: "250000",
                                                    step: "5000",
                                                    value: salaryRange,
                                                    onChange: (e)=>setSalaryRange(parseInt(e.target.value)),
                                                    className: "w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between mt-3 text-[10px] font-medium text-slate-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "$30k"
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-indigo-600 font-semibold",
                                                            children: [
                                                                "$",
                                                                (salaryRange / 1000).toFixed(0),
                                                                "k+"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "$250k"
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]",
                                                    children: "Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Search location...",
                                                            value: location,
                                                            onChange: (e)=>setLocation(e.target.value),
                                                            className: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[10px] font-semibold text-slate-400 mb-4 uppercase tracking-[0.2em]",
                                                    children: "Job Posted Day"
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        {
                                                            label: "Anytime",
                                                            value: "all"
                                                        },
                                                        {
                                                            label: "Last 24 hours",
                                                            value: "24h"
                                                        },
                                                        {
                                                            label: "Last week",
                                                            value: "1w"
                                                        },
                                                        {
                                                            label: "Last month",
                                                            value: "1m"
                                                        }
                                                    ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setPostedDay(option.value),
                                                            className: `w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${postedDay === option.value ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'}`,
                                                            children: option.label
                                                        }, option.value, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-4xl font-normal text-slate-800 tracking-tight capitalize",
                                                        children: [
                                                            filterValue,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-indigo-600/70",
                                                                children: "Jobs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-500 mt-2 font-medium",
                                                        children: [
                                                            "Showing ",
                                                            filteredJobs.length,
                                                            " position",
                                                            filteredJobs.length !== 1 ? 's' : '',
                                                            " available"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-1 bg-white rounded-xl border border-slate-100 flex shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "p-2 text-slate-400 hover:text-slate-600",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 79
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "p-2 bg-indigo-50 text-indigo-600 rounded-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 83
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this),
                                    (selectedTypes.length > 0 || selectedCategories.length > 0 || location || searchQuery) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2 mb-8",
                                        children: [
                                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-full ring-1 ring-indigo-100",
                                                children: [
                                                    '"',
                                                    searchQuery,
                                                    '"',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        size: 14,
                                                        className: "cursor-pointer",
                                                        onClick: ()=>removeFilter("search", "")
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                lineNumber: 309,
                                                columnNumber: 19
                                            }, this),
                                            selectedTypes.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-full ring-1 ring-slate-100",
                                                    children: [
                                                        t,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            size: 14,
                                                            className: "cursor-pointer",
                                                            onClick: ()=>removeFilter("type", t)
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, t, true, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 19
                                                }, this)),
                                            selectedCategories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-full ring-1 ring-slate-100",
                                                    children: [
                                                        c,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            size: 14,
                                                            className: "cursor-pointer",
                                                            onClick: ()=>removeFilter("category", c)
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, c, true, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, this)),
                                            location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-full ring-1 ring-slate-100",
                                                children: [
                                                    location,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        size: 14,
                                                        className: "cursor-pointer",
                                                        onClick: ()=>removeFilter("location", "")
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                lineNumber: 327,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: resetFilters,
                                                className: "text-xs font-semibold text-red-500 hover:text-red-600 ml-2",
                                                children: "Clear All"
                                            }, void 0, false, {
                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                lineNumber: 332,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: paginatedJobs.length > 0 ? paginatedJobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>router.push(`/jobs/${job.id}`),
                                                className: "group bg-white p-6 rounded-[2rem] border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden cursor-pointer flex flex-col md:flex-row md:items-center gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center p-3 ring-1 ring-slate-100 shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: job.companyLogo,
                                                            alt: job.company,
                                                            className: "w-10 h-10 object-contain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-semibold text-indigo-600 uppercase tracking-widest",
                                                                        children: job.company
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                        lineNumber: 359,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-1 h-1 rounded-full bg-slate-200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                        lineNumber: 362,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-medium text-slate-400 uppercase tracking-widest",
                                                                        children: job.jobType
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                        lineNumber: 363,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl font-medium text-slate-800 group-hover:text-indigo-600 transition-colors mb-2 leading-tight",
                                                                children: job.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-4 text-xs text-slate-500 font-normal",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-1.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                size: 14,
                                                                                className: "text-slate-300"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                                lineNumber: 372,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            job.location
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                        lineNumber: 371,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-1.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                                size: 14,
                                                                                className: "text-slate-300"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                                lineNumber: 376,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            job.salary
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                        lineNumber: 375,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-1.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                                size: 14,
                                                                                className: "text-slate-300"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                                lineNumber: 380,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            new Date(job.postedDate).toLocaleDateString()
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                        lineNumber: 379,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "px-8 py-3 bg-slate-50 group-hover:bg-indigo-600 text-slate-500 group-hover:text-white rounded-xl font-medium text-xs uppercase tracking-widest transition-all duration-300 shrink-0",
                                                        children: "View Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, job.id, true, {
                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                lineNumber: 344,
                                                columnNumber: 19
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-24 text-center bg-white border border-slate-100 rounded-[2.5rem]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        size: 40
                                                    }, void 0, false, {
                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-medium text-slate-800 mb-2",
                                                    children: "No jobs found"
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-500 max-w-sm mx-auto font-normal",
                                                    children: "Try adjusting your filters to find what you're looking for."
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: resetFilters,
                                                    className: "mt-8 px-8 py-3 bg-indigo-600 text-white rounded-full font-medium shadow-lg shadow-indigo-100",
                                                    children: "Clear All Filters"
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                            lineNumber: 392,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, this),
                                    totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-12 flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                                disabled: currentPage === 1,
                                                className: "px-6 py-2.5 bg-white border border-slate-100 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-30 transition-all",
                                                children: "Previous"
                                            }, void 0, false, {
                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    ...Array(totalPages)
                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentPage(i + 1),
                                                        className: `w-10 h-10 rounded-xl text-sm font-medium transition-all ${currentPage === i + 1 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "bg-white border border-slate-100 text-slate-400 hover:bg-slate-50"}`,
                                                        children: i + 1
                                                    }, i, false, {
                                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                lineNumber: 418,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                                disabled: currentPage === totalPages,
                                                className: "px-6 py-2.5 bg-white border border-slate-100 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-30 transition-all",
                                                children: "Next"
                                            }, void 0, false, {
                                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                                lineNumber: 433,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                        lineNumber: 410,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shared/components/JobsBrowser/JobsBrowser.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/jobs/company/[companyName]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanyJobsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$JobsBrowser$2f$JobsBrowser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/JobsBrowser/JobsBrowser.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function CompanyJobsPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const companyName = params.companyName;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$JobsBrowser$2f$JobsBrowser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        filterType: "company",
        filterValue: decodeURIComponent(companyName)
    }, void 0, false, {
        fileName: "[project]/app/jobs/company/[companyName]/page.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__93508d97._.js.map