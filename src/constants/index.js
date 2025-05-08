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

export const navLinks = [
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

const services = [
  {
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "AI Integrations",
    icon: mobile,
  },
  {
    title: "Optimization of workflows",
    icon: backend,
  },
  {
    title: "Marketing",
    icon: creator,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Open For Collaboration",
    company_name: "Swsisscom",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2025 - February 2026",
    points: [
      "I’m actively searching for my next project—this is your chance to collaborate with me on AI, website development, or marketing initiatives.",
      "Whether you need expertise in AI solutions, full-stack web development, or digital marketing strategies, I’m ready to bring my skills to your team and drive results.",
      "Let’s connect and explore how we can achieve outstanding outcomes together.",
    ],
  },
  {
    title: "Offline Agent Deep Security",
    company_name: "Swisscom",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "February 2025 - July 2025",
    points: [
      "Currently performing antivirus agent management in Deep Security solutions within the Midrange Protection Team (MRP).",
      "Working with security platforms and tools including Trellix, Trend Micro, Microsoft Defender for Endpoint, BigFix (backend & agents), and XM Cyber.",
      "Managing Trend Micro Deep Security components: Deep Security Agent (DSA), Deep Security Relay (DSR), and Deep Security Manager (DSM).",
    ],
  },
  {
    title: "Shadowing a Scrum Master",
    company_name: "swisscom",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2024 - February 2025",
    points: [
      "I started in August with my Apprenticeship as «Digital Business Developer» in Swisscom, igniting my passion for the field.",
      "In addition to web development, I discovered an interest in analysis and project management as a Scrum Master, which drove me to enhance my skills in this creative domain.",
      "As part of my apprenticeship, I took the initiative to code and design this website, showcasing my proficiency in web development, media, marketing, and data analysis with responsive design and cross-browser compatibility.",
      "I worked as a Shadow Scrum Master with two laboratory teams (IPB & BBLAB) responsible for the Swiss Network Infrastructure. My responsibilities included managing blackholing operations, organizing team events, and addressing lab members' needs through IT automation and other solutions. Additionally, I undertook various side projects, such as coordinating a three-day long Pilot Project hackathon for students and conducting a workshop on \"Game Coding with Unity.\"",
    ],
  },
  {
    title: "Web Development",
    company_name: "LT Media",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "After departing from NRPAG, I made the decision to return to school and enrolled in the 10th year of education.",
      "In my journey of exploration, I also ventured into the realm of e-commerce. While engaging with Shopify, I discovered an irresistible fascination with website building and Data Analysis.",
      "During this time, I began freelancing and utilizing my skills to create websites for various companies responsive design and Search engine optimization.",
      "The prospect of becoming an «EDB» became a driving force behind my pursuits, and I became dedicated to developing my expertise in this area.",
    ],
  },
  {
    title: "Apprenticeship as Zeichner Ingenieurbau efz",
    company_name: "NRPAG",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2022 - March 2023",
    points: [
      "In August 2022, I started my first apprenticeship as a Zeichner EFZ Fachrichtung Ingenieurbau.",
      "I gained valuable experience working with programs like AutoCAD, Civil, and other 3D CAD software.",
      "While the experience was enriching, I realized that this career path wasn't the perfect fit for me.",
      "After approximately 8-9 months, I decided to explore other opportunities that align more closely with my interests and passions.",
      "With this portfolio in hand, I am currently on the lookout for the perfect Swisscom Project opportunity for the february 2025. I am excited to bring my versatile skill set and passion for web, Ai development and more to a dynamic team and contribute meaningfully to the ever-evolving world of media.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Among Swisscom apprentices, Tiago stands out for his exceptional work quality and impressive self-reliance, consistently delivering top-notch results and demonstrating a remarkable ability to work independently on complex tasks, setting him apart from his peers.",
    name: "Jaime Oberle",
    designation: "Nationally responsible for Digital Business Developer's of Switzerland",
    company: "BBW",
  },
  {
    testimonial:
      "Tiago is a highly productive, fast-learning professional who quickly adapts to new tasks and brings substantial value to any project.",    
    name: "Julia Kung",
    designation: "Scrum Master at Swisscom",
    company: "Swisscom",
  },
  {
    testimonial: "Tiago excels with his exceptional commitment, innovative thinking, and professional demeanor, consistently delivering high-quality work while embracing new challenges and fostering a positive team environment.",
    name: "Ralph Trachlser",
    designation: "DevOps Engineer at MRP",
    company: "Swisscom",
  },
];

const projects = [
  {
    name: "LT MEDIA",
    description: "Website for LT Media which is currently getting reworked on.",
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
    image: carrent,
    source_code_link: "https://lt-media.ch/",
  },
  {
    name: "SEO",
    description: "Currently helping with SEO for Dermakos.",
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
    image: jobit,
    source_code_link: "https://dermakos.ch/",
  },
  {
    name: "Fimga Apple Website UI/UX",
    description:
      "Using Figma to create a UI/UX similiar to the apple website for fun",
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
    image: tripguide,
    source_code_link:
      "https://www.figma.com/community/file/1227655988294353116",
  },
];

export { services, technologies, experiences, testimonials, projects };