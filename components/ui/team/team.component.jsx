import { Avatar, Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Team = ({ content }) => {
  //   console.log(content);
  return (
    <SimpleGrid
      columns={{ base: "1", md: "2" }}
      gap="6"
      w={{ base: "full", md: "60%" }}
      pt="10"
    >
      {content.map((c) => (
        <VStack key={c.id} spacing="4" py="4">
          <Avatar size="2xl" name={c.name} src={c.image.url} />
          <Text fontFamily="primary" fontWeight="medium" fontSize="lg">
            {c.name}
          </Text>
          <Text fontFamily="primary" textAlign="center">
            {c.description}
          </Text>
        </VStack>
      ))}
    </SimpleGrid>
  );
};

export default Team;
