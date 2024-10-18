import "./globals.scss";
import "./font.css";
const Header = dynamic(() => import("./components/Header/Header"));
import Footer from "./components/Footer/Footer";
import dynamic from "next/dynamic";
import StoryblokProvider from "@/components/StoryblokProvider";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";



storyblokInit({
  accessToken: process.env.STORYBLOCK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
