import Head from "next/head";
import { useEffect, useState }  from 'react';
import { useThemeContext, setStorageTheme, getStorageTheme } from "../core/theme-context";

import Layout from "./../layout/Layout";
import styles from "../styles/Website.module.css";

export default function Website() {
  const config = { title: "Esta web" };
  const svgList = ["html", "css", "javascript", "react", "next", "node"];
  const { variableState, setVariableState } = useThemeContext();
  const [ theme, setTheme ] = useState()

  const handleSwitch = (theme) => {
    setVariableState(theme);
    setStorageTheme(theme);
  };

  useEffect(async () => {
    setTheme(variableState || "light-theme");
  }, [variableState]);

  return (
    <Layout config={config} theme={variableState} onSwitch={handleSwitch}>
      <Head>
        <title>{config.title} | Mars Gotta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className={styles["website-text"]}>
        Esta web está desarrollada con amor desde 0, de forma artesanal y con las siguientes tecnologías.
      </p>
      <article className={styles["image-box"]}>
        {svgList.map((name, key) => (
          <img
            key={key}
            className={styles["website-image"]}
            src={`${name}-${theme}.png`}
          ></img>
        ))}
      </article>
    </Layout>
  );
}
