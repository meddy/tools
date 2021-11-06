import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
          <a href="/json-formatter" className={styles.card}>
            <h2>JSON Formatter &rarr;</h2>
          </a>

          <a href="/url-encoder" className={styles.card}>
            <h2>URL Decode/Encode &rarr;</h2>
          </a>

          <a href="/diff-checker" className={styles.card}>
            <h2>Diff Checker &rarr;</h2>
          </a>

          <a href="/alphabetizer" className={styles.card}>
            <h2>Alphabetizer &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/meddy/tools"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </footer>
    </div>
  );
};

export default Home;
