import type { NextPage } from "next";
import Head from "next/head";
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
            <div>JSON Formatter</div>
            <div>&rarr;</div>
          </a>

          <a href="/url-encoder" className={styles.card}>
            <div>URL Decode/Encode</div>
            <div>&rarr;</div>
          </a>

          <a href="/diff-checker" className={styles.card}>
            <div>Diff Checker</div>
            <div>&rarr;</div>
          </a>

          <a href="/alphabetizer" className={styles.card}>
            <div>Alphabetizer</div>
            <div>&rarr;</div>
          </a>
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
