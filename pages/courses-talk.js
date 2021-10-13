import Head from "next/head";
import { useThemeContext, setStorageTheme } from "../core/theme-context";

import Layout from "./../layout/Layout";

export default function CoursesTalk() {
  const config = { title: "Charlas y cursos" };
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontWeight: 400, color: "#e6362d", margin: "15px 0 0" }}>
          Una nueva web con WebComponents
        </h3>
        <p
          style={{
            fontSize: "18px",
            margin: "0",
            marginBottom: "10px",
            color: "#e6362d",
          }}
        >
          Devcast Codemotion
        </p>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/6J483DMLGT4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.5",
          }}
        >
          En esta charla explico qué son los WebComponents y estos son parte del
          futuro de la web. Puedes acceder al repositorio de la charla con las
          diapositivas y el código desde{" "}
          <a
            style={{ color: "#e6362d" }}
            href="https://github.com/MarsGotta/devcast-series-webcomponent"
          >
            aquí
          </a>
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontWeight: 400, color: "#e6362d", margin: "15px 0 0" }}>
          PWA con React
        </h3>
        <p
          style={{
            fontSize: "18px",
            margin: "0",
            marginBottom: "10px",
            color: "#e6362d",
          }}
        >
          SalmorejoTech, Córdoba, España
        </p>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/XpK315cO0g4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.5",
          }}
        >
          En esta charla explico lo fácil que es crear una PWA. Se enfoca en la
          librería React pero los mismos pasos se pueden implementar en otros
          frameworks o en Javascript Vainilla
        </p>
      </div>
    </Layout>
  );
}
