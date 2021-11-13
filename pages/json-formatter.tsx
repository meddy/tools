import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/JsonFormatter.module.css";

const JsonFormatter: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>JSON Formatter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/">
          <a>&larr; Tools</a>
        </Link>
        <h1>JSON Formatter</h1>
        <textarea className={styles.input}></textarea>
        <div>
          <button>Pretty</button>
          <button>Compact</button>
        </div>
      </main>
    </div>
  );
};

export default JsonFormatter;
