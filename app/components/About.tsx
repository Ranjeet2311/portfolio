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
        From websites to <i>application architecture</i>
      </h2>

      <div className={styles.grid}>
        <div className="reveal reveal-delay-2">
          <p className={styles.copy}>
            I started with websites more than ten years ago and moved into web applications.
            Today I lead the frontend of a multi-tenant SaaS platform at Soamed, making the
            architecture decisions and building authentication, organization switching, and
            role-aware interfaces.
          </p>
          <p className={styles.copy}>
            My specialty is <strong>frontend architecture, backed by full-stack delivery</strong>.
            I built a patient recovery app across the interface, API routes, and SQL database.
            Earlier, I worked in XLAB&apos;s research team on Vue, Angular, and React applications
            for businesses, public institutions, and European projects.
          </p>
          <p className={styles.copy}>
            Alongside my main role, I take on <strong>independent projects of any size</strong>:
            a new web app, a bug fix, extra features, or a small business website. I work with
            clients to choose an approach that fits the problem and budget, including Hugo
            and WordPress when a simpler site is enough.
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
