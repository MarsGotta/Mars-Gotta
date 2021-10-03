import { ThemeContextProvider } from "../core/theme-context";
import "../styles/globals.css";

(async () => {
  await import("@web-inmars/mars-awesome-solid/dist/src/MarsAwesomeSolid.js");
})();

(async () => {
  await import("@web-inmars/mars-awesome-brands/dist/src/MarsAwesomeBrands.js");
})();

function MarsApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MarsApp;
