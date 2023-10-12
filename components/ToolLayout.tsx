import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

import styles from "../styles/Tool.module.css";

export interface ToolLayoutProps {
  title: string;
  children: ReactNode;
}

const ToolLayout = ({ title, children }: ToolLayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={styles.main}>
        <h1>{title}</h1>
        <Link href="/">&larr; Tools</Link>
        {children}
      </main>
    </div>
  );
};

export default ToolLayout;
