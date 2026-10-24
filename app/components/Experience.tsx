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
        Experience from <i>2014 to now</i>
      </h2>
      <p className="sectionSub reveal reveal-delay-2">
        Frontend architecture, full-stack client delivery, and web products built across India and
        Slovenia.
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
                <span>{item.company}</span>
                {item.dates ? <span className={styles.dates}>· {item.dates}</span> : null}
              </div>
              <p className={styles.note}>{item.note}</p>
              <Pills items={item.tags} mutedFrom={4} />
            </div>
          </article>
        ))}
      </div>

      <div className={`${styles.details} reveal`}>
        <div>
          <Icon name="ti-school" />
          <div>
            <h3>Education</h3>
            <p>BA Programme, Delhi University, 2014</p>
          </div>
        </div>
        <div>
          <Icon name="ti-language" />
          <div>
            <h3>Languages</h3>
            <p>English (native or bilingual), Hindi (native), Slovenian (elementary)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
