import React from "react";
import dynamic from "next/dynamic";
import Header from "../layout/header/header.component";
import Footer from "../layout/footer/footer.component";
import Head from "next/head";

// Components
const BlockRenderer = dynamic(() =>
  import("../ui/block-renderer/block-renderer.component")
);

export const Page = (props) => {
  return (
    <>
      <Head>
        <title>TwoZero Creatives</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1"
        />
        <meta name="description" content="TwoZero Creatives" />
      </Head>
      <Header />
      <BlockRenderer blocks={props.blocks} />;
      <Footer />
    </>
  );
};
