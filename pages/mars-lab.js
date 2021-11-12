import Head from "next/head";
import { useThemeContext, setStorageTheme } from "../core/theme-context";

import Layout from "./../layout/Layout";
import MarsConstruction from "../components/mars-construction/MarsConstruction";

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
      <MarsConstruction />
    </Layout>
  );
}
