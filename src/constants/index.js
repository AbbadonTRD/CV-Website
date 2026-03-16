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
  ltm,
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
   company_name: "Swisscom",
   icon: meta,
   iconBg: "#E6DEDD",
   date: "August 2026 - February 2026",
   points: [
    "I'm actively searching for my next project—this is your chance to collaborate with me on AI, website development, or marketing initiatives.",
    "Whether you need expertise in AI solutions, full-stack web development, or digital marketing strategies, I'm ready to bring my skills to your team and drive results.",
    "Let's connect and explore how we can achieve outstanding outcomes together.",
   ],
  },
  {
   title: "Project Team: Redefine Work @ Swisscom",
   company_name: "Swisscom",
   icon: meta,
   iconBg: "#E6DEDD",
   date: "February 2026 - August 2026",
   points: [
    "We are on a mission to rethink how work happens inside a large company, I contribute in turning ideas into real improvements and figuring out better ways for teams to work together.",
    "So basically making big corp stuff feel a little less big company. Ergo helping Swisscom shape smarter, simpler digital ways to get things done.",
   ],
  },
  {
   title: "Apprentice Junior Release Train Engineer (RTE)",
   company_name: "Swisscom",
   icon: meta,
   iconBg: "#E6DEDD",
   date: "Aug 2025 - February 2026",
   points: [
    "Gaining deep insights into agile working methods within the Swisscom ART Mobile Offering & Experience taught me how much clarity, ownership, and communication matter in complex environments.",
    "Analyzing current processes and challenging existing workflows helped me build a more critical eye for improvement and a stronger instinct for turning observations into concrete proposals.",
    "Working closely with product managers and product owners showed me how to translate broad goals into realistic target states, practical next steps, and measurable action, while also giving me a clearer understanding of how Capex and Opex influence planning and decision-making.",
    "Documenting processes and contributing to the optimization of agile workflows strengthened my ability to bring structure to ambiguity, think more systemically, and contribute with both detail and perspective.",
   ],
  },
 
  {
   title: "Offline Agent Deep Security",
   company_name: "Swisscom",
   icon: meta,
   iconBg: "#E6DEDD",
   date: "February 2025 - August 2025",
   points: [
    "As part of Apprenticeship i performed as a Antivirus Agent Management in Deep Security antivirus solutions with the Midrange Protection Team (MRP)",
    "My responsibilities encompassed working with various security platforms and tools, including Trellix, Trend Micro, Microsoft Defender for Endpoint and Splunk which i also created scripts for.",
    "I also handled components of Trend Micro's Deep Security platform, specifically the offline Agents, ensuring their optimal performance and security.",
   ],
  },
  {
   title: "Shadowing a Scrum Master",
   company_name: "Swisscom",
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
   company_name: "lt&m",
   icon: ltm,
   iconBg: "linear-gradient(to right, rgb(0, 0, 0), rgb(18, 18, 68))",
   date: "Jan 2022 - Jan 2023",
   points: [
    "In my journey of exploration, I also ventured into the realm of e-commerce. While engaging with Shopify, I discovered an irresistible fascination with website building and Data Analysis.",
    "During this time, I began freelancing and utilizing my skills to create websites for various companies responsive design and Search engine optimization.",
    "The prospect of becoming a «TRUE EDB» became a driving force behind my pursuits, and I became dedicated to developing my expertise in this area.",
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
    name: "Tiago  Portfolio",
    description:
      "My personal portfolio showcasing my work and projects, built with React and Tailwind CSS.",
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
    source_code_link: "https://tiago-cevallos.de/",
  },
  {
    name: "Hackathon for Students",
    description:
      "Organized a three-day long Pilot Project hackathon for students, fostering creativity and collaboration.",
    tags: [
      {
        name: "hackathon",
        color: "blue-text-gradient",
      },
      {
        name: "event",
        color: "green-text-gradient",
      },
      {
        name: "teamwork",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.linkedin.com/feed/update/urn:li:activity:7237071589920419840/",
  },
  {
    name: "Splunk Reporting Script", 
    description:
      "Created a Splunk reporting tool for the Swisscom team, enhancing data analysis and reporting capabilities.",
    tags: [
      {
        name: "splunk",
        color: "blue-text-gradient",
      },
      {
        name: "reporting",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://www.splunk.com/",
  },
  {
    name: "Unity Game Coding Workshop",
    description:
      "Conducted a workshop on \"Game Coding with Unity,\" sharing knowledge and skills with participants.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Games",
        color: "green-text-gradient",
      },
      {
        name: "Fun ",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://unity.com/de/developer-tools",
  },
  {
    name: "Swisscom Timeline",
    description:
      "Created a timeline for Swisscom, showcasing the company's history and milestones.",
    tags: [
      {
        name: "Swisscom",
        color: "blue-text-gradient",
      },
      {
        name: "Timeline",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://relaxed-zabaione-5aeb99.netlify.app/",
  },
  {
    name: "NEX DAY EVENT",
    description:
      "Organizing a EDB Specific Exercise for the next Swisscom NEXDAY event, bringing together teams and fostering collaboration.", 
    tags: [
      {
        name: "splunk",
        color: "blue-text-gradient",
      },
      {
        name: "reporting",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://www.swisscom.ch/de/about/karriere/getit/berufslehre-bei-swisscom/swisscom-nex-days.html",
  },
];


export { services, technologies, experiences, testimonials, projects };