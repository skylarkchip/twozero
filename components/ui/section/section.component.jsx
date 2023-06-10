import { Box } from "@chakra-ui/react";
import React from "react";

const Section = ({ children, sectionId }) => {
  return (
    <Box
      my={{ base: "6", md: "4" }}
      py="10"
      minH={{ base: "50vh", md: "40vh", lg: "70vh" }}
      id={sectionId}
    >
      {children}
    </Box>
  );
};

export default Section;
