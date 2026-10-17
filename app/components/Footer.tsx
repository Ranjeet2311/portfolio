import { Icon } from "./ui/Icon";
import styles from "./Footer.module.scss";

export type FooterProps = {
  year: number;
};

export function Footer({ year }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Icon name="ti-code" />
        ranjeet<em>.dev</em> / © {year} / Built with intention
      </div>
      <div className={styles.right}>
        <a href="https://github.com/ranjeet2311" rel="noopener" target="_blank">
          <Icon name="ti-brand-github" />
          GitHub
        </a>
        <a href="https://linkedin.com/in/ranjeet" rel="noopener" target="_blank">
          <Icon name="ti-brand-linkedin" />
          LinkedIn
        </a>
        <a href="mailto:ranjeet@example.com">
          <Icon name="ti-mail" />
          Contact
        </a>
      </div>
    </footer>
  );
}
