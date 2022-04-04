import "@/styles/globals.css";

import { MantineProvider } from "@mantine/core";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { memo } from "react";

import { useSessionRouter } from "@/hooks/useSessionRouter";

export const App: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  useSessionRouter(router.asPath);

  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: "light" }}>
        <DefaultSeo
        // additionalLinkTags={[
        //   {
        //     rel: "icon",
        //     type: "image/png",
        //     sizes: "32x32",
        //     href: "/favicon-32x32.png",
        //   },
        //   {
        //     rel: "icon",
        //     type: "image/png",
        //     sizes: "16x16",
        //     href: "/favicon-16x16.png",
        //   },
        //   {
        //     rel: "apple-touch-icon",
        //     href: "/apple-touch-icon.png",
        //     sizes: "180x180",
        //   },
        //   { rel: "manifest", href: "/site.webmanifest" },
        // ]}
        // titleTemplate="%s - タイトル"
        // defaultTitle="タイトル"
        // description="サイトの説明"
        // canonical="サイトのURL"
        // openGraph={{
        //   type: "website",
        //   locale: props.router.locale,
        //   site_name: "サイトの名前",
        //   description: "サイトの説明",
        //   url: "サイトのURL",
        //   images: [
        //     {
        //       url: "https://www.~/logo/1200x630.png",
        //       width: 1200,
        //       height: 630,
        //       alt: "",
        //     },
        //   ],
        // }}
        />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};
export default memo(App);
