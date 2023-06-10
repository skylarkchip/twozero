import { Stack } from "@chakra-ui/react";
import React from "react";

const Group = ({ children, spacing, orientation, justifyContent }) => {
  return (
    <Stack
      direction={orientation === "vertical" ? "column" : "row"}
      spacing={spacing}
      align={justifyContent}
    >
      {children}
    </Stack>
  );
};

export default Group;
