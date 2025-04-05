// TypeScript type annotation for the designation
interface Designation {
  title: string;
  description: string;
  image: string;
}

// TypeScript type annotation for the tech mastery
interface TechMastery {
  title: string;
  description: string;
  image: string;
  mastery: number;
  marginTop?: string | number;
  margin?: string | number;
}

// TypeScript type annotation for the experience
interface skills {
  title: string;
  icon: string;
  bgColor: string;
}

// TypeScript type annotation for the experience
interface Experience {
  year: string;
  works: {
    name: string;
    company: string;
    desc: string;
  }[];
}

// TypeScript type annotation for the testimonial
interface Testimonial {
  name: string;
  company: string;
  image: string;
  feedback: string;
}

// TypeScript type annotation for the brand
interface Brand {
  company: string;
  image: string;
}

// TypeScript type annotation for the project
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  codeLink?: string;
  type: string;
}

// TypeScript type annotation for the social media
interface NavbarType {
  title: string;
  link: string;
}

interface SocialMedia {
  title: string;
  icon: React.ReactNode;
  link: string;
}

export type {
  Designation,
  TechMastery,
  skills,
  Experience,
  Testimonial,
  Brand,
  Project,
  NavbarType,
  SocialMedia,
};
