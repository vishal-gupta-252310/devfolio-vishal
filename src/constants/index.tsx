// import images
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import Images from './Images.tsx';
import { NavbarMenu } from './NavbarMenu.tsx';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

// portfolio data
const PORTFOLIO_OWNER_NAME = 'Vishal Gupta';
const PORTFOLIO_OWNER_SKILLS = [
  {
    title: 'Web Developer',
    description:
      'Specialized in creating responsive and interactive web applications using modern technologies and best practices.',
    image: Images.about01,
  },
  {
    title: 'Software Engineer',
    image: Images.about02,
    description:
      'Experienced in developing robust software solutions with focus on scalability, maintainability, and clean code principles.',
  },
  {
    title: 'Full Stack Developer',
    image: Images.about03,
    description:
      'Proficient in both frontend and backend development, delivering end-to-end solutions with seamless integration.',
  },
  {
    title: 'MERN Stack Developer',
    image: Images.about04,
    description:
      'Expert in building full-stack applications using MongoDB, Express.js, React, and Node.js with modern architecture patterns.',
  },
  {
    title: 'Freelancer',
    image: Images.about04,
    description:
      'Skilled in managing independent projects, client communication, and delivering high-quality solutions within deadlines.',
  },
];

const PORTFOLIO_OWNER_TECH_MASTERY = [
  {
    title: 'React',
    description:
      'Proficient in building modern, responsive web applications using React. Experienced with hooks, state management, and component architecture.',
    image: Images.react,
    mastery: 90,
    marginTop: '1rem',
  },
  {
    title: 'Node.js',
    description:
      'Skilled in developing scalable backend services and APIs using Node.js. Experienced with Express.js and RESTful architecture.',
    image: Images.node,
    mastery: 50,
    margin: '2rem',
  },
  {
    title: 'Sass',
    description:
      'Expert in creating maintainable and modular styles using Sass. Proficient with mixins, variables, and responsive design patterns.',
    image: Images.sass,
    mastery: 70,
    margin: '3rem',
  },
  {
    title: 'TypeScript',
    description:
      'Experienced in developing type-safe applications using TypeScript. Skilled in interfaces, types, and advanced type features.',
    image: Images.typescript,
    mastery: 60,
    marginTop: 0,
  },
];

const PORTFOLIO_OWNER_SOCIAL_MEDIA = [
  {
    title: 'Facebook',
    icon: <FaFacebook />,
  },
  {
    title: 'Twitter',
    icon: <BsTwitter />,
  },
  {
    title: 'Instagram',
    icon: <BsInstagram />,
  },
  {
    title: 'LinkedIn',
    icon: <FaLinkedin />,
  },
];

const PORTFOLIO_OWNER_APPS_TYPES = [
  'Web App',
  'Mobile App',
  'Desktop App',
  'API',
  'React JS',
  'All',
];

const PORTFOLIO_OWNER_PROJECTS = [
  {
    image: Images.about03,
    title: 'Leap Formely JobProgress',
    description:
      'Specialized in creating responsive and interactive web applications using modern technologies and best practices.',
    tags: [
      'React',
      'JavaScript',
      'CSS3',
      'HTML5',
      'Responsive Design',
      'API Integration',
    ],
    link: 'https://jobprogress.leapformely.com/',
    codeLink: 'https://github.com/vishalgupta2002/jobprogress',
    type: 'Web App',
  },
  {
    image: Images.about03,
    title: 'Custom Report Builder',
    description:
      'Specialized in creating responsive and interactive web applications using modern technologies and best practices.',
    tags: [
      'Node JS',
      'Express JS',
      'MongoDB',
      'RESTful API',
      'Authentication',
      'Authorization',
    ],
    link: 'https://jobprogress.leapformely.com/',
    codeLink: 'https://github.com/vishalgupta2002/jobprogress',
    type: 'Web App',
  },
  {
    image: Images.about03,
    title: 'Portfolio Website',
    description:
      'Specialized in creating responsive and interactive web applications using modern technologies and best practices.',
    tags: [
      'Node JS',
      'Express JS',
      'MongoDB',
      'RESTful API',
      'Authentication',
      'Authorization',
    ],
    link: 'https://jobprogress.leapformely.com/',
    codeLink: 'https://github.com/vishalgupta2002/jobprogress',
    type: 'Web App',
  },
  {
    image: Images.about03,
    title: 'Movie App',
    description:
      'Specialized in creating responsive and interactive web applications using modern technologies and best practices.',
    tags: [
      'Node JS',
      'Express JS',
      'MongoDB',
      'RESTful API',
      'Authentication',
      'Authorization',
    ],
    link: 'https://jobprogress.leapformely.com/',
    codeLink: 'https://github.com/vishalgupta2002/jobprogress',
    type: 'Web App',
  },
  {
    title: 'Modern CMS',
    image: Images.about03,
    description:
      'Specialized in creating responsive and interactive web applications using modern technologies and best practices.',
    tags: [
      'React',
      'JavaScript',
      'CSS3',
      'HTML5',
      'Responsive Design',
      'API Integration',
    ],
    link: 'https://jobprogress.leapformely.com/',
    codeLink: 'https://github.com/vishalgupta2002/jobprogress',
    type: 'Mobile App',
  },
];

// export
export {
  Images as IMAGES,
  NavbarMenu as NAVBAR_MENU,
  PORTFOLIO_OWNER_NAME,
  PORTFOLIO_OWNER_SKILLS,
  PORTFOLIO_OWNER_TECH_MASTERY,
  PORTFOLIO_OWNER_SOCIAL_MEDIA,
  PORTFOLIO_OWNER_PROJECTS,
  PORTFOLIO_OWNER_APPS_TYPES,
};
