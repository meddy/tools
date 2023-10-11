import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tools</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tools</h1>

        <div className={styles.grid}>
          <Link className={styles.card} href="/json-formatter">
            <div>JSON Formatter</div>
            <div>&rarr;</div>
          </Link>

          <Link className={styles.card} href="/uri-encoder">
            <div>URI Decode/Encode</div>
            <div>&rarr;</div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/meddy/tools"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github &#8599;
        </a>
      </footer>
    </div>
  );
};

export default Home;
