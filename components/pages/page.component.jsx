import React from "react";
import dynamic from "next/dynamic";
import Header from "../layout/header/header.component";
import Footer from "../layout/footer/footer.component";

// Components
const BlockRenderer = dynamic(() =>
  import("../ui/block-renderer/block-renderer.component")
);

export const Page = (props) => {
  return (
    <>
      <Header />
      <BlockRenderer blocks={props.blocks} />;
      <Footer />
    </>
  );
};
