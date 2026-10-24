import Link from "next/link";
import type { BlogPost } from "../types/portfolio";
import { Icon } from "./ui/Icon";
import styles from "./Blog.module.scss";

export type BlogProps = {
  posts: BlogPost[];
};

export function Blog({ posts }: BlogProps) {
  const [featured, ...regularPosts] = posts;

  return (
    <section className="section white" id="blog">
      <div className="eyebrow reveal">05 - Writing</div>
      <h2 className="sectionHeading reveal reveal-delay-1">
        Thoughts on <i>engineering</i> & craft
      </h2>
      <p className="sectionSub reveal reveal-delay-2">
        Writing on state management, static websites, and Cloudflare databases.
        Article previews are below; the originals are published on LinkedIn.
      </p>

      <div className={styles.grid}>
        {featured ? (
          <Link className={`${styles.featured} reveal`} href={featured.href}>
            <div className={styles.featuredImage}>
              <Icon name={featured.icon} />
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.featuredTag}>
                <Icon name="ti-star" />
                {featured.tag}
              </div>
              <h3 className={styles.featuredTitle}>{featured.title}</h3>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
              <div className={styles.featuredMeta}>
                <span>
                  <Icon name="ti-calendar" />
                  {featured.date}
                </span>
                {featured.readTime && <span>
                  <Icon name="ti-clock" />
                  {featured.readTime}
                </span>}
                {featured.category ? (
                  <span>
                    <Icon name="ti-tag" />
                    {featured.category}
                  </span>
                ) : null}
              </div>
              <div className={styles.read}>
                View article preview <Icon name="ti-arrow-right" />
              </div>
            </div>
          </Link>
        ) : null}

        {regularPosts.map((post, index) => (
          <Link
            className={`${styles.card} reveal reveal-delay-${Math.min(index + 1, 4)}`}
            href={post.href}
            key={`${post.tag}-${post.date}`}
          >
            <div className={styles.cardImage}>
              <Icon name={post.icon} />
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardTag}>
                <Icon name="ti-tag" />
                {post.tag}
              </div>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <div className={styles.cardMeta}>
                <span>
                  <Icon name="ti-calendar" />
                  {post.date}
                </span>
                {post.readTime && <span>
                  <Icon name="ti-clock" />
                  {post.readTime}
                </span>}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className={`${styles.cta} reveal`}>
        <Link className="button ghostButton" href="/articles">
          <Icon name="ti-pencil" />
          View all articles
        </Link>
      </div>
    </section>
  );
}
