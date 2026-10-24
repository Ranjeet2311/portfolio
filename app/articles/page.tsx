import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../components/ui/Icon";
import { posts } from "../data/blog-posts";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Articles | Ranjeet Kumar",
  description:
    "Article previews on state management, Hugo, Prisma, Kysely, and Cloudflare D1, with links to Ranjeet Kumar's LinkedIn writing.",
};

export default function ArticlesPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">
          <Icon name="ti-code" />
          ranjeet<em>.dev</em>
        </Link>
        <Link className={styles.back} href="/#blog">
          <Icon name="ti-arrow-left" />
          Back to portfolio
        </Link>
      </header>

      <section className={styles.hero}>
        <div className="eyebrow">Writing archive</div>
        <h1>
          Notes on <i>engineering</i> and craft
        </h1>
        <p>
          Writing on state management, Hugo, and Cloudflare D1. Browse the previews here
          and find the original articles in my LinkedIn writing collection.
        </p>
      </section>

      <section className={styles.archive} aria-labelledby="articles-heading">
        <div className={styles.archiveHeader}>
          <h2 id="articles-heading">All articles</h2>
          <span>{posts.length} articles</span>
        </div>

        <div className={styles.grid}>
          {posts.map((post, index) => (
            <Link className={`${styles.card} ${index === 0 ? styles.featured : ""}`} href={post.href} key={post.slug}>
              <div className={styles.visual}>
                <Icon name={post.icon} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className={styles.body}>
                <div className={styles.tag}>
                  <Icon name="ti-tag" />
                  {post.tag}
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className={styles.meta}>
                  <span>
                    <Icon name="ti-calendar" />
                    {post.date}
                  </span>
                  {post.readTime && <span>
                    <Icon name="ti-clock" />
                    {post.readTime}
                  </span>}
                  {post.category ? (
                    <span>
                      <Icon name="ti-bookmark" />
                      {post.category}
                    </span>
                  ) : null}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Ranjeet Kumar · Engineering notes</span>
        <Link href="/">Portfolio</Link>
      </footer>
    </main>
  );
}
