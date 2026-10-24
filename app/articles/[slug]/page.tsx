import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "../../components/ui/Icon";
import { posts } from "../../data/blog-posts";
import { ArticleNavigation } from "./ArticleNavigation";
import styles from "./page.module.scss";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) return {};

  return {
    title: `${post.titleText} | Ranjeet Kumar`,
    description: post.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  const currentIndex = posts.findIndex((item) => item.slug === slug);
  const nextPost = posts[currentIndex + 1] ?? null;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">
          <Icon name="ti-code" />
          ranjeet<em>.dev</em>
        </Link>
        <ArticleNavigation
          currentSlug={post.slug}
          currentTitle={post.titleText}
          nextArticle={nextPost ? { href: nextPost.href, title: nextPost.titleText } : null}
        />
      </header>

      <article>
        <header className={styles.articleHeader}>
          <div className={styles.category}>
            <Icon name={post.icon} />
            {post.category ?? post.tag}
          </div>
          <h1>{post.title}</h1>
          <p className={styles.lede}>{post.excerpt}</p>
          <div className={styles.meta}>
            <span><Icon name="ti-calendar" />{post.date}</span>
            {post.readTime && <span><Icon name="ti-clock" />{post.readTime}</span>}
            <span><Icon name="ti-user" />Ranjeet Kumar</span>
          </div>
        </header>

        {post.sourceHref ? (
          <div className={styles.articleHeader}>
            <p className={styles.lede}>This is an article preview. The original is published on LinkedIn; the link below opens my article collection.</p>
            <a className="button primaryButton" href={post.sourceHref} target="_blank" rel="noopener noreferrer">
              Browse my LinkedIn articles <Icon name="ti-external-link" />
            </a>
          </div>
        ) : <div className={styles.articleLayout}>
          <aside className={styles.aside}>
            <span>In this article</span>
            <ol>
              {post.sections.map((section) => (
                <li key={section.heading}><a href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}>{section.heading}</a></li>
              ))}
            </ol>
          </aside>

          <div className={styles.content}>
            {post.sections.map((section) => {
              const id = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
              return (
                <section id={id} key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                </section>
              );
            })}

            <div className={styles.articleEnd}>
              <span>Thanks for reading.</span>
              <Link href="/articles">Explore more articles <Icon name="ti-arrow-right" /></Link>
            </div>
          </div>
        </div>}
      </article>

      <footer className={styles.footer}>
        <span>Ranjeet Kumar · Engineering notes</span>
        <Link href="/">Portfolio</Link>
      </footer>
    </main>
  );
}
