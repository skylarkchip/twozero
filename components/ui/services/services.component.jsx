import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";

const Services = ({ content }) => {
  return (
    <Accordion w={{ base: "full", md: "60%" }} py="12">
      {content.map((c) => (
        <AccordionItem key={c.id}>
          <AccordionButton py="8" _hover={{ bgColor: "none" }}>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontFamily="primary"
              fontWeight="semibold"
              fontSize="xl"
            >
              {c.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel p="8">
            <Text fontFamily="primary" fontWeight="normal" fontSize="lg">
              {c.description}
            </Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Services;
