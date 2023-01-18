import "../styles/globals.css";
import { wrapper } from "../store/store";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
}

export default wrapper.withRedux(MyApp);
