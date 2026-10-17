import type { ExperienceItem } from "../types/portfolio";
import { Icon } from "./ui/Icon";
import { Pills } from "./ui/Pills";
import styles from "./Experience.module.scss";

export type ExperienceProps = {
  items: ExperienceItem[];
};

export function Experience({ items }: ExperienceProps) {
  return (
    <section className="section white" id="experience">
      <div className="eyebrow reveal">03 - Experience</div>
      <h2 className="sectionHeading reveal reveal-delay-1">
        Where I&apos;ve <i>made an impact</i>
      </h2>
      <p className="sectionSub reveal reveal-delay-2">
        From individual contributor to full-stack lead, a record of consistent delivery across EU
        projects.
      </p>

      <div className={styles.list}>
        {items.map((item) => (
          <article className={`${styles.row} reveal`} key={`${item.company}-${item.period}`}>
            <div>
              <div className={styles.period}>
                <Icon name="ti-calendar-event" />
                {item.period}
              </div>
              {item.current ? <span className={styles.current}>Current</span> : null}
            </div>
            <div>
              <h3 className={styles.role}>
                <Icon name={item.roleIcon} />
                {item.role}
              </h3>
              <div className={styles.company}>
                <Icon name={item.companyIcon} />
                {item.company}
              </div>
              <p className={styles.note}>{item.note}</p>
              <Pills items={item.tags} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
