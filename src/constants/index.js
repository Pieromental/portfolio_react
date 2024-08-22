import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  experience,
  english,
  multi,
  agil,
  cloud,
  analyst,
  leader,
 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Conoceme",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const calculateExperienceTime = () => {
  const startDate = new Date(2020, 0, 1); // Enero es el mes 0 en JavaScript
  const currentDate = new Date();

  let experienceTime = currentDate.getFullYear() - startDate.getFullYear();

  // Ajuste si no ha pasado el mes de enero de este año
  if (
    currentDate.getMonth() < startDate.getMonth() ||
    (currentDate.getMonth() === startDate.getMonth() &&
      currentDate.getDate() < startDate.getDate())
  ) {
    experienceTime -= 1;
  }

  return experienceTime;
};

const experience_time = calculateExperienceTime();

const services = [
  {
    title: `${experience_time} Años de Experiencia`,
    icon: experience,
    description:
      "Avalado por mi trayectoria en diversas empresas de desarrollo.",
  },
  {
    title: "Inglés Avanzado C1",
    icon: english,
    description:
      "Inglés conversacional, con estudios culminados en ICPNA Chiclayo.",
  },
  {
    title: "Desarrollo Full Stack Web-Mobile",
    icon: multi,
    description:
      "Experto en bases de datos, APIs REST, y múltiples frameworks FrontEnd y Backend.",
  },
  {
    title: "Integración de Servicios en la Nube",
    icon: cloud,
    description: "Experiencia con Firebase y AWS (DynamoDB, S3).",
  },
  {
    title: "Trabajo en Entornos Ágiles",
    icon: agil,
    description:
      "Desarrollo siguiendo metodologías ágiles como SCRUM, CANVAS y RUP.",
  },
  {
    title: "Recopilación y Análisis de Requerimientos",
    icon: analyst,
    description:
      "Experiencia como Analista Desarrollador en la identificación de procesos y requerimientos.",
  },
  {
    title: "Líder de Proyectos",
    icon: leader,
    description: "Liderazgo demostrado en la gestión de equipos de trabajo.",
  },
  {
    title: "Experiencia en UI/UX",
    icon: ux,
    description: "Participación en el diseño de mockups.",
  },
];

const technologies = [
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
    name: "Rails",
    icon: rubyrails,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
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


const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Cover Hunt",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Aug 2021 - Feb 2022",
  },
  {
    title: "Mentor (Volunteer)",
    company_name: "Microverse",
    icon: microverse,
    iconBg: "#333333",
    date: "Mar 2022 - May 2022",
  },
  {
    title: "Junior Software Engineer",
    company_name: "Kelhel",
    icon: kelhel,
    iconBg: "#333333",
    date: "May 2022 - Oct 2022",
  },
  {
    title: "Full Stack Developer",
    company_name: "Diversity Cyber Council",
    icon: dcc,
    iconBg: "#333333",
    date: "Sep 2022 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "KomiKult",
    description: "A comic characters list app that displays Marvel characters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/shaqdeff/KomiKult",
    demo: "https://shaqdeff.github.io/KomiKult/",
  },
  {
    id: "project-2",
    name: "Leaderboard",
    description:
      "A leaderboard list app that displays scores submitted by different players.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/shaqdeff/Leaderboard",
    demo: "https://shaqdeff.github.io/Leaderboard/",
  },
  {
    id: "project-3",
    name: "Math Magicians",
    description: "This is a single-page calculator app built with React",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/shaqdeff/Math-Magicians",
    demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  },
  {
    id: "project-4",
    name: "Movie Metro",
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/shaqdeff/Movie-Metro",
    demo: "https://movie-metro.netlify.app/",
  },
  {
    id: "project-5",
    name: "Nyeusi Fest Site",
    description:
      "This is a demo concert website for a music festival called Nyeusi.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nyeusi,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  },
];

export { services, technologies, experiences, projects };
