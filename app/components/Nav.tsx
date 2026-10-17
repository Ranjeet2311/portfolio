import type { NavItem } from "../types/portfolio";
import { Icon } from "./ui/Icon";
import styles from "./Nav.module.scss";

export type NavProps = {
  items: NavItem[];
  activeId: string;
  isScrolled: boolean;
  theme: "forest" | "ocean";
  onThemeToggle: () => void;
};

export function Nav({ items, activeId, isScrolled, theme, onThemeToggle }: NavProps) {
  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`} id="nav">
      <a className={styles.logo} href="#hero">
        <span className={styles.logoDot} />
        ranjeet.dev
      </a>

      <button
        aria-label="Toggle color theme"
        className={styles.themeToggle}
        onClick={onThemeToggle}
        type="button"
      >
        {theme === "forest" ? "Ocean" : "Forest"}
      </button>

      <div className={styles.links}>
        {items.map((item) => {
          const id = item.href.slice(1);

          return (
            <a
              className={`${styles.link} ${activeId === id ? styles.active : ""}`}
              href={item.href}
              key={item.href}
            >
              <Icon name={item.icon} />
              {item.label}
            </a>
          );
        })}
      </div>

      <a className={styles.cta} href="mailto:ranjeet@example.com?subject=Let's work together">
        <Icon name="ti-send" />
        Hire me
      </a>
    </nav>
  );
}
