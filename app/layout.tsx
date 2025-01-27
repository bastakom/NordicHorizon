import "./globals.scss";
import type { Metadata } from "next";
import "./font.css";
const Header = dynamic(() => import("./components/Header/Header"));
import Footer from "./components/Footer/Footer";
import dynamic from "next/dynamic";
import StoryblokProvider from "@/components/StoryblokProvider";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Script from "next/script";
import Head from "next/head";

storyblokInit({
  accessToken: process.env.STORYBLOCK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});
export const metadata: Metadata = {
  title: "Nordic horizon travel",
  description:
    "Nordic Horizon Travel erbjuder skräddarsydda resor för dig och ditt företag.Teambuilding, möten, event, konferenser och gruppmöten - Vi hittar det ni söker och vi har varit där!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html>
        <head>
          <Head>
            <title>{(metadata.title ?? "Default Title") as string}</title>
            <meta
              name="description"
              content={metadata.description ?? "Default description"}
            />
          </Head>
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
          />
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
