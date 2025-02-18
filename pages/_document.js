import config from "@config/config.json";
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
// import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const Document = () => {
  // destructuring items from config object
  const { favicon, title, description, siteUrl, image } = config.site;
  const defaultImage = "/images/logo.png"; // The default image for social sharing

  return (
    <Html lang="en">
      <Head>
        {/* favicon */}
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href={favicon || "/images/favicon.ico"}
        />
        {/* theme meta */}
        <meta name="theme-name" content="next-boilerplate" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        {/* Meta Domain Verification */}
        <meta
          name="facebook-domain-verification"
          content="aqizbt2wxdxiigotivpg5lun6dnjaz"
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PNT7FWQG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager */}
        <Script strategy="lazyOnload" id="gtm-script">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PNT7FWQG');
        `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <Script
          strategy="lazyOnload"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7FEVS9DR0Y"
        />
        <Script strategy="lazyOnload" id="ga-script">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7FEVS9DR0Y');
        `}
        </Script>
        {/* End Google Analytics */}

        {/* <GoogleAnalytics gaId="G-7FEVS9DR0Y" />
        <GoogleTagManager gtmId="GTM-PNT7FWQG" /> */}

        {/* Meta Pixel Code */}
        <script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1103081741265949');
            fbq('track', 'PageView');
          `,
          }}
        />

        {/* Open Graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={image || defaultImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image || defaultImage} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
