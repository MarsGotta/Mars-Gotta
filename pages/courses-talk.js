import Head from "next/head";
import { useThemeContext, setStorageTheme } from "../core/theme-context";
import styles from "../styles/CoursesTalk.module.css";

import Layout from "./../layout/Layout";

export default function CoursesTalk() {
  const config = { title: "Charlas y cursos" };
  const { variableState, setVariableState } = useThemeContext();

  const handleSwitch = (theme) => {
    setVariableState(theme);
    setStorageTheme(theme);
  };

  const renderVideo = (url) => {
    return (
      <iframe
        width="100%"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <Layout config={config} theme={variableState} onSwitch={handleSwitch}>
      <Head>
        <title>{config.title} | Mars Gotta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h2 className={styles["principal-title"]}>Cursos</h2>
        <p>A lo largo de mi carrera como profesional he tenido la oportunidad de impartir varios cursos de diferentes tecnologías Frontend.</p>
        <article>
          <h3 className={styles["talk-title"]}>Fictizia</h3>
          <ul>
            <li>Curso y consultoría de Vue.js para trabajadores de Procesia</li>
            <li>Curso de React Avanzado</li>
            <li>Curso de Angular</li>
            <li>Curso de Vue con Vuex</li>
            <li>Curso de Profesional React con Redux</li>
            <li>Curso de Angular con RxJS</li>
          </ul>
        </article>
        <article>
          <h3 className={styles["talk-title"]}>Learn InMars</h3>
          <ul>
            <li>Curso superior en HTML, CSS, Javascript y VueJS con Vuex</li>
            <li>Curso de Angular</li>
            <li>Curso de Vue con Vuex</li>
            <li>Curso de React con Redux</li>
          </ul>
        </article>
      </section>
      <section>
        <h2 className={styles["principal-title"]}>Charlas</h2>
        <article className={styles["talk-element"]}>
          <h3 className={styles["talk-title"]}>
            Una nueva web con WebComponents
          </h3>
          <span className={styles["talk-site"]}>
            Devcast Codemotion
          </span>
          {renderVideo('https://www.youtube.com/embed/6J483DMLGT4')}
          <p className={styles["talk-description"]}>
            En esta charla explico qué son los WebComponents y estos son parte del
            futuro de la web. Puedes acceder al repositorio de la charla con las
            diapositivas y el código desde{" "}
            <a href="https://github.com/MarsGotta/devcast-series-webcomponent">
              aquí
            </a>
          </p>
        </article>
        <article className={styles["talk-element"]}>
          <h3 className={styles["talk-title"]}>
            PWA con React
          </h3>
          <span className={styles["talk-site"]}>
            SalmorejoTech, Córdoba, España
          </span>
          {renderVideo('https://www.youtube.com/embed/XpK315cO0g4')}
          <p className={styles["talk-description"]}>
            En esta charla explico lo fácil que es crear una PWA. Se enfoca en la
            librería React pero los mismos pasos se pueden implementar en otros
            frameworks o en Javascript Vainilla
          </p>
        </article>
      </section>
    </Layout>
  );
}
