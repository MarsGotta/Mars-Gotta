import Head from "next/head";

import {
  useThemeContext,
  themes,
} from "../core/theme-context";

import styles from "../styles/Home.module.css";
import MarsButton from "../components/mars-button/MarsButton.jsx";
import MarsStars from "../components/mars-stars/MarsStars";

export default function Home() {
  const { variableState } = useThemeContext();
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
          <title>Inicio | Mars Gotta</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section id="section-1" className={styles["main"]}>
          <h1 className={styles["title"]}>Hey, soy Mars</h1>
          <h2 className={styles["subtitle"]}>
            Expert <span className={styles["span-red"]}>Frontend</span> Developer
          </h2>
        </section>
        <section id="section-2" className={styles["sobre-mi"]}>
          <img src="/avatar-home.png" alt="Avatar" />
          <h2 className={styles["second-title"]}>Sobre mi</h2>
          <p className={styles["description"]}>
            Tengo <span className={styles["red"]}>+10 años</span>  de experiencia. Me gusta la física, la programación, escribir, los videojuegos y
            tengo un zoológico en casa.
          </p>

          <div className={styles["button-box"]}>
            <MarsButton className={styles["primary"]} href="/about">
              Sobre mi
            </MarsButton>
            <MarsButton variant="secondary" href="/courses-talk">
              Charlas y cursos
            </MarsButton>
          </div>
        </section>
        <section id="section-3" className={styles["mi-trabajo"]}>
          <h2 className={styles["second-title"]}>Mi trabajo</h2>
          <p className={styles["description"]}>
            A lo largo de mi carrera he podido trabajar con diferentes empresas e impartir diversas charlas y cursos.
          </p>

          <div className={styles["button-box"]}>
            <MarsButton className={styles["primary"]} href="/own-projects">
              Mis proyectos
            </MarsButton>
            <MarsButton variant="secondary" href="/mars-lab">
              Mi laboratorio
            </MarsButton>
          </div>
        </section>
        <section id="section-4" className={styles["contacto"]}>
          <h2 className={styles["second-title"]}>Contacto</h2>
          <p className={styles["description"]}>
            Si quieres contactar conmigo puedes enviarme un correo a me@marsgotta.com o a través del formulario de esta web.
          </p>

          <div className={styles["button-box"]}>
            <MarsButton className={styles["primary"]} href="/contact">
              Formulario de contacto
            </MarsButton>
          </div>
        </section>
        {variableState === themes.dark && (
          <MarsStars limit={10} className={styles["stars"]} />
        )}
    </div>
  );
}
