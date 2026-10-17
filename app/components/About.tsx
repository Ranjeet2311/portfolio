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
        I don&apos;t just write code -
        <br />I <i>architect solutions</i> that endure.
      </h2>

      <div className={styles.grid}>
        <div className="reveal reveal-delay-2">
          <p className={styles.copy}>
            With over a decade in full-stack development, I&apos;ve moved beyond writing features. I{" "}
            <strong>own the full delivery loop</strong>: translating product requirements into
            architecture, then shipping, monitoring, and iterating in production.
          </p>
          <p className={styles.copy}>
            My approach is <strong>frontend-fluent and backend-grounded</strong>. I know when to
            reach for Next.js, Angular, React, or Vue, and how to back each with API and data
            decisions that will not need rewriting in six months.
          </p>
          <p className={styles.copy}>
            What sets me apart is <strong>craft and communication</strong>. I write code the next
            engineer can live with, and I speak both product and engineering fluently.
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
