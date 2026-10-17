import type { ReactNode } from "react";

export type IconName = `ti-${string}`;

export type NavItem = {
  label: string;
  href: `#${string}`;
  icon: IconName;
};

export type StatItem = {
  icon: IconName;
  value: string;
  suffix?: string;
  label: string;
};

export type StrengthItem = {
  icon: IconName;
  title: string;
  description: string;
};

export type StackItem = {
  label: string;
  level?: "high" | "medium" | "normal";
};

export type StackGroup = {
  icon: IconName;
  label: string;
  items: StackItem[];
};

export type ExperienceItem = {
  period: string;
  current?: boolean;
  role: string;
  roleIcon: IconName;
  company: string;
  companyIcon: IconName;
  note: string;
  tags: string[];
};

export type ProjectItem = {
  href: string;
  icon: IconName;
  type: string;
  name: string;
  description: string;
  note: string;
  tags: string[];
};

export type FeaturedProject = {
  label: string;
  name: ReactNode;
  description: string;
  note: string;
  icon: IconName;
  tags: string[];
};

export type BlogPost = {
  href: string;
  icon: IconName;
  tag: string;
  title: ReactNode;
  excerpt: string;
  date: string;
  readTime: string;
  category?: string;
};

export type ContactLink = {
  href?: string;
  icon: IconName;
  label: string;
  value: string;
};
