import Link from "next/link";
import type { PostMeta } from "@/src/api";
import styles from "@/styles/Articles.module.css";
import { Title, Tags, Text } from "@/styles/articles.style";
export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <Title>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </Title>
          <Text>{post.excerpt}</Text>
          <Tags>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </Tags>
        </li>
      ))}
    </ul>
  );
}
