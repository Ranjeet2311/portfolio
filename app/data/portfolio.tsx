import type {
  BlogPost,
  ContactLink,
  ExperienceItem,
  FeaturedProject,
  NavItem,
  ProjectItem,
  StackGroup,
  StatItem,
  StrengthItem
} from "../types/portfolio";

export const navItems: NavItem[] = [
  { label: "About", href: "#about", icon: "ti-user" },
  { label: "Stack", href: "#stack", icon: "ti-code" },
  { label: "Experience", href: "#experience", icon: "ti-briefcase" },
  { label: "Projects", href: "#projects", icon: "ti-folder" },
  { label: "Blog", href: "#blog", icon: "ti-pencil" },
  { label: "Contact", href: "#contact", icon: "ti-mail" }
];

export const stats: StatItem[] = [
  { icon: "ti-calendar", value: "10", suffix: "+", label: "Years" },
  { icon: "ti-rocket", value: "30", suffix: "+", label: "Projects" },
  { icon: "ti-building", value: "5", label: "Companies" },
  { icon: "ti-layers-subtract", value: "6", suffix: "+", label: "Stacks" }
];

export const strengths: StrengthItem[] = [
  {
    icon: "ti-topology-star-3",
    title: "System design",
    description: "Architecting scalable full-stack systems from the ground up"
  },
  {
    icon: "ti-layers-subtract",
    title: "Full-stack ownership",
    description: "End-to-end delivery across API, frontend, DevOps, and production"
  },
  {
    icon: "ti-device-desktop-code",
    title: "Frontend expertise",
    description: "Next.js, Angular, React, Vue, accessible UI, and SEO-friendly delivery"
  },
  {
    icon: "ti-database",
    title: "Data-layer fluency",
    description: "SQL, MongoDB, Firebase, schema design, and optimization"
  },
  {
    icon: "ti-users",
    title: "Team collaboration",
    description: "Code reviews, cross-functional delivery, and clear communication"
  },
  {
    icon: "ti-rocket",
    title: "Shipping velocity",
    description: "Knows when to polish and when to ship without losing quality"
  }
];

