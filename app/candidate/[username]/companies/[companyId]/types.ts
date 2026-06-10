export interface Company {
  _id: string;
  slug: string;

  name: string;
  logo: string;
  industry: string;
  location: string;
  size: string;
  foundedYear: number;

  description: string;
  mission?: string;
  vision?: string;

  stats: {
    totalJobs: number;
    activeJobs: number;
    employees: number;
    rating?: number;
  };

  benefits: string[];

  contact: {
    email?: string;
    website?: string;
    linkedin?: string;
    twitter?: string;
    hrContact?: string;
  };
}
