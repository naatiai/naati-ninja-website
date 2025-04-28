import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import RootLayoutClient from "@/components/RootLayoutClient";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://naatininja.com"),
  title: {
    default: "Naati Ninja | NAATI CCL Practice and AI Feedback",
    template: "%s | Naati Ninja",
  },
  description:
    "Take AI-powered NAATI CCL mock tests in Hindi, Tamil, Mandarin, Punjabi, Sinhala, Nepali or your preferred language. Real exam format. Instant results. One free test on sign-up.",
  keywords:
    "naati, naati ccl, naati practice test, free naati mock test, ccl mock test, naati test sample, naati ccl practice test, ccl practice test,naati test, naati exam, naati mock test, naati test, naati australia, pr australia, mock test, free mock test, naati coaching, naati course online, naati preparation, naati online test, naati ninja, ccl test, naati exam practice, immigration points australia, language test for pr, naati ccl mock test",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.ico",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://naatininja.com",
  },
  openGraph: {
    title: "Naati Ninja | NAATI CCL Practice and AI Feedback",
    description:
      "Take AI-powered NAATI CCL mock tests in Hindi, Tamil, Mandarin, Punjabi, Sinhala, Nepali or your preferred language. Real exam format. Instant results. One free test on sign-up.",
    url: "https://naatininja.com",
    siteName: "Naati Ninja",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naati Ninja | NAATI CCL Practice and AI Feedback",
      },
    ],
  },
  other: {
    "theme-color": "#2A63D4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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

        {/* Meta Domain Verification */}
        <meta
          name="facebook-domain-verification"
          content="aqizbt2wxdxiigotivpg5lun6dnjaz"
        />

        {/* Meta Pixel Code */}
        <Script
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

        {/* AHREFS */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="wKliMANM7dIfd9JNiNU1Nw"
          async
        />

      </head>
      <body
        className={`${inter.className} min-h-screen bg-background antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <RootLayoutClient>{children}</RootLayoutClient>
        </ThemeProvider>
      </body>
    </html>
  );
}
