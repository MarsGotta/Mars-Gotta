import Head from "next/head";
import { ThemeContextProvider } from "../core/theme-context";
import { ConfigContextProvider } from "../core/config-context";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "./../layout/Layout";
import "../styles/globals.css";

function calculateVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `calc(${vh}px * 100)`);
}

function MarsApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const props = {
    ...pageProps,
    locale: router.locale,
    route: router.route,
  };

  useEffect(() => {
    calculateVh();

    window.addEventListener('resize', calculateVh);
    window.addEventListener('orientationchange', calculateVh);

    setLoading(false);
    
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
        <meta name="description" content="Mars Gotta Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link as="style" rel="stylesheet preload prefetch"  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" />
      </Head>
      <ThemeContextProvider>
        <ConfigContextProvider>
          {loading && (
            <div id="loading">
              <span className="loader"></span>
            </div>
          )}
          <Layout landing={router.pathname === '/'} hide={loading} locale={router.locale} route={router.route}>
            <Component {...props} />
          </Layout>
        </ConfigContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default MarsApp;
