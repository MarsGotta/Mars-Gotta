import "../styles/globals.css";

(async () => {
  await import("@web-inmars/mars-awesome-solid");
})();

(async () => {
  await import("@web-inmars/mars-awesome-brands");
})();

function MarsApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MarsApp;
