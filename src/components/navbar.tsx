import React from "react";
import Link from "next/link";
import styles from "@/styles/NavBar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <p className={styles.p}>
        <Link passHref={true} href="/">
          <a className={styles.a}>Home</a>
        </Link>
      </p>
      <p className={styles.p}>
        <Link passHref={true} href="/posts">
          <a className={styles.a}>Posts</a>
        </Link>
      </p>
      <p className={styles.p}>
        <Link passHref={true} href="/projects">
          <a className={styles.a}>Projects</a>
        </Link>
      </p>
    </nav>
  );
};
