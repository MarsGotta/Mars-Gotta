import Head from "next/head";
import { ThemeContextProvider } from "../core/theme-context";
import { ConfigContextProvider } from "../core/config-context";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { WaveTopBottomLoading } from "react-loadingg";
import Layout from "./../layout/Layout";
import "../styles/globals.css";

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
    }, 200);
    
    const handleStart = (url) => {
      if(url !== router.pathname) {
        setLoading(true)
      } else { 
        setLoading(false);
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
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" />
      </Head>
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
    </>
  );
}

export default MarsApp;
