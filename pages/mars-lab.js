import Head from "next/head";
import { useThemeContext, setStorageTheme } from "../core/theme-context";

import Layout from "./../layout/Layout";

export default function MarsLab() {
  const config = { title: "Mi laboratorio" };
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
        <h4 style={{ color: "var(--color-text-primary)", margin: "15px 0" }}>
          ¡Lo siento! Esta página está en construcción
        </h4>
        <p
          style={{
            fontSize: "18px",
            margin: "0",
            marginBottom: "10px",
            color: "var(--color-text-primary)",
          }}
        >
          Pronto tendré novedades para ti :)
        </p>
        <img
          src="in-construction.svg"
          width="100%"
          style={{ maxWidth: "300px", alignSelf: "center" }}
        ></img>
      </div>
    </Layout>
  );
}
