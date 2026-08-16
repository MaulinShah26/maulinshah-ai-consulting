import { ArrowUpRight } from "lucide-react";
import styles from "./MediumWriting.module.css";

const PROFILE_URL = "https://medium.com/@shahmaulin92";
const FEED_URL = "https://medium.com/feed/@shahmaulin92";

type MediumPost = {
  title: string;
  href: string;
  publishedAt: string;
  categories: string[];
  image?: string;
  excerpt: string;
};

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .trim();
}

function tag(block: string, name: string) {
  const escaped = name.replace(":", "\\:");
  const match = block.match(
    new RegExp(`<${escaped}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escaped}>`, "i")
  );
  return match ? decodeXml(match[1]) : "";
}

function stripHtml(value: string) {
  return decodeXml(
    value
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
  );
}

function firstImage(html: string) {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1];
}

function makeExcerpt(html: string, title: string) {
  let text = stripHtml(html);
  if (text.toLowerCase().startsWith(title.toLowerCase())) {
    text = text.slice(title.length).trim();
  }
  if (text.length <= 220) return text;
  return `${text.slice(0, 217).trimEnd()}…`;
}

function parseFeed(xml: string): MediumPost[] {
  return Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/gi))
    .map((match) => {
      const block = match[1];
      const title = tag(block, "title");
      const content = tag(block, "content:encoded") || tag(block, "description");
      const categories = Array.from(
        block.matchAll(/<category>([\s\S]*?)<\/category>/gi)
      )
        .map((category) => decodeXml(category[1]))
        .filter(Boolean)
        .slice(0, 3);

      return {
        title,
        href: tag(block, "link"),
        publishedAt: tag(block, "pubDate"),
        categories,
        image: firstImage(content),
        excerpt: makeExcerpt(content, title),
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
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export async function MediumWriting() {
  const posts = await getMediumPosts();

  return (
    <section className={styles.page} aria-label="Writing on Medium">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Writing</span>
          <span className={styles.rule} aria-hidden />
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mediumLink}
          >
            Follow on Medium
            <ArrowUpRight size={14} aria-hidden />
          </a>
        </div>

        <div className={styles.intro}>
          <h1>Ideas I’m thinking through.</h1>
          <p>
            Notes on data, AI, product strategy, growth and the decisions that sit between them.
          </p>
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
                <div className={styles.art}>
                  {post.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.image} alt="" loading="lazy" />
                  ) : (
                    <div className={styles.artFallback} aria-hidden>
                      <span>{post.categories[0] || "Writing"}</span>
                      <strong>MS</strong>
                    </div>
                  )}
                </div>

                <div className={styles.articleBody}>
                  <div className={styles.meta}>
                    <span>{formatDate(post.publishedAt)}</span>
                    {post.categories.length > 0 && (
                      <span>{post.categories.join(" · ")}</span>
                    )}
                  </div>
                  <h2>{post.title}</h2>
                  {post.excerpt && <p>{post.excerpt}</p>}
                  <span className={styles.readLink}>
                    Read on Medium
                    <ArrowUpRight size={14} aria-hidden />
                  </span>
                </div>
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
            <span>Medium is not responding right now. My writing is still available there.</span>
            <span className={styles.readLink}>
              Open Medium
              <ArrowUpRight size={14} aria-hidden />
            </span>
          </a>
        )}
      </div>
    </section>
  );
}
