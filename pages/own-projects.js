import Head from "next/head";
import { useEffect } from "react";
import { useConfigContext } from "../core/config-context";

import locales from "../locales/own-projects.i18n.js";

import MarsConstruction from "../components/mars-construction/MarsConstruction";

export default function OwnProjects(props) {
  const { locale } = props;
  const i18n = locales[locale];
  const title = i18n.headTitle;
  const config = { title };
  const { configState, setConfigState } = useConfigContext();

  useEffect(() => {
    setConfigState({ ...configState, ...config });
  }, []);

  return (
    <>
      <Head>
        <title>{ title } | Mars Gotta</title>
      </Head>
      <MarsConstruction title={ i18n.title } description={ i18n.description } />
    </>
  );
}
