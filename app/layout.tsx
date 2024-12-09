import "./globals.scss";
import "./font.css";
const Header = dynamic(() => import("./components/Header/Header"));
import Footer from "./components/Footer/Footer";
import dynamic from "next/dynamic";
import StoryblokProvider from "@/components/StoryblokProvider";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

storyblokInit({
  accessToken: process.env.STORYBLOCK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html>
        <head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-98B6G3X5TN"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-98B6G3X5TN');
            `,
            }}
          />{" "}
        </head>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
          <Script src="https://consent.cookiebot.com/uc.js" />
          <script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="d77505aa-9cc7-41af-a436-ed5e0458fb79"
            data-blockingmode="manual"
            type="text/javascript"
            async
          ></script>
        </body>
      </html>
    </StoryblokProvider>
  );
}
