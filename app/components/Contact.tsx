import type { ContactLink } from "../types/portfolio";
import { Icon } from "./ui/Icon";
import styles from "./Contact.module.scss";

export type ContactProps = {
  links: ContactLink[];
};

export function Contact({ links }: ContactProps) {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.grid}>
        <div className="reveal">
          <div className={styles.eyebrow}>06 - Contact</div>
          <h2 className={styles.heading}>
            Let&apos;s build something <i>great</i> together
          </h2>
          <p className={styles.sub}>
            Open to senior full-stack roles, technical lead positions, and long-term freelance
            collaborations. Based in Ljubljana, working remotely across Europe.
          </p>
          <div className={styles.hint}>
            <Icon name="ti-info-circle" />
            Clicking below opens your email client: <span>ranjeet@example.com</span>
          </div>
          <a
            className={styles.button}
            href="mailto:ranjeet@example.com?subject=Let's work together&body=Hi Ranjeet,%0D%0A%0D%0AI came across your portfolio and would love to connect."
          >
            <Icon name="ti-mail" />
            Send me a message
          </a>
        </div>

        <div className={`${styles.links} reveal reveal-delay-2`}>
          {links.map((link) => {
            const content = (
              <>
                <div className={styles.linkIcon}>
                  <Icon name={link.icon} />
                </div>
                <div>
                  <div className={styles.linkLabel}>{link.label}</div>
                  <div className={styles.linkValue}>{link.value}</div>
                </div>
                {link.href ? <Icon className={styles.linkArrow} name="ti-arrow-up-right" /> : null}
              </>
            );

            return link.href ? (
              <a className={styles.link} href={link.href} key={link.label} rel="noopener" target="_blank">
                {content}
              </a>
            ) : (
              <div className={styles.link} key={link.label}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
