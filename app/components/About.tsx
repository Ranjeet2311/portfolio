import type { StrengthItem } from "../types/portfolio";
import { Icon } from "./ui/Icon";
import styles from "./About.module.scss";

export type AboutProps = {
  strengths: StrengthItem[];
};

export function About({ strengths }: AboutProps) {
  return (
    <section className="section white" id="about">
      <div className="eyebrow reveal">01 - About me</div>
      <h2 className="sectionHeading reveal reveal-delay-1">
        Solving real <i>engineering challenges</i>
      </h2>

      <div className={styles.grid}>
        <div className="reveal reveal-delay-2">
          <p className={styles.copy}>
            Over ten years of building software, I&apos;ve learned that the hardest work is
            understanding the problem, deciding what matters, and making the pieces work
            together. I turn product requirements into practical technical decisions,
            with attention to the people using and maintaining the system.
          </p>
          <p className={styles.copy}>
            I enjoy working through problems where <strong>user needs, system behaviour,
            and technical constraints meet</strong>. Whether I&apos;m designing access rules,
            connecting services, or investigating an unexpected failure, I look beyond
            the immediate task to understand how a change affects the whole system.
            I care about making software dependable and easier to work with as it evolves.
          </p>
          <p className={styles.copy}>
            My approach is to <strong>break complex problems into manageable decisions</strong>,
            weigh the trade-offs, and choose an approach that fits the constraints.
            I value clear communication, maintainable code, and following the work
            through testing, release, and production support.
          </p>
        </div>

        <div className="reveal reveal-delay-3">
          <div className={styles.label}>Core strengths</div>
          <div className={styles.strengths}>
            {strengths.map((strength) => (
              <article className={styles.card} key={strength.title}>
                <div className={styles.icon}>
                  <Icon name={strength.icon} />
                </div>
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
