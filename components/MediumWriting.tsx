import { ArrowUpRight } from "lucide-react";
import styles from "./MediumWriting.module.css";

const PROFILE_URL = "https://medium.com/@shahmaulin92";
const FEED_URL = "https://medium.com/feed/@shahmaulin92";

type MediumPost = {
  title: string;
  href: string;
  publishedAt: string;
  categories: string[];
};

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function tag(block: string, name: string) {
  const match = block.match(new RegExp(`<${name}>([\\s\\S]*?)<\\/${name}>`, "i"));
  return match ? decodeXml(match[1]) : "";
}

function parseFeed(xml: string): MediumPost[] {
  return Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/gi))
    .slice(0, 4)
    .map((match) => {
      const block = match[1];
      const categories = Array.from(
        block.matchAll(/<category>([\s\S]*?)<\/category>/gi)
      )
        .map((category) => decodeXml(category[1]))
        .filter(Boolean)
        .slice(0, 2);

      return {
        title: tag(block, "title"),
        href: tag(block, "link"),
        publishedAt: tag(block, "pubDate"),
        categories,
      };
    })
    .filter((post) => post.title && post.href);
}

async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const response = await fetch(FEED_URL, {
      next: { revalidate: 21600 },
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!response.ok) return [];
    return parseFeed(await response.text());
  } catch {
    return [];
  }
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Medium";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(date);
}

export async function MediumWriting() {
  const posts = await getMediumPosts();

  return (
    <section className={styles.section} aria-label="Writing on Medium">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Writing</span>
          <span className={styles.rule} aria-hidden />
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.allLink}
          >
            All on Medium
            <ArrowUpRight size={13} aria-hidden />
          </a>
        </div>

        {posts.length > 0 ? (
          <div className={styles.grid}>
            {posts.map((post) => (
              <a
                key={post.href}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.article}
              >
                <div className={styles.meta}>
                  <span>{formatDate(post.publishedAt)}</span>
                  {post.categories.length > 0 && (
                    <span>{post.categories.join(" · ")}</span>
                  )}
                </div>
                <h3 className={styles.title}>{post.title}</h3>
                <span className={styles.readLink}>
                  Read article
                  <ArrowUpRight size={13} aria-hidden />
                </span>
              </a>
            ))}
          </div>
        ) : (
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.fallback}
          >
            <span>I write about data, AI, products and the decisions behind them.</span>
            <span className={styles.readLink}>
              Read on Medium
              <ArrowUpRight size={13} aria-hidden />
            </span>
          </a>
        )}
      </div>
    </section>
  );
}
