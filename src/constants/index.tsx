// react icons
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// constants
import Images from './Images.tsx';
import { NavbarMenu } from './NavbarMenu.tsx';

/**
 * Portfolio Owner Profile
 * Personal and professional contact details
 */
const PORTFOLIO_OWNER_PROFILE = {
  name: 'Vishal Gupta',
  designation: 'Frontend Developer | React & Angular Specialist',
  profile: Images.profile,
  email: 'vishalgupta252310@gmail.com',
  phone: '+91 8725 972310',
  address: 'Ludhiana, Punjab, India',
};

/**
 * Social Media Profiles
 * Links to professional social media accounts
 */
const PORTFOLIO_OWNER_SOCIAL_MEDIA = [
  {
    title: 'LinkedIn',
    icon: <FaLinkedin />,
    link: 'https://linkedin.com/in/vishal-gupta-798675150'
  },
  {
    title: 'GitHub',
    icon: <FaGithub />,
    link: 'https://github.com/vishalgupta'
  },
  {
    title: 'Portfolio',
    icon: <FaLinkedin />,
    link: 'https://vishal-folio.netlify.app/'
  }
];

/**
 * Portfolio Owner Designations
 * List of professional roles with descriptions and associated images
 */
const PORTFOLIO_OWNER_DESIGNATION = [
  {
    title: 'Frontend Developer',
    description:
      'Frontend Developer with 2+ years of experience in building high-performance web applications using React and Angular. Currently expanding expertise into Node.js for full-stack development.',
    image: Images.about01,
  },
  {
    title: 'React & Angular Specialist',
    image: Images.about02,
    description:
      'Specialized in creating responsive and interactive web applications using React and Angular frameworks with modern architecture patterns.',
  },
  {
    title: 'Certified Developer',
    image: Images.about04,
    description:
      'Certified by Meta and IITM in React development, with strong focus on clean code, testing (Cypress/Jest), and scalable solutions.',
  }
];

/**
 * Technical Expertise
 * Core technologies with proficiency levels and descriptions
 */
const PORTFOLIO_OWNER_TECH_MASTERY = [
  {
    title: 'React',
    description:
      'Proficient in building modern, responsive web applications using React. Experienced with hooks, state management (Redux, Context API), and component architecture.',
    image: Images.react_new,
    mastery: 90,
    marginTop: '1rem',
  },
  {
    title: 'Angular',
    description:
      'Skilled in developing applications using Angular framework, with experience in migrating Angular modules to React.',
    image: Images.angular_new,
    mastery: 70,
    margin: '2rem',
  },
  {
    title: 'TypeScript',
    description:
      'Experienced in developing type-safe applications using TypeScript. Skilled in interfaces, types, and advanced type features.',
    image: Images.typescript,
    mastery: 60,
    marginTop: 0,
  },
  {
    title: 'SaaS',
    description:
      'Expertise in developing scalable and maintainable SaaS applications using React and Angular.',
    image: Images.sass_new,
    mastery: 50,
    margin: '3rem',
  },
  {
    title: 'Node.js',
    description:
      'Currently expanding expertise into Node.js for full-stack development, with experience in building RESTful APIs using Express.js.',
    image: Images.node,
    mastery: 10,
    margin: '3rem',
  },
];

/**
 * Technical Skills
 * List of technologies and tools with associated icons
 */
