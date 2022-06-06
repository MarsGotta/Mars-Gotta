import Head from "next/head";
import { useState, useEffect } from "react";
import { useConfigContext } from "../core/config-context";

import { SKILLS } from "../core/constants.js"

import MarsProgressBar from "./../components/mars-progress-bar/MarsProgressBar";
import styles from "../styles/About.module.css";

export default function About() {
  const config = { title: "Sobre mi" };
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
          Soy muy buena en el desarrollo CSS y HTML5, al igual que me desempeño
          muy bien a la hora de desarrollar algoritmos complejos si son requeridos
          en el proyecto (Entre más complejo más me emociona). Tengo más de 10
          años de experiencia trabajando con empresas y cada proyecto lo hago un
          nuevo reto y un nuevo aprendizaje.
        </p>
        <p className={styles["about-text"]}>
          Me encanta enseñar a mis compañeros, he dado varias charlas y me
          considero una persona con fuertes rasgos de liderazgo. He podido dirigir
          buenos equipos de Front con los que he aprendido mucho a lo largo de
          cada Sprint. Suelo utilizar metodologías ágiles con el framework de
          trabajo Scrum. Me encanta esa filosofía de trabajo e intento cumplirla
          lo mejor posible.
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
          <h3>Presentación</h3>
          <img className={styles["about-image"]} src="about-me.svg"></img>
          <p className={styles["about-text"]}>
            ¡Hola! Soy Marcela Gotta, soy una ninja en Javascript, especializada en
            Frontend. Llevo 14 años siendo muy amiga del código.{" "}
          </p>
          <p className={styles["about-text"]}>
            Desarrollo con todo tipo de framework de Javascript como: ReactJs,
            LitElement, Stencil, VueJs, Angular, Sencha y Vanilla JavaScript.
          </p>
          {moreText.presentation && renderMoreText()}
          <span className={styles["text-button"]} onClick={() => handleMoreText('presentation')}>
            {!moreText.presentation ? 'Leer más' : 'Leer menos'}
          </span>
        </article>
        <article className={styles["skills"]}>
          <h3>Habilidades</h3>
          <section className={styles["progress-box"]}>
            {renderSkills()}
          </section>
          <span className={styles["text-button"]} onClick={() => handleMoreText('skills')}>
            {!moreText.skills ? 'Ver más' : 'Ver menos'}
          </span>
        </article>
      </section>
    </>
  );
}
