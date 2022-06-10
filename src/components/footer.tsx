import React from "react";
import Link from "next/link";
import styles from "@/styles/footer.module.css";
type Props = {};

export const Footer = ({}: Props) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>
        <Link href="www.github.com/adampatt">
          <a className={styles.a}>Github</a>
        </Link>
      </p>
      <p className={styles.p}>
        <Link href="www.linkedin.com/in/adam-pattison">
          <a className={styles.a}>LinkedIn</a>
        </Link>
      </p>
      <p className={styles.p}>
        <Link href="www.twitter.com/madapatty">
          <a className={styles.a}>Twitter</a>
        </Link>
      </p>
      <p className={styles.p}>
        <Link href="mailto: adampattison08@gmail.com">
          <a className={styles.a}>Email</a>
        </Link>
      </p>
    </footer>
  );
};
