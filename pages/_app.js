import { ThemeContextProvider } from "../core/theme-context";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { WaveTopBottomLoading } from "react-loadingg";
import "../styles/globals.css";

(async () => {
  await import("@web-inmars/mars-awesome-solid/dist/src/MarsAwesomeSolid.js");
})();

(async () => {
  await import("@web-inmars/mars-awesome-brands/dist/src/MarsAwesomeBrands.js");
})();

function MarsApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <ThemeContextProvider>
      {loading ? (
        <div id="loading">
          <WaveTopBottomLoading />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeContextProvider>
  );
}

export default MarsApp;
