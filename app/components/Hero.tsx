import type { StatItem } from "../types/portfolio";
import { Icon } from "./ui/Icon";
import styles from "./Hero.module.scss";

export type HeroProps = {
  stats: StatItem[];
};

export function Hero({ stats }: HeroProps) {
  return (
    <section className={`${styles.hero}`} id="hero">
      <div className={styles.left}>
        <div>
          <div className={styles.available}>
            <span className={styles.availableDot} />
            Open to work / Remote / EU
          </div>
          <div className={styles.tag}>Senior Full Stack Engineer</div>
          <h1 className={styles.heading}>
            Crafting web apps that <br /> <i>scale</i> and <i>last</i>
          </h1>
          <p className={styles.bio}>
            Full-stack engineer based in Ljubljana, with 10+ years building
            websites and web applications. I lead frontend architecture at
            Soamed, from authentication and organization access to the details
            of the interface.
          </p>
        </div>

        <div>
          {/* <div className={styles.stats}>
            {stats.map((stat) => (
              <div className={styles.stat} key={stat.label}>
                <Icon name={stat.icon} />
                <div className={styles.statValue}>
                  {stat.value}
                  {stat.suffix ? <sup>{stat.suffix}</sup> : null}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div> */}
          <div className={styles.buttons}>
            <a className="button primaryButton" href="#projects">
              <Icon name="ti-arrow-right" />
              View my work
            </a>
            <a
              className="button ghostButton"
              href="/Ranjeet-Kumar-CV.pdf"
              download
            >
              <Icon name="ti-download" />
              Download CV
            </a>
            <a className="button ghostButton" href="#contact">
              <Icon name="ti-mail" />
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.terminal}>
          <div className={styles.termBar}>
            <span className={`${styles.termDot} ${styles.red}`} />
            <span className={`${styles.termDot} ${styles.yellow}`} />
            <span className={`${styles.termDot} ${styles.green}`} />
            <span className={styles.termTitle}>ranjeet ~ zsh</span>
          </div>
          <div className={styles.termBody}>
            <div className={styles.comment}>// senior full stack engineer</div>
            <div className={styles.codeBlock}>
              <div>
                <span className={styles.keyword}>const</span>{" "}
                <span className={styles.white}>profile</span> = {"{"}
              </div>
              <div className={styles.codeProperties}>
                <div>
                  <span className={styles.keyword}>name</span>:{" "}
                  <span className={styles.string}>"Ranjeet"</span>,
                </div>
                <div>
                  <span className={styles.keyword}>role</span>:{" "}
                  <span className={styles.string}>
                    "Senior Full Stack Engineer"
                  </span>
                  ,
                </div>
                <div>
                  <span className={styles.keyword}>location</span>:{" "}
                  <span className={styles.string}>"Ljubljana, Slovenia"</span>,
                </div>
                <div>
                  <span className={styles.keyword}>experience</span>:{" "}
                  <span className={styles.number}>10</span>,{" "}
                  <span className={styles.comment}>// years</span>
                </div>
                <div>
                  <span className={styles.keyword}>stack</span>: [
                </div>
                <div className={styles.stackItems}>
                  {[
                    "Next.js",
                    "Angular",
                    "Vue",
                    "React",
                    "TypeScript",
                    "Node.js",
                    "Express",
                    "Docker",
                    "MongoDB",
                    "SQL",
                    "CI/CD",
                  ].map((technology, index, technologies) => (
                    <span className={styles.stackItem} key={technology}>
                      <span className={styles.string}>"{technology}"</span>
                      {index < technologies.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
                <div>],</div>
                <div>
                  <span className={styles.keyword}>openToWork</span>:{" "}
                  <span className={styles.boolean}>true</span>
                </div>
              </div>
              <div>{"};"}</div>
            </div>
            <div>
              <span className={styles.prompt} aria-hidden="true">
                &#x276F;
              </span>{" "}
              <span className={styles.string}>Ready to ship.</span>
              <span className={styles.cursor} aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className={styles.location}>
          <Icon name="ti-map-pin" />
          <span>
            Ljubljana, Slovenia / available across <b>Europe</b>
          </span>
        </div>
      </div>
    </section>
  );
}
