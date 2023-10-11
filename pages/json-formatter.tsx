import clsx from "clsx";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import styles from "../styles/Tool.module.css";

const JsonFormatter: NextPage = () => {
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleFormat = (stringify: (json: any) => string) => () => {
    if (value === "") {
      return;
    }

    try {
      setValue(stringify(JSON.parse(value)));
    } catch (error) {
      setIsInvalid(true);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>JSON Formatter</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={styles.main}>
        <Link href="/">&larr; Tools</Link>
        <h1>JSON Formatter</h1>
        <div className={clsx(styles.errorMsg, { [styles.hidden]: !isInvalid })}>
          Invalid JSON
        </div>
        <textarea
          className={clsx(styles.input, { [styles.error]: isInvalid })}
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
            className={styles.control}
            onClick={handleFormat((json) => JSON.stringify(json, null, 2))}
          >
            Pretty
          </button>
          <button
            className={styles.control}
            onClick={handleFormat((json) => JSON.stringify(json))}
          >
            Compact
          </button>
        </div>
      </main>
    </div>
  );
};

export default JsonFormatter;
