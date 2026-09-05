export const profile = {
  name: "Tuliany Grande",
  title: "Frontend Developer",
  location: "Marbella · Stockholm",
  url: "https://tuliany.com",
  headline:
    "Frontend developer in Next.js, React, and TypeScript.",
  pitch:
    "Looking for a frontend developer who understands both the user and the code?",
  email: "tuliany@mail.com",
  linkedin: "https://www.linkedin.com/in/tuliany-grande/",
  github: "https://github.com/Tuliany",
  about: [
    "I don't just build what I'm given. I think about the user, the business goal, and how the product should actually work — then I turn that into a clean, maintainable frontend.",
    "I build product-facing web apps with Next.js, React, TypeScript, and Tailwind. I care about clear UI, solid API integration, and shipping in an agile team.",
    "Based between Marbella and Stockholm. Before tech I worked in real estate and ran my own company — I still bring that client-facing, get-it-done mindset to engineering.",
  ],
} as const;

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "SASS",
  "REST APIs",
  "Git",
  "CI/CD",
  "Azure",
  "Figma",
] as const;

export type Role = {
  company: string;
  href: string;
  title: string;
  dates: string;
  location: string;
  summary: string;
  stack: string[];
  clients?: { name: string; href: string }[];
};

export const roles: Role[] = [
  {
    company: "OR Rent",
    href: "https://or-rent-lwiy.vercel.app/",
    title: "Frontend Developer",
    dates: "2026",
    location: "Sweden",
    summary:
      "Built the live site for corporate housing across Sweden — a Next.js marketing site for long-term project accommodation.",
    stack: ["Next.js", "TypeScript", "React", "Tailwind"],
  },
  {
    company: "MedHelp Care",
    href: "https://medhelp.se",
    title: "Frontend Developer",
    dates: "Apr 2024 – 2026",
    location: "Sweden",
    summary:
      "Frontend on MedHelp Care’s health platform — sickness reporting, rehabilitation, and absence insights for employers.",
    stack: [
      "Jest",
      "React",
      "CSS",
      "TypeScript",
      "Redux",
    ],
  },
  {
    company: "amaceit",
    href: "https://www.amaceit.se",
    title: "Frontend Developer",
    dates: "Oct 2022 – Mar 2024",
    location: "Stockholm",
    summary:
      "Consultant on two public-sector products: community housing for GotlandsHem, and system integrations for FMV.",
    stack: [
      "Next.js",
      "Tailwind",
      "Umbraco",
      "Azure",
      "GitLab",
      "CI/CD",
    ],
    clients: [
      { name: "GotlandsHem", href: "https://www.gotlandshem.se" },
      { name: "FMV", href: "https://www.fmv.se" },
    ],
  },
  {
    company: "Campcation",
    href: "https://www.campcation.com",
    title: "Frontend Developer",
    dates: "Dec 2021 – Jun 2022",
    location: "Stockholm",
    summary:
      "Built visible and behind-the-scenes features for a camping booking platform — the Airbnb-style product for campsites and motorhome pitches.",
    stack: ["React", "Gatsby", "AWS Amplify", "DynamoDB"],
  },
  {
    company: "Zettle by PayPal",
    href: "https://www.zettle.com",
    title: "Frontend Developer intern",
    dates: "Nov 2020 – May 2021",
    location: "Stockholm",
    summary:
      "Built Alexandria, an internal data catalog on the Google Cloud Data Catalog API, so teams could find, inventory, and reuse data assets faster.",
    stack: ["React", "Next.js", "TypeScript", "Node.js"],
  },
];
