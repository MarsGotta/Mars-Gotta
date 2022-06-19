import Head from "next/head";
import { useEffect, useState }  from 'react';
import { useThemeContext } from "../core/theme-context";
import { useConfigContext } from "../core/config-context";

import styles from "../styles/Website.module.css";
import locales from "../locales/website.i18n.js";

export default function Website(props) {
  const { locale } = props;
  const i18n = locales[locale];
  const config = { title: i18n.headTitle }
  const svgList = ["html", "css", "javascript", "react", "next", "node"];
  const { variableState } = useThemeContext();
  const [ theme, setTheme ] = useState()
  const { configState, setConfigState } = useConfigContext();

  useEffect(() => {
    setConfigState({ ...configState, ...config });
  }, []);

  useEffect(() => {
    setTheme(variableState || "light-theme");
  }, [variableState]);

  return (
    <section className={styles["container"]}>
      <Head>
        <title>{ i18n.headTitle } | Mars Gotta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className={styles["website-text"]}>
      { i18n.description }
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
    </section>
  );
}
