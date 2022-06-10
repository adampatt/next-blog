import Articles from "@/src/components/articles";
import { getAllPosts, PostMeta } from "@/src/api";

export default function FirstPost({ posts }: { posts: PostMeta[] }) {
  return <Articles posts={posts} />;
}

export async function getStaticProps() {
  const posts = getAllPosts().map((post) => post.meta);

  return { props: { posts } };
}
