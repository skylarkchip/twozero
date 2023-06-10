import React from "react";
import { Flex } from "@chakra-ui/react";

const Column = ({ children }) => {
  return (
    <Flex flex="1" flexDirection="column" gap="8" justifyContent="center">
      {children}
    </Flex>
  );
};

export default Column;
