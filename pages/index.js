import Head from "next/head";
import React, { useEffect } from "react";

import {
  useThemeContext,
  setStorageTheme,
  themes,
} from "../core/theme-context";

import styles from "../styles/Home.module.css";
import Layout from "../layout/Layout.jsx";
import MarsButton from "../components/mars-button/MarsButton.jsx";
import MarsStars from "../components/mars-stars/MarsStars";

export default function Home() {
  const { variableState, setVariableState } = useThemeContext();

  const handleSwitch = (theme) => {
    setVariableState(theme);
    setStorageTheme(theme);
  };

  return (
    <Layout landing theme={variableState} onSwitch={handleSwitch}>
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
            Me gusta la física, la programación, escribir, los videojuegos,
            tengo un zoológico en mi casa y 18 tatuajes.
          </p>

          <div className={styles["button-box"]}>
            <MarsButton className={styles.primary} href="/about">
              Más sobre mi
            </MarsButton>
            <MarsButton variant="secondary" href="/contact">
              Contacto
            </MarsButton>
          </div>
        </main>
        {variableState === themes.dark && (
          <MarsStars limit={10} className={styles["stars"]} />
        )}
      </div>
    </Layout>
  );
}
