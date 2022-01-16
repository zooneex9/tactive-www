import "../styles/index.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import Head from 'next/head';
import { TactiveBody, TactiveWrapper } from "../components/Layout/ThemeProvider";

function MyApp({ Component, pageProps }) {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1600);
  }, []);

  return (
    <TactiveBody>
      <TactiveWrapper>
      <Head>
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/lib/slick/slick.js"></script>
        <script src="js/html5lightbox.js"></script>
        <script src="js/counter.js"></script>
        <script src="js/wow.min.js"></script>
        <script src="js/scripts.js"></script>
      </Head>
        {!loaded && (
            <div class="page-loading">
                <div class="thecube">
                    <div class="cube c1"></div>
                    <div class="cube c2"></div>
                    <div class="cube c4"></div>
                    <div class="cube c3"></div>
                </div>
            </div>
        )}
        {loaded && (
            <Component {...pageProps} />
        )}
      </TactiveWrapper>
    </TactiveBody>
  );
}

export default MyApp;