const PORTFOLIO_OWNER_SKILLS = [
  // Languages
  {
    title: 'JavaScript',
    icon: Images.javascript_new,
    bgColor: '#edf2f8',
  },
  {
    title: 'TypeScript',
    icon: Images.typescript,
    bgColor: '#edf2f8',
  },
  {
    title: 'SaaS',
    icon: Images.sass_new,
    bgColor: '#edf2f8',
  },
  {
    title: 'API',
    icon: Images.api,
    bgColor: '#edf2f8',
  },
  {
    title: 'Redux',
    icon: Images.redux,
    bgColor: '#edf2f8',
  },
  {
    title: 'HTML5',
    icon: Images.html,
    bgColor: '#edf2f8',
  },
  {
    title: 'CSS3',
    icon: Images.css,
    bgColor: '#edf2f8',
  },
  {
    title: 'Node.js',
    icon: Images.node,
    bgColor: '#edf2f8',
  },

  // Frameworks
  {
    title: 'React',
    icon: Images.react_new,
    bgColor: '#edf2f8',
  },
  {
    title: 'Angular',
    icon: Images.angular_new,
    bgColor: '#edf2f8',
  },
  {
    title: 'Express.js',
    icon: Images.express,
    bgColor: '#edf2f8',
  },

  // State Management
  {
    title: 'Redux',
    icon: Images.redux,
    bgColor: '#edf2f8',
  },

  // Testing
  {
    title: 'Cypress',
    icon: Images.cypress,
    bgColor: '#edf2f8',
  },
  {
    title: 'Jest',
    icon: Images.jest,
    bgColor: '#edf2f8',
  },

  // UI/UX
  {
    title: 'Tailwind CSS',
    icon: Images.tailwind,
    bgColor: '#edf2f8',
  },
  {
    title: 'Material-UI',
    icon: Images.materialui,
    bgColor: '#edf2f8',
  },
  {
    title: 'Bootstrap',
    icon: Images.bootstrap,
    bgColor: '#edf2f8',
  },
  {
    title: 'Framer Motion',
    icon: Images.framer,
    bgColor: '#edf2f8',
  },

  // Database
  {
    title: 'MongoDB',
    icon: Images.mongodb,
    bgColor: '#edf2f8',
  },

  // Tools
  {
    title: 'Git',
    icon: Images.git,
    bgColor: '#edf2f8',
  },
  {
    title: 'Postman',
    icon: Images.api,
    bgColor: '#edf2f8',
  },
  {
    title: 'VS Code',
    icon: Images.vscode,
    bgColor: '#edf2f8',
  },
  {
    title: 'Figma',
    icon: Images.figma,
    bgColor: '#edf2f8',
  },
];

/**
 * Professional Experience
 * Work history organized by year with role and company details
 */
const PORTFOLIO_OWNER_EXPERIENCE = [
  {
    year: '2024',
    works: [
      {
        name: 'Software Engineer II',
        company: 'Logiciel Solutions',
        desc: 'Optimized React application performance using lazy loading and React.memo, improving user retention. Collaborated with backend teams to ensure seamless API integration and data flow.',
      }
    ],
  },
  {
    year: '2023',
    works: [
      {
        name: 'Associate Software Engineer',
        company: 'Logiciel Solutions',
        desc: 'Integrated third-party libraries (e.g., Google Maps) into a SaaS platform, enhancing user functionality. Achieved 90% test coverage for React components using Cypress and Jest. Mentored junior developers on React best practices and debugging workflows.',
      },
      {
        name: 'Software Engineer Intern',
        company: 'Logiciel Solutions',
        desc: 'Migrated 15+ Angular modules to React, improving code maintainability and reducing redundancy. Built reusable React components, cutting development time by 25%.',
      }
    ],
  },
  {
    year: '2022',
    works: [
      {
        name: 'Software Engineer Intern',
        company: 'Logiciel Solutions',
        desc: 'Migrated 15+ Angular modules to React, improving code maintainability and reducing redundancy. Built reusable React components, cutting development time by 25%.',
      }
    ],
  }
];

/**
 * Project Categories
 * Types of applications and technologies for portfolio filtering
 */
const PORTFOLIO_OWNER_APPS_TYPES = [
  'React',
  'TypeScript',
  'Angular',
  'Node.js',
  'Full Stack',
  'All',
];

/**
 * Portfolio Projects
 * Showcase of completed projects with details and links
 */
