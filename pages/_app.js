import "../styles/globals.css";
import { applyPolyfills, defineCustomElements } from "web-inmars/loader";

applyPolyfills().then(() => {
  defineCustomElements();
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
