export const data = [
  {
    link: "https://app.netlify.com/sites/nimble-trifle-dd1641/overview",
    title: "Component Library",
    subtitle: "A Component library for your projects",
    details:
      "The component library enables you to import preconifgured components for your React app. It was created using Typescript, Storybook and was published using Github actions and Semantic release.",
    githubLink: "https://github.com/adampatt/comp-lib",
    list: [
      "Typescript",
      "StoryBook",
      "Github Actions",
      "Semantic Release",
      "NPM",
    ],
  },
  {
    link: "https://clinquant-salamander-4f6b79.netlify.app/",
    title: "SpaceX rocket, launches and launchpads",
    subtitle: "A page consuming and displaying SpaceX data",
    details:
      "This page consumes data from the SpaceX api using GraphQL and apollo. The data is displayed in three sections: The five most recent launches as cards, the currently available rockets in a sortable table and the location of the launchpads also as cards.",
    githubLink: "https://github.com/adampatt/nvtest",
    list: ["Typescript", "GraphQL", "Apollo", "React", "CSS"],
  },
  {
    link: "https://www.ftness.co.uk",
    title: "Fitness Dashboard",
    subtitle: "A dashboard for athletes and coaches to plan workouts",
    details:
      "A CRUD application where authorisation is handled using Bcrypt and tokens for private routes. The front-end is built using React using Redux for state management and styled using Emotion. The backend is utilising PostgeSQL and Node.js with all Express API's using yup for validation. End to end tests with Cypress and unit tests with Jest.",
    githubLink: "https://github.com/adampatt/fitness/",
    list: [
      "Redux",
      "Node.js",
      "PostgreSQL",
      "Express",
      "Cypress",
      "Yup",
      "Jest",
      "Bcrypt",
    ],
  },
  {
    link: "https://tubular-shortbread-59d8e3.netlify.app/",
    title: "Album and photo viewer",
    subtitle: "A page displaying JSON.placeholder api data",
    details:
      "Favourited users are stored using localstorage to provide consistency when the page is refreshed. The breadcrumb recieves data from useParams enabling it to display the correct data. The modal uses local state. ",
    githubLink: "https://github.com/adampatt/userPhotos",
    list: ["localStorage", "Hooks", "Emotion", "Modal", "useParams"],
  },
  {
    link: "https://cosmic-squirrel-9e0401.netlify.app/",
    title: "Insurance company homepage",
    subtitle: "A copy of insurance company homepage",
    details:
      "This project uses a multi-step form for user interaction which uses ContextAPI to manage state. Each section is lazy-loaded and all styling uses Emotion.",
    githubLink: "https://github.com/adampatt/hedvig-demo",
    list: [
      "React",
      "Lazy-loading",
      "Hamburger menu",
      "Multi-step Form",
      "ContextAPI",
      "Emotion",
    ],
  },
  {
    link: "https://shimmering-tartufo-31150a.netlify.app/",
    title: "Crypto historical display",
    subtitle:
      "An interactive graph to see a cryptocurrency coins price history",
    details:
      "A single page application displaying the current top 50 cryptocurrency coins. Built using typescript and ContextAPI. The data is displayed using a third party library recharts.",
    githubLink: "https://github.com/adampatt/cryptograph",
    list: ["Typescript", "Recharts", "tailwindCSS", "ContextAPI"],
  },
  {
    link: "https://github.com/adampatt/next-ts-frontend-template",
    title: "Next.js starter template",
    subtitle: "A Next.js and Typescript template to start your project",
    details:
      "An opinionated starter template to begin Next.js projects with. It comes set up with Prettier and EsLint and testing using Cypress.",
    githubLink: "https://github.com/adampatt/next-ts-frontend-template",
    list: ["TypeScript", "Cypress", "EsLint", "Prettier"],
  },
  {
    link: "https://african-marketplace-project.vercel.app/",
    title: "African Marketplace",
    subtitle: "Marketplace for buying and selling homemade goods",
    details:
      "This CRUD app was built as part of a project week while attending a coding course. I along with a colleague was responsible for creating the database. It is relational database using Express apis to access data.",
    githubLink:
      "https://github.com/Build-Week-African-Marketplace-02/african-marketplace",
    list: ["Node.js", "PostgreSQL", "Express"],
  },
];
