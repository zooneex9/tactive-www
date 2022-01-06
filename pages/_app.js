import "../styles/index.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1600);
  }, []);

  return (
    <>
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

    </>
  );
}

export default MyApp;
