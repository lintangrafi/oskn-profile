export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
  };
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies?: string[];
  companyLogo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  category: string;
  featured: boolean;
  links: {
    demo?: string;
    github?: string;
    case_study?: string;
  };
  date: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Tools" | "Other";
  proficiency?: number; // 1-100
  icon?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
  logo?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  rating?: number;
}
