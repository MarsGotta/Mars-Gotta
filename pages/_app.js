import { ThemeContextProvider } from "../core/theme-context";
import { useIconSet } from "../core/useIconSet";
import "../styles/globals.css";

function MarsApp({ Component, pageProps }) {
  useIconSet();

  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MarsApp;
