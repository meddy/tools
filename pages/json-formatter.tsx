import clsx from "clsx";
import type { NextPage } from "next";
import { useState } from "react";

import ToolLayout from "../components/ToolLayout";
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
    <ToolLayout title="JSON Formatter">
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
    </ToolLayout>
  );
};

export default JsonFormatter;
