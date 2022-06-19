import { ThemeContextProvider } from "../core/theme-context";
import { ConfigContextProvider } from "../core/config-context";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { WaveTopBottomLoading } from "react-loadingg";
import Layout from "./../layout/Layout";
import "../styles/globals.css";
import "@web-inmars/mars-awesome-solid/dist/src/MarsAwesomeSolid.js";
import "@web-inmars/mars-awesome-brands/dist/src/MarsAwesomeBrands.js";

function MarsApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const props = {
    ...pageProps,
    locale: router.locale,
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
    
    const handleStart = (url) => {
      if(url !== router.pathname) {
        setLoading(true)
      } else { 
        setTimeout(() => {
          setLoading(false);
        }, 700);
       }
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
      <ConfigContextProvider>
        {loading && (
          <div id="loading">
            <WaveTopBottomLoading />
          </div>
        )}
        <Layout landing={router.pathname === '/'} hide={loading} locale={router.locale}>
          <Component {...props} />
        </Layout>
      </ConfigContextProvider>
    </ThemeContextProvider>
  );
}

export default MarsApp;
