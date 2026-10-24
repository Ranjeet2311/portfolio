import type { Metadata } from "next";
import Link from "next/link";
import { Projects } from "../components/Projects";
import { Icon } from "../components/ui/Icon";
import { featuredProject, projects } from "../data/projects";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Projects | Ranjeet Kumar",
  description: "Explore my professional work at Soamed and XLAB, plus personal projects with live demos and source code.",
};

export default function ProjectsPage() {
  return (
    <main>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          <Icon name="ti-code" /> ranjeet.dev
        </Link>
        <Link href="/#projects">
          <Icon name="ti-arrow-left" /> Back to portfolio
        </Link>
      </header>
      <Projects featured={featuredProject} projects={projects} archive />
    </main>
  );
}
