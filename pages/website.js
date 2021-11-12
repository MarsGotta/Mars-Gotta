import Head from "next/head";
import { useThemeContext, setStorageTheme } from "../core/theme-context";

import Layout from "./../layout/Layout";
import styles from "../styles/Website.module.css";

export default function Website() {
  const config = { title: "Esta web" };
  const svgList = ["html5", "css3", "javascript", "react", "nextjs", "nodejs"];
  const { variableState, setVariableState } = useThemeContext();

  const handleSwitch = (theme) => {
    setVariableState(theme);
    setStorageTheme(theme);
  };

  return (
    <Layout config={config} theme={variableState} onSwitch={handleSwitch}>
      <Head>
        <title>{config.title} | Mars Gotta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className={styles["website-text"]}>
        Esta web está desarrollada con amor y con las siguientes tecnologías.
      </p>
      <div className={styles["image-box"]}>
        {svgList.map((name, key) => (
          <img
            key={key}
            className={styles["website-image"]}
            src={`${name}.svg`}
          ></img>
        ))}
      </div>
    </Layout>
  );
}
