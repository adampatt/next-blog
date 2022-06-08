import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";
import Portfolio from "@/src/components/portfolio";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <h1>Blog Posts</h1>
      <Articles posts={posts} />
      <Portfolio />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 5)
    .map((post) => post.meta);

  return { props: { posts } };
}
