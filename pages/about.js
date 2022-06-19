import Head from "next/head";
import { useState, useEffect } from "react";
import { useConfigContext } from "../core/config-context";

import { SKILLS } from "../core/constants.js"
import locales from "../locales/about.i18n.js";

import MarsProgressBar from "./../components/mars-progress-bar/MarsProgressBar";
import styles from "../styles/About.module.css";

export default function About(props) {
  const { locale } = props;
  const i18n = locales[locale];
  const config = { title: i18n.headTitle };
  const { configState, setConfigState } = useConfigContext();

  const [ moreText, setMoreText ] = useState({presentation: false, skills: false});

  useEffect(() => {
    setConfigState({ ...configState, ...config });
  }, []);

  const handleMoreText = (type) => {
    setMoreText({ ...moreText, [type]: !moreText[type]});
  };

  const renderMoreText = () => {
    return (
      <>
        <p className={styles["about-text"]}>
            { i18n.description[2] }
        </p>
        <p className={styles["about-text"]}>
            { i18n.description[3] }
        </p>
      </>
    )
  };

  const renderSkills = () => {
    return SKILLS.map((ability, key) => {
      if (key < 9 && !moreText.skills || moreText.skills) {
        const { title, percentage } = ability;
        return <MarsProgressBar key={key} className={styles["progress-bar"]} title={title} percentage={percentage}/>
      }
    })
  };

  return (
    <>
      <Head>
        <title>{config.title} | Mars Gotta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles["section-about"]}>
        <article className={styles["presentation"]}>
          <h3>{ i18n.titleAbout }</h3>
          <img className={styles["about-image"]} src="about-me.svg"></img>
          <p className={styles["about-text"]}>
            { i18n.description[0] }
          </p>
          <p className={styles["about-text"]}>
            { i18n.description[1] }
          </p>
          {moreText.presentation && renderMoreText()}
          <span className={styles["text-button"]} onClick={() => handleMoreText('presentation')}>
            {!moreText.presentation ? 'Leer más' : 'Leer menos'}
          </span>
        </article>
        <hr />
        <article className={styles["skills"]}>
          <h3>{ i18n.titleSkills }</h3>
          <section className={styles["progress-box"]}>
            {renderSkills()}
          </section>
          <span className={styles["text-button"]} onClick={() => handleMoreText('skills')}>
            {!moreText.skills ? i18n.seeMore : i18n.seeLess }
          </span>
        </article>
      </section>
    </>
  );
}
