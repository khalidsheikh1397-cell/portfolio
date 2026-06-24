// ==========================
// Skills Section Logos
// ==========================

import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';


// ==========================
// Experience Section Logo
// ==========================

import paulLogo from './assets/work_logo/paul.png';


// ==========================
// Education Section Logos
// ==========================
// Education Section Logos
import jacLogo from "./assets/education_logo/jac.png";
import kolhanlogo from "./assets/education_logo/kolhan.png";
// ==========================

// import glaLogo from './assets/education_logo/gla_logo.png';
// ==========================

// import glaLogo from './assets/education_logo/gla_logo.png';
// import bsaLogo from './assets/education_logo/bsa_logo.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';


// ==========================
// Project Section Logos
// ==========================

import gitProjectLogo from './assets/work_logo/git.png';


export const SkillsInfo = [
  {
title: 'Frontend',
skills: [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'React JS', logo: reactjsLogo },
],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
    
      { name: 'Python', logo: pythonLogo },
    
      { name: 'JavaScript', logo: javascriptLogo },
    
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    
    ],
  },
];

 export const experiences = [
  {
    id: 0,
    img: paulLogo,
    role: "Fullstack Developer",
    company: "PaulTech",
    date: "May 2025 - August 2025",
    desc: "Worked as a Fullstack Developer Intern at PaulTech, contributing to the development of responsive and scalable web applications using React.js, Node.js, Express.js, and MongoDB. Collaborated with the team to build user-friendly interfaces, integrate REST APIs, and optimize application performance while gaining hands-on experience in full-stack development.", 
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Python",
      "Node JS",
      "Tailwind CSS",
      "MongoDB",
      "Next JS",
    ],
  },
];
  
export const education = [
  
    {
      id: 1,
      img: kolhanlogo,
      date: "Sept 2022 - May 2025",
      grade: "62%",
      desc: "Completed my Bachelor's degree in Computer Science, where I gained a strong foundation in programming, database management, software development, and problem-solving. Throughout my academic journey, I worked on various projects that enhanced my technical skills and practical understanding of modern technologies.",
      degree: "Bachelor of Science - BSC  (Information Technology)",
    },
    {
      id: 2,
      img: jacLogo, 
      school: "Karim City Collge, Jamshedpur",
      date: "Apr 2019 - March 2021",
      grade: "72.6%",
      desc: "Successfully completed Class XII from Jharkhand Academic Council (JAC) with a Science background. During this period, I developed a strong foundation in Mathematics and scientific concepts, which helped shape my interest in software development and modern technologies.",
      degree: "JAC(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: jacLogo, 
      school: "Sri Ram English H/S, Jamshedpur",
      date: " March 2018",
      grade: "72.2%",
      desc: "Successfully completed Secondary Education (Class X) from Jharkhand Academic Council (JAC). During this period, I developed a strong foundation in Mathematics, Science, and analytical thinking. Along with academics, I enhanced my problem-solving abilities, discipline, and learning skills, which have helped me throughout my educational and professional journey. ",
      degree: "JAC (X) - Secondary School Education",
    },
  ];
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
     image: gitProjectLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
     github: "https://github.com/",
     webapp: "gitProjectLogo,",
    },
    {
      id: 1,
      title: "chatty",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
     image: "#",
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/",
      webapp: "#",
    },
    {
      id: 2,
      title: "Food hub",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
     image: "",
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/",
      webapp: "#",
    },
  ]