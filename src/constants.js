// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import renderLogo from './assets/tech_logo/renderLogo.png'
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import agcLogo from './assets/company_logo/cmp.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/vps_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/tlnt.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
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
      { name: 'C', logo: cLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Render', logo: renderLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Accenture India Private Limited",
      date: "Jan 2025 - Present",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, Node Js, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
        "NodeJS",
        "Zustand",
        "Bootstrap"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "ABES Engineering College",
      date: "July 2019 - July 2023",
      grade: "8.6 CGPA",
      desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering from ABES Engineering College, Ghaziabad. During my time at ABES, I gained a strong foundation in programming, software development, and core computer science principles. I studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops, hackathons, and technical events, which helped me enhance my practical skills and broaden my knowledge. My experience at ABES Engineering College has been instrumental in shaping my technical abilities, problem-solving mindset, and overall professional growth.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Saraswati Vidya Mandir Inter College, Shamli",
      date: "July 2018 - June 2019",
      grade: "85%",
      desc: "I completed my class 12 education from Saraswati Vidya Mandir Inter College, Shamli, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Saraswati Vidya Mandir Inter College, Shamli",
      date: "July 2016 - June 2017",
      grade: "90%",
      desc: "I completed my class 10 education from Saraswati Vidya Mandir Inter College, Shamli, under the UP board, where I studied Science with Computer.",
      degree: "(X) - Science with Computer Application",
    }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Real Time Chat App",
      description:
        "A full-stack real-time chat application built with the MERN stack that enables instant messaging with a smooth and responsive user experience. It includes user authentication, live message updates, and media sharing via Cloudinary. The frontend is designed using Tailwind CSS and Bootstrap, while Zustand ensures efficient state management. Overall, it’s a fast, scalable, and user-friendly messaging platform.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API","Node Js","Express","MondoDB","Tailwind","Bootstrap","Cloudinary","Zustand","Sandgrid"],
      github: "https://github.com/ArjunMohanVerma/Mern-Chat-App",
      webapp: "https://mern-chat-app-ktp5.onrender.com",
    },
    {
      id: 1,
      title: "E-Commerce App",
      description:
        "A full-stack e-commerce platform built with the MERN stack, offering a smooth shopping experience with product browsing, secure payments via Stripe, and user authentication. It features a responsive UI using Tailwind CSS, efficient state management with Zustand, and optimized performance using Redis. Cloudinary is integrated for media handling, making the app scalable and user-friendly.",
      image: csprepLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API","Node Js","Express","MondoDB","Tailwind","Stripe","Redis","Cloudinary","Zustand"],
      github: "https://github.com/ArjunMohanVerma/E-COMMM-STORE",
      webapp: "https://e-commm-store.onrender.com",
    },
    {
      id: 2,
      title: "Real Time Interview Platform",
      description:
        "A full-stack web application designed to simulate real-time interview experiences with interactive features and smooth performance. Built using React, Node.js, Express, and MongoDB, it supports user authentication, live session handling, and dynamic workflows. Integrations like Clerk, Inngest, and Stream enhance real-time communication, making it a scalable and efficient platform for practicing and conducting interviews.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript","Nod JS","Express JS","MongoDB","Clerk","Inngest","Stream"],
      github: "https://github.com/ArjunMohanVerma/Talent-IQ",
      webapp: "https://talent-iq-1-exy7.onrender.com/",
    },
  ];  