import Head from "next/head";
import Layout from "./../layout/Layout";

export default function OwnProjects() {
  const config = { title: "Mis proyectos" };
  return (
    <Layout config={config}>
      <Head>
        <title>{config.title} | Mars Gotta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      En construcción
    </Layout>
  );
}
