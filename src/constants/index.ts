import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Web Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Node.js Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full stack Developer Intern",
    companyName: "Cognifyz Technologies",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Technologies Used: Node.js, Express.js, Redis, EJS, MongoDB",
      "Frontend: Designed UI using EJS templates",
      "Backend: Built REST APIs with Node.js & Express.js",
      "Authentication: Implemented user login & signup with session-based authentication",
      "Authorization: Used Redis Server for session management and authentication",
      "Database: Stored user data securely using MongoDB",
      "Code Optimization: Ensured efficient and secure data handling",
    ],
  },
  {
    title: "Freelance Web Developer",
    companyName: "",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Role: Worked on key app features",
      "Inquiry Form: Built user inquiry form",
      "Email Template: Designed automated emails",
      "App Naming & Logo: Helped finalize name & logo",
      "Tech: React Native, Firebase, Redux"
    ],
  },
  {
    title: "Full stack Developer Intern",
    companyName: "Zidio Development",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2025 - April 2025",
    points: [
      "Task Management System(MERN Stack)",
      "Designed and developed a full-stack Task Management System using MongoDB, Express.js, React.js, and Node.js (MERN Stack).",
      "Implemented key features including task creation, assignment, deadline tracking, and status updates.",
      "Developed an interactive dashboard for managing tasks efficiently with real-time updates using Redux.",
      "Integrated user authentication and role-based access control (RBAC) for secure task management.",
      "Built an inquiry form for user feedback and integrated automated email notifications.",
      "Ensured seamless performance with optimized backend APIs and responsive frontend design.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Digital Clock",
    description:
      "Developed a real-time digital clock using HTML, CSS, and JavaScript, displaying hours, minutes, and seconds dynamically. Implemented a responsive design, ensuring the clock adapts seamlessly to different screen sizes. Added smooth animations and styling for an aesthetically pleasing interface. Optimized JavaScript logic for accurate time updates and smooth performance.Developed a real-time digital clock using HTML, CSS, and JavaScript, displaying hours, minutes, and seconds dynamically.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: "https://www.thestylesalad.in/cdn/shop/products/WClockDTround2.jpg?v=1640689847",
    sourceCodeLink: "https://github.com/Rashmi-Kalsariya/JAVASCRIPT/tree/master/Clock",
    liveLink: "https://rashmi-kalsariya.github.io/JAVASCRIPT/Clock/index.html"
  },
  {
    name: "Hire Employee",
    description:
      "Developed a dynamic employee hiring system using JavaScript, enabling users to add, edit, and manage employee records efficiently. Implemented form validation to ensure accurate data entry while integrating local storage for persistent data retention. Designed an interactive and user-friendly interface with custom CSS styling, ensuring a seamless experience. Additionally, optimized the system for responsiveness, making it accessible across various devices.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: "https://blogimage.vantagecircle.com/content/images/2021/01/Employee-Management-Meaning-Importance-Tips-Tools---More.png",
    sourceCodeLink: "https://github.com/Rashmi-Kalsariya/JAVASCRIPT/tree/master/Exam-1",
    liveLink: "https://rashmi-kalsariya.github.io/JAVASCRIPT/Exam-1/index.html"
  },
  {
    name: "DICE Game",
    description:
      "Developed an interactive Dice Game using JavaScript, allowing players to roll dice and compete based on randomized outcomes. Implemented dynamic UI updates to display real-time results and player scores. Ensured smooth animations and logic for fair gameplay while enhancing the user experience with responsive design. Integrated event handling to manage player turns and reset functionality for seamless replayability.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVA SCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: "https://atlas-content-cdn.pixelsquid.com/stock-images/dice-B5mdRR0-600.jpg",
    sourceCodeLink: "https://github.com/Rashmi-Kalsariya/JAVASCRIPT/tree/master/Dice",
    liveLink: "https://rashmi-kalsariya.github.io/JAVASCRIPT/Dice/index.html"
  },
  {
    name: "Library System",
    description:
      "Developed a Library Management System using JavaScript, enabling users to add, edit, delete, and manage book records efficiently. Implemented form validation for accurate data entry and integrated local storage to retain book information across sessions. Designed an intuitive and responsive UI with interactive features for seamless user experience. Optimized system functionality to ensure smooth book search, categorization, and borrowing management.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip",
    sourceCodeLink: "https://github.com/Rashmi-Kalsariya/JAVASCRIPT/tree/master/Local_Session_Storage/Library_System",
    liveLink: "https://rashmi-kalsariya.github.io/JAVASCRIPT/Local_Session_Storage/Library_System/index.html"
  },
  {
    name: "Weather App",
    description:
      "Developed a Weather Application using JavaScript, fetching real-time weather data from an API and displaying temperature, humidity, and conditions dynamically. Implemented a responsive UI with custom styling, ensuring a seamless experience across devices. Integrated location-based weather detection and search functionality for retrieving weather details of any city. Enhanced user engagement with dynamic background images based on weather conditions.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: "https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024",
    sourceCodeLink: "https://github.com/Rashmi-Kalsariya/JAVASCRIPT/tree/master/API/Weather_App",
    liveLink: "https://rashmi-kalsariya.github.io/JAVASCRIPT/API/Weather_App/index.html"
  },
  {
    name: "Music Player",
    description:
      "Created a Music Player Application using JavaScript, allowing users to play, pause, and switch tracks seamlessly. Designed an interactive UI with custom styling, displaying song details, album art, and a progress bar. Implemented playlist functionality, volume control, and responsive design for an optimal user experience. Integrated local storage to retain the last played track and settings across sessions.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.sftcdn.net/images/t_app-icon-m/p/334c487c-e22d-11e6-8e3d-d80620cdfe35/3170702851/music-player-mp3-player-logo",
    sourceCodeLink: "https://github.com/Rashmi-Kalsariya/JAVASCRIPT/tree/master/Music_App",
    liveLink: "https://rashmi-kalsariya.github.io/JAVASCRIPT/Music_App/index.html"
  },
  {
    name: "Task Management System",
    description:
      "Developed a task management system using React and TypeScript with a modern MUI-based UI. Integrated Axios for real-time task creation, updates, and deletions. Implemented task categorization, filtering, and priority management for better workflow organization. Ensured responsiveness and smooth user experience across devices.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: "https://cdn.wedevs.com/uploads/2020/06/Why-you-need-a-task-manager-app.png",
    sourceCodeLink: "https://github.com/Rashmi-Kalsariya/Task_Management",
    liveLink: "https://task-management-ashen-ten.vercel.app/"
  },
  {
    name: "User Authentication System",
    description:
      "Developed a task management system using React and TypeScript with a modern MUI-based UI. Integrated Axios for real-time task creation, updates, and deletions. Implemented task categorization, filtering, and priority management for better workflow organization. Ensured responsiveness and smooth user experience across devices.",
    tags: [
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "Redis",
        color: "green-text-gradient",
      },
      {
        name: "EJS",
        color: "pink-text-gradient",
      },
    ],
    image: "https://www.eukhost.com/blog/wp-content/uploads/2018/04/Why-User-Authentication-is-Essential-for-Cloud-Based-Systems-BLOG.png",
    sourceCodeLink: "https://github.com/Rashmi-Kalsariya/USER_SYSTEM",
    liveLink: ""
  },
  {
    name: "Food Ordering System",
    description:
      "Designed and developed a robust backend for a food ordering system using Node.js and Express. Implemented MongoDB for efficient data storage, including users, menu items, and orders. Integrated authentication with JWT for secure user access and role-based authorization. Built RESTful APIs for seamless order placement, cart management, and real-time order tracking.",
    tags: [
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: "https://cdn.appsrhino.com/new-website-2022/strapi/How_do_food_apps_generate_tons_of_money_An_Inside_look_2022_15635559a5.png",
    sourceCodeLink: "https://github.com/Rashmi-Kalsariya/FOOD_APP",
    liveLink: ""
  },
];

export { services, technologies, experiences, testimonials, projects };
