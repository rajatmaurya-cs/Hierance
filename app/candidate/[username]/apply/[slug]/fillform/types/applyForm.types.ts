export interface Education {
  qualification: string;
  board: string;
  year: string;
  percentage: string;
}

export interface Experience {
  companyName: string;
  position: string;
  role: string;
  projectName: string;
  startDate: string;
  endDate: string;
  projectDescription: string;
}

export interface ApplyFormData {
  // Step 1
  fullName: string;
  guardianName: string;
  dob: string;
  age: number;
  gender: string;
  maritalStatus: string;
  nationality: string;
  mobile: string;
  email: string;
  aadhaar: string;
  pan: string;

  // Step 2
  education: Education[];

  // Step 3
  position: string;
  department: string;
  joiningDate: string;
  expectedSalary: string;

  // Step 4
  experience: Experience[];
  declaration: boolean;
}
