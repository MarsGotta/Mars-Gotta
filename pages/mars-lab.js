import Head from "next/head";
import Layout from "./../layout/Layout";

export default function MarsLab() {
  const config = { title: "Mi laboratorio" };
  return (
    <Layout config={config}>
      <Head>
        <title>{config.title} | Mars Gotta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontWeight: 400, color: "#e6362d", margin: "15px 0" }}>
          ¡Lo siento! Esta página está en construcción
        </h3>
        <p style={{ fontSize: "18px", margin: "0", marginBottom: "10px" }}>
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
