import config from "@config/config.json";
import theme from "@config/theme.json";
import Head from "next/head";
import { useEffect, useState } from "react";
// import TagManager from "react-gtm-module";
import "styles/style.scss";

const App = ({ Component, pageProps }) => {
  // default theme setup

  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  const [fontcss, setFontcss] = useState();
  useEffect(() => {
    fetch(
      `https://fonts.googleapis.com/css2?family=${pf}${
        sf ? "&family=" + sf : ""
      }&display=swap`
    ).then((res) => res.text().then((css) => setFontcss(css)));
  }, [pf, sf]);

  // google tag manager (gtm)
  // const tagManagerArgs = {
  //   gtmId: config.params.tag_manager_id,
  // };

  useEffect(() => {
    setTimeout(() => {
      process.env.NODE_ENV === "production";
      // &&
      // config.params.tag_manager_id &&
      // TagManager.initialize(tagManagerArgs);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>

        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `${fontcss}`,
          }}
        />
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Sender Popup */}
        <script
          id="sender-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(s, e, n, d, er) {
              s['Sender'] = er;
              s[er] = s[er] || function() {
                (s[er].q = s[er].q || []).push(arguments)
              }, s[er].l = 1 * new Date();
              var a = e.createElement(n),
                  m = e.getElementsByTagName(n)[0];
              a.async = 1;
              a.src = d;
              m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
            sender('cb79b74d206602');
          `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