const PORTFOLIO_OWNER_PROJECTS = [
  {
    image: Images.about01,
    title: 'Leap (formely JobProgress)',
    description:
      'Optimized React SaaS platform performance through code-splitting and lazy loading, reducing load times by 15%. Implemented user onboarding tutorials and real-time Firebase sync. Enhanced collaboration with analytics tracking for engagement metrics.',
    tags: [
      'React',
      'TypeScript', 
      'Redux',
      'Material-UI',
      'API Integration',
      'Performance Optimization'
    ],
    link: 'https://www.jobprogress.com/app/#/',
    type: 'React',
  },
  {
    image: Images.about02,
    title: 'YouTube Clone (API-Focused)', 
    description:
      'Developed full-stack YouTube clone with Node.js REST API handling video uploads, user auth and comments. Built CRUD operations for user profiles and video data. Implemented MongoDB storage and Postman testing for reliability.',
    tags: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'RESTful API',
      'Authentication',
      'CRUD Operations'
    ],
    link: 'https://youtube-clone.example.com/',
    codeLink: 'https://github.com/vishalgupta/youtube-clone',
    type: 'Node.js',
  },
  {
    image: Images.about03,
    title: 'Personal Portfolio',
    description: 
      'Created responsive portfolio website with dynamic animations and interactive project showcases. Implemented dark/light theme toggle functionality. Optimized performance achieving 98/100 Lighthouse score through best practices.',
    tags: [
      'React',
      'Framer Motion',
      'Responsive Design', 
      'Dark/Light Theme',
      'Performance Optimization'
    ],
    link: 'https://vishal-folio.netlify.app/',
    codeLink: 'https://github.com/vishal-gupta-252310/devfolio-vishal',
    type: 'React',
  }
];

/**
 * Client Testimonials
 * Feedback from clients and collaborators
 */
const PORTFOLIO_OWNER_TESTIMONIALS = [
  {
    image: Images.html,
    name: 'Project Manager',
    company: 'Logiciel Solutions',
    feedback:
      'Vishal consistently delivers high-quality code and is always willing to take on new challenges. His expertise in React has been invaluable to our team.',
  },
  {
    image: Images.css,
    name: 'Senior Developer',
    company: 'Logiciel Solutions',
    feedback:
      'Working with Vishal has been a pleasure. His attention to detail and commitment to best practices have significantly improved our codebase.',
  }
];

/**
 * Certifications
 * Professional certifications and courses completed
 */
const PORTFOLIO_OWNER_CERTIFICATIONS = [
  {
    title: 'Meta React Developer Certification',
    organization: 'Coursera',
    year: '2024',
    image: Images.react_new
  },
  {
    title: 'Namaste React',
    organization: 'Akshay Saini',
    year: '2023',
    image: Images.react_new
  },
  {
    title: 'GUVI React Certification',
    organization: 'IITM Partnership',
    year: '2022',
    image: Images.react_new
  }
];

/**
 * Education
 * Academic qualifications
 */
const PORTFOLIO_OWNER_EDUCATION = {
  degree: 'Bachelor of Computer Applications (BCA)',
  institution: 'I.K. Gujral Punjab Technical University',
  period: '2017 – 2020',
  score: '74%'
};

/**
 * Brands/Companies
 * Organizations associated with the portfolio owner
 */
const PORTFOLIO_OWNER_BRANDS = [
  {
    image: Images.logiciel,
    company: 'Logiciel Solutions',
  },
  {
    image: Images.react_new,
    company: 'Meta',
  },
  {
    image: Images.css,
    company: 'IITM',
  }
];

/**
 * Exports
 * All constants exported for use throughout the application
 */
export {
  Images as IMAGES,
  NavbarMenu as NAVBAR_MENU,
  PORTFOLIO_OWNER_PROFILE,
  PORTFOLIO_OWNER_SOCIAL_MEDIA,
  PORTFOLIO_OWNER_DESIGNATION,
  PORTFOLIO_OWNER_TECH_MASTERY,
  PORTFOLIO_OWNER_PROJECTS,
  PORTFOLIO_OWNER_APPS_TYPES,
  PORTFOLIO_OWNER_SKILLS,
  PORTFOLIO_OWNER_EXPERIENCE,
  PORTFOLIO_OWNER_TESTIMONIALS,
  PORTFOLIO_OWNER_BRANDS,
  PORTFOLIO_OWNER_CERTIFICATIONS,
  PORTFOLIO_OWNER_EDUCATION
};
