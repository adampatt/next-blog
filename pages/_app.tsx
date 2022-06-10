import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { Navbar } from "@/src/components/navbar";
import { Footer } from "../src/components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Adam Pattison Portfolio</title>
      </Head>
      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
