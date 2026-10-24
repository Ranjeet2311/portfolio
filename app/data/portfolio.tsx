import type {
  ContactLink,
  ExperienceItem,
  NavItem,
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
  { icon: "ti-language", value: "3", label: "Help centre languages" },
  { icon: "ti-layers-subtract", value: "6", suffix: "+", label: "Stacks" }
];

export const strengths: StrengthItem[] = [
  {
    icon: "ti-topology-star-3",
    title: "System design",
    description: "Frontend architecture, tenant-aware access, and maintainable application boundaries"
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
    description: "Built a full-stack patient recovery app in seven days of development"
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
      { label: "Redux Toolkit / RTK Query" },
      { label: "Zustand" },
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
      { label: "GraphQL" },
      { label: "Backend-for-Frontend / PKCE" }
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
      { label: "Cloudflare D1 / Kysely" },
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
      { label: "Cloudflare Workers / OpenNext" },
      { label: "Durable Objects" },
      { label: "Vitest / Storybook" },
      { label: "WordPress" },
      { label: "Figma" }
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    period: "2025 - now",
    current: true,
    role: "Lead Frontend Engineer",
    roleIcon: "ti-topology-star-3",
    company: "Gospodar zdravja d.o.o. | Soamed",
    dates: "May 2025 - present · Ljubljana",
    companyIcon: "ti-building",
    note:
      "Own the frontend architecture of a multi-tenant SaaS platform, including authentication, organization switching, roles, and plan-based features. Built a full-stack patient recovery app, a booking frontend, and a multilingual help centre; created and manage project repositories and handle releases.",
    tags: [
      "Multi-tenant SaaS",
      "Authentication layer",
      "Organization switching",
      "Per-organization roles",
      "Plan-based features",
      "Patient recovery app",
      "Online booking",
      "Next.js",
      "TypeScript",
      "Cloudflare Workers"
    ]
  },
  {
    period: "2023 - now",
    current: true,
    role: "Freelance Web Developer",
    roleIcon: "ti-user-check",
    company: "Independent",
    dates: "Dec 2023 - present · Ljubljana",
    companyIcon: "ti-briefcase",
    note:
      "New web apps, bug fixes, additional features, and small business websites. I work with clients to define the scope and choose a suitable stack, from custom applications to Hugo and WordPress sites.",
    tags: [
      "Full-stack projects",
      "Client discovery",
      "System architecture",
      "Frontend development",
      "Backend development",
      "Database design",
      "Deployment",
      "Production support"
    ]
  },
  {
    period: "2022 - 2023",
    role: "Frontend Developer",
    roleIcon: "ti-layout",
    company: "XLAB",
    dates: "Jun 2022 - Dec 2023 · Ljubljana",
    companyIcon: "ti-building",
    note:
      "Built Vue, Angular, and React interfaces in the research team for businesses, public institutions, and European projects. Delivered Hugo website frontends with the design team, improved performance, and deployed approved releases through GitLab CI/CD.",
    tags: [
      "Vue",
      "Angular",
      "React",
      "National projects",
      "European projects",
      "Web applications",
      "Reusable components",
      "Responsive UI"
    ]
  },
  {
    period: "2015 - 2021",
    role: "Web Developer",
    roleIcon: "ti-stack-2",
    company: "Soft Smart Services",
    dates: "Aug 2015 - Dec 2021",
    companyIcon: "ti-building",
    note:
      "Independent contractor building websites, online stores, and web apps, mostly for clients in India and the USA. Worked directly with clients from requirements to launch, including hosting, SEO, and Google Analytics.",
    tags: [
      "Client websites",
      "Web applications",
      "Requirements",
      "Frontend",
      "Backend",
      "Database",
      "Launch",
      "Global clients"
    ]
  },
  {
    period: "2014 - 2015",
    role: "Software Support",
    roleIcon: "ti-headset",
    company: "IN Technologies (P) Ltd",
    dates: "Mar 2014 - Jun 2015 · Gurugram, India",
    companyIcon: "ti-building",
    note:
      "Software troubleshooting for clients in the US, Canada and the UK.",
    tags: [
      "Software support",
      "Troubleshooting",
      "Issue diagnosis",
      "Client communication",
      "US clients",
      "Canadian clients",
      "UK clients"
    ]
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
    href: "mailto:ranjeetkumar2311@gmail.com",
    icon: "ti-mail",
    label: "Email - opens your mail app",
    value: "ranjeetkumar2311@gmail.com"
  },
  {
    href: "https://www.linkedin.com/in/ranjeet-dev/",
    icon: "ti-brand-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/ranjeet-dev"
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
