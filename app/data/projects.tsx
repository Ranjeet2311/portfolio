import type { FeaturedProject, ProjectItem } from "../types/portfolio";
import { personalProjects } from "./personal-projects";

export const featuredProject: FeaturedProject = {
  label: "Soamed / 2025 - present",
  name: <>Multi-tenant SaaS <i>platform</i></>,
  description: "Own the frontend architecture of a B2B SaaS platform used by multiple organizations. Built organization switching, organization-specific roles, and subscription-based features. Designed Backend-for-Frontend authentication with OIDC and PKCE: tokens stay server-side in Durable Objects, while the browser holds an HttpOnly session cookie. Django enforces tenant data isolation.",
  note: "// Frontend architecture / Authentication / Tenant-aware access",
  icon: "ti-shield-lock",
  tags: ["Next.js", "TypeScript", "RTK Query", "Cloudflare Workers", "Durable Objects", "OIDC / PKCE"]
};

export const projects: ProjectItem[] = [
{
  "icon": "ti-building-hospital",
  "type": "Soamed / Hospital project",
  "name": "Patient Recovery App",
  "description": "Designed and built a patient recovery app in seven days of development: care guidance, exercise videos, medical-device information, PROM and PREM questionnaires, and page ratings. Owned the interface, API routes, SQL schema and migrations, with Excel exports for staff.",
  "note": "// Full-stack ownership / Seven development days",
  "tags": [
    "Next.js",
    "TypeScript",
    "Cloudflare Workers",
    "D1",
    "Kysely"
  ]
},
{
  "icon": "ti-calendar-event",
  "type": "Soamed / Multi-clinic product",
  "name": "Online Appointment Booking",
  "description": "Built the complete frontend of a booking app serving four clinics from one deployment. Patients choose a service, location, and time before entering their details. Server-held slots have a countdown, and backend validation errors appear beside the relevant fields.",
  "note": "// Complete frontend / Four clinics / Slot countdown",
  "tags": [
    "Next.js",
    "TypeScript",
    "Zustand",
    "Vitest",
    "Cloudflare Workers"
  ]
},
{
  "icon": "ti-book",
  "type": "Soamed / Product documentation",
  "name": "Multilingual Help Centre",
  "description": "Built an 11-page product guide in Slovenian, English, and Croatian. Typed content blocks keep content separate from layout, with a shared navigation model, expandable sidebar, breadcrumbs, and an on-page table of contents. Access is through the product.",
  "note": "// Eleven pages / Three languages / Reusable content",
  "tags": [
    "Next.js",
    "TypeScript",
    "Static generation",
    "Cloudflare Workers"
  ]
},
{
  "icon": "ti-browser",
  "type": "XLAB / Company websites",
  "name": "Company Website Frontends",
  "description": "Implemented and maintained two company website frontends in Hugo. Worked directly with the design team, turned approved designs into responsive pages, improved performance, and deployed releases through GitLab CI/CD.",
  "note": "// Frontend implementation / Design collaboration",
  "tags": [
    "Hugo",
    "Go templates",
    "SCSS",
    "GitLab CI/CD"
  ]
},
{
  "icon": "ti-building-bank",
  "type": "XLAB / Public-sector project",
  "name": "National Government Portal",
  "description": "Added features to an existing Slovenian government portal using Angular. Contributed frontend development to a service used by public-sector institutions, businesses, and individuals.",
  "note": "// Angular feature development / Existing platform",
  "tags": [
    "Angular",
    "TypeScript",
    "SCSS"
  ]
},
{
  "icon": "ti-users",
  "type": "XLAB / B2B platform",
  "name": "B2B Platform Features",
  "description": "Built new pages and features and integrated backend APIs for a B2B platform. Worked in a team of three engineers, contributing to the Vue frontend.",
  "note": "// Team contribution / Pages and API integration",
  "tags": [
    "Vue",
    "JavaScript",
    "REST APIs",
    "SCSS"
  ]
},
{
  "icon": "ti-device-desktop-code",
  "type": "XLAB / Technology client project",
  "name": "React Application Frontend",
  "description": "Independently built the complete frontend of a technology client project serving customers in Germany, translating requirements into a React interface.",
  "note": "// Independent frontend delivery",
  "tags": [
    "React",
    "JavaScript",
    "SCSS"
  ]
},
{
  "icon": "ti-shield-lock",
  "type": "XLAB / EU research project",
  "name": "Privacy-focused Data Platform",
  "description": "Contributed to the frontend of an EU Horizon 2020 research platform for privacy-preserving personal data sharing. Worked within the research team on the application interface.",
  "note": "// Frontend contribution / EU research",
  "tags": [
    "Frontend development",
    "Data sharing",
    "Privacy"
  ]
},
  ...personalProjects
];

