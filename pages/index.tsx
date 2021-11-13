import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tools</h1>

        <div className={styles.grid}>
          <Link href="/json-formatter">
            <a className={styles.card}>
              <div>JSON Formatter</div>
              <div>&rarr;</div>
            </a>
          </Link>

          <Link href="/url-encoder">
            <a className={styles.card}>
              <div>URL Decode/Encode</div>
              <div>&rarr;</div>
            </a>
          </Link>

          <Link href="/diff-checker">
            <a className={styles.card}>
              <div>Diff Checker</div>
              <div>&rarr;</div>
            </a>
          </Link>

          <Link href="/alphabetizer">
            <a className={styles.card}>
              <div>Alphabetizer</div>
              <div>&rarr;</div>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/meddy/tools"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github &#8599;
        </a>
      </footer>
    </div>
  );
};

export default Home;
