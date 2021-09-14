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
            color: "var(--color-text-primary)",
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
