"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "../../components/ui/Icon";
import styles from "./page.module.scss";

type ArticleTarget = {
  href: string;
  title: string;
};

type ArticleNavigationProps = {
  currentSlug: string;
  currentTitle: string;
  nextArticle: ArticleTarget | null;
};

const STORAGE_KEY = "ranjeet-previous-article";

export function ArticleNavigation({ currentSlug, currentTitle, nextArticle }: ArticleNavigationProps) {
  const [previous, setPrevious] = useState<ArticleTarget | null>(null);

  useEffect(() => {
    try {
      const stored = window.sessionStorage.getItem(STORAGE_KEY);
      const currentHref = `/articles/${currentSlug}`;

      if (stored) {
        const parsed = JSON.parse(stored) as ArticleTarget;
        if (parsed.href !== currentHref) setPrevious(parsed);
      }

      window.sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ href: currentHref, title: currentTitle }),
      );
    } catch {
      // Navigation still works when browser storage is unavailable.
    }
  }, [currentSlug, currentTitle]);

  return (
    <nav className={styles.navigation} aria-label="Article navigation">
      <Link className={styles.navLink} href="/articles">
        <Icon name="ti-arrow-left" />
        All articles
      </Link>
      {previous ? (
        <Link
          className={styles.navLink}
          href={previous.href}
          title={`Previously opened: ${previous.title}`}
        >
          <Icon name="ti-arrow-back-up" />
          Previous article
        </Link>
      ) : (
        <span className={`${styles.navLink} ${styles.disabled}`} title="Open another article first">
          <Icon name="ti-arrow-back-up" />
          Previous article
        </span>
      )}
      {nextArticle ? (
        <Link
          className={styles.navLink}
          href={nextArticle.href}
          title={`Next article: ${nextArticle.title}`}
        >
          Next article
          <Icon name="ti-arrow-right" />
        </Link>
      ) : (
        <span className={`${styles.navLink} ${styles.disabled}`} title="This is the final article">
          Next article
          <Icon name="ti-arrow-right" />
        </span>
      )}
    </nav>
  );
}
