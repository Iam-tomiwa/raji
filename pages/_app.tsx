import {AppProps} from "next/app";
import "../styles/globals.scss";
import "../styles/layout.scss";

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
