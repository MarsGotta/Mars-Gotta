import Head from "next/head";
import { useEffect } from "react";

import styles from "../styles/CoursesTalk.module.css";
import locales from "../locales/courses-talk.i18n.js";

import { useConfigContext } from "../core/config-context";

export default function CoursesTalk(props) {
  const { locale } = props;
  const i18n = locales[locale];
  const title = i18n.headTitle;
  const config = { title };
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
        <title>{ title } | Mars Gotta</title>
      </Head>
      <section className={styles['container']}>
        <h2 className={styles["principal-title"]}>{ i18n.titleTalk }</h2>
        <div className={styles["talk-box"]}>
          <article className={styles["talk-element"]}>
            <h3 className={styles["talk-title"]}>
             { i18n.talks[0].title }
            </h3>
            <span className={styles["talk-site"]}>
             { i18n.talks[0].site }
            </span>
            {renderVideo('https://www.youtube.com/embed/6J483DMLGT4')}
            <p className={styles["talk-description"]}>
              { i18n.talks[0].description[0] + ' ' }
              <a href="https://github.com/MarsGotta/devcast-series-webcomponent">
                { i18n.talks[0].description[1] }
              </a>
            </p>
          </article>
          <article className={styles["talk-element"]}>
            <h3 className={styles["talk-title"]}>
             { i18n.talks[1].title }
            </h3>
            <span className={styles["talk-site"]}>
             { i18n.talks[1].site }
            </span>
            {renderVideo('https://www.youtube.com/embed/XpK315cO0g4')}
            <p className={styles["talk-description"]}>
              { i18n.talks[0].description }
            </p>
          </article>
        </div>
      </section>
      <section className={styles['container']}>
        <h2 className={styles["principal-title"]}>{ i18n.titleCourse }</h2>
        <p className={styles["course-description"]}>{ i18n.descriptionCourse }</p>
        <article className={styles['courses-list']}>
          <h3 className={styles["course-title"]}>{ i18n.courses[0].title }</h3>
          <ul className={styles["course-description"]}>
            <li>
              <a className={styles["course-list-title"]} href="https://talks.codemotion.com/introduccin?playlist=web-component-desde-0" target="_blank">
                { i18n.courses[0].elements[0].title }
              </a>
              <span className={styles["course-type"]}>
                { i18n.courses[0].elements[0].type }
              </span>
              <span className={styles["course-place"]}>
               { i18n.courses[0].elements[0].place }
              </span>
              <span className={styles["course-year"]}>
                { i18n.courses[0].elements[0].year }
              </span>
            </li>
          </ul>
        </article>
        <article className={styles['courses-list']}>
          <h3 className={styles["course-title"]}>{ i18n.courses[1].title }</h3>
          <ul className={styles["course-description"]}>
            <li>
              <span className={styles["course-list-title"]}>
                { i18n.courses[1].elements[0].title }
              </span>
              <span className={styles["course-type"]}>
                { i18n.courses[1].elements[0].type }
              </span>
              <span className={styles["course-place"]}>
                { i18n.courses[1].elements[0].place }
              </span>
              <span className={styles["course-year"]}>
                { i18n.courses[1].elements[0].year }
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                { i18n.courses[1].elements[1].title }
              </span>
              <span className={styles["course-type"]}>
                { i18n.courses[1].elements[1].type }
              </span>
              <span className={styles["course-place"]}>
                { i18n.courses[1].elements[1].place }
              </span>
              <span className={styles["course-year"]}>
                { i18n.courses[1].elements[1].year }
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                { i18n.courses[1].elements[2].title }
              </span>
              <span className={styles["course-type"]}>
                { i18n.courses[1].elements[2].type }
              </span>
              <span className={styles["course-place"]}>
                { i18n.courses[1].elements[2].place }
              </span>
              <span className={styles["course-year"]}>
                { i18n.courses[1].elements[2].year }
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                { i18n.courses[1].elements[3].title }
              </span>
              <span className={styles["course-type"]}>
                { i18n.courses[1].elements[3].type }
              </span>
              <span className={styles["course-place"]}>
                { i18n.courses[1].elements[3].place }
              </span>
              <span className={styles["course-year"]}>
                { i18n.courses[1].elements[3].year }
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                { i18n.courses[1].elements[4].title }
              </span>
              <span className={styles["course-type"]}>
                { i18n.courses[1].elements[4].type }
              </span>
              <span className={styles["course-place"]}>
                { i18n.courses[1].elements[4].place }
              </span>
              <span className={styles["course-year"]}>
                { i18n.courses[1].elements[4].year }
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                { i18n.courses[1].elements[5].title }
              </span>
              <span className={styles["course-type"]}>
                { i18n.courses[1].elements[5].type }
              </span>
              <span className={styles["course-place"]}>
                { i18n.courses[1].elements[5].place }
              </span>
              <span className={styles["course-year"]}>
                { i18n.courses[1].elements[5].year }
              </span>
            </li>
          </ul>
        </article>
        <article className={styles['courses-list']}>
          <h3 className={styles["course-title"]}>{ i18n.courses[2].title }</h3>
          <ul className={styles["course-description"]}>
            <li>
              <span className={styles["course-list-title"]}>
                { i18n.courses[2].elements[0].title }
              </span>
              <span className={styles["course-type"]}>
                { i18n.courses[2].elements[0].type }
              </span>
              <span className={styles["course-place"]}>
                { i18n.courses[2].elements[0].place }
              </span>
              <span className={styles["course-year"]}>
                { i18n.courses[2].elements[0].year }
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                { i18n.courses[2].elements[1].title }
              </span>
              <span className={styles["course-type"]}>
                { i18n.courses[2].elements[1].type }
              </span>
              <span className={styles["course-place"]}>
                { i18n.courses[2].elements[1].place }
              </span>
              <span className={styles["course-year"]}>
                { i18n.courses[2].elements[1].year }
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                { i18n.courses[2].elements[2].title }
              </span>
              <span className={styles["course-type"]}>
                { i18n.courses[2].elements[2].type }
              </span>
              <span className={styles["course-place"]}>
                { i18n.courses[2].elements[2].place }
              </span>
              <span className={styles["course-year"]}>
                { i18n.courses[2].elements[2].year }
              </span>
            </li>
            <li>
              <span className={styles["course-list-title"]}>
                { i18n.courses[2].elements[3].title }
              </span>
              <span className={styles["course-type"]}>
                { i18n.courses[2].elements[3].type }
              </span>
              <span className={styles["course-place"]}>
                { i18n.courses[2].elements[3].place }
              </span>
              <span className={styles["course-year"]}>
                { i18n.courses[2].elements[3].year }
              </span>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
