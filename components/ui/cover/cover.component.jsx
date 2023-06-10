import React from "react";
import Section from "../section/section.component";
import { Box } from "@chakra-ui/react";
import HTMLReactParser from "html-react-parser";

const Cover = ({ children, content }) => {
  const originalContent = HTMLReactParser(content);
  return (
    <Section
      sectionId={originalContent.props.id ? originalContent.props.id : null}
    >
      <Box bgColor="secondary" w="full" py="8">
        {children}
      </Box>
    </Section>
  );
};

export default Cover;
