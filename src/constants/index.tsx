// import images
import { FaFacebook, FaLinkedin, FaReact } from 'react-icons/fa';
import Images from './Images.tsx';
import { NavbarMenu } from './NavbarMenu.tsx';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

// portfolio data
const PORTFOLIO_OWNER_NAME = 'Vishal Gupta';
const PORTFOLIO_OWNER_DESIGNATION = [
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

const PORTFOLIO_OWNER_SKILLS = [
  {
    title: 'React',
    icon: Images.react,
    bgColor: '#edf2f8',
  },
  {
    title: 'Node.js',
    icon: Images.node,
    bgColor: '#edf2f8',
  },
  {
    title: 'Sass',
    icon: Images.sass,
    bgColor: '#edf2f8',
  },
  {
    title: 'TypeScript',
    icon: Images.typescript,
    bgColor: '#edf2f8',
  },
  // {
  //   title: 'MongoDB',
  //   icon: Images.mongodb,
  //   bgColor: '#edf2f8',
  // },
  // {
  //   title: 'Express JS',
  //   icon: Images.express,
  //   bgColor: '#edf2f8',
  // },
  {
    title: 'Python',
    icon: Images.python,
    bgColor: '#edf2f8',
  },
  {
    title: 'C++',
    icon: Images.cpp,
    bgColor: '#edf2f8',
  },
  {
    title: 'API',
    icon: Images.api,
    bgColor: '#edf2f8',
  },
  {
    title: 'Git',
    icon: Images.git,
    bgColor: '#edf2f8',
  },
  {
    title: 'GraphQL',
    icon: Images.graphql,
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
    title: 'JavaScript',
    icon: Images.javascript,
    bgColor: '#edf2f8',
  },
  {
    title: 'Figma',
    icon: Images.figma,
    bgColor: '#edf2f8',
  },
  {
    title: 'Flutter',
    icon: Images.flutter,
    bgColor: '#edf2f8',
  },
  // {
  //   title: 'Spotify',
  //   icon: Images.spotify,
  //   bgColor: '#edf2f8',
  // },
]

const PORTFOLIO_OWNER_EXPERIENCE = [
  {
    year: '2022',
    works: [
      {
        name: 'React Developer',
        company: 'Logiciel Solutions',
        desc: 'React is a JavaScript library for building user interfaces.',
      },
      {
        name: 'Frontend Developer',
        company: 'Logiciel Solutions',
        desc: 'I am a frontend developer with a passion for building user-friendly and efficient web applications.',
      }
    ]
  },
  {
    year: '2023',
    works: [
      {
        name: 'Full Stack Developer',
        company: 'Logiciel Solutions',
        desc: 'I am a full stack developer with a passion for building user-friendly and efficient web applications.',
      },
      {
        name: 'Backend Developer',
        company: 'Logiciel Solutions',
        desc: 'I am a backend developer with a passion for building user-friendly and efficient web applications.',
      }
    ]
  },
  {
    year: '2024',
    works: [
      {
        name: 'React Developer',
        company: 'Logiciel Solutions',
        desc: 'React is a JavaScript library for building user interfaces.',
      }
    ]
  },
  {
    year: '2025',
    works: [
      {
        name: 'React Developer',
        company: 'Logiciel Solutions',
        desc: 'React is a JavaScript library for building user interfaces.',
      }
    ]
  }
]

const PORTFOLIO_OWNER_TESTIMONIALS = [
  {
    image: Images.html,
    name: 'John Doe',
    company: 'Logiciel Solutions',
    feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    image: Images.css,
    name: 'John Smith',
    company: 'Logiciel Solutions',
    feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  }
]

const PORTFOLIO_OWNER_BRANDS = [
  {
    image: Images.html,
    company: 'Logiciel Solutions',
  },
  {
    image: Images.css,
    company: 'Logiciel Solutions',
  },
  {
    image: Images.javascript,
    company: 'Logiciel Solutions',
  },
  {
    image: Images.react,
    company: 'Logiciel Solutions',
  },
  {
    image: Images.node,
    company: 'Logiciel Solutions',
  }
]

const PORTFOLIO_OWNER_PROFILE = {
  name: 'Vishal Gupta',
  designation: 'Software Engineer',
  profile: Images.profile,
  email: 'vishalgupta252310@gmail.com',
  phone: '+91 (8725) 972-310',
  address: 'H.no 53, Prem Vihar Colony, Ludhiana, Punjab, India 141007',
}

// export
export {
  Images as IMAGES,
  NavbarMenu as NAVBAR_MENU,
  PORTFOLIO_OWNER_NAME,
  PORTFOLIO_OWNER_DESIGNATION,
  PORTFOLIO_OWNER_TECH_MASTERY,
  PORTFOLIO_OWNER_SOCIAL_MEDIA,
  PORTFOLIO_OWNER_PROJECTS,
  PORTFOLIO_OWNER_APPS_TYPES,
  PORTFOLIO_OWNER_SKILLS,
  PORTFOLIO_OWNER_EXPERIENCE,
  PORTFOLIO_OWNER_TESTIMONIALS,
  PORTFOLIO_OWNER_BRANDS,
  PORTFOLIO_OWNER_PROFILE
};
