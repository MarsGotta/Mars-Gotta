import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi I'm <a href="#">Mars Gotta!</a>
        </h1>

        <p className={styles.description}>
          And this is my <code className={styles.code}>portfolio</code>
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h3>About me &rarr;</h3>
            <p>
              This is a description <i>(in construction)</i>
            </p>
          </a>

          <a href="/courses-talks" className={styles.card}>
            <h3>Courses and Talks &rarr;</h3>
            <p>
              This is a description <i>(in construction)</i>
            </p>
          </a>

          <a href="/own-projects" className={styles.card}>
            <h3>Own Projects &rarr;</h3>
            <p>
              This is a description <i>(in construction)</i>
            </p>
          </a>

          <a href="/mars-lab" className={styles.card}>
            <h3>Mars Lab &rarr;</h3>
            <p>
              This is a description <i>(in construction)</i>
            </p>
          </a>

          <a href="/website" className={styles.card}>
            <h3>About this website &rarr;</h3>
            <p>
              This is a description <i>(in construction)</i>
            </p>
          </a>

          <a href="/contact" className={styles.card}>
            <h3>Contact me &rarr;</h3>
            <p>
              This is a description <i>(in construction)</i>
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Mars Gotta
        </a>
      </footer>
    </div>
  );
}
