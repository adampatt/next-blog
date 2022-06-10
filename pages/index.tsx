import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";
import Portfolio from "@/src/components/portfolio";
import { About } from "../src/components/about";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <About />
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
