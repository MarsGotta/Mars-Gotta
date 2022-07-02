import Head from "next/head";
import { ThemeContextProvider } from "../core/theme-context";
import { ConfigContextProvider } from "../core/config-context";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "./../layout/Layout";
import "../styles/globals.css";

function calculateVh() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `calc(${vh}px * 100)`);
}

function MarsApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const props = {
    ...pageProps,
    locale: router.locale,
  };

  useEffect(() => {
    calculateVh();

    // Re-calculate on resize
    window.addEventListener('resize', calculateVh);

    // Re-calculate on device orientation change
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
      <ThemeContextProvider>
        <ConfigContextProvider>
          {loading && (
            <div id="loading">
              <span className="loader"></span>
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
