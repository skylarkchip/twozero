import React from "react";
import { Text } from "@chakra-ui/react";
import HTMLReactParser from "html-react-parser";

const Paragraph = ({ content, align }) => {
  return (
    <Text fontFamily="primary" fontSize="xl" textAlign={align}>
      {HTMLReactParser(content)}
    </Text>
  );
};

export default Paragraph;
