import React from "react";
import Section from "../section/section.component";
import { Container, Flex } from "@chakra-ui/react";
import HTMLReactParser from "html-react-parser";

const Columns = ({ children, content }) => {
  const originalContent = HTMLReactParser(content);

  return (
    <Section sectionId={originalContent.props.id ? originalContent.props.id : null}>
      <Container maxW="7xl">
        <Flex gap="12" flexDirection={{ base: "column", md: "row" }}>
          {children}
        </Flex>
      </Container>
    </Section>
  );
};

export default Columns;
