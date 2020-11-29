import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simon Wallström</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Simon Wallström</h1>
        <p className={styles.description}>New site in progress...</p>
      </main>
    </div>
  );
}
