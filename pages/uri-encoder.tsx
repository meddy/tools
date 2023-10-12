import type { NextPage } from "next";
import { useState } from "react";

import ToolLayout from "../components/ToolLayout";
import styles from "../styles/Tool.module.css";

const UriEncoder: NextPage = () => {
  const [value, setValue] = useState("");

  return (
    <ToolLayout title="URI Encoder">
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
    </ToolLayout>
  );
};

export default UriEncoder;
