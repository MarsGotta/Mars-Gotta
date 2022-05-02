import Head from "next/head";
import { useEffect } from "react";
import { useConfigContext } from "../core/config-context";
import MarsConstruction from "../components/mars-construction/MarsConstruction";

export default function OwnProjects() {
  const config = { title: "Mis proyectos" };
  const { configState, setConfigState } = useConfigContext();

  useEffect(() => {
    setConfigState({ ...configState, ...config });
  }, []);

  return (
    <>
      <Head>
        <title>{config.title} | Mars Gotta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MarsConstruction />
    </>
  );
}
