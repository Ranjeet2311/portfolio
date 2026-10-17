import type { FeaturedProject, ProjectItem } from "../types/portfolio";
import { Icon } from "./ui/Icon";
import { Pills } from "./ui/Pills";
import styles from "./Projects.module.scss";

export type ProjectsProps = {
  featured: FeaturedProject;
  projects: ProjectItem[];
};

export function Projects({ featured, projects }: ProjectsProps) {
  return (
    <section className="section tinted" id="projects">
      <div className="eyebrow reveal">04 - Client work & projects</div>
      <h2 className="sectionHeading reveal reveal-delay-1">
        Things I&apos;ve <i>built</i> - for clients and myself
      </h2>
      <div className={`${styles.sub} reveal reveal-delay-2`}>
        <Icon name="ti-lock" />
        Some client work is covered by NDA, shared here at a level clients are comfortable with.
      </div>

      <div className={styles.grid}>
        <article className={`${styles.featured} reveal`}>
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

        {projects.map((project, index) => (
          <a
            className={`${styles.card} reveal reveal-delay-${Math.min(index + 1, 4)}`}
            href={project.href}
            key={project.name}
          >
            <div className={styles.cardTop}>
              <div className={styles.icon}>
                <Icon name={project.icon} />
              </div>
              <div className={styles.arrow}>
                <Icon name="ti-arrow-up-right" />
              </div>
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
          </a>
        ))}
      </div>
    </section>
  );
}
