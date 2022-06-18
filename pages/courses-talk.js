import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/CoursesTalk.module.css";
import { useConfigContext } from "../core/config-context";

export default function CoursesTalk() {
  const config = { title: "Charlas y cursos" };
  const { configState, setConfigState } = useConfigContext();

  useEffect(() => {
    setConfigState({ ...configState, ...config });
  }, []);

  const renderVideo = (url) => {
    return (
      <iframe
        className={styles.video}
        width="100%"
        src={url}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <>
      <Head>
        <title>{config.title} | Mars Gotta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles['container']}>
        <h2 className={styles["principal-title"]}>Charlas</h2>
        <div className={styles["talk-box"]}>
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
        </div>
      </section>
      <section className={styles['container']}>
        <h2 className={styles["principal-title"]}>Cursos</h2>
        <p className={styles["course-description"]}>A lo largo de mi carrera como profesional he tenido la oportunidad de impartir varios cursos de diferentes tecnologías Frontend.</p>
        <article className={styles['courses-list']}>
          <h3 className={styles["course-title"]}>Codemotion</h3>
          <ul className={styles["course-description"]}>
            <li>
              <a className={styles["course-list-title"]} href="https://talks.codemotion.com/introduccin?playlist=web-component-desde-0" target="_blank">
                Web Components desde 0 
              </a>
              <span className={styles["course-type"]}>
                Edu Path
              </span>
              <span className={styles["course-place"]}>
                Online
              </span>
              <span className={styles["course-year"]}>
                2022
              </span>
            </li>
          </ul>
        </article>
        <article className={styles['courses-list']}>
          <h3 className={styles["course-title"]}>Fictizia</h3>
          <ul className={styles["course-description"]}>
            <li>
              <span className={styles["course-list-title"]}>
                Vue.js para empresas 
              </span>
              <span className={styles["course-type"]}>
                Curso y consultoría
              </span>
              <span className={styles["course-place"]}>
                Madrid
              </span>
              <span className={styles["course-year"]}>
                2019
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                Vue con Vuex 
              </span>
              <span className={styles["course-type"]}>
                Curso
              </span>
              <span className={styles["course-place"]}>
                Madrid
              </span>
              <span className={styles["course-year"]}>
                2019
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                React Avanzado 
              </span>
              <span className={styles["course-type"]}>
                Curso
              </span>
              <span className={styles["course-place"]}>
                Online
              </span>
              <span className={styles["course-year"]}>
                2019
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                Curso de Angular
              </span>
              <span className={styles["course-type"]}>
                Curso
              </span>
              <span className={styles["course-place"]}>
                Online
              </span>
              <span className={styles["course-year"]}>
                2020
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                Profesional React con Redux
              </span>
              <span className={styles["course-type"]}>
                Curso
              </span>
              <span className={styles["course-place"]}>
                Online
              </span>
              <span className={styles["course-year"]}>
                2020
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                Angular con RxJS
              </span>
              <span className={styles["course-type"]}>
                Curso
              </span>
              <span className={styles["course-place"]}>
                Online
              </span>
              <span className={styles["course-year"]}>
                2021
              </span>
            </li>
          </ul>
        </article>
        <article className={styles['courses-list']}>
          <h3 className={styles["course-title"]}>InMars</h3>
          <ul className={styles["course-description"]}>
            <li>
              <span className={styles["course-list-title"]}>
                HTML, CSS, Javascript y VueJS con Vuex
              </span>
              <span className={styles["course-type"]}>
                Curso superior
              </span>
              <span className={styles["course-place"]}>
                Online
              </span>
              <span className={styles["course-year"]}>
                2021
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                Curso de Angular
              </span>
              <span className={styles["course-type"]}>
                Curso
              </span>
              <span className={styles["course-place"]}>
                Online
              </span>
              <span className={styles["course-year"]}>
                2021
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                Curso de Vue con Vuex
              </span>
              <span className={styles["course-type"]}>
                Curso
              </span>
              <span className={styles["course-place"]}>
                Online
              </span>
              <span className={styles["course-year"]}>
                2021
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                Curso de React con Redux
              </span>
              <span className={styles["course-type"]}>
                Curso
              </span>
              <span className={styles["course-place"]}>
                Online
              </span>
              <span className={styles["course-year"]}>
                2021
              </span>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
