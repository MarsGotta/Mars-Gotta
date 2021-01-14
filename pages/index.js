import Head from "next/head";
import styles from "../styles/Home.module.css";
import MarsButton from "../components/mars-button/MarsButton.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Mars Gotta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hey, soy Mars</h1>
        <h2 className={styles.subtitle}>
          <span className={styles.red}>Front-end</span> Developer
        </h2>

        <p className={styles.description}>
          Me gusta la física, la programación, escribir, los videojuegos, tengo
          un zoológico en mi casa y 18 tatuajes.
        </p>

        <div>
          <MarsButton className={styles.primary}>Más sobre mi</MarsButton>
          <MarsButton secondary={true}>Contacto</MarsButton>
        </div>
      </main>
    </div>
  );
}
