import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";
import { Title } from "../styles/articles.style";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Adam Pattison Portfolio</title>
      </Head>
      <nav>
        <Title>
          <p>Home</p>
        </Title>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
