import Head from "next/head";
import Image from 'next/image';

import {
  useThemeContext,
  themes,
} from "../core/theme-context";

import styles from "../styles/Home.module.css";
import locales from "../locales/index.i18n.js";

import MarsButton from "../components/mars-button/MarsButton.jsx";
import MarsStars from "../components/mars-stars/MarsStars";
import AboutImage from '../public/avatar-home.png';


export default function Home(props) {
  const { variableState } = useThemeContext();
  const { locale } = props;
  const i18n = locales[locale];
  
  const onScroll = (e) => {
    if (e.deltaY > 0) {
      console.log("scrolling down");
  } else if (e.deltaY < 0) {
      console.log("scrolling up");
  }
	}

  return (
    //<div className={styles["container"]} onWheel={onScroll} onTouchMove={(touchMoveEvent) => console.log(touchMoveEvent)}>
    //<a href="#section-2">section2</a>
    <div className={styles["container"]}>
        <Head>
          <title>{ i18n.headTitle }</title>
        </Head>
        <section id="section-1" className={styles["main"]}>
          <div className={styles["main-container"]}>
            <h1 className={styles["title"]}>{ i18n.main.title }</h1>
            <h2 className={styles["subtitle"]}>
              { i18n.main.subtitle[0] + ' ' }
              <span className={styles["span-red"]}>
                { i18n.main.subtitle[1] + ' ' }
              </span> 
              { i18n.main.subtitle[2] }
            </h2>
          </div>
        </section>
        <section id="section-2" className={styles["sobre-mi"]}>
          <figure className={styles["image"]}>
            <Image src={AboutImage} alt="Avatar" />
          </figure>
          <h2 className={styles["second-title"]}>
            { i18n.about.secondTitle }
          </h2>
          <p className={styles["description"]}>
            { i18n.about.description[0] } <span className={styles["red"]}>{ i18n.about.description[1] }</span> { i18n.about.description[2] }
          </p>

          <div className={styles["button-box"]}>
            <MarsButton className={styles["primary"]} href="/about">
              { i18n.about.primaryText }
            </MarsButton>
            <MarsButton variant="secondary" href="/courses-talk">
              { i18n.about.secondaryText }
            </MarsButton>
          </div>
        </section>
        <section id="section-3" className={styles["mi-trabajo"]}>
          <h2 className={styles["second-title"]}>
            { i18n.myWork.secondTitle }
          </h2>
          <p className={styles["description"]}>
            { i18n.myWork.description }
          </p>

          <div className={styles["button-box"]}>
            <MarsButton className={styles["primary"]} href="/own-projects">
              { i18n.myWork.primaryText }
            </MarsButton>
            <MarsButton variant="secondary" href="/mars-lab">
              { i18n.myWork.secondaryText }
            </MarsButton>
          </div>
        </section>
        <section id="section-4" className={styles["contacto"]}>
          <h2 className={styles["second-title"]}>
            { i18n.contact.secondTitle }
          </h2>
          <p className={styles["description"]}>
            { i18n.contact.description }
          </p>

          <div className={styles["button-box"]}>
            <MarsButton className={styles["primary"]} href="/contact">
              { i18n.contact.primaryText }
            </MarsButton>
          </div>
        </section>
        {variableState === themes.dark && (
          <MarsStars limit={10} className={styles["stars"]} />
        )}
    </div>
  );
}