export const stackGroups: StackGroup[] = [
  {
    icon: "ti-layout",
    label: "Frontend",
    items: [
      { label: "Next.js", level: "high" },
      { label: "Angular", level: "high" },
      { label: "React", level: "high" },
      { label: "Vue.js", level: "high" },
      { label: "TypeScript", level: "medium" },
      { label: "Tailwind CSS", level: "medium" },
      { label: "Bootstrap", level: "medium" },
      { label: "Material UI" },
      { label: "Hugo / Sass" }
    ]
  },
  {
    icon: "ti-server",
    label: "Backend",
    items: [
      { label: "Node.js / Express.js", level: "high" },
      { label: "Django", level: "high" },
      { label: "TypeScript", level: "high" },
      { label: "REST APIs", level: "medium" },
      { label: "OAuth 2.0 / OIDC / RBAC", level: "medium" },
      { label: "GraphQL" }
    ]
  },
  {
    icon: "ti-database",
    label: "Data",
    items: [
      { label: "MySQL", level: "high" },
      { label: "MongoDB", level: "high" },
      { label: "SQL / PostgreSQL", level: "high" },
      { label: "Firebase", level: "medium" },
      { label: "Redis" }
    ]
  },
  {
    icon: "ti-settings",
    label: "DevOps & Tools",
    items: [
      { label: "GitLab / Git", level: "high" },
      { label: "Docker", level: "high" },
      { label: "CI / CD pipelines", level: "medium" },
      { label: "Netlify / Vercel", level: "medium" },
      { label: "Linux / Bash" },
      { label: "Figma" }
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    period: "May 2023 - Present",
    current: true,
    role: "Lead Frontend Engineer",
    roleIcon: "ti-topology-star-3",
    company: "Snapswers.Eu",
    companyIcon: "ti-building",
    note:
      "Leading frontend architecture for a production-grade occupational health platform serving companies and medical professionals. As the sole frontend engineer, I own the system design, secure authentication, and RBAC across multi-role scheduling, employee-tracking, and medical-recommendation workflows, built in Next.js and TypeScript with regular contributions to APIs and data models.",
    tags: ["Next.js", "TypeScript", "OAuth 2.0 / OIDC", "RBAC"]
  },
  {
    period: "Dec 2023 - Present",
    current: true,
    role: "Senior Freelance Developer",
    roleIcon: "ti-user-check",
    company: "Independent",
    companyIcon: "ti-briefcase",
    note:
      "Full-stack partner for clients across industries, from a hospital management system built end-to-end to an embeddable booking app that different companies plug directly into their own websites. Full ownership across requirements, architecture, development, and deployment.",
    tags: ["Next.js", "Django", "MySQL", "MongoDB"]
  },
  {
    period: "Jun 2022 - Jan 2023",
    role: "Frontend Developer",
    roleIcon: "ti-layout",
    company: "LAB Dos",
    companyIcon: "ti-building",
    note:
      "Built complex Angular and React frontends across 6+ client products. Championed component reusability, performance budgets, and cross-browser compatibility standards.",
    tags: ["Angular", "React", "Bootstrap"]
  },
  {
    period: "Aug 2015 - Dec 2022",
    role: "Full Stack Web Developer",
    roleIcon: "ti-stack-2",
    company: "Soft Smart Services",
    companyIcon: "ti-building",
    note:
      "7 years, 30+ projects across diverse industries. Built and maintained full-stack solutions end-to-end, from database schema to responsive UI. Grew from junior into a senior technical voice on the team.",
    tags: ["JavaScript", "SQL", "HTML/CSS", "jQuery"]
  },
  {
    period: "Apr 2013 - 2014",
    role: "Software Support Engineer",
    roleIcon: "ti-headset",
    company: "InTechnologies",
    companyIcon: "ti-building",
    note:
      "Enterprise software support, building the systematic debugging instincts that still inform how I approach complex production issues today.",
    tags: ["Diagnostics", "Enterprise software"]
  }
];

export const featuredProject: FeaturedProject = {
  label: "Flagship client work",
  name: <>Occupational Health <i>Platform</i></>,
  description:
    "Sole frontend architect for a production healthtech platform used by companies and medical professionals to manage scheduling, employee health tracking, and medical recommendations. Multi-role access, OAuth 2.0/OIDC authentication, and RBAC, designed and built end-to-end alongside regular contributions to APIs and data models.",
  note: "// Next.js / TypeScript / OAuth 2.0 / OIDC / RBAC",
  icon: "ti-shield-lock",
  tags: ["Next.js", "TypeScript", "OAuth 2.0", "RBAC"]
};

export const projects: ProjectItem[] = [
  {
    href: "#",
    icon: "ti-tools-kitchen-2",
    type: "Personal / React + Firebase",
    name: "Recipe Sharing App",
    description:
      "Full CRUD recipe platform with user collections, category filtering, and real-time sync. Explored Firebase's realtime capabilities and React state management at depth.",
    note: "// Real-time sync / User auth / Collections",
    tags: ["React", "Firebase"]
  },
  {
    href: "#",
    icon: "ti-messages",
    type: "Personal / Firebase + JS",
    name: "Real-time Group Chat",
    description:
      "Group messaging app with live delivery, user authentication, and channel organisation. Built to deeply understand real-time event patterns and Firebase's data model.",
    note: "// Live messaging / Channels / Auth",
    tags: ["Firebase", "JavaScript"]
  },
  {
    href: "#",
    icon: "ti-building-hospital",
    type: "Client / Full-stack",
    name: "Hospital Management System",
    description:
      "Full-stack hospital management system built end-to-end, including data models, APIs, database design, and the frontend layer on top.",
    note: "// Node.js/Express / MySQL / Full-stack build",
    tags: ["Node.js", "MySQL"]
  },
  {
    href: "#",
    icon: "ti-puzzle",
    type: "Client / React/Next.js",
    name: "Embeddable Booking App",
    description:
      "A booking application designed to be embedded directly into different client websites and web apps. Solved for cross-origin behaviour, per-client theming, and resilience inside host environments.",
    note: "// Multi-tenant frontend / Embeddable widget",
    tags: ["React", "Multi-tenant"]
  }
];

export const posts: BlogPost[] = [
  {
    href: "#",
    icon: "ti-stack-2",
    tag: "Featured post",
    title: <>When to break your <i>monolith</i> - a practical guide</>,
    excerpt:
      "Every team eventually faces the question. After migrating three monoliths across different company stages, here's the framework I actually use to decide and the mistakes I made along the way.",
    date: "June 12, 2026",
    readTime: "8 min read",
    category: "Architecture"
  },
  {
    href: "#",
    icon: "ti-brand-angular",
    tag: "Angular",
    title: "Angular signals in 2026 - what actually changed for large apps",
    excerpt:
      "A deep dive into Angular's signal-based reactivity after using it in production for eight months. Spoilers: it's mostly great, but there are gotchas.",
    date: "May 3, 2026",
    readTime: "6 min"
  },
  {
    href: "#",
    icon: "ti-database",
    tag: "Backend",
    title: "SQL schema decisions that saved us from a painful migration",
    excerpt:
      "Three schema patterns I now apply by default after watching poorly structured databases slow entire teams to a crawl six months into a project.",
    date: "Apr 18, 2026",
    readTime: "5 min"
  },
  {
    href: "#",
    icon: "ti-ship",
    tag: "DevOps",
    title: "Docker for frontend developers - the 80% you actually need",
    excerpt:
      "Most Docker tutorials are written by backend engineers. Here's the mental model that finally made it click for me as a frontend-first developer.",
    date: "Mar 27, 2026",
    readTime: "7 min"
  }
];

export const marqueeItems = [
  "Next.js",
  "Angular",
  "React",
  "Vue.js",
  "TypeScript",
  "Django",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Docker",
  "GitLab",
  "Tailwind",
  "OAuth 2.0"
];

export const contactLinks: ContactLink[] = [
  {
    href: "mailto:ranjeet@example.com",
    icon: "ti-mail",
    label: "Email - opens your mail app",
    value: "ranjeet@example.com"
  },
  {
    href: "https://linkedin.com/in/ranjeet",
    icon: "ti-brand-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/ranjeet"
  },
  {
    href: "https://github.com/ranjeet2311",
    icon: "ti-brand-github",
    label: "GitHub",
    value: "github.com/ranjeet2311"
  },
  {
    icon: "ti-map-pin",
    label: "Location",
    value: "Ljubljana, Slovenia / EU"
  }
];
