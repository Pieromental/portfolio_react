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
  angular,
  vue,
  dart,
  php,
  phyton,
  django,
  laravel,
  flutter,
  mssql,
  springboot,
  reactEcommerce,
  flutterSimpleApp,
  angularIonic,
  vueIonic,
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
    name: "PHP",
    icon: php,
  },
  {
    name: "Phyton",
    icon: phyton,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "SpringBoot",
    icon: springboot,
  },

  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Rails",
  //   icon: rubyrails,
  // },
  // {
  //   name: "graphql",
  //   icon: graphql,
  // },
  {
    name: "Microsoft SQL",
    icon: mssql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  // {
  //   name: "Git",
  //   icon: git,
  // },
  // {
  //   name: "Figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
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
    name: "React Ecommerce",
    description: "Un ecommerce básico desarrollado con React JS.",
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
    image: reactEcommerce,
    repo: "https://github.com/Pieromental/react_prueba_tecnica",
    demo: "https://react-simple-ecommerce-psalazar.netlify.app/",
  },
  {
    id: "project-2",
    name: "Flutter Basic App",
    description:
      "Una app con múltiples mini proyectos para demostrar mis destrezas en Flutter Framework.",
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
    image: flutterSimpleApp,
    repo: "https://github.com/Pieromental/flutter_simple_app",
    demo: "https://flutter-beginner-psalazar.netlify.app/",
  },
  {
    id: "project-3",
    name: "Angular-Ionic App",
    description:
      "Una app de noticias desarrollada con Ionic Framework usando Angular como lenguaje base.",
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
    image: angularIonic,
    repo: "",
    demo: "https://ionic-app-noticias-5251d.web.app/tabs/tab1",
  },
  {
    id: "project-4",
    name: "Vue 3 Ionic App",
    description: `Usando Ionic con Vue 3 intente emular el proceso de la famosa app de trabajos TaskRabbit. Intenta ingresar con las credenciales : Psalazar - 123456`,
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
    image: vueIonic,
    repo: "https://github.com/Pieromental/easy_job_vue_ionic_app",
    demo: "https://ionic-easyjob-app.netlify.app/",
  },
  // {
  //   id: "project-5",
  //   name: "Nyeusi Fest Site",
  //   description:
  //     "This is a demo concert website for a music festival called Nyeusi.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
  //   demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  // },
];

export { services, technologies, experiences, projects };
