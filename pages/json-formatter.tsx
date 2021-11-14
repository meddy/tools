import clsx from "clsx";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import styles from "../styles/JsonFormatter.module.css";

const JsonFormatter: NextPage = () => {
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>JSON Formatter</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={styles.main}>
        <Link href="/">
          <a>&larr; Tools</a>
        </Link>
        <h1>JSON Formatter</h1>
        {isInvalid && <div className={styles.errorMsg}>Invalid JSON</div>}
        <textarea
          className={styles.input}
          onChange={(event) => {
            setValue(event.target.value);
            if (isInvalid) {
              setIsInvalid(false);
            }
          }}
          value={value}
        />
        <div>
          <button
            onClick={() => {
              try {
                const json = JSON.parse(value);
                setValue(JSON.stringify(json, null, 2));
              } catch (error) {
                setIsInvalid(true);
              }
            }}
          >
            Pretty
          </button>
          <button
            onClick={() => {
              try {
                const json = JSON.parse(value);
                setValue(JSON.stringify(json));
              } catch (error) {
                setIsInvalid(true);
              }
            }}
          >
            Compact
          </button>
        </div>
      </main>
    </div>
  );
};

export default JsonFormatter;
