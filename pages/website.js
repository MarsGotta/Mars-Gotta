import Head from "next/head";
import { useThemeContext, setStorageTheme } from "../core/theme-context";

import Layout from "./../layout/Layout";

export default function Website() {
  const config = { title: "Esta web" };
  const svgList = ["html5", "css3", "javascript", "react", "nextjs", "nodejs"];
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
      <p
        style={{
          fontSize: "19px",
          margin: "15px 0px",
          color: "var(--color-text-primary)",
        }}
      >
        Esta web está desarrollada con amor y con las siguientes tecnologías.
      </p>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {svgList.map((name, key) => (
          <img
            key={key}
            src={`${name}.svg`}
            width="20%"
            style={{ margin: "5%" }}
          ></img>
        ))}
      </div>
    </Layout>
  );
}
