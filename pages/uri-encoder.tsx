import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import styles from "../styles/Tool.module.css";

const UriEncoder: NextPage = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>URI Encoder</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={styles.main}>
        <Link href="/">
          <a>&larr; Tools</a>
        </Link>
        <h1>URI Encoder</h1>
        <textarea
          className={styles.input}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
        <div>
          <button
            className={styles.control}
            onClick={() => {
              setValue(encodeURIComponent(value));
            }}
          >
            Encode
          </button>
          <button
            className={styles.control}
            onClick={() => {
              setValue(decodeURIComponent(value));
            }}
          >
            Decode
          </button>
        </div>
      </main>
    </div>
  );
};

export default UriEncoder;
