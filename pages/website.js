import Head from "next/head";
import Image from 'next/image';
import { useEffect, useState }  from 'react';
import { useThemeContext } from "../core/theme-context";
import { useConfigContext } from "../core/config-context";

import styles from "../styles/Website.module.css";
import locales from "../locales/website.i18n.js";

export default function Website(props) {
  const { locale } = props;
  const i18n = locales[locale];
  const title = i18n.headTitle;
  const config = { title }
  const svgList = ["html", "css", "javascript", "react", "next", "node"];
  const { variableState } = useThemeContext();
  const [ theme, setTheme ] = useState('dark-theme')
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
        <title>{ title } | Mars Gotta</title>
      </Head>
      <p className={styles["website-text"]}>
      { i18n.description }
      </p>
      <article className={styles["image-box"]}>
        {svgList.map((name, key) => (
          <figure className={styles["website-image"]}>
            <Image
              key={key}
              src={`/${name}-${theme}.png`}
              width="250"
              height="250"
            />
          </figure>
        ))}
      </article>
    </section>
  );
}
