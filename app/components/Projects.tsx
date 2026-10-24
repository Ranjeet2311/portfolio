import type { FeaturedProject, ProjectItem } from "../types/portfolio";
import Link from "next/link";
import { Icon } from "./ui/Icon";
import { Pills } from "./ui/Pills";
import styles from "./Projects.module.scss";

export type ProjectsProps = {
  featured: FeaturedProject;
  projects: ProjectItem[];
  archive?: boolean;
};

export function Projects({
  featured,
  projects,
  archive = false,
}: ProjectsProps) {
  const displayedProjects = archive ? projects : projects.slice(0, 5);
  const reveal = archive ? "" : "reveal";
  const Heading = archive ? "h1" : "h2";
  return (
    <section className="section tinted" id="projects">
      <div className={`eyebrow ${reveal}`}>
        {archive ? "Project archive" : "04 - Selected work"}
      </div>
      <Heading className={`sectionHeading ${reveal} reveal-delay-1`}>
        {archive ? (
          <>
            All my <i>projects</i>
          </>
        ) : (
          <>
            Projects I&apos;ve <i>built and contributed to</i>
          </>
        )}
      </Heading>
      {archive && (
        <p className={styles.sub}>
          {projects.length + 1} projects across client work and personal builds.
        </p>
      )}
      <div className={`${styles.sub} ${reveal} reveal-delay-2`}>
        <Icon name="ti-lock" />
        Selected professional work is described without client names or public demos.
      </div>

      <div className={styles.grid}>
        <article className={`${styles.featured} ${reveal}`}>
          <div>
            <div className={styles.featuredTag}>
              <Icon name="ti-star" />
              {featured.label}
            </div>
            <h3 className={styles.featuredName}>{featured.name}</h3>
            <p className={styles.featuredDescription}>{featured.description}</p>
            <div className={styles.featuredNote}>{featured.note}</div>
            <Pills items={featured.tags} mutedFrom={3} />
          </div>
          <div className={styles.featuredVisual}>
            <Icon name={featured.icon} />
          </div>
        </article>

        {displayedProjects.map((project, index) => (
          <article
            className={`${styles.card} ${reveal} reveal-delay-${Math.min(index + 1, 4)}`}
            key={project.name}
          >
            <div className={styles.cardTop}>
              <div className={styles.icon}>
                <Icon name={project.icon} />
              </div>
              {project.href && (
                <a
                  className={styles.arrow}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} demo in a new tab`}
                >
                  <Icon name="ti-arrow-up-right" />
                </a>
              )}
            </div>
            <div className={styles.type}>
              <Icon name="ti-tag" />
              {project.type}
            </div>
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.note}>
              <Icon name="ti-terminal-2" />
              {project.note}
            </div>
            <Pills items={project.tags} mutedFrom={1} />
            {project.href && (
              <div className={styles.links}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} live demo (opens in a new tab)`}
                >
                  <Icon name="ti-external-link" /> Live demo
                </a>
                {project.code && <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} source code (opens in a new tab)`}
                >
                  <Icon name="ti-brand-github" /> Source code
                </a>}
              </div>
            )}
          </article>
        ))}
      </div>
      {!archive && projects.length > displayedProjects.length && (
        <div className={styles.viewMore}>
          <Link href="/projects">
            View all projects <Icon name="ti-arrow-right" />
          </Link>
        </div>
      )}
    </section>
  );
}
